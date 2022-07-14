import * as ros from '@alicloud/ros-cdk-core';
import { RosMonitorGroupInstances } from './cms.generated';
export { RosMonitorGroupInstances as MonitorGroupInstancesProperty };
/**
 * Properties for defining a `ALIYUN::CMS::MonitorGroupInstances`
 */
export interface MonitorGroupInstancesProps {
    /**
     * Property groupId: The ID of the application group.
     */
    readonly groupId: number | ros.IResolvable;
    /**
     * Property instances:
     */
    readonly instances: Array<RosMonitorGroupInstances.InstancesProperty | ros.IResolvable> | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::CMS::MonitorGroupInstances`
 */
export declare class MonitorGroupInstances extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute GroupId: The ID of the application group.
     */
    readonly attrGroupId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::CMS::MonitorGroupInstances`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: MonitorGroupInstancesProps, enableResourcePropertyConstraint?: boolean);
}
