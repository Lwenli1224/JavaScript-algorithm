import martixArea from '../../code/stack/matrix'

let input = [
  ['0', '1', '1', '1', '0', '0', '1', '1', '1', '1', '0', '0'],
  ['0', '0', '1', '1', '0', '1', '1', '1', '1', '0', '0', '1'],
  ['0', '1', '1', '1', '0', '0', '1', '1', '1', '1', '0', '0'],
  ['0', '1', '0', '1', '1', '1', '1', '1', '1', '1', '0', '0'],
  ['0', '1', '1', '0', '0', '0', '1', '1', '1', '1', '1', '0']
]

test('542. 01 矩阵', () => {
  expect(martixArea(input)).toBe(8)
})