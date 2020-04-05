import MockAdapter from 'axios-mock-adapter';

export const TEST_USERS = [
  {
    context: 'Applicants',
    role: 'applicant',
    id: '1',
    username: 'maya',
    firstName: 'Maya',
    lastName: 'Smith'
  },
  {
    context: 'Employer',
    role: 'manager',
    id: '2',
    username: 'jane',
    firstName: 'Jane',
    lastName: 'Manager'
  }
];

const initMock = (mock) => {
  mock.onGet('/keepAlive').reply(200);

  mock.onGet('/users/:username').reply(config => {
    console.log('config', config);
    const user = TEST_USERS.find(u => u.username === 'maya');
    return [200, user];
  });
};

const wrapWithMock = (axios) => {
  const mock = new MockAdapter(axios);
  initMock(mock);
  return mock;
};

export default wrapWithMock;
