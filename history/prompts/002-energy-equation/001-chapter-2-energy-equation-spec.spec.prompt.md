---
id: 001
title: Chapter 2 Energy Equation Spec
stage: spec
date: 2025-12-03
surface: agent
model: claude-sonnet-4-5-20250929
feature: 002-energy-equation
branch: 002-energy-equation
user: Alishba Nasir
command: /sp.specify
labels: ["spec", "chapter-2", "energy-management", "burnout-prevention", "recharge"]
links:
  spec: specs/002-energy-equation/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - specs/002-energy-equation/spec.md
  - specs/002-energy-equation/checklists/requirements.md
tests:
  - N/A (specification document)
---

## Prompt

```text
Write Chapter 2: The Energy Equation, focusing on teaching the reader the 3 rules of 'Recharge, Not Resign' (scientifically simple ways to prevent burnout and maintain focus) within 500 words, adhering to the project Constitution.
```

## Response snapshot

Created comprehensive specification for Chapter 2: The Energy Equation with focus on "Recharge, Not Resign"—a 3-rule framework for preventing burnout and maintaining focus through science-based energy management.

**Specification Structure**:

1. **User Scenarios (3 stories)**:
   - **P1**: Reader learns 3 rules of "Recharge, Not Resign" and applies within 1 hour
   - **P2**: Reader distinguishes strategic recharge from resignation/quitting
   - **P3**: Reader implements simple, science-based techniques without equipment

2. **Functional Requirements (13 total)**:
   - Complete 3-rule framework with scientific backing (8th-grade level)
   - Clear distinction between "recharge" (strategic rest) and "resign" (giving up)
   - 2+ concrete examples of rules applied to burnout situations
   - Numbered action steps implementable within 1 hour
   - Positive language without dwelling on burnout symptoms
   - Simple vocabulary, scannable format
   - Mandatory 4-part structure (Hook → Core → Actions → Closing)
   - **500 words maximum** per Constitution
   - No equipment/apps/lengthy preparation required

3. **Success Criteria (9 measurable outcomes)**:
   - 90% recall all 3 rules immediately after reading
   - Completion in under 5 minutes
   - 85% understand difference between recharge vs resignation
   - Readers apply at least 1 rule within 1 hour
   - 90%+ comprehension at 8th-grade level
   - 80% completion rate
   - 85% feel less guilty about resting
   - 2-minute scan time for core concepts
   - 90% can implement without equipment

4. **Key Innovation**: Framework reframes rest as "recharge" (strategic, productive) vs "resign" (avoidance, giving up)—addresses guilt many readers feel about taking breaks

5. **Scientific Grounding**: Requires simple neuroscience/physiology backing for each rule while maintaining 8th-grade comprehension level

**Edge Cases Identified**:
- Chronic vs temporary fatigue
- Cannot-take-break situations (meetings, childcare, urgent deadlines)
- Misinterpretation of "recharge" as avoidance permission
- Maintaining scientific credibility with simple explanation

**Validation Checklist**: All quality gates passed (no implementation details, testable requirements, measurable success criteria, clear scope)

## Outcome

- ✅ Impact: Complete, validated specification ready for planning phase; establishes clear requirements for energy management chapter
- 🧪 Tests: Acceptance scenarios defined for all 3 user stories; success criteria include measurable validation points (90% recall, 85% understanding, 1-hour application)
- 📁 Files: spec.md (main specification), checklists/requirements.md (validation checklist—all items passing)
- 🔁 Next prompts: Ready for /sp.plan to create implementation plan with research on energy management techniques
- 🧠 Reflection: Chapter 2 builds naturally on Chapter 1's transformation approach, applying similar structure to energy/burnout domain; "Recharge, Not Resign" framing addresses common barrier (guilt about rest) while maintaining constitutional positive tone

## Evaluation notes (flywheel)

- Failure modes observed: None; specification complete on first draft with no clarifications needed
- Graders run and results (PASS/FAIL): Quality checklist validation PASS (all items checked—no implementation details, all requirements testable, all success criteria measurable and technology-agnostic)
- Prompt variant (if applicable): N/A (initial spec creation following Chapter 1 successful pattern)
- Next experiment (smallest change to try): Monitor if 3-rule "Recharge, Not Resign" framework provides sufficient structure for energy management teaching; may need to specify rule naming pattern (alliterative like Chapter 1's CATCH-CHALLENGE-CHANGE?) or leave flexible for planning phase research
