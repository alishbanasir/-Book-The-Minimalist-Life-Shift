---
id: 002
title: Chapter 4 Rapid Mastery Plan
stage: plan
date: 2025-12-03
surface: agent
model: claude-sonnet-4-5-20250929
feature: 004-rapid-mastery
branch: 004-rapid-mastery
user: Alishba Nasir
command: /sp.plan
labels: ["plan", "chapter-4", "20-hour-rule", "research", "design", "contracts"]
links:
  spec: specs/004-rapid-mastery/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - specs/004-rapid-mastery/plan.md
  - specs/004-rapid-mastery/research.md
  - specs/004-rapid-mastery/data-model.md
  - specs/004-rapid-mastery/contracts/rapid-mastery-schema.md
  - specs/004-rapid-mastery/quickstart.md
tests:
  - N/A (planning document)
---

## Prompt

```text
/sp.plan
```

## Response snapshot

Created comprehensive implementation plan for Chapter 4: The Art of Rapid Mastery with complete research, data model, validation contracts, and quickstart guide for the "20-Hour Rule" technique.

**Phase 0: Research Completed**:

1. **Framework Naming Decision**: Selected **DECONSTRUCT-LEARN-REMOVE-PRACTICE** pattern
   - Clear, specific action verbs for each step
   - Natural analytical flow (analyze → acquire → clear → execute)
   - "Deconstruct" better than "Break" or "Simplify" for capturing analytical first step
   - "Remove barriers" emphasizes proactive obstacle elimination
   - "Practice deliberately" distinguishes from passive repetition

2. **20-Hour Rationale Established**:
   - **Goldilocks Zone**: Not too little (5-10h = no progress), not too much (100h+ = intimidating)
   - **Real-World Translation**: 30-45 min/day = 3-4 weeks (achievable commitment)
   - **Empirical Basis**: Josh Kaufman's 20-Hour Rule research showing basic competence threshold
   - **Psychology**: Humans can commit to 20 hours; can't commit to "years of practice"

3. **Competence vs. Mastery Distinction** (critical framing):
   - 20 hours = **basic functional skill** (can use, enjoy, keep improving)
   - 10,000 hours = **world-class mastery** (expert-level performance)
   - Clear messaging prevents unrealistic expectations and "I'm not good enough" feelings

