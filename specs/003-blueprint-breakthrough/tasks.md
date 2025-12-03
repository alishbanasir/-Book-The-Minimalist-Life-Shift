---

description: "Task list for Chapter 3: The Blueprint of Breakthrough implementation"
---

# Tasks: Chapter 3 - The Blueprint of Breakthrough

**Input**: Design documents from `/specs/003-blueprint-breakthrough/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/blueprint-breakthrough-schema.md, quickstart.md

**Tests**: No automated tests for content creation project. Validation performed via manual checklist against contracts/blueprint-breakthrough-schema.md

**Organization**: Tasks organized by user story to enable independent implementation and testing of each content requirement.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different content sections, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Content creation project**: `content/chapters/` for final chapter content
- **Design artifacts**: `specs/003-blueprint-breakthrough/` (already created in planning phase)
- **Validation**: Manual validation using contracts/blueprint-breakthrough-schema.md

---

## Phase 1: Setup (Preparation)

**Purpose**: Prepare writing environment and review design artifacts

- [X] T001 Review all design artifacts (spec.md, plan.md, research.md, data-model.md, contracts/, quickstart.md) per quickstart.md Step 1 (~15 min)
- [X] T002 Set up writing environment with text editor, word count tool, and readability checker (Hemingway Editor or readable.com) per quickstart.md Step 2 (~5 min)
- [X] T003 Create chapter content structure template in content/chapters/chapter-3-blueprint-breakthrough.md with section placeholders (Hook, BREAK, BEGIN, BUILD, Actions, Closing) and word count tracker

---

## Phase 2: Foundational (Core Framework Understanding)

**Purpose**: Internalize BREAK-BEGIN-BUILD framework structure before writing

**⚠️ CRITICAL**: Must understand complete framework structure before drafting any section

- [X] T004 Review BREAK-BEGIN-BUILD framework structure from data-model.md (Step 1: BREAK with construction blueprint metaphor, Step 2: BEGIN with road trip metaphor, Step 3: BUILD with climbing stairs metaphor)
- [X] T005 Review 4 goal breakdown examples from data-model.md (book 400h, business 300h, web dev 500h, fitness 200h) to select 2+ for chapter inclusion
- [X] T006 Review word budget allocation from data-model.md (Hook 50-75w, BREAK 75-90w, BEGIN 75-90w, BUILD 75-90w, Actions 100-150w, Closing 25-50w, Total 400-500w)
- [X] T007 Review validation contracts from contracts/blueprint-breakthrough-schema.md to understand all 38 quality checkboxes before writing

**Checkpoint**: Framework internalized - ready to draft content sections

---

## Phase 3: User Story 1 - Reader Learns 100-Hour Focus Technique (Priority: P1) 🎯 MVP

**Goal**: Draft complete BREAK-BEGIN-BUILD framework teaching that enables reader to break large goal into 3-5 specific 100-hour blocks within 1 hour

**Independent Test**: Reader can take a large goal and successfully break it into 3-5 specific 100-hour blocks, explaining what they'll accomplish in each block and why 100 hours is the right unit of focus (per US1 acceptance criteria)

### Implementation for User Story 1

- [X] T008 [P] [US1] Draft BREAK section (75-90 words) in content/chapters/chapter-3-blueprint-breakthrough.md with bold name, construction blueprint metaphor, why (brain can plan 100h not 1000h), how (estimate → divide by 100 → name blocks), and concrete example (book 400h → 4 blocks) per quickstart.md Step 4
- [X] T009 [P] [US1] Draft BEGIN section (75-90 words) in content/chapters/chapter-3-blueprint-breakthrough.md with bold name, road trip metaphor, why (100h feels possible), how (pick Block 1, commit to just 100h, track progress), and example (not "400h book" but "100h research") per quickstart.md Step 5
- [X] T010 [P] [US1] Draft BUILD section (75-90 words) in content/chapters/chapter-3-blueprint-breakthrough.md with bold name, climbing stairs metaphor, why (completed blocks build confidence), how (focus current block, celebrate at 100h, start next when ready), and example (Block 1 complete → start Block 2) per quickstart.md Step 6
- [X] T011 [US1] Draft Action Steps section (100-150 words) in content/chapters/chapter-3-blueprint-breakthrough.md with 4 numbered steps: Right Now (estimate, divide, name blocks), This Week (commit to Block 1, track), First 100 Hours (complete Block 1), After Block 1 (celebrate, reflect, decide on Block 2) per quickstart.md Step 7
- [X] T012 [US1] Validate BREAK-BEGIN-BUILD framework completeness against FR-001 (complete technique) and FR-002 (100h rationale at 8th-grade level) using contracts/blueprint-breakthrough-schema.md Gate 3
- [X] T013 [US1] Add 1+ additional concrete goal breakdown example beyond book (choose from: business 300h, web dev 500h, fitness 200h) to satisfy FR-004 (2+ examples) per data-model.md Goal Breakdown Examples section

**Checkpoint**: US1 complete - Reader can learn complete BREAK-BEGIN-BUILD technique and create first block plan within 1 hour (FR-001, FR-002, FR-004, FR-005 satisfied)

---

## Phase 4: User Story 2 - Reader Overcomes Goal Paralysis (Priority: P2)

**Goal**: Draft content that reframes large goals as achievable through systematic 100-hour investments, addressing psychological barrier of "it's too big to start"

**Independent Test**: Reader reports feeling less overwhelmed by their goal after reading, and can explain how breaking it into 100-hour blocks makes it feel achievable (per US2 acceptance criteria)

### Implementation for User Story 2

- [X] T014 [US2] Draft Opening Hook (50-75 words) in content/chapters/chapter-3-blueprint-breakthrough.md acknowledging reader's overwhelm about large goal, creating connection through shared experience, reframing problem ("goal feels impossible because you're seeing the whole thing; break it into blocks"), and transitioning to framework per quickstart.md Step 3
- [X] T015 [US2] Review and strengthen paralysis reduction language throughout chapter (ensure "just 100 hours, not the whole goal" framing in BEGIN section, "one block at a time" language in BUILD section) per research.md Writing Best Practices section
- [X] T016 [US2] Add focused work distinction (what counts vs. doesn't count toward 100 hours) in Action Steps or within BREAK section to clarify "100 hours = actual work time, not daydreaming" per FR-003
- [X] T017 [US2] Draft Closing (25-50 words) in content/chapters/chapter-3-blueprint-breakthrough.md reinforcing "Breakthroughs aren't magic—they're 100 focused hours at a time" with confident, systematic tone (not heroic or lucky) per quickstart.md Step 8 and FR-011
- [X] T018 [US2] Validate positive, motivational language throughout (no dwelling on past failures) against FR-006 using contracts/blueprint-breakthrough-schema.md Gate 1 Principle I
- [X] T019 [US2] Validate Acknowledge-Reframe-Empower pattern in Hook and throughout chapter (acknowledge overwhelm → reframe as systematic → empower capability) per research.md Writing Best Practices

**Checkpoint**: US2 complete - Reader feels large goal is achievable through systematic 100-hour blocks, not requiring heroic effort (FR-003, FR-006, FR-011 satisfied)

---

## Phase 5: User Story 3 - Reader Implements Simple, Practical Planning (Priority: P3)

**Goal**: Ensure chapter is scannable (≤2 min scan time), uses 8th-grade vocabulary, follows 4-part structure, stays ≤500 words, and enables tool-free implementation (pen/paper sufficient)

**Independent Test**: Reader with 8th-grade education level can read and understand entire chapter without dictionary, and can create their first 100-hour block plan within 5 minutes using nothing but paper or simple note app (per US3 acceptance criteria)

### Implementation for User Story 3

- [X] T020 [US3] Simplify vocabulary throughout chapter to 8th-grade level using Hemingway Editor (replace complex words, shorten sentences to 15-20 words, remove unnecessary adjectives/adverbs) per FR-007 and quickstart.md Step 10
- [X] T021 [US3] Format chapter for scannability: Add clear section headings (BREAK Your Goal, BEGIN with Block One, BUILD Through Momentum), bold key terms (BREAK, BEGIN, BUILD), ensure short paragraphs (3-4 sentences max), use numbered action steps per FR-008
- [X] T022 [US3] Verify 4-part structure compliance (Hook 50-75w → Core Teaching 250-300w → Action Steps 100-150w → Closing 25-50w) by checking word counts per section against FR-009 and quickstart.md Word Budget Tracking Table
- [X] T023 [US3] Trim content to ≤500 words total (currently tracked per section; adjust sections if over budget) per FR-010 and Constitution Principle IV
- [X] T024 [US3] Remove any planning jargon (search and eliminate: "sprints", "milestones", "Gantt charts", "OKRs", "KPIs", "dependencies") per FR-012 and quickstart.md Common Pitfalls
- [X] T025 [US3] Verify technique is tool-free implementable (all Action Steps work with pen/paper; no references to apps, spreadsheets, or specialized software) per FR-013

**Checkpoint**: US3 complete - Chapter is scannable (≤2 min), readable at 8th-grade level, structured correctly, ≤500 words, and tool-free (FR-007, FR-008, FR-009, FR-010, FR-012, FR-013 satisfied)

---

## Phase 6: Polish & Validation

**Purpose**: Final quality checks, comprehensive validation, and refinement

- [X] T026 Run complete 3-gate validation using contracts/blueprint-breakthrough-schema.md: Gate 1 (Constitutional - 13 criteria), Gate 2 (Structural - 16 criteria), Gate 3 (Functional - 13 criteria) per quickstart.md Step 9
- [X] T027 Run Quick Pre-Flight Check (5 critical items): Word count ≤500, Flesch-Kincaid grade 7-9, BREAK-BEGIN-BUILD complete, 2+ examples, No jargon per contracts/blueprint-breakthrough-schema.md
- [X] T028 Verify word count compliance per section using quickstart.md Word Budget Tracking Table (Hook 50-75w, BREAK 75-90w, BEGIN 75-90w, BUILD 75-90w, Actions 100-150w, Closing 25-50w, Total 400-500w)
- [X] T029 Run readability check using Hemingway Editor or readable.com to confirm Flesch-Kincaid grade 7-9 per FR-007 and SC-005
- [X] T030 Verify Mandatory Components Checklist (10 items): B-B-B naming, 3 metaphors (construction, road trip, stairs), paralysis language, 2+ examples, division math (÷100), time translation, focused work distinction, tracking guidance per quickstart.md
- [X] T031 Final refinement pass (30 min): Strengthen metaphors, polish examples with specific hours and block names, ensure concrete specificity (not "some hours" but "100 hours"), verify no vague action steps per quickstart.md Step 10
- [X] T032 Self-test: Can a reader create their first 100-hour block plan on paper in 1 hour after reading? (validate US1 Independent Test criterion)
- [X] T033 Update chapter status to "Ready for User Testing" and document completion in implementation notes

**Checkpoint**: All quality gates passed (38/38 checkboxes), ready for beta reader testing (SC-001 through SC-009 validation)

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user story writing
- **User Stories (Phase 3, 4, 5)**: All depend on Foundational phase completion
  - US1 (P1): Core framework teaching - MUST complete first (other stories build on this)
  - US2 (P2): Paralysis reduction framing - Can draft Hook/Closing in parallel with US1 core sections
  - US3 (P3): Simplification and formatting - Can only validate after US1 and US2 content exists
- **Polish (Phase 6)**: Depends on all user stories (US1, US2, US3) being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories. BREAK, BEGIN, BUILD sections and Action Steps can be drafted in parallel (T008, T009, T010 marked [P])
- **User Story 2 (P2)**: Can draft Hook and Closing in parallel with US1 core sections, but needs US1 framework content to validate paralysis reduction language
- **User Story 3 (P3)**: Must wait for US1 and US2 content to exist before simplifying, formatting, and trimming to word budget

### Within Each User Story

**User Story 1 Flow**:
1. Draft BREAK, BEGIN, BUILD sections in parallel (T008, T009, T010 - all [P])
2. Draft Action Steps after core sections (T011 - needs framework understanding)
3. Validate framework completeness (T012 - needs all sections drafted)
4. Add additional examples (T013 - needs framework validated)

**User Story 2 Flow**:
1. Draft Hook (T014 - can run in parallel with US1 core sections)
2. Strengthen paralysis language (T015 - needs US1 framework sections)
3. Add focused work distinction (T016 - can go in multiple locations)
4. Draft Closing (T017 - can run in parallel with US1 core sections)
5. Validate positive tone (T018, T019 - needs all content)

**User Story 3 Flow**:
1. All tasks sequential (T020-T025) - each depends on content existing
2. Must complete after US1 and US2 content drafted

### Parallel Opportunities

- **Setup phase**: All tasks (T001, T002, T003) can run in parallel if desired
- **Foundational phase**: All review tasks (T004-T007) can run in parallel
- **User Story 1**: BREAK, BEGIN, BUILD sections (T008, T009, T010) can be drafted in parallel - different content sections, no dependencies
- **User Story 1 & 2 overlap**: Hook (T014) and Closing (T017) can be drafted in parallel with US1 core sections (T008-T010)

---

## Parallel Example: User Story 1

```text
# Launch all core framework sections together (T008, T009, T010):
Task: "Draft BREAK section (75-90 words) with bold name, construction blueprint metaphor, why, how, example"
Task: "Draft BEGIN section (75-90 words) with bold name, road trip metaphor, why, how, example"
Task: "Draft BUILD section (75-90 words) with bold name, climbing stairs metaphor, why, how, example"

