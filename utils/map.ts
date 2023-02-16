export function cloneMap(map: Map<any, any>): any {
  const clonedMap = new Map<any, any>()
  for (const [key, value] of map) {
    clonedMap.set(key, value)
  }
  return clonedMap
}

if (typeof require !== 'undefined' && require.main === module) {
  const map = new Map<string, string[]>()
  map.set('test', ['foo', 'bar'])
  map.set('foo', ['test', 'bar'])
  map.set('bar', ['foo', 'foo', 'barfoo', 'foobar'])

  console.log(cloneMap(map))
}