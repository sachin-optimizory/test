# Competitor Map — Risk Register with Severity Scoring (Jira) — 2025

## Competitive Landscape Overview

The Jira risk register space sits at the intersection of **project risk management** and **Jira workflow tooling**. Competitors fall into three tiers:

1. **Jira-native Marketplace apps** (direct competitors)
2. **Standalone GRC / risk management platforms** (indirect — enterprise segment)
3. **Generic project management tools with risk templates** (indirect — SMB segment)

---

## Tier 1: Jira Marketplace Direct Competitors

### Competitor 1: Risk Register for Jira (by Appfire / formerly Salto / various publishers)
- **Positioning**: "Manage project risks directly in Jira"
- **Primary audience**: Project managers using Jira Software
- **Claims**: Risk matrix, issue linking, risk status tracking
- **Proof shown**: Install count, basic screenshots
- **Pricing signals**: Per-user Marketplace pricing (Cloud + DC)
- **Weak spots (from reviews)**:
  - "Scoring is too basic — just High/Medium/Low, no numeric formula"
  - "No cross-project dashboard"
  - "UI feels dated, hard to configure"
  - "Support response is slow"
- **Traffic channels**: Marketplace organic, Atlassian partner network
- **Platform**: Connect (not Forge) — data residency gap

### Competitor 2: Risk Management for Jira (by Ricksoft)
- **Positioning**: "Visualize and manage project risks in Jira with a risk matrix"
- **Primary audience**: PMO teams, project managers
- **Claims**: Heat map visualization, risk matrix, Jira issue integration
- **Proof shown**: Heat map screenshot, install numbers
- **Pricing signals**: Tiered by user count, free trial
- **Weak spots (from reviews)**:
  - "Limited to per-project view — no portfolio risk roll-up"
  - "Can't customize the scoring formula"
  - "No automated notifications when risk score changes"
  - "Reporting is weak — can't export to PDF/Excel easily"
- **Traffic channels**: Marketplace organic, Japanese market presence (Ricksoft is Japan-based)
- **Platform**: Connect

### Competitor 3: Issue Risk Assessment (smaller publisher)
- **Positioning**: Risk scoring at the issue level
- **Primary audience**: Scrum teams wanting per-issue risk flags
- **Claims**: Adds risk fields to any Jira issue type
- **Proof shown**: Minimal
- **Pricing signals**: Low-cost / freemium
- **Weak spots**: No register view, no dashboard, purely field-level
- **Platform**: Connect

### Competitor 4: ProRisk / Risk Tracker apps (various)
- **Positioning**: Varies — mostly "simple risk log in Jira"
- **Primary audience**: Small teams
- **Claims**: Basic CRUD risk register
- **Weak spots**: No scoring sophistication, no compliance features, low install counts
- **Platform**: Mix of Connect and older

---

## Tier 2: Standalone GRC Platforms (Indirect)

### Resolver
- **Positioning**: Enterprise risk management platform
- **Audience**: Enterprise GRC teams, CISOs
- **Gap vs. our app**: No Jira integration, requires separate login, $50K+ ACV, overkill for dev teams

### LogicGate
- **Positioning**: Agile GRC platform
- **Audience**: Compliance and risk teams
- **Gap**: Same as Resolver — not Jira-native, enterprise pricing

### Archer (RSA)
- **Positioning**: Enterprise GRC
- **Gap**: Legacy, expensive, no Jira integration

---

## Tier 3: Generic PM Tools (Indirect)

### Monday.com Risk Template
- **Gap**: Not connected to Jira backlog, duplicate data entry required

### Asana Risk Register Template
- **Gap**: Same — separate tool, no Jira linking

---

## Positioning Gap Analysis

### Claims NO competitor currently makes (Opportunities to own):
1. **"Forge-native risk register"** — all current Marketplace leaders are Connect apps; Forge = data residency + Atlassian-hosted security story
2. **"Configurable scoring formula"** — every competitor uses fixed High/Medium/Low or a locked 5×5 matrix; custom-weighted likelihood × impact is unclaimed
3. **"Cross-project risk roll-up dashboard"** — no current app offers portfolio-level risk visibility natively
4. **"Automated escalation when risk score crosses threshold"** — no competitor mentions this
5. **"Residual risk scoring after mitigation"** — gap in every current listing
6. **"Audit-ready export with timestamps"** — compliance angle is underserved in current listings

### Claims EVERY competitor makes (Table Stakes — don't lead with these):
- "Manage risks in Jira"
- "Risk matrix / heat map"
- "Link risks to Jira issues"
- "Risk status tracking (Open/Closed/Mitigated)"

### Audiences NO competitor explicitly targets:
- **Compliance-driven teams** (ISO 27001, SOC 2, DORA) — huge underserved segment
- **PMO / portfolio managers** needing cross-project roll-up
- **Engineering managers** at scale-ups (50–500 person eng orgs) who need risk visibility without a full GRC tool
