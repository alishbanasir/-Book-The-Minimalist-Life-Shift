# Tasks: Chapter 5 - The Unspoken Purpose

**Input**: Design documents from `/specs/005-unspoken-purpose/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/, quickstart.md

**Tests**: Not applicable for content creation project (no code tests required)

**Organization**: Tasks are grouped by user story to enable independent implementation and validation of each story increment.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different sections, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths and word counts in descriptions

## Path Conventions

- **Content**: `content/chapters/` for final chapter file
- **Validation**: `specs/005-unspoken-purpose/contracts/` for quality gate validation
- **Documentation**: `specs/005-unspoken-purpose/` for planning artifacts

---

## Phase 1: Setup (Content Infrastructure)

**Purpose**: Prepare content creation environment and validation tools

- [X] T001 Create content directory structure (content/chapters/ if not exists)
- [X] T002 Review constitution.md to understand all 4 principles (Tone, Style, Knowledge, Length)
- [X] T003 [P] Review quickstart.md 10-step writer's guide (understand templates and pitfalls)
- [X] T004 [P] Review data-model.md for SEE-CONNECT-RECOGNIZE framework structure and word budgets
- [X] T005 [P] Review research.md for concrete examples and metaphors
- [X] T006 Confirm readability checker tool available (readable.com or hemingwayapp.com for Flesch-Kincaid validation)

---

## Phase 2: Foundational (Core Framework Understanding)

**Purpose**: Internalize the SEE-CONNECT-RECOGNIZE framework and preparation for content drafting

**⚠️ CRITICAL**: Complete understanding of framework before ANY drafting begins

- [X] T007 Study SEE-CONNECT-RECOGNIZE framework components (name, metaphor, why, how, example per step)
- [X] T008 [P] Study 4 concrete examples from research.md (morning coffee, work email, evening dishes, bedtime routine)
- [X] T009 [P] Study word budget allocation (Hook 50-75w, SEE 75-85w, CONNECT 75-85w, RECOGNIZE 75-85w, Actions 100-150w, Closing 25-50w)
- [X] T010 Review validation contract (contracts/unspoken-purpose-schema.md) to understand 3 quality gates (55 checks total)
- [X] T011 Identify which examples to use in chapter (minimum 2 required per FR-004, recommend coffee + dishes or email + bedtime)

**Checkpoint**: Framework internalized - ready to draft content sections

---

## Phase 3: User Story 1 - Reader Connects Daily Actions to Purpose (Priority: P1) 🎯 MVP

**Goal**: Teach SEE-CONNECT-RECOGNIZE technique enabling readers to link mundane tasks (making coffee, answering emails, exercising) to higher purpose/legacy

**Independent Test**: Reader can take any mundane daily task (brushing teeth, commuting, grocery shopping) and articulate how it connects to their larger purpose or legacy in authentic way (not forced positivity)

**Acceptance Criteria** (from spec.md):
1. Reader can identify specific way routine action serves higher purpose/legacy
2. Reader can explain why small actions matter more than waiting for "big moments"
3. Reader recognizes legacy is built through consistent small actions aligned with purpose

### Implementation for User Story 1

- [X] T012 [P] [US1] Draft Opening Hook (50-75 words) in content/chapters/chapter-5-unspoken-purpose.md acknowledging disconnection and reframing purpose as already present
- [X] T013 [US1] Draft SEE the Small Action section (75-85 words) with metaphor (waking mid-routine), why, how (3 steps), concrete example
- [X] T014 [US1] Draft CONNECT to Your Unspoken Purpose section (75-85 words) with metaphor (finding thread), why, how (ask "How does this serve what I value?"), same example with connection articulated
- [X] T015 [US1] Draft RECOGNIZE You're Building Legacy section (75-85 words) with metaphor (drops filling cup), why, how (acknowledge "this is how I show up"), same example with legacy frame
- [X] T016 [US1] Validate SEE-CONNECT-RECOGNIZE sections total 225-255 words (core teaching word budget)
- [X] T017 [US1] Validate all 3 steps include bold name, metaphor, why, how, example per data-model.md structure
- [X] T018 [US1] Run Gate 1: Constitutional Compliance validation (17 checks: T-001 to T-004 Tone, S-001 to S-005 Style, A-001 to A-005 Actionable, L-001 to L-007 Length)
- [X] T019 [US1] Run Gate 2: Structural Requirements validation for core teaching (STR-004 SEE section, STR-005 CONNECT section, STR-006 RECOGNIZE section, STR-007 word budget)

**Checkpoint**: Core teaching (SEE-CONNECT-RECOGNIZE) complete and validated - this is the foundational technique for US1

---

## Phase 4: User Story 2 - Reader Discovers Their Unspoken Purpose (Priority: P2)

**Goal**: Help reader identify their unspoken purpose (driving values/impact like family, creativity, service, growth) without needing dramatic life mission or grand vision

**Independent Test**: Reader can articulate unspoken purpose in 1-2 sentences using simple language, identifying 2-3 core values/impacts (e.g., "I want to raise confident children," "I want to create beauty," "I want to help others grow")

**Acceptance Criteria** (from spec.md):
1. Reader understands purpose doesn't require grand vision—already present in what they value
2. Reader can identify specific values/impacts already guiding their choices (even unconsciously)
3. Reader recognizes everyday purposes (present parent, create with hands, serve community) are as legitimate as world-changing goals

### Implementation for User Story 2

- [X] T020 [US2] Enhance Opening Hook (if needed) to mention unspoken purpose = values already guiding life (within 50-75w budget)
- [X] T021 [US2] Add "unspoken purpose" definition/explanation to Opening Hook or early in SEE section (FR-002: values/impact already guiding reader's life, even unconsciously)
- [X] T022 [US2] Ensure CONNECT section explains purpose as simple and specific vs. grand missions (FR-003: distinguish between "change the world" and "raise kind children")
- [X] T023 [US2] Add at least 1 additional concrete example beyond US1's example showing different type of unspoken purpose (FR-004: minimum 2 examples required—recommend morning coffee for presence/self-care OR work email for service/reliability)
- [X] T024 [US2] Validate unspoken purpose explanation uses simple language at 8th-grade level (no "existential," "transcendent," "actualize," "embody" per research.md)
- [X] T025 [US2] Validate examples distinguish grand missions from everyday purposes (show "raise kind children" is as valid as "change the world")
- [X] T026 [US2] Run Gate 3: Functional Requirements validation for US2 (FR-002 unspoken purpose explained, FR-003 grand vs. simple purposes, FR-004 2+ concrete examples)

**Checkpoint**: Reader can now identify their unspoken purpose AND connect actions to it

---

## Phase 5: User Story 3 - Reader Implements Simple, Practical Connection Practice (Priority: P3)

**Goal**: Enable busy reader to scan chapter in <2 minutes and grasp core concept; technique requires no journaling apps, vision boards, or life coaches—just mindful attention

**Independent Test**: Reader with 8th-grade education can read and understand entire chapter without dictionary, and can immediately connect one small action to purpose within 5 minutes using only thoughts (no journal, no app, no worksheet)

**Acceptance Criteria** (from spec.md):
1. Reader skimming in 2 minutes understands purpose-connection concept enough to attempt with next task
2. Reader without life-coach expertise comprehends method without feeling overwhelmed by abstract self-discovery
3. Reader can implement immediately using only mindful awareness and internal reflection (no tools)

### Implementation for User Story 3

- [X] T027 [P] [US3] Draft Action Steps section (100-150 words) with 4 numbered steps implementable within 5 minutes total
- [X] T028 [US3] Ensure Action Steps follow flow: 1) Identify purpose (name what you care about), 2) See task (pause and name it), 3) Connect (ask "How does this serve what I value?"), 4) Recognize (building legacy now)
- [X] T029 [US3] Validate Action Steps require no external tools (no "journal about," "use app to track," "create vision board," "schedule coaching session")
- [X] T030 [US3] Validate Action Steps use simple, direct language (no jargon: no "authentic self," "soul's calling," "manifest destiny," "higher consciousness" per FR-012)
- [X] T031 [P] [US3] Draft Closing Motivation (25-50 words) reinforcing reader capability to live purposefully NOW through small intentional actions
- [X] T032 [US3] Ensure Closing uses empowering language (not "someday you can live purposefully" but "start with the next task right now")
- [X] T033 [US3] Format entire chapter for scannability (clear headings with bold step names, short paragraphs 3-4 sentences max, bullet points for action steps per FR-008)
- [X] T034 [US3] Validate total chapter length ≤500 words (FR-010: hard constitutional limit)
- [X] T035 [US3] Run readability check (readable.com or hemingwayapp.com): Flesch-Kincaid Grade 7-9 target (FR-007, SC-005)
- [X] T036 [US3] Run Gate 1: Constitutional Compliance validation for full chapter (all 17 checks: Tone positive/empowering, Style simple/scannable, Knowledge actionable/tool-free, Length ≤500w)
- [X] T037 [US3] Run Gate 2: Structural Requirements validation for full chapter (STR-001 to STR-015: Hook, Core, Actions, Closing structure)
- [X] T038 [US3] Run Gate 3: Functional Requirements validation for full chapter (FR-001 to FR-013: all functional requirements met)

**Checkpoint**: All user stories complete - reader can discover purpose (US2), connect actions (US1), and implement immediately without tools (US3)

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final refinements ensuring chapter meets all success criteria and quality standards

- [X] T039 [P] Manual tone check: Verify no language suggesting readers "wasted time" or "lived without purpose" (FR-006, T-003)
- [X] T040 [P] Manual jargon scan: Confirm no self-help jargon ("authentic self," "soul's calling," "manifest destiny," "higher consciousness," "spiritual awakening") (FR-012, S-002)
- [X] T041 [P] Visual formatting check: Verify scannable format (clear headings, short paragraphs, bullet points, bold step names) (FR-008, S-005)
- [X] T042 Edge case review: Verify chapter addresses or acknowledges 4 edge cases from spec.md (reader lacks purpose, actions conflict with purpose, routine offers no connection, legacy language intimidating)
- [X] T043 Metaphor clarity check: Verify waking mid-routine (SEE), finding thread (CONNECT), drops filling cup (RECOGNIZE) metaphors use everyday references (not abstract) (S-003)
- [X] T044 Word budget final check: Hook 50-75w, SEE 75-85w, CONNECT 75-85w, RECOGNIZE 75-85w, Actions 100-150w, Closing 25-50w, Total ≤500w (L-001 to L-007)
- [X] T045 Run complete validation contract (contracts/unspoken-purpose-schema.md): All 55 checks across 3 gates must pass
- [X] T046 Create validation-results.md in contracts/ directory documenting all passed checks and any warnings
- [X] T047 Final save to content/chapters/chapter-5-unspoken-purpose.md with YAML frontmatter (chapter number, title, word count, reading level)

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion (need tools and understanding ready)
- **User Story 1 (Phase 3)**: Depends on Foundational phase (need framework internalized before drafting core teaching)
- **User Story 2 (Phase 4)**: Depends on User Story 1 core teaching complete (builds on SEE-CONNECT-RECOGNIZE by adding purpose discovery)
- **User Story 3 (Phase 5)**: Depends on User Stories 1 and 2 (adds Action Steps and Closing to complete chapter for immediate tool-free implementation)
- **Polish (Phase 6)**: Depends on all user stories complete (final validation across entire chapter)

### User Story Dependencies

- **User Story 1 (P1)**: Core teaching (SEE-CONNECT-RECOGNIZE) - foundational technique that US2 and US3 build upon
- **User Story 2 (P2)**: Purpose discovery - requires US1's connection technique exists, adds unspoken purpose definition and examples
- **User Story 3 (P3)**: Practical implementation - requires US1's technique and US2's purpose explanation exist, adds Action Steps and tool-free accessibility

**Note**: Unlike software projects, content creation is inherently sequential (Hook → Core → Actions → Closing). User stories represent content increments, not parallel workstreams.

### Within Each User Story

- US1: Hook draft → SEE section → CONNECT section → RECOGNIZE section → Word count validation → Structural validation
- US2: Enhance Hook with purpose definition → Add purpose explanation to CONNECT → Add 2nd example → Validate language simplicity
- US3: Draft Action Steps → Draft Closing → Format for scannability → Validate word limit → Run all 3 quality gates

### Parallel Opportunities

Limited parallelization for content creation (linear writing process), but these can run concurrently:

- **Phase 1 (Setup)**: T003, T004, T005 (review different documents in parallel)
- **Phase 2 (Foundational)**: T008, T009 (study examples and word budgets concurrently)
- **Phase 3 (US1)**: T012 can draft Hook while studying framework (though sequential is safer)
- **Phase 5 (US3)**: T027, T031 (draft Action Steps and Closing in parallel if writer confident in flow)
- **Phase 6 (Polish)**: T039, T040, T041 (manual tone check, jargon scan, visual check all independent)

---

## Parallel Example: User Story 1

```text
# Sequential core (main writing flow):
T012: Draft Opening Hook (50-75 words)
T013: Draft SEE section (75-85 words)
T014: Draft CONNECT section (75-85 words)
T015: Draft RECOGNIZE section (75-85 words)

