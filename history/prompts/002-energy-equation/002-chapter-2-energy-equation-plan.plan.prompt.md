---
id: 002
title: Chapter 2 Energy Equation Plan
stage: plan
date: 2025-12-03
surface: agent
model: claude-sonnet-4-5-20250929
feature: 002-energy-equation
branch: 002-energy-equation
user: Alishba Nasir
command: /sp.plan
labels: ["plan", "chapter-2", "energy-management", "recharge-not-resign", "research"]
links:
  spec: specs/002-energy-equation/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - specs/002-energy-equation/plan.md
  - specs/002-energy-equation/research.md
  - specs/002-energy-equation/data-model.md
  - specs/002-energy-equation/contracts/energy-equation-schema.md
  - specs/002-energy-equation/quickstart.md
tests:
  - N/A (planning document)
---

## Prompt

```text
/sp.plan
```

## Response snapshot

Created comprehensive implementation plan for Chapter 2: The Energy Equation with complete research, framework design, validation contracts, and writer's guide.

**Phase 0: Research (COMPLETE)**
- **Energy Management Science**: Simplified neuroscience (ego depletion, cortisol, ultradian rhythms) to 8th-grade level with analogies (phone battery, engine in high gear)
- **3 Science-Backed Techniques**: Physiological Sigh (Huberman, 30 sec), Ultradian Rhythms (90-min blocks), Task Switching (10-20 min)
- **Alliterative Pattern**: Proposed RECOGNIZE-RESTORE-RETURN (R-R-R) following Chapter 1's CATCH-CHALLENGE-CHANGE success
- **Recharge vs Resign**: Defined critical distinction (time-bound/intentional vs indefinite/avoidance) with 4 concrete examples
- **Writing Best Practices**: Guilt reduction (frame rest as performance tool), Acknowledge + Reframe + Empower pattern, scientific credibility with simplicity
- **Edge Cases**: Micro-recharges (can't take break), chronic vs temporary fatigue (scope boundaries), misinterpretation prevention

**Phase 1: Design (COMPLETE)**

1. **Data Model** (data-model.md):
   - **Rule 1 (RECOGNIZE)**: Phone battery metaphor, fatigue signal detection (can't focus, irritated, tense)
   - **Rule 2 (RESTORE)**: Plugging-in metaphor, 3 techniques (breathing, walking, task-switching) with time estimates
   - **Rule 3 (RETURN)**: Refueling metaphor, pick ONE next step, prove effectiveness
   - **Recharge vs Resign Table**: 6-aspect comparison (duration, intent, activity, energy state, progress, feeling)
   - **Word Budget**: Hook 50-75w, Core 250-300w, Actions 100-150w, Closing 25-50w (total ≤500w)

2. **Validation Contract** (contracts/energy-equation-schema.md):
   - **Gate 1 (Constitutional)**: 13 checklist items across 4 principles (tone, style, action, length)
   - **Gate 2 (Structural)**: 10 checklist items (4-part structure, component completeness, formatting)
   - **Gate 3 (Functional)**: 22 checklist items (all 13 FR requirements, all 9 success criteria)
   - **Failure Handling**: Remediation strategies for each gate + common violations reference table

3. **Quickstart Writer's Guide** (quickstart.md):
   - **10-Step Process**: Word budget review → 6 drafting steps → validation → polish (2-3 hours total)
   - **Templates**: Each step includes specific template with examples (Hook, RECOGNIZE, RESTORE, RETURN, distinction, actions, closing)
   - **Troubleshooting**: 4 common problems with 3-5 solutions each (over 500 words, too academic, flow issues, not empowering)
   - **Quick Reference Card**: Framework summary table, word budget cheat sheet, validation quick check

**Planning Summary**:
- ✅ **Technical Context**: Content creation (Markdown), manual validation tools, 500-word constraint
- ✅ **Constitution Check**: All 4 principles pass (positive tone, simple style, actionable knowledge, focused length)
- ✅ **Implementation Strategy**: MVP approach recommended (direct writing with quickstart.md, 2-3 hours)
- ✅ **Risk Analysis**: 6 risks identified with mitigation strategies (oversimplification, word limit, misinterpretation, complexity, guilt, constraints)
- ✅ **Success Metrics**: All 9 SC targets mapped to design elements (90% recall via alliterative naming, 85% understand distinction via explicit section, etc.)

**Key Innovation**: RECOGNIZE-RESTORE-RETURN framework with time-bound emphasis distinguishing strategic recharge from passive resignation—addresses common guilt barrier while maintaining constitutional positive tone.

## Outcome

- ✅ Impact: Complete, validated implementation plan ready for task generation or direct writing; establishes clear architecture for energy management chapter
- 🧪 Tests: Validation contracts define 3 quality gates with 45+ checklist items; success criteria all testable (90% recall, 85% distinction understanding, <5 min read, grade 7-9)
- 📁 Files: plan.md (technical context, constitution check, phase summaries), research.md (science + best practices), data-model.md (framework structure), contracts/energy-equation-schema.md (validation gates), quickstart.md (10-step writer's guide)
- 🔁 Next prompts: Ready for /sp.tasks to generate task list OR begin writing immediately with quickstart.md guide (Option 2 recommended for content creation efficiency)
- 🧠 Reflection: Chapter 2 planning more comprehensive than Chapter 1 due to added complexity (scientific backing requirement + guilt reduction strategy); RECOGNIZE-RESTORE-RETURN alliterative pattern proven successful in Chapter 1, adapted for energy domain with stronger emphasis on time-bounded recharge vs indefinite resignation

## Evaluation notes (flywheel)

- Failure modes observed: None; planning complete on first pass with all required artifacts generated
- Graders run and results (PASS/FAIL): Constitution Check PASS (all 4 principles satisfied by spec requirements); Design completeness PASS (all mandatory components defined—framework structure, validation gates, writer's guide); Risk analysis PASS (6 risks identified with mitigations)
- Prompt variant (if applicable): N/A (standard /sp.plan workflow following Chapter 1 successful pattern)
- Next experiment (smallest change to try): Monitor if comprehensive quickstart.md (10-step guide with templates) enables faster MVP implementation than Chapter 1's task-based approach (51 tasks); may inform future planning workflow optimization (when to generate detailed task lists vs comprehensive writer's guides for content creation)
