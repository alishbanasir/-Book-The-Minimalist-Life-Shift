# Implementation Plan: Chapter 5 - The Unspoken Purpose

**Branch**: `005-unspoken-purpose` | **Date**: 2025-12-03 | **Spec**: [spec.md](spec.md)
**Input**: Feature specification from `/specs/005-unspoken-purpose/spec.md`

**Note**: This template is filled in by the `/sp.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

Create Chapter 5: "The Unspoken Purpose" teaching purpose-connection technique for linking small daily actions (making coffee, answering emails, exercising) to higher purpose or desired legacy. The chapter must explain what "unspoken purpose" means (underlying values/impact already guiding life), provide concrete examples of connecting mundane tasks to purpose, and enable readers to identify their unspoken purpose and apply the technique within 5 minutes. Maximum 500 words, 8th-grade reading level, tool-free implementation (mindful awareness sufficient, no journals/apps/coaches).

**Technical Approach**: Content creation using Markdown with purpose psychology simplified to layperson language. Framework structure will likely follow memorable naming pattern (similar to Chapter 4's DECONSTRUCT-LEARN-REMOVE-PRACTICE). Focus on practical application: readers must understand WHAT their unspoken purpose is, WHY small actions build legacy, and HOW to connect routine tasks to values. Success measured by reader ability to identify purpose (90%), feel routine is meaningful (85%), and connect one action to purpose within 5 minutes.

## Technical Context

**Content Format**: Markdown (.md)
**Primary Tools**: Text editor with word count, readability checker (readable.com or hemingwayapp.com)
**Storage**: File-based (content/chapters/ directory)
**Testing**: Manual validation against quality gates (constitution compliance, readability scores, user testing)
**Target Platform**: Written content for self-help book publication
**Project Type**: Content creation (not software development)
**Performance Goals**: 3-5 minute read time, <2 minute scan time, 90%+ reader recall, 85%+ feel meaningful
**Constraints**: ≤500 words total, 8th-grade reading level (Flesch-Kincaid grade 7-9), tool-free implementation (mindful awareness only)
**Scale/Scope**: Single chapter (~455-500 words), purpose-connection technique, 2+ concrete examples of mundane actions → purpose links

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

### Principle I: TONE - POSITIVE & MOTIVATIONAL
- ✅ **PASS**: Chapter focuses on connecting actions to purpose (empowering) vs dwelling on living "without meaning"
- ✅ **PASS**: Framework reframes daily routines as meaningful expressions of values through intentional connection
- ✅ **PASS**: Spec requires "positive, empowering language without suggesting readers have 'wasted time' or 'lived without purpose'" (FR-006)
- ✅ **PASS**: Closing must reinforce reader's ability to live purposefully through small, intentional actions (FR-011)

### Principle II: STYLE - SIMPLE & CONCISE
- ✅ **PASS**: 8th-grade reading level required (FR-007, SC-005)
- ✅ **PASS**: Scannable format with clear headings, short paragraphs, bullet points (FR-008)
- ✅ **PASS**: No self-help jargon (no "authentic self", "soul's calling", "manifest destiny", "higher consciousness") (FR-012)
- ✅ **PASS**: Conversational vocabulary mandated throughout

### Principle III: KNOWLEDGE - ACTIONABLE
- ✅ **PASS**: Technique immediately implementable within 5 minutes (FR-005, SC-004)
- ✅ **PASS**: No journals, vision boards, life coaches, or meditation apps required (mindful awareness sufficient) (FR-013, SC-010)
- ✅ **PASS**: Specific numbered action steps required (FR-005)
- ✅ **PASS**: 2+ concrete examples showing technique applied to mundane actions (FR-004)

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

### Source Code (repository root)

```text
content/
└── chapters/
    └── chapter-5-unspoken-purpose.md  # Final chapter content (to be created in implementation)

.specify/
├── memory/
│   └── constitution.md                 # Project principles (reference)
└── templates/                          # Content structure templates (reference)

history/
└── prompts/
    └── 005-unspoken-purpose/          # PHRs for this feature
