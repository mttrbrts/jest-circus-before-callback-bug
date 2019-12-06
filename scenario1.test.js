describe('Scenario 1: Delayed and detached error reporting', () => {
   
  // The error is not reported under this describe block or until the timeout happens
  beforeAll(done => Promise.reject('error1'));

  // As above
  // beforeAll(async done => Promise.reject('error1'));

  // This works as expected
  // beforeAll(done => Promise.reject('error1').catch(done));
  
  test('test 1', () => {
    expect(1).toBe(1)
  })
  
})
