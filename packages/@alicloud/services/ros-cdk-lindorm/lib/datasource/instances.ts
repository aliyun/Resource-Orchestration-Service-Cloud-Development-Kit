import * as ros from '@alicloud/ros-cdk-core';
import { RosInstances } from './lindorm.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosInstances as InstancesProperty };

/**
 * Properties for defining a `Instances`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-lindorm-instances
 */
export interface InstancesProps {

    /**
     * Property instanceIds: The list of the instance id.
     */
    readonly instanceIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property queryStr: Instance name keyword, which can be used for fuzzy search.
     */
    readonly queryStr?: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: The resource group id of lindorm instance.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property serviceType: The type of lindorm instance.
     */
    readonly serviceType?: string | ros.IResolvable;

    /**
     * Property supportEngine: Database engine types supported by the queried instance.
     * 1: Support search engines.
     * 2: Support timing engine.
     * 4: Support wide table engine.
     * 8: Support file engine.
     * Note For example: the value of SupportEngine is 15, 15=8+4+2+1, which means that the instance supports search engine, timing engine, wide table engine and file engine. The value of SupportEngine is 6, 6=4+2, indicating that the instance supports timing engine and wide table engine.
     */
    readonly supportEngine?: number | ros.IResolvable;

    /**
     * Property tags: Tags of lindorm instance.
     */
    readonly tags?: RosInstances.TagsProperty[];
}

/**
 * Represents a `Instances`.
 */
export interface IInstances extends ros.IResource {
    readonly props: InstancesProps;

    /**
     * Attribute InstanceIds: The list of The instance list.
     */
    readonly attrInstanceIds: ros.IResolvable | string;

    /**
     * Attribute Instances: The detail list of The instance.
     */
    readonly attrInstances: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::Lindorm::Instances`, which is used to query the information about Lindorm instances.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstances`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-lindorm-instances
 */
export class Instances extends ros.Resource implements IInstances {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: InstancesProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute InstanceIds: The list of The instance list.
     */
    public readonly attrInstanceIds: ros.IResolvable | string;

    /**
     * Attribute Instances: The detail list of The instance.
     */
    public readonly attrInstances: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstancesProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosInstances = new RosInstances(this, id,  {
            resourceGroupId: props.resourceGroupId,
            serviceType: props.serviceType,
            queryStr: props.queryStr,
            supportEngine: props.supportEngine,
            instanceIds: props.instanceIds,
            tags: props.tags,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstances;
        this.attrInstanceIds = rosInstances.attrInstanceIds;
        this.attrInstances = rosInstances.attrInstances;
    }
}
