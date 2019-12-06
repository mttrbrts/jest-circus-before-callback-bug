describe.skip('Scenario 2: Describe 1', () => {
  test('test 1', () => {});
})

describe('Scenario 2: Describe 2', () => {
  // These errors are reported incorrectly
  beforeAll(done => Promise.reject('error 1')); // INCORRECT
  // beforeAll(async done => await Promise.reject('error 2')); // INCORRECT
  // beforeAll(async done => Promise.reject('error 3')); // INCORRECT
  
  // These are reported correctly
  // beforeAll(() => Promise.reject('error 4')); // CORRECT
  // beforeAll(async () => Promise.reject('error 5'));  // CORRECT

  test('test 2', () => {});
})
