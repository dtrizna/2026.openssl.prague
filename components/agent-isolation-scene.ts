interface SceneElementMetadata {
  name: string
  stage: number
  revealOrder: number
}

const sandboxElements = [
  ['Sandbox label', 'dwM6DnmLT5fqf2FuC-3ar'],
  ['Sandbox frame', 'Pji3sFB0AjqRxSPEA3Arr'],
] as const

const angryAgentElements = [
  ['Angry agent antenna tip', 'h7oAY-eJa1FZRDdr6rNbU'],
  ['Angry agent antenna', '115Aw7f0XSvqqxZZRekom'],
  ['Angry agent head', 'TWZ8Xswo9Lp-h68M7rdP7'],
  ['Angry agent left brow', 'pM0GBesjiDdGsvKaM2XYR'],
  ['Angry agent right brow', 'SMtnpXMh1THrW4A_0D4Jw'],
  ['Angry agent right eye', 'yFyrACrH2kVFWK6m3RfdE'],
  ['Angry agent left eye', '924ZspgCZz0dUgAUQj_sI'],
  ['Angry agent mouth', '95MAIodGaUaC9LnduQk8M'],
  ['Angry agent body', '6vopt1SvjxJXHEnWeTUjg'],
] as const

const happyAgentElements = [
  ['Happy agent antenna tip', 'iFq8jJF83YN41tBy38Tfo'],
  ['Happy agent antenna', '5sEGzukF9IL9vqGTwIAzP'],
  ['Happy agent head', 'rdc44q_1FlVAiK1Bp0BlC'],
  ['Happy agent right eye', 'L1gCjZZ4cFCXW7Ci2ZVwm'],
  ['Happy agent left eye', 'fUEiB1CEV_GitOCOmNLMY'],
  ['Happy agent right pupil', 'QFKHVHksDWLpSliZ2zf17'],
  ['Happy agent left pupil', 'eaag2rKRdkfUOm2pvVa9I'],
  ['Happy agent smile', 'KFGFGLzcTnU_V8Mvx0i4F'],
  ['Happy agent right arm', 'ewMy6Qws3lWfAwgBXYr5f'],
  ['Happy agent raised arm', '5HjKA9vN6EUcr_lRe3AN6'],
  ['Happy agent left arm', '234fEukOFCXkEQ6wyxnSN'],
] as const

const artifactoryElements = [
  ['Sandbox to Artifactory', 'oMKDFYI993oseIgIZMqmk'],
  ['Artifactory mark', 'rdnLn_l_NdDS9u3XZDINM'],
  ['Artifactory to WWW', 'IqJQG-5069-n_E7SSbCTR'],
] as const

const blockedPathElements = [
  ['Blocked public path', 'dNwg2NWLBZed0O-9EYizG'],
  ['Blocked path X left', 'IG-ivKVXnOrb1m3lnpJcC'],
  ['Blocked path X right', 'rIl3qT9PnWjpy41qtQpIJ'],
] as const

const wwwElements = [
  ['WWW circle', 'txMBWCDQGqT0IUV6pvM8r'],
  ['WWW label', 'Jba4dVNGzHNxPgRJ0iNO5'],
] as const

const allAgentIsolationElements = [
  ...sandboxElements,
  ...angryAgentElements,
  ...happyAgentElements,
  ...artifactoryElements,
  ...blockedPathElements,
  ...wwwElements,
] as const

const sceneElementMetadata = new Map<string, SceneElementMetadata>(
  allAgentIsolationElements.map(([name, id], revealOrder) => [
    id,
    { name, stage: 0, revealOrder },
  ] as const),
)

export function getAgentIsolationSceneElementMetadata(elementId: string) {
  return sceneElementMetadata.get(elementId)
}
