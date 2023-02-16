"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloneMap = void 0;
function cloneMap(map) {
    const clonedMap = new Map();
    for (const [key, value] of map) {
        clonedMap.set(key, value);
    }
    return clonedMap;
}
exports.cloneMap = cloneMap;
if (typeof require !== 'undefined' && require.main === module) {
    const map = new Map();
    map.set('test', ['foo', 'bar']);
    map.set('foo', ['test', 'bar']);
    map.set('bar', ['foo', 'foo', 'barfoo', 'foobar']);
    console.log(cloneMap(map));
}
//# sourceMappingURL=map.js.map