interface AnimatablePath {
  classList: {
    add: (...tokens: string[]) => void
  }
  getAttribute: (name: string) => string | null
  setAttribute: (name: string, value: string) => void
}

export function preparePathForAnimation(path: AnimatablePath) {
  const dashPattern = path.getAttribute('stroke-dasharray')
  if (dashPattern && dashPattern !== 'none') {
    path.classList.add('patterned-stroke')
    return
  }

  path.setAttribute('pathLength', '1')
}
