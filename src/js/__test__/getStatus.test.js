import getStatus from '../getStatus';

describe('getStatus', () => test.each([
  ['healthy', { name: 'mage', health: 90 }, {
    name: 'mage', health: 90, status: 'healthy', color: 'green',
  }],
  ['wounded', { name: 'mage', health: 40 }, {
    name: 'mage', health: 40, status: 'wounded', color: 'yellow',
  }],
  ['critical', { name: 'mage', health: 10 }, {
    name: 'mage', health: 10, status: 'critical', color: 'red',
  }],
  ['null (HP = 0) ', { name: 'mage', health: 0 }, null],
  ['null (HP = 101)', { name: 'mage', health: 101 }, null],
  ['null (HP = string)', { name: 'mage', health: 'string' }, null],
])(
  ('should return %s'),
  (level, amount, expected) => {
    const result = getStatus(amount);
    expect(result).toStrictEqual(expected);
  },
));
