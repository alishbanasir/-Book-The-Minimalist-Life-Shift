# Data Model: Chapter 1 - The Inner Architect

**Date**: 2025-12-03
**Feature**: 001-inner-architect
**Purpose**: Define the structure and components of Chapter 1 content

---

## Content Structure Model

### Chapter Entity

```yaml
Chapter:
  id: "01"
  title: "The Inner Architect"
  subtitle: "Transform Negative Self-Talk with the Voice Changer Technique"
  word_count_target: 500
  word_count_range: [475, 500]
  reading_level: 8
  estimated_reading_time_minutes: 5
  estimated_scan_time_minutes: 2
  estimated_application_time_minutes: 10

  structure:
    - section: "opening_hook"
      word_range: [50, 75]
      purpose: "Emotional connection and relatability"
    - section: "core_teaching"
      word_range: [250, 300]
      purpose: "Teach 3-step Voice Changer technique"
    - section: "action_steps"
      word_range: [100, 150]
      purpose: "Immediate implementable actions"
    - section: "closing_motivation"
      word_range: [25, 50]
      purpose: "Empowerment and forward momentum"

  technique:
    name: "Voice Changer"
    type: "3-step transformation method"
    steps: [
      "CATCH the Thought",
      "CHALLENGE the Truth",
      "CHANGE to Action"
    ]
```

---

## Voice Changer Technique Model

### Step 1: CATCH the Thought

```yaml
Step_CATCH:
  name: "CATCH the Thought"
  order: 1
  word_budget: [75, 90]

  components:
    - step_name: 5-10 words (bold, action-oriented)
    - why_it_matters: 20-25 words
    - how_to_do_it: 40-50 words
    - example_transformation: 10-15 words

  key_concept: "Awareness without judgment"

  metaphor: "Catching a ball in motion"

  teaching_elements:
    - "Notice when negative self-talk appears"
    - "Pause rather than react automatically"
    - "Observe the thought as separate from self"

  example_template:
    negative_thought: "[Specific limiting statement in quotes]"
    observation: "Pause and recognize this is the critical voice"

  sample_negative_thoughts:
    - "I'll never finish this project"
    - "I'm too disorganized to change"
    - "I'm not creative enough"
```

### Step 2: CHALLENGE the Truth

```yaml
Step_CHALLENGE:
  name: "CHALLENGE the Truth"
  order: 2
  word_budget: [75, 90]

  components:
    - step_name: 5-10 words (bold, action-oriented)
    - why_it_matters: 20-25 words
    - how_to_do_it: 40-50 words
    - example_transformation: 10-15 words

  key_concept: "Question assumptions, demand evidence"

  metaphor: "Courtroom cross-examination"

  teaching_elements:
    - "Ask: Is this actually true?"
    - "Demand evidence for the claim"
    - "Recognize thoughts are not facts"

  challenge_questions:
    - "Is this 100% true, or am I exaggerating?"
    - "What evidence contradicts this thought?"
    - "Would I say this to a friend in the same situation?"

  example_template:
    negative_thought: "[From Step 1]"
    challenge_process: "Question the absolute nature of the claim"
    insight: "Recognition that thought is not reality"
```

### Step 3: CHANGE to Action

```yaml
Step_CHANGE:
  name: "CHANGE to Action"
  order: 3
  word_budget: [75, 90]

  components:
    - step_name: 5-10 words (bold, action-oriented)
    - why_it_matters: 20-25 words
    - how_to_do_it: 40-50 words
    - example_transformation: 10-15 words

  key_concept: "Immediate, concrete action replaces rumination"

  metaphor: "Changing direction on a path"

  teaching_elements:
    - "Identify one small action you can take now"
    - "Make it specific and time-bound"
    - "Focus on what you CAN control"

  action_criteria:
    - achievable_within: "minutes or hours (not days)"
    - specificity: "concrete verb + object (not vague intention)"
    - controllability: "within reader's direct control"

  example_template:
    negative_thought: "[From Step 1]"
    transformed_action: "[Specific, immediate behavior in quotes]"
    result: "Forward movement replaces paralysis"

  sample_transformations:
    - from: "I'll never finish this project"
      to: "I'll work on this for 15 minutes right now"
    - from: "I'm too disorganized to change"
      to: "I'll clear one surface in my room today"
    - from: "I'm not creative enough"
      to: "I'll try one creative experiment this afternoon"
```

---

## Tone & Style Guidelines

### Voice Characteristics

```yaml
Tone_Profile:
  positivity_level: "High (motivational without toxic positivity)"
  empathy_level: "Present but brief (acknowledge, don't dwell)"
  authority_stance: "Friendly guide (not distant expert)"
  confidence_level: "Assured (technique works, you can do this)"

  voice_attributes:
    - "Conversational (like talking to a supportive friend)"
    - "Direct (no filler, every word earns its place)"
    - "Action-oriented (verbs over adjectives)"
    - "Present-focused (right now > yesterday)"
    - "Empowering (you have agency)"
```

### Language Rules

```yaml
Language_Standards:
  vocabulary_level: 8
  max_sentence_length: 25
  avg_sentence_length: 12-15
  max_paragraph_sentences: 4
  min_paragraph_sentences: 2

  required_elements:
    - "Active voice (you do X, not X is done)"
    - "Second person (you/your, not one/people)"
    - "Present tense (primary)"
    - "Concrete nouns (project > work, surface > things)"
    - "Strong verbs (grab > take, transform > change)"

  forbidden_elements:
    - "Jargon (cognitive reframing → Voice Changer)"
    - "Academic language (utilize → use, commence → start)"
    - "Qualifiers (maybe, perhaps, possibly)"
    - "Negative dwelling (don't worry about past failures)"
    - "Complex subordinate clauses"
```

