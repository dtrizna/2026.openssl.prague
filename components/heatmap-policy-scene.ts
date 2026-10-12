interface SceneElementMetadata {
  name: string
  stage: number
  revealOrder: number
}

const heatmapPolicyElements = [
  ['Cyber policy arrow', '6lFLTXgoBBD9sd7eget2w'],
  ['Cyber policy violations label', 'gBeziVbJTG5HXAF5TtkBy'],
] as const

const sceneElementMetadata = new Map<string, SceneElementMetadata>(
  heatmapPolicyElements.map(([name, id], revealOrder) => [
    id,
    { name, stage: 1, revealOrder },
  ] as const),
)

export function getHeatmapPolicySceneElementMetadata(elementId: string) {
  return sceneElementMetadata.get(elementId)
}
