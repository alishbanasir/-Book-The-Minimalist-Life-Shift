---

description: "Task list for Chapter 2 - The Energy Equation"
---

# Tasks: Chapter 2 - The Energy Equation

**Input**: Design documents from `/specs/002-energy-equation/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), data-model.md, contracts/, quickstart.md, research.md

**Tests**: Tests are NOT requested in this specification—content validation is manual review against quality gates.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Content output**: `content/chapters/` at repository root
- **Validation tooling**: `.specify/validation/`
- **Documentation**: `specs/002-energy-equation/`

---

## Phase 1: Setup (Content Infrastructure)

**Purpose**: Initialize content directory structure and validation tooling (reusing from Chapter 1)

- [X] T001 Verify content directory structure exists at content/chapters/
- [X] T002 [P] Verify validation tooling directory exists at .specify/validation/
- [X] T003 [P] Copy quality gates checklist from contracts/energy-equation-schema.md to .specify/validation/ for quick reference

---

## Phase 2: Foundational (Writing Environment Setup)

**Purpose**: Prepare writing environment and ensure all reference materials are accessible

**⚠️ CRITICAL**: This phase MUST be complete before ANY user story writing begins

- [X] T004 Set up text editor with Markdown support and word count tool
- [X] T005 [P] Bookmark or open reference documents (data-model.md, contracts/energy-equation-schema.md, quickstart.md, research.md)
- [X] T006 [P] Set up readability checker (readable.com or hemingwayapp.com) in browser
- [X] T007 Review research.md findings on energy management science and writing best practices before starting draft
- [X] T008 Review quickstart.md 10-step guide to understand complete workflow

**Checkpoint**: Foundation ready - content writing can now begin

---

## Phase 3: User Story 1 - Reader Learns Recharge Rules (Priority: P1) 🎯 MVP

**Goal**: Create chapter that teaches the 3-rule "Recharge, Not Resign" framework (RECOGNIZE-RESTORE-RETURN), enabling readers to understand all 3 rules and apply at least one technique within 1 hour

**Independent Test**: Reader can explain all 3 rules (RECOGNIZE-RESTORE-RETURN) to someone else and successfully apply at least one rule to recharge their energy (not just power through exhaustion), resulting in measurable energy restoration or focus improvement

### Content Drafting for User Story 1

- [X] T009 [US1] Draft Opening Hook (50-75 words) in content/chapters/02-energy-equation.md following quickstart.md Step 2 template with Acknowledge + Reframe + Empower pattern
- [X] T010 [US1] Draft Step 1: RECOGNIZE the Drain (75-90 words) in content/chapters/02-energy-equation.md with phone battery metaphor, why (simple neuroscience), how (fatigue signals), and example
- [X] T011 [US1] Draft Step 2: RESTORE the Tank (75-90 words) in content/chapters/02-energy-equation.md with plugging-in metaphor, why (oxygen + rest), how (3 techniques: breathing, walking, task-switching), and example
- [X] T012 [US1] Draft Step 3: RETURN to Action (75-90 words) in content/chapters/02-energy-equation.md with refueling metaphor, why (restored energy = better work), how (pick ONE next step), and example
- [X] T013 [US1] Add Recharge vs Resign distinction (20-25 words) in content/chapters/02-energy-equation.md showing time-bound/intentional vs indefinite/avoidance contrast
- [X] T014 [US1] Draft Action Steps section (100-150 words) with 3-4 numbered actions in content/chapters/02-energy-equation.md (Right Now, This Week, Going Forward)
- [X] T015 [US1] Draft Closing Motivation (25-50 words) with empowering statement in content/chapters/02-energy-equation.md (no qualifiers, reference framework)

### Validation for User Story 1

- [X] T016 [US1] Run word count check on each section (Hook: 50-75w, RECOGNIZE: 75-90w, RESTORE: 75-90w, RETURN: 75-90w, Distinction: 20-25w, Actions: 100-150w, Closing: 25-50w, Total: ≤500w)
- [X] T017 [US1] Validate Recharge framework completeness (all 3 rules present with name + metaphor + why + how + example)
- [X] T018 [US1] Verify Recharge vs Resign distinction is clear (time-bound vs indefinite, intentional vs passive)
- [X] T019 [US1] Check readability score using readable.com or hemingwayapp.com (target grade 7-9)
- [X] T020 [US1] Review for constitutional compliance using contracts/energy-equation-schema.md Gate 1 (tone, style, knowledge, length)

### Editing for User Story 1

- [X] T021 [US1] Edit Pass 1: Cut filler words (maybe, perhaps, very, really, actually, hopefully) from content/chapters/02-energy-equation.md
- [X] T022 [US1] Edit Pass 2: Strengthen verbs (replace weak verbs, use active voice) in content/chapters/02-energy-equation.md
- [X] T023 [US1] Edit Pass 3: Simplify scientific explanations (ensure analogies clear: phone battery, plugging in, refueling car) in content/chapters/02-energy-equation.md
- [X] T024 [US1] Edit Pass 4: Improve flow (vary sentence length, check paragraph rhythm, add transitions) in content/chapters/02-energy-equation.md
- [X] T025 [US1] Edit Pass 5: Polish tone (read aloud, ensure positive and empowering, no guilt-inducing language) in content/chapters/02-energy-equation.md

### Final Validation for User Story 1

- [X] T026 [US1] Run full Gate 1 validation (Constitutional Compliance) from contracts/energy-equation-schema.md (all 4 principles: tone, style, action, length)
- [X] T027 [US1] Run full Gate 2 validation (Structural Requirements) from contracts/energy-equation-schema.md (4-part structure, component completeness, formatting)
- [X] T028 [US1] Run full Gate 3 validation (Functional Requirements) from contracts/energy-equation-schema.md (all 13 FR requirements met)
- [X] T029 [US1] Ensure all acceptance scenarios met: reader can recall 3 rules, apply technique within 1 hour, prevent energy depletion
- [X] T030 [US1] Verify success criteria targets achievable: 90% recall (alliterative naming), equipment-free (breathing/walking/switching), <5 min read (500 word limit)

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently—chapter teaches RECOGNIZE-RESTORE-RETURN framework effectively

---

## Phase 4: User Story 2 - Reader Distinguishes Recharge from Resignation (Priority: P2)

**Goal**: Ensure chapter clearly distinguishes strategic recharging (productive rest) from resignation (giving up), so readers understand rest is necessary and don't feel guilty about recharging

**Independent Test**: Reader reports understanding that strategic rest is different from quitting, and can explain why recharging actually improves productivity rather than hindering it

### Enhancement for User Story 2

- [ ] T031 [US2] Review entire chapter in content/chapters/02-energy-equation.md for guilt-reduction language (ensure rest framed as performance tool, not permission)
- [ ] T032 [US2] Strengthen Recharge vs Resign distinction section in content/chapters/02-energy-equation.md (add concrete contrast: "10 minutes with plan" vs "hours without plan")
- [ ] T033 [US2] Ensure time-bound emphasis throughout content/chapters/02-energy-equation.md (5-15 minutes explicit in RESTORE, RETURN step proves effectiveness)
- [ ] T034 [US2] Verify scientific backing frames recharge as strategic (not optional) in content/chapters/02-energy-equation.md (restored energy = better decisions, clearer thinking)
- [ ] T035 [US2] Add example showing recharge leading to better outcome in content/chapters/02-energy-equation.md (task completed faster after break vs hours pushing through)

### Validation for User Story 2

- [ ] T036 [US2] Check Principle I compliance (Tone: Positive & Motivational) from constitution.md—every sentence inspires action, no dwelling on guilt
- [ ] T037 [US2] Validate distinction clarity: can reader explain difference between recharge (strategic) and resign (avoidance) after reading?
- [ ] T038 [US2] Review for "performance tool" framing (recharge = competitive advantage, not weakness) throughout content/chapters/02-energy-equation.md
- [ ] T039 [US2] Test with 1-2 sample readers: Do they feel less guilty about resting? (Target: 85%+ report reduced guilt per SC-007)
- [ ] T040 [US2] Verify RETURN step proves recharge effectiveness (accomplishing MORE after rest, not less) in content/chapters/02-energy-equation.md

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently—chapter teaches framework AND reduces guilt about rest

---

## Phase 5: User Story 3 - Reader Implements Simple, Science-Based Techniques (Priority: P3)

**Goal**: Ensure chapter uses simple language and clear structure so busy readers can scan in 2 minutes, understand core concepts without dictionary, and implement immediately using only body/mind (no equipment)

**Independent Test**: Reader with 8th-grade education level can read and understand entire chapter without dictionary, and can implement at least one rule within 5 minutes using nothing but their own body/mind

### Simplification for User Story 3

- [ ] T041 [US3] Review entire chapter in content/chapters/02-energy-equation.md for jargon or academic terminology—replace with everyday words (no "ego depletion", "cortisol", "ultradian")
- [ ] T042 [US3] Check sentence length (average 12-15 words, max 25 words)—break long sentences in content/chapters/02-energy-equation.md
- [ ] T043 [US3] Ensure paragraphs are 2-4 sentences maximum throughout content/chapters/02-energy-equation.md
- [ ] T044 [US3] Verify all metaphors use everyday objects (phone battery, plugging in, refueling car) in content/chapters/02-energy-equation.md
- [ ] T045 [US3] Add clear benefit-focused headings for each section in content/chapters/02-energy-equation.md ("Step 1: RECOGNIZE the Drain" not just "Step 1")
- [ ] T046 [US3] Verify scannable format with bold key terms (RECOGNIZE, RESTORE, RETURN), bullet points for techniques in content/chapters/02-energy-equation.md

### Validation for User Story 3

- [ ] T047 [US3] Run Flesch-Kincaid readability test (target: grade 7-9) using readable.com or hemingwayapp.com
- [ ] T048 [US3] Check Principle II compliance (Style: Simple & Concise) from constitution.md—conversational vocabulary, scannable format
- [ ] T049 [US3] Verify all techniques equipment-free (breathing = body only, walking = body only, task-switching = mind only) in content/chapters/02-energy-equation.md
- [ ] T050 [US3] Test scan time: Can reader grasp 3 R's (RECOGNIZE-RESTORE-RETURN) in under 2 minutes? (SC-008)
- [ ] T051 [US3] Test with 8th-grade level reader: Can they understand without dictionary? (Target: 90%+ comprehension per SC-005)
- [ ] T052 [US3] Verify techniques implementable within 5 minutes (breathing: 30 sec, walk: 10 min, task-switch: immediate)

**Checkpoint**: All user stories should now be independently functional—chapter teaches, reduces guilt, AND is accessible

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final improvements that affect the entire chapter quality

- [ ] T053 [P] Run final spell check and grammar review on content/chapters/02-energy-equation.md
- [ ] T054 [P] Check markdown formatting (headings, bold, bullet points, blank lines) in content/chapters/02-energy-equation.md
- [ ] T055 Perform final comprehensive validation against all 3 quality gates from contracts/energy-equation-schema.md (Gate 1, Gate 2, Gate 3)
- [ ] T056 [P] Create final word count report confirming ≤500 words total (include section breakdown)
- [ ] T057 [P] Verify all mandatory components present per data-model.md (name, metaphor, why, how, example for each rule)
- [ ] T058 Test chapter with 2-3 additional readers for final feedback on clarity, guilt reduction, and motivation
- [ ] T059 Make final micro-edits based on reader feedback in content/chapters/02-energy-equation.md
- [ ] T060 Verify edge cases addressed: micro-recharges mentioned for constrained situations (meetings, childcare), scope boundary clear (temporary vs chronic fatigue)
- [ ] T061 Mark chapter as ready for publication (all Gates 1-3 PASS, all success criteria achievable)

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately (mostly verification of existing infrastructure from Chapter 1)
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3-5)**: All depend on Foundational phase completion
  - User Story 1 (P1): Can start after Foundational - No dependencies on other stories
  - User Story 2 (P2): Depends on User Story 1 completion (must have content to enhance distinction/guilt reduction)
  - User Story 3 (P3): Depends on User Stories 1 & 2 completion (must have full content to simplify)
- **Polish (Phase 6)**: Depends on all user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - Creates initial chapter draft with RECOGNIZE-RESTORE-RETURN framework
- **User Story 2 (P2)**: DEPENDS on User Story 1 - Enhances existing content to strengthen recharge vs resign distinction and reduce guilt
- **User Story 3 (P3)**: DEPENDS on User Stories 1 & 2 - Simplifies existing content for accessibility and immediate implementation

**Note**: Unlike software projects, these content user stories are **sequential** rather than parallel because each builds on the previous content. User Story 1 creates the draft, User Story 2 strengthens the distinction/reduces guilt, User Story 3 simplifies language.

### Within Each User Story

- **User Story 1**: Sequential drafting (Hook → RECOGNIZE → RESTORE → RETURN → Distinction → Actions → Closing), then validation, then editing
- **User Story 2**: Sequential enhancement (review → strengthen distinction → verify time-bound emphasis → validate guilt reduction)
- **User Story 3**: Sequential simplification (review vocabulary → check sentences → format → validate accessibility)

### Parallel Opportunities

- **Setup tasks (T002, T003)**: Can run in parallel
- **Foundational tasks (T005, T006)**: Can run in parallel after T004
- **Polish tasks (T053, T054, T056, T057)**: Can run in parallel

**Within User Story 1**: Tasks T009-T015 are sequential (must draft sections in order for coherent flow)

---

## Parallel Example: Setup Phase

```bash
# Launch setup tasks together:
Task: "Verify validation tooling directory exists at .specify/validation/"
Task: "Copy quality gates checklist from contracts/energy-equation-schema.md to .specify/validation/"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup (verify infrastructure)
2. Complete Phase 2: Foundational (CRITICAL - blocks all content work)
3. Complete Phase 3: User Story 1 (full chapter draft with RECOGNIZE-RESTORE-RETURN framework)
4. **STOP and VALIDATE**: Test chapter independently
   - Can reader explain 3 rules (RECOGNIZE-RESTORE-RETURN)?
   - Can reader apply at least one technique within 1 hour?
   - Does chapter meet all Gates 1-3?
