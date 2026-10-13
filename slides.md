---
layout: "cover"
class: "talk-cover-slide"
title: "500 CVEs Later: Lessons from Securing Open Source with AI"
theme: "default"
colorSchema: "light"
drawings: {"persist": false}
transition: "none"
comark: true
fonts: {"sans": "Inter", "provider": "none"}
info: "OpenSSL conference draft. Content through the TODO marker in outline-draft.md."
---

<TalkCover />

---
layout: cover
class: whoami-slide
title: Whoami
---

<WhoamiSlide />

---
layout: cover
class: agenda-slide
title: Agenda
---

<div class="agenda-content">
  <h1>Agenda</h1>
  <AgendaSections />
</div>

<style>
.agenda-slide {
  box-sizing: border-box;
  padding: 0 !important;
  background: #fff;
  color: #1d1d1f;
  font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", Inter, sans-serif;
}

.agenda-content {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 52px 70px;
}

.agenda-content > h1 {
  margin: 0;
  font-size: 42px;
  font-weight: 400;
  letter-spacing: -0.045em;
}

</style>

---
layout: cover
class: section-title-slide
section: true
title: "Protecting Open Source Ecosystem"
---

<SectionTitleSlide />

---
layout: "cover"
class: "openssl-slide"
clicks: 2
title: "Before the Mythos scare"
---

<EvidenceScreens kind="mythos" />

---
layout: "cover"
class: "openssl-slide"
clicks: 3
title: "GLM and zero-days"
---

<EvidenceScreens kind="glm" />

---
layout: cover
class: openssl-slide
clicks: 8
title: "Anthropic: validation capacity"
---

<EvidenceScreens kind="candidates" />

<!--
Screens at clicks 1–2. Initial paraphrase at click 3, report text and underline at 4, report example at 5.
“They got tired” at 6; human-validation bottleneck underline at 7; final two lines at 8.
The orange text is the speaker's paraphrase, not a verbatim quotation.
-->

---
layout: "cover"
class: "aisle-wall-of-fame-slide"
clicks: 1
sourceSlide: 15
---

<div class="aisle-wall-of-fame-frame">
  <img
    class="aisle-wall-of-fame-image"
    :src="'/cvefactory_latest.png'"
    alt="Aisle Wall of Fame showing coordinated vulnerability disclosures"
  />
  <div class="aisle-wall-of-fame-marks" aria-hidden="true">
    <span
      class="aisle-wall-of-fame-mark aisle-discovery-claim-mark"
      data-hotspot-name="CVEs discovered by Aisle"
      v-mark="{ at: 1, type: 'underline', color: '#ff3b30', padding: 2, strokeWidth: 3.5 }"
    />
    <span
      class="aisle-wall-of-fame-mark aisle-discovered-count-mark"
      data-hotspot-name="495 discovered CVEs"
      v-mark="{ at: 1, type: 'circle', color: '#ff3b30', padding: 10, strokeWidth: 3 }"
    />
    <span
      class="aisle-wall-of-fame-mark aisle-first-month-mark"
      data-hotspot-name="Sep 25 first bar"
      v-mark="{ at: 1, type: 'circle', color: '#ff3b30', padding: 5, strokeWidth: 3 }"
    />
  </div>
</div>

---
layout: "cover"
class: "openssl-slide"
clicks: 6
title: "Validation pipeline"
---

<div class="diagram-stage"><OpenSSLDiagram scene="pipeline" /></div>

---
layout: cover
class: openssl-slide
title: "Uneven capabilities"
clicks: 0
---

<JaggedCapabilities />

<!--
Source: Dimi-BSides.pdf, page 33. Original illustration attributed in that deck to https://newsletter.danielpaleka.com/p/even-superhuman-ai-forecasters-are . This is a conceptual illustration, not a measured benchmark. Only the jagged-capability panel is shown; the future/AGI progression is omitted.
-->

---
layout: "cover"
class: "openssl-slide"
clicks: 2
title: "Small open models can discover vulnerabilities"
---

<EvidenceScreens kind="small-models" />

---
layout: cover
class: section-title-slide
section: true
title: "Lesson 1: Eval Driven Development"
---

<SectionTitleSlide />

---
layout: cover
class: ai-native-flow-slide
title: Code in, vulnerabilities out
clicks: 3
---

<div class="ai-native-flow-content">
<div class="ai-native-flow-grid">
<div class="ai-native-input-stack">
<div class="ai-native-code">
<p class="ai-native-code-label">CODE / DIFF</p>

```diff
diff --git a/app.c b/app.c
@@ -1,5 +1,5 @@
void copy(char *input) {
  char buffer[8];
-  copy_safe(buffer, input);
+  strcpy(buffer, input);
  puts(buffer);
}
```

</div>

<div class="ai-native-repository">
<p class="ai-native-code-label">REPOSITORY</p>
<div class="ai-native-repository-mark">
<NegativeDayTimeline scene="github-repository" />
</div>
</div>
</div>

<div class="ai-native-flow-arrow" aria-hidden="true">→</div>

