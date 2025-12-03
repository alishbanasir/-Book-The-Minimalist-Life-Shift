---

description: "Task list for Chapter 1 - The Inner Architect"
---

# Tasks: Chapter 1 - The Inner Architect

**Input**: Design documents from `/specs/001-inner-architect/`
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
- **Documentation**: `specs/001-inner-architect/`

---

## Phase 1: Setup (Content Infrastructure)

**Purpose**: Initialize content directory structure and validation tooling

- [X] T001 Create content directory structure in content/chapters/
- [X] T002 [P] Create validation tooling directory in .specify/validation/
- [X] T003 [P] Copy quality gates checklist from contracts/voice-changer-schema.md to .specify/validation/quality-checklist.md for reuse

---

## Phase 2: Foundational (Writing Environment Setup)

**Purpose**: Prepare writing environment and ensure all reference materials are accessible

**⚠️ CRITICAL**: This phase MUST be complete before ANY user story writing begins

- [ ] T004 Set up text editor with Markdown support and word count tool
- [ ] T005 [P] Bookmark or open reference documents (data-model.md, contracts/voice-changer-schema.md, quickstart.md)
- [ ] T006 [P] Set up readability checker (readable.com or hemingwayapp.com) in browser
- [ ] T007 Review research.md findings on writing best practices before starting draft

**Checkpoint**: Foundation ready - content writing can now begin

---

## Phase 3: User Story 1 - Reader Learns Voice Changer Technique (Priority: P1) 🎯 MVP

**Goal**: Create chapter that teaches the 3-step Voice Changer technique, enabling readers to transform negative thoughts into positive actions within 10 minutes

**Independent Test**: Reader can explain all 3 steps (CATCH, CHALLENGE, CHANGE) to someone else and successfully apply the technique to transform at least one real negative thought into a specific positive action

### Content Drafting for User Story 1

- [X] T008 [US1] Draft Opening Hook (50-75 words) in content/chapters/01-inner-architect.md following quickstart.md Step 2 template
- [X] T009 [US1] Draft Step 1: CATCH the Thought (75-90 words) in content/chapters/01-inner-architect.md with metaphor, why, how, and example
- [X] T010 [US1] Draft Step 2: CHALLENGE the Truth (75-90 words) in content/chapters/01-inner-architect.md with metaphor, why, how, and example
- [X] T011 [US1] Draft Step 3: CHANGE to Action (75-90 words) in content/chapters/01-inner-architect.md with metaphor, why, how, and example
- [X] T012 [US1] Add second example (20-25 words) in content/chapters/01-inner-architect.md showing technique applied to different scenario
- [X] T013 [US1] Draft Action Steps section (100-150 words) with 3-4 numbered actions in content/chapters/01-inner-architect.md
- [X] T014 [US1] Draft Closing Motivation (25-50 words) with empowering statement in content/chapters/01-inner-architect.md

### Validation for User Story 1

- [X] T015 [US1] Run word count check on each section (Hook: 50-75w, Core: 250-300w, Actions: 100-150w, Closing: 25-50w, Total: ≤500w)
- [X] T016 [US1] Validate Voice Changer technique completeness (all 3 steps present with name + why + how + examples)
- [X] T017 [US1] Check readability score using readable.com or hemingwayapp.com (target grade 7-9)
- [X] T018 [US1] Review for constitutional compliance using .specify/validation/quality-checklist.md (tone, style, knowledge, length)

### Editing for User Story 1

- [X] T019 [US1] Edit Pass 1: Cut filler words (maybe, perhaps, very, really, actually) from content/chapters/01-inner-architect.md
- [X] T020 [US1] Edit Pass 2: Strengthen verbs (replace weak verbs, use active voice) in content/chapters/01-inner-architect.md
- [X] T021 [US1] Edit Pass 3: Improve flow (vary sentence length, check paragraph rhythm) in content/chapters/01-inner-architect.md
- [X] T022 [US1] Edit Pass 4: Polish tone (read aloud, ensure friendly and encouraging) in content/chapters/01-inner-architect.md

### Final Validation for User Story 1

- [X] T023 [US1] Run full Gate 1 validation (Constitutional Compliance) from contracts/voice-changer-schema.md
- [X] T024 [US1] Run full Gate 2 validation (Structural Requirements) from contracts/voice-changer-schema.md
- [X] T025 [US1] Run full Gate 3 validation (Functional Requirements) from contracts/voice-changer-schema.md
- [X] T026 [US1] Ensure all acceptance scenarios met: reader can recall 3 steps, transform negative thought to action, apply technique immediately

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently—chapter teaches Voice Changer technique effectively

