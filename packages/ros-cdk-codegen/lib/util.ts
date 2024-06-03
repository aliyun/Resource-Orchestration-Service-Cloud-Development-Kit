import * as fs from 'fs-extra';
import { allTypes } from '@alicloud/ros-cdk-spec';
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

export function mergeObjects(obj1: any, obj2: any): any {
  for (const key in obj2) {
    if (obj2.hasOwnProperty(key)) {
      if (obj1.hasOwnProperty(key)) {
        if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
          obj1[key] = obj1[key].concat(obj2[key]);
        } else if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
          obj1[key] = mergeObjects(obj1[key], obj2[key]);
        } else {
          obj1[key] = obj2[key];
        }
      } else {
        obj1[key] = obj2[key];
      }
    }
  }
  return obj1;
}
