interface SceneElementMetadata {
  name: string
  stage: number
  revealOrder: number
}

const harnessFrameElements = [
  ['Harness frame', 'Rj9pBHnOz1vma-5ytF3S0'],
] as const

const entryAgentElements = [
  ['Entry agent antenna tip', 'DRaAFhYuNUAXVg_mpI_dE'],
  ['Entry agent antenna', 'Vz0QDYDYCqUnPVdYiSbhK'],
  ['Entry agent body', 'HaeiiVdJb0c56mcUYKTEi'],
  ['Entry agent right eye', 'IgDChsPjEohLM2k3XIXGe'],
  ['Entry agent left eye', '3i3IVhhmMqRVFBbniws6T'],
  ['Entry agent right pupil', 't2rHy2HXphRuSx6-wPnKi'],
  ['Entry agent left pupil', 'qCuAxFdD9RgtfvA-XeXfo'],
  ['Entry agent smile', 'Kqgv2wqXA-GX7bYT28ITy'],
  ['Entry agent arm', 'gfeMUUEDG6KY7G03WCbqZ'],
] as const

const cheeringAgentElements = [
  ['Cheering agent antenna tip', 'DxRkPfDFKWbARWtv1KTdC'],
  ['Cheering agent antenna', 'MBZwvzWLZh9--gm70nan-'],
  ['Cheering agent head', 'jFXjfkFYhiDfzQK9LVnsV'],
  ['Cheering agent right eye', 'WoT4ARQtCzmIAikZw0db_'],
  ['Cheering agent left eye', 'jjsus5Ozn2c8Li5nh4k4N'],
  ['Cheering agent right pupil', 'HNm9j4W5I-GKEuwBI7Sa7'],
  ['Cheering agent left pupil', 'OlxIruocyWKjCeqCBf3_y'],
  ['Cheering agent smile', '8niDn6b-FoEIPGuwhf3n2'],
  ['Cheering agent right arm', 'Ih67aznwRvoVb_EyOGMv2'],
  ['Cheering agent raised arm', 'v3t3Z3PGPjC5stRri94I0'],
  ['Cheering agent left arm', 'zUo3SfEGmz1XPkU_zRe94'],
] as const

const worriedAgentElements = [
  ['Worried agent antenna tip', '3LDmLqyyGbHsgbTVWoqd6'],
  ['Worried agent antenna', 'AW4ixHX9Wm43erOB8pYFI'],
  ['Worried agent head', 'HDwgOsR0r8Cr2uyPJZbkV'],
  ['Worried agent left brow', 'wZdmeApSZqxERszuu2uLf'],
  ['Worried agent right brow', '7DKY0JLKN6j7JHAorCCTu'],
  ['Worried agent right eye', 'ekc-W8N8_TZ83JlzM4snw'],
  ['Worried agent left eye', 'Qp0yjUsU_wgUlohd0zskL'],
  ['Worried agent right pupil', 'tGFM0usp2sCPd61h54quM'],
  ['Worried agent left pupil', 'iwD6oxwoy8iBssRW1tXId'],
  ['Worried agent mouth', 'PSdjLobqub_mJje-W9xG6'],
  ['Worried agent body', '5FXBESJDKNV7USMiOlAAB'],
] as const

const angryAgentElements = [
  ['Angry agent antenna tip', '31Mqv1lWyOGHFuuvYuZnA'],
  ['Angry agent head', 'klXulr5NC8ITJiIiF6-xL'],
  ['Angry agent antenna', 'nzXpJyNSu6kg86xGmCr94'],
  ['Angry agent left brow', 'aTYnIY3RgxYR1inX7dDWw'],
  ['Angry agent right brow', 'iEXx8lbCUPSHydbOvmaSx'],
  ['Angry agent right eye', 'QjncDx-r2082_XGeNQfhL'],
  ['Angry agent left eye', 'Z40PjJvWI1z3JpRNckgHz'],
  ['Angry agent mouth', 'fnS27Ee3vwdvxxqbGsLPk'],
  ['Angry agent body', 'w4UQB7tBuJqY3y_LLvvn0'],
] as const

