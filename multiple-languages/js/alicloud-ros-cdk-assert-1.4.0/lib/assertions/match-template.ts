import * as rosDiff from '@alicloud/ros-cdk-template-diff';
import {Assertion} from '../assertion';
import {StackInspector} from '../inspector';
import * as colors from 'colors/safe';

export enum MatchStyle {
  /** Requires an exact match */
  EXACT = 'exactly',
  /** Allows any change that does not cause a resource replacement */
  NO_REPLACES = 'no replaces',
  /** Allows additions, but no updates */
  SUPERSET = 'superset',
  /** Allows regular expressions to match strings */
  REGEXP = 'regexp',
}

export function exactlyMatchTemplate(template: { [key: string]: any }) {
  return matchTemplate(template, MatchStyle.EXACT);
}

export function beASupersetOfTemplate(template: { [key: string]: any }) {
  return matchTemplate(template, MatchStyle.SUPERSET);
}

export function matchTemplate(
  template: { [key: string]: any },
  matchStyle: MatchStyle = MatchStyle.EXACT,
): Assertion<StackInspector> {
  return new StackMatchesTemplateAssertion(template, matchStyle);
}

class StackMatchesTemplateAssertion extends Assertion<StackInspector> {
  public diff?: rosDiff.TemplateDiff;
  constructor(private readonly template: { [key: string]: any }, private readonly matchStyle: MatchStyle) {
    super();
  }

  public assertOrThrow(inspector: StackInspector) {
    if (!this.assertUsing(inspector)) {
      // The details have already been printed, so don't generate a huge error message
      throw new Error('Template comparison produced unacceptable match');
    }
  }

  public assertUsing(inspector: StackInspector): boolean {
    this.diff = rosDiff.diffTemplate(this.template, inspector.value);
    const acceptable = this.isDiffAcceptable();
    if (!acceptable) {
      // Print the diff
      rosDiff.formatDifferences(process.stderr, this.diff);

      // Print the actual template
      process.stderr.write(colors.rainbow('--------------------------------------------------------------------------------------\n'));
      process.stderr.write(colors.white((JSON.stringify(inspector.value, undefined, 2) + '\n')));
    }

    return acceptable;
  }

  private isDiffAcceptable(): boolean {
    switch (this.matchStyle) {
      case MatchStyle.EXACT:
        return this.diff!.differenceCount === 0;
      case MatchStyle.NO_REPLACES:
        for (const change of Object.values(this.diff!.resources.changes)) {
          if (change.changeImpact === rosDiff.ResourceImpact.MAY_REPLACE) {
            return false;
          }
          if (change.changeImpact === rosDiff.ResourceImpact.WILL_REPLACE) {
            return false;
          }
        }

        for (const change of Object.values(this.diff!.parameters.changes)) {
          if (change.isUpdate) {
            return false;
          }
        }

        for (const change of Object.values(this.diff!.outputs.changes)) {
          if (change.isUpdate) {
            return false;
          }
        }
        return true;
      case MatchStyle.SUPERSET:
        for (const change of Object.values(this.diff!.resources.changes)) {
          if (change.changeImpact !== rosDiff.ResourceImpact.WILL_CREATE) {
            return false;
          }
        }

        for (const change of Object.values(this.diff!.parameters.changes)) {
          if (change.isAddition) {
            return false;
          }
        }

        for (const change of Object.values(this.diff!.outputs.changes)) {
          if (change.isAddition || change.isUpdate) {
            return false;
          }
        }

        return true;
      case MatchStyle.REGEXP:
        let acceptable = true;
        let diffMap = this.diff!.toMap();
        let keysToDelete: string[] = [];
        for (const key in diffMap) {
          const value = diffMap[key];
          if (value === undefined || value === null || value === {}) {
            keysToDelete.push(key);
            continue;
          }
          if (rosDiff.isDifferenceInstance(value)) {
            if (compareVariablesWithRegExp(value.oldValue, value.newValue)) {
              keysToDelete.push(key);
            } else {
              acceptable = false;
            }
          } else if (typeof value === 'object' && !Array.isArray(value)) {
            for (const subKey in value) {
              if (compareVariablesWithRegExp(value[subKey].oldValue, value[subKey].newValue)) {
                keysToDelete.push(key + '.' + subKey);
              } else {
                for (const otherSubKey in value) {
                  const regex = new RegExp(subKey);
                  if (otherSubKey === subKey || !regex.test(otherSubKey)) {
                    continue;
                  }
                  if (compareVariablesWithRegExp(value[subKey].oldValue, value[otherSubKey].newValue)
                      || compareVariablesWithRegExp(value[otherSubKey].oldValue, value[subKey].newValue)) {
                    keysToDelete.push(key + '.' + subKey);
                    keysToDelete.push(key + '.' + otherSubKey);
                    break;
                  } else {
                    acceptable = false;
                  }
                }
              }
            }
          }
        }
        for (const key of keysToDelete) {
          const keys = key.split('.');
          if (keys.length == 1) {
            delete diffMap[key];
          } else {
            delete diffMap[keys[0]][keys[1]];
            if (Object.keys(diffMap[keys[0]]).length === 0) {
              delete diffMap[keys[0]];
            }
          }
        }
        this.diff = rosDiff.TemplateDiff.fromMap(diffMap);
        return acceptable;
    }
    throw new Error(`Unsupported match style: ${this.matchStyle}`);
  }

  public get description(): string {
    return `template (${this.matchStyle}): ${JSON.stringify(this.template, null, 2)}`;
  }
}

function compareVariablesWithRegExp(var1: any, var2: any): boolean {
  if (typeof var1 !== typeof var2) {
    return false;
  }

  if (typeof var1 === 'string' && typeof var2 === 'string') {
    if (var1 !== var2) {
      const regex = new RegExp(var1);
      return regex.test(var2);
    } else {
      return true;
    }
  }

  if (typeof var1 !== 'object' && typeof var2 !== 'object') {
    return var1 === var2;
  }

  if (typeof var1 === 'object' && typeof var2 === 'object') {
    if (Array.isArray(var1) && Array.isArray(var2)) {
      if (var1.length !== var2.length) {
        return false;
      }
      for (let i = 0; i < var1.length; i++) {
        if (!compareVariablesWithRegExp(var1[i], var2[i])) {
          return false;
        }
      }
      return true;
    } else {
      const keys1 = Object.keys(var1);
      const keys2 = Object.keys(var2);
      if (keys1.length !== keys2.length) {
        return false;
      }
      for (const key of keys1) {
        if (!compareVariablesWithRegExp(var1[key], var2[key])) {
          return false;
        }
      }
      return true;
    }
  }

  return false;
}
