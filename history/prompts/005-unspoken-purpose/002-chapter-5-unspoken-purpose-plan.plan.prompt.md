---
id: 002
title: Chapter 5 Unspoken Purpose Plan
stage: plan
date: 2025-12-04
surface: agent
model: claude-sonnet-4-5-20250929
feature: 005-unspoken-purpose
branch: 005-unspoken-purpose
user: Alishba Nasir
command: /sp.plan
labels: ["plan", "chapter-5", "purpose-connection", "SEE-CONNECT-RECOGNIZE", "framework-design"]
links:
  spec: specs/005-unspoken-purpose/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - specs/005-unspoken-purpose/plan.md
  - specs/005-unspoken-purpose/research.md
  - specs/005-unspoken-purpose/data-model.md
  - specs/005-unspoken-purpose/quickstart.md
  - specs/005-unspoken-purpose/contracts/unspoken-purpose-schema.md
tests:
  - N/A (planning document - validation contracts created for future implementation testing)
---

## Prompt

```text
/sp.plan
```

## Response snapshot

Executed complete planning workflow for Chapter 5: The Unspoken Purpose, generating research findings, data model, validation contracts, and writer's quickstart guide. Planning resolved all design decisions for implementing purpose-connection technique teaching readers to link mundane daily actions to higher purpose/legacy.

**Planning Phases Completed**:

**Phase 0: Research** - Resolved 5 critical design questions:
1. **Unspoken Purpose Definition**: Values/impact already guiding life (family, creativity, service, learning, presence)—not requiring grand mission statement; observable in what readers protect
2. **Framework Structure Decision**: SEE-CONNECT-RECOGNIZE chosen over P-R-A and A-L-L alternatives because simple, memorable 3-step pattern with action verbs; each step <30 seconds
3. **Metaphor Selection**: SEE = waking mid-routine (autopilot awareness), CONNECT = finding thread (connection exists), RECOGNIZE = drops filling cup (compounding small actions)
4. **Concrete Examples**: 4 diverse scenarios with full breakdown (morning coffee → presence/self-care, work email → service/reliability, evening dishes → family/welcoming home, bedtime routine → connection/learning)
5. **Edge Case Solutions**: Readers lacking purpose (start with what they protect), actions conflicting with purpose (distinguish task from reason), survival mode (acknowledge endurance seasons), intimidating legacy language (use "impact" instead)

**Phase 1: Design & Contracts** - Created implementation artifacts:
1. **Data Model**: Complete SEE-CONNECT-RECOGNIZE structure with name/metaphor/why/how/example components for each step; content structure map with word budget allocation (Hook 50-75w, SEE 75-85w, CONNECT 75-85w, RECOGNIZE 75-85w, Actions 100-150w, Closing 25-50w = 500w total)
2. **Validation Contract**: 3 quality gates (Constitutional Compliance 17 checks, Structural Requirements 15 checks, Functional Requirements 13 checks) + Success Criteria validation (10 post-delivery tests); total 55 validation checks before approval
3. **Quickstart Guide**: 10-step writer's process with templates, validation checkpoints, common pitfalls, SEE-CONNECT-RECOGNIZE template structure

**Key Design Decisions**:
- Framework naming: SEE (notice task) → CONNECT (ask how it serves values) → RECOGNIZE (acknowledge legacy-building)
- Purpose-connection technique: Brief pause during task (5-10 sec) → question "How does this serve what I value?" → recognition of compounding impact
- Legacy reframe: Built through thousands of small daily choices aligned with values, not occasional big moments or achievements
- Tool-free approach: Mindful awareness sufficient (no journals, vision boards, life coaches, meditation apps required)
- Accessible language: 8th-grade level (Flesch-Kincaid 7-9), no jargon ("authentic self", "soul's calling", "manifest destiny"), concrete metaphors only

**Constitutional Compliance**: All 4 principles passing (Tone: positive/motivational reframing routine as opportunity; Style: simple 8th-grade vocabulary with scannable format; Knowledge: actionable 5-minute tool-free implementation; Length: ≤500 words with defined structure)

## Outcome

- ✅ Impact: Complete, validated implementation plan ready for task generation phase; all design decisions resolved through research; 3-gate validation system ensures quality; writer's quickstart guide enables systematic content creation
- 🧪 Tests: Validation contracts define 55 pre-delivery checks (constitutional, structural, functional) + 10 post-delivery success criteria tests (comprehension, application, engagement)
- 📁 Files: plan.md (technical context + constitution check + phase summaries), research.md (framework decision + examples + edge cases), data-model.md (complete structure + word budgets + validation mapping), quickstart.md (10-step writer's guide), contracts/unspoken-purpose-schema.md (3 quality gates + success criteria)
- 🔁 Next prompts: Ready for /sp.tasks to generate actionable task list with acceptance criteria for Chapter 5 implementation
- 🧠 Reflection: Planning phase successfully resolved all ambiguity in Chapter 5 requirements by choosing SEE-CONNECT-RECOGNIZE framework over alternatives (memorable pattern, natural flow, emphasizes legacy-building); 4 concrete examples (morning coffee, work email, evening dishes, bedtime routine) provide diverse relatable scenarios demonstrating technique application; validation contract with 55 checks ensures chapter meets constitutional principles (positive tone, simple style, actionable knowledge, ≤500 words) and all functional requirements (FR-001 to FR-013); quickstart guide reduces implementation uncertainty by providing step-by-step templates, word-count checkpoints, and common pitfalls; edge case solutions (readers lacking purpose, actions conflicting with values, survival mode, intimidating legacy language) ensure chapter accessible to diverse reader situations; tool-free mindful awareness approach maintains constitutional simplicity while enabling 5-minute purpose identification and action connection; Phase 0 research resolved "what is unspoken purpose?" (values already guiding life) and "how to structure technique?" (3-step pattern); Phase 1 design created complete content map with word budget allocation ensuring 500-word target achievable; ready for task generation to break implementation into specific, testable content creation steps

## Evaluation notes (flywheel)

- Failure modes observed: None; planning workflow completed successfully with all design artifacts generated and validated against constitutional principles
- Graders run and results (PASS/FAIL): Constitution Check PASS (all 4 principles satisfied—Tone: positive/empowering, Style: simple 8th-grade level, Knowledge: actionable tool-free 5-minute implementation, Length: ≤500 words); Validation contract created with 3-gate system (55 total checks) for future implementation grading
- Prompt variant (if applicable): N/A (standard /sp.plan workflow execution following template pattern)
- Next experiment (smallest change to try): Monitor if SEE-CONNECT-RECOGNIZE naming resonates with content writer or if alternative verbs needed (e.g., NOTICE-LINK-BUILD); test if 4 examples sufficient for writer understanding or if additional scenarios helpful; evaluate if word budget allocation (50-75w hook, 75-85w per step, 100-150w actions, 25-50w closing) proves realistic during drafting or requires adjustment; assess whether 3-step "How" processes for each framework step (SEE: pause/name/no-analysis, CONNECT: ask/think/find-link, RECOGNIZE: acknowledge/recognize/no-pressure) provide enough guidance or if writers need more specificity; verify that metaphors (waking mid-routine, finding thread, drops filling cup) translate clearly in prose or if concrete visual descriptions needed; confirm 10-step quickstart process manageable or if writers skip steps and need streamlined checklist version
