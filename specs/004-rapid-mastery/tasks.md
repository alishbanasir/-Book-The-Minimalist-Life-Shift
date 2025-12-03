# Tasks: Chapter 4 - The Art of Rapid Mastery

**Input**: Design documents from `/specs/004-rapid-mastery/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/rapid-mastery-schema.md, quickstart.md

**Tests**: No automated tests for content creation. Quality validation uses manual checklist (98 checkboxes in contracts/rapid-mastery-schema.md).

**Organization**: Tasks are grouped by user story to enable independent implementation and validation of each story's content requirements.

---

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can work in parallel (different sections, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths and section references in descriptions

---

## Phase 1: Setup (Content Structure)

**Purpose**: Initialize chapter file and set up writing environment

- [X] T001 Create chapter file at content/chapters/chapter-4-rapid-mastery.md with frontmatter and structure headings
- [X] T002 Set up word budget tracker document to monitor section word counts (target: ≤500 words total)
- [X] T003 [P] Prepare readability checker (hemingwayapp.com) and word counter tool

---

## Phase 2: Foundational (Core Framework)

**Purpose**: Establish the 20-Hour Rule framework that ALL user stories depend on

**⚠️ CRITICAL**: No user story content can be written until this framework is complete

- [X] T004 Draft Opening Hook (50-75 words) - acknowledge overwhelm, reframe as achievable, promise 20-hour solution in content/chapters/chapter-4-rapid-mastery.md
- [X] T005 [P] Draft DECONSTRUCT section (60-75 words) with bold name, recipe metaphor, why/how/example in content/chapters/chapter-4-rapid-mastery.md
- [X] T006 [P] Draft LEARN section (60-75 words) with bold name, directions metaphor, why/how/example in content/chapters/chapter-4-rapid-mastery.md
- [X] T007 [P] Draft REMOVE section (60-75 words) with bold name, desk clearing metaphor, why/how/example in content/chapters/chapter-4-rapid-mastery.md
- [X] T008 [P] Draft PRACTICE section (60-75 words) with bold name, weight lifting metaphor, why/how/example in content/chapters/chapter-4-rapid-mastery.md
- [X] T009 Validate core teaching sections (250-300 words total) against data-model.md structure requirements

**Checkpoint**: 4-step framework complete - user story content requirements can now be validated

---

## Phase 3: User Story 1 - Reader Learns 20-Hour Rule Technique (Priority: P1) 🎯 MVP

**Goal**: Enable reader to understand and apply all 4 steps of the 20-Hour Rule (deconstruct, learn minimum, remove barriers, deliberate practice) to create a 20-hour skill learning plan

**Independent Test**: Reader can take a skill they want to learn and successfully apply all 4 steps, explaining what each step means and why 20 hours is sufficient for basic competence

### Content Implementation for User Story 1

- [X] T010 [US1] Verify DECONSTRUCT section includes concrete Spanish example (vocabulary, pronunciation, grammar, conversation) in content/chapters/chapter-4-rapid-mastery.md
- [X] T011 [US1] Verify LEARN section includes guitar example (chords, tuning, not theory) in content/chapters/chapter-4-rapid-mastery.md
- [X] T012 [US1] Verify REMOVE section includes Spanish barrier removal example (partner, app, time, resources) in content/chapters/chapter-4-rapid-mastery.md
- [X] T013 [US1] Verify PRACTICE section includes guitar practice example (chord transitions, not easy songs) in content/chapters/chapter-4-rapid-mastery.md
- [X] T014 [US1] Ensure all 4 metaphors are present (recipe, directions, desk, weights) per FR-001 requirement
- [X] T015 [US1] Add explicit 20-hour rationale explaining basic competence vs. mastery distinction per FR-002, FR-003
- [X] T016 [US1] Verify at least 2 concrete skill examples present (Spanish + guitar minimum) per FR-004

### Validation for User Story 1

- [X] T017 [US1] Run Gate 1 validation (Constitutional Compliance - 28 checkboxes) in contracts/rapid-mastery-schema.md
- [X] T018 [US1] Run Gate 2 validation (Structural Requirements - 23 checkboxes) in contracts/rapid-mastery-schema.md
- [X] T019 [US1] Run Gate 3 validation (Functional Requirements FR-001 to FR-004 - 4 checkboxes) in contracts/rapid-mastery-schema.md
- [X] T020 [US1] Verify total word count ≤500 words per FR-010
- [X] T021 [US1] Test comprehension with 8th-grade reader (can explain all 4 steps and why 20 hours) per Independent Test criteria

**Checkpoint**: At this point, User Story 1 should be fully satisfied - reader can learn and apply the technique

---

## Phase 4: User Story 2 - Reader Overcomes Skill Acquisition Paralysis (Priority: P2)

**Goal**: Transform reader's belief from "skills take too long to learn" to "I can achieve basic competence in 20 focused hours through smart practice"

**Independent Test**: Reader reports feeling capable of learning a new skill and can explain how the 20-Hour Rule makes skill learning feel achievable within their schedule

### Content Implementation for User Story 2

- [X] T022 [US2] Draft Action Steps section (100-150 words) with 4 numbered steps implementable within 1 hour in content/chapters/chapter-4-rapid-mastery.md
- [X] T023 [P] [US2] Ensure Action Step 1 addresses immediate skill deconstruction ("Right Now: Pick skill, list parts, choose 3-5 critical sub-skills")
- [X] T024 [P] [US2] Ensure Action Step 2 addresses minimum learning ("This Week: 2-3 hours learning self-correction, not weeks of theory")
- [X] T025 [P] [US2] Ensure Action Step 3 addresses barrier removal ("Before Starting: Fix all barriers now - equipment, space, time, resources")
- [X] T026 [P] [US2] Ensure Action Step 4 addresses deliberate practice commitment ("Next 20 Hours: Track time, full attention, feedback, weaknesses")
- [X] T027 [US2] Add positive, motivational language throughout without dwelling on failures per FR-006
- [X] T028 [US2] Verify scannable format with clear headings, short paragraphs (3-4 sentences max), bullet points per FR-008

### Validation for User Story 2

- [X] T029 [US2] Run Gate 3 validation (FR-005: Action steps implementable in 1 hour) in contracts/rapid-mastery-schema.md
- [X] T030 [US2] Run Gate 3 validation (FR-006: Positive language) in contracts/rapid-mastery-schema.md
- [X] T031 [US2] Run Gate 3 validation (FR-008: Scannable format) in contracts/rapid-mastery-schema.md
- [X] T032 [US2] Test with reader who has been avoiding skill learning (reports feeling capable after reading) per Independent Test criteria
- [X] T033 [US2] Verify reader can create 20-hour plan within 1 hour per SC-004

**Checkpoint**: At this point, User Stories 1 AND 2 should both work - reader learns technique AND feels motivated to use it

---

## Phase 5: User Story 3 - Reader Implements Simple, Practical Skill Plan (Priority: P3)

**Goal**: Enable busy reader with 8th-grade education to grasp 20-Hour Rule in 2-minute scan and create first skill plan within 5 minutes using only paper

**Independent Test**: Reader with 8th-grade education level can read entire chapter without dictionary and can create first 20-hour skill learning plan within 5 minutes using nothing but paper or simple note

### Content Implementation for User Story 3

- [X] T034 [US3] Draft Closing section (25-50 words) with empowering capability statement in content/chapters/chapter-4-rapid-mastery.md
- [X] T035 [US3] Verify simple, conversational vocabulary at 8th-grade level throughout (no jargon) per FR-007
- [X] T036 [US3] Remove any learning jargon (no "metacognition", "pedagogical frameworks", "Bloom's taxonomy") per FR-012
- [X] T037 [US3] Verify technique implementable without apps, courses, or resources (notebook sufficient) per FR-013
- [X] T038 [US3] Ensure 4-part structure present (Hook → Core → Actions → Closing) per FR-009
- [X] T039 [US3] Verify empowering closing reinforces reader's capability per FR-011

### Validation for User Story 3

- [X] T040 [US3] Run Flesch-Kincaid readability test (target grade 7-9) using hemingwayapp.com
- [X] T041 [US3] Run Gate 3 validation (FR-007: 8th-grade vocabulary) in contracts/rapid-mastery-schema.md
- [X] T042 [US3] Run Gate 3 validation (FR-009: 4-part structure) in contracts/rapid-mastery-schema.md
- [X] T043 [US3] Run Gate 3 validation (FR-011: Empowering closing) in contracts/rapid-mastery-schema.md
- [X] T044 [US3] Run Gate 3 validation (FR-012: No jargon) in contracts/rapid-mastery-schema.md
- [X] T045 [US3] Run Gate 3 validation (FR-013: Tool-free implementation) in contracts/rapid-mastery-schema.md
- [X] T046 [US3] Test scan time (target <2 minutes to grasp concept) per SC-008
- [X] T047 [US3] Test with 8th-grade reader (no dictionary needed, can create plan in 5 minutes) per Independent Test criteria
- [X] T048 [US3] Verify reader can create plan using only paper per SC-009

**Checkpoint**: All user stories should now be independently satisfied - technique is learned, motivating, and immediately usable

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final quality improvements affecting all content

- [X] T049 [P] Run complete Gate 1 validation (Constitutional Compliance - all 28 checkboxes) in contracts/rapid-mastery-schema.md
- [X] T050 [P] Run complete Gate 2 validation (Structural Requirements - all 23 checkboxes) in contracts/rapid-mastery-schema.md
- [X] T051 [P] Run complete Gate 3 validation (Functional Requirements - all 13 checkboxes) in contracts/rapid-mastery-schema.md
- [X] T052 Verify total word count ≤500 words (hard limit) - cut if over
- [X] T053 Read chapter aloud to catch awkward phrasing (readability pass)
- [X] T054 [P] Check for repetitive words and vary vocabulary (tone pass)
- [X] T055 [P] Verify smooth transitions between sections (flow pass)
- [X] T056 [P] Ensure all sentences <25 words for easier reading (sentence length pass)
- [X] T057 [P] Remove any negative language and replace passive voice with active voice (tone pass)
- [X] T058 [P] Verify all facts and examples are accurate (accuracy pass)
- [X] T059 [P] Confirm time estimates are realistic (20h = 3-4 weeks at 30-45 min/day) (accuracy pass)
- [X] T060 Run Success Criteria validation (SC-001 to SC-009) with test readers
- [X] T061 Run Edge Case validation (4 checkboxes) in contracts/rapid-mastery-schema.md
- [X] T062 Run Final Checklist (11 checkboxes) in contracts/rapid-mastery-schema.md before publication
- [X] T063 Verify 98/98 checkboxes passing (100% quality bar) in contracts/rapid-mastery-schema.md

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user story content
- **User Stories (Phase 3-5)**: All depend on Foundational phase completion (4-step framework must exist)
  - User Story 1 must complete before User Story 2 (needs Action Steps to verify motivation)
  - User Story 2 must complete before User Story 3 (needs scannable format and simple language)
  - Sequential execution recommended: P1 → P2 → P3
- **Polish (Phase 6)**: Depends on all user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - Validates 4-step framework with examples
- **User Story 2 (P2)**: Depends on US1 completion - Adds Action Steps and motivational language to existing framework
- **User Story 3 (P3)**: Depends on US2 completion - Adds Closing and validates accessibility of complete content

### Within Each User Story

- Content implementation tasks before validation tasks
- Gate validations in order (Gate 1 → Gate 2 → Gate 3)
- Independent Test performed last to verify user story satisfaction

### Parallel Opportunities

- **Setup (Phase 1)**: T002 and T003 can run in parallel
- **Foundational (Phase 2)**: T005-T008 (all 4 core sections) can be drafted in parallel
- **User Story 1**: T010-T013 (section verification) can run in parallel, T017-T019 (gate validations) can run in parallel
- **User Story 2**: T023-T026 (action step content) can run in parallel, T029-T031 (gate validations) can run in parallel
- **User Story 3**: T035-T039 (content checks) can run in parallel, T040-T045 (validations) can run in parallel
- **Polish (Phase 6)**: T049-T051 (gate validations), T053-T059 (quality passes) can run in parallel

---

## Parallel Example: User Story 1

```bash
# Draft all 4 core sections together (Phase 2 Foundational):
Task T005: "Draft DECONSTRUCT section with recipe metaphor"
Task T006: "Draft LEARN section with directions metaphor"
Task T007: "Draft REMOVE section with desk clearing metaphor"
Task T008: "Draft PRACTICE section with weight lifting metaphor"

