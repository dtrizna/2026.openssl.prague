interface SceneElement {
  id: string
  isDeleted: boolean
}

interface AlignableSceneElement extends SceneElement {
  x: number
  y: number
}

interface SceneElementMetadata {
  name: string
  stage: number
}

const alignedBaseElements = [
  ['Mainline commit 1', 'YfgQY0PDvnAl1vC_RP6WC', '_119BQISTsstHjR9n5vqL'],
  ['Mainline commit 2', 'lUJw671kpmU_9dC5UEsxE', 'sjTpmXgbDTIJbbX9gW_Yt'],
  ['Mainline commit 1–2 arrow', 'Loc_7s1yVFVw5CKETjlEv', 'tnocYXwWXJanO-uF-6J6c'],
  ['Branch commit 1', '13Dq71fhAmGWPnrTTSuXr', 'jetRfyCAp5fKWov3wvVvd'],
  ['Branch commit 2', 'fDdCIYz8PXBHnjVMt12tc', 'G7SPuYlm93tHn54SdzKxp'],
  ['Branch commit arrow', 'XlryqwlMZMGGBFkxT2hTS', 'kE5XEgtQeB508Bp-S1uBk'],
  ['Mainline continuation arrow', 'z4x7NiTUr68PG35dTVNYa', 'wTujdPjHTJoTxD8qZ686P'],
  ['Mainline commit 3', '85A0eGurG_7zPNrVmmAm6', '_UntBJonDIiBtTOJamCHM'],
  ['Branch merge arrow', '2QSHJCMmQgocbaDHiwDvf', 'Z_uCokiZiowTjso696CsQ'],
  ['Maintainers label', 'UsSdNg6yDfZ7En-yeW5bK', 'yWgXlJxVLC587nRQEJuYe'],
  ['Maintainers right body', 'n76StEH-kgVl3ibadt7re', 'wUbUMH5b1QB7cTJWrZ1pG'],
  ['Maintainers left body', 'SsH7RADb_gmtk6mIdhx0h', 'TFcFO1BGzOfzB-YXPBf_c'],
  ['Maintainers right head', 'KgngR2X5ArKuFsYw8FYNT', 'Inn3jDIMYyAgtA1P76CCa'],
  ['Maintainers left head', 'T4sPvIstKvAxqAP4V6fw0', 'YnkJyBgc8CJdvn5g8AlYO'],
  ['Maintainers center body', 'boIui6xrnkpaaLi3nxH2x', 'aycMtXC5ESjUHtwhNAdhU'],
  ['Maintainers center head', 'YaXLYIolglwR3ZM8Mh-CA', 'i4-Hk3w-ZKLGmftHn1WXh'],
  ['Commits label', 'g1WA-FK6_NHcFyhJD8Zjn', '4nCSAqu9FEljKJWcucAfg'],
  ['Time axis', 'd0ZVACz6lvS9m1UKwEA-B', '8bdg79-7PR1cHsVUHx3Yf'],
  ['Time label', 'luDtHieZsNj02ummEV3ZO', 'BxILtKE4rfvFfNJjIJnwE'],
  ['Affected users label', 'FRaUTShdIomhHOmHsGHIq', 'tcNTPRfj14_AOKP6LuWCP'],
  ['Affected users right body', 'VPbrzMX_VM4TzbexZw0fH', 'YZJMK3fvylYmzdThvI5k2'],
  ['Affected users left body', 'RybLNhkJw9S9A__KNo6p0', 'K1N-J7eXlOjow2t-nHut1'],
  ['Affected users right head', 'eSyG0Zrf257zByYpdggUy', 'xFJwF4WlncRn-3O8u162z'],
  ['Affected users left head', 'xL-zcpqK_3cDWX_9SYV8s', 'qopn_niOJ4mL4UjMz9-Ig'],
  ['Affected users center body', 'l2H-J1hF0-kIXXk_aOn-q', 'mYV6EfMvJqP7u6NkR5LEO'],
  ['Affected users center head', '43hTaq-irDlDuSlVY_Fh3', 'Ms6iMFyCdveAk7b1zlc3t'],
  ['Affected users notification arrow', 'MpQIdZklYd4STu0YyvHJo', 'HOi5MhajElqmFMfw6ICh4'],
  ['Vulnerable commit 1 circle', '_7U_w8VNvd1U4ZnwLs7GC', 'gjwGQOCa8AQFtQFeOhrDn'],
  ['Vulnerable commit 1 marker', 'cFGcg1k2NbMFx2NCt4e6-', 'm2jCyRXdVtSB5XyDj8WcT'],
  ['Vulnerable commit 1 marker dot', '75WcHqp9RHEZgdTYZjpGG', 'V7gPQVFgMh8ET47VqIXb_'],
  ['Vulnerable commit 2 circle', 'ZSYR7pRLByONVPxWWwdpo', 'dUANVBnO2pUNdo3J3o-DY'],
  ['Vulnerable commit 2 marker', 'N9V4WYUKKj3BLkIpKtvU0', '4ICUFRKvoJZa__u7LXMri'],
  ['Vulnerable commit 2 marker dot', 'dS0ZRk9n9fhBwK2leNl42', 'knx9x6Rof6dHVpP0VPoWl'],
  ['Arrow into vulnerable commit 1', '8svqNSk3BWFd8XnUE4GUY', 'IP9DD61H9QhvZhgRAlUm-'],
  ['Vulnerable commit 1–2 arrow', 'gny__6sRgR7aYIpDxDaGP', 'R1YyeHZwM0Z8vKE0yH9XR'],
  ['Vulnerability label', 'J5GnFKZ7nUzcYuUVT1R1s', 'TFDkvmJiLHy8liIj9oNlX'],
  ['Security Researcher label', 'lCy7BJxXHnh04zfnhyxYS', 'w2JjnPU3SMGMVY5COb2BU'],
  ['Security Researcher body', '-kId3lGwdiG2ZNr7vrmZu', '9KJwL8_fPWjw8cs6MhDqu'],
  ['Security Researcher head', 'ZSdTTQ-80OK_H2ISW1T57', 'aWOqMKviYpOtqTY1rLfiv'],
  ['Researcher disclosure arrow', '7sDtV_6lRLJ-C634qNmH-', 'PRSBAlI4b2FQX1GCVD0BG'],
  ['Maintainer label', 'YOSqqnI_95NYZg0HDbyCe', 'QOsqFTlTQ0u7eEaP0nUfs'],
  ['Maintainer body', 'p-9CQ1fIh6fGJScQki-Tt', 'zRvPiqujjk2v-rBdDnoaZ'],
  ['Maintainer head', '_LjxwGtLDkZBs32wsV5IP', 'ubU-B0879u8GVNXMoJyph'],
  ['Researcher-to-maintainer arrow', 'ROCmgbp87MU4gAaoHOqBV', 'ftZZuIIPoADIqlx3OimYb'],
  ['Maintainer patch arrow', 'QIeb1mnjWJW3mUi-cHo3Y', 'jtmSI32p2bni3EXsGadcV'],
  ['Vulnerable commit 3 circle', '9rLdDBWS9NXD8MRrgpXSM', 'dh9zvMD2z6NHa75XBJrYh'],
  ['Vulnerable commit 3 marker', 'DWjQXMprME4qX5yN2Jeig', 'T37qFheCSdn5xKFv8wo3H'],
  ['Vulnerable commit 3 marker dot', 'GMUTo6bFjx93JCz_iStHu', 'bC_RpdIVS3AEAKMEJje_7'],
  ['Vulnerable commit 2–3 arrow', 'KpxGglZzA6k9HFMExdlRX', 'gfOGY-3qsI8O7H0vFegT6'],
  ['Patch commit circle', 'pNKpJV6Z1Xs8aGc6TlRHp', 'MRU2udBibgfYcQrK83MCk'],
  ['Patch commit marker', 'y5fS7J09td3PEVTzyKn8S', 'HZrPVLD2g6Cc1Flih3E-S'],
  ['Patch commit marker dot', 'BwiKbe6Ya1Fh9_KnKPYQZ', 'M3nrzjYM4YNC3Z0VesdNV'],
  ['Arrow into patch commit', 'v-MsAfYBel7909OdMJu-z', '6Bcc3mGAm7WgzeyHokUZF'],
  ['Patch label', 'tBn2O78qX7NSfBFu2ZVsN', '1S8bjYzIz8brdQyPRXXMe'],
  ['Post-patch commit 1', 'CQ8iQXVvMYWq1o6aho3C-', 'bkkOGAyZFGRjpGZqgxguF'],
  ['Patch-to-post-patch arrow', 'Q173xk-9ovWA7OnsvNbPP', 'PqItQJJcIdwzecaspu7np'],
  ['Post-patch commit 2', 'gwe-YA3wgN61rtZKNnhfP', 'kRb4NEb8AKkLEUTqHnYIi'],
  ['Post-patch commit 1–2 arrow', 'dV0RBGBhqGTx4pL9iDLxU', 'jF1bi-Knc5xN6wpn02Xye'],
  ['Post-patch commit 3', '9wjSWSgxQS7hgTqAmchD7', 'ang8zXmFkvgaS-tCvlAW5'],
  ['Post-patch commit 2–3 arrow', 'cQNULniPnPHXV_UxfhDaW', 'FhZ8OAx0T7621SJbBQP9y'],
  ['Update users label', 'XgVOhTUlJ2I0LdjmHYnM7', '9-_EoFnjp7eqo9u5zsifk'],
  ['Update users right body', 'zwAPP2lqRfNDEgIHGrQsM', 'qSxIzSK8QB2iG2eKleWI_'],
  ['Update users left body', 'JNBHLLplFkKZLpkGSKso5', 'DSBia9NKuYYt1-nuF__1b'],
  ['Update users right head', 'mSk6EYAcd_C3yfxsZb2S6', 'VhdXqXr3TSW_PNGF7MXAm'],
  ['Update users left head', 'uIP4pSHmqzxa3OHCaA7WS', 'taUiR3He3V4zuXr0QJOb2'],
  ['Update users center body', 'zSKP23etDYD7mkp9Awcov', 'dH73GVbb88aQVtHV7FkL3'],
  ['Update users center head', 'RS7kU77jyIC7lzMKIbuDW', '-HMb5basXZ8XXqxeuUbri'],
  ['Silent-patch start marker', 'NTXZvLOrPqs5-dKHHcdQY', 'UuIhgAOKN6M1Q4ldJvy4j'],
] as const

