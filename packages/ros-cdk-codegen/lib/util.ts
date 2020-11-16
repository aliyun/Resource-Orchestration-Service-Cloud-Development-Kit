import * as fs from 'fs-extra';
import { allTypes } from '@ros-cdk/ros-spec';
/**
 * Downcase the first character in a string.
 *
 * @param str the string to be processed.
 */
export function downcaseFirst(str: string): string {
  if (str === '') {
    return str;
  }
  return `${str[0].toLocaleLowerCase()}${str.slice(1)}`;
}

/**
 * Upcase the first character in a string.
 *
 * @param str the string to be processed.
 */
export function upcaseFirst(str: string): string {
  if (str === '') {
    return str;
  }
  return `${str[0].toLocaleUpperCase()}${str.slice(1)}`;
}

/**
 * Join two strings with a separator if they're both present, otherwise return the present one
 */
export function joinIf(left: string | undefined, sep: string, right: string | undefined): string {
  if (!left) {
    return right || '';
  }
  if (!right) {
    return left || '';
  }
  return left + sep + right;
}

export async function tryAutoDetectScope(pkg: any): Promise<undefined | string[]> {
  let value = pkg['ros-cdk-build'] && pkg['cdk-build'].category;

  if (value === undefined || value.length === 0) {
    const types = await tryReadPackageJson(allTypes());
    value = types;
  }
  return value && (typeof value === 'string' ? [value] : value);
}

export async function tryReadPackageJson(path: string) {
  
  if (!(fs.pathExistsSync(path))) {
    return undefined;
  }

  return fs.readJSONSync(path);
}
