const services = require('../src/services');
const responseData = require('../src/help');

test('should call res.send() with Hello World!', () => {
  const send = jest.fn();
  const res = {
    send,
  };
  services({}, res);
  expect(send.mock.calls).toHaveLength(1);
  expect(send.mock.calls[0][0]).toEqual(responseData);
});