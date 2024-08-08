import * as cxapi from '@alicloud/ros-cdk-cxapi';
import { RosPseudo } from '../ros-pseudo';
import { Stack } from '../stack';
import { Token } from '../token';

/**
 * A "replace-all" function that doesn't require us escaping a literal string to a regex
 */
function replaceAll(str: string, search: string, replace: string) {
  return str.split(search).join(replace);
}

export function generateRandomString(length: number): string {
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export class StringSpecializer {
  /**
   * Validate that the given string does not contain tokens
   */
  public static validateNoTokens(str: string, what: string) {
    if (Token.isUnresolved(str)) {
      throw new Error(`${what} may not contain tokens; only the following literal placeholder strings are allowed: ` + [
        '${Qualifier}',
        cxapi.EnvironmentPlaceholders.CURRENT_REGION,
        cxapi.EnvironmentPlaceholders.CURRENT_ACCOUNT,
      ].join(', ') + `. Got: ${str}`);
    }
  }

  constructor(private readonly stack: Stack, private readonly qualifier: string) { }

  /**
   * Function to replace placeholders in the input string as much as possible
   *
   * We replace:
   * - ${Qualifier}: always
   * - ${ALIYUN::AccountId}, ${ALIYUN::Region}: only if we have the actual values available
   */
  public specialize(str: string): string {
    str = replaceAll(str, '${Qualifier}', this.qualifier);
    return cxapi.EnvironmentPlaceholders.replace(str, {
      region: resolvedOr(this.stack.region, cxapi.EnvironmentPlaceholders.CURRENT_REGION),
      accountId: resolvedOr(this.stack.account, cxapi.EnvironmentPlaceholders.CURRENT_ACCOUNT),
    });
  }

  /**
   * Specialize the given string, make sure it doesn't contain tokens
   */
  public specializeNoTokens(str: string, what: string): string {
    StringSpecializer.validateNoTokens(str, what);
    return this.specialize(str);
  }

  /**
   * Specialize only the qualifier
   */
  public qualifierOnly(str: string): string {
    return replaceAll(str, '${Qualifier}', this.qualifier);
  }
}

/**
 * Return the given value if resolved or fall back to a default
 */
export function resolvedOr<A>(x: string, def: A): string | A {
  return Token.isUnresolved(x) ? def : x;
}

const ASSET_TOKENS = ['${ALIYUN::Region}', '${ALIYUN::AccountId}'];
const ROS_TOKENS = [RosPseudo.region, RosPseudo.accountId];

/**
 * Replaces ROS Tokens with corresponding Asset Tokens.
 */
export function translateRosTokenToAssetToken(arn: string) {
  for (let i = 0; i < ROS_TOKENS.length; i++) {
    arn = replaceAll(arn, ROS_TOKENS[i], ASSET_TOKENS[i]);
  }
  return arn;
}

/**
 * Replaces Asset Tokens with corresponding ROS Tokens.
 */
export function translateAssetTokenToRosToken(arn: string) {
  for (let i = 0; i < ASSET_TOKENS.length; i++) {
    arn = replaceAll(arn, ASSET_TOKENS[i], ROS_TOKENS[i]);
  }
  return arn;
}