# Verify all section examples together (Phase 3 US1):
Task T010: "Verify DECONSTRUCT includes Spanish example"
Task T011: "Verify LEARN includes guitar example"
Task T012: "Verify REMOVE includes Spanish barriers"
Task T013: "Verify PRACTICE includes guitar practice"

# Run all gate validations together (Phase 3 US1):
Task T017: "Run Gate 1 validation (28 checkboxes)"
Task T018: "Run Gate 2 validation (23 checkboxes)"
Task T019: "Run Gate 3 validation (FR-001 to FR-004)"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup (T001-T003)
2. Complete Phase 2: Foundational (T004-T009) - CRITICAL: 4-step framework must exist
3. Complete Phase 3: User Story 1 (T010-T021)
4. **STOP and VALIDATE**: Test with reader (can they learn and apply all 4 steps?)
5. If validation passes: MVP chapter ready (teaches technique but lacks Action Steps and Closing)

### Incremental Delivery

1. Complete Setup + Foundational → 4-step framework ready (not yet actionable)
2. Add User Story 1 → Test independently → Reader can learn technique (MVP!)
3. Add User Story 2 → Test independently → Reader feels motivated and has action plan
4. Add User Story 3 → Test independently → Reader finds content accessible and usable with just paper
5. Each story adds value without breaking previous requirements

