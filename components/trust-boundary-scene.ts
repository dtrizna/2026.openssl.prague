interface SceneElementMetadata {
  name: string
  stage: number
  revealOrder: number
}

const githubElements = [
  ['Repository tile', 'dgS9Ed-avh_fHMmU8fPOn'],
  ['GitHub mark background', '4n293bvr_OTqe8aVldguL'],
  ['GitHub Octocat mark', 'MXNT8IZgod90Gh_HZFck-'],
  ['GitHub label', '0Rn-Mr3xj7zinaJGHuIyT'],
] as const

const trustBoundaryElements = [
  ['Trust Boundary label', 'exUU2a1Ih6t1U_3TxCj3L'],
  ['Trust Boundary line', 'dvQAWUotP866uSaBAQP1f'],
] as const

const softwareElements = [
  ['Your Software label', 'd4H2CfyqKrZl8evxXJeL3'],
  ['Your Software box', 'oUPwaMsJvoUqbRNQHdLf4'],
  ['Commits label', 'XHPKd02u2qxkRAwf31-ro'],
  ['Software commit 1', 'xXnhBmE9Fp2uYrcptClFF'],
  ['Software commit 2', 'pB3ydaLSVEh7TNXrw-Gmq'],
  ['Software commit 1–2 arrow', 'BBK8jeZGWZWVxLRc_U8un'],
  ['Software commit 3', 'eRMvHObGLaMPxLxy25RTt'],
  ['Software commit 2–3 arrow', 'O-JPPQdv8gI45V0gyjH2G'],
  ['Software branch commit 1', 'bUZRNYThtaI5RgGX_XvP4'],
  ['Software branch commit 2', 'XpgL97u4MHZLN81QZEjpT'],
  ['Software branch commit arrow', 'XAAkiGgi7W1_0KRZ7NuQX'],
  ['Software branch merge arrow', 'zQh5Xvnw1W8Shg8OY1j0b'],
] as const

const leftAgentElements = [
  ['Left agent antenna tip', 'WXN0SFrc18FIaG3xaMwdd'],
  ['Left agent antenna', 'lpJNgHpKjb5sXjQDtbQcj'],
  ['Left agent head', 'KOqsK7po4eLwNdnNRcCEz'],
  ['Left agent left eye', 'pF2usjk7-piEvQ80OXwwa'],
  ['Left agent left pupil', 'nHG22HLHHp3KR2TVt7za3'],
  ['Left agent right eye', 'ly5JIrwjuZb4qyfmUzfHt'],
  ['Left agent right pupil', 'OFT-mrWVJQZmLs0gDhPCj'],
  ['Left agent right arm', 'BwsABJUKzNq9S81mxgWhp'],
  ['Left agent body', 'P9oNmXYZfSibF9fHCLs_P'],
  ['Left agent right leg', 'vcLKpTZiBuo_SkHeokKkY'],
  ['Left agent left leg', 'wxqBWbZhTWkiMOiBqq2Ik'],
] as const

const rightAgentElements = [
  ['Right agent antenna tip', '33jcCu-SBxOtIDwXhEhZk'],
  ['Right agent antenna', 'N52czhTnV5kUWypc_kWGr'],
  ['Right agent head', 'bJ_NA5cCDyl7d-5C0y_oF'],
  ['Right agent left ear', 'Du0_J9nuO4a_KPcEXaOBE'],
  ['Right agent right ear', 'umFAAyFpi_A6kieNKy2LU'],
  ['Right agent left eye', 'aqDfGBTyXEOFZPAdNusZp'],
  ['Right agent left pupil', 'HS_XLrOktG78cIW8jKiHI'],
  ['Right agent right eye', 'HPFaWUZkNC6CY4FPzBWPM'],
  ['Right agent right pupil', 'roN71NBJhDTgZ-jziRkyE'],
  ['Right agent mouth', '2tfHU-tSZAc_-5qqE4Nmn'],
  ['Right agent body', '-OniD_usPy__q-V-TBfxi'],
] as const

