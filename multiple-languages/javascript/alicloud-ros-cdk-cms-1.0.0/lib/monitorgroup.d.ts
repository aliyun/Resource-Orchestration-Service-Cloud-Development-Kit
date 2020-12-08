import * as ros from '@alicloud/ros-cdk-core';
import { RosMonitorGroup } from './cms.generated';
export { RosMonitorGroup as MonitorGroupProperty };
/**
 * Properties for defining a `ALIYUN::CMS::MonitorGroup`
 */
export interface MonitorGroupProps {
    /**
     * @Property groupName: The name of the application group.
     */
    readonly groupName: string;
    /**
     * @Property contactGroups: The alert contact group. Alert notifications for the application group are sent to
     * the specified alert contact group.
     */
    readonly contactGroups?: string;
}
/**
 * A ROS resource type:  `ALIYUN::CMS::MonitorGroup`
 */
export declare class MonitorGroup extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * @Attribute GroupId: Application group ID generated after the group is created.
     */
    readonly attrGroupId: any;
    /**
     * Create a new `ALIYUN::CMS::MonitorGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: MonitorGroupProps, enableResourcePropertyConstraint?: boolean);
}
