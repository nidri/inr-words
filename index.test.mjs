import test from 'node:test';
import assert from 'node:assert/strict';

import {inrInWords as inr} from './index.js';

test('returns invalid number', () => {
    assert.match (inr(`.`), /Invalid number/, 'Number is valid');
});

test('returns eighteen', () => {
    assert.strictEqual(inr(18), 'eighteen rupee(s)');
});

test('returns three hundred', () => {
    assert.strictEqual(inr(300), 'three hundred rupee(s)');
});

test('returns five thousand', () => {
    assert.strictEqual(inr(5000), 'five thousand rupee(s)');
});

test('returns one crore five', () => {
    assert.strictEqual(inr(10000005), 'one crore five rupee(s)');
});

test('twenty four rupees and four paise', () => {
    assert.strictEqual(inr(24.04), 'twenty four rupee(s) and four paise');
});

test('zero rupees and six paise', () => {
    assert.strictEqual(inr(.06), 'zero rupee(s) and six paise');
});