# These can be written independently as they're separate content sections
```

---

## Implementation Strategy

### MVP First (User Story 1 Only - Core Framework Teaching)

1. Complete Phase 1: Setup (~20 min)
2. Complete Phase 2: Foundational (~30 min to review all artifacts)
3. Complete Phase 3: User Story 1 (~2 hours to draft BREAK-BEGIN-BUILD + Action Steps + examples)
4. **STOP and VALIDATE**: Check US1 Independent Test - Can reader create first 100-hour block plan?
5. **MVP delivered**: Complete 100-Hour Focus technique teaching (core value)

### Incremental Delivery

1. Complete Setup + Foundational → Design understanding solid
2. Add User Story 1 → Core framework teaching complete → **MVP** (reader can break goals into blocks)
3. Add User Story 2 → Paralysis reduction framing added → Reader feels goal is achievable (not just understands technique)
4. Add User Story 3 → Chapter simplified, formatted, trimmed to ≤500 words → Reader with 8th-grade level can implement immediately
5. Polish & Validation → All 38 quality gates pass → Ready for beta testing
6. Each story adds value without breaking previous stories

### Sequential Strategy (Recommended for Content Creation)

Content creation benefits from sequential approach (vs. parallel team strategy):

1. Complete Setup + Foundational (Phase 1 & 2)
2. Draft User Story 1 core framework (Phase 3)
   - Can parallelize within story: BREAK, BEGIN, BUILD sections simultaneously
3. Add User Story 2 framing (Phase 4)
   - Hook and Closing can be drafted earlier, but refinement needs US1 content
4. Simplify and format (Phase 5)
   - Must have content to simplify
5. Final polish and validation (Phase 6)
   - Comprehensive quality checks

**Why Sequential**: Writing is iterative; later stories refine earlier content; hard to parallelize without creating inconsistencies; single writer benefits from maintaining voice and flow across sections.

---

## Estimated Time Investment

**Total time to implement Chapter 3**: ~4-5 hours (per quickstart.md)

- **Phase 1 (Setup)**: 20 min
- **Phase 2 (Foundational)**: 30 min
- **Phase 3 (US1 - Core Framework)**: 2 hours (Hook 20m + BREAK 25m + BEGIN 25m + BUILD 25m + Actions 30m + Examples 15m)
- **Phase 4 (US2 - Paralysis Framing)**: 45 min (Hook refinement 10m + Language strengthening 15m + Focused work 10m + Closing 15m)
- **Phase 5 (US3 - Simplification)**: 1 hour (Vocabulary 15m + Formatting 15m + Structure 10m + Word count 10m + Jargon removal 5m + Tool-free check 5m)
- **Phase 6 (Polish & Validation)**: 1 hour (3-gate validation 30m + Pre-Flight 5m + Word budget 10m + Readability 5m + Components 5m + Refinement 30m + Self-test 5m)

**Buffer for revisions**: 30-60 min (adjust if validation reveals issues)

---

## Validation Tracking

### Success Criteria Validation (from spec.md)

After completion, validate against all 9 success criteria:

- [ ] **SC-001**: 90% of readers can explain 100-Hour Focus technique immediately after reading (User testing required)
- [ ] **SC-002**: Readers complete chapter in <5 minutes (Timed reading test required)
- [ ] **SC-003**: 85% report feeling less overwhelmed (User testing required)
- [ ] **SC-004**: Readers create first block plan within 1 hour (User testing required)
- [ ] **SC-005**: 90%+ comprehension at 8th-grade level (Validated by readability checker in T029)
- [ ] **SC-006**: 80% completion rate (User testing required)
- [ ] **SC-007**: 85% feel more motivated (User testing required)
- [ ] **SC-008**: Scan in <2 minutes and grasp concept (Validated by formatting in T021)
- [ ] **SC-009**: 90% can plan without apps/tools (Validated by tool-free check in T025)

**Validated during implementation**: SC-005, SC-008, SC-009
**Requires user testing**: SC-001, SC-002, SC-003, SC-004, SC-006, SC-007

### Functional Requirements Tracking

All 13 functional requirements mapped to tasks:

- **FR-001** (Complete technique): T008, T009, T010, T011, T012
- **FR-002** (100h rationale): T008 (BREAK section includes "why")
- **FR-003** (Focused work distinction): T016
- **FR-004** (2+ examples): T008 (first example), T013 (additional example)
- **FR-005** (Action steps within 1h): T011
- **FR-006** (Positive language): T018
- **FR-007** (8th-grade vocabulary): T020, T029
- **FR-008** (Scannable format): T021
- **FR-009** (4-part structure): T022
- **FR-010** (≤500 words): T023, T028
- **FR-011** (Empowering closing): T017
- **FR-012** (No jargon): T024
- **FR-013** (Tool-free): T025

All requirements covered by task list.

---

## Notes

- **[P] tasks**: Different content sections that can be drafted independently (e.g., BREAK, BEGIN, BUILD)
- **[Story] label**: Maps task to specific user story for traceability and independent testing
- **Word budget discipline**: Track word counts continuously during drafting to avoid massive cuts later
- **Validation early**: Run Quick Pre-Flight Check (T027) as soon as all sections drafted to catch issues before final polish
- **Metaphor consistency**: Ensure construction blueprint (BREAK), road trip (BEGIN), climbing stairs (BUILD) metaphors are clear and distinct
- **Concrete specificity**: Always use exact numbers (100 hours, 400 hours, 4 blocks) vs. vague language ("some time", "a few chunks")
- **Readability priority**: If forced to choose between word count and clarity, prioritize clarity within constitutional ≤500 word limit
- **No heroic writing**: Follow quickstart.md systematically; process is designed to produce quality output efficiently
- **Commit frequency**: Commit after each phase completion for rollback capability
- **Stop at checkpoints**: Validate independently at each checkpoint before proceeding to next phase
- **Avoid**: Complexity creep (keep technique simple, pen/paper implementable), jargon slip (no planning terminology), word budget overflow (track continuously), missing concrete examples (every abstract concept needs specific instance)

---

## Next Steps After Completion

1. **User Testing**: Recruit 5-10 beta readers matching target audience (adults with large goals, 8th-grade+ reading level)
2. **Validation Testing**: Test all 9 success criteria (SC-001 through SC-009) with beta readers
3. **Feedback Collection**: Gather feedback on clarity (can they explain technique?), motivation (do they feel capable?), actionability (did they create block plan?)
4. **Refinement**: Incorporate feedback while maintaining ≤500 word limit and constitutional compliance
5. **Final Validation**: Re-run contracts/blueprint-breakthrough-schema.md validation after refinements
6. **Publication Ready**: Mark chapter as complete and ready for book compilation
7. **PHR Creation**: Document implementation process in Prompt History Record

**Questions during implementation?** Reference:
- **Technical details**: data-model.md (framework structure, components)
- **Rationale/research**: research.md (why 100h, framework decision, examples)
- **Quality gates**: contracts/blueprint-breakthrough-schema.md (38 checkboxes)
- **Step-by-step process**: quickstart.md (10-step writer's guide)
- **Requirements**: spec.md (all FR and SC definitions)
- **Overall approach**: plan.md (technical context, phase summaries)
