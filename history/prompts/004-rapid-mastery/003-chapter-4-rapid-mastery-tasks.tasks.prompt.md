---
id: 003
title: Chapter 4 Rapid Mastery Tasks
stage: tasks
date: 2025-12-03
surface: agent
model: claude-sonnet-4-5-20250929
feature: 004-rapid-mastery
branch: 004-rapid-mastery
user: Alishba Nasir
command: /sp.tasks
labels: ["tasks", "chapter-4", "20-hour-rule", "content-creation", "user-stories"]
links:
  spec: specs/004-rapid-mastery/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - specs/004-rapid-mastery/tasks.md
tests:
  - Manual validation with 98-checkbox quality contract (contracts/rapid-mastery-schema.md)
  - Success Criteria testing with real readers (SC-001 to SC-009)
---

## Prompt

```text
/sp.tasks
```

## Response snapshot

Generated comprehensive task breakdown for Chapter 4: The Art of Rapid Mastery with 63 tasks organized by user story (P1, P2, P3), enabling independent implementation and validation of each content requirement.

**Task Organization Structure**:

**Phase 1: Setup (3 tasks)**
- T001: Create chapter file with structure
- T002: Set up word budget tracker
- T003: Prepare readability checker and word counter

**Phase 2: Foundational (6 tasks)**
- T004: Draft Opening Hook (50-75 words)
- T005-T008: Draft all 4 core sections in parallel (DECONSTRUCT, LEARN, REMOVE, PRACTICE)
- T009: Validate core teaching sections (250-300 words)

**Phase 3: User Story 1 - Reader Learns 20-Hour Rule Technique (12 tasks)**
- **Goal**: Enable reader to understand and apply all 4 steps to create 20-hour skill plan
- **Independent Test**: Reader can apply all 4 steps and explain why 20 hours is sufficient
- T010-T013: Verify all section examples (Spanish, guitar) - parallelizable
- T014-T016: Ensure metaphors, rationale, and concrete examples present
- T017-T019: Run Gate 1, 2, 3 validations - parallelizable
- T020: Verify word count ≤500 words
- T021: Test comprehension with 8th-grade reader

**Phase 4: User Story 2 - Reader Overcomes Skill Acquisition Paralysis (12 tasks)**
- **Goal**: Transform belief from "skills take too long" to "I can do this in 20 hours"
- **Independent Test**: Reader feels capable and can explain how 20-Hour Rule is achievable
- T022: Draft Action Steps section (100-150 words)
- T023-T026: Ensure all 4 action steps present - parallelizable
- T027-T028: Add positive language and scannable format
- T029-T031: Run Gate 3 validations (FR-005, FR-006, FR-008) - parallelizable
- T032-T033: Test motivation and plan creation within 1 hour

**Phase 5: User Story 3 - Reader Implements Simple, Practical Skill Plan (15 tasks)**
- **Goal**: Enable 8th-grade reader to grasp concept in 2-minute scan and create plan in 5 minutes with only paper
- **Independent Test**: 8th-grade reader needs no dictionary, can create plan within 5 minutes using paper
- T034: Draft Closing section (25-50 words)
- T035-T039: Verify simple vocabulary, no jargon, tool-free, 4-part structure, empowering closing - parallelizable
- T040-T045: Run Flesch-Kincaid test and Gate 3 validations (FR-007, FR-009, FR-011-013) - parallelizable
- T046-T048: Test scan time, 8th-grade comprehension, paper-only plan creation

**Phase 6: Polish & Cross-Cutting Concerns (15 tasks)**
- T049-T051: Run complete Gate 1, 2, 3 validations (all checkboxes) - parallelizable
- T052: Verify total word count ≤500 words (hard limit)
- T053-T059: Quality passes (readability, tone, flow, sentence length, accuracy) - parallelizable
- T060-T063: Success Criteria validation, Edge Case validation, Final Checklist, 98/98 checkboxes passing

**Key Design Decisions**:

1. **Sequential User Story Execution** (recommended): US1 → US2 → US3
   - Content creation benefits from building on previous work
   - US2 (Action Steps) requires US1 (framework) to be complete
   - US3 (Closing/accessibility) validates entire chapter

2. **Parallel Opportunities**: 35 tasks marked [P] (56% parallelizable)
   - All 4 core sections (T005-T008) can be drafted simultaneously
   - Section verification (T010-T013) can run in parallel
   - Gate validations (T017-T019, T029-T031, T040-T045, T049-T051) can run in parallel
   - Quality passes (T053-T059) can run in parallel

