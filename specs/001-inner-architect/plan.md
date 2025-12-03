# Implementation Plan: Chapter 1 - The Inner Architect

**Branch**: `001-inner-architect` | **Date**: 2025-12-03 | **Spec**: [spec.md](spec.md)
**Input**: Feature specification from `/specs/001-inner-architect/spec.md`

## Summary

Create Chapter 1 titled "The Inner Architect" that teaches readers the Voice Changer technique—a 3-step method for transforming negative self-talk into positive action. The chapter must deliver immediate, actionable value within 500 words, adhering strictly to all four constitutional principles: positive/motivational tone, simple/concise style, actionable knowledge, and focused length. Target outcome: readers can recall and apply the technique to transform at least one negative thought within 10 minutes of reading.

## Technical Context

**Content Type**: Written self-help chapter (Markdown format)
**Language/Version**: English, 8th-grade reading level
**Primary Dependencies**:
- Constitution v1.0.0 (governance document)
- Markdown formatting standards
**Storage**: Static text files in repository
**Testing**: Manual content review against constitutional quality gates
**Target Platform**: Multi-platform delivery (web, mobile, print-ready)
**Project Type**: Content creation (not software development)
**Performance Goals**:
- 5-minute reading time maximum
- 2-minute scan time for core concepts
- 10-minute application time (technique to action)
**Constraints**:
- Exactly 500 words maximum (Constitution Principle IV)
- Mandatory 4-part structure: Hook (50-75w) → Core (250-300w) → Actions (100-150w) → Closing (25-50w)
- 8th-grade vocabulary only
- 3-4 sentence paragraphs maximum
**Scale/Scope**: Single chapter; first in multi-chapter book series

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

### Principle I: TONE - POSITIVE & MOTIVATIONAL ✓

- [x] Content frames challenges as growth opportunities
- [x] Uses action-oriented, empowering language
- [x] Does NOT dwell on past failures or regrets
- [x] Celebrates small wins and progress
- [x] Maintains optimistic, can-do tone

**Status**: PASS - Spec explicitly requires positive, motivational language (FR-004) and empowering closing statement (FR-009)

### Principle II: STYLE - SIMPLE & CONCISE ✓

- [x] Uses conversational, everyday vocabulary
- [x] Avoids jargon and academic terminology (FR-010)
- [x] Prefers short sentences and paragraphs (max 3-4 sentences)
- [x] Eliminates filler words
- [x] Scannable with clear headings and bullet points (FR-006)

**Status**: PASS - Spec mandates 8th-grade reading level (FR-005), scannable format (FR-006), no jargon (FR-010)

### Principle III: KNOWLEDGE - ACTIONABLE ✓

- [x] Includes specific, concrete actions (FR-003)
- [x] Provides practical techniques (3-step Voice Changer)
- [x] Enables immediate implementation (within 10 minutes per SC-004)
- [x] Delivers measurable value (SC-001 through SC-008)
- [x] No information that cannot be acted upon

**Status**: PASS - Spec requires numbered action steps (FR-003) implementable within 10 minutes, with 2+ concrete examples (FR-002)

### Principle IV: LENGTH - FOCUSED ✓

- [x] Total chapter length ≤ 500 words (FR-008)
- [x] Prioritizes depth over breadth
- [x] Ruthless editing required
- [x] Clarity not sacrificed for brevity
- [x] Every word earns its place

**Status**: PASS - Spec explicitly mandates 500-word maximum (FR-008) with structured word allocation across 4 sections

### Content Structure Compliance ✓

- [x] Opening Hook (50-75 words) - FR-007
- [x] Core Teaching (250-300 words) - FR-007
- [x] Action Steps (100-150 words) - FR-007
- [x] Closing Motivation (25-50 words) - FR-007

**Status**: PASS - Spec requires exact constitutional structure (FR-007)

### Quality Gates (Pre-Publication) ✓

All constitutional quality gates mapped to spec requirements:
- Tone Check → FR-004, FR-009
- Simplicity Check → FR-005, FR-010
- Action Check → FR-003, FR-002
- Length Check → FR-008
- Value Check → SC-001 through SC-008
- Clarity Check → FR-005, FR-006
- Structure Check → FR-007
- Scan Test → SC-008 (2-minute scan)
- Action Test → SC-004 (10-minute application)
- Motivation Test → SC-003, SC-007 (85%+ motivation increase)

**Overall Constitution Check**: ✅ **PASS** - All principles satisfied, no violations

## Project Structure

### Documentation (this feature)

```text
specs/001-inner-architect/
├── plan.md              # This file (/sp.plan command output)
├── research.md          # Phase 0 output - writing best practices
├── data-model.md        # Phase 1 output - content structure model
├── quickstart.md        # Phase 1 output - writer's guide
├── contracts/           # Phase 1 output - content validation rules
│   └── voice-changer-schema.md
└── spec.md              # Feature specification (already exists)
```

### Content Output (repository root)

```text
content/
└── chapters/
    └── 01-inner-architect.md    # Final chapter output

.specify/
└── validation/
    └── quality-checklist.md     # Reusable validation checklist
```

**Structure Decision**: Using content-focused structure rather than traditional software project layout. This is a content creation project, so no `src/`, `tests/`, or code directories are needed. Content files will be stored in `content/chapters/` with validation tooling in `.specify/validation/`.

## Complexity Tracking

> No constitutional violations detected. This section is not needed.

---

## Phase 0: Research & Best Practices

**Objective**: Research effective self-help writing techniques and gather best practices for the Voice Changer method to ensure maximum reader impact.

**Research Questions**:
1. What are proven techniques for explaining multi-step processes in 300 words or less?
2. How do successful self-help authors maintain positive tone while addressing difficult topics?
3. What examples work best for illustrating negative-to-positive thought transformation?
4. How can we structure the 3-step Voice Changer technique for maximum memorability?

**Output**: `research.md` documenting findings and approach

---

## Phase 1: Content Design

**Objective**: Create detailed content model, validation contracts, and writer's guide.

**Deliverables**:
1. **data-model.md**: Structure of the Voice Changer technique, example templates, tone guidelines
2. **contracts/voice-changer-schema.md**: Validation rules for content quality (word counts, readability scores, required elements)
3. **quickstart.md**: Step-by-step guide for writing/reviewing Chapter 1

---

## Next Steps

After `/sp.plan` completion:
1. Review research.md findings
2. Validate data-model.md against spec requirements
3. Run `/sp.tasks` to generate implementation tasks
4. Begin content drafting following quickstart.md guide