# Can parallelize validation (if desired):
T016: Validate word count (225-255w)
T017: Validate structure (all components present)
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup (understand tools and framework)
2. Complete Phase 2: Foundational (internalize SEE-CONNECT-RECOGNIZE)
3. Complete Phase 3: User Story 1 (core teaching section complete)
4. **STOP and VALIDATE**: Run Gates 1 and 2 on core teaching
5. Review with stakeholder if ready (core technique is teachable even without full chapter)

**MVP delivers**: SEE-CONNECT-RECOGNIZE framework taught with 1 concrete example - reader can connect actions to purpose

### Incremental Delivery

1. Complete Setup + Foundational → Writer ready
2. Add User Story 1 → Core teaching complete → Validate independently (MVP!)
3. Add User Story 2 → Purpose discovery added → Validate 2+ examples and simple language
4. Add User Story 3 → Action Steps + Closing added → Validate full chapter ≤500 words, tool-free, scannable
5. Polish → All 55 validation checks pass → Chapter ready for publication

**Each story increment adds value**:
- US1: Core technique (MVP - teachable on its own)
- US2: Purpose identification (removes "I don't know my purpose" barrier)
- US3: Immediate implementation (ensures reader can apply within 5 minutes, no tools)

### Sequential Writer Strategy

Single writer (typical for content creation):

