interface SceneElementMetadata {
  name: string
  stage: number
  revealOrder: number
}

const harnessFrameElements = [
  ['Harness frame', '-F5AMTOhkLoiOQUyuEGmi'],
  ['Multi-Agent Harness title', 'U8HSlRG5qQKmqxp10Tysy'],
] as const

const upperLeftAgentElements = [
  ['Upper-left agent antenna', 'sWKOcGLoCxh8yBiYQalgD'],
  ['Upper-left agent antenna tip', 'N7mfDvOxBu-r1p7yjGz1G'],
  ['Upper-left agent head', 'dahi4Dy5fFrYP26JfR-qh'],
  ['Upper-left agent body', 'H6G0FBkYpJIPvkJb_VY0G'],
  ['Upper-left agent face', 'xcV7HWN00RQPdFo1MH8Uz'],
  ['Upper-left agent right eye', 'KiE33HTYQOHv1GbRs-XIT'],
  ['Upper-left agent right pupil', 'nNnC1g1a8J6pxT6X3aLiG'],
  ['Upper-left agent left eye', 'yyYYV9z8L12I0-BfrmQ3X'],
  ['Upper-left agent left pupil', 'pnb9tjeoW_3p55QXvDx4O'],
] as const

const upperRightAgentElements = [
  ['Upper-right agent antenna', 'mkeMBVrlnLhybZdavZW3_'],
  ['Upper-right agent antenna tip', 'pIKka3MIEVn4SnpIX9lv2'],
  ['Upper-right agent body', 'yHKndjOTHjNpNGrWDqdAd'],
  ['Upper-right agent right arm', '1JYKsh-pK31SiHJ-9JgUW'],
  ['Upper-right agent left arm', 'eF6kf7R956Q0h0g32drx-'],
  ['Upper-right agent head', 'mvgY1QmllNqA73hewGwA-'],
  ['Upper-right agent face', 'V0MvHGth2yLrpn84-o6--'],
  ['Upper-right agent right eye', '1IAqpWZ5pszYgODs1Pl1F'],
  ['Upper-right agent right pupil', 'l8_VQ6_C0PXICcri7hB1w'],
  ['Upper-right agent left eye', '4oilyjAhNafzIZKSnMdhe'],
  ['Upper-right agent left pupil', 'HtTsuHcbez5ufmVHTyXFe'],
] as const

const lowerLeftAgentElements = [
  ['Lower-left agent head', 'nd_RTSNJmMa8MFa8zA4kD'],
  ['Lower-left agent antenna', 'rlBkJ5uWcDmr1SyHdOW73'],
  ['Lower-left agent antenna tip', 'VMmSlpqvZPu2b3WyMBITK'],
  ['Lower-left agent right ear', 'CrkSLQVidYyoCTO6asPeY'],
  ['Lower-left agent left ear', 'y6S1aA4gUnahzysPPG7YT'],
  ['Lower-left agent right face detail', 'h8GvJzG5iJsHw9vFj5sZr'],
  ['Lower-left agent left face detail', 'NK6VpDOJRlX02TE7gtpcs'],
  ['Lower-left agent mouth', 'rFvaw8wqDnAtE6kcCgoXa'],
  ['Lower-left agent right eye', 'BpqRW0gzj9N0FXQIRqPk9'],
  ['Lower-left agent left eye', 'I_EabyiQfS7UD6-mkARq1'],
  ['Lower-left agent body', 'n_oi4sxhzD7V8xsDmpc-w'],
] as const