```

**Structure Decision**: This is a content creation project, not software development. The main deliverable is a single Markdown file (`content/chapters/chapter-5-unspoken-purpose.md`) containing the 500-word chapter. All planning artifacts live in `specs/005-unspoken-purpose/` and will guide the content writing process.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

**No violations detected.** All 4 constitutional principles satisfied by specification requirements.

---

## Phase 0: Research (Complete)

**Purpose**: Resolve all design decisions through research before implementation planning

**Duration**: Single planning session
**Status**: ✅ Complete

### Research Questions Answered

1. **What is "Unspoken Purpose"?**
   - **Answer**: Values or impact already guiding reader's life choices (family, creativity, service, learning, presence)—not requiring grand mission statement or dramatic discovery process
   - **Key Insight**: Most people already live with purpose; they just haven't named it—observable in what they protect (family time, creative moments, learning opportunities)
   - **Simple Definition**: "Your unspoken purpose is what you're already caring about—the values guiding your daily choices even when no one's watching."

2. **How to Structure the Purpose-Connection Framework?**
   - **Options Evaluated**: P-R-A (Pause-Reflect-Acknowledge), A-L-L (Ask-Link-Live), S-C-R (See-Connect-Recognize)
   - **Decision**: **SEE-CONNECT-RECOGNIZE** framework chosen because:
     - Simple, memorable 3-step pattern
     - Action verbs that anyone can do
     - "Recognize" emphasizes legacy-building (key insight)
     - Natural flow: awareness → connection → understanding
     - Each step takes <30 seconds (total technique under 2 minutes)

3. **What Metaphors Make Each Step Accessible?**
   - **SEE**: Waking up mid-routine (you're on autopilot, then suddenly aware)
   - **CONNECT**: Finding the thread (connection already exists, you just haven't noticed)
   - **RECOGNIZE**: Drops filling a cup (small actions alone insignificant, but thousands compound into legacy)

4. **What Concrete Examples Demonstrate the Technique?**
   - **4 Examples Identified** (diverse daily scenarios):
     1. **Morning Coffee** (daily ritual) → Purpose: Presence, self-care → Legacy: Intentional living
     2. **Work Email** (mundane task) → Purpose: Service, reliability → Legacy: Being helpful colleague
     3. **Evening Dishes** (household chore) → Purpose: Family, creating welcoming home → Legacy: Peaceful home environment
     4. **Bedtime Routine** (daily close) → Purpose: Family connection, learning → Legacy: Present parenting

5. **How to Handle Edge Cases?**
   - **Reader lacks clear purpose**: Start with what they protect (time for family, creative work, learning moments)
   - **Actions conflict with purpose**: Distinguish task from reason for task (unfulfilling job serves purpose of providing for family)
   - **Survival mode**: Acknowledge some seasons are endurance, not purpose-connection
   - **"Legacy" feels intimidating**: Replace with "impact" or "how you show up"

### Key Research Findings

**Purpose Psychology (Simplified)**:
- Viktor Frankl's logotherapy: Purpose found in daily choices, not grand missions
- Research on meaning: People who find daily tasks meaningful report higher life satisfaction
- Legacy studies: Most people want to be remembered for how they treated others in small moments, not achievements

**Writing Best Practices for This Chapter**:
- **Acknowledge + Reframe + Empower pattern**: "You complete tasks but feel disconnected" → "Purpose isn't in grand moments—it's in how you do small things" → "You're already building legacy; now do it consciously"
- **Concrete Specificity**: Use exact examples readers recognize (making coffee → choosing presence over rushing) vs. abstract language ("connect tasks to values")
- **Accessible Framing**: "Your values are already guiding you—just name them" vs. "Discover your life's purpose"

### Outputs

- **File**: `research.md` (complete)
- **Artifacts**: Framework decision (SEE-CONNECT-RECOGNIZE), 4 concrete examples with full breakdown, edge case solutions, writing patterns

---

## Phase 1: Design & Contracts (Complete)

**Purpose**: Create data model, validation contracts, and implementation guide based on research

**Duration**: Single planning session
**Status**: ✅ Complete

### Design Decisions Made

1. **Framework Structure (3 Steps)**:
   - **Step 1: SEE the Small Action** (75-85 words)
     - **Metaphor**: Waking mid-routine
     - **Why**: Awareness is first step; can't transform what you don't notice
     - **How**: 1) Pause 5-10 sec, 2) Name task, 3) No analysis
     - **Example**: "I'm washing these dishes right now"

   - **Step 2: CONNECT to Your Unspoken Purpose** (75-85 words)
     - **Metaphor**: Finding the thread
     - **Why**: Connection already exists; you just haven't named it
     - **How**: 1) Ask "How does this serve what I value?", 2) Think of purpose, 3) Find authentic link
     - **Example**: "Washing dishes creates welcoming home for family. I value order and care."

   - **Step 3: RECOGNIZE You're Building Legacy** (75-85 words)
     - **Metaphor**: Drops filling cup
     - **Why**: Legacy built through thousands of small choices, not big moments
     - **How**: 1) Acknowledge "This is how I show up", 2) Recognize compounding effect, 3) No pressure
     - **Example**: "By doing this with care, I'm the person who creates peaceful home. That's my legacy."

2. **Content Structure Map (500 Words Total)**:
   - **Opening Hook**: 50-75 words (acknowledge disconnection, reframe purpose as already present)
   - **Core Teaching**: 225-255 words
     - SEE section: 75-85 words
     - CONNECT section: 75-85 words
     - RECOGNIZE section: 75-85 words
   - **Action Steps**: 100-150 words (4 numbered steps implementable in 5 minutes)
   - **Closing Motivation**: 25-50 words (empower immediate action)

3. **Validation Schema (3 Quality Gates)**:
   - **Gate 1: Constitutional Compliance** (17 checks across 4 principles)
     - Tone: Positive/motivational (no dwelling on "wasted life")
     - Style: Simple/concise (8th-grade level, no jargon)
     - Knowledge: Actionable (tool-free, 5-minute implementation)
     - Length: ≤500 words with word budget per section

   - **Gate 2: Structural Requirements** (15 checks)
     - Hook structure correct (50-75w)
     - All 3 steps complete with name/metaphor/why/how/example
     - Action steps numbered 1-4 (100-150w)
     - Closing empowering (25-50w)

   - **Gate 3: Functional Requirements** (13 checks from spec.md)
     - SEE-CONNECT-RECOGNIZE taught explicitly (FR-001)
     - "Unspoken purpose" explained simply (FR-002)
     - Grand missions vs. simple purposes distinguished (FR-003)
     - 2+ concrete examples (FR-004)
     - All other functional requirements met (FR-005 to FR-013)

4. **Purpose-Connection Examples (4 Scenarios with Full Breakdown)**:
   - Each example includes: Task → SEE (what you're doing) → CONNECT (how it serves values) → RECOGNIZE (legacy being built)
   - Examples cover diverse scenarios: daily ritual, work task, household chore, parenting moment

### Outputs

- **Files**:
  - `data-model.md` (complete framework structure, content map, examples, validation requirements)
  - `contracts/unspoken-purpose-schema.md` (3 quality gates + success criteria validation)
  - `quickstart.md` (10-step writer's guide with templates, pitfalls, checklist)

- **Artifacts**:
  - Complete SEE-CONNECT-RECOGNIZE structure with all components
  - Word budget allocation for 500-word target
  - 3-gate validation system (55 total checks)
  - Step-by-step implementation guide for content writer

---

## Next Steps

**Ready for**: `/sp.tasks` command to generate task list for Chapter 5 implementation

**Implementation will create**: `content/chapters/chapter-5-unspoken-purpose.md` (500-word chapter following data model and validated against quality gates)

**Success Metrics** (post-delivery user testing):
- 90%+ readers recall SEE-CONNECT-RECOGNIZE technique
- 85%+ feel daily routine more meaningful
- Readers connect one action to purpose within 5 minutes
- 90%+ identify unspoken purpose within 10 minutes
- 85%+ apply technique without external tools
