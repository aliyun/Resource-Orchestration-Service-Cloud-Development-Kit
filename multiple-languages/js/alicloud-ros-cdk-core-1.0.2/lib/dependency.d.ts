import { IConstruct } from "./construct-compat";
/**
 * Trait marker for classes that can be depended upon
 *
 * The presence of this interface indicates that an object has
 * an `IDependableTrait` implementation.
 *
 * This interface can be used to take an (ordering) dependency on a set of
 * constructs. An ordering dependency implies that the resources represented by
 * those constructs are deployed before the resources depending ON them are
 * deployed.
 */
export interface IDependable {
}
/**
 * A set of constructs to be used as a dependable
 *
 * This class can be used when a set of constructs which are disjoint in the
 * construct tree needs to be combined to be used as a single dependable.
 *
 * @experimental
 */
export declare class ConcreteDependable implements IDependable {
    private readonly _dependencyRoots;
    constructor();
    /**
     * Add a construct to the dependency roots
     */
    add(construct: IConstruct): void;
}
/**
 * Trait for IDependable
 *
 * Traits are interfaces that are privately implemented by objects. Instead of
 * showing up in the public interface of a class, they need to be queried
 * explicitly. This is used to implement certain framework features that are
 * not intended to be used by Construct consumers, and so should be hidden
 * from accidental use.
 *
 * @example
 *
 * // Usage
 * const roots = DependableTrait.get(construct).dependencyRoots;
 *
 * // Definition
 * DependableTrait.implement(construct, {
 *   get dependencyRoots() { return []; }
 * });
 *
 * @experimental
 */
export declare abstract class DependableTrait {
    /**
     * Register `instance` to have the given DependableTrait
     *
     * Should be called in the class constructor.
     */
    static implement(instance: IDependable, trait: DependableTrait): void;
    /**
     * Return the matching DependableTrait for the given class instance.
     */
    static get(instance: IDependable): DependableTrait;
    /**
     * The set of constructs that form the root of this dependable
     *
     * All resources under all returned constructs are included in the ordering
     * dependency.
     */
    abstract readonly dependencyRoots: IConstruct[];
}
