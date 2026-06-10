export type PropertyMap = {
    [key: string]: any;
};
/** Semantic differences between two ROS templates. */
export declare class TemplateDiff implements ITemplateDiff {
    description?: Difference<string>;
    transform?: Difference<string>;
    conditions: DifferenceCollection<Condition, ConditionDifference>;
    mappings: DifferenceCollection<Mapping, MappingDifference>;
    rules: DifferenceCollection<Rule, RuleDifference>;
    metadata: DifferenceCollection<Metadata, MetadataDifference>;
    outputs: DifferenceCollection<Output, OutputDifference>;
    parameters: DifferenceCollection<Parameter, ParameterDifference>;
    resources: DifferenceCollection<Resource, ResourceDifference>;
    /** The differences in unknown/unexpected parts of the template */
    unknown: DifferenceCollection<any, Difference<any>>;
    constructor(args: ITemplateDiff);
    get differenceCount(): number;
    get isEmpty(): boolean;
    toMap(): PropertyMap;
    static fromMap(map: PropertyMap): TemplateDiff;
}
/**
 * A change in property values
 *
 * Not necessarily an update, it could be that there used to be no value there
 * because there was no resource, and now there is (or vice versa).
 *
 * Therefore, we just contain plain values and not a PropertyDifference<any>.
 */
export interface PropertyChange {
    /**
     * Logical ID of the resource where this property change was found
     */
    resourceLogicalId: string;
    /**
     * Type of the resource
     */
    resourceType: string;
    /**
     * Name of the property that is changing
     */
    propertyName: string;
    /**
     * The old property value
     */
    oldValue?: any;
    /**
     * The new property value
     */
    newValue?: any;
}
/**
 * A resource change
 *
 * Either a creation, deletion or update.
 */
export interface ResourceChange {
    /**
     * Logical ID of the resource where this property change was found
     */
    resourceLogicalId: string;
    /**
     * The type of the resource
     */
    resourceType: string;
    /**
     * The old properties value (might be undefined in case of creation)
     */
    oldProperties?: PropertyMap;
    /**
     * The new properties value (might be undefined in case of deletion)
     */
    newProperties?: PropertyMap;
}
export interface IDifference<ValueType> {
    readonly oldValue: ValueType | undefined;
    readonly newValue: ValueType | undefined;
    readonly isDifferent: boolean;
    readonly isAddition: boolean;
    readonly isRemoval: boolean;
    readonly isUpdate: boolean;
}
/**
 * Models an entity that changed between two versions of a ROS template.
 */
export declare class Difference<ValueType> implements IDifference<ValueType> {
    readonly oldValue: ValueType | undefined;
    readonly newValue: ValueType | undefined;
    /**
     * Whether this is an actual different or the values are actually the same
     *
     * isDifferent => (isUpdate | isRemoved | isUpdate)
     */
    readonly isDifferent: boolean;
    /**
     * @param oldValue the old value, cannot be equal (to the sense of +deepEqual+) to +newValue+.
     * @param newValue the new value, cannot be equal (to the sense of +deepEqual+) to +oldValue+.
     */
    constructor(oldValue: ValueType | undefined, newValue: ValueType | undefined);
    /** @returns +true+ if the element is new to the template. */
    get isAddition(): boolean;
    /** @returns +true+ if the element was removed from the template. */
    get isRemoval(): boolean;
    /** @returns +true+ if the element was already in the template and is updated. */
    get isUpdate(): boolean;
}
export declare function isDifferenceInstance(obj: any): obj is Difference<any>;
export declare class PropertyDifference<ValueType> extends Difference<ValueType> {
    readonly changeImpact?: ResourceImpact;
    constructor(oldValue: ValueType | undefined, newValue: ValueType | undefined, args: {
        changeImpact?: ResourceImpact;
    });
}
export declare class DifferenceCollection<V, T extends IDifference<V>> {
    private readonly diffs;
    constructor(diffs: {
        [logicalId: string]: T;
    });
    get changes(): {
        [logicalId: string]: T;
    };
    get differenceCount(): number;
    get(logicalId: string): T;
    get logicalIds(): string[];
    /**
     * Returns a new TemplateDiff which only contains changes for which `predicate`
     * returns `true`.
     */
    filter(predicate: (diff: T | undefined) => boolean): DifferenceCollection<V, T>;
    /**
     * Invokes `cb` for all changes in this collection.
     *
     * Changes will be sorted as follows:
     *  - Removed
     *  - Added
     *  - Updated
     *  - Others
     *
     * @param cb
     */
    forEachDifference(cb: (logicalId: string, change: T) => any): void;
}
export declare function isDifferenceCollectionInstance(obj: any): obj is DifferenceCollection<any, any>;
/**
 * Arguments expected by the constructor of +TemplateDiff+, extracted as an interface for the sake
 * of (relative) conciseness of the constructor's signature.
 */
