# Content Validation Contract: Voice Changer Chapter

**Date**: 2025-12-03
**Feature**: 001-inner-architect
**Purpose**: Define validation rules and quality gates for Chapter 1 content

---

## Contract Overview

This document specifies the mandatory requirements, validation rules, and quality gates that Chapter 1: The Inner Architect MUST satisfy before publication. All checks must PASS for content to be considered complete.

---

## Section 1: Structural Requirements (MANDATORY)

### SR-001: Word Count Limits

| Section | Minimum | Maximum | Status |
|---------|---------|---------|--------|
| Opening Hook | 50 | 75 | ⬜ |
| Core Teaching | 250 | 300 | ⬜ |
| Action Steps | 100 | 150 | ⬜ |
| Closing Motivation | 25 | 50 | ⬜ |
| **Total Chapter** | **475** | **500** | ⬜ |

**Validation Method**: Manual word count (Markdown processor or text editor word count tool)

**Pass Criteria**: Each section within range AND total ≤ 500 words

---

### SR-002: Required Structural Elements

| Element | Required | Present | Status |
|---------|----------|---------|--------|
| Opening Hook section | Yes | ⬜ | ⬜ |
| Core Teaching section | Yes | ⬜ | ⬜ |
| Step 1: CATCH the Thought | Yes | ⬜ | ⬜ |
| Step 2: CHALLENGE the Truth | Yes | ⬜ | ⬜ |
| Step 3: CHANGE to Action | Yes | ⬜ | ⬜ |
| Action Steps section (numbered list) | Yes | ⬜ | ⬜ |
| Closing Motivation section | Yes | ⬜ | ⬜ |

**Validation Method**: Visual inspection of content structure

**Pass Criteria**: All required elements present in correct order

---

### SR-003: Voice Changer Technique Completeness

| Component | Required Per Step | Present | Status |
|-----------|-------------------|---------|--------|
| Step name (bold, action verb) | Yes (3 total) | ⬜ | ⬜ |
| Why it matters explanation | Yes (3 total) | ⬜ | ⬜ |
| How to do it instructions | Yes (3 total) | ⬜ | ⬜ |
| Concrete example transformation | Yes (min 2 total) | ⬜ | ⬜ |

**Validation Method**: Check each step contains all required components

**Pass Criteria**: All 3 steps have name + why + how; at least 2 examples included

---

## Section 2: Constitutional Compliance (MANDATORY)

### CC-001: Principle I - TONE: Positive & Motivational

| Check | Requirement | Pass/Fail | Notes |
|-------|-------------|-----------|-------|
| Positive Language | Every sentence is positive, motivational, or encouraging | ⬜ | |
| Action-Oriented | Uses action verbs and empowering language | ⬜ | |
| No Dwelling on Negatives | Does NOT dwell on past failures or negative situations | ⬜ | |
| Celebrates Progress | Acknowledges and celebrates small wins | ⬜ | |
| Empowering Closing | Ends with statement reinforcing reader capability | ⬜ | |

**Validation Method**: Read-through with tone checklist; flag any sentences that violate

**Pass Criteria**: All checks PASS; zero violations

---

### CC-002: Principle II - STYLE: Simple & Concise

| Check | Requirement | Pass/Fail | Notes |
|-------|-------------|-----------|-------|
| Reading Level | Flesch-Kincaid grade level 7-9 | ⬜ | |
| Vocabulary | No jargon, academic terms, or complex words | ⬜ | |
| Sentence Length | Average 12-15 words; max 25 words | ⬜ | |
| Paragraph Length | Max 4 sentences per paragraph | ⬜ | |
| Scannable Format | Clear headings, short paragraphs, bullet/numbered lists | ⬜ | |

**Validation Method**:
- Flesch-Kincaid: Use online readability calculator (e.g., readable.com)
- Sentence/paragraph: Manual count
- Vocabulary: Read-through for complex terms

**Pass Criteria**: All checks PASS

---

### CC-003: Principle III - KNOWLEDGE: Actionable

| Check | Requirement | Pass/Fail | Notes |
|-------|-------------|-----------|-------|
| Concrete Actions | Numbered action steps included (3-4 items) | ⬜ | |
| Specificity | Each action is specific, not vague | ⬜ | |
| Immediate Implementation | Actions doable within 10 minutes | ⬜ | |
| Practical Technique | Voice Changer explained with how-to instructions | ⬜ | |
| Measurable Value | Reader can DO something after reading | ⬜ | |

**Validation Method**: Review action steps for specificity and time estimates

