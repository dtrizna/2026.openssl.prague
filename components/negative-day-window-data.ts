export interface FeaturedWindow {
  package: string
  cve: string
  days: number
  longest?: boolean
}

export const featuredWindows: FeaturedWindow[] = [
  { package: 'Django', cve: 'CVE-2026-1285', days: 0.07 },
  { package: 'requests', cve: 'CVE-2026-25645', days: 0.08 },
  { package: 'React', cve: 'CVE-2026-23864', days: 0.15 },
  { package: 'Flask', cve: 'CVE-2026-27205', days: 0.72 },
  { package: 'socket.io', cve: 'CVE-2026-33151', days: 1.31 },
  { package: 'cryptography', cve: 'CVE-2026-34073', days: 1.88 },
  { package: 'React Router', cve: 'CVE-2026-22029', days: 2.2 },
  { package: 'Authlib', cve: 'CVE-2026-28802', days: 30 },
  { package: 'lodash', cve: 'CVE-2025-13465', days: 47.03 },
  { package: 'axios', cve: 'CVE-2026-39865', days: 160.8, longest: true },
]

export const windowBuckets = [
  { id: 'same-day', label: 'same day', count: 17 },
  { id: 'week', label: '1–7 days', count: 12 },
  { id: 'month', label: '1–4 weeks', count: 6 },
  { id: 'longer', label: 'longer', count: 4 },
] as const

const durationBlueLight = { r: 97, g: 120, b: 179 }
const durationBlueDark = { r: 22, g: 48, b: 110 }

export function windowDurationColor(t: number): string {
  const stop = Math.min(1, Math.max(0, t))
  const r = Math.round(durationBlueLight.r + (durationBlueDark.r - durationBlueLight.r) * stop)
  const g = Math.round(durationBlueLight.g + (durationBlueDark.g - durationBlueLight.g) * stop)
  const b = Math.round(durationBlueLight.b + (durationBlueDark.b - durationBlueLight.b) * stop)
  return `rgb(${r} ${g} ${b})`
}

export const corpusWindowCount = 39
export const medianWindowDays = 1.31
export const meanWindowDays = 12.08

const logFloor = Math.log10(1 / 24)
const logCeiling = Math.log10(365.25 * 8)

export function formatWindowLength(days: number): string {
  if (days < 1)
    return `${Math.round(days * 24)}h`
  if (days < 60)
    return `${Math.round(days)}d`
  if (days < 365)
    return `${Math.round(days / 30.44)} mo`
  return `${(days / 365.25).toFixed(1)} y`
}

function counted(n: number, singular: string, plural: string): string {
  return `${n} ${n === 1 ? singular : plural}`
}

export function formatWindowLengthWords(days: number): string {
  if (days < 1)
    return counted(Math.round(days * 24), 'hour', 'hours')
  if (days < 60)
    return counted(Math.round(days), 'day', 'days')
  if (days < 365)
    return counted(Math.round(days / 30.44), 'month', 'months')
  return counted(Number((days / 365.25).toFixed(1)), 'year', 'years')
}

export function cveNvdUrl(cve: string): string {
  return `https://nvd.nist.gov/vuln/detail/${cve}`
}

export function windowBarPercent(days: number): number {
  const bounded = Math.max(1 / 24, days)
  return ((Math.log10(bounded) - logFloor) / (logCeiling - logFloor)) * 100
}
