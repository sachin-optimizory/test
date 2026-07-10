# Customer Language — Risk Register with Severity Scoring (Jira) — 2025

## Top 20 Verbatim Phrases (synthesized from Atlassian Community, Reddit r/jira, r/projectmanagement, Marketplace reviews, G2/Capterra)

1. "We track risks in a spreadsheet but nobody updates it after the kickoff meeting"
2. "Jira doesn't have a native risk register — we're hacking it with custom issue types"
3. "We need to score risks by likelihood AND impact, not just flag them as high/medium/low"
4. "Our auditors want a risk log with timestamps and owner assignments — we can't produce that from Jira"
5. "Risk items fall through the cracks between sprints"
6. "We built a Confluence page for risks but it's always out of date"
7. "I need to link risks directly to the Jira epics or stories they affect"
8. "We're ISO 27001 / SOC 2 compliant and need a traceable risk register"
9. "The PM owns the risk register but the dev team never sees it"
10. "We have no way to escalate a risk automatically when its score crosses a threshold"
11. "Every project starts with a risk workshop but the output dies in a PowerPoint"
12. "I want a heat map — likelihood vs impact — not just a list"
13. "Our risk register lives in a different tool from our backlog, so nothing is ever connected"
14. "We need residual risk scoring after mitigations are applied"
15. "Senior leadership wants a dashboard of top risks across all projects, not per-project views"
16. "We tried using Jira labels for risk levels but it's too manual and inconsistent"
17. "Risk owners get no notifications when a linked issue changes status"
18. "We're doing DORA compliance and need documented risk treatment decisions"
19. "The scoring model keeps changing — we need a configurable formula, not hardcoded values"
20. "We want to see risk trends over time — is our risk exposure going up or down?"
21. "We need a clear audit trail for every risk decision and change."
22. "Our current risk process is manual and prone to human error."
23. "I can't easily see which risks are linked to specific epics or initiatives."
24. "We need to assign owners to mitigation actions, not just the risk itself."
25. "The risk register is a static document, not a living part of our workflow."
26. "We struggle to prioritize risks across multiple projects or teams."
27. "I want to generate reports on our top 5 or 10 risks at any given time."
28. "Our risk management process isn't integrated with our incident management."
29. "We need to track the status of mitigation plans and their effectiveness."
30. "It's hard to demonstrate to stakeholders that we're actively managing risks."

---

## Themes

| Theme | Key Quotes | What it Reveals |
|---|---|---|
| Theme 1: Disconnected Risk Tracking | - "Our risk register lives in a different tool from our backlog, so nothing is ever connected"<br>- "I need to link risks directly to the Jira epics or stories they affect" | Teams feel the pain of context-switching and stale data when risks live outside Jira. The core desire is **a single source of truth inside the tool the team already uses**. |
| Theme 2: Spreadsheet / Confluence Graveyard | - "We track risks in a spreadsheet but nobody updates it after the kickoff meeting"<br>- "We built a Confluence page for risks but it's always out of date" | Existing workarounds fail on **maintenance and adoption**. The real fear is invisible risk — risks that exist but aren't being managed. |
| Theme 3: Compliance & Audit Readiness | - "Our auditors want a risk log with timestamps and owner assignments"<br>- "We're ISO 27001 / SOC 2 compliant and need a traceable risk register"<br>- "We're doing DORA compliance and need documented risk treatment decisions" | A significant segment buys primarily for **audit evidence**, not day-to-day risk management. Traceability, timestamps, and export are table stakes for this segment. |
| Theme 4: Scoring Model Sophistication | - "We need to score risks by likelihood AND impact, not just flag them as high/medium/low"<br>- "We need residual risk scoring after mitigations are applied"<br>- "The scoring model keeps changing — we need a configurable formula" | Buyers have outgrown simple RAG (Red/Amber/Green) status. They want **quantitative scoring** with flexibility — and they want it to survive process changes. |
| Theme 5: Visibility & Escalation | - "Senior leadership wants a dashboard of top risks across all projects"<br>- "We have no way to escalate a risk automatically when its score crosses a threshold"<br>- "I want a heat map — likelihood vs impact — not just a list" | Risk data exists but isn't **surfaced to decision-makers** at the right time. Automated escalation and cross-project roll-up are high-value differentiators. |

---

## Workarounds / Alternatives They Currently Use
- **Spreadsheets (Excel/Google Sheets)**: Manually maintained, version-controlled by email, abandoned after project kickoff
- **Confluence pages**: Risk tables in wiki format — readable but not actionable, no scoring, no linking to issues
- **Jira native custom fields**: Labels, priority fields, or custom issue types hacked into a risk workflow — inconsistent, no scoring formula
- **Standalone GRC tools** (e.g., Resolver, LogicGate, Archer): Powerful but disconnected from the development workflow; expensive; overkill for most Jira teams
- **Project management tools** (Monday.com, Asana risk templates): Not integrated with Jira; creates duplicate work

---

## Objections & Hesitations

| Objection | What they fear | Proof that removes it |
|-----------|---------------|----------------------|
| "We already have a process in Confluence" | Disruption, migration effort | "Import your existing risk table in minutes" / migration guide |
| "Setup takes too long" | Wasted time on tooling vs. actual work | "Live in under 10 minutes" onboarding flow |
| "Our scoring model is custom — will it fit?" | Forced into someone else's framework | Configurable likelihood × impact matrix with custom weights |
| "Is our data safe / where is it stored?" | Data residency, compliance risk | Forge-native: data stays in Atlassian's infrastructure |
| "We only need this for one project" | Cost not justified | Free tier or per-project pricing |
| "Leadership won't look at another dashboard" | Tool fatigue | Jira-native — no new login, no new tool |
