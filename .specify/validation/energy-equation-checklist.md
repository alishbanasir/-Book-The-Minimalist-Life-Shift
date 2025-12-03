# Validation Contract: Chapter 2 - The Energy Equation

**Feature**: 002-energy-equation
**Date**: 2025-12-03
**Purpose**: Quality gate validation schema for "Recharge, Not Resign" framework content

---

## Validation Overview

This contract defines the acceptance criteria for Chapter 2: The Energy Equation. Content MUST pass all three gates before publication.

**Gate 1**: Constitutional Compliance (BLOCKER - no exceptions)
**Gate 2**: Structural Requirements (BLOCKER - no exceptions)
**Gate 3**: Functional Requirements (BLOCKER - must meet spec.md requirements)

---

## Gate 1: Constitutional Compliance

### Principle I: TONE - POSITIVE & MOTIVATIONAL *(BLOCKER)*

**Requirement**: Content must be highly positive, motivational, and action-oriented without dwelling on negative situations.

**Validation Checklist**:

- [ ] **1.1** Every sentence inspires action or builds capability (no dwelling on burnout symptoms)
- [ ] **1.2** Recharge framed as STRENGTH/PERFORMANCE TOOL (not permission or excuse)
- [ ] **1.3** No guilt-inducing language ("you should have", "you failed to")
- [ ] **1.4** Challenges framed as opportunities ("feeling drained" → "ready to recharge")
- [ ] **1.5** Examples show successful outcomes (task completed after recharge, not just avoiding burnout)
- [ ] **1.6** Closing reinforces reader capability without qualifiers ("maybe", "hopefully")

**How to Test**:
- Read entire chapter aloud
- Count negative vs positive framings (target: 0 negative, 100% positive)
- Check if reader would feel motivated or guilty after reading

**Pass Criteria**: ALL checklist items marked complete with zero negative framing

---

### Principle II: STYLE - SIMPLE & CONCISE *(BLOCKER)*

**Requirement**: Content uses everyday conversational language at 8th-grade reading level.

**Validation Checklist**:

- [ ] **2.1** Flesch-Kincaid grade level 7-9 (test via readable.com or hemingwayapp.com)
- [ ] **2.2** No jargon or academic terms (no "ego depletion", "parasympathetic", "cortisol dysregulation")
- [ ] **2.3** Average sentence length 12-15 words (max 25 words per sentence)
- [ ] **2.4** Paragraphs 2-4 sentences maximum (no dense blocks of text)
- [ ] **2.5** Scannable format: clear headings, bold for key terms, bullet/numbered lists where appropriate
- [ ] **2.6** Analogies to everyday experiences (phone battery, refueling car, plugging in)

**How to Test**:
- Paste content into readable.com → check grade level
- Count words per sentence (average and max)
- Count sentences per paragraph
- Ask: "Would I say this out loud to a friend?"

**Pass Criteria**: Grade 7-9, no jargon, all formatting requirements met

---

### Principle III: KNOWLEDGE - ACTIONABLE *(BLOCKER)*

**Requirement**: Every section delivers immediately implementable, high-value techniques.

**Validation Checklist**:

- [ ] **3.1** All 3 rules (RECOGNIZE-RESTORE-RETURN) include specific HOW instructions
- [ ] **3.2** At least 3 equipment-free techniques provided (breathing, walking, task-switching)
- [ ] **3.3** Action Steps section has 3-4 numbered, specific actions
- [ ] **3.4** Reader can apply at least ONE technique within 10 minutes of reading
- [ ] **3.5** Every technique has time estimate (e.g., "10 minutes", "3 breaths", "30 seconds")
- [ ] **3.6** No abstract concepts without concrete application ("be mindful" → specific breathing pattern)

**How to Test**:
- Simulate reading as exhausted person
- Can you immediately implement at least one technique?
- Are all steps clear enough to follow without clarification?

**Pass Criteria**: ALL techniques immediately actionable with clear time estimates

---

### Principle IV: LENGTH - FOCUSED *(BLOCKER)*

**Requirement**: Total chapter length ≤ 500 words with ruthless editing.

**Validation Checklist**:

- [ ] **4.1** Total word count ≤ 500 words (use word processor count, exclude title)
- [ ] **4.2** Opening Hook: 50-75 words
- [ ] **4.3** Core Teaching: 250-300 words total
  - RECOGNIZE section: 75-90 words
  - RESTORE section: 75-90 words
  - RETURN section: 75-90 words
  - Recharge vs Resign distinction: 20-25 words
- [ ] **4.4** Action Steps: 100-150 words
- [ ] **4.5** Closing Motivation: 25-50 words
- [ ] **4.6** Every word earns its place (no filler: "very", "really", "actually", "just", "basically")

