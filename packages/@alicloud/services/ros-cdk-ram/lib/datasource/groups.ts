import * as ros from '@alicloud/ros-cdk-core';
import { RosGroups } from './ram.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosGroups as GroupsProperty };

/**
 * Properties for defining a `Groups`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ram-groups
 */
export interface GroupsProps {

    /**
     * Property groupName: Filter the results by a specific group name. Supports using * and ? to fuzzy match.
     */
    readonly groupName?: string | ros.IResolvable;

    /**
     * Property userName: The specific user which groups contains.
     */
    readonly userName?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::RAM::Groups`, which is used to query Resource Access Management (RAM) user groups.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosGroups`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ram-groups
 */
export class Groups extends ros.Resource {

    /**
     * Attribute GroupNames: The list of group names.
     */
    public readonly attrGroupNames: ros.IResolvable;

    /**
     * Attribute Groups: The list of groups.
     */
    public readonly attrGroups: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: GroupsProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosGroups = new RosGroups(this, id,  {
            groupName: props.groupName,
            userName: props.userName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosGroups;
        this.attrGroupNames = rosGroups.attrGroupNames;
        this.attrGroups = rosGroups.attrGroups;
    }
}
