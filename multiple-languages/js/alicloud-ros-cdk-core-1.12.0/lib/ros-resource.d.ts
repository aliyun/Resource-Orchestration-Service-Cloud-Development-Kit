import { RosDeletionPolicy } from "./ros-resource-policy";
import { Construct, IConstruct } from "./construct-compat";
import { Reference } from "./reference";
import { RemovalPolicy, RemovalPolicyOptions } from "./ros-removal-policy";
import { RosCondition } from "./ros-condition";
import { RosRefElement } from "./ros-element";
import { IResolvable } from "./resolvable";
export interface RosResourceProps {
    /**
     * ROS template resource type (e.g. `ALIYUN::ECS::Instance`).
     */
    readonly type: string;
    /**
     * Resource properties.
     *
     * @default - No resource properties.
     */
    readonly properties?: {
        [name: string]: any;
    };
}
/**
 * Represents a ROS resource.
 */
export declare class RosResource extends RosRefElement {
    /**
     * Check whether the given construct is a RosResource
     */
    static isRosResource(construct: IConstruct): construct is RosResource;
    /**
     * Options for this resource, such as condition, update policy etc.
     */
    readonly rosOptions: IRosResourceOptions;
    /**
     * ROS resource type.
     */
    readonly rosResourceType: string;
    /**
     * Aliyun resource properties.
     * @internal
     */
    protected readonly _rosProperties: any;
    /**
     * An object to be merged on top of the entire resource definition.
     */
    private readonly rawOverrides;
    /**
     * Logical IDs of dependencies.
     *
     * Is filled during prepare().
     */
    private readonly dependsOn;
    private readonly id;
    private readonly rosDependsOn;
    /**
     * Creates a resource construct.
     * @param rosResourceType The ROS type of this resource (e.g. ALIYUN::ECS::Instance)
     */
    constructor(scope: Construct, id: string, props: RosResourceProps);
    /**
     * Sets the deletion policy of the resource based on the removal policy specified.
     */
    applyRemovalPolicy(policy: RemovalPolicy | undefined, options?: RemovalPolicyOptions): void;
    /**
     * Returns a token for an runtime attribute of this resource.
     * Ideally, use generated attribute accessors (e.g. `resource.arn`), but this can be used for future compatibility
     * in case there is no generated attribute.
     * @param attributeName The name of the attribute.
     */
    getAtt(attributeName: string): Reference;
    /**
     * Adds an override to the synthesized ROS resource. To add a
     * property override, either use `addPropertyOverride` or prefix `path` with
     * "Properties." (i.e. `Properties.TopicName`).
     *
     * If the override is nested, separate each nested level using a dot (.) in the path parameter.
     * If there is an array as part of the nesting, specify the index in the path.
     *
     * For example,
     * ```typescript
     * addOverride('Properties.GlobalSecondaryIndexes.0.Projection.NonKeyAttributes', ['myattribute'])
     * addOverride('Properties.GlobalSecondaryIndexes.1.ProjectionType', 'INCLUDE')
     * ```
     * would add the overrides
     * ```json
     * "Properties": {
     *   "GlobalSecondaryIndexes": [
     *     {
     *       "Projection": {
     *         "NonKeyAttributes": [ "myattribute" ]
     *         ...
     *       }
     *       ...
     *     },
     *     {
     *       "ProjectionType": "INCLUDE"
     *       ...
     *     },
     *   ]
     *   ...
     * }
     * ```
     *
     * @param path - The path of the property, you can use dot notation to
     *        override values in complex types. Any intermdediate keys
     *        will be created as needed.
     * @param value - The value. Could be primitive or complex.
     */
    addOverride(path: string, value: any): void;
    /**
     * Syntactic sugar for `addOverride(path, undefined)`.
     * @param path The path of the value to delete
     */
    addDeletionOverride(path: string): void;
    addMetaData(key: string, value: any): void;
    addDesc(desc: string): void;
    fetchDesc(): string | undefined;
    addCondition(con: RosCondition): void;
    fetchCondition(): RosCondition | undefined;
    addCount(count: number | IResolvable): void;
    /**
     * Adds an override to a resource property.
     *
     * Syntactic sugar for `addOverride("Properties.<...>", value)`.
     *
     * @param propertyPath The path of the property
     * @param value The value
     */
    addPropertyOverride(propertyPath: string, value: any): void;
    /**
     * Adds an override that deletes the value of a property from the resource definition.
     * @param propertyPath The path to the property.
     */
    addPropertyDeletionOverride(propertyPath: string): void;
    /**
     * Indicates that this resource depends on another resource and cannot be
     * provisioned unless the other resource has been successfully provisioned.
     *
     * This can be used for resources across stacks (or nested stack) boundaries
     * and the dependency will automatically be transferred to the relevant scope.
     */
    addDependsOn(target: RosResource): void;
    /**
     * @returns a string representation of this resource
     */
    toString(): string;
    /**
     * Called by the `addDependency` helper function in order to realize a direct
     * dependency between two resources that are directly defined in the same
     * stacks.
     *
     * Use `resource.addDependsOn` to define the dependency between two resources,
     * which also takes stack boundaries into account.
     *
     * @internal
     */
    _addResourceDependency(target: RosResource): void;
    addRosDependency(target: string): void;
    fetchRosDependency(): string[];
    /**
     * Emits ROS template for this resource.
     * @internal
     */
    _toRosTemplate(): object;
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
    /**
     * Return properties modified after initiation
     *
     * Resources that expose mutable properties should override this function to
     * collect and return the properties object for this resource.
     */
    protected get updatedProperites(): {
        [key: string]: any;
    };
    protected validateProperties(_properties: any): void;
}
export interface IRosResourceOptions {
    /**
     * A condition to associate with this resource. This means that only if the condition evaluates to 'true' when the stack
     * is deployed, the resource will be included. This is provided to allow CDK projects to produce legacy templates, but noramlly
     * there is no need to use it in CDK projects.
     */
    condition?: RosCondition;
    /**
     * With the DeletionPolicy attribute you can preserve or (in some cases) backup a resource when its stack is deleted.
     * You specify a DeletionPolicy attribute for each resource that you want to control. If a resource has no DeletionPolicy
     * attribute, ROS deletes the resource by default. Note that this capability also applies to update operations
     * that lead to resources being removed.
     */
    deletionPolicy?: RosDeletionPolicy;
    /**
     * Metadata associated with the ROS resource. This is not the same as the construct metadata which can be added
     * using construct.addMetadata(), but would not appear in the ROS template automatically.
     */
    metadata?: {
        [key: string]: any;
    };
    description?: string;
    count?: number | IResolvable;
}