const lowerRightAgentElements = [
  ['Lower-right agent body', 'DFQwQUC9gBuANWUQfVp-3'],
  ['Lower-right agent head', 'uD24Df-26zk6IhVhWvlPt'],
  ['Lower-right agent face', 'XtWMPpj3eeoBJX_NYIsQS'],
  ['Lower-right agent right eye', 'aApnUKoqG5UE0WmO6bijX'],
  ['Lower-right agent left eye', 'FGS4RrLUXRacjGI9GQoWm'],
  ['Lower-right agent antenna', 'iUQSddlegjN-KkpCmg_2a'],
  ['Lower-right agent antenna tip', 'pOGDuKp0BYX6KRIMG1iAV'],
  ['Lower-right agent right arm', 'nirJDLlKvK6xtBmKLA671'],
  ['Lower-right agent left arm', '2WJtZqV5tZ4jNFyB4_jMn'],
] as const

const deterministicGateElements = [
  ['Deterministic gates label', 'C7bffReBA7ECgBiqOF5zk'],
  ['Deterministic gates diagonal rail', 'tmn6cCaHPPj8GAVga3Yl1'],
  ['Deterministic gates rung 1', 'tuyxjUERCAP8aAhOcm87V'],
  ['Deterministic gates rung 2', 'z9Ae0BkzFp7sakpm4FFRH'],
  ['Deterministic gates rung 3', 'pUBao3fSDsDce3Oft0LhT'],
  ['Deterministic gates rung 4', '2CGeEW-yEwihQhdspdu1m'],
  ['Deterministic gates rung 5', 'qKGLKgR-XMWA9fYYIhoUm'],
  ['Deterministic gates rung 6', '4h_IBSt0YGyba8Zid4SWY'],
  ['Deterministic gates rung 7', 's7HoJAbiqdoMWv3e8qtxX'],
  ['Deterministic gates top rail', 'LruEB7hNoSKRVq7PTtLZC'],
  ['Deterministic gates lower rail', 'i9zBtJ77KCL_C0IkOM3Jl'],
  ['Deterministic gates lower crossbar', 'gQMFvKZRKiQxXZtQJ3U7n'],
] as const

const dockerElements = [
  ['Docker mark frame', 'a_A7Cdq5B_0uB6IJkdkSF'],
  ['Docker whale', 'sMmGV1W3emZIHbtwGmMta'],
  ['Docker container 1', 'sY7SVD9YZ7ZM827NosayI'],
  ['Docker container 2', 'qzofE-5S4n5XNF3WmIOPB'],
  ['Docker container 3', 'lFtnsK8VS_HivRPvBCg6N'],
  ['Docker container 4', 'YWdGiE0Zh4Os0nbb6BXVL'],
  ['Docker container 5', '9DqkXd7tOZFZrpTg0oZFq'],
  ['Docker container 6', 'gA4IyWzYAYSHUcaBlhQNm'],
  ['Docker container 7', 'aHz8o9cCoL02nN8Cq_3LP'],
  ['Docker container 8', '5e-j_aY3feIALnLg1X1wj'],
  ['Docker container 9', 'xnvzF30PqpMnaYSjRZUh3'],
  ['Docker label', '0jvV0hmVfkY0b6oPNt1D3'],
] as const

const harnessConnectionElements = [
  ['Upper-left to upper-right handoff', '0iGehG1H6halO7de0HnrV'],
  ['Upper-left to lower-left handoff', 'hA36iHDdxQ3F3MxZ3h4iz'],
  ['Lower-left to lower-right handoff', 'I_HqUJEfgTvpQlGoLATU_'],
] as const

const allHarnessElements = [
  ...harnessFrameElements,
  ...upperLeftAgentElements,
  ...upperRightAgentElements,
  ...lowerLeftAgentElements,
  ...lowerRightAgentElements,
  ...deterministicGateElements,
  ...dockerElements,
  ...harnessConnectionElements,
] as const

const sceneElementMetadata = new Map<string, SceneElementMetadata>(
  allHarnessElements.map(([name, id], revealOrder) => [
    id,
    { name, stage: 0, revealOrder },
  ] as const),
)

export function getAgentHarnessSceneElementMetadata(elementId: string) {
  return sceneElementMetadata.get(elementId)
}