const roundAgentElements = [
  ['Round agent antenna tip', 'KiRGtlWBY8TADdIec3nbE'],
  ['Round agent antenna', 'hPXV2GjKDFN6jxYzQcKQ8'],
  ['Round agent body', '-NQ57ogqeW8uoFI108wcr'],
  ['Round agent left eye', 'qhwA674rfIdSZZ8D-I4x8'],
  ['Round agent left pupil', 'pbWT5prIDHJoLygALdrmw'],
  ['Round agent right eye', '-smgBSRwN1gF3VjDNSo5M'],
  ['Round agent right pupil', 'JIE6KFzi9z8CuH6A-gLIY'],
  ['Round agent right arm', 'x1_-M8JxJmiiIIRui9rWf'],
  ['Round agent left arm', 'SWjdAB1xXV54Hadmcgo0o'],
] as const

const agentToolElements = [
  ['Hammer head', 'n1Ep43bb4MMlkOCqSXLvF'],
  ['Hammer handle', 'AlfdEi-fbhZ3e4ELmrvQ4'],
  ['Screw shaft', 'hOpFKa6vlvHfmoN4mFsBs'],
  ['Screw head', '4KrozMj6fUg56DrsHgr6x'],
  ['Screw thread 1', '2Br-d6ChkvEbxEy62qxqE'],
  ['Screw thread 2', 'EdVpCAYAtnmIiB21xIxGF'],
  ['Screw thread 3', 'GAUMs52PtEQyI4pw7K6wM'],
  ['Screw thread 4', 'Za8fInOQh0boVsxyjq8_W'],
  ['Screw thread 5', 'C8NGvXXw2wg0JvDB3jMVX'],
  ['Screw thread 6', 'xdmwc0nAIr5Qch0-JANMM'],
  ['Screw thread 7', '753cSQzrWMujjUIsjtHFc'],
] as const

const agentElements = [
  ['Your Agents label', '_pOhSBeBz9lLXxx6J9KZz'],
  ...leftAgentElements,
  ...rightAgentElements,
  ...roundAgentElements,
  ...agentToolElements,
] as const

const infraElements = [
  ['Your Infra label', 'G8STPmINOkf1pXqfJhyFO'],
  ['Docker mark frame', 'dxcqMqmIQsGJE0zEbXHrk'],
  ['Docker whale', 'lg7IzOq-nV8je5QGdYbx4'],
  ['Docker container 1', 'cCOVUxvud3II9uxpfBT6J'],
  ['Docker container 2', 'wnku8dUsB8d0UnsddVD-E'],
  ['Docker container 3', 'ZQA1GMM-VYgV4PxBK6N8r'],
  ['Docker container 4', 'MpwmVwPz6hRHH0LbAcBUw'],
  ['Docker container 5', 'ECQ2KJpvj4IUlH2-48SVa'],
  ['Docker container 6', 'l0cEasRJSRXvdmHFS_xgf'],
  ['Docker container 7', 'WjO1FVoa0FXQIIZtUEw5c'],
  ['Docker container 8', 'P0Bbz8AFN96GIo8bbeU2P'],
  ['Docker container 9', 'rrqc4ARiss-uEzxLtuRNJ'],
  ['Docker label', '-CQnMoNBSWSXqQu75GQAp'],
] as const

const violationElements = [
  ['Boundary crossing arrow', '1kFYU55klS1hD8y2ktku5'],
  ['Boundary crossing marks', 'CacV7hqRCk9JENbuNVEJA'],
] as const

const allTrustBoundaryElements = [
  ...githubElements,
  ...trustBoundaryElements,
  ...softwareElements,
  ...agentElements,
  ...infraElements,
  ...violationElements,
] as const

const sceneElementMetadata = new Map<string, SceneElementMetadata>(
  allTrustBoundaryElements.map(([name, id], revealOrder) => [
    id,
    { name, stage: 0, revealOrder },
  ] as const),
)

export function getTrustBoundarySceneElementMetadata(elementId: string) {
  return sceneElementMetadata.get(elementId)
}
