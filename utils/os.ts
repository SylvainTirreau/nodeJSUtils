import * as fsp from 'fs/promises'
import * as path from 'path'
import fs from "fs";

export async function * walkAsync (dir: string): AsyncIterableIterator<[string, string[], string[]]> {
  const rootPath: string = dir
  const dirs: string[] = []
  const files: string[] = []
  for await (const dirEntity of await fsp.opendir(dir)) {
    if (dirEntity.isDirectory()) dirs.push(dirEntity.name)
    else if (dirEntity.isFile()) files.push(dirEntity.name)
  }
  for (const dirName of dirs) {
    yield * walkAsync(path.join(dir, dirName))
  }
  yield [rootPath, dirs, files]
}

export function * walkSync (dir: string): Generator<[string, string[], string[]]> {
  const rootPath: string = dir
  const dirs: string[] = []
  const files: string[] = []
  for (const dirEntity of fs.readdirSync(dir, { withFileTypes: true })) {
    if (dirEntity.isDirectory()) dirs.push(dirEntity.name)
    else if (dirEntity.isFile()) files.push(dirEntity.name)
  }
  for (const dirName of dirs) {
    yield * walkSync(path.join(dir, dirName))
  }
  yield [rootPath, dirs, files]
}