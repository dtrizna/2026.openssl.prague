interface SceneGeometry {
  type: string
  x: number
  y: number
  width: number
  height: number
  points?: readonly (readonly [number, number])[]
}

function getElementPoints(element: SceneGeometry) {
  if (
    (element.type === 'arrow' || element.type === 'line')
    && element.points?.length
  ) {
    return element.points.map(([x, y]) => [
      element.x + x,
      element.y + y,
    ] as const)
  }

  return [
    [element.x, element.y],
    [element.x + element.width, element.y + element.height],
  ] as const
}

export function calculateSceneViewBox(
  elements: readonly SceneGeometry[],
  padding = 0,
) {
  if (elements.length === 0)
    return '0 0 1 1'

  const points = elements.flatMap(getElementPoints)
  const xCoordinates = points.map(([x]) => x)
  const yCoordinates = points.map(([, y]) => y)
  const safePadding = Math.max(0, padding)
  const minimumX = Math.min(...xCoordinates) - safePadding
  const minimumY = Math.min(...yCoordinates) - safePadding
  const width = Math.max(...xCoordinates) - minimumX + safePadding
  const height = Math.max(...yCoordinates) - minimumY + safePadding

  return `${minimumX} ${minimumY} ${width} ${height}`
}
