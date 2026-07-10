# ICP Profile — Risk Register with Severity Scoring (Jira) — 2025

## Primary ICP: The Compliance-Aware Engineering Org

### Account-Level Profile (Company)

| Dimension | Profile |
|-----------|--------|
| **Industry** | SaaS / software, fintech, healthtech, regulated tech |
| **Company size** | 50–500 employees |
| **Engineering team size** | 10–100 engineers |
| **Jira usage** | Jira Cloud (primary), some Jira Data Center |
| **Tech stack signals** | Jira + Confluence + Slack; likely also GitHub/GitLab |
| **Growth stage** | Series A–C scale-up, or established SMB |
| **Compliance posture** | Pursuing or maintaining ISO 27001, SOC 2, DORA, or GDPR compliance |
| **Risk maturity** | Outgrown spreadsheets; not ready for enterprise GRC |
| **Budget** | $500–$5,000/year for Jira apps; compliance tooling budget exists |

### Situational Triggers (What makes them ready to buy NOW?)

1. **Compliance audit approaching** — auditor has asked for a risk register with evidence trail
2. **Team crossed the 20-person threshold** — "everyone knows the risks" no longer works
3. **Incident post-mortem** — a risk that wasn't tracked caused a real problem
4. **New PM, Engineering Manager, or CTO hired** — new leader wants proper risk process
5. **Jira Cloud migration** — rebuilding tooling stack, evaluating all apps fresh
6. **ISO 27001 / SOC 2 certification project started** — risk register is a checklist item
7. **DORA regulation deadline** — EU financial services teams with Jan 2025 deadline
8. **Board or investor pressure** — investor due diligence requires risk documentation

---

## Buyer Persona 1: The Product Manager / Project Manager

| Dimension | Profile |
|-----------|--------|
| **Title** | Product Manager, Senior PM, Project Manager, Program Manager |
| **Level** | Mid-senior IC or Team Lead |
| **Primary pain** | Risks tracked in a spreadsheet nobody maintains; can't show leadership a current risk picture |
| **Success metric** | Every active project has an up-to-date risk register; risks are linked to Jira issues; no surprises at sprint review |
| **Buying motivation** | Wants to look organized and proactive to leadership |
| **Objections** | "Will the team actually use it?" / "Is setup worth the time?" |
| **Alternatives tried** | Confluence risk table, Excel spreadsheet, Jira labels |
| **Discovery channel** | Atlassian Marketplace search, Atlassian Community, colleague recommendation |

---

## Buyer Persona 2: The Compliance / Security Manager

| Dimension | Profile |
|-----------|--------|
| **Title** | Information Security Manager, Compliance Manager, Risk & Compliance Lead, CISO (at SMB) |
| **Level** | Manager or Director |
| **Primary pain** | Needs audit-ready risk documentation; current process is manual and inconsistent across teams |
| **Success metric** | Pass ISO 27001 / SOC 2 audit with risk register evidence; all risks have owners, scores, and treatment plans |
| **Buying motivation** | Compliance is non-negotiable; needs a tool that produces audit evidence |
| **Objections** | "Where is our data stored?" / "Is this Forge-native?" / "Can we export for auditors?" |
| **Alternatives tried** | Standalone GRC tools (too expensive/complex), spreadsheets (not audit-ready) |
| **Discovery channel** | Google search ("ISO 27001 Jira", "risk register Jira"), Atlassian Marketplace, LinkedIn |

---

## Buyer Persona 3: The Engineering Manager / Tech Lead

| Dimension | Profile |
|-----------|--------|
| **Title** | Engineering Manager, VP Engineering, Tech Lead, Scrum Master |
| **Level** | Manager or Senior IC |
| **Primary pain** | Technical risks (architecture decisions, dependencies, third-party APIs) not visible to stakeholders; risks live in engineers' heads |
| **Success metric** | Technical risks are documented, scored, and linked to the relevant epics/stories; risk exposure visible in sprint planning |
| **Buying motivation** | Wants to surface technical debt and dependency risks before they become incidents |
| **Objections** | "Another tool the team won't use" / "We already have enough Jira fields" |
| **Alternatives tried** | ADRs (Architecture Decision Records) in Confluence, Jira custom fields |
| **Discovery channel** | Reddit r/jira, colleague recommendation, Atlassian Community |

---

## Champion Persona: The Business Analyst / Scrum Master

- Often the day-to-day user who maintains the risk register
- Influences the buying decision by advocating for (or against) the tool
- Cares about: ease of use, Jira-native feel, no extra logins
- Will champion the tool if it saves them time vs. the spreadsheet

---

## Anti-ICP (Who is NOT a good fit)

| Profile | Why not a fit |
|---------|---------------|
| Enterprise (1,000+ employees) with dedicated GRC team | Needs full GRC platform (Archer, Resolver); our app is too lightweight |
| Teams with no Jira usage | Wrong ecosystem entirely |
| Solo freelancers / 1–5 person teams | Risk register overhead not worth it; free Confluence template is sufficient |
| Teams using Jira Server (not Cloud or DC) | Forge-native app won't work; Connect app needed |
| Teams with zero compliance requirements and no PM function | No trigger to buy; risk management is informal |

---

## ICP Summary Card

```
Company:    50–500 person SaaS/tech company using Jira Cloud
            Pursuing or maintaining ISO 27001, SOC 2, or DORA compliance
            Engineering team of 10–100; outgrown spreadsheet risk tracking

Buyer:      PM, Compliance Manager, or Engineering Manager
            Pain: risks not tracked, not linked to Jira, not audit-ready
            Trigger: audit deadline, incident, new hire, Jira migration

Champion:   Business Analyst or Scrum Master who will use it daily

Anti-ICP:   Enterprise GRC buyers, non-Jira teams, solo/micro teams
```
