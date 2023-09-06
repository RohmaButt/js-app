const data1 = [
  {
    name: 'United States',
    category: 'United States',
    isMarkedAsZero: false,
    subCategory: [
      { name: '2018', category: '2018', val: 24.1, subCategory: null },
      { name: '2019', category: '2019', val: 30.2, subCategory: null },
      { name: '2020', category: '2020', val: 30.2, subCategory: null },
      { name: 'Δ 2020', category: 'Δ 2020', val: 6, subCategory: null },
    ],
  },
  {
    name: 'Canada',
    category: 'Canada',
    isMarkedAsZero: false,
    subCategory: [
      { name: '2018', category: '2018', val: 1.6, subCategory: null },
      { name: '2019', category: '2019', val: 2.0, subCategory: null },
      { name: '2020', category: '2020', val: 2.2, subCategory: null },
      { name: 'Δ 2020', category: 'Δ 2020', val: 0.2, subCategory: null },
    ],
  },
  {
    name: 'Europe + Russia + Turkey',
    category: 'Europe + Russia + Turkey',
    isMarkedAsZero: false,
    subCategory: [
      { name: '2018', category: '2018', val: 13.6, subCategory: null },
      { name: '2019', category: '2019', val: 16.8, subCategory: null },
      { name: '2020', category: '2020', val: 20.3, subCategory: null },
      { name: 'Δ 2020', category: 'Δ 2020', val: 3.5, subCategory: null },
    ],
  },
  {
    name: 'Asia-Pacific',
    category: 'Asia-Pacific',
    isMarkedAsZero: true,
    subCategory: [
      { name: '2018', category: '2018', val: 11.7, subCategory: null },
      { name: '2019', category: '2019', val: 15.4, subCategory: null },
      { name: '2020', category: '2020', val: 19.8, subCategory: null },
      { name: 'Δ 2020', category: 'Δ 2020', val: 4.4, subCategory: null },
    ],
  },
  {
    name: 'Rest of world',
    category: 'Rest of world',
    isMarkedAsZero: false,
    subCategory: [
      { name: '2018', category: '2018', val: 4.7, subCategory: null },
      { name: '2019', category: '2019', val: 6.3, subCategory: null },
      { name: '2020', category: '2020', val: 7.3, subCategory: null },
      { name: 'Δ 2020', category: 'Δ 2020', val: 1, subCategory: null },
    ],
  },
  {
    name: 'Revenue',
    category: 'Revenue',
    isMarkedAsZero: true,
    subCategory: [
      { name: '2018', category: '2018', val: 55.7, subCategory: null },
      { name: '2019', category: '2019', val: 70.7, subCategory: null },
      { name: '2020', category: '2020', val: 85.8, subCategory: null },
      { name: 'Δ 2020', category: 'Δ 2020', val: 15.1, subCategory: null },
    ],
  },
  {
    name: 'Cost of revenue',
    category: 'Cost of revenue',
    isMarkedAsZero: false,
    subCategory: [
      { name: '2018', category: '2018', val: -9.4, subCategory: null },
      { name: '2019', category: '2019', val: -12.8, subCategory: null },
      { name: '2020', category: '2020', val: -16.7, subCategory: null },
      { name: 'Δ 2020', category: 'Δ 2020', val: -3.9, subCategory: null },
    ],
  },
  {
    name: 'Gross Profit',
    category: 'Gross Profit',
    isMarkedAsZero: true,
    subCategory: [
      { name: '2018', category: '2018', val: 46.3, subCategory: null },
      { name: '2019', category: '2019', val: 57.9, subCategory: null },
      { name: '2020', category: '2020', val: 69.6, subCategory: null },
      { name: 'Δ 2020', category: 'Δ 2020', val: 11.2, subCategory: null },
    ],
  },
  {
    name: 'Research and development',
    category: 'Research and development',
    isMarkedAsZero: false,
    subCategory: [
      { name: '2018', category: '2018', val: -10.3, subCategory: null },
      { name: '2019', category: '2019', val: -13.6, subCategory: null },
      { name: '2020', category: '2020', val: -18.4, subCategory: null },
      { name: 'Δ 2020', category: 'Δ 2020', val: 4.8, subCategory: null },
    ],
  },
  {
    name: 'Advertising expense',
    category: 'Advertising expense',
    isMarkedAsZero: false,
    subCategory: [
      { name: '2018', category: '2018', val: -1.1, subCategory: null },
      { name: '2019', category: '2019', val: -1.6, subCategory: null },
      { name: '2020', category: '2020', val: -2.3, subCategory: null },
      { name: 'Δ 2020', category: 'Δ 2020', val: -0.7, subCategory: null },
    ],
  },
  {
    name: 'Other marketing and sales',
    category: 'Other marketing and sales',
    isMarkedAsZero: false,
    subCategory: [
      { name: '2018', category: '2018', val: -6.7, subCategory: null },
      { name: '2019', category: '2019', val: -8.3, subCategory: null },
      { name: '2020', category: '2020', val: -9.3, subCategory: null },
      { name: 'Δ 2020', category: 'Δ 2020', val: -1, subCategory: null },
    ],
  },
  {
    name: 'General and administrative',
    category: 'General and administrative',
    isMarkedAsZero: false,
    subCategory: [
      { name: '2018', category: '2018', val: -3.5, subCategory: null },
      { name: '2019', category: '2019', val: -10.5, subCategory: null },
      { name: '2020', category: '2020', val: -6.6, subCategory: null },
      { name: 'Δ 2020', category: 'Δ 2020', val: -3.9, subCategory: null },
    ],
  },
  {
    name: 'Other expenses',
    category: 'Other expenses',
    isMarkedAsZero: false,
    subCategory: [
      { name: '2018', category: '2018', val: 0, subCategory: null },
      { name: '2019', category: '2019', val: 0, subCategory: null },
      { name: '2020', category: '2020', val: 0, subCategory: null },
      { name: 'Δ 2020', category: 'Δ 2020', val: 0, subCategory: null },
    ],
  },
  {
    name: 'Operating income',
    category: 'Operating income',
    isMarkedAsZero: false,
    subCategory: [
      { name: '2018', category: '2018', val: 24.7, subCategory: null },
      { name: '2019', category: '2019', val: 23.9, subCategory: null },
      { name: '2020', category: '2020', val: 32.5, subCategory: null },
      { name: 'Δ 2020', category: 'Δ 2020', val: 8.6, subCategory: null },
    ],
  },
  {
    name: 'Other income (net)',
    category: 'Other income (net)',
    isMarkedAsZero: false,
    subCategory: [
      { name: '2018', category: '2018', val: 0.4, subCategory: null },
      { name: '2019', category: '2019', val: 0.8, subCategory: null },
      { name: '2020', category: '2020', val: 0.5, subCategory: null },
      { name: 'Δ 2020', category: 'Δ 2020', val: 0.3, subCategory: null },
    ],
  },
  {
    name: 'Income before taxes',
    category: 'Income before taxes',
    isMarkedAsZero: true,
    subCategory: [
      { name: '2018', category: '2018', val: 25.1, subCategory: null },
      { name: '2019', category: '2019', val: 24.7, subCategory: null },
      { name: '2020', category: '2020', val: 33, subCategory: null },
      { name: 'Δ 2020', category: 'Δ 2020', val: 8.3, subCategory: null },
    ],
  },
  {
    name: 'Income taxes',
    category: 'Income taxes',
    isMarkedAsZero: false,
    subCategory: [
      { name: '2018', category: '2018', val: -3.2, subCategory: null },
      { name: '2019', category: '2019', val: -6.3, subCategory: null },
      { name: '2020', category: '2020', val: -4, subCategory: null },
      { name: 'Δ 2020', category: 'Δ 2020', val: -2.3, subCategory: null },
    ],
  },
  {
    name: 'Other net income',
    category: 'Other net income',
    isMarkedAsZero: false,
    subCategory: [
      { name: '2018', category: '2018', val: 0, subCategory: null },
      { name: '2019', category: '2019', val: 0, subCategory: null },
      { name: '2020', category: '2020', val: 0, subCategory: null },
      { name: 'Δ 2020', category: 'Δ 2020', val: 0, subCategory: null },
    ],
  },
  {
    name: 'Net income',
    category: 'Net income',
    isMarkedAsZero: true,
    subCategory: [
      { name: '2018', category: '2018', val: 21.9, subCategory: null },
      { name: '2019', category: '2019', val: 18.4, subCategory: null },
      { name: '2020', category: '2020', val: 29, subCategory: null },
      { name: 'Δ 2020', category: 'Δ 2020', val: 10.6, subCategory: null },
    ],
  },
];

export { data1 };
