import { readFileSync } from 'fs'
import { join } from 'path'

export const loadPackageJSON = () => {
  const packagePath = join( process.cwd(), 'package.json' )
  const json = readFileSync( packagePath, 'utf8' )
  const packageInfo: PackageJSON = JSON.parse( json )

  return packageInfo
}

export interface PackageJSON extends Object {
  readonly name: string;
  readonly version?: string;
  readonly description?: string;
  readonly keywords?: string[];
  readonly homepage?: string;
  readonly bugs?: string | Bugs;
  readonly license?: string;
  readonly author?: string | Author;
  readonly contributors?: string[] | Author[];
  readonly files?: string[];
  readonly main?: string;
  readonly bin?: string | BinMap;
  readonly man?: string | string[];
  readonly directories?: Directories;
  readonly repository?: string | Repository;
  readonly scripts?: ScriptsMap;
  readonly config?: Config;
  readonly dependencies?: DependencyMap;
  readonly devDependencies?: DependencyMap;
  readonly peerDependencies?: DependencyMap;
  readonly optionalDependencies?: DependencyMap;
  readonly bundledDependencies?: string[];
  readonly engines?: Engines;
  readonly os?: string[];
  readonly cpu?: string[];
  readonly preferGlobal?: boolean;
  readonly private?: boolean;
  readonly publishConfig?: PublishConfig;
}

export interface Author {
  name: string;
  email?: string;
  homepage?: string;
}

export interface BinMap {
  [ commandName: string ]: string;
}

export interface Bugs {
  email: string;
  url: string;
}

export interface Config {
  name?: string;
  config?: Object;
}

export interface DependencyMap {
  [ dependencyName: string ]: string;
}

export interface Directories {
  lib?: string;
  bin?: string;
  man?: string;
  doc?: string;
  example?: string;
}

export interface Engines {
  node?: string;
  npm?: string;
}

export interface PublishConfig {
  registry?: string;
}

export interface Repository {
  type: string;
  url: string;
}

export interface ScriptsMap {
  [ scriptName: string ]: string;
}
