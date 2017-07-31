function tap(fn: (...args: any[]) => void): <T>(...args: T[]) => T
function tap<T>(fn: (...args: any[]) => void, ...args: T[]): T
function tap(fn, ...args) {
  if (args.length > 0) {
    return fn(...args), args[args.length - 1]
  }
  return <T>(...args: T[]): T => (fn(...args), args[args.length - 1])
}

const assert: <T>(...args: T[]) => T = tap(console.assert)
const dir: <T>(...args: T[]) => T = tap(console.dir)
const error: <T>(...args: T[]) => T = tap(console.error)
const info: <T>(...args: T[]) => T = tap(console.info)
const log: <T>(...args: T[]) => T = tap(console.log)
const trace: <T>(...args: T[]) => T = tap(console.trace)
const warn: <T>(...args: T[]) => T = tap(console.warn)

export { tap, assert, dir, error, info, log, trace, warn }
