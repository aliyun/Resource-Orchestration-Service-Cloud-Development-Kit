import { Assertion, JestFriendlyAssertion } from '../assertion';
import { StackInspector } from '../inspector';
/**
 * Magic value to signify that a certain key should be absent from the property bag.
 *
 * The property is either not present or set to `undefined.
 *
 * NOTE: `ABSENT` only works with the `haveResource()` and `haveResourceLike()`
 * assertions.
 */
export declare const ABSENT = "{{ABSENT}}";
/**
 * An assertion to check whether a resource of a given type and with the given properties exists, disregarding properties
 *
 * @param resourceType the type of the resource that is expected to be present.
 * @param properties   the properties that the resource is expected to have. A function may be provided, in which case
 *                     it will be called with the properties of candidate resources and an ``InspectionFailure``
 *                     instance on which errors should be appended, and should return a truthy value to denote a match.
 * @param comparison   the entity that is being asserted against.
 * @param allowValueExtension if properties is an object, tells whether values must match exactly, or if they are
 *                     allowed to be supersets of the reference values. Meaningless if properties is a function.
 */
export declare function haveResource(resourceType: string, properties?: any, comparison?: ResourcePart, allowValueExtension?: boolean): Assertion<StackInspector>;
/**
 * Sugar for calling ``haveResources`` with ``allowValueExtension`` set to ``true``.
 */
export declare function haveResourceLike(resourceType: string, properties?: any, comparison?: ResourcePart): Assertion<StackInspector>;
export type PropertyMatcher = (props: any, inspection: InspectionFailure) => boolean;
export declare class HaveResourceAssertion extends JestFriendlyAssertion<StackInspector> {
    private readonly resourceType;
    private readonly inspected;
    private readonly part;
    private readonly matcher;
    constructor(resourceType: string, properties?: any, part?: ResourcePart, allowValueExtension?: boolean);
    assertUsing(inspector: StackInspector): boolean;
    generateErrorMessage(): string;
    assertOrThrow(inspector: StackInspector): void;
    get description(): string;
}
export interface InspectionFailure {
    resource: any;
    failureReason: string;
}
/**
 * A matcher for an object that contains at least the given fields with the given matchers (or literals)
 *
 * Only does lenient matching one level deep, at the next level all objects must declare the
 * exact expected keys again.
 */
export declare function objectLike<A extends object>(pattern: A): PropertyMatcher;
/**
 * A matcher for an object that contains at least the given fields with the given matchers (or literals)
 *
 * Switches to "deep" lenient matching. Nested objects also only need to contain declared keys.
 */
export declare function deepObjectLike<A extends object>(pattern: A): PropertyMatcher;
export declare function _objectContaining<A extends object>(pattern: A, deep: boolean): PropertyMatcher;
/**
 * Match exactly the given value
 *
 * This is the default, you only need this to escape from the deep lenient matching
 * of `deepObjectLike`.
 */
export declare function exactValue(expected: any): PropertyMatcher;
/**
 * A matcher for a list that contains all of the given elements in any order
 */
export declare function arrayWith(...elements: any[]): PropertyMatcher;
/**
 * Return whether `superObj` is a super-object of `obj`.
 *
 * A super-object has the same or more property values, recursing into sub properties if ``allowValueExtension`` is true.
 *
 * At any point in the object, a value may be replaced with a function which will be used to check that particular field.
 * The type of a matcher function is expected to be of type PropertyMatcher.
 *
 * @deprecated - Use `objectLike` or a literal object instead.
 */
export declare function isSuperObject(superObj: any, pattern: any, errors?: string[], allowValueExtension?: boolean): boolean;
/**
 * What part of the resource to compare
 */
export declare enum ResourcePart {
    /**
     * Only compare the resource's properties
     */
    Properties = 0,
    /**
     * Check the entire config
     *
     * (including UpdateConfig, DependsOn, etc.)
     */
    CompleteDefinition = 1
}
