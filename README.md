# OpenSSL conference talk

Install dependencies with `npm ci`. Run `npm run dev` and open the local URL shown. Use Space / Right to reveal,
Left to reverse, and `o` for the slide overview. Build with `npm run build`.

The images and Excalidraw sources are self-contained.

Content follows the OpenSSL conference outline, with the approved BSides additions
and closing sequence.

- Slides 1–3: title, UNPROMPTED whoami, and automatic section agenda.
- Slides 4–11: Protecting Open Source Ecosystem, Mythos and Anthropic evidence,
  CVE factory, validation pipeline, jagged capabilities, and small-model results.
- Slides 12–17: Lesson 1: Eval Driven Development. Harness iterations, benchmark
  inputs and outputs, OpenSSL dataset setup, model progression, and cost/performance.
- Slides 18–22: Lesson 2: Deterministic Gate. Goal and environment, ASan,
  Wireshark CVEs and PoC video, and remediation.
- Slides 23–32: Lesson 3: Ecosystem is Complex, with Negative Day Vulnerabilities.
- Slides 33–38: Lesson 4: Protect Your Agents, with Adversarial AI and defenses.
- Slides 39–40: Conclusions and staged takeaways.
- Slide 41: BSides infrastructure tower.
- Slide 42: Jevons paradox car illustration by [Sketchplanations](https://sketchplanations.com/jevons-paradox).
- Slide 43: discovery/validation pipeline revisited with increased validation demand.
- Slide 44: white thank-you slide with QR code.

The agenda includes section subtitles and groups slides marked `subsection: true`
under the preceding `section: true` slide. Subsection entries use gray text.
Content slides include the OpenSSL Conference footer and slide number.

Slide 7 stages the Anthropic screenshots and orange speaker paraphrase, including
report evidence between the triage-firms and tired-reviewers lines. The source
excerpt says approximately 6,000 candidates were manually reviewed and triaged;
it does not establish that 6,000 were validated. Slide 9 separately reveals the
candidate labels, model families, validation, and security domain expertise.
The reaction GIF reveals below LoL on slide 32.

OpenSSL benchmark data and methodology notes live in `public/openssl-benchmark/`.

## BSides sources

Assets in `public/bsides` were extracted from `Dimi-BSides.pdf` without
rasterizing the whole slides. Original source: `/Users/dtrizna/Talks/Aisle_Times/`.
Speaker notes retain source page numbers and interpretation limits. The harness benchmark is an editable Vue diagram; evidence screenshots
and cartoons retain their original pixels. Earlier fuzzing-workflow assets remain
available locally but are no longer part of the slide sequence. The jagged illustration uses an SVG
viewport to show only the relevant panel. No context-problem material is included.

- Pages 24–25: `Image205.png`, `Image215.png`, `Image211.png`, `Image209.png`,
  `Image207.png` (workflow icons), `Image221.png` (OSS-Fuzz baseline).
- Page 26: `Image228.png` (original benchmark table backing the editable rows).
- Page 27: `Image233.png` (harness comparison viewer).
- Page 33: `Image278.jpg` (jagged-capability illustration).
- Page 39: `Image322.jpg` (infrastructure tower).
- Transcript closing discussion: Jevons-paradox idea, framed as a possibility.

## Editing the diagrams

- `draws/schemes.excalidraw` owns the new diagrams' geometry and text.
- `components/openssl-scenes.ts` owns semantic names and reveal stages.
- `components/OpenSSLDiagram.vue` owns the Rough.js rendering.
- `draws/nd-scheme.excalidraw` and the inherited scene manifests own the
  migrated UNPROMPTED diagrams and their original reveal timing.

The original decks and drawings remain unchanged. The local source copies have
stable `customData.slidevKey` names for the mapped OpenSSL elements. Preserve
IDs and keys on Excalidraw round trips. Unmapped drawings in the source canvas
are deliberately outside these slide viewports.
