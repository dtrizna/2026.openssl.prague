# OpenSSL conference talk

Install dependencies with `npm ci`. Run `npm run dev` and open the local URL shown. Use Space / Right to reveal,
Left to reverse, and `o` for the slide overview. Build with `npm run build`.

The images and Excalidraw sources are self-contained.

Content follows the OpenSSL conference outline, with the approved BSides additions
and closing sequence.

- Slides 1–3: title, original UNPROMPTED whoami, and automatic section agenda.
- Slide 4: Protecting Open Source Ecosystem. Slides 5–13 cover discovery,
  evidence, and the validation pipeline.
- Slide 14: Domain Expertise. Slides 15–18 cover proof of concept, remediation,
  and evaluation.
- Slides 10–11: BSides jagged-capability illustration and Minesweeper analogy.
- Slides 17–18: editable fuzzing/evaluation diagram, two original benchmark
  examples, and the original harness-viewer screenshot on click.
- Slide 19: Negative Day Vulnerabilities. Slides 20–27 correspond to
  UNPROMPTED slides 6, 7, 8, 10, 11, 12, 17, 19.
- Slide 28: Attacks on Your Agents. Slides 29–32 correspond to UNPROMPTED
  slides 31–34.
- Slides 33–34: BSides infrastructure tower and the discovery/validation
  pipeline revisited with a possible increase in validation demand.
- Slide 35: original UNPROMPTED thank-you and QR slide.

The agenda automatically reads the title of every slide marked `section: true`.
The reaction GIF reveals below LoL on slide 27.

Screenshot groups reveal one image per click, with earlier images remaining.
Slide 12 starts with the complete discovery half, then reveals the two Anthropic
screens on its right and the orange Excalidraw paraphrase beneath them.
Slide 13 uses the same viewport and position for discovery and reveals validation
and expertise in place. The source excerpt says approximately 6,000 candidates
were manually reviewed and triaged; it does not establish that 6,000 were validated.

## BSides sources

Assets in `public/bsides` were extracted from `Dimi-BSides.pdf` without
rasterizing the whole slides. Original source: `/Users/dtrizna/Talks/Aisle_Times/`.
Speaker notes retain source page numbers and interpretation limits. The evaluation
diagram and benchmark table are editable Vue elements; the evidence screenshots
and cartoons retain their original pixels. The jagged illustration uses an SVG
viewport to show only the relevant panel. No context-problem material is included.

- Page 9: `Image116.jpg` (Minesweeper).
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
