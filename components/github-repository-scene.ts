interface SceneElementMetadata {
  name: string
  stage: number
  revealOrder: number
}

const repositoryElements = [
  ['Repository tile', 'dgS9Ed-avh_fHMmU8fPOn'],
  ['GitHub mark background', '4n293bvr_OTqe8aVldguL'],
  ['GitHub Octocat mark', 'MXNT8IZgod90Gh_HZFck-'],
  ['GitHub label', '0Rn-Mr3xj7zinaJGHuIyT'],
] as const

const sceneElementMetadata = new Map<string, SceneElementMetadata>(
  repositoryElements.map(([name, id], revealOrder) => [
    id,
    { name, stage: 0, revealOrder },
  ] as const),
)

export function getGithubRepositorySceneElementMetadata(elementId: string) {
  return sceneElementMetadata.get(elementId)
}
