## App: risk-register-with-severity-scoring

**Summary**: A Jira app that lets teams maintain a structured risk register with customizable severity scoring, surfacing risks at both the project and issue level.

---

### Modules
| Module | Key | Title | Purpose |
|--------|-----|-------|---------|
| `jira:globalPage` | `risk-register-dashboard` | Risk Register | Central dashboard listing all risks across projects with severity scores, filters, and status tracking |
| `jira:projectPage` | `project-risk-register` | Project Risks | Per-project risk register scoped to a single project's issues and risks |
| `jira:issuePanel` | `issue-risk-panel` | Risk Details | Panel on the issue view to attach risks to a specific issue, set severity, and view linked risks |
| `jira:adminPage` | `risk-settings` | Risk Settings | Admin page to configure severity scoring matrix (likelihood × impact scales, thresholds, risk categories) |

---

### UI Framework
Custom UI — provides the rich interactive tables, scoring matrix inputs, color-coded severity badges, and chart visualisations that a risk register requires.

---

### Required Scopes
- `read:jira-work` — reading issues, projects, and metadata to associate risks with Jira entities
- `read:jira-user` — resolving assignees and risk owners
- `write:jira-work` — optionally updating issue labels/custom fields to reflect risk status
- `storage:app` — persisting risk entries, severity configurations, and scoring matrices in Forge KVS

---

### Screens
- `GlobalDashboard` — Full risk register across all projects; sortable/filterable table with severity heat-map; hosted by `jira:globalPage`
- `ProjectRiskList` — Scoped risk list for a single project; add/edit/delete risks; hosted by `jira:projectPage`
- `IssueRiskPanel` — Attach existing risks or create new ones directly from an issue; shows severity badge; hosted by `jira:issuePanel`
- `RiskEditModal` — Create/edit risk form (title, description, category, likelihood, impact → auto-calculated severity score); rendered as an overlay within `GlobalDashboard` and `ProjectRiskList`
- `AdminSettings` — Configure scoring scale (1–5 or 1–10), category labels, severity thresholds (low/medium/high/critical), and color mappings; hosted by `jira:adminPage`

---

### Data Model
- **Risk**: `{ id: uuid, title: string, description: string, category: string, likelihood: number, impact: number, severityScore: number (likelihood × impact), status: 'open'|'mitigated'|'closed', ownerId: string, projectKey: string, linkedIssueIds: string[], createdAt: ISO8601, updatedAt: ISO8601 }` — stored in Forge KVS under key `risk:<id>`
- **RiskIndex**: `{ projectKey → riskId[] }` — stored in KVS under `index:project:<projectKey>` for fast per-project lookups; global index under `index:global`
- **IssueRiskMap**: `{ issueKey → riskId[] }` — stored in KVS under `index:issue:<issueKey>` for issue panel lookups
- **ScoringConfig**: `{ scale: number (5|10), categories: string[], thresholds: { low, medium, high, critical }, colors: Record<string,string> }` — stored in KVS under `config:scoring`

---

### API Surface
**Jira REST endpoints called:**
- `GET /rest/api/3/project/search` — populate project selector in global dashboard
- `GET /rest/api/3/issue/{issueIdOrKey}` — fetch issue summary/metadata when linking risks
- `GET /rest/api/3/user/search` — resolve risk owner user picker
- `GET /rest/api/3/myself` — identify current user for default owner assignment

**Forge Resolver functions (frontend ↔ KVS):**
- `getRisks({ projectKey?, issueKey? })` — fetch risk list (global, per-project, or per-issue)
- `getRisk({ id })` — fetch single risk detail
- `createRisk({ payload })` — write new risk to KVS, update indexes
- `updateRisk({ id, payload })` — update existing risk, recalculate severity score
- `deleteRisk({ id })` — remove risk from KVS and all indexes
- `getScoringConfig()` — fetch admin scoring configuration
- `saveScoringConfig({ config })` — persist scoring configuration (admin only)
- `linkRiskToIssue({ riskId, issueKey })` / `unlinkRiskFromIssue({ riskId, issueKey })` — manage issue↔risk associations

---

### Implementation Notes

**Key Jira APIs needed:**
- Project search and issue fetch APIs for entity linking.
- User search for owner assignment.
- No write-back to Jira issues is strictly required; the risk data lives entirely in Forge KVS, keeping the scope minimal.

**Data flow overview:**
```
Custom UI (React)
  └─► Forge bridge (invoke resolver)
        ├─► Forge KVS (risks, indexes, config)
        └─► Jira REST API (projects, issues, users)
```
- The frontend calls resolver functions for all CRUD operations on risks.
- Jira REST calls are made server-side inside resolvers to avoid CORS and to keep tokens secure.
- Severity score is computed server-side as `likelihood × impact` on every create/update.

**Potential complexity & pitfalls:**
- **KVS size limits**: Forge KVS values are capped at 8 KB per key. For large risk registers, the global index key may exceed this. Mitigation: paginate the global index (e.g. `index:global:0`, `index:global:1`) or use `storage.query()` with entity store if available.
- **Forge Entity Store** (if available on the target environment) is preferable to manual KVS indexing for list queries — consider using it for the Risk entity to get built-in pagination and filtering.
- **Admin scope**: The `jira:adminPage` module is only visible to Jira admins; enforce this server-side in the `saveScoringConfig` resolver by checking `context.accountId` against admin role.
- **Issue panel context**: The `jira:issuePanel` module receives `context.extension.issue.key` automatically — no extra API call needed to identify the current issue.
- **Concurrent writes**: KVS has no transactions; implement optimistic locking via `updatedAt` timestamp comparison in resolvers to prevent lost updates.

**Storage requirements:**
- Forge KVS (app-scoped) for all risk data, indexes, and configuration.
- No external database required for MVP.

---

### Open Questions
1. Should risks be **site-wide** (visible across all projects in the global dashboard) or **project-scoped only** (each project has its own isolated register)? *(Default: site-wide with per-project filtering)*
2. Should the severity score use a **fixed 5×5 likelihood/impact matrix** or be fully configurable by admins (custom scales, weighted formulas)? *(Default: fixed 5×5 with admin-configurable threshold labels)*
