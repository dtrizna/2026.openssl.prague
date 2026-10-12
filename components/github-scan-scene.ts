interface SceneElementMetadata {
  name: string
  stage: number
  revealOrder: number
}

interface GithubScanSceneElement {
  id: string
  type: 'rectangle' | 'text'
  x: number
  y: number
  width: number
  height: number
  angle: number
  strokeColor: string
  backgroundColor: string
  fillStyle: string
  strokeWidth: number
  strokeStyle: string
  roughness: number
  opacity: number
  seed: number
  isDeleted: boolean
  text?: string
  fontSize?: number
  textAlign?: 'left' | 'center' | 'right'
  lineHeight?: number
}

const ink = '#1d1d1f'

function shape(
  id: string,
  type: GithubScanSceneElement['type'],
  fields: Omit<GithubScanSceneElement, 'id' | 'type' | 'angle' | 'fillStyle' | 'roughness' | 'opacity' | 'isDeleted'> & Partial<GithubScanSceneElement>,
): GithubScanSceneElement {
  return {
    angle: 0,
    fillStyle: 'solid',
    roughness: 1,
    opacity: 100,
    isDeleted: false,
    ...fields,
    id,
    type,
  }
}

export const githubScanCodeOnlyElements: GithubScanSceneElement[] = [
  shape('github-scan-mining-step-frame', 'rectangle', {
    x: 1536,
    y: 1058,
    width: 538,
    height: 54,
    strokeColor: ink,
    backgroundColor: '#f5f5f7',
    strokeWidth: 2,
    strokeStyle: 'solid',
    seed: 8801,
  }),
  shape('github-scan-mining-step-label', 'text', {
    x: 1550,
    y: 1073,
    width: 470,
    height: 32,
    strokeColor: ink,
    backgroundColor: 'transparent',
    strokeWidth: 1,
    strokeStyle: 'solid',
    text: '1. Mining commits with ND vulnerabilities (>1k libs)',
    fontSize: 22,
    textAlign: 'left',
    lineHeight: 1.2,
    seed: 8802,
  }),
  shape('github-scan-eval-step-frame', 'rectangle', {
    x: 1536,
    y: 1518,
    width: 518,
    height: 50,
    strokeColor: ink,
    backgroundColor: '#f5f5f7',
    strokeWidth: 2,
    strokeStyle: 'solid',
    seed: 8803,
  }),
  shape('github-scan-eval-step-label', 'text', {
    x: 1550,
    y: 1530,
    width: 290,
    height: 30,
    strokeColor: ink,
    backgroundColor: 'transparent',
    strokeWidth: 1,
    strokeStyle: 'solid',
    text: '2. Building private eval (~40 libs; 300+ commits)',
    fontSize: 22,
    textAlign: 'left',
    lineHeight: 1.2,
    seed: 8804,
  }),
]

const miningStepLabelElements = [
  ['Mining step frame', 'github-scan-mining-step-frame'],
  ['Mining step label', 'github-scan-mining-step-label'],
] as const

const evalStepLabelElements = [
  ['Eval step frame', 'github-scan-eval-step-frame'],
  ['Eval step label', 'github-scan-eval-step-label'],
] as const

const githubIdentityElements = [
  ['GitHub mark background', 'hNVh_5r35YSKlBAkJ7p8d'],
  ['GitHub mark circle', 'p8YXp7Xe-Qwl7eEAtgQYu'],
  ['GitHub Octocat mark', 'klM4t_rUjYFHXPxgeBIeY'],
  ['GitHub label', 'Cr-nsEhLEPu--7AsMFZst'],
] as const

