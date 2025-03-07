import * as ros from '@alicloud/ros-cdk-core';
import { RosManagedInstances } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosManagedInstances as ManagedInstancesProperty };

/**
 * Properties for defining a `ManagedInstances`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-managedinstances
 */
export interface ManagedInstancesProps {

    /**
     * Property activationId: The ID of the activation code
     */
    readonly activationId?: string | ros.IResolvable;

    /**
     * Property instanceId: The ID of managed instance. Valid values of N: 1 to 50.
     */
    readonly instanceId?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property instanceIp: The internal or public IP address of the managed instance
     */
    readonly instanceIp?: string | ros.IResolvable;

    /**
     * Property instanceName: The name of the managed instance
     */
    readonly instanceName?: string | ros.IResolvable;

    /**
     * Property osType: The operating system type of the managed instance.  Valid values:
     * windows
     * linux
     */
    readonly osType?: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * Property tags: Tags of managedinstance.
     */
    readonly tags?: RosManagedInstances.TagsProperty[];
}

/**
 * Represents a `ManagedInstances`.
 */
export interface IManagedInstances extends ros.IResource {
    readonly props: ManagedInstancesProps;

    /**
     * Attribute InstanceIds: The list of managed instance ids.
     */
    readonly attrInstanceIds: ros.IResolvable | string;

    /**
     * Attribute Instances: The list of managed instances.
     */
    readonly attrInstances: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ECS::ManagedInstances`, which is used to query managed instances.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosManagedInstances`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-managedinstances
 */
export class ManagedInstances extends ros.Resource implements IManagedInstances {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: ManagedInstancesProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute InstanceIds: The list of managed instance ids.
     */
    public readonly attrInstanceIds: ros.IResolvable | string;

    /**
     * Attribute Instances: The list of managed instances.
     */
    public readonly attrInstances: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ManagedInstancesProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosManagedInstances = new RosManagedInstances(this, id,  {
            instanceName: props.instanceName,
            instanceId: props.instanceId,
            osType: props.osType,
            activationId: props.activationId,
            instanceIp: props.instanceIp,
            tags: props.tags,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosManagedInstances;
        this.attrInstanceIds = rosManagedInstances.attrInstanceIds;
        this.attrInstances = rosManagedInstances.attrInstances;
    }
}
