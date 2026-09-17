/** Educational arithmetic only: equal energy use in two fictional price windows. */
export function evaluateScenario(now: number, later: number, energy: number, flexible: boolean) {
  if (![now, later, energy].every(Number.isFinite) || now < 0 || later < 0 || energy <= 0) {
    throw new Error('Invalid demonstration inputs');
  }
  const currentCost = now * energy;
  const laterCost = later * energy;
  const rule = !flexible ? 'R1' : later < now ? 'R3' : 'R2';
  return { rule, currentCost, laterCost, difference: currentCost - laterCost, shift: rule === 'R3' };
}