1. Complete Setup + Foundational (understand framework)
2. Draft User Story 1: Hook + SEE + CONNECT + RECOGNIZE (core teaching)
3. Enhance for User Story 2: Add purpose definition, ensure 2+ examples, validate simplicity
4. Complete User Story 3: Add Action Steps + Closing, format for scannability, validate ≤500w
5. Polish: Run all 55 validation checks, refine until passing
6. Deliver: Save final chapter with frontmatter

---

## Notes

- **[P] tasks**: Different sections or independent validation checks (limited in content creation)
- **[Story] label**: Maps task to specific user story for incremental delivery and traceability
- **Content creation is sequential**: Unlike software, can't parallelize writing Hook and Closing (flow matters)
- **Validation is critical**: 3 quality gates (55 checks) ensure constitutional compliance and functional requirements met
- **Word budgets are strict**: Each section has target range; total ≤500 words is hard constitutional limit
- **Tool-free implementation**: FR-013 and SC-010 require technique works with mindful awareness only (no journals, apps, coaches)
- **Independent testing per story**:
  - US1: Reader can connect mundane task to purpose/legacy authentically
  - US2: Reader can identify their unspoken purpose in 1-2 simple sentences
  - US3: Reader can implement within 5 minutes using only thoughts (no external tools)
- **Commit after each phase**: Setup → Foundational → US1 → US2 → US3 → Polish (enables rollback if needed)
- **Stop at checkpoints**: Validate each user story increment independently before proceeding
- **Avoid**:
  - Vague tasks ("make it good") - all tasks specify exact deliverable with word count
  - Skipping validation - constitutional compliance mandatory
  - Over-engineering - stick to ≤500 words, no extra features beyond functional requirements
  - Jargon creep - validate against FR-012 banned terms list frequently