4. **Metaphor Selection** (concrete, relatable):
   - **DECONSTRUCT**: Recipe analogy (cooking dinner = prepare ingredients, not doing everything at once)
   - **LEARN**: Driving directions (need route to destination, not map of entire country)
   - **REMOVE**: Desk clearing (clutter doesn't prevent work, but removing makes starting effortless)
   - **PRACTICE**: Weight lifting (progressive overload with proper form builds muscle, not random exercise)

5. **Skill Examples** (4 diverse domains):
   - **Language**: Conversational Spanish (vocabulary, pronunciation, grammar, conversation)
   - **Musical**: Basic guitar (chord shapes, strumming, transitions, simple songs)
   - **Technical**: Build website (HTML structure, CSS styling, publishing)
   - **Creative**: Sketch portraits (proportions, shading, line quality, references)

6. **Edge Case Strategies**:
   - Skills requiring more/less time (adjust hours, keep 4-step structure)
   - Limited time availability (30 min/day = 40 days; alternative is never starting)
   - Equipment/teacher needs (addressed in Step 3 with free/cheap solutions)
   - Unrealistic expectations (emphasize deliberate practice vs. passive repetition)

**Phase 1: Design & Contracts Completed**:

1. **Data Model Created** ([data-model.md](../../specs/004-rapid-mastery/data-model.md)):
   - Core Entities: 20-Hour Rule Technique definition, Core Philosophy, Framework Components
   - Framework Structure: All 4 steps with Name, Metaphor, Why, How, Example components
   - Content Structure Map: 500-word budget allocation (Hook 50-75w, 4 steps 60-75w each, Actions 100-150w, Closing 25-50w)
   - Skill Deconstruction Examples: Complete breakdowns of Spanish, guitar, website, sketching
   - Validation Requirements: 3-gate system mapping, Success Criteria alignment

2. **Validation Contracts Created** ([contracts/rapid-mastery-schema.md](../../specs/004-rapid-mastery/contracts/rapid-mastery-schema.md)):
   - **98 total checkboxes** across 3 gates
   - **Gate 1**: Constitutional Compliance (28 items—positive tone, simple style, actionable knowledge, focused length)
   - **Gate 2**: Structural Requirements (23 items—4-part structure, all 4 steps with metaphors and examples)
   - **Gate 3**: Functional Requirements (13 items—FR-001 to FR-013 from spec.md)
   - **Success Criteria Validation**: 9 items (SC-001 to SC-009 reader testing)
   - **Edge Case Handling**: 4 items (complexity, expectations, time, resources)
   - **Quality Bar**: 98/98 (100%) must pass before publication

3. **Quickstart Guide Created** ([quickstart.md](../../specs/004-rapid-mastery/quickstart.md)):
   - **10-step writing process** with templates and examples for each section
   - **Word budget tracker** to prevent overwriting (monitors each section against target)
   - **Section drafting templates** (Steps 2-8) with required components, examples, and checkpoints
   - **Validation process** (Step 9) linking to all 98 quality gate checkboxes
   - **Final polish** (Step 10) with readability, tone, and accuracy passes
   - **Common pitfalls** identified with solutions (exceeding word limit, abstract language, jargon, missing metaphors, vague actions, negative tone)
   - **Success indicators**: Ready-to-publish checklist
   - **Estimated Writing Time**: 2-4 hours (including revisions)

**Technical Context Updated**:
- Content creation project (not software development)
- Main deliverable: Single Markdown file (`content/chapters/chapter-4-rapid-mastery.md`)
- Tools: Text editor with word count, readability checker (hemingwayapp.com)
- Constraints: ≤500 words, 8th-grade reading level (Flesch-Kincaid 7-9), tool-free implementation

**Constitution Check**: ✅ All 4 principles passing
- Principle I (Positive Tone): Skill learning as empowering, not dwelling on failures
- Principle II (Simple Style): 8th-grade level, no jargon, scannable format
- Principle III (Actionable): Implementable in 1 hour, no apps/courses required
- Principle IV (Focused Length): ≤500 words with defined structure

## Outcome

- ✅ Impact: Complete planning phase with research, design artifacts, validation contracts, and implementation guide ready for task generation
- 🧪 Tests: 98-item validation contract ensures quality; Success Criteria (SC-001 to SC-009) defined for user testing
- 📁 Files: plan.md (updated with Phase 0 & 1 summaries), research.md, data-model.md, contracts/rapid-mastery-schema.md, quickstart.md
- 🔁 Next prompts: Ready for `/sp.tasks` to generate task breakdown; then `/sp.implement` to create chapter content
- 🧠 Reflection: DECONSTRUCT-LEARN-REMOVE-PRACTICE framework creates clear, actionable structure; 20-hour rationale (Goldilocks zone) addresses skill-learning paralysis; 4 metaphors make abstract concepts concrete; 98-item validation contract ensures constitutional compliance and quality; quickstart guide provides detailed implementation path for content writers; all artifacts align with successful Chapter 1-3 patterns while adapting for skill acquisition domain

## Evaluation notes (flywheel)

- Failure modes observed: None; planning completed successfully with all required artifacts
- Graders run and results (PASS/FAIL): Constitutional compliance PASS (all 4 principles satisfied), Validation contract completeness PASS (98 checkboxes across 3 gates), Data model coverage PASS (all framework components defined)
- Prompt variant (if applicable): N/A (standard /sp.plan execution following template workflow)
- Next experiment (smallest change to try): Monitor if 98-item validation contract feels too exhaustive for writers (may need to streamline to critical checkboxes) or if comprehensive validation prevents quality issues; test if 10-step quickstart guide with templates accelerates content creation or if writers prefer more freedom; consider if 4 skill examples (Spanish, guitar, website, sketching) provide sufficient diversity or if readers want domain-specific examples (business skills, physical skills, social skills); evaluate if DECONSTRUCT-LEARN-REMOVE-PRACTICE naming is memorable or if readers struggle to recall steps (alternative: create acronym like DLRP or mnemonic device)