5. If validation passes, User Story 1 is a complete MVP

### Incremental Delivery

1. Complete Setup + Foundational → Ready to write
2. Add User Story 1 → Test independently → **MVP Complete** (functional chapter teaching RECOGNIZE-RESTORE-RETURN)
3. Add User Story 2 → Test independently → **Enhanced Version** (adds recharge vs resign distinction clarity, reduces guilt)
4. Add User Story 3 → Test independently → **Final Version** (adds accessibility and immediate implementation)
5. Polish → **Publication-Ready Version**

### Sequential Content Strategy

Unlike software where user stories can be developed in parallel, content creation is inherently sequential:

1. **Phase 2**: Foundation ready
2. **Phase 3 (US1)**: Create complete chapter draft with RECOGNIZE-RESTORE-RETURN framework
3. **Phase 4 (US2)**: Enhance distinction between recharge and resignation, strengthen guilt reduction
4. **Phase 5 (US3)**: Simplify language and format for accessibility
5. **Phase 6**: Polish final version

Each phase builds directly on the previous phase's output.

---

## Task Summary

**Total Tasks**: 61

- **Phase 1 (Setup)**: 3 tasks (verification and tooling)
- **Phase 2 (Foundational)**: 5 tasks (environment setup, reference review)
- **Phase 3 (User Story 1)**: 22 tasks (drafting 7, validation 5, editing 5, final validation 5)
- **Phase 4 (User Story 2)**: 10 tasks (enhancement 5, validation 5)
- **Phase 5 (User Story 3)**: 12 tasks (simplification 6, validation 6)
- **Phase 6 (Polish)**: 9 tasks (final quality improvements)

