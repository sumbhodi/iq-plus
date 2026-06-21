# IQ+ Dev Cheat Sheet
*Last Updated: January 16, 2026*

---

## 🎯 **Project Mission**

**IQ+ Math Calc** - Free calculus prep platform that actually works.

Build what you need to pass SLCC placement tests. Dogfood it. Then scale.

---

## 📊 **Current Status**

### ✅ **What Works:**
- Firebase Auth (Google, Apple, Email)
- User profiles with avatars
- Dashboard with 4-color progress tracking
- Settings/delete/privacy/contact pages
- Path 100 overview page (mc_100.html)
- Skill Set 1 overview page (mc_100_1.html)
- **Lesson template (mc_100_1.1.html)** ← LOCKED, READY TO REPLICATE

### ⏳ **Next Steps (Priority Order):**
1. Build practice template (mc_100_1.1_p.html)
2. Build quiz template (mc_100_1.1_q.html)
3. Build test template (mc_100_1.1_t.html)
4. Replicate 1.1 → 1.2, 1.3, 1.4 (content swap only)
5. Replicate Skill Set 1 → Skill Sets 2-8
6. Path 100 complete (38 skills)

### 🔮 **Someday/Maybe:**
- Paths 300-600 (your actual learning needs)
- Paths 100-200 (backfill)
- IDEa (PWA code editor)
- Premium features (AI tutoring, unlimited practice)

---

## 🗂️ **File Tree**

```
/iq_plus/
├── IQ+_Splash.html ✅
├── sign.html ✅
├── create.html ✅
├── dashboard.html ✅
├── settings.html ✅
├── delete.html ✅
├── privacy.html ✅
├── tos.html ✅
├── contact.html ✅
├── firebase_config.js ✅
├── subjects.html ✅
│
└── /calc/
    ├── mc_100.html ✅ (Path 100 overview - STAYS IN CALC ROOT)
    ├── mc_200.html (Path 200 overview)
    ├── mc_300.html (Path 300 overview)
    ├── mc_400.html (Path 400 overview)
    ├── mc_500.html (Path 500 overview)
    ├── mc_600.html (Path 600 overview)
    │
    └── /mc_100/ ✅ (Path 100 folder - skill set overviews + admin files)
        ├── mc_100_1.html ✅ (Skill Set 1 overview)
        ├── mc_100_2.html (Skill Set 2 overview)
        ├── mc_100_3.html (Skill Set 3 overview)
        ├── mc_100_4.html (Skill Set 4 overview)
        ├── mc_100_5.html (Skill Set 5 overview)
        ├── mc_100_6.html (Skill Set 6 overview)
        ├── mc_100_7.html (Skill Set 7 overview)
        ├── mc_100_8.html (Skill Set 8 overview)
        ├── mc_100_pt.html (Path pretest)
        ├── mc_100_post.html (Path post-test)
        ├── mc_100_metrics.html (Path metrics)
        │
        ├── /1/ ✅ (Skill Set 1 - all 4 skills × 5 files = 20 files)
        │   ├── mc_100_1.1.html ✅ (LESSON TEMPLATE - Place Value)
        │   ├── mc_100_1.1_p.html (Practice)
        │   ├── mc_100_1.1_q.html (Quiz)
        │   ├── mc_100_1.1_t.html (Test)
        │   ├── mc_100_1.1_pt.html (Pretest)
        │   ├── mc_100_1.2.html (Comparing Numbers)
        │   ├── mc_100_1.2_p.html
        │   ├── mc_100_1.2_q.html
        │   ├── mc_100_1.2_t.html
        │   ├── mc_100_1.2_pt.html
        │   ├── mc_100_1.3.html (Rounding)
        │   ├── mc_100_1.3_p.html
        │   ├── mc_100_1.3_q.html
        │   ├── mc_100_1.3_t.html
        │   ├── mc_100_1.3_pt.html
        │   ├── mc_100_1.4.html (Patterns)
        │   ├── mc_100_1.4_p.html
        │   ├── mc_100_1.4_q.html
        │   ├── mc_100_1.4_t.html
        │   └── mc_100_1.4_pt.html
        │
        ├── /2/ (Skill Set 2 - 5 skills × 5 files = 25 files)
        ├── /3/ (Skill Set 3 - 8 skills × 5 files = 40 files)
        ├── /4/ (Skill Set 4 - 6 skills × 5 files = 30 files)
        ├── /5/ (Skill Set 5 - 4 skills × 5 files = 20 files)
        ├── /6/ (Skill Set 6 - 4 skills × 5 files = 20 files)
        ├── /7/ (Skill Set 7 - 4 skills × 5 files = 20 files)
        └── /8/ (Skill Set 8 - 3 skills × 5 files = 15 files)
```