### Sequential Strategy (Recommended for Content Creation)

Content creation benefits from sequential execution due to interdependencies:

1. Writer completes Setup + Foundational (T001-T009)
2. Writer completes User Story 1 (T010-T021) - Framework with examples validated
3. Writer adds User Story 2 content (T022-T033) - Action Steps and motivation
4. Writer adds User Story 3 content (T034-T048) - Closing and accessibility polish
5. Writer runs final Polish phase (T049-T063) - All quality gates
6. Each story builds on previous, maintaining coherence

---

## Success Criteria Validation Plan

After completing all tasks, validate against spec.md Success Criteria with real readers:

- **SC-001**: 90% recall all 4 steps immediately (test with 10 readers)
- **SC-002**: Completion in <5 minutes (time 10 readers)
- **SC-003**: 85% feel more capable (survey 10 readers before/after)
- **SC-004**: Create 20-hour plan in 1 hour (observe 5 readers)
- **SC-005**: 90%+ comprehension at 8th-grade level (test with appropriate audience)
- **SC-006**: 80% completion rate (track abandon points with 20 readers)
- **SC-007**: 85% more motivated to start (survey 10 readers)
- **SC-008**: Scan in <2 minutes (time 10 readers on scan task)
- **SC-009**: 90% can plan without tools (observe 10 readers with only paper)