**How to Test**:
- Run word count on entire chapter
- Check section word counts match targets
- Search for filler words and remove

**Pass Criteria**: Total ≤500 words, all sections within ranges, zero filler words

---

## Gate 2: Structural Requirements

### Content Structure *(BLOCKER)*

**Requirement**: Chapter follows mandatory 4-part structure from constitution.

**Validation Checklist**:

- [ ] **S1** Opening Hook (50-75 words): Creates emotional connection, introduces energy crisis
- [ ] **S2** Core Teaching (250-300 words): All 3 rules taught completely
  - [ ] **S2.1** RECOGNIZE section complete (name, metaphor, why, how, example)
  - [ ] **S2.2** RESTORE section complete (name, metaphor, why, how with 3 options, example)
  - [ ] **S2.3** RETURN section complete (name, metaphor, why, how, example)
  - [ ] **S2.4** Recharge vs Resign distinction included
- [ ] **S3** Action Steps (100-150 words): 3-4 numbered, specific actions
- [ ] **S4** Closing Motivation (25-50 words): Empowering statement, no qualifiers

**How to Test**:
- Verify each section present
- Check word counts per section
- Confirm all required components (name, metaphor, why, how, example) for each rule

**Pass Criteria**: All 4 sections present with all required components

---

### Formatting Standards *(BLOCKER)*

**Requirement**: Professional, scannable format adhering to constitution standards.

**Validation Checklist**:

- [ ] **F1** Headings are benefit-focused (not topic labels)
  - ❌ "Rule 1" → ✅ "Step 1: RECOGNIZE the Drain"
  - ❌ "Breathing Technique" → ✅ "Refuel in 60 Seconds"
- [ ] **F2** Bold used for key takeaways (rule names: RECOGNIZE, RESTORE, RETURN)
- [ ] **F3** Italics used sparingly (if at all)
- [ ] **F4** Bullet points or numbered lists for clarity (Action Steps)
- [ ] **F5** Generous white space between sections (blank line before each heading)
- [ ] **F6** No markdown formatting errors (test by rendering)

**How to Test**:
- Review all headings for benefit language
- Check bold usage (key terms only, not overused)
- Render markdown to verify formatting displays correctly

**Pass Criteria**: All formatting requirements met, renders cleanly

---

## Gate 3: Functional Requirements

### Framework Completeness *(BLOCKER)*

**Requirement**: All functional requirements from spec.md FR-001 through FR-013 satisfied.

**Validation Checklist**:

- [ ] **FR-001** Complete 3-rule "Recharge, Not Resign" framework with clear explanation of each rule
- [ ] **FR-002** Scientific backing for each rule (simple neuroscience/physiology at 8th-grade level)
- [ ] **FR-003** Clear distinction between "recharge" (strategic rest) and "resign" (giving up/avoidance)
- [ ] **FR-004** At least 2 concrete examples showing rules applied to real burnout situations
- [ ] **FR-005** Specific, numbered action steps reader can implement within 1 hour
- [ ] **FR-006** Positive, motivational language throughout (no dwelling on burnout symptoms/negative consequences)
- [ ] **FR-007** Simple, conversational vocabulary at 8th-grade reading level or below
- [ ] **FR-008** Scannable with clear headings, short paragraphs (max 3-4 sentences), bullet points where appropriate
- [ ] **FR-009** Follows mandatory structure: Opening Hook (50-75w) → Core Teaching (250-300w) → Action Steps (100-150w) → Closing Motivation (25-50w)
- [ ] **FR-010** Total length MUST NOT exceed 500 words
- [ ] **FR-011** Ends with empowering statement reinforcing reader's capability to manage energy
- [ ] **FR-012** Avoids medical/psychological jargon and clinical terminology requiring explanation
- [ ] **FR-013** Each rule immediately implementable without equipment, apps, or lengthy preparation

**How to Test**:
- Read spec.md functional requirements
- Check chapter against each FR item
- Confirm all examples, techniques, and structure elements present

**Pass Criteria**: ALL 13 functional requirements explicitly satisfied

---

### Success Criteria Validation

**Requirement**: Content designed to achieve measurable success criteria from spec.md SC-001 through SC-009.

**Validation Checklist**:

