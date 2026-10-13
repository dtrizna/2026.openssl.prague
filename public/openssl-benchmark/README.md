# OpenSSL benchmark snapshot

Source: analyzer_bench/openssl_ablation/results/report.html and full_table.csv,
2026-10-13. `results.csv` is the unmodified report table captured for this deck.

`performance-cost.svg` uses completed runs only, `analyzer_cost_estimate_usd`
and `100 * detection_rate`. The observed Pareto frontier is the increasing
best detection score after sorting cost ascending. This is the same selection
and calculation as the report's performance_vs_cost.png, reformatted for slides.

14 complete models; Qwen remains in progress in this snapshot.
Uncached token-price estimates include interrupted/repeated/superseded work.
Judge costs excluded; Modal compute billing unmeasured. One trial per model.
Model/provider settings and retry policies differ. Detection is matched known
CVEs / 22, not general recall or precision. It is not a fresh-scan price estimate.

Setup slide: reduced excerpt from data/openssl_v2.json, CVE-2025-9230.
The code_snippet field is shortened to one original source line.