const repositoryShellElements = [
  ['Authlib repository frame', '5IGznz496b6qP7kJ7QPLG'],
  ['Authlib label', '_XZzfkZwLpLmUAfwHZiaF'],
  ['Authlib mainline commit 1', 'daMQBvU9PoHashCJ9WDmW'],
  ['Django repository frame', 'GFoOC3mjNWLJvj4JeB0Dy'],
  ['Django label', 'Uq-QzMV9IzgE5pae95NCw'],
  ['Django commit 1', 'CV8c3WF7reoSpwqJzU68D'],
  ['Repository ellipsis', 'YGA8a67qdUHxVmVLkk-80'],
  ['Requests repository frame', 'WTHYaEUB9qabbjX3JQ-9r'],
  ['Requests label', '20ItDBEsQd4fAyWXORWyI'],
  ['Requests mainline commit 1', 'RwLtdbDbRMHeHGVz9RQka'],
] as const

const repositoryCommitGraphElements = [
  ['Authlib mainline commit 2', 'dqtHl0MIff2cqDBfxiF4X'],
  ['Authlib mainline commit 3', 'PQGwCt46t1PaspoAfnPlj'],
  ['Authlib mainline commit 1–2 arrow', 'HcuEd_SVM36AN97lnuWM6'],
  ['Authlib mainline commit 2–3 arrow', 'oErsxVuCBGDyET6Kp5EwY'],
  ['Authlib branch commit 1', 'vPQvf3LzPqHPRhS1pO4yG'],
  ['Authlib branch commit 2', 'cGgLoYh-gWta2R9thBX7-'],
  ['Authlib branch commit arrow', 'YsEGF29nZfgof7DyjE7Sf'],
  ['Authlib branch merge arrow', 'u14nVosJJhtxphfRkMGN6'],
  ['Django commit 2', 'kheIIXQt8Rymaeu-epxsw'],
  ['Django commit 3', 'K6Ydsf42MyNNwV8pT9dYF'],
  ['Django commit 1–2 arrow', 'RGtt_d9ZCxro-dl3vHhG_'],
  ['Django commit 2–3 arrow', 'V0P3PmAVd9oF-bQm_y7m-'],
  ['Requests mainline commit 2', 'iwtTvtmZ2HPe97YVUOGzA'],
  ['Requests mainline commit 3', '9nmEvU2kj_BCbofRvgcPV'],
  ['Requests mainline commit 1–2 arrow', 'I03XMSvYu23b7ozV8a99X'],
  ['Requests mainline commit 2–3 arrow', 'kgw5a-v1qb_TP6aJo2WLm'],
  ['Requests branch commit 1', 'aeIwsCu2JBxJPsma1LEm5'],
  ['Requests branch commit 2', 'rCMW2bz234q-ExyNjqJtS'],
  ['Requests branch commit arrow', '3-z28u-_HsX5kuHzQbHMr'],
  ['Requests branch merge arrow', 'Qeh-hTXbsq4xWzOqp2z3n'],
] as const

const scanAgentElements = [
  ['Repositories to agents arrow', '51ZJV70pgt9J9XJsOGgrL'],
  ['Happy agent antenna tip', 'lQy9P3mFqF8QGg1LjzY4x'],
  ['Happy agent antenna', 'KtYJktTwwIcn2ZqK45eYa'],
  ['Happy agent head', 'C1-wA3Z1eQf4GL3x_PCA3'],
  ['Happy agent left eye', 'kKTGUcrWT8e1BwfhUZ-QK'],
  ['Happy agent left pupil', 'ezowXm6a8STIEW52lQ0t6'],
  ['Happy agent right eye', 'v7kqr6t9_lW-kEzpbdWGN'],
  ['Happy agent right pupil', 'BRT5fBuITHUZSqMXkPhmA'],
  ['Happy agent smile', 'Wnc3W4LtWtZWS8cTO6Vs9'],
  ['Happy agent body', '2VP2SRsaagD9BF6eFLgDG'],
  ['Happy agent right arm', 'LFBQNyTDY2hpvEGE-uoIS'],
  ['Happy agent left arm', 'lnqKRRS2NTov2AVlcDbuA'],
  ['Stern agent body', 'EDT9ZIJH9ktXlWSQW3u-q'],
  ['Stern agent head', 'wNdaPzruDNqFZjjqUwXCB'],
  ['Stern agent antenna', 'uE87An4afHxv-NhF_Qr3l'],
  ['Stern agent antenna tip', 'oEmqrfDt4xSeC4ZEyi7j2'],
  ['Stern agent left brow', 'rEqItWlSpVCmLXtcrK_Gl'],
  ['Stern agent right brow', 'CkVmNi-F3kPTAX2g_uy39'],
  ['Stern agent left eye', 'x4RAJAq95vHPrXRbNXTVR'],
  ['Stern agent right eye', 'Trv7NzmYNJATKXk6sVQ_p'],
  ['Stern agent mouth', 'dDthPNaTAke0zty9tKPZY'],
] as const

