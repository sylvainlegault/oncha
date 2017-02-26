import assert from 'assert'
import toUpperCase from '../package/string/toUpperCase'
import Future from '../package/future'

describe('A Future', () => {
  it('should map over the data',
    () =>
      Future((reject, resolve) => resolve('hello exalted one'))
        .map(toUpperCase)
        .fork(
        error => assert(false, error),
        data => assert(data === 'HELLO EXALTED ONE')))

  it('should not execute untill fork is called',
    () => {
      /**
       * I'm using assignment here because I
       * have to track as a side effect, the
       * map function call.
       */
      let executed = false
      const f = Future((reject, resolve) => {
        executed = true
        resolve(true)
      })

      assert(!executed)

      f.fork(
        () => assert(false, 'should not get here'),
        (data) => {
          assert(data === true)
          assert(executed === true)
        })
    })

  it('should not execute map untill fork is called',
    () => {
      /**
       * I'm using assignment here because I
       * have to track as a side effect, the
       * map function call.
       */
      let executed = false
      const f = Future((reject, resolve) => {
        executed = true
        resolve(true)
      })

      f.map((a) => {
        executed = false
        return a
      })

      assert(!executed, 'should not execute')

      f.fork(
        () => assert(false, 'should not get here'),
        (data) => {
          assert(data === true)
          assert(executed === true)
        })
    })
})
