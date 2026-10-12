interface SceneElement {
  id: string
  isDeleted: boolean
}

interface SceneElementMetadata {
  name: string
  stage: number
  revealOrder: number
}

const firstPartyElements = [
  ['First-party code box', 'IhTlSJIueVDN5KBNsLaQr'],
  ['First-party code label', 'sh16iPKW63ILInGluDLmy'],
  ['Devs label', 'aBiZ56Vg_VhwyxWcbpRGq'],
  ['Devs right body', 'pfIirDHF1R4FuQkAga0Ye'],
  ['Devs left body', 'ivKCOzvzC8ftxsVyoe2hw'],
  ['Devs right head', 'knVqMZZtQdlkrtriGAN-G'],
  ['Devs left head', 'JpyORbCN1C9FBjQWKDjG9'],
  ['Devs center body', 'xfWDA7GgaZYBEFpCol7MP'],
  ['Devs center head', 'BIEf0NxZ411O4624Ppqpt'],
  ['Commits label', '7K_A3c2K1Lv6ptPGsHTbu'],
  ['First-party commit 1', '2su2O4PG7mr-7QoDMzd6q'],
  ['First-party commit 2', 'NGzTux33WCCh2BjPqfsT8'],
  ['First-party commit 1–2 arrow', 's86QnphpgDQ_xPWESCdk5'],
  ['First-party branch commit 1', 'WDS_8lUhLtRXWYoNU3-yV'],
  ['First-party branch commit 2', 'XxSvkB-vSSHqxOAyh3Y59'],
  ['First-party branch commit arrow', 'yrSczob28MgUaIbB6cRRY'],
  ['First-party continuation arrow', 'UMuoqb_qYv0nbDnhU-QAN'],
  ['First-party commit 3', 'AV7xDxT69M4XwNa6zv0uD'],
  ['First-party branch merge arrow', 'XYEoD-825S45WAmpkxIsT'],
] as const

const thirdPartyFrameElements = [
  ['Third-party version card (back)', 'J0c6h5qEGQR-WDMVsdaLH'],
  ['Third-party version card (middle)', 'CX1aMPvRe07f-GAL462G_'],
  ['Third-party version card (front)', '9aV9EaCwmT_vROy10W59-'],
  ['Third-party to first-party arrow', 'qs9znx3a_sI9KDXJa7isL'],
  ['Third-party code label', 'ds9dedUlNM2HyydXFpEEA'],
] as const

const versionElements = [
  ['Version 9.24', 'yHgLtfz9M4-ukG4Ws1Oqg'],
  ['Version ellipsis', 'tD5KKI1S1rXFiFAwEbiKi'],
  ['Version 9.25', 'KKT7jFkZdtoBPI4apDlod'],
] as const

const versionElementIds = new Set(versionElements.map(([, id]) => id))
const versionBumpScreenAspect = 383 / 263
const versionBumpScreenHeight = 221
const versionBumpScreenGap = 28

export const versionBumpScreen = {
  id: 'version-bump-screen',
  name: 'Version bump screenshot',
  stage: 2,
  src: '/version-bump.png',
} as const

export function getVersionBumpScreenGeometry(
  elements: readonly { id: string, x: number, y: number, width: number, height: number }[],
) {
  const versions = elements.filter(element => versionElementIds.has(element.id))
  const right = Math.max(...versions.map(element => element.x + element.width))
  const top = Math.min(...versions.map(element => element.y))
  const bottom = Math.max(...versions.map(element => element.y + element.height))
  const height = versionBumpScreenHeight
  const width = height * versionBumpScreenAspect

  return {
    type: 'image' as const,
    x: right + versionBumpScreenGap,
    y: (top + bottom) / 2 - height / 2,
    width,
    height,
  }
}

const maintainerElements = [
  ['Open Source Maintainers label', 'DvrshhCavCoNwJ0Wj0tXd'],
  ['Open Source Maintainers right body', 'dLuGkMjUHNFO5g-_YvCzY'],
  ['Open Source Maintainers left body', 'wMbznTcWbkKrSThoZV_C4'],
  ['Open Source Maintainers right head', 'VoLZh4o9Da2_x82yKVFGk'],
  ['Open Source Maintainers left head', '4r-0ffK6skkicxOA978hN'],
  ['Open Source Maintainers center body', '6Pesx4fjv3t9FZ9SfNywA'],
  ['Open Source Maintainers center head', 'Gb4ns3Xm4qinZFVlx21mW'],
] as const

const thirdPartyCommitElements = [
  ['Third-party commit 1', 'o7Tcr6rQv7v54ZJ4slz3_'],
  ['Third-party commit 2', 'hy5xE4W6W4q41HYYQ7QJF'],
  ['Third-party commit 1–2 arrow', '7GPD9WdKBvR_snPFynNW1'],
  ['Third-party branch commit 1', 'y6V877vGckvgQsOL5Qv4x'],
  ['Third-party branch commit 2', 'vlgcnpHDkIF-7y1BNUKKq'],
  ['Third-party branch commit arrow', 'A9jEkUGSaZOxrIpjtDi2Z'],
  ['Third-party continuation arrow', 'hNXKVz6QCT307yixyGGJy'],
  ['Third-party commit 3', 'TxLi1uKE6FugQVrcJWvO9'],
  ['Third-party branch merge arrow', 'bF9aYM-yXD0ojwkH14F-q'],
] as const

const sceneElementMetadata = new Map<string, SceneElementMetadata>(
  [
    firstPartyElements,
    thirdPartyFrameElements,
    versionElements,
    maintainerElements,
    thirdPartyCommitElements,
  ].flatMap((elements, index) =>
    elements.map(([name, id], revealOrder) => [
      id,
      { name, stage: index, revealOrder },
    ] as const),
  ),
)

export function getFirstPartyCodeSceneElementMetadata(elementId: string) {
  return sceneElementMetadata.get(elementId)
}

export function getVisibleFirstPartyCodeSceneElements<T extends SceneElement>(
  elements: readonly T[],
  click: number,
) {
  const currentStage = Math.max(0, Math.floor(click))
  return elements.filter((element) => {
    const revealStage = getFirstPartyCodeSceneElementMetadata(element.id)?.stage
    return !element.isDeleted && revealStage !== undefined && revealStage <= currentStage
  })
}