const flaggedCommitElements = [
  ['Authlib flagged mainline commit', 'Ps5HQ4JSl2N1-HHb7GnIu'],
  ['Authlib flagged branch commit', 'eZqT8SFCt5DSXMHqJDQWO'],
  ['Django flagged commit', 'GnTouIDVRj1g9ni_Il8y6'],
  ['Requests flagged commit', 'BwwVGwcksnqQshJU7Q22p'],
] as const

const cnaBlockElements = [
  ['CNA box', '85XBshtFdKhlAvrqfKgZb'],
  ['CNA label', '_1FIsgp-5P3rIfmGU63Wu'],
] as const

const cnaWatchElements = [
  ['CNA watch eyes', 'tAGLERaRyFBs5cAeywMso'],
  ['CNA return arrow', 'qIcJMBs0glzjhFv7dCk2F'],
] as const

const evalTimeframeElements = [
  ['Eval timeframe commit 1', '0V1xKWGwQNL-0tm4GGH4h'],
  ['Eval timeframe ellipsis', 'B5yeX0eJrG5FGTU6n-rUQ'],
  ['Eval timeframe commit 2', 'VNDnrwijbB10pMxqutC2x'],
  ['Eval timeframe commit 3', 'e5HbYuy-0aWpnpXd7gaTd'],
  ['Eval timeframe flagged commit', 'rWDXvL8DR4XCpCspK1qpV'],
  ['Eval timeframe commit 4', 'sbP7HKExD-3zmYDtQ8aeI'],
  ['Eval timeframe commit 5', 'VkNHa367mf9K-IqYn435x'],
  ['Eval timeframe commit 1–ellipsis arrow', 's8fkgarHFyGUhMC-ttcX_'],
  ['Eval timeframe ellipsis–commit 2 arrow', '3PqtWDwNu-yvqLwWlqE4U'],
  ['Eval timeframe commit 2–3 arrow', 'zL4Ir6TcW5pEqeSvPZNPA'],
  ['Eval timeframe commit 3–4 arrow', 'ZO9i9sEwflDdiVPZC3rl1'],
  ['Eval timeframe commit 4–5 arrow', 'I9h272KRqZyPApOJPatKA'],
  ['Eval timeframe left rail', 'k6IEMZfV8Env3C-155A9y'],
  ['Eval timeframe right rail', 'auXX8z8AAASWwKQfVm5EQ'],
  ['Eval timeframe duration arrow', '8n1isTMZImEZCqyY72iEQ'],
  ['Eval timeframe label', 'o_JGNdFXyCxhCtSmZu-yM'],
  ['Eval timeframe -12h label', 'wMrTxBBlxY15tvMWDG83q'],
  ['Eval timeframe +12h label', 'OaFnDJ1PrXj0ocdGf_cFf'],
] as const

const sceneElementMetadata = new Map<string, SceneElementMetadata>(
  [
    [
      ...githubIdentityElements,
      ...repositoryShellElements,
    ],
    miningStepLabelElements,
    repositoryCommitGraphElements,
    scanAgentElements,
    flaggedCommitElements,
    cnaBlockElements,
    cnaWatchElements,
    evalStepLabelElements,
    evalTimeframeElements,
  ].flatMap((elements, index) =>
    elements.map(([name, id], revealOrder) => [
      id,
      {
        name,
        stage: index,
        revealOrder: index === 8 ? 0 : revealOrder,
      },
    ] as const),
  ),
)

export function getGithubScanSceneElementMetadata(elementId: string) {
  return sceneElementMetadata.get(elementId)
}
