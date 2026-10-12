import {
  getArchitectureHarnessSceneElementMetadata,
  getArchitectureRestrictedSceneElementMetadata,
} from './architecture-defense-scene'

interface SceneElementMetadata {
  name: string
  stage: number
  revealOrder: number
}

interface SourceElement {
  id: string
  x: number
  y: number
  isDeleted: boolean
}

const restrictedAgentLimitId = '7YXPdiMx8RaXfZrLH9e_E'

const hammerSourceElements = [
  ['Agent hammer head', 'zd9Y-vL-1aXG3VNbPI_r-'],
  ['Agent hammer handle', '9BEgIyoQepG4HfZXKdeZ_'],
] as const

const sawSourceElements = [
  ['Agent saw shaft', 'mczr3rGQyko5JGzK4s9zG'],
  ['Agent saw head', 'JjbjVPwzPyaqLBmkPQuLL'],
  ['Agent saw thread 1', 'uxyfoXIXPNOWIubyxmcW0'],
  ['Agent saw thread 2', 'jbXv_BIeYymOrSHqewxg8'],
  ['Agent saw thread 3', 'taUwhj6195lV1FAwA7HQ3'],
  ['Agent saw thread 4', 'SQGJ8wyS3h6HL4Lzu6qQm'],
  ['Agent saw thread 5', 'QaDHvJsdfOOrvDfxDazFI'],
  ['Agent saw thread 6', 'OwBZ1ZVkeoSVjM1kbKfc6'],
  ['Agent saw thread 7', 'xQEhdajbmv7KtMP7pQbQl'],
] as const

const hammerShift = { x: -68, y: 208 }
const sawShift = { x: 72, y: 298 }

function copyId(kind: 'hammer' | 'saw', sourceId: string) {
  return `harness-agent-${kind}-${sourceId}`
}

const agentToolElements = [
  ...hammerSourceElements.map(
    ([name, id]) => [name, copyId('hammer', id)] as const,
  ),
  ...sawSourceElements.map(([name, id]) => [name, copyId('saw', id)] as const),
]

const agentToolMetadata = new Map<string, SceneElementMetadata>(
  agentToolElements.map(([name, id], revealOrder) => [
    id,
    { name, stage: 0, revealOrder },
  ]),
)

function shiftedCopy<T extends SourceElement>(
  element: T,
  kind: 'hammer' | 'saw',
  shift: { x: number; y: number },
) {
  return {
    ...element,
    id: copyId(kind, element.id),
    x: element.x + shift.x,
    y: element.y + shift.y,
    isDeleted: false,
  }
}

export function getHarnessSimpleSceneElementMetadata(elementId: string) {
  if (elementId === restrictedAgentLimitId)
    return undefined
  return getArchitectureRestrictedSceneElementMetadata(elementId)
}

export function getHarnessAgentSceneElementMetadata(elementId: string) {
  if (elementId === restrictedAgentLimitId)
    return undefined
  return (
    getArchitectureRestrictedSceneElementMetadata(elementId)
    ?? agentToolMetadata.get(elementId)
  )
}

export function getHarnessMultiSceneElementMetadata(elementId: string) {
  return getArchitectureHarnessSceneElementMetadata(elementId)
}

export function getHarnessAgentToolElements<T extends SourceElement>(
  sourceElements: readonly T[],
) {
  const hammerIds = new Set<string>(hammerSourceElements.map(([, id]) => id))
  const sawIds = new Set<string>(sawSourceElements.map(([, id]) => id))
  return sourceElements.flatMap((element) => {
    if (element.isDeleted)
      return []
    if (hammerIds.has(element.id))
      return [shiftedCopy(element, 'hammer', hammerShift)]
    if (sawIds.has(element.id))
      return [shiftedCopy(element, 'saw', sawShift)]
    return []
  })
}
