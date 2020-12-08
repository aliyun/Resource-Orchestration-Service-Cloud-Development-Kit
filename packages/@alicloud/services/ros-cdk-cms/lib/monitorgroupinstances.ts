import * as ros from '@alicloud/ros-cdk-core';
import { RosMonitorGroupInstances } from './cms.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosMonitorGroupInstances as MonitorGroupInstancesProperty };

/**
 * Properties for defining a `ALIYUN::CMS::MonitorGroupInstances`
 */
export interface MonitorGroupInstancesProps {

    /**
     * @Property groupId: The ID of the application group.
     */
    readonly groupId: number;

    /**
     * @Property instances:
     */
    readonly instances: Array<RosMonitorGroupInstances.InstancesProperty | ros.IResolvable> | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::CMS::MonitorGroupInstances`
 */
export class MonitorGroupInstances extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * @Attribute GroupId: The ID of the application group.
     */
    public readonly attrGroupId: any;

    /**
     * Create a new `ALIYUN::CMS::MonitorGroupInstances`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: MonitorGroupInstancesProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosMonitorGroupInstances = new RosMonitorGroupInstances(this, id,  {
            instances: props.instances,
            groupId: props.groupId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosMonitorGroupInstances;
        this.attrGroupId = rosMonitorGroupInstances.attrGroupId;
    }
}