const silentPatchRevealElements = [
  ['Silent Patch label', 'oxlOh0mlY1WrXAXjoNwgG'],
  ['Silent-patch duration arrow', 'hR0X6uQO6mYCARZ_BvLre'],
] as const

const awarenessOutcomeElements = [
  ['User awareness outcome', 'J1oHqv47zz9VB6LMoSWr0'],
] as const

const sceneElementMetadata = new Map<string, SceneElementMetadata>([
  ...alignedBaseElements.map(
    ([name, id]) => [id, { name, stage: 0 }] as const,
  ),
  ...silentPatchRevealElements.map(
    ([name, id]) => [id, { name, stage: 1 }] as const,
  ),
  ...awarenessOutcomeElements.map(
    ([name, id]) => [id, { name, stage: 2 }] as const,
  ),
])

export const silentPatchAlignmentPairs = alignedBaseElements.map(
  ([, secondId, firstId]) => [firstId, secondId] as const,
)

const secondSchemeTranslation = {
  x: 66.27364905945378,
  y: 903.0413016901252,
} as const

export function getSilentPatchSceneElementMetadata(elementId: string) {
  return sceneElementMetadata.get(elementId)
}

export function getVisibleSilentPatchSceneElements<T extends SceneElement>(
  elements: readonly T[],
  click: number,
) {
  const currentStage = Math.max(0, Math.floor(click))
  return elements.filter((element) => {
    const revealStage = getSilentPatchSceneElementMetadata(element.id)?.stage
    return !element.isDeleted && revealStage !== undefined && revealStage <= currentStage
  })
}

export function alignSilentPatchSceneElements<T extends AlignableSceneElement>(
  elements: readonly T[],
) {
  const sourceById = new Map(elements.map(element => [element.id, element]))
  const firstIdBySecondId = new Map(
    silentPatchAlignmentPairs.map(([firstId, secondId]) => [secondId, firstId]),
  )

  return elements.map((element): T => {
    const firstId = firstIdBySecondId.get(element.id)
    const firstElement = firstId && sourceById.get(firstId)

    if (firstElement) {
      return {
        ...firstElement,
        id: element.id,
        isDeleted: element.isDeleted,
      }
    }

    if (getSilentPatchSceneElementMetadata(element.id) !== undefined) {
      return {
        ...element,
        x: element.x - secondSchemeTranslation.x,
        y: element.y - secondSchemeTranslation.y,
      }
    }

    return element
  })
}