---

## Notes

- **[P] tasks**: Different sections or parallel validations, no content dependencies
- **[Story] label**: Maps task to specific user story for traceability and independent testing
- **Each user story**: Should deliver independently testable content increment
- **Quality bar**: 98/98 checkboxes (100%) must pass before publication
- **Word budget**: Critical constraint - monitor continuously, cut ruthlessly if over 500 words
- **Validation order**: Constitutional → Structural → Functional (3-gate system)
- **Commit frequency**: After each phase or logical group of tasks
- **Stop at checkpoints**: Validate user story independently before proceeding

---

## Task Count Summary

- **Total Tasks**: 63
- **Setup (Phase 1)**: 3 tasks
- **Foundational (Phase 2)**: 6 tasks
- **User Story 1 (Phase 3)**: 12 tasks
- **User Story 2 (Phase 4)**: 12 tasks
- **User Story 3 (Phase 5)**: 15 tasks
- **Polish (Phase 6)**: 15 tasks
- **Parallel Opportunities**: 35 tasks marked [P] (56% parallelizable)

---

## Estimated Timeline

- **Setup**: 15 minutes
- **Foundational**: 1-1.5 hours (draft all 4 core sections)
- **User Story 1**: 30-45 minutes (verify framework completeness)
- **User Story 2**: 45-60 minutes (add Action Steps and motivation)
- **User Story 3**: 45-60 minutes (add Closing and validate accessibility)
- **Polish**: 30-45 minutes (final quality passes and validation)

**Total Estimated Time**: 3.5-4.5 hours (matches quickstart.md estimate of 2-4 hours with revisions)
