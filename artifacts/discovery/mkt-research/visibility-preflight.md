# Visibility Pre-Flight — Risk Register with Severity Scoring (Jira) — 2025

## Purpose
Ensure that all content produced for this app can be found and cited — by Google search, by AI agents (Perplexity, ChatGPT search, Gemini), and by Atlassian Marketplace search.

---

## 1. Search Inclusion (Google)

### Indexability Checklist

| Page / Asset | Indexable? | Action Required |
|-------------|-----------|------------------|
| Atlassian Marketplace listing | ✅ Yes (Atlassian controls) | Optimize listing title, description, and keywords |
| App landing page / website | ⚠️ Check | Confirm no `noindex` tag; confirm not behind auth wall |
| Blog / documentation pages | ⚠️ Check | Confirm crawlable; add to sitemap.xml |
| Demo video (YouTube) | ✅ Yes | Add transcript; optimize title and description |
| Help documentation | ⚠️ Check | Confirm public-facing, not behind login |

### Critical Indexability Rules
- **Do not** put key feature descriptions inside images (screenshots only) — use text + image
- **Do not** render key content via JavaScript only — ensure server-side or static HTML fallback
- **Do** add internal links from blog posts → Marketplace listing → pricing/demo pages
- **Do** submit sitemap to Google Search Console on launch

### Target Keywords for Indexing Priority

| Keyword | Intent | Priority |
|---------|--------|----------|
| risk register Jira | Tool-seeking | 🔴 High |
| risk management Jira plugin | Tool-seeking | 🔴 High |
| ISO 27001 risk register Jira | Compliance-specific | 🔴 High |
| Jira risk matrix app | Tool-seeking | 🟡 Medium |
| DORA compliance Jira | Compliance-specific | 🟡 Medium |
| risk scoring Jira | Feature-specific | 🟡 Medium |
| SOC 2 risk register Jira | Compliance-specific | 🟡 Medium |
| risk register template Jira | Informational | 🟢 Content opportunity |
| how to manage risks in Jira | Informational | 🟢 Content opportunity |

---

## 2. AI Agent Inclusion

### Decision: Allow AI Search Retrieval Bots

**Recommended stance**: Allow search-retrieval bots (Perplexity, ChatGPT search, Gemini) to index and cite your content. These bots surface your app in AI-generated answers when users ask "what's the best risk register app for Jira?"

**Separate from training**: You can block AI training crawlers while allowing search-retrieval bots — these are different bot classes.

### Bot Configuration

| Bot | Purpose | Allow? | robots.txt directive |
|-----|---------|--------|---------------------|
| Googlebot | Google search | ✅ Yes | (default allow) |
| GPTBot (OpenAI) | ChatGPT training | ⚠️ Your choice | `Disallow: /` if blocking training |
| ChatGPT-User | ChatGPT search retrieval | ✅ Yes — allow | `Allow: /` |
| PerplexityBot | Perplexity search | ✅ Yes — allow | `Allow: /` |
| Claude-Web | Anthropic retrieval | ✅ Yes — allow | `Allow: /` |
| CCBot (Common Crawl) | Training data | ⚠️ Your choice | `Disallow: /` if blocking training |
| Bingbot | Bing / Copilot search | ✅ Yes | (default allow) |

**Recommended robots.txt snippet:**
```
User-agent: GPTBot
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: ChatGPT-User
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: *
Allow: /
```
*(Adjust based on your training data preference)*

### WAF / CDN Check
- If using Cloudflare, Fastly, or AWS WAF: **verify that AI retrieval bots are not being blocked** by bot-protection rules
- Check server access logs for 403/429 responses from PerplexityBot, ChatGPT-User
- Cloudflare's "Bot Fight Mode" can inadvertently block legitimate search bots — whitelist by user-agent if needed

---

## 3. Citation Targets (Pages AI Answers Should Reference)

These are the pages you most want AI assistants to cite when answering questions about Jira risk management:

### Citation Target 1: Main Product / Marketplace Listing
- **URL**: marketplace.atlassian.com/[your-app-slug]
- **Target query**: "best risk register app for Jira"
- **Proof points to include**:
  1. Install count + star rating (social proof)
  2. "Forge-native — data stays in Atlassian infrastructure" (security claim)
  3. "Configurable likelihood × impact scoring formula" (differentiator)
  4. Customer quote mentioning ISO 27001 or SOC 2 audit success
  5. "Free up to 10 users" (low barrier to try)