**Parallel Opportunities**: 8 tasks can run in parallel (marked with [P])
- Setup: 2 tasks (T002, T003)
- Foundational: 2 tasks (T005, T006)
- Polish: 4 tasks (T053, T054, T056, T057)

**Independent Test Criteria**:
- **US1**: Reader can explain 3 rules (RECOGNIZE-RESTORE-RETURN) and apply at least one technique within 1 hour
- **US2**: Reader understands strategic rest ≠ quitting and reports reduced guilt (85%+ target)
- **US3**: 8th-grade reader understands without dictionary, implements within 5 minutes (90%+ comprehension)

**Suggested MVP Scope**: Complete through Phase 3 (User Story 1)
- Delivers functional chapter teaching RECOGNIZE-RESTORE-RETURN framework
- Meets all core requirements (FR-001 through FR-013)
- Passes all 3 blocker quality gates
- Estimated completion: 2-3 hours using quickstart.md guide

---

## Notes

- No [P] markers within User Story phases (T009-T052) because content writing is inherently sequential—you cannot draft RESTORE before RECOGNIZE
- Each validation task (T016-T020, T026-T030, T036-T040, T047-T052, T055) checks specific quality criteria from contracts/energy-equation-schema.md
- Editing passes (T021-T025) follow quickstart.md Step 10 guidance with additional pass for simplifying scientific explanations
- User Story dependencies are **sequential** (US2 needs US1, US3 needs US1+US2) unlike typical software stories
- All quality gates must PASS before marking ready for publication (T061)
- Success metrics from spec.md are tested via validation tasks (90% recall, <5 min read, 85% understand distinction, apply within 1 hour, 90%+ 8th-grade comprehension)
- Framework naming: RECOGNIZE-RESTORE-RETURN (alliterative R-R-R pattern like Chapter 1's CATCH-CHALLENGE-CHANGE)
- Key innovation: Time-bound recharge (5-15 min) vs indefinite resignation (hours/days)—addressed in US2 enhancement