**Pass Criteria**: All checks PASS; no vague or theoretical-only content

---

### CC-004: Principle IV - LENGTH: Focused

| Check | Requirement | Pass/Fail | Notes |
|-------|-------------|-----------|-------|
| Total Word Count | ≤ 500 words | ⬜ | |
| Content Density | Every word earns its place (no filler) | ⬜ | |
| Clarity Maintained | Brevity does not sacrifice understanding | ⬜ | |
| Ruthless Editing | Redundancies removed | ⬜ | |

**Validation Method**: Word count tool + editorial review for filler

**Pass Criteria**: ≤ 500 words AND no unnecessary content identified

---

## Section 3: Functional Requirements (MANDATORY)

### FR-001: Voice Changer Technique Teaching

**Requirement**: Chapter MUST teach complete 3-step Voice Changer technique with clear explanation of each step

**Validation Checklist**:
- [ ] Step 1 (CATCH) explained clearly
- [ ] Step 2 (CHALLENGE) explained clearly
- [ ] Step 3 (CHANGE) explained clearly
- [ ] Alliterative names used (all start with "C")
- [ ] Each step includes purpose/rationale
- [ ] Each step includes instructions

**Pass Criteria**: All items checked

---

### FR-002: Concrete Examples

**Requirement**: Chapter MUST include at least 2 concrete examples showing technique applied to real negative thoughts

**Validation Checklist**:
- [ ] Example 1 present (with before/after)
- [ ] Example 2 present (with before/after)
- [ ] Examples use specific thoughts (not generic placeholders)
- [ ] Examples show clear transformation from negative to positive action

**Pass Criteria**: At least 2 examples with all requirements met

---

### FR-003: Action Steps

**Requirement**: Chapter MUST provide specific, numbered action steps reader can implement within 10 minutes

**Validation Checklist**:
- [ ] Action steps in numbered list format
- [ ] 3-4 actions included
- [ ] Each action is specific (not vague)
- [ ] Each action is time-bound or immediately doable
- [ ] Combined actions completable in 10 minutes

**Pass Criteria**: All items checked

---

### FR-006: Scannable Format

**Requirement**: Chapter MUST be scannable with clear headings, short paragraphs (max 3-4 sentences), and bullet points where appropriate

**Validation Checklist**:
- [ ] Clear section headings used
- [ ] Headings are benefit-focused (not just topic labels)
- [ ] Paragraphs are 2-4 sentences
- [ ] Lists used for sequential steps or multiple items
- [ ] White space between sections

**Pass Criteria**: All items checked

---

### FR-007: Mandatory Structure

**Requirement**: Chapter MUST follow structure: Opening Hook (50-75w) → Core Teaching (250-300w) → Action Steps (100-150w) → Closing Motivation (25-50w)

**Validation Checklist**:
- [ ] Opening Hook present and within word range
- [ ] Core Teaching present and within word range
- [ ] Action Steps present and within word range
- [ ] Closing Motivation present and within word range
- [ ] Sections in correct order

**Pass Criteria**: All items checked AND word ranges satisfied

---

### FR-009: Empowering Closing

**Requirement**: Chapter MUST end with empowering statement that reinforces reader's capability to change

**Validation Checklist**:
- [ ] Closing statement present
- [ ] Statement is empowering (not cautionary or doubtful)
- [ ] Statement reinforces reader capability
- [ ] Statement creates forward momentum
- [ ] 25-50 words

**Pass Criteria**: All items checked

---

## Section 4: Success Criteria Validation (RECOMMENDED)

### SC-001: Technique Recall

**Criterion**: 90% of readers can accurately recall and explain all 3 steps immediately after reading

**Testing Method**:
- Have 10 test readers read chapter
- Ask them to write down the 3 steps from memory
- Check if they got all 3 names and basic purpose

**Pass Criteria**: At least 9/10 readers recall all 3 steps correctly

---

### SC-002: Reading Time

**Criterion**: Readers complete chapter in under 5 minutes on first read

**Testing Method**:
- Have 5-10 test readers time themselves reading
- Average the times

**Pass Criteria**: Average reading time ≤ 5 minutes

---

### SC-003: Motivation Increase

**Criterion**: 85% of readers report feeling more motivated and capable after reading

**Testing Method**:
- Pre/post survey: "How motivated do you feel to address negative self-talk?" (1-10 scale)
- Compare before and after scores

**Pass Criteria**: At least 85% show increased score

---

### SC-004: Application Within 10 Minutes

**Criterion**: Readers successfully apply technique to transform at least one negative thought within 10 minutes

