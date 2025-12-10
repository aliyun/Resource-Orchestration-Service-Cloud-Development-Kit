import * as ros from '@alicloud/ros-cdk-core';
import { RosMonitorGroup } from './cms.generated';
export { RosMonitorGroup as MonitorGroupProperty };
/**
 * Properties for defining a `MonitorGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-monitorgroup
 */
export interface MonitorGroupProps {
    /**
     * Property groupName: The name of the application group.
     */
    readonly groupName: string | ros.IResolvable;
    /**
     * Property contactGroups: The alert contact group. Alert notifications for the application group are sent to
     * the specified alert contact group.
     */
    readonly contactGroups?: string | ros.IResolvable;
}
/**
 * Represents a `MonitorGroup`.
 */
export interface IMonitorGroup extends ros.IResource {
    readonly props: MonitorGroupProps;
    /**
     * Attribute GroupId: Application group ID generated after the group is created.
     */
    readonly attrGroupId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CMS::MonitorGroup`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosMonitorGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-monitorgroup
 */
export declare class MonitorGroup extends ros.Resource implements IMonitorGroup {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: MonitorGroupProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute GroupId: Application group ID generated after the group is created.
     */
    readonly attrGroupId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: MonitorGroupProps, enableResourcePropertyConstraint?: boolean);
}
