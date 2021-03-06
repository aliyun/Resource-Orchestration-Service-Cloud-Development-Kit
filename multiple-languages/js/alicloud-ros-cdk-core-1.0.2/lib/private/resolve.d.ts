import { IConstruct } from "../construct-compat";
import { TokenizedStringFragments } from "../string-fragments";
import { IResolvable, ITokenResolver, DefaultTokenResolver, IResolveContext, IPostProcessor } from "../resolvable";
/**
 * Options to the resolve() operation
 *
 * NOT the same as the ResolveContext; ResolveContext is exposed to Token
 * implementors and resolution hooks, whereas this struct is just to bundle
 * a number of things that would otherwise be arguments to resolve() in a
 * readable way.
 */
export interface IResolveOptions {
    scope: IConstruct;
    preparing: boolean;
    resolver: ITokenResolver;
    prefix?: string[];
}
/**
 * Resolves an object by evaluating all tokens and removing any undefined or empty objects or arrays.
 * Values can only be primitives, arrays or tokens. Other objects (i.e. with methods) will be rejected.
 *
 * @param obj The object to resolve.
 * @param prefix Prefix key path components for diagnostics.
 */
export declare function resolve(obj: any, options: IResolveOptions): any;
/**
 * Find all Tokens that are used in the given structure
 */
export declare function findTokens(scope: IConstruct, fn: () => any): IResolvable[];
/**
 * Remember all Tokens encountered while resolving
 */
export declare class RememberingTokenResolver extends DefaultTokenResolver {
    private readonly tokensSeen;
    resolveToken(t: IResolvable, context: IResolveContext, postProcessor: IPostProcessor): any;
    resolveString(s: TokenizedStringFragments, context: IResolveContext): any;
    get tokens(): IResolvable[];
}