3. **Validation Strategy**: 3-gate system (Constitutional → Structural → Functional)
   - Gate 1: Constitutional Compliance (28 checkboxes - positive tone, simple style, actionable, focused)
   - Gate 2: Structural Requirements (23 checkboxes - 4-part structure, all metaphors, examples)
   - Gate 3: Functional Requirements (13 checkboxes - FR-001 to FR-013)
   - Final: Success Criteria (9 items), Edge Cases (4 items), Final Checklist (11 items)
   - **Quality Bar**: 98/98 checkboxes (100%) must pass before publication

4. **Word Budget Management**: Critical constraint monitored throughout
   - Opening Hook: 50-75 words
   - Each core section: 60-75 words
   - Action Steps: 100-150 words
   - Closing: 25-50 words
   - **Total**: ≤500 words (hard limit per FR-010)

5. **MVP Definition**: User Story 1 only (teaches technique but lacks Action Steps and Closing)
   - Delivers: Complete 4-step framework with examples and rationale
   - Missing: Actionable plan steps and empowering closing
   - Sufficient for readers to understand technique intellectually

6. **Content-Specific Task Format**: Adapted from software template
   - No code files → content sections in single Markdown file
   - No automated tests → manual 98-checkbox validation
   - No separate model/service/endpoint files → integrated chapter content

**Dependencies Mapped**:
- Setup → Foundational (BLOCKS all content)
- Foundational → User Story 1 (framework must exist)
- User Story 1 → User Story 2 (needs framework to add Action Steps)
- User Story 2 → User Story 3 (needs Action Steps to validate complete content)
- All User Stories → Polish (final quality gates)

**Success Criteria Testing Plan** (after all tasks complete):
- SC-001: 90% recall (test with 10 readers)
- SC-002: <5 min read (time 10 readers)
- SC-003: 85% feel capable (before/after survey)
- SC-004: Create plan in 1 hour (observe 5 readers)
- SC-005: 90%+ comprehension (8th-grade audience)
- SC-006: 80% completion rate (track abandon points with 20 readers)
- SC-007: 85% more motivated (survey 10 readers)
- SC-008: <2 min scan (time 10 readers)
- SC-009: 90% plan without tools (observe with paper only)

## Outcome

- ✅ Impact: Complete task breakdown with 63 tasks organized by user story, enabling independent content implementation and validation; clear MVP definition (US1 only), incremental delivery path (US1 → US2 → US3), and parallel execution opportunities (35 tasks)
- 🧪 Tests: 98-checkbox validation contract (contracts/rapid-mastery-schema.md) for quality gates; Success Criteria testing plan with real readers (SC-001 to SC-009); Edge Case validation (4 scenarios); Independent Test criteria for each user story
- 📁 Files: tasks.md (63 tasks across 6 phases with dependencies, parallel opportunities, and execution strategies)
- 🔁 Next prompts: Ready for `/sp.implement` to execute Chapter 4 content creation following task order; writer should use quickstart.md guide alongside tasks.md for detailed implementation instructions
- 🧠 Reflection: Task organization by user story enables independent validation of each content requirement; sequential execution recommended for content creation (US1→US2→US3) due to logical building; 56% parallelizability (35/63 tasks) mostly applies to validation tasks rather than content creation; 3-gate validation system (98 total checkboxes) ensures constitutional compliance and quality; word budget constraint (≤500 words) requires continuous monitoring and ruthless cutting; MVP definition (US1 only) delivers core technique but lacks actionability; estimated 3.5-4.5 hours matches quickstart.md estimate; Success Criteria testing with real readers critical for validation

## Evaluation notes (flywheel)

- Failure modes observed: None; task generation completed successfully with clear structure
- Graders run and results (PASS/FAIL): Task format validation PASS (all 63 tasks follow checkbox + ID + [P?] + [Story?] + description + file path format), User story mapping PASS (all tasks clearly mapped to US1, US2, or US3), Dependency analysis PASS (sequential US1→US2→US3 with justification), Parallel opportunities identified PASS (35 tasks marked [P])
- Prompt variant (if applicable): N/A (standard /sp.tasks execution following template)
- Next experiment (smallest change to try): Monitor if 63 tasks feels too granular for content creation (may benefit from consolidating validation tasks into phase checkpoints); test if sequential user story execution (US1→US2→US3) works better than parallel for maintaining content coherence; evaluate if 98-checkbox validation contract is practical or if writers skip checkboxes due to volume (may need prioritized subset of critical checks); consider if parallel opportunities (35 tasks) actually help content writers or if content creation is inherently sequential; verify estimated timeline (3.5-4.5 hours) matches actual implementation time with real writer