**File Purposes:**
- **mc_100.html** (in `/calc/`) = Path overview, stats, skill set list
- **mc_100_1.html** (in `/calc/mc_100/`) = Skill Set overview, stats, skill list
- **mc_100_1.1.html** (in `/calc/mc_100/1/`) = Lesson content (speed-read + toggles)
- **mc_100_1.1_p.html** = Practice (Oregon Trail style, unlimited)
- **mc_100_1.1_q.html** = Quiz (interactive, try-again, not graded)
- **mc_100_1.1_t.html** = Test (graded, 70%+ to pass, marks complete)
- **mc_100_1.1_pt.html** = Pretest (diagnostic, skip if you know it)

**Why Nested:**
- `/calc/mc_100/` has only 11 files (clean)
- Each skill set in its own folder (organized)
- Total: 38 skills × 5 files = 190 files across 8 subfolders

---

## 📖 **Lesson Template (LOCKED)**

**File:** `mc_100_1.1.html`

**Structure:**
1. Header (back button + avatar + gear)
2. 🧪 **PRETEST** button (big, purple)
3. **Speed-read box:**
   - Ultra-dense core (3-4 lines, minimal NL)
   - **[+ PhD]** toggle (collapsed by default)
   - **[+ 5th Grade]** toggle (collapsed by default)
4. **Action buttons** (vertical):
   - 🎯 PRACTICE
   - 📝 QUIZ
   - ✅ TEST
5. Footer

### **PhD Content Pattern:**
1. Dense opening (170 IQ level)
2. Digestible breakdown paragraph
3. Formula (if applicable)
4. Formula component breakdown
5. Concrete example with numbers
6. Cross-curricular footnote (history, other bases, etc)

### **5th Grade Content Pattern:**
1. Hook (one-liner, relatable)
2. Concrete Example #1 (physical: pennies, blocks, sorting)
3. The Pattern (2-3 sentences explaining the rule)
4. Concrete Example #2 (different angle: addresses, phone numbers)
5. Why It Matters (what breaks if you don't get it)
6. Pro Tip Box (memory trick, reading shortcut)

**Tone:**
- PhD: Collegial, not condescending, adult conversation
- 5th Grade: Formal polite kid teaching confused adult

---

## 🔧 **Technical Stuff**

### **Naming Convention:**
`mc_{path}_{skillset}.{skill}_{activity}.html`

**Examples:**
- `mc_100.html` → Path overview
- `mc_100_1.html` → Skill Set overview
- `mc_100_1.1.html` → Lesson
- `mc_100_1.1_p.html` → Practice
- `mc_100_1.1_q.html` → Quiz
- `mc_100_1.1_t.html` → Test

### **4-Color Progress:**
- ⚪ Gray = Not Started
- 🟡 Yellow = Incomplete
- 🟢 Green = Passed (70%+)
- 🔴 Red = Failed (<70%)

### **Relative Paths (from /calc/mc_100/1/):**
```
From mc_100_1.1.html:
- Same folder skill: mc_100_1.2.html
- Back to skill set: ../mc_100_1.html
- Back to path: ../../mc_100.html
- Dashboard: ../../../dashboard.html
- Settings: ../../../settings.html
- Firebase: ../../../firebase_config.js
```

### **Toggle Pattern (Working):**
```html
<!-- Separate script BEFORE module -->
<script>
    window.toggleSection = function(section) {
        document.getElementById('content-' + section).classList.toggle('hidden');
        const icon = document.getElementById('icon-' + section);
        if (document.getElementById('content-' + section).classList.contains('hidden')) {
            icon.classList.remove('fa-minus');
            icon.classList.add('fa-plus');
        } else {
            icon.classList.remove('fa-plus');
            icon.classList.add('fa-minus');
        }
    };
</script>

<script type="module">
    // Firebase auth stuff
</script>
```

---

## ⚠️ **CRITICAL WORKFLOW RULE**

### **❌ NEVER GO NUCLEAR**

**Default:** Use `str_replace` for surgical edits

**ONLY rebuild entire file when I explicitly say:**
- "go nuclear"
- "rebuild"
- "start over"
- "rewrite the whole thing"

**If uncertain:** Ask "surgical or nuclear?"

---

## 📝 **Locked Terminology**

**Official Names:**
- **Skills** = Individual lessons (1.1, 1.2, 1.3)
- **Skill Sets** = Groups of skills (Module 1, Module 2)
- **Paths** = Score targets (Path 100, Path 200)

**Example:**
- Path 100 has 8 skill sets
- Skill Set 1 has 4 skills
- Skill 1.1 = Place Value & Number Systems

---

## 🎯 **Reality Check**

**Total Build:**
- Path 100: 38 skills × 5 files = 190 files
- All Paths: 279 skills × 5 files = ~1,400 files

**Strategy:**
- Template → Replicate → Populate
- Perfect one lesson ✅
- Perfect practice/quiz/test
- Copy-paste + content swap
- Quality > Speed (this is what beats AI slop)

**Current Focus:**
Build templates for Path 100, Skill Set 1, Skill 1.1 ONLY.  
Everything else is future work.

---

*Version: 4.0 - "Essentials Only"*  
*Focus: Template replication, not full curriculum*  
*Vibe: Surgical edits, minimal scope creep*
