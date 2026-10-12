interface SceneElementMetadata {
  name: string
  stage: number
  revealOrder: number
}

const recallCostLolElements = [
  ['Astra cost arrow', 'RddXhTx-kPaMCVa45b2lF'],
  ['Fable cost arrow', 'MRcih_FFO1tQqJtfXsjhJ'],
  ['LoL label', 'QWnu5EPv3IxcFDtRdRj-W'],
] as const

const sceneElementMetadata = new Map<string, SceneElementMetadata>(
  recallCostLolElements.map(([name, id], revealOrder) => [
    id,
    { name, stage: 1, revealOrder },
  ] as const),
)

export function getRecallCostLolSceneElementMetadata(elementId: string) {
  return sceneElementMetadata.get(elementId)
}
