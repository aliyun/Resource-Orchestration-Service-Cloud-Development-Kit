import { IConstruct } from "../construct-compat";
/**
 * This is called from the App level to resolve all references defined. Each
 * reference is resolved based on it's consumption context.
 */
export declare function resolveReferences(scope: IConstruct): void;
