import { IResolvable } from "./resolvable";
/**
 * Accessor for pseudo parameters
 */
export declare class RosPseudo {
    private constructor();
    static get accountId(): string;
    static get region(): string;
    static get stackId(): string;
    static get stackName(): string;
    static get noValue(): IResolvable;
    static get tenantId(): string;
    static get index(): number;
    private static asString;
}
