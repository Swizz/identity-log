console.assert = jest.fn()
console.dir = jest.fn()
console.error = jest.fn()
console.info = jest.fn()
console.log = jest.fn()
console.trace = jest.fn()
console.warn = jest.fn()

import { tap, assert, dir, error, info, log, trace, warn } from '../src'

test('tap to do the action and return the value', () => {
  const fn = jest.fn()

  expect(tap(fn, 42)).toBe(42)
  expect(fn.mock.calls.length).toBe(1)

  expect(tap(fn, 'toto', 42)).toBe(42)
  expect(fn.mock.calls.length).toBe(2)

  expect(tap(fn)(42)).toBe(42)
  expect(fn.mock.calls.length).toBe(3)

  expect(tap(fn)('toto', 42)).toBe(42)
  expect(fn.mock.calls.length).toBe(4)
})

test('assert to be tapped and return the value', () => {
  expect(assert(42)).toBe(42)
  expect(console.assert.mock.calls.length).toBe(1)

  expect(assert('toto', 42)).toBe(42)
  expect(console.assert.mock.calls.length).toBe(2)

  expect(assert('value %s', 42)).toBe(42)
  expect(console.assert.mock.calls.length).toBe(3)
})

test('dir to be tapped and return the value', () => {
  expect(dir(42)).toBe(42)
  expect(console.dir.mock.calls.length).toBe(1)

  expect(dir('toto', 42)).toBe(42)
  expect(console.dir.mock.calls.length).toBe(2)

  expect(dir('value %s', 42)).toBe(42)
  expect(console.dir.mock.calls.length).toBe(3)
})

test('error to be tapped and return the value', () => {
  expect(error(42)).toBe(42)
  expect(console.error.mock.calls.length).toBe(1)

  expect(error('toto', 42)).toBe(42)
  expect(console.error.mock.calls.length).toBe(2)

  expect(error('value %s', 42)).toBe(42)
  expect(console.error.mock.calls.length).toBe(3)
})

test('info to be tapped and return the value', () => {
  expect(info(42)).toBe(42)
  expect(console.info.mock.calls.length).toBe(1)

  expect(info('toto', 42)).toBe(42)
  expect(console.info.mock.calls.length).toBe(2)

  expect(info('value %s', 42)).toBe(42)
  expect(console.info.mock.calls.length).toBe(3)
})

test('log to be tapped and return the value', () => {
  expect(log(42)).toBe(42)
  expect(console.log.mock.calls.length).toBe(1)

  expect(log('toto', 42)).toBe(42)
  expect(console.log.mock.calls.length).toBe(2)

  expect(log('value %s', 42)).toBe(42)
  expect(console.log.mock.calls.length).toBe(3)
})

test('trace to be tapped and return the value', () => {
  expect(trace(42)).toBe(42)
  expect(console.trace.mock.calls.length).toBe(1)

  expect(trace('toto', 42)).toBe(42)
  expect(console.trace.mock.calls.length).toBe(2)

  expect(trace('value %s', 42)).toBe(42)
  expect(console.trace.mock.calls.length).toBe(3)
})

test('warn to be tapped and return the value', () => {
  expect(warn(42)).toBe(42)
  expect(console.warn.mock.calls.length).toBe(1)

  expect(warn('toto', 42)).toBe(42)
  expect(console.warn.mock.calls.length).toBe(2)

  expect(warn('value %s', 42)).toBe(42)
  expect(console.warn.mock.calls.length).toBe(3)
})
