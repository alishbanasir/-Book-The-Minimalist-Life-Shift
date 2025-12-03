---
id: 003
title: Chapter 5 Unspoken Purpose Tasks
stage: tasks
date: 2025-12-04
surface: agent
model: claude-sonnet-4-5-20250929
feature: 005-unspoken-purpose
branch: 005-unspoken-purpose
user: Alishba Nasir
command: /sp.tasks
labels: ["tasks", "chapter-5", "purpose-connection", "content-creation", "SEE-CONNECT-RECOGNIZE"]
links:
  spec: specs/005-unspoken-purpose/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - specs/005-unspoken-purpose/tasks.md
tests:
  - N/A (content creation - success criteria validation tests defined for post-delivery)
---

## Prompt

```text
/sp.tasks
```

## Response snapshot

Generated comprehensive task list for Chapter 5: The Unspoken Purpose implementation, organizing 47 tasks across 6 phases aligned with 3 user stories (P1: Reader connects actions to purpose, P2: Reader discovers unspoken purpose, P3: Reader implements tool-free practice).

**Task Organization by User Story**:

**Phase 1: Setup (6 tasks)** - Content infrastructure preparation
- Create directory structure, review constitution/quickstart/data-model/research, confirm readability tools

**Phase 2: Foundational (5 tasks)** - Framework internalization (blocking phase)
- Study SEE-CONNECT-RECOGNIZE components, study 4 concrete examples, study word budgets, review validation contract (55 checks), identify which examples to use

**Phase 3: User Story 1 (8 tasks)** - Core teaching (SEE-CONNECT-RECOGNIZE technique)
- Draft Hook (50-75w), draft SEE section (75-85w), draft CONNECT section (75-85w), draft RECOGNIZE section (75-85w)
- Validate word count (225-255w), validate structure (all components present)
- Run Gate 1: Constitutional Compliance (17 checks)
- Run Gate 2: Structural Requirements (core teaching sections)
- **Checkpoint**: Core technique teachable - reader can connect actions to purpose/legacy

**Phase 4: User Story 2 (7 tasks)** - Purpose discovery
- Enhance Hook with unspoken purpose definition, add purpose explanation to CONNECT section
- Ensure distinction between grand missions and simple purposes
- Add 2nd concrete example (minimum 2 required per FR-004)
- Validate simple language (8th-grade level, no jargon)
- Validate grand vs. simple purposes distinction in examples
- Run Gate 3: Functional Requirements for US2 (FR-002, FR-003, FR-004)
- **Checkpoint**: Reader can now identify unspoken purpose AND connect actions to it

**Phase 5: User Story 3 (12 tasks)** - Practical tool-free implementation
- Draft Action Steps (100-150w, 4 numbered steps, implementable in 5 minutes)
- Draft Closing Motivation (25-50w, empowering "now" language)
- Format for scannability (headings, bold names, short paragraphs, bullet points)
- Validate total chapter ≤500 words (hard constitutional limit)
- Run readability check (Flesch-Kincaid Grade 7-9)
- Run all 3 quality gates for full chapter (55 validation checks)
- **Checkpoint**: All user stories complete - chapter ready for polish

**Phase 6: Polish (9 tasks)** - Final validation and refinement
- Manual tone check (no "wasted time" language), manual jargon scan, visual formatting check
- Edge case review (4 edge cases from spec.md)
- Metaphor clarity check, word budget final check
- Run complete validation contract (55 checks across 3 gates must pass)
- Create validation-results.md documenting passed checks
- Final save with YAML frontmatter

**Key Design Decisions in Task Structure**:
- Tasks organized by user story (not by technical layer) to enable incremental delivery
- Each user story phase has independent test criteria (reader can validate story works on its own)
- Sequential execution required (content creation is linear: Hook → Core → Actions → Closing)
- Limited parallelization opportunities (setup reviews, polish checks) vs. software projects
- Word budgets enforced at each phase (Hook 50-75w, SEE 75-85w, CONNECT 75-85w, RECOGNIZE 75-85w, Actions 100-150w, Closing 25-50w)
- 3 quality gates (55 total checks) validate constitutional compliance and functional requirements
- MVP = User Story 1 only (core SEE-CONNECT-RECOGNIZE teaching - standalone valuable)

