import * as ros from '@alicloud/ros-cdk-core';
import { RosMonitorGroupInstances } from './cms.generated';
export { RosMonitorGroupInstances as MonitorGroupInstancesProperty };
/**
 * Properties for defining a `MonitorGroupInstances`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-monitorgroupinstances
 */
export interface MonitorGroupInstancesProps {
    /**
     * Property groupId: The ID of the application group.
     */
    readonly groupId: string | ros.IResolvable;
    /**
     * Property instances:
     */
    readonly instances: Array<RosMonitorGroupInstances.InstancesProperty | ros.IResolvable> | ros.IResolvable;
}
/**
 * Represents a `MonitorGroupInstances`.
 */
export interface IMonitorGroupInstances extends ros.IResource {
    readonly props: MonitorGroupInstancesProps;
    /**
     * Attribute GroupId: The ID of the application group.
     */
    readonly attrGroupId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CMS::MonitorGroupInstances`, which is used to add instances to an application group.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosMonitorGroupInstances`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-monitorgroupinstances
 */
export declare class MonitorGroupInstances extends ros.Resource implements IMonitorGroupInstances {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: MonitorGroupInstancesProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute GroupId: The ID of the application group.
     */
    readonly attrGroupId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: MonitorGroupInstancesProps, enableResourcePropertyConstraint?: boolean);
}
