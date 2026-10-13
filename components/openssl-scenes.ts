type Entry = readonly [name: string, id: string]
type Stage = readonly Entry[]

const source: Stage = [
  ['Source code', 'MLIvH3ENM9GkbC-0KD2JM'],
  ['Discovery label', 'JptGJdmbJxx-HEfAhcZCu'],
]
const discovery: Stage = [
  ['Upper outer discovery branch', 'VIRUUljFZ_xMg5c29x6QE'],
  ['Upper inner discovery branch', 'XLceRltd_dqde0AWd-ZcJ'],
  ['Lower inner discovery branch', 'VDLQihbBx32zR9xt_rS7_'],
  ['Lower outer discovery branch', '24Atn1lbBMJQapW5RGa23'],
  ['Mythos label', 'nxQSobHTqxGA0gCU-pxyn'],
  ['Qwen and GPT-OSS label', 'eOZvrdVFtUVl2QnVhPS-Z'],
  ['Candidate vulnerabilities', 'qV8txJUZXaiCpynGCErTY'],
  ['Discovery volume boundary', 'WAg4kYPsEBkgaJQDc82U4'],
]
const validation: Stage = [
  ['Validation and triage label', 'dP2xe00BunI-D_BUUKPgi'],
  ['Upper validation branch', 'EpJacu9Y8b3309ZiZJ_dD'],
  ['Lower validation branch', 'j_Cyr0eWib_3h6sQzAVfZ'],
  ['Proven high quality findings', 'kbr7B1nMBuY2kqx9VEYFp'],
]
const expertise: Stage = [
  ['AI native capabilities', '6llddK9OPcewj8L8K7iKX'],
  ['Discovery capabilities arrow', '3VvEy2i_IUJgEAl7GaGkG'],
  ['Security domain expertise', 'EtLW2SlDDzVMtCyuyBNV4'],
  ['Validation expertise arrow', 'J07LaIogytgPzcfbiXIky'],
]
const discoveryAgent: Stage = [
  ['Discovery heading', '7irebewwbe65gMsVuUi9Z'],
  ['Discovery agent frame', 'O2rMam4UC-IbV7MWJra1h'],
  ['Discovery agent label', 'FiqzQsL1ySnXPWxCOhXxO'],
  ['Discovery code frame', 'ZfVUA9l1q7a1V6sVRgIEQ'],
  ['Discovery code label', 'YmEs9BdJawwYwsf2rKmJ8'],
]
const validationAgent: Stage = [
  ['Proof-of-concept heading', '0SK6rM4SUnCL2Xxlf64BO'],
  ['Validation environment frame', 'kcpgck5ucHfYhYrRN9qmz'],
  ['Environment label', 'FOZ9zPxt1d-SvwFRHymWz'],
  ['Validation agent frame', 'yTL_tVxUdMzfUwulEoRZu'],
  ['Validation agent label', 'u0FYERVGVMpwj2KtktRKI'],
  ['Validation code frame', 'WpJcPA-Lq8BCDFjkfEf4B'],
  ['Validation code label', 'wP4qMELkwAw6rj_FESGOG'],
]
const expertGoal: Stage = [
  ['Expert guided goal frame', 'bj-V8JNGJQ6x5JQR5iWxs'],
  ['Expert guided goal label', 'CDRHw53ZIgo6K-qogs2vl'],
]
const remediationBase: Stage = [
  ['Remediation heading', 'cMEVnMSv45dVh-m1eMnma'],
  ['Remediation environment', 'lykW6Z8_SE1Xq5Q6RjnQ1'],
  ['Remediation agent frame', 'r9xVlsZZkXZ7vE7domhth'],
  ['Remediation agent label', 'Qctsx-PsbXluKFsano-dB'],
]
const beforePatch: Stage = [
  ['Original code frame', 'hDkVYYr-8PayzH6rBaMle'],
  ['Original code label', 'fNkUMJBHktrhO7-Pm4_4N'],
  ['Original proof-of-concept frame', '6Fhn9YQmjlr1VMB5TZB_2'],
  ['Original proof-of-concept label', 'sNrj_yBEO-Qb986YYe-11'],
  ['Crash result', 'YJxRt9HqhA4MKKpq_6TfF'],
]
const afterPatch: Stage = [
  ['Patched code frame', '4mouzWJvvFMp96Zn6W187'],
  ['Patched code label', 'Y9P5dgTNn7DLuzvGeGIpv'],
  ['Patch frame', '_1zxYc4wKsPlXkWOqqid7'],
  ['Patch label', 'K4ObakA4A_ocD82nf92KE'],
  ['Regression proof-of-concept frame', 'NASgjozCJQyIItPkh-w_Z'],
  ['Regression proof-of-concept label', 'dfn04Sjds6bu6MrYYo5xc'],
  ['No crash result', '_BGl9G0sSbz79wDg5AoFU'],
]

// Index zero is visible on entry. Every subsequent group is one click.
const scenes = {
  discovery: [[...source, ...discovery]],
  'anthropic-response': [[], [], [], [['Anthropic response', 'gtOht48Vn2OTGkdLzj9MI']]],
  pipeline: [
    [...source, ...discovery.filter(([name]) => ['Upper outer discovery branch', 'Lower outer discovery branch', 'Discovery volume boundary'].includes(name))],
    discovery.filter(([name]) => name === 'Candidate vulnerabilities'),
    discovery.filter(([name]) => name === 'Qwen and GPT-OSS label'),
    discovery.filter(([name]) => ['Upper inner discovery branch', 'Lower inner discovery branch', 'Mythos label'].includes(name)),
    validation,
    expertise.filter(([name]) => ['AI native capabilities', 'Discovery capabilities arrow'].includes(name)),
    expertise.filter(([name]) => ['Security domain expertise', 'Validation expertise arrow'].includes(name)),
  ],
  poc: [
    [...discoveryAgent, ...validationAgent.filter(([name]) => !['Validation environment frame', 'Environment label'].includes(name))],
    expertGoal,
    validationAgent.filter(([name]) => ['Validation environment frame', 'Environment label'].includes(name)),
  ],
  remediation: [remediationBase, beforePatch, afterPatch],
} satisfies Record<string, Stage[]>

export type OpenSSLScene = keyof typeof scenes

export function getOpenSSLSceneMetadata(scene: OpenSSLScene) {
  return new Map(scenes[scene].flatMap((entries, stage) =>
    entries.map(([name, id], revealOrder) => [id, { name, stage, revealOrder }] as const),
  ))
}