### Formatting Standards

```yaml
Formatting:
  paragraph_style:
    max_word_count: 75
    min_word_count: 25
    preferred_length: 40-60
    white_space_after: "Generous (visual breathing room)"

  heading_style:
    format: "Benefit-focused, not topic labels"
    examples:
      good: "Step 1: CATCH the Thought"
      bad: "First Step in the Process"

  lists:
    bullet_points: "For options or non-sequential items"
    numbered_lists: "For sequential steps or actions"
    max_items: 4
    words_per_item: 5-15

  emphasis:
    bold: "Step names, key takeaways"
    italics: "Sparingly (thought examples, emphasis)"
    all_caps: "Only for step verbs (CATCH, CHALLENGE, CHANGE)"
```

---

## Example Transformation Templates

### Template 1: Universal (Procrastination/Overwhelm)

```markdown
**Before (Negative Self-Talk)**:
"I'll never finish this project. There's too much to do."

**CATCH**: Notice the thought. Pause instead of spiraling into anxiety.

**CHALLENGE**: Is "never" true? Have you finished projects before? What's ONE thing you could do?

**CHANGE**: "I'll work on this for 15 minutes right now."

**Result**: You're moving forward instead of staying stuck.
```

### Template 2: Specific (Self-Doubt/Identity)

```markdown
**Before (Negative Self-Talk)**:
"I'm not creative enough. Other people are naturally talented."

**CATCH**: Recognize this is the critical voice, not reality.

**CHALLENGE**: What evidence says you're "not creative"? Have you tried creative things before? Is talent fixed or developable?

**CHANGE**: "I'll try one creative experiment today—draw, write, or rearrange something."

**Result**: You're building creativity through action, not waiting for it to appear.
```

---

## Section Content Models

### Opening Hook Model

```yaml
Opening_Hook:
  word_range: [50, 75]
  goal: "Immediate reader identification and emotional connection"

  structure:
    1. Universal scenario (10-15 words)
       - Example: "That voice in your head says you can't. You're not enough. You'll fail."

    2. Validation (10-15 words)
       - Example: "Everyone hears it. That critical voice feels true, powerful, unstoppable."

    3. Promise of transformation (15-20 words)
       - Example: "What if you could transform that voice into fuel for action? Not silence it—use it."

    4. Bridge to technique (10-15 words)
       - Example: "The Voice Changer technique turns negative thoughts into positive steps. Here's how."

  emotional_arc: "Recognition → Validation → Hope → Curiosity"

  avoid:
    - "Long backstory or explanation"
    - "Statistics or research citations"
    - "Dwelling on how bad negative thoughts are"
```

### Action Steps Model

```yaml
Action_Steps:
  word_range: [100, 150]
  format: "Numbered list (3-4 actions)"
  goal: "Immediate implementation within 10 minutes"

  step_structure:
    - number: "1, 2, 3"
    - action: "Clear verb + specific object (10-15 words)"
    - rationale: "Brief why this matters (10-15 words)"

  required_actions:
    1. Apply_Voice_Changer:
       action: "Think of one negative thought you had today. Run it through CATCH-CHALLENGE-CHANGE right now."
       rationale: "Immediate practice cements the technique better than reading alone."

    2. Create_Reminder:
       action: "Write the three C's (Catch, Challenge, Change) on a sticky note or phone lock screen."
       rationale: "Visual reminders help you remember the technique when negative thoughts strike."

    3. Share_or_Plan:
       action: "Tell someone about this technique, or write when you'll use it tomorrow."
       rationale: "Sharing or planning increases your commitment to actually doing it."

  total_time_estimate: "10 minutes maximum"
```

### Closing Motivation Model

```yaml
Closing_Motivation:
  word_range: [25, 50]
  goal: "Empowerment, capability reinforcement, forward momentum"

  structure:
    1. Acknowledge achievement (10-15 words)
       - Example: "You just learned a powerful tool for changing your inner dialogue."

    2. Reinforce capability (10-15 words)
       - Example: "Every time you use it, you're building your inner architect stronger."

    3. Forward action statement (5-10 words)
       - Example: "Start building the life you want—right now."

  tone: "Confident, empowering, optimistic"

  forbidden_elements:
    - "Warnings about difficulty"
    - "Qualifiers (maybe, hopefully)"
    - "Pressure or guilt"
    - "Future promises without present action"
```

---

## Validation Criteria

### Content Validation

```yaml
Validation_Checks:
  structure:
    - total_word_count: [475, 500]
    - hook_word_count: [50, 75]
    - core_word_count: [250, 300]
    - action_word_count: [100, 150]
    - closing_word_count: [25, 50]

  technique:
    - all_three_steps_present: true
    - step_names_alliterative: true
    - each_step_has_example: true
    - examples_are_specific: true (not generic placeholders)

  tone:
    - positive_language_throughout: true
    - no_dwelling_on_negatives: true
    - empowering_closing: true
    - action_oriented_verbs: true

  style:
    - readability_grade_level: [7, 9]
    - avg_sentence_length: [10, 18]
    - max_paragraph_sentences: 4
    - no_jargon_or_academic_terms: true

  actionability:
    - numbered_action_steps: true
    - actions_implementable_in_10_minutes: true
    - actions_are_specific_not_vague: true
```

---

## Next Steps

This data model will be used to:
1. Create validation contracts in `contracts/voice-changer-schema.md`
2. Build writer's guide in `quickstart.md`
3. Generate implementation tasks via `/sp.tasks`
4. Draft actual chapter content following these specifications
