import * as ros from '@alicloud/ros-cdk-core';
import { RosUsers } from './ram.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosUsers as UsersProperty };

/**
 * Properties for defining a `DATASOURCE::RAM::Users`
 */
export interface UsersProps {

    /**
     * Property groupName: The name of group to which users belongs.
     */
    readonly groupName?: string | ros.IResolvable;

    /**
     * Property userName: Filter the results by a specific user name. Supports using * and ? to fuzzy match.
     */
    readonly userName?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `DATASOURCE::RAM::Users`
 */
export class Users extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute UserNames: The list of user names.
     */
    public readonly attrUserNames: ros.IResolvable;

    /**
     * Attribute Users: The list of users.
     */
    public readonly attrUsers: ros.IResolvable;

    /**
     * Create a new `DATASOURCE::RAM::Users`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: UsersProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosUsers = new RosUsers(this, id,  {
            groupName: props.groupName,
            userName: props.userName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosUsers;
        this.attrUserNames = rosUsers.attrUserNames;
        this.attrUsers = rosUsers.attrUsers;
    }
}
