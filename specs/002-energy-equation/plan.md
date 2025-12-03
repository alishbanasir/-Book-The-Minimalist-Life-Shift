# Implementation Plan: Chapter 2 - The Energy Equation

**Branch**: `002-energy-equation` | **Date**: 2025-12-03 | **Spec**: [spec.md](spec.md)
**Input**: Feature specification from `/specs/002-energy-equation/spec.md`

**Note**: This template is filled in by the `/sp.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

Create Chapter 2: "The Energy Equation" teaching the 3-rule "Recharge, Not Resign" framework for preventing burnout and maintaining focus. The chapter must distinguish strategic rest (recharge) from giving up (resign), provide simple scientific backing for each rule, and enable readers to implement at least one technique within 1 hour. Maximum 500 words, 8th-grade reading level, equipment-free implementation.

**Technical Approach**: Content creation using Markdown with scientific research simplified to layperson language. Framework structure follows alliterative naming pattern (like Chapter 1's CATCH-CHALLENGE-CHANGE). Each rule includes: name + metaphor + why (simple neuroscience) + how + example. Success measured by reader recall (90%), comprehension of recharge vs resign distinction (85%), and immediate application (within 1 hour).

## Technical Context

**Content Format**: Markdown (.md)
**Primary Tools**: Text editor with word count, readability checker (readable.com or hemingwayapp.com)
**Storage**: File-based (content/chapters/ directory)
**Testing**: Manual validation against quality gates (constitution compliance, readability scores, user testing)
**Target Platform**: Written content for self-help book publication
**Project Type**: Content creation (not software development)
**Performance Goals**: 3-5 minute read time, <2 minute scan time, 90%+ reader recall
**Constraints**: ≤500 words total, 8th-grade reading level (Flesch-Kincaid grade 7-9), equipment-free implementation
**Scale/Scope**: Single chapter (~455-500 words), 3-rule framework, 2+ concrete examples

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

### Principle I: TONE - POSITIVE & MOTIVATIONAL
- ✅ **PASS**: Chapter focuses on "Recharge" (empowering action) vs dwelling on burnout symptoms
- ✅ **PASS**: Framework reframes rest as strategic strength, not weakness/laziness
- ✅ **PASS**: Spec requires "positive, motivational language throughout" (FR-006)
- ✅ **PASS**: Closing must reinforce reader's capability to manage energy (FR-011)

### Principle II: STYLE - SIMPLE & CONCISE
- ✅ **PASS**: 8th-grade reading level required (FR-007, SC-005)
- ✅ **PASS**: Scannable format with clear headings, short paragraphs, bullet points (FR-008)
- ✅ **PASS**: Simple neuroscience explanations required, no jargon (FR-002, FR-012)
- ✅ **PASS**: Conversational vocabulary mandated throughout

### Principle III: KNOWLEDGE - ACTIONABLE
- ✅ **PASS**: All 3 rules immediately implementable within 1 hour (FR-005, SC-004)
- ✅ **PASS**: No equipment, apps, or lengthy preparation required (FR-013, SC-009)
- ✅ **PASS**: Specific numbered action steps required (FR-005)
- ✅ **PASS**: 2+ concrete examples showing rules applied to real situations (FR-004)

### Principle IV: LENGTH - FOCUSED
- ✅ **PASS**: Maximum 500 words explicitly required (FR-010)
- ✅ **PASS**: 4-part structure defined (Hook 50-75w, Core 250-300w, Actions 100-150w, Closing 25-50w) (FR-009)
- ✅ **PASS**: Depth prioritized over breadth within word limit

**Constitution Check Result: ✅ PASS - All 4 principles satisfied by specification requirements**

## Project Structure

### Documentation (this feature)

```text
specs/[###-feature]/
├── plan.md              # This file (/sp.plan command output)
├── research.md          # Phase 0 output (/sp.plan command)
├── data-model.md        # Phase 1 output (/sp.plan command)
├── quickstart.md        # Phase 1 output (/sp.plan command)
├── contracts/           # Phase 1 output (/sp.plan command)
└── tasks.md             # Phase 2 output (/sp.tasks command - NOT created by /sp.plan)
```

### Content Output (repository root)

```text
content/
└── chapters/
    ├── 01-inner-architect.md      # Chapter 1 (already complete)
    └── 02-energy-equation.md       # Chapter 2 (this feature)
```

**Structure Decision**: Content creation project using simple file-based storage. Each chapter is a standalone Markdown file in `content/chapters/` directory. No source code compilation required—content is the deliverable. Validation performed via manual review against quality checklists stored in `.specify/validation/`.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

**No violations detected** - Constitution Check passed for all 4 principles. No complexity justification required.

---

## Phase 0: Research (COMPLETE)

**Deliverable**: `research.md`

**Research Areas Completed**:

1. **Energy Management Science**: Simplified neuroscience (ego depletion, cortisol, ultradian rhythms) to 8th-grade level with analogies (phone battery, engine in high gear)

2. **Science-Backed Techniques**: Identified 3 equipment-free methods:
   - Physiological Sigh (Andrew Huberman, Stanford) - 15-30 seconds
   - Ultradian Rhythms (90-minute work blocks + 5-15 min breaks)
   - Task Switching (Attention Restoration Theory) - 10-20 minutes

3. **Alliterative Naming Pattern**: Proposed RECOGNIZE-RESTORE-RETURN (R-R-R) following Chapter 1's successful CATCH-CHALLENGE-CHANGE pattern

4. **Recharge vs Resign Distinction**: Defined key difference (time-bound/intentional vs indefinite/avoidance) with 4 concrete examples

5. **Writing Best Practices**:
   - Guilt reduction strategy (frame rest as performance tool, not permission)
   - Acknowledge + Reframe + Empower pattern
   - Scientific credibility with simplicity (analogies over jargon)
   - Scannable format elements

6. **Edge Case Handling**: Addressed "can't take break" situations (micro-recharges), chronic vs temporary fatigue (scope boundaries), misinterpretation risk

7. **Success Metrics Validation**: Confirmed all 9 success criteria (SC-001 to SC-009) achievable with proposed design

**Key Insights**:
- RECOGNIZE-RESTORE-RETURN provides clear, memorable progression
- All techniques accessible (breathing, walking, task-switching)
- Simple analogies enable 8th-grade comprehension without losing scientific credibility
- Time-bound emphasis critical to distinguish recharge from resignation

---

## Phase 1: Design (COMPLETE)

**Deliverables**: `data-model.md`, `contracts/energy-equation-schema.md`, `quickstart.md`

### 1. Data Model (Framework Structure)

**Core Entities Defined**:
- **Rule 1 (RECOGNIZE)**: Awareness system with phone battery metaphor, fatigue signal detection
- **Rule 2 (RESTORE)**: 3 restoration techniques with plugging-in metaphor, time-bound emphasis
- **Rule 3 (RETURN)**: Re-engagement process with refueling metaphor, proof of effectiveness

**Recharge vs Resign Distinction**:
- Created comparison table (6 aspects: duration, intent, activity, energy state, progress, feeling)
- Defined characteristics for both (time-bound vs unbounded, intentional vs passive)

**Content Structure Map**:
- Word budget allocation: Hook (50-75w), Core (250-300w), Actions (100-150w), Closing (25-50w)
- Mandatory components per rule: name, metaphor, why (neuroscience), how (action), example
- Validation requirements mapped to all 3 gates

**Technique Details Reference**:
| Technique | Time | Simple Science | When to Use |
|-----------|------|---------------|-------------|
| Physiological Sigh | 30 sec | Tells body "danger over" | Stress, overwhelm |
| Walk/Movement | 10-15 min | Fresh oxygen to brain | Mental fatigue, stuck |
| Task Switching | 10-20 min | Rests tired brain networks | Can't focus, blocks |

### 2. Validation Contract (Quality Gates)

**Gate 1: Constitutional Compliance** (13 checklist items)
- Principle I (Tone): 6 checks for positive/motivational language
- Principle II (Style): 6 checks for simplicity (grade 7-9, no jargon, scannable)
- Principle III (Action): 6 checks for immediate implementability
- Principle IV (Length): 6 checks for ≤500 words with section targets

**Gate 2: Structural Requirements** (10 checklist items)
- 4-part structure validation (Hook, Core, Actions, Closing)
- Component completeness (name, metaphor, why, how, example per rule)
- Formatting standards (benefit headings, bold usage, white space)

**Gate 3: Functional Requirements** (22 checklist items)
- All 13 functional requirements from spec.md (FR-001 to FR-013)
- All 9 success criteria validated (SC-001 to SC-009)

**Failure Handling**:
- Defined remediation strategies for each gate failure
- Common violations quick reference table
- Post-implementation validation checklist

### 3. Quickstart Writer's Guide

**10-Step Implementation Process**:

**Step 1**: Review word budget (5 min)
**Step 2**: Draft Opening Hook (15 min) - Acknowledge + Reframe + Empower pattern
**Step 3**: Draft RECOGNIZE section (20 min) - Name, metaphor, why, how, example
**Step 4**: Draft RESTORE section (25 min) - 3 techniques with time estimates
**Step 5**: Draft RETURN section (20 min) - Pick ONE next step emphasis
**Step 6**: Add Recharge vs Resign distinction (10 min) - 20-25 word contrast
**Step 7**: Draft Action Steps (25 min) - 3-4 numbered, immediate actions
**Step 8**: Draft Closing Motivation (10 min) - Empowering, no qualifiers
**Step 9**: Validate Against Quality Gates (30 min) - All 3 gates must pass
**Step 10**: Polish & Finalize (30 min) - Cut filler, strengthen verbs, improve flow

**Quick Reference Card**:
- 3-rule framework summary table
- Word budget cheat sheet
- Validation quick check (5 items)

**Troubleshooting**:
- "I'm over 500 words" (5 remediation steps)
- "It sounds too academic" (4 simplification techniques)
- "Sections don't flow" (3 transition strategies)
- "Not empowering enough" (4 strengthening techniques)

**Estimated Time**: 2-3 hours for complete first draft (MVP)

---

## Implementation Strategy

### MVP Approach (Recommended)

**Phase 3: User Story 1 - Reader Learns Recharge Rules** (Priority: P1)
- Delivers complete RECOGNIZE-RESTORE-RETURN framework
- All 13 functional requirements satisfied
- Passes all 3 quality gates
- Target: 445-500 words

**Success Criteria**:
- Reader can recall all 3 rules (90% target)
- Reader understands recharge vs resign distinction (85% target)
- Reader applies at least one technique within 1 hour (100% target)

**Estimated Implementation Time**: 2-3 hours following quickstart.md guide

### Sequential Enhancement (Optional)

**Phase 4: User Story 2 - Reader Feels Motivated** (Priority: P2)
- Enhance motivational tone
- Strengthen guilt reduction language
- Ensure 85%+ report increased motivation

**Phase 5: User Story 3 - Reader Understands Quickly** (Priority: P3)
- Optimize for scanability (<2 min scan time)
- Simplify language for 90%+ 8th-grade comprehension
- Improve readability scores

**Note**: Unlike Chapter 1, Chapter 2 may achieve all 3 user stories in single MVP draft due to comprehensive planning and clear framework structure.

---

## Dependencies & Assumptions

### Dependencies
- Constitution v1.0.0 (established governance)
- Chapter 1 success pattern (alliterative naming, 4-part structure)
- Content creation workflow (not software development)
- Manual validation tools (readability checkers, word count)

### Assumptions
- Target audience: Adults experiencing mild-moderate burnout (not clinical)
- Reading context: Exhausted readers need extra-clear content
- Prior knowledge: No scientific background required
- Implementation context: Everyday environments (office, home, commute)
- Scientific claims: Simplified but accurate (no pseudoscience)
- Rule structure: Follows Chapter 1 pattern (name, metaphor, why, how, example)

---

## Success Metrics

### From Specification (spec.md)

**Primary Metrics** (User Story 1 - MVP):
- **SC-001**: 90% recall all 3 rules immediately after reading
- **SC-003**: 85% understand difference between recharge vs resign
- **SC-004**: Apply at least one rule within 1 hour of reading

**Quality Metrics**:
- **SC-002**: <5 min read time (500-word limit enables)
- **SC-005**: 90%+ comprehension at 8th-grade level
- **SC-006**: 80% completion rate (engaging hook, quick delivery)

**Impact Metrics**:
- **SC-007**: 85% feel less guilty about resting
- **SC-008**: <2 min scan time for core concepts
- **SC-009**: 90% can implement without equipment

### Validation Criteria (All Must Pass)

✅ **Constitutional Compliance**: All 4 principles satisfied
✅ **Structural Requirements**: 4-part structure with all components
✅ **Functional Requirements**: All 13 FR items from spec.md
✅ **Readability**: Flesch-Kincaid grade 7-9
✅ **Length**: ≤500 words total

---

## Risk Analysis

### Technical Risks (Content Quality)

**Risk 1: Oversimplification Loses Scientific Credibility**
- **Mitigation**: Use analogies grounded in real science (phone battery = glucose depletion)
- **Validation**: Test with scientifically literate readers (do they cringe?)

**Risk 2: Exceeding 500-Word Limit**
- **Mitigation**: Word budget allocation with 5-55 word buffer
- **Validation**: Check word count after each section, edit ruthlessly

**Risk 3: "Recharge" Misinterpreted as Procrastination Permission**
- **Mitigation**: Emphasize time-bound nature + RETURN step (proving effectiveness)
- **Validation**: Explicit Recharge vs Resign distinction section

**Risk 4: Too Academic/Complex for 8th-Grade Level**
- **Mitigation**: Analogies, short sentences, readability testing
- **Validation**: Test on readable.com (target grade 7-9)

### User Experience Risks

**Risk 5: Readers Feel Guilty About Resting Despite Framework**
- **Mitigation**: Frame recharge as performance tool (science-backed strength)
- **Validation**: Test with sample readers (do they report reduced guilt?)

**Risk 6: Techniques Don't Work in Constrained Situations**
- **Mitigation**: Include micro-recharges in Action Steps (3 breaths, shoulder rolls)
- **Validation**: Test with readers in meetings/childcare scenarios

---

## Next Steps

### Immediate: Begin Implementation

**Option 1: Generate Task List**
Run `/sp.tasks` to create detailed implementation task list following Chapter 1 pattern (51 tasks in 6 phases)

**Option 2: Start Writing Directly**
Use `quickstart.md` 10-step guide to draft Chapter 2 immediately (2-3 hours)

**Recommended**: Option 2 (direct implementation) because:
- Planning is comprehensive and actionable
- Quickstart provides step-by-step templates
- Chapter 2 structure mirrors successful Chapter 1
- Task generation may add overhead without additional value for content creation

### After MVP Complete

1. **Validate**: Run all 3 quality gates (contracts/energy-equation-schema.md)
2. **Test**: Sample 2-3 readers (can they apply technique successfully?)
3. **Polish**: Make micro-edits based on feedback
4. **Publish**: Mark as ready, proceed to next chapter if applicable

---

## Planning Summary

**Completed Deliverables**:
- ✅ `plan.md` - This document (Technical Context, Constitution Check, structure)
- ✅ `research.md` - Energy management science, alliterative naming, writing best practices
- ✅ `data-model.md` - Framework structure, component definitions, word budget allocation
- ✅ `contracts/energy-equation-schema.md` - 3-gate validation with 45+ checklist items
- ✅ `quickstart.md` - 10-step writer's guide with templates and troubleshooting

**Implementation Ready**: ✅ All planning artifacts complete, ready for `/sp.tasks` or direct writing

**Estimated Implementation Time**: 2-3 hours for MVP (User Story 1 complete)

**Success Criteria**: Chapter teaches RECOGNIZE-RESTORE-RETURN framework, passes all quality gates, enables reader to apply technique within 1 hour

---

**Plan Status**: ✅ COMPLETE | **Date**: 2025-12-03 | **Next Command**: `/sp.tasks` or begin writing with `quickstart.md`
