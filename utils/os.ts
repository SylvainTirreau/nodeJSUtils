import * as fsp from 'fs/promises'
import * as path from 'path'

export async function * walk (dir: string): AsyncIterableIterator<[string, string[], string[]]> {
  const rootPath: string = dir
  const dirs: string[] = []
  const files: string[] = []
  for await (const dirEntity of await fsp.opendir(dir)) {
    if (dirEntity.isDirectory()) dirs.push(dirEntity.name)
    else if (dirEntity.isFile()) files.push(dirEntity.name)
  }
  for (const dirName of dirs) {
    yield * walk(path.join(dir, dirName))
  }
  yield [rootPath, dirs, files]
}

