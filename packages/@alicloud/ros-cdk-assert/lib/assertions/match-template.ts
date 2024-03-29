import * as rosDiff from '@alicloud/ros-cdk-template-diff';
import { Assertion } from '../assertion';
import { StackInspector } from '../inspector';
import * as colors from 'colors/safe';

export enum MatchStyle {
  /** Requires an exact match */
  EXACT = 'exactly',
  /** Allows any change that does not cause a resource replacement */
  NO_REPLACES = 'no replaces',
  /** Allows additions, but no updates */
  SUPERSET = 'superset',
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
    const diff = rosDiff.diffTemplate(this.template, inspector.value);
    const acceptable = this.isDiffAcceptable(diff);
    if (!acceptable) {
      // Print the diff
      rosDiff.formatDifferences(process.stderr, diff);

      // Print the actual template
      process.stderr.write(colors.rainbow('--------------------------------------------------------------------------------------\n'));
      process.stderr.write(colors.white((JSON.stringify(inspector.value, undefined, 2) + '\n')));
    }

    return acceptable;
  }

  private isDiffAcceptable(diff: rosDiff.TemplateDiff): boolean {
    switch (this.matchStyle) {
      case MatchStyle.EXACT:
        return diff.differenceCount === 0;
      case MatchStyle.NO_REPLACES:
        for (const change of Object.values(diff.resources.changes)) {
          if (change.changeImpact === rosDiff.ResourceImpact.MAY_REPLACE) {
            return false;
          }
          if (change.changeImpact === rosDiff.ResourceImpact.WILL_REPLACE) {
            return false;
          }
        }

        for (const change of Object.values(diff.parameters.changes)) {
          if (change.isUpdate) {
            return false;
          }
        }

        for (const change of Object.values(diff.outputs.changes)) {
          if (change.isUpdate) {
            return false;
          }
        }
        return true;
      case MatchStyle.SUPERSET:
        for (const change of Object.values(diff.resources.changes)) {
          if (change.changeImpact !== rosDiff.ResourceImpact.WILL_CREATE) {
            return false;
          }
        }

        for (const change of Object.values(diff.parameters.changes)) {
          if (change.isAddition) {
            return false;
          }
        }

        for (const change of Object.values(diff.outputs.changes)) {
          if (change.isAddition || change.isUpdate) {
            return false;
          }
        }

        return true;
    }
    throw new Error(`Unsupported match style: ${this.matchStyle}`);
  }

  public get description(): string {
    return `template (${this.matchStyle}): ${JSON.stringify(this.template, null, 2)}`;
  }
}
