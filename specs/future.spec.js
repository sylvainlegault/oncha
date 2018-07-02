import assert from 'assert'
import Future from '../package/future'

const toUpperCase = s => s.toUpperCase()

describe('A Future', () => {
  it('should map over the data', () =>
    Future((reject, resolve) => resolve('hello exalted one'))
      .map(toUpperCase)
      .fork(error => assert(false, error), data => assert(data === 'HELLO EXALTED ONE')))

  it("should return 'this worked' after fork", () =>
    assert(
      Future((reject, resolve) => (resolve(true), 'this worked')).fork(
        error => assert(false, error),
        data => data
      ),
      'this worked'
    ))

  it('should not execute untill fork is called', () => {
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
      data => {
        assert(data === true)
        assert(executed === true)
      })
  })

  it('should not execute map untill fork is called', () => {
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

    f.map(a => {
      executed = false
      return a
    })

    assert(!executed, 'should not execute')

    f.fork(
      () => assert(false, 'should not get here'),
      data => {
        assert(data === true)
        assert(executed === true)
      })
  })

  it('should handle promise fulfill', () => {
    const data = { fulfill: true }
    const promise = new Promise((fulfill, reject) => fulfill(data))

    Future.fromPromise(promise).fork(
      () => assert(false, 'promise should have fulfilled'),
      val => assert(val === data))
  })

  it('should handle promise reject', () => {
    const data = { fulfill: false }
    const promise = new Promise((fulfill, reject) => reject(data))
    const f = Future.fromPromise(promise)

    Future.fromPromise(promise).fork(
      val => assert(val === data),
      () => assert(false, 'promise should have rejected'))
  })

  it('should chain futures from promises', () => {
    Future.fromPromise(new Promise((fulfill, reject) => fulfill('1')))
      .chain(data => Future.fromPromise(new Promise((fulfill, reject) => fulfill(data + '2'))))
      .fork(() => assert(false, 'promise should have fulfilled'), val => assert(val === '12'))
  })

  describe('all', () => {
    it('should wait for all fututes to execute', done => {
      Future.all(
        Future.of('apple'),
        Future((left, right) => setTimeout(() => right('orange'), 1000)),
        Future.of('lemon')
      ).fork(
        () => done('something very bad has happened'),
        ([apple, orange, lemon]) =>
          apple === 'apple' && orange === 'orange' && lemon === 'lemon'
            ? done()
            : done(`fruits not are as expected; ${apple}, ${orange}, ${lemon}`))
    })

    it('should fail becuase a future left is called', done => {
      Future.all(
        Future.of('no no no no no'),
        Future(left => setTimeout(() => left('oops'), 500)),
        Future(left => setTimeout(() => left('noo'), 1000))
      ).fork(
        oops => (oops === 'oops' ? done() : done(`${oops} is not oops`)),
        () => done(`oops should not get here`))
    })

    it('should handle an array as arguments', done => {
      Future.all([
        Future.of('apple'),
        Future((left, right) => setTimeout(() => right('orange'), 1000)),
        Future.of('lemon')
      ]).fork(
        () => done('something very bad has happened'),
        ([apple, orange, lemon]) =>
          apple === 'apple' && orange === 'orange' && lemon === 'lemon'
            ? done()
            : done(`fruits not are as expected; ${apple}, ${orange}, ${lemon}`))
    })
  })

  describe('convert to promise', function() {
    it('should convert a left to a catch', done => {
      Future(left => left('should be reject'))
        .promise()
        .then(val => done(`${val} should not be called`))
        .catch(val => {
          assert(val === 'should be reject')
          done()
        })
    })

    it('should convert a left and ignore map to a catch', done => {
      Future(left => left('should be reject'))
        .map(data => data + ' after map')
        .promise()
        .then(val => done(`${val} should not be called`))
        .catch(val => {
          assert(val === 'should be reject')
          done()
        })
    })

    it('should convert a right to a then', done => {
      Future((left, right) => right('should be resolve'))
        .promise()
        .then(val => {
          assert(val === 'should be resolve')
          done()
        })
        .catch(val => done(`${val} should not be called`))
    })

    it('should convert a right and map to a then', done => {
      Future((left, right) => right('should be resolve'))
        .map(data => data + ' after map')
        .promise()
        .then(val => {
          assert(val === 'should be resolve after map')
          done()
        })
        .catch(val => done(`${val} should not be called`))
    })
  })
})