---

## Success Criteria Validation (Post-Delivery)

**After chapter complete, validate against spec.md success criteria** (SC-001 to SC-010):

### Comprehension & Recall Tests
- [ ] SC-001: Test 10 readers - 90%+ can explain SEE-CONNECT-RECOGNIZE technique immediately after reading
- [ ] SC-005: Test 10 readers with 8th-grade education - 90%+ comprehend without dictionary
- [ ] SC-008: Test 10 readers - can scan in <2 minutes and grasp core concept

### Reading Time Tests
- [ ] SC-002: Test 10 readers - complete chapter in <5 minutes on first read
- [ ] SC-006: Track 100 readers - 80%+ finish completely (high completion rate)

### Application Tests
- [ ] SC-004: Test 10 readers - successfully connect at least one mundane action to purpose within 5 minutes
- [ ] SC-009: Test 10 readers - 90%+ identify their unspoken purpose within 10 minutes
- [ ] SC-010: Test 10 readers - 85%+ apply technique without external tools (no journal/app/worksheet)

### Impact Tests
- [ ] SC-003: Survey 100 readers - 85%+ feel daily routine more meaningful after reading
- [ ] SC-007: Survey 100 readers - 85%+ feel more connected to sense of purpose

**If any success criteria below target**: Return to Polish phase, enhance clarity/examples/delivery, re-validate