export interface ITemplateDiff {
    description?: IDifference<string>;
    transform?: IDifference<string>;
    conditions?: DifferenceCollection<Condition, ConditionDifference>;
    mappings?: DifferenceCollection<Mapping, MappingDifference>;
    rules?: DifferenceCollection<Rule, RuleDifference>;
    metadata?: DifferenceCollection<Metadata, MetadataDifference>;
    outputs?: DifferenceCollection<Output, OutputDifference>;
    parameters?: DifferenceCollection<Parameter, ParameterDifference>;
    resources?: DifferenceCollection<Resource, ResourceDifference>;
    unknown?: DifferenceCollection<any, IDifference<any>>;
}
export type Condition = any;
export declare class ConditionDifference extends Difference<Condition> {
}
export type Mapping = any;
export declare class MappingDifference extends Difference<Mapping> {
}
export type Rule = any;
export declare class RuleDifference extends Difference<Rule> {
}
export type Metadata = any;
export declare class MetadataDifference extends Difference<Metadata> {
}
export type Output = any;
export declare class OutputDifference extends Difference<Output> {
}
export type Parameter = any;
export declare class ParameterDifference extends Difference<Parameter> {
}
export declare enum ResourceImpact {
    /** The existing physical resource will be updated */
    WILL_UPDATE = "WILL_UPDATE",
    /** A new physical resource will be created */
    WILL_CREATE = "WILL_CREATE",
    /** The existing physical resource will be replaced */
    WILL_REPLACE = "WILL_REPLACE",
    /** The existing physical resource may be replaced */
    MAY_REPLACE = "MAY_REPLACE",
    /** The existing physical resource will be destroyed */
    WILL_DESTROY = "WILL_DESTROY",
    /** The existing physical resource will be removed from ROS supervision */
    WILL_ORPHAN = "WILL_ORPHAN",
    /** There is no change in this resource */
    NO_CHANGE = "NO_CHANGE"
}
export interface Resource {
    Type: string;
    Properties?: {
        [name: string]: any;
    };
    [key: string]: any;
}
/**
 * Change to a single resource between two ROS templates
 *
 * This class can be mutated after construction.
 */
export declare class ResourceDifference implements IDifference<Resource> {
    readonly oldValue: Resource | undefined;
    readonly newValue: Resource | undefined;
    /**
     * Whether this resource was added
     */
    readonly isAddition: boolean;
    /**
     * Whether this resource was removed
     */
    readonly isRemoval: boolean;
    /** Property-level changes on the resource */
    private readonly propertyDiffs;
    /** Changes to non-property level attributes of the resource */
    private readonly otherDiffs;
    /** The resource type (or old and new type if it has changed) */
    private readonly resourceTypes;
    constructor(oldValue: Resource | undefined, newValue: Resource | undefined, args: {
        resourceType: {
            oldType?: string;
            newType?: string;
        };
        propertyDiffs: {
            [key: string]: PropertyDifference<any>;
        };
        otherDiffs: {
            [key: string]: Difference<any>;
        };
    });
    get oldProperties(): PropertyMap | undefined;
    get newProperties(): PropertyMap | undefined;
    /**
     * Whether this resource was modified at all
     */
    get isDifferent(): boolean;
    /**
     * Whether the resource was updated in-place
     */
    get isUpdate(): boolean;
    get oldResourceType(): string | undefined;
    get newResourceType(): string | undefined;
    /**
     * All actual property updates
     */
    get propertyUpdates(): {
        [key: string]: PropertyDifference<any>;
    };
    /**
     * All actual "other" updates
     */
    get otherChanges(): {
        [key: string]: Difference<any>;
    };
    /**
     * Return whether the resource type was changed in this diff
     *
     * This is not a valid operation in ROS but to be defensive we're going
     * to be aware of it anyway.
     */
    get resourceTypeChanged(): boolean;
    /**
     * Return the resource type if it was unchanged
     *
     * If the resource type was changed, it's an error to call this.
     */
    get resourceType(): string;
    /**
     * Replace a PropertyChange in this object
     *
     * This affects the property diff as it is summarized to users, but it DOES
     * NOT affect either the "oldValue" or "newValue" values; those still contain
     * the actual template values as provided by the user (they might still be
     * used for downstream processing).
     */
    setPropertyChange(propertyName: string, change: PropertyDifference<any>): void;
    get changeImpact(): ResourceImpact;
    /**
     * Count of actual differences (not of elements)
     */
    get differenceCount(): number;
    /**
     * Invoke a callback for each actual difference
     */
    forEachDifference(cb: (type: 'Property' | 'Other', name: string, value: Difference<any> | PropertyDifference<any>) => any): void;
}
export declare function isPropertyDifference<T>(diff: Difference<T>): diff is PropertyDifference<T>;
