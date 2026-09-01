import { Stack } from '../stack';
export declare function generateRandomString(length: number): string;
export declare class StringSpecializer {
    private readonly stack;
    private readonly qualifier;
    /**
     * Validate that the given string does not contain tokens
     */
    static validateNoTokens(str: string, what: string): void;
    constructor(stack: Stack, qualifier: string);
    /**
     * Function to replace placeholders in the input string as much as possible
     *
     * We replace:
     * - ${Qualifier}: always
     * - ${ALIYUN::AccountId}, ${ALIYUN::Region}: only if we have the actual values available
     */
    specialize(str: string): string;
    /**
     * Specialize the given string, make sure it doesn't contain tokens
     */
    specializeNoTokens(str: string, what: string): string;
    /**
     * Specialize only the qualifier
     */
    qualifierOnly(str: string): string;
}
/**
 * Return the given value if resolved or fall back to a default
 */
export declare function resolvedOr<A>(x: string, def: A): string | A;
/**
 * Replaces ROS Tokens with corresponding Asset Tokens.
 */
export declare function translateRosTokenToAssetToken(arn: string): string;
/**
 * Replaces Asset Tokens with corresponding ROS Tokens.
 */
export declare function translateAssetTokenToRosToken(arn: string): string;
