import * as ros from '@alicloud/ros-cdk-core';
import { RosMonitorGroup } from './cms.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosMonitorGroup as MonitorGroupProperty };

/**
 * Properties for defining a `ALIYUN::CMS::MonitorGroup`
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
 * A ROS resource type:  `ALIYUN::CMS::MonitorGroup`
 */
export class MonitorGroup extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute GroupId: Application group ID generated after the group is created.
     */
    public readonly attrGroupId: ros.IResolvable;

    /**
     * Create a new `ALIYUN::CMS::MonitorGroup`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: MonitorGroupProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosMonitorGroup = new RosMonitorGroup(this, id,  {
            groupName: props.groupName,
            contactGroups: props.contactGroups,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosMonitorGroup;
        this.attrGroupId = rosMonitorGroup.attrGroupId;
    }
}
