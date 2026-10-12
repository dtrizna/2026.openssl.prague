interface SceneElement {
  id: string
  isDeleted: boolean
}

const initialLineageElements = [
  ['Mainline commit 1', '_119BQISTsstHjR9n5vqL'],
  ['Mainline commit 2', 'sjTpmXgbDTIJbbX9gW_Yt'],
  ['Mainline commit 1–2 arrow', 'tnocYXwWXJanO-uF-6J6c'],
  ['Branch commit 1', 'jetRfyCAp5fKWov3wvVvd'],
  ['Branch commit 2', 'G7SPuYlm93tHn54SdzKxp'],
  ['Branch commit arrow', 'kE5XEgtQeB508Bp-S1uBk'],
  ['Mainline continuation arrow', 'wTujdPjHTJoTxD8qZ686P'],
  ['Mainline commit 3', '_UntBJonDIiBtTOJamCHM'],
  ['Branch merge arrow', 'Z_uCokiZiowTjso696CsQ'],
  ['Maintainers label', 'yWgXlJxVLC587nRQEJuYe'],
  ['Maintainers right body', 'wUbUMH5b1QB7cTJWrZ1pG'],
  ['Maintainers left body', 'TFcFO1BGzOfzB-YXPBf_c'],
  ['Maintainers right head', 'Inn3jDIMYyAgtA1P76CCa'],
  ['Maintainers left head', 'YnkJyBgc8CJdvn5g8AlYO'],
  ['Maintainers center body', 'aycMtXC5ESjUHtwhNAdhU'],
  ['Maintainers center head', 'i4-Hk3w-ZKLGmftHn1WXh'],
  ['Commits label', '4nCSAqu9FEljKJWcucAfg'],
  ['Time axis', '8bdg79-7PR1cHsVUHx3Yf'],
  ['Time label', 'BxILtKE4rfvFfNJjIJnwE'],
] as const

const affectedUserElements = [
  ['Commit before vulnerability reveal', 'jb6bszYJnYYhAlmh6cgHR'],
  ['Arrow into vulnerable commit 1', 'IP9DD61H9QhvZhgRAlUm-'],
  ['Affected users label', 'tcNTPRfj14_AOKP6LuWCP'],
  ['Affected users right body', 'YZJMK3fvylYmzdThvI5k2'],
  ['Affected users left body', 'K1N-J7eXlOjow2t-nHut1'],
  ['Affected users right head', 'xFJwF4WlncRn-3O8u162z'],
  ['Affected users left head', 'qopn_niOJ4mL4UjMz9-Ig'],
  ['Affected users center body', 'mYV6EfMvJqP7u6NkR5LEO'],
  ['Affected users center head', 'Ms6iMFyCdveAk7b1zlc3t'],
  ['Affected users notification arrow', 'HOi5MhajElqmFMfw6ICh4'],
] as const

const securityResearcherElements = [
  ['Security Researcher label', 'w2JjnPU3SMGMVY5COb2BU'],
  ['Security Researcher body', '9KJwL8_fPWjw8cs6MhDqu'],
  ['Security Researcher head', 'aWOqMKviYpOtqTY1rLfiv'],
] as const

const vulnerabilityElements = [
  ['Vulnerable commit 1 circle', 'gjwGQOCa8AQFtQFeOhrDn'],
  ['Vulnerable commit 1 marker', 'm2jCyRXdVtSB5XyDj8WcT'],
  ['Vulnerable commit 1 marker dot', 'V7gPQVFgMh8ET47VqIXb_'],
  ['Vulnerable commit 2 circle', 'dUANVBnO2pUNdo3J3o-DY'],
  ['Vulnerable commit 2 marker', '4ICUFRKvoJZa__u7LXMri'],
  ['Vulnerable commit 2 marker dot', 'knx9x6Rof6dHVpP0VPoWl'],
  ['Vulnerable commit 1–2 arrow', 'R1YyeHZwM0Z8vKE0yH9XR'],
  ['Vulnerability label', 'TFDkvmJiLHy8liIj9oNlX'],
  ['Researcher disclosure arrow', 'PRSBAlI4b2FQX1GCVD0BG'],
] as const

const reportToMaintainerElements = [
  ['Maintainer label', 'QOsqFTlTQ0u7eEaP0nUfs'],
  ['Maintainer body', 'zRvPiqujjk2v-rBdDnoaZ'],
  ['Maintainer head', 'ubU-B0879u8GVNXMoJyph'],
  ['Researcher-to-maintainer arrow', 'ftZZuIIPoADIqlx3OimYb'],
] as const

