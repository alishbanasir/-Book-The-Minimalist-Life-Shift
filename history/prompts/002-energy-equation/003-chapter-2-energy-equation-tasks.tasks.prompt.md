---
id: 003
title: Chapter 2 Energy Equation Tasks
stage: tasks
date: 2025-12-03
surface: agent
model: claude-sonnet-4-5-20250929
feature: 002-energy-equation
branch: 002-energy-equation
user: Alishba Nasir
command: /sp.tasks
labels: ["tasks", "chapter-2", "energy-management", "recharge-not-resign", "task-generation"]
links:
  spec: specs/002-energy-equation/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - specs/002-energy-equation/tasks.md
tests:
  - N/A (task planning document)
---

## Prompt

```text
/sp.tasks
```

## Response snapshot

Generated comprehensive task list for Chapter 2: The Energy Equation with 61 tasks organized by user story, following the sequential content creation pattern from Chapter 1.

**Task Organization Structure**:

**Phase 1: Setup** (3 tasks)
- Verification of existing content infrastructure from Chapter 1
- Copy quality gates checklist for quick reference

**Phase 2: Foundational** (5 tasks)
- Text editor setup with word count
- Reference materials (data-model.md, contracts/, quickstart.md, research.md)
- Readability checker setup
- Review research findings and quickstart guide

**Phase 3: User Story 1 - Reader Learns Recharge Rules (P1)** 🎯 MVP (22 tasks)

*Content Drafting* (7 tasks):
- T009: Opening Hook (50-75w) - Acknowledge + Reframe + Empower pattern
- T010: RECOGNIZE the Drain (75-90w) - phone battery metaphor, fatigue signals
- T011: RESTORE the Tank (75-90w) - plugging-in metaphor, 3 techniques (breathing, walking, task-switching)
- T012: RETURN to Action (75-90w) - refueling metaphor, pick ONE next step
- T013: Recharge vs Resign distinction (20-25w) - time-bound vs indefinite contrast
- T014: Action Steps (100-150w) - Right Now, This Week, Going Forward
- T015: Closing Motivation (25-50w) - empowering, no qualifiers

*Validation* (5 tasks):
- Word count verification (section-by-section + total ≤500w)
- Framework completeness (all 3 rules with components)
- Recharge vs Resign distinction clarity
- Readability score (grade 7-9)
- Constitutional compliance (Gate 1)

*Editing* (5 passes):
- Cut filler words (maybe, perhaps, very, actually, hopefully)
- Strengthen verbs (active voice)
- Simplify scientific explanations (analogies clear)
- Improve flow (sentence variety, transitions)
- Polish tone (positive, empowering, no guilt)

*Final Validation* (5 tasks):
- Gate 1: Constitutional (tone, style, action, length)
- Gate 2: Structural (4-part structure, components, formatting)
- Gate 3: Functional (all 13 FR requirements)
- Acceptance scenarios (recall 3 rules, apply within 1 hour)
- Success criteria verification (90% recall via alliterative naming, equipment-free)

**Phase 4: User Story 2 - Reader Distinguishes Recharge from Resignation (P2)** (10 tasks)

*Enhancement* (5 tasks):
- Review guilt-reduction language (rest as performance tool)
- Strengthen Recharge vs Resign distinction (concrete contrast)
- Emphasize time-bound nature (5-15 minutes explicit)
- Verify scientific backing frames recharge as strategic
- Add example showing recharge → better outcome

*Validation* (5 tasks):
- Principle I compliance (positive tone, no guilt-dwelling)
- Distinction clarity test
- "Performance tool" framing throughout
- Sample reader testing (85%+ reduced guilt target)
- RETURN step proves effectiveness

**Phase 5: User Story 3 - Reader Implements Simple, Science-Based Techniques (P3)** (12 tasks)

*Simplification* (6 tasks):
- Remove jargon/academic terms (no "ego depletion", "cortisol", "ultradian")
- Check sentence length (avg 12-15w, max 25w)
- Ensure short paragraphs (2-4 sentences)
- Verify everyday metaphors (phone, plugging in, refueling)
- Add benefit-focused headings
- Verify scannable format (bold terms, bullet points)

*Validation* (6 tasks):
- Flesch-Kincaid readability (grade 7-9)
- Principle II compliance (simple & concise)
- All techniques equipment-free (body/mind only)
- Scan time test (<2 min for 3 R's)
- 8th-grade comprehension test (90%+ target)
- Implementation speed (within 5 minutes)

**Phase 6: Polish & Cross-Cutting** (9 tasks)
- Spell check, grammar review
- Markdown formatting verification
- Comprehensive 3-gate validation
- Final word count report (≤500w)
- Mandatory components verification
- Reader testing (2-3 additional readers)
- Micro-edits from feedback
- Edge case verification (micro-recharges, scope boundaries)
- Mark ready for publication

**Key Task Features**:
- ✅ All tasks follow strict checklist format: `- [ ] [TaskID] [P?] [Story?] Description with file path`
- ✅ 8 parallel opportunities identified (Setup, Foundational, Polish phases)
- ✅ Sequential content creation workflow (draft → validate → edit → final validate per story)
- ✅ Independent test criteria for each user story
- ✅ MVP scope: Phase 3 only (User Story 1) - 2-3 hours using quickstart.md
- ✅ Framework: RECOGNIZE-RESTORE-RETURN (R-R-R alliterative pattern)
- ✅ Word budget: 445-500 words (Hook 50-75w, Core 250-300w, Actions 100-150w, Closing 25-50w)

**Task Dependencies**:
- Setup → Foundational (BLOCKING) → US1 → US2 → US3 → Polish
- US1 creates draft, US2 enhances distinction/reduces guilt, US3 simplifies
- Each phase independently testable before proceeding

**Estimated Completion**:
- MVP (US1 only): 2-3 hours
- Full implementation (all phases): 4-6 hours

## Outcome

- ✅ Impact: Complete, actionable task list ready for implementation; enables systematic chapter creation with clear validation checkpoints
- 🧪 Tests: Manual validation tasks at each phase (20 validation tasks total across all user stories); 3 quality gates must pass before publication
- 📁 Files: tasks.md (61 tasks organized by user story with dependencies, parallel opportunities, and implementation strategy)
- 🔁 Next prompts: Ready for /sp.implement to execute task list OR begin writing directly following tasks.md task sequence
- 🧠 Reflection: Task structure mirrors Chapter 1 successful pattern (Setup → Foundational → US1 MVP → US2 Enhancement → US3 Polish → Final Polish); adapted for Chapter 2's added complexity (scientific backing, guilt reduction, recharge vs resign distinction); 5 editing passes vs Chapter 1's 4 due to scientific simplification requirement

## Evaluation notes (flywheel)

- Failure modes observed: None; task generation complete with all 61 tasks properly formatted and organized
- Graders run and results (PASS/FAIL): Format validation PASS (all tasks follow `- [ ] [TID] [P?] [Story?] Description with path` format); Organization PASS (6 phases, sequential user story dependencies, 8 parallel tasks identified); Completeness PASS (drafting, validation, editing, final validation for each story; independent test criteria defined)
- Prompt variant (if applicable): N/A (standard /sp.tasks workflow following Chapter 1 pattern)
- Next experiment (smallest change to try): Monitor if quickstart.md guide (with 10-step templates) reduces task execution time vs Chapter 1's task-only approach; may inform whether comprehensive writer's guides + lighter task lists are more efficient than detailed task decomposition for content creation (trade-off: upfront planning time vs execution speed)