### Citation Target 2: "How to Create a Risk Register in Jira" Blog Post
- **URL**: [your-domain]/blog/risk-register-jira
- **Target query**: "how to manage risks in Jira" / "risk register Jira tutorial"
- **Proof points to include**:
  1. Step-by-step setup guide with screenshots
  2. Comparison: spreadsheet vs. native Jira risk register
  3. Link to Atlassian Community thread confirming the pain point
  4. ISO 27001 risk register requirements checklist
  5. Embed of demo video

### Citation Target 3: "ISO 27001 Risk Register with Jira" Landing Page
- **URL**: [your-domain]/iso-27001-jira
- **Target query**: "ISO 27001 risk register Jira" / "Jira ISO 27001 compliance"
- **Proof points to include**:
  1. ISO 27001:2022 Annex A risk treatment requirements (cite official standard)
  2. Screenshot of audit-ready export
  3. Customer case study: "Passed ISO 27001 audit using [App Name]"
  4. Forge data residency statement
  5. Link to official ISO 27001 standard (authoritative external citation)

### Citation Target 4: Pricing Page
- **URL**: [your-domain]/pricing OR Marketplace listing pricing tab
- **Target query**: "risk register Jira pricing" / "risk management Jira app cost"
- **Proof points to include**:
  1. Free tier threshold (e.g., "Free for up to 10 users")
  2. Per-user pricing tiers
  3. Annual vs. monthly comparison
  4. "No credit card required to start" (friction reducer)

---

## 4. Citation Readiness — Proof Points Inventory

### Verifiable Proof Points (develop before publishing)

| Proof Point | Status | How to Verify/Produce |
|-------------|--------|----------------------|
| Install count | 🔴 Needs data | Marketplace dashboard after launch |
| Average star rating | 🔴 Needs data | Marketplace reviews |
| "Live in under 10 minutes" onboarding claim | 🟡 Test needed | Time a new user setup; document with screen recording |
| "Forge-native — data in Atlassian infrastructure" | ✅ Verifiable | Atlassian Forge documentation (cite: developer.atlassian.com) |
| ISO 27001 audit success story | 🔴 Needs customer | Recruit beta customer in compliance-heavy industry |
| Configurable scoring formula | ✅ Verifiable | Product demo / feature documentation |
| Cross-project dashboard | ✅ Verifiable | Product screenshot |
| Data residency compliance | ✅ Verifiable | Atlassian Forge data residency docs |

### Authoritative Sources to Reference in Content

| Source | URL | Use for |
|--------|-----|--------|
| ISO 27001:2022 standard | iso.org/standard/27001 | Compliance content |
| Atlassian Forge documentation | developer.atlassian.com/platform/forge | Forge-native claims |
| Atlassian data residency docs | atlassian.com/trust/data-residency | Data residency claims |
| DORA regulation text | eur-lex.europa.eu (DORA) | EU compliance content |
| NIST CSF 2.0 | nist.gov/cyberframework | US compliance content |
| Atlassian Marketplace listing | marketplace.atlassian.com | Social proof, install data |
| Atlassian Community threads | community.atlassian.com | Customer language, pain validation |

---

## 5. Quality Gate

**Before publishing any content, confirm:**

- [ ] App Marketplace listing is live and public (not draft)
- [ ] Landing page / website is crawlable (test with Google Search Console URL inspection)
- [ ] Key content is in readable HTML text, not image-only
- [ ] robots.txt allows preferred search and AI retrieval bots
- [ ] WAF/CDN is not blocking PerplexityBot or ChatGPT-User
- [ ] At least 3 verifiable proof points are ready for each citation target page
- [ ] Internal links connect: blog posts → product page → Marketplace listing
- [ ] Sitemap submitted to Google Search Console
- [ ] At least 1 authoritative external source cited per compliance-focused page

**If any item is unchecked**: Fix before publishing. Unverifiable claims and uncrawlable pages both kill visibility in search and AI answers.