<div class="ai-native-harness">
<NegativeDayTimeline scene="agent-harness" />
<div class="harness-versions"><div v-click="1">v1.1</div><div v-click="2">v1.2</div><div v-click="3" class="harness-plea">"please, please find me vulnerability"</div></div>
</div>

<div class="ai-native-flow-arrow" aria-hidden="true">→</div>

<div class="ai-native-output-stack">
<div class="ai-native-code">
<p class="ai-native-code-label">FINDING</p>

```json
{
  "finding": true,
  "type": "buffer overflow",
  "severity": "high"
}
```

</div>

<div class="ai-native-code">
<p class="ai-native-code-label">PROOF / POC</p>

```text
$ ./app AAAAAAAAAAAAAAAA
ERROR: AddressSanitizer:
stack-buffer-overflow
WRITE of size 17
  #1 copy app.c:3
```

</div>
</div>
</div>
</div>

---
layout: cover
class: openssl-slide
title: "Benchmark (aka Eval)"
clicks: 4
---

<HarnessBenchmark />

---
layout: cover
class: section-title-slide
section: true
title: "Lesson 2: Deterministic Gate"
subtitle: "Goal and Environment Is All You Need"
---

<SectionTitleSlide />

---
layout: "cover"
class: "openssl-slide"
clicks: 3
title: "Validation with a proof of concept"
---

<div class="diagram-stage diagram-stage--poc"><OpenSSLDiagram scene="poc" /></div>

<svg v-click="3" class="goal-control-callout" viewBox="0 0 980 552" aria-label="Out of AI Control, pointing to the expert-guided goal">
  <defs><marker id="goal-control-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M1 1 L9 5 L1 9" fill="none" stroke="#6e6e73" stroke-width="1.5" /></marker></defs>
  <path d="M780 455 Q816 438 816 397" fill="none" stroke="#6e6e73" stroke-width="2" marker-end="url(#goal-control-arrow)" />
  <text x="740" y="490" text-anchor="middle" fill="#6e6e73" font-family="inherit">Out of AI Control</text>
</svg>


---
layout: "cover"
class: "openssl-slide"
clicks: 2
title: "Remediation"
---

<div class="diagram-stage diagram-stage--remediation"><OpenSSLDiagram scene="remediation" /></div>

<!--
In some cases, a reproducing PoC simplifies remediation. The same PoC crashes
the original code and no longer crashes with the patch. This alone is not a
claim that every possible impact or regression has been eliminated.
-->

---
layout: cover
class: section-title-slide
section: true
title: "Lesson 3: Ecosystem is Complex"
---

<SectionTitleSlide />

---
layout: cover
class: section-title-slide
subsection: true
title: "Negative Day Vulnerabilities"
---

<SectionTitleSlide />

---
layout: "cover"
class: "negative-day-slide"
sourceSlide: 6
---

<div class="timeline-stage">
  <NegativeDayTimeline />

  <div class="click-register" aria-hidden="true">
    <span v-click />
    <span v-click />
    <span v-click />
    <span v-click />
    <span v-click />
    <span v-click />
    <span v-click />
    <span v-click />
    <span v-click />
    <span v-click />
  </div>
</div>

---
layout: "cover"
class: "negative-day-slide"
sourceSlide: 7
---

<div class="timeline-stage">
  <NegativeDayTimeline scene="silent-patch" />

  <div class="click-register" aria-hidden="true">
    <span v-click />
    <span v-click />
  </div>
</div>

---
layout: "full"
class: "nd-screens-slide"
clicks: 9
sourceSlide: 8
---

<div class="nd-screens-stage">
  <NegativeDayScreens />
  <div class="click-register" aria-hidden="true">
    <span v-click />
    <span v-click />
    <span v-click />
    <span v-click />
    <span v-click />
    <span v-click />
    <span v-click />
    <span v-click />
    <span v-click />
  </div>
</div>

<!--
OpenClaw shipped a hook-execution fix and no CVE was ever assigned. Authlib
removed alg=none on February 6; NVD published CVE-2026-28802 on March 6, and
the 9.8 score arrived only after that silent patch.
-->

---
layout: "cover"
class: "nd-window-slide"
sourceSlide: 10
---

<NegativeDayWindowBars />

<div class="click-register" aria-hidden="true">
  <span v-click />
</div>

<!--
Ten recognizable cases, hours to months. Log scale so React at 4 hours and
axios at 5 months can share one chart. Click dims everything but the
longest negative day vulnerability window.
-->

---
layout: "cover"
class: "nd-window-slide"
sourceSlide: 11
---

<NegativeDayWindowBuckets />

<!--
The same 39 negative day vulnerability windows as a count. Almost half close
the same day. Median is 1 day; the average is pulled up by a few windows
that last months, notably axios.
-->

<!-- ---
layout: cover
class: nd-window-slide
---

<LodashIncompleteFix /> -->

---
layout: "cover"
class: "scrutiny-gradient-slide"
sourceSlide: 12
---

<ScrutinyGradientStats explain-nested />

