const bench = require('nanobench')
const { tap } = require('../dist/identity-log.common')

bench('tap implementation 1 arg 1 time', b => {
  const fn = arg1 => {}

  b.start()
  tap(fn, 1)
  b.end()
})

bench('tap implementation 1 arg 100.000 times', b => {
  const fn = arg1 => {}

  b.start()
  for (let i = 0; i < 100000; i++) {
    tap(fn, 1)
  }
  b.end()
})

bench('tap implementation 3 args 100.000 times', b => {
  const fn = (arg1, arg2, arg3) => {}

  b.start()
  for (let i = 0; i < 100000; i++) {
    tap(fn, 1, 2, 3)
  }
  b.end()
})

bench('tap implementation 10 args 100.000 times', b => {
  const fn = (arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) => {}

  b.start()
  for (let i = 0; i < 100000; i++) {
    tap(fn, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
  }
  b.end()
})

bench('curry tap implementation 1 arg 1 time', b => {
  const fn = arg1 => {}

  b.start()
  tap(fn)(1)
  b.end()
})

bench('curry tap implementation 1 arg 100.000 times', b => {
  const fn = () => {}

  b.start()
  for (let i = 0; i < 100000; i++) {
    tap(fn)(1)
  }
  b.end()
})

bench('curry tap implementation 3 args 100.000 times', b => {
  const fn = (arg1, arg2, arg3) => {}

  b.start()
  for (let i = 0; i < 100000; i++) {
    tap(fn)(1, 2, 3)
  }
  b.end()
})

bench('curry tap implementation 10 args 100.000 times', b => {
  const fn = (arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) => {}

  b.start()
  for (let i = 0; i < 100000; i++) {
    tap(fn)(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
  }
  b.end()
})