---

## Phase 4: User Story 2 - Reader Feels Motivated and Capable (Priority: P2)

**Goal**: Ensure chapter tone is positive, encouraging, and non-judgmental so readers feel motivated rather than guilty or pressured

**Independent Test**: Reader reports feeling more hopeful and motivated after reading, and explicitly notes the positive tone as a reason they want to continue (not reminded of past failures)

### Tone Enhancement for User Story 2

- [ ] T027 [US2] Review entire chapter in content/chapters/01-inner-architect.md for any negative dwelling or judgmental language
- [ ] T028 [US2] Apply "Acknowledge + Reframe + Empower" pattern from research.md to any difficult topics in content/chapters/01-inner-architect.md
- [ ] T029 [US2] Ensure all negative thought examples are followed immediately by positive reframes in content/chapters/01-inner-architect.md
- [ ] T030 [US2] Verify Opening Hook creates hope (not just problem identification) in content/chapters/01-inner-architect.md
- [ ] T031 [US2] Strengthen Closing Motivation to reinforce reader capability (no qualifiers like "maybe" or "hopefully") in content/chapters/01-inner-architect.md

### Validation for User Story 2

- [ ] T032 [US2] Check Principle I compliance (Tone: Positive & Motivational) from constitution.md—every sentence inspires action
- [ ] T033 [US2] Validate no dwelling on past failures throughout content/chapters/01-inner-architect.md
- [ ] T034 [US2] Read chapter aloud and assess if tone feels encouraging (not preachy or dismissive)
- [ ] T035 [US2] Test with 1-2 sample readers: Do they feel motivated after reading? (Target: 85%+ report increased motivation)

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently—chapter teaches technique AND motivates readers

---

## Phase 5: User Story 3 - Reader Understands Content Quickly (Priority: P3)

**Goal**: Ensure chapter uses simple language and clear structure so busy readers can scan in 2 minutes and understand core concepts without dictionary

**Independent Test**: Reader with 8th-grade education level can read and understand entire chapter without dictionary, and can explain main idea to friend immediately

### Simplification for User Story 3

- [ ] T036 [US3] Review entire chapter in content/chapters/01-inner-architect.md for jargon or academic terminology—replace with everyday words
- [ ] T037 [US3] Check sentence length (average 12-15 words, max 25 words)—break long sentences in content/chapters/01-inner-architect.md
- [ ] T038 [US3] Ensure paragraphs are 2-4 sentences maximum throughout content/chapters/01-inner-architect.md
- [ ] T039 [US3] Add clear benefit-focused headings for each section in content/chapters/01-inner-architect.md
- [ ] T040 [US3] Verify scannable format with bullet points or numbered lists where appropriate in content/chapters/01-inner-architect.md

### Validation for User Story 3

- [ ] T041 [US3] Run Flesch-Kincaid readability test (target: grade 7-9) using readable.com
- [ ] T042 [US3] Check Principle II compliance (Style: Simple & Concise) from constitution.md
- [ ] T043 [US3] Test scan time: Can reader grasp 3 C's (CATCH, CHALLENGE, CHANGE) in under 2 minutes?
- [ ] T044 [US3] Test with 8th-grade level reader: Can they understand without dictionary? (Target: 90%+ comprehension)

**Checkpoint**: All user stories should now be independently functional—chapter teaches, motivates, AND is accessible

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final improvements that affect the entire chapter quality

- [ ] T045 [P] Run final spell check and grammar review on content/chapters/01-inner-architect.md
- [ ] T046 [P] Check markdown formatting (headings, bold, bullet points) in content/chapters/01-inner-architect.md
- [ ] T047 Perform final comprehensive validation against all 4 quality gates from contracts/voice-changer-schema.md
- [ ] T048 [P] Create final word count report confirming ≤500 words total
- [ ] T049 Test chapter with 2-3 additional readers for final feedback on clarity and motivation
- [ ] T050 Make final micro-edits based on reader feedback in content/chapters/01-inner-architect.md
- [ ] T051 Mark chapter as ready for publication (all Gates 1-3 PASS)

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3-5)**: All depend on Foundational phase completion
  - User Story 1 (P1): Can start after Foundational - No dependencies on other stories
  - User Story 2 (P2): Depends on User Story 1 completion (must have content to enhance tone)
  - User Story 3 (P3): Depends on User Stories 1 & 2 completion (must have full content to simplify)
