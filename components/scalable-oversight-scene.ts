interface SceneElementMetadata {
  name: string
  stage: number
  revealOrder: number
}

const analyzedAgentElements = [
  ['Analyzed agent antenna tip', 'hSB0Zpx9vQLNUxb3b51Hr'],
  ['Analyzed agent antenna', 'aUYmw15brh70QMlscnSCe'],
  ['Analyzed agent body', 'd8_xZBRcBM9-K_UeDVaNJ'],
  ['Analyzed agent left eye', 'uPdP6JyBF51bLNB75Dwul'],
  ['Analyzed agent left pupil', 'tZoykTSCZJpQtfVts1Xig'],
  ['Analyzed agent right eye', 'aYZ_nKYhBOJpYeMXQkpg-'],
  ['Analyzed agent right pupil', 'B5D4j_ECuHNX5DaFVjwdS'],
  ['Analyzed agent smile', 'xDG2KsrU5VbR8lGCXJUPj'],
  ['Analyzed agent arm', 'w0KfD8YuJmfI5n7DzZ1hu'],
] as const

const chainOfThoughtElements = [
  ['Chain of Thought label', '3I7Pb5hRk9qG1WSsbyZRD'],
  ['Thought explore file', 'Ok1A7MAb8UdHMch7fcEoX'],
  ['Thought ellipsis before injection', 'gtXSY5DNcs_UhDoyTNP-t'],
  ['Thought environment keys', 'nJWmerOnP5D0FcKKSXdRp'],
  ['Thought ellipsis after injection', 'RoCo-Mp7sq1ub_reKp3Ip'],
  ['Thought commit conclusion', '7CmOk2mOpNk5rdWySuIIz'],
] as const

const monitorAgentElements = [
  ['Monitor agent antenna tip', 'XB5a65lo0HYBDOtJMmu6-'],
  ['Monitor agent antenna', '3dEFj6d-WupO7CA1AYX62'],
  ['Monitor agent head', 'r-HoBePydJYBAZx6K9elp'],
  ['Monitor agent left brow', 'hamNd6U-OmhU3kt7__bvm'],
  ['Monitor agent right brow', 'CkO6ejT3klvj9ywRYFL_2'],
  ['Monitor agent left eye', 'Goll-wKOF0i2Sr3qu6QtF'],
  ['Monitor agent right eye', '-M3ist2lGzRQtmIu1LXGx'],
  ['Monitor agent mouth', 'sSkcecP0kq1rzrzjNwllr'],
  ['Monitor agent body', 'ClKPpVA0gLXq0CU6ubueB'],
] as const

const magnifyingGlassElements = [
  ['Magnifying glass lens', 'MYRlQmTPjIFJv-zmhbaR5'],
  ['Magnifying glass lens hole', 'tTm68YZNZT_BDa1DyqGki'],
  ['Magnifying glass handle', 'jarAYQ7pJcaSHqppRPdmn'],
] as const

const oversightTitleElements = [
  ['Scalable Oversight title', 'jqR4ocqTGl6E7yoVaKRz_'],
] as const

const initialElements = [
  ...analyzedAgentElements,
  ...chainOfThoughtElements,
  ...monitorAgentElements,
  ...magnifyingGlassElements,
] as const

const sceneElementMetadata = new Map<string, SceneElementMetadata>([
  ...initialElements.map(([name, id], revealOrder) => [
    id,
    { name, stage: 0, revealOrder },
  ] as const),
  ...oversightTitleElements.map(([name, id], revealOrder) => [
    id,
    { name, stage: 1, revealOrder },
  ] as const),
])

export function getScalableOversightSceneElementMetadata(elementId: string) {
  return sceneElementMetadata.get(elementId)
}
