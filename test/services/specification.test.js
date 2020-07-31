const app = require('../../src/app');

describe('\'specification\' service', () => {
  it('registered the service', () => {
    const service = app.service('specification');
    expect(service).toBeTruthy();
  });
});