- **Polish (Phase 6)**: Depends on all user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - Creates initial chapter draft
- **User Story 2 (P2)**: DEPENDS on User Story 1 - Enhances existing content tone
- **User Story 3 (P3)**: DEPENDS on User Stories 1 & 2 - Simplifies existing content

**Note**: Unlike software projects, these content user stories are **sequential** rather than parallel because each builds on the previous content. User Story 1 creates the draft, User Story 2 improves tone, User Story 3 simplifies language.

### Within Each User Story

- **User Story 1**: Sequential drafting (Hook → Step 1 → Step 2 → Step 3 → Examples → Actions → Closing), then validation, then editing
- **User Story 2**: Sequential tone enhancement (review → apply patterns → strengthen sections → validate)
- **User Story 3**: Sequential simplification (review vocabulary → check sentences → format → validate)

### Parallel Opportunities

- **Setup tasks (T002, T003)**: Can run in parallel
- **Foundational tasks (T005, T006)**: Can run in parallel after T004
- **Polish tasks (T045, T046, T048)**: Can run in parallel

**Within User Story 1**: Tasks T008-T014 are sequential (must draft sections in order for coherent flow)

---

## Parallel Example: Setup Phase

```bash
# Launch setup tasks together:
Task: "Create validation tooling directory in .specify/validation/"
Task: "Copy quality gates checklist from contracts/voice-changer-schema.md to .specify/validation/"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all content work)
3. Complete Phase 3: User Story 1 (full chapter draft with Voice Changer technique)
4. **STOP and VALIDATE**: Test chapter independently
   - Can reader explain 3 steps?
   - Can reader transform negative thought to action?
   - Does chapter meet all Gates 1-3?
5. If validation passes, User Story 1 is a complete MVP

### Incremental Delivery

1. Complete Setup + Foundational → Ready to write
2. Add User Story 1 → Test independently → **MVP Complete** (functional chapter teaching Voice Changer)
3. Add User Story 2 → Test independently → **Enhanced Version** (adds motivational tone)
4. Add User Story 3 → Test independently → **Final Version** (adds accessibility)
5. Polish → **Publication-Ready Version**

### Sequential Content Strategy

Unlike software where user stories can be developed in parallel, content creation is inherently sequential:

1. **Phase 2**: Foundation ready
2. **Phase 3 (US1)**: Create complete chapter draft
3. **Phase 4 (US2)**: Enhance tone of existing draft
4. **Phase 5 (US3)**: Simplify language of enhanced draft
5. **Phase 6**: Polish final version

Each phase builds directly on the previous phase's output.

---

## Task Summary

**Total Tasks**: 51
- **Phase 1 (Setup)**: 3 tasks
- **Phase 2 (Foundational)**: 4 tasks
- **Phase 3 (User Story 1)**: 19 tasks (drafting, validation, editing, final validation)
- **Phase 4 (User Story 2)**: 9 tasks (tone enhancement, validation)
- **Phase 5 (User Story 3)**: 9 tasks (simplification, validation)
- **Phase 6 (Polish)**: 7 tasks (final quality improvements)

**Parallel Opportunities**: 8 tasks can run in parallel (marked with [P])
- Setup: 2 tasks (T002, T003)
- Foundational: 2 tasks (T005, T006)
- Polish: 3 tasks (T045, T046, T048)

**Independent Test Criteria**:
- **US1**: Reader can explain 3 steps and transform negative thought to action
- **US2**: Reader reports feeling motivated (85%+ increased motivation)
- **US3**: 8th-grade reader understands without dictionary (90%+ comprehension)

**Suggested MVP Scope**: Complete through Phase 3 (User Story 1)
- Delivers functional chapter teaching Voice Changer technique
- Meets all core requirements (FR-001 through FR-010)
- Passes all 3 blocker quality gates
- Estimated completion: 2-3 hours

---

## Notes

- No [P] markers within User Story phases (T008-T044) because content writing is inherently sequential—you cannot draft Step 2 before Step 1
- Each validation task (T015-T018, T023-T026, T032-T035, T041-T044) checks specific quality criteria from contracts/voice-changer-schema.md
- Editing passes (T019-T022) follow quickstart.md Step 10 guidance
- User Story dependencies are **sequential** (US2 needs US1, US3 needs US1+US2) unlike typical software stories
- All quality gates must PASS before marking ready for publication (T051)
- Success metrics from spec.md are tested via validation tasks (90% recall, 5-min read, 85% motivation, 2-min scan)