const deterministicGateElements = [
  ['Deterministic gates label', '6BDl_sgPFal_Fti4JM1mV'],
  ['Deterministic gates shaft', 'mczr3rGQyko5JGzK4s9zG'],
  ['Deterministic gates head', 'JjbjVPwzPyaqLBmkPQuLL'],
  ['Deterministic gates thread 1', 'uxyfoXIXPNOWIubyxmcW0'],
  ['Deterministic gates thread 2', 'jbXv_BIeYymOrSHqewxg8'],
  ['Deterministic gates thread 3', 'taUwhj6195lV1FAwA7HQ3'],
  ['Deterministic gates thread 4', 'SQGJ8wyS3h6HL4Lzu6qQm'],
  ['Deterministic gates thread 5', 'QaDHvJsdfOOrvDfxDazFI'],
  ['Deterministic gates thread 6', 'OwBZ1ZVkeoSVjM1kbKfc6'],
  ['Deterministic gates thread 7', 'xQEhdajbmv7KtMP7pQbQl'],
] as const

const hammerElements = [
  ['Hammer head', 'zd9Y-vL-1aXG3VNbPI_r-'],
  ['Hammer handle', '9BEgIyoQepG4HfZXKdeZ_'],
] as const

const dockerElements = [
  ['Docker mark frame', 'k-ep-bw4KbC9P5FapdK-S'],
  ['Docker whale', 'zvFLkQvVkyi-81bZO8OsN'],
  ['Docker container 1', 'B05k50ZLUFDAAm71OeHfb'],
  ['Docker container 2', '9E5EnB_ucKLAvWBPU1EaP'],
  ['Docker container 3', 'U2S0Oc7xkE955g9etuCae'],
  ['Docker container 4', '3s9YkvEZy2FMdU2LZ3nfg'],
  ['Docker container 5', 'eJgD0f4lw8hsbCMf3VguA'],
  ['Docker container 6', '41hAPteavj7NMCZatN2cQ'],
  ['Docker container 7', 'ZbRnWuY_OhU_4Dnk-_m9a'],
  ['Docker container 8', 'W16UZLLX3C2ztLlCy--6_'],
  ['Docker container 9', '55gjBPuFb0xYoIg-2dC6M'],
  ['Docker label', 'eohqGMW1lM8lIzF34lGSY'],
] as const

const harnessConnectionElements = [
  ['Entry to deterministic gates', 'hVsogo1vV_izn28gt8P0L'],
  ['Entry to worried agent', 'mFQ20EyjD5BDcm3ws7XRg'],
  ['Worried to angry agent', 'Sb5Z8ut3c6gc7d8yvfXgw'],
] as const

const restrictedAgentElements = [
  ['Restricted agent antenna tip', 'Air4XMgcFcrri3caQc2B-'],
  ['Restricted agent antenna', 'z1ujGZy8Lzzdh55weNSra'],
  ['Restricted agent body', 'CcWt0E0z8HhgtKV07OYxr'],
  ['Restricted agent right eye', '-_jrWUyjHwmFoSExEUuuZ'],
  ['Restricted agent left eye', '9Fpb_jrcy_6oiR-gocnZu'],
  ['Restricted agent right pupil', 'dppQd448ZYZyilkvqSGLi'],
  ['Restricted agent left pupil', 'bILXBGq-tJE3lCT0bOcdy'],
  ['Restricted agent smile', 'pXwXr6d-K_jpC6OOy3hbK'],
  ['Restricted agent arm', 'P6AD9kIj3qeyJDHRj1d81'],
  ['Restricted agent limits', '7YXPdiMx8RaXfZrLH9e_E'],
] as const

const allArchitectureDefenseElements = [
  ...harnessFrameElements,
  ...entryAgentElements,
  ...cheeringAgentElements,
  ...worriedAgentElements,
  ...angryAgentElements,
  ...deterministicGateElements,
  ...hammerElements,
  ...dockerElements,
  ...harnessConnectionElements,
  ...restrictedAgentElements,
] as const

const restrictedAgentIds = new Set(restrictedAgentElements.map(([, id]) => id))

const sceneElementMetadata = new Map<string, SceneElementMetadata>(
  allArchitectureDefenseElements.map(([name, id], revealOrder) => [
    id,
    { name, stage: 0, revealOrder },
  ] as const),
)

export function getArchitectureDefenseSceneElementMetadata(elementId: string) {
  return sceneElementMetadata.get(elementId)
}

export function getArchitectureHarnessSceneElementMetadata(elementId: string) {
  if (restrictedAgentIds.has(elementId))
    return undefined
  return sceneElementMetadata.get(elementId)
}

export function getArchitectureRestrictedSceneElementMetadata(elementId: string) {
  if (!restrictedAgentIds.has(elementId))
    return undefined
  return sceneElementMetadata.get(elementId)
}