const cnaRequestElements = [
  ['CNA box', '0rHAqR-w1G00OylKi8U3o'],
  ['CNA label', 'RnCYnW-qPqHOp22q9qowP'],
  ['CNA request arrow', 'QXysfWuLoHt0UaTRhoG0R'],
  ['We need a CVE quote', '1KGTxsMP6BzrOL7jUO3yz'],
] as const

const patchElements = [
  ['Maintainer patch arrow', 'jtmSI32p2bni3EXsGadcV'],
  ['Vulnerable commit 3 circle', 'dh9zvMD2z6NHa75XBJrYh'],
  ['Vulnerable commit 3 marker', 'T37qFheCSdn5xKFv8wo3H'],
  ['Vulnerable commit 3 marker dot', 'bC_RpdIVS3AEAKMEJje_7'],
  ['Vulnerable commit 2–3 arrow', 'gfOGY-3qsI8O7H0vFegT6'],
  ['Patch commit circle', 'MRU2udBibgfYcQrK83MCk'],
  ['Patch commit marker', 'HZrPVLD2g6Cc1Flih3E-S'],
  ['Patch commit marker dot', 'M3nrzjYM4YNC3Z0VesdNV'],
  ['Arrow into patch commit', '6Bcc3mGAm7WgzeyHokUZF'],
  ['Patch label', '1S8bjYzIz8brdQyPRXXMe'],
  ['Negative Day Window start marker', 'UuIhgAOKN6M1Q4ldJvy4j'],
] as const

const cveElements = [
  ['Post-patch commit 1', 'bkkOGAyZFGRjpGZqgxguF'],
  ['Patch-to-post-patch arrow', 'PqItQJJcIdwzecaspu7np'],
  ['Post-patch commit 2', 'kRb4NEb8AKkLEUTqHnYIi'],
  ['Post-patch commit 1–2 arrow', 'jF1bi-Knc5xN6wpn02Xye'],
  ['Post-patch commit 3', 'ang8zXmFkvgaS-tCvlAW5'],
  ['Post-patch commit 2–3 arrow', 'FhZ8OAx0T7621SJbBQP9y'],
  ['CVE issued label', 'eVVE8IcGUU5_1XEIbAxJe'],
  ['Negative Day Window end marker', 'z730wKObM2Nr5C-AGWyWd'],
] as const

const usersNeedUpdateElements = [
  ['We need to update quote', '9RadgwEB8L72hoUUUXElL'],
  ['Update users label', '9-_EoFnjp7eqo9u5zsifk'],
  ['Update users right body', 'qSxIzSK8QB2iG2eKleWI_'],
  ['Update users left body', 'DSBia9NKuYYt1-nuF__1b'],
  ['Update users right head', 'VhdXqXr3TSW_PNGF7MXAm'],
  ['CVE issued notification arrow', 'cYiYh-HGMEZX-cCHgGogH'],
  ['Update users left head', 'taUiR3He3V4zuXr0QJOb2'],
  ['Update users center body', 'dH73GVbb88aQVtHV7FkL3'],
  ['Update users center head', '-HMb5basXZ8XXqxeuUbri'],
  
] as const

const negativeDayWindowElements = [
  ['Negative Day Window label', 'n6nTl9y_i-q2Gr1XyXtiu'],
  ['Negative Day Window duration arrow', 'NT_Yb3O4YO7_YCI_Ll7Ph'],
] as const

interface SceneElementMetadata {
  name: string
  stage: number
}

const sceneElementMetadata = new Map<string, SceneElementMetadata>(
  [
    initialLineageElements,
    affectedUserElements,
    securityResearcherElements,
    vulnerabilityElements,
    reportToMaintainerElements,
    cnaRequestElements,
    patchElements,
    cveElements,
    usersNeedUpdateElements,
    negativeDayWindowElements,
  ].flatMap((elements, index) =>
    elements.map(([name, id]) => [id, { name, stage: index + 1 }] as const),
  ),
)

export function getSceneElementMetadata(elementId: string) {
  return sceneElementMetadata.get(elementId)
}

export function getRevealStage(elementId: string) {
  return getSceneElementMetadata(elementId)?.stage
}

export function getVisibleSceneElements<T extends SceneElement>(
  elements: T[],
  click: number,
) {
  const currentStage = Math.max(0, Math.floor(click))
  return elements.filter(element => {
    const revealStage = getRevealStage(element.id)
    return !element.isDeleted && revealStage !== undefined && revealStage <= currentStage
  })
}
