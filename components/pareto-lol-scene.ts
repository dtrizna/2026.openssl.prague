interface SceneElementMetadata {
  name: string
  stage: number
  revealOrder: number
}

export const paretoLolCodeOnlyElements = [
  {
    id: 'pareto-astra-fable-oval',
    type: 'ellipse' as const,
    x: 1672,
    y: 2918,
    width: 310,
    height: 170,
    angle: -0.46,
    strokeColor: '#ff3b30',
    backgroundColor: 'transparent',
    fillStyle: 'solid',
    strokeWidth: 2,
    strokeStyle: 'solid',
    roughness: 1,
    opacity: 100,
    seed: 19,
    isDeleted: false,
  },
]

const paretoLolElements = [
  ['Astra Fable oval', 'pareto-astra-fable-oval'],
  ['LoL label', 'QWnu5EPv3IxcFDtRdRj-W'],
] as const

const sceneElementMetadata = new Map<string, SceneElementMetadata>(
  paretoLolElements.map(([name, id], revealOrder) => [
    id,
    { name, stage: 2, revealOrder },
  ] as const),
)

export function getParetoLolSceneElementMetadata(elementId: string) {
  return sceneElementMetadata.get(elementId)
}
