import { IConstruct, Construct } from "./construct-compat";
import { Intrinsic } from "./private/intrinsic";
import { IPostProcessor, IResolveContext } from "./resolvable";
import { Stack } from "./stack";
export declare function ifUndefined<T>(value: T | undefined, defaultValue: T): T;
export declare function isAllowedValue(props: {
    [name: string]: any;
}, name: string, context: Construct, allowedValues: any[]): void;
export declare function filterUndefined(obj: any): any;
/**
 * @returns the list of stacks that lead from the top-level stack (non-nested) all the way to a nested stack.
 */
export declare function pathToTopLevelStack(s: Stack): Stack[];
/**
 * Given two arrays, returns the last common element or `undefined` if there
 * isn't (arrays are foriegn).
 */
export declare function findLastCommonElement<T>(path1: T[], path2: T[]): T | undefined;
export declare function capitalizePropertyNames(construct: IConstruct, obj: any): any;
/**
 * Turns empty arrays/objects to undefined (after evaluating tokens).
 */
export declare function ignoreEmpty(obj: any): any;
export declare class PostResolveToken extends Intrinsic implements IPostProcessor {
    private readonly processor;
    constructor(value: any, processor: (x: any) => any);
    resolve(context: IResolveContext): any;
    postProcess(o: any, _context: IResolveContext): any;
}
//# sourceMappingURL=util.d.ts.map