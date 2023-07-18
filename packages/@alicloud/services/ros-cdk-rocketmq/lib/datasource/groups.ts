import * as ros from '@alicloud/ros-cdk-core';
import { RosGroups } from './rocketmq.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosGroups as GroupsProperty };

/**
 * Properties for defining a `DATASOURCE::ROCKETMQ::Groups`
 */
export interface GroupsProps {

    /**
     * Property groupName: GroupName
     */
    readonly groupName?: string | ros.IResolvable;

    /**
     * Property groupType: GroupType
     */
    readonly groupType?: string | ros.IResolvable;

    /**
     * Property instanceId: InstanceId
     */
    readonly instanceId?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `DATASOURCE::ROCKETMQ::Groups`
 */
export class Groups extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute GroupNames: The list of group names.
     */
    public readonly attrGroupNames: ros.IResolvable;

    /**
     * Attribute Groups: The list of groups.
     */
    public readonly attrGroups: ros.IResolvable;

    /**
     * Create a new `DATASOURCE::ROCKETMQ::Groups`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: GroupsProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosGroups = new RosGroups(this, id,  {
            groupName: props.groupName,
            groupType: props.groupType,
            instanceId: props.instanceId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosGroups;
        this.attrGroupNames = rosGroups.attrGroupNames;
        this.attrGroups = rosGroups.attrGroups;
    }
}