**Testing Method**:
- Give readers 10 minutes after reading
- Ask: "Did you apply the Voice Changer to a real thought?"
- Verify they can describe what they did

**Pass Criteria**: At least 80% successfully applied technique

---

### SC-005: Reading Comprehension

**Criterion**: 90%+ comprehension score for 8th-grade reading level audience

**Testing Method**:
- Create 10 simple comprehension questions about the technique
- Have 8th-grade level readers answer after reading

**Pass Criteria**: Average score ≥ 90%

---

### SC-006: Completion Rate

**Criterion**: 80% of readers who start finish completely

**Testing Method**:
- Track analytics (if digital) or survey test readers
- Ask: "Did you read the entire chapter?"

**Pass Criteria**: ≥ 80% completion

---

### SC-008: Scan Understanding

**Criterion**: Average reader can scan chapter in under 2 minutes and grasp core concept

**Testing Method**:
- Give readers 2 minutes to scan (not read thoroughly)
- Ask: "What's the main technique?" and "What are the 3 steps?"

**Pass Criteria**: At least 80% can name the technique and list the 3 C's

---

## Section 5: Pre-Publication Quality Gates

### Gate 1: Constitutional Compliance (BLOCKER)

**Requirement**: ALL constitutional checks (CC-001 through CC-004) MUST PASS

**Status**: ⬜ PENDING

**Action if FAIL**: Revise content until all checks pass; cannot proceed to publication

---

### Gate 2: Structural Requirements (BLOCKER)

**Requirement**: ALL structural requirements (SR-001 through SR-003) MUST PASS

**Status**: ⬜ PENDING

**Action if FAIL**: Restructure or add missing elements; cannot proceed to publication

---

### Gate 3: Functional Requirements (BLOCKER)

**Requirement**: ALL functional requirements (FR-001, FR-002, FR-003, FR-006, FR-007, FR-009) MUST PASS

**Status**: ⬜ PENDING

**Action if FAIL**: Revise content to meet requirements; cannot proceed to publication

---

### Gate 4: Success Criteria Testing (ADVISORY)

**Requirement**: At least 6 out of 8 success criteria (SC-001 through SC-008) should PASS

**Status**: ⬜ PENDING

**Action if FAIL**: Document failures; consider revisions; does not block publication but indicates quality issues

---

## Validation Workflow

### Pre-Draft Checklist

Before writing, ensure:
- [ ] Research.md completed
- [ ] Data-model.md reviewed
- [ ] Quickstart.md writer's guide available
- [ ] Contract requirements understood

### Draft Review Checklist

After first draft:
1. **Self-Review**: Author checks all SR, CC, FR requirements
2. **Peer Review**: Second reader validates tone and clarity
3. **Readability Test**: Run Flesch-Kincaid score
4. **Word Count Audit**: Verify all section and total word limits

### Pre-Publication Checklist

Before final approval:
1. **Gate 1 - Constitutional**: All CC checks PASS
2. **Gate 2 - Structural**: All SR checks PASS
3. **Gate 3 - Functional**: All FR checks PASS
4. **Gate 4 - Success Criteria**: Test with sample readers (optional but recommended)
5. **Final Approval**: Stakeholder review

---

## Appendix: Quick Reference Checklist

### One-Page Content Validation

**Structure** ✓
- [ ] Total word count ≤ 500
- [ ] Hook: 50-75 words
- [ ] Core: 250-300 words
- [ ] Actions: 100-150 words
- [ ] Closing: 25-50 words

**Technique** ✓
- [ ] 3 steps present: CATCH, CHALLENGE, CHANGE
- [ ] Each step has name + why + how
- [ ] At least 2 concrete examples

**Tone** ✓
- [ ] Positive and motivational throughout
- [ ] No dwelling on negatives
- [ ] Empowering closing statement

**Style** ✓
- [ ] Reading level 7-9
- [ ] No jargon or complex terms
- [ ] Paragraphs max 4 sentences
- [ ] Clear headings and lists

**Action** ✓
- [ ] 3-4 numbered action steps
- [ ] Actions specific and immediate (≤10 min)
- [ ] Reader can DO something after reading

**Gates** ✓
- [ ] Gate 1: Constitutional Compliance
- [ ] Gate 2: Structural Requirements
- [ ] Gate 3: Functional Requirements
- [ ] Gate 4: Success Criteria (advisory)

---

## Document Control

**Version**: 1.0
**Last Updated**: 2025-12-03
**Status**: Active
**Next Review**: After first draft completion