- [ ] **SC-001** 90% recall: Alliterative R-R-R naming (RECOGNIZE-RESTORE-RETURN) + clear structure
- [ ] **SC-002** <5 min read: 500-word limit + scannable format
- [ ] **SC-003** 85% understand difference: Explicit Recharge vs Resign distinction with examples
- [ ] **SC-004** Apply within 1 hour: Equipment-free techniques (breathing, walking, switching)
- [ ] **SC-005** 90% comprehension (8th grade): Simple analogies + grade 7-9 reading level
- [ ] **SC-006** 80% completion: Engaging hook + quick value delivery
- [ ] **SC-007** 85% less guilty: Reframes rest as performance tool (science-backed)
- [ ] **SC-008** <2 min scan: Bold names + numbered steps + benefit headings
- [ ] **SC-009** 90% implement without equipment: All techniques body/mind only

**How to Test**:
- Test with sample readers (simulate each success criterion)
- Confirm design elements support each SC target
- Verify no barriers to achievement (equipment, complexity, length)

**Pass Criteria**: Chapter design explicitly supports all 9 success criteria

---

## Validation Execution

### Pre-Implementation Validation
Run this validation BEFORE writing content to ensure design supports all gates.

**Checklist**:
1. Review spec.md, research.md, data-model.md, quickstart.md
2. Confirm understanding of all 3 gates
3. Verify word budget allocation matches constitutional structure
4. Identify potential gate violations in design phase

### During-Implementation Validation
Run validation checks after each major section is drafted.

**Checklist**:
1. After Hook: Check word count (50-75w), tone (positive), engagement (emotional connection)
2. After RECOGNIZE: Verify name, metaphor, why, how, example present; check word count (75-90w)
3. After RESTORE: Verify name, metaphor, why, how with 3 options, example present; check word count (75-90w)
4. After RETURN: Verify name, metaphor, why, how, example present; check word count (75-90w)
5. After Action Steps: Check 3-4 numbered actions, implementable in 1 hour; word count (100-150w)
6. After Closing: Check empowering tone, no qualifiers; word count (25-50w)

### Post-Implementation Validation
Run ALL gate validations before marking chapter complete.

**Checklist**:
1. [ ] Run Gate 1 validation (Constitutional Compliance) - ALL items pass
2. [ ] Run Gate 2 validation (Structural Requirements) - ALL items pass
3. [ ] Run Gate 3 validation (Functional Requirements) - ALL items pass
4. [ ] Total word count ≤500
5. [ ] Readability score grade 7-9
6. [ ] Test with 1-2 sample readers (apply at least one technique successfully)
7. [ ] Mark all checklist items complete

**Pass Criteria**: ALL gates pass with 100% checklist completion

---

## Failure Handling

### If Gate 1 Fails (Constitutional)
- **Tone issues**: Rewrite negative framings as positive/empowering
- **Language too complex**: Simplify sentences, replace jargon with analogies
- **Not actionable**: Add specific HOW instructions with time estimates
- **Too long**: Cut filler words, merge redundant points, edit ruthlessly

### If Gate 2 Fails (Structural)
- **Missing sections**: Add required components (name, metaphor, why, how, example)
- **Word count off**: Expand thin sections or cut verbose sections to targets
- **Formatting issues**: Add headings, bold key terms, break long paragraphs

### If Gate 3 Fails (Functional)
- **Missing FR requirements**: Review spec.md and add missing elements
- **Success criteria not supported**: Redesign elements to enable SC achievement
- **Examples insufficient**: Add concrete scenario-technique-result examples

---

## Sign-Off

**Validation Complete When**:
- [ ] All Gate 1 checklist items marked complete
- [ ] All Gate 2 checklist items marked complete
- [ ] All Gate 3 checklist items marked complete
- [ ] Total word count ≤500 verified
- [ ] Readability grade 7-9 verified
- [ ] Sample reader testing successful (1+ technique applied)

**Validated By**: [Name]
**Date**: [YYYY-MM-DD]
**Status**: [ ] PASS / [ ] FAIL (with remediation plan)

---

## Quick Reference: Common Violations

| Violation | Gate | Fix |
|-----------|------|-----|
| "You might feel..." (qualifier language) | Gate 1 (Tone) | Remove qualifiers: "You feel..." |
| "Ego depletion" (jargon) | Gate 1 (Style) | Replace with analogy: "mental battery drains" |
| "Take breaks regularly" (no how) | Gate 1 (Action) | Specify: "Take 10-min walk every 90 minutes" |
| 550 words total | Gate 1 (Length) | Cut 50 words: remove filler, merge points |
| Missing metaphor in Rule 2 | Gate 2 (Structure) | Add metaphor: "like plugging in your phone" |
| No numbered Action Steps | Gate 2 (Format) | Convert bullets to numbered list |
| Only 1 example (need 2+) | Gate 3 (FR-004) | Add second scenario-technique-result example |
| Techniques require app | Gate 3 (FR-013) | Replace with equipment-free option |

---

**Next Step**: Use this contract during implementation to validate each section as drafted. Refer to quickstart.md for writing workflow.
