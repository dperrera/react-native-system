export function scaleOrValue(
  value: number | string,
  scale: Record<string, number>
): number {
  if (typeof value === 'string') return scale[value]
  return value
}