**Implementation Strategy**:
- **MVP First**: Setup → Foundational → US1 → Validate (core technique complete)
- **Incremental Delivery**: Add US2 (purpose discovery) → Add US3 (Action Steps + tool-free) → Polish → Deliver
- **Sequential Writer**: Single writer completes phases in order (content flow matters, can't parallelize Hook and Closing)

**Success Criteria Validation** (post-delivery):
- 10 comprehension/recall/application tests defined (SC-001, SC-004, SC-005, SC-008, SC-009, SC-010)
- 3 reading time tests (SC-002, SC-006, SC-008)
- 2 impact surveys (SC-003, SC-007)
- If criteria below target: Return to Polish phase, enhance, re-validate

## Outcome

- ✅ Impact: Complete, actionable task list ready for implementation; 47 tasks organized across 6 phases aligned with 3 user stories; each task specifies exact deliverable with word count and file path; validation checkpoints ensure quality gates pass before proceeding
- 🧪 Tests: Success criteria validation tests defined for post-delivery (10 tests: comprehension, reading time, application, impact); 3 quality gates (55 checks) embedded in tasks (Gate 1: Constitutional 17 checks, Gate 2: Structural 15 checks, Gate 3: Functional 13 checks)
- 📁 Files: tasks.md (47 tasks with dependencies, parallel opportunities, implementation strategy, success criteria validation plan)
- 🔁 Next prompts: Ready for /sp.implement to execute task list and create Chapter 5 content in content/chapters/chapter-5-unspoken-purpose.md
- 🧠 Reflection: Task generation successfully mapped 3 user stories to content creation phases (US1: core teaching SEE-CONNECT-RECOGNIZE, US2: unspoken purpose discovery, US3: tool-free Action Steps); content creation inherently sequential (can't parallelize Hook and Closing like software modules) but validation tasks can run concurrently (tone check, jargon scan, formatting); word budgets enforced at each phase ensuring 500-word constitutional limit achievable (Hook 50-75w + Core 225-255w + Actions 100-150w + Closing 25-50w = ~400-530w with adjustment buffer); MVP scope clear (User Story 1 = core teaching technique standalone valuable); incremental delivery strategy enables stakeholder review after each story increment (US1 → US2 → US3 → Polish); 55 validation checks distributed across phases prevent constitutional violations (catch tone/jargon/length issues early); edge case review task ensures 4 spec.md edge cases addressed (reader lacks purpose, actions conflict with purpose, routine offers no connection, legacy language intimidating); success criteria validation tests defined for post-delivery measurement (90%+ recall technique, 85%+ feel meaningful, 5-minute connection time, tool-free implementation); task format strict (checkbox, ID, [P] if parallel, [Story] label, description with file path) enables clear execution tracking

## Evaluation notes (flywheel)

- Failure modes observed: None; task generation completed successfully with all user stories mapped to implementation phases
- Graders run and results (PASS/FAIL): Task structure validation PASS (all 47 tasks follow checklist format: checkbox + ID + [P]/[Story] labels + description with file path); User story coverage PASS (all 3 stories from spec.md mapped to phases 3-5); Dependencies PASS (clear phase dependencies documented, foundational blocks all user stories, sequential execution within content creation)
- Prompt variant (if applicable): N/A (standard /sp.tasks workflow execution)
- Next experiment (smallest change to try): Monitor if 47 tasks manageable for single writer or if consolidation needed (e.g., combine drafting tasks into "Draft core teaching section" instead of separate SEE/CONNECT/RECOGNIZE tasks); test if word budget validation tasks (T016, T044) redundant or if they catch issues early enough to justify separate tasks; evaluate if 3 quality gates (Gates 1, 2, 3 run at different phases) provide better feedback than single final validation pass; assess whether parallel opportunities in Phase 6 (T039, T040, T041 manual checks) worth highlighting or if sequential safer for content quality; verify MVP scope (User Story 1 only) truly standalone valuable or if readers need Action Steps (User Story 3) for technique to be applicable; confirm incremental delivery strategy realistic for content creation (can stakeholder review partial chapter after US1?) or if only complete chapter makes sense; track if 55 validation checks comprehensive enough or if additional quality gates needed (e.g., example diversity check, metaphor consistency check)
