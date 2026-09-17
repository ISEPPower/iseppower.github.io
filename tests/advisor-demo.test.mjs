import { test } from 'node:test';
import assert from 'node:assert/strict';
import { evaluateScenario } from '../src/utils/advisor-demo.ts';

test('a lower price suggests a shift only when the task is flexible', () => {
  const result = evaluateScenario(0.3, 0.15, 2, true);
  assert.equal(result.rule, 'R3');
  assert.equal(result.shift, true);
  assert.equal(result.currentCost, 0.6);
  assert.equal(result.laterCost, 0.3);
  assert.equal(result.difference, 0.3);
  assert.equal(evaluateScenario(0.3, 0.15, 2, false).rule, 'R1');
});

test('equal or higher later prices never suggest a shift', () => {
  assert.equal(evaluateScenario(0.2, 0.2, 1, true).rule, 'R2');
  const higher = evaluateScenario(0.2, 0.3, 1, true);
  assert.equal(higher.shift, false);
  assert.ok(higher.difference < 0);
});

test('zero prices are valid and constraints still take priority', () => {
  assert.equal(evaluateScenario(0, 0, 2, true).difference, 0);
  assert.equal(evaluateScenario(0.3, 0, 2, true).rule, 'R3');
  assert.equal(evaluateScenario(0, 0.3, 2, false).rule, 'R1');
});

test('invalid inputs cannot produce a recommendation', () => {
  for (const values of [[NaN, .1, 1], [.2, Infinity, 1], [-1, .2, 1], [.2, -.1, 1], [.2, .1, 0]]) {
    assert.throws(() => evaluateScenario(...values, true), /Invalid/);
  }
});