<!--
Same three bars. The orange 2% is of all 1.1M commits. The blue 5.6%
and 77.6% bars are shares of that 2%, not of all commits. Light orange
is the rest of the 2% slice.
-->

---
layout: "cover"
class: "dataset-q1-slide"
sourceSlide: 17
---

<figure class="dataset-q1-frame">
  <img
    class="dataset-q1-image"
    src="/bars_commits_per_window.png"
    alt="Q1 2026 corpus: commits per timeframe across 39 cases"
  >
</figure>

---
layout: "cover"
class: "results-plot-slide"
clicks: 2
sourceSlide: 19
---

<figure class="results-plot-frame">
  <img
    class="results-plot-image"
    src="/pareto_recall_vs_cost.png"
    alt="Negative-day recall versus list-price cost per commit"
  >
  <p
    v-click="1"
    class="results-clap"
    style="left: 22%; top: 5%"
  >👏</p>
  <!--
    LoL + oval are % of the plot frame.
    left/width land the oval on Astra and both Fables.
  -->
  <div v-click="2" class="results-pareto-lol">
    <NegativeDayTimeline scene="pareto-lol" />
  </div>
  <img v-click="2" class="pareto-reaction" src="/gif-lol-80ms-loop.gif" alt="Side-eye coffee sip reaction">
</figure>

<!--
Pareto frontier is Luna, DeepSeek 4.1, Haiku 4.5, then Sonnet 5. Everything
to the right pays more for the same or worse recall. Fable is off the
frontier on cost; Astra is off it on both cost and recall.
-->

---
layout: cover
class: section-title-slide
section: true
title: "Lesson 4: Protect Your Agents"
---

<SectionTitleSlide />

---
layout: cover
class: section-title-slide
subsection: true
title: "Adversarial AI"
---

<SectionTitleSlide />

---
layout: "cover"
class: "negative-day-slide"
sourceSlide: 31
---

<div class="timeline-stage">
  <NegativeDayTimeline scene="trust-boundary" />
</div>

---
layout: "full"
class: "adversarial-git-slide"
clicks: 3
sourceSlide: 32
---

<div class="nd-screens-stage">
  <AdversarialGitScreens />
  <div class="click-register" aria-hidden="true">
    <span v-click />
    <span v-click />
    <span v-click />
  </div>
</div>

---
layout: "full"
class: "adversarial-defenses-slide"
clicks: 5
sourceSlide: 33
---

<AdversarialDefenses />

<div class="click-register" aria-hidden="true">
  <span v-click />
  <span v-click />
  <span v-click />
  <span v-click />
  <span v-click />
</div>

<!--
Four layers, one click each after the empty overview. Architecture: a
restricted agent emits patch:true; the harness can request investigation
and return the full VulnerabilityAnalysis. Instruction isolation: XML
fences plus a forged closer that must stay data. Agent isolation: the
sandbox can reach Artifactory, not the public internet. Monitoring is
the live trace and a tool-call payload.
-->

---
layout: "full"
class: "adversarial-defenses-slide"
clicks: 1
sourceSlide: 34
---

<AdversarialDefenses view="oversight" />

<div class="click-register" aria-hidden="true">
  <span v-click />
</div>

<!--
Same chrome, Monitoring stays highlighted. The chain of thought is
visible immediately; Scalable Oversight labels the purple reviewer on
the next click.
-->

---
layout: cover
class: openssl-slide
title: "Where is the cyber-pocalypse?"
clicks: 0
---

<figure class="bsides-tower"><img src="/bsides/Image322.jpg" alt="Digital infrastructure balanced on open-source maintainers, with AI acting on the tower"></figure>

<!--
Source: Dimi-BSides.pdf, page 39. Reuse only the infrastructure cartoon, without the conference photo. The source PDF labels its attribution as [Source] without an accessible URL. Use this as a metaphor for shared infrastructure and maintainer capacity, not as a prediction or a literal technical dependency map. Where is the cyber-pocalypse? What does more automated discovery mean for the people responsible for these systems?
-->

---
layout: cover
class: openssl-slide
title: "Jevons paradox"
clicks: 0
---

<figure class="bsides-tower"><img src="/jevons-paradox-cars.jpg" alt="Jevons paradox: fuel-efficient cars can encourage more driving and fuel consumption. Illustration by Sketchplanations."></figure>

<!--
Source: Sketchplanations, https://sketchplanations.com/jevons-paradox . Original illustration retained with its embedded attribution. This car analogy introduces the following slide's possible increase in demand for validation.
-->

---
layout: cover
class: openssl-slide
title: "Demand for validation"
clicks: 2
---

<ValidationDemand />

<!--
Source idea: closing discussion in Dimi-BSides-Prague-transcript.txt, Jevons paradox applied to knowledge work. The visual returns to this talk’s existing Excalidraw pipeline. Click one adds candidate findings; click two emphasizes validation and domain expertise. This is a possibility: lower discovery cost may increase demand for expert validation. It is not a measured result or a prediction that demand must grow.
-->
---
layout: cover
class: thank-you-slide
title: Thank You
---

<ThankYouSlide />
