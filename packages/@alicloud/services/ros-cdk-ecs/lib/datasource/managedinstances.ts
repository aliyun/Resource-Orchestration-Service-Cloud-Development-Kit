import * as ros from '@alicloud/ros-cdk-core';
import { RosManagedInstances } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosManagedInstances as ManagedInstancesProperty };

/**
 * Properties for defining a `DATASOURCE::ECS::ManagedInstances`
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
     * Property tags: Tags of managedinstance.
     */
    readonly tags?: RosManagedInstances.TagsProperty[];
}

/**
 * A ROS resource type:  `DATASOURCE::ECS::ManagedInstances`
 */
export class ManagedInstances extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute InstanceIds: The list of managed instance ids.
     */
    public readonly attrInstanceIds: ros.IResolvable;

    /**
     * Attribute Instances: The list of managed instances.
     */
    public readonly attrInstances: ros.IResolvable;

    /**
     * Create a new `DATASOURCE::ECS::ManagedInstances`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ManagedInstancesProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosManagedInstances = new RosManagedInstances(this, id,  {
            instanceName: props.instanceName,
            instanceId: props.instanceId,
            osType: props.osType,
            activationId: props.activationId,
            instanceIp: props.instanceIp,
            tags: props.tags,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosManagedInstances;
        this.attrInstanceIds = rosManagedInstances.attrInstanceIds;
        this.attrInstances = rosManagedInstances.attrInstances;
    }
}
