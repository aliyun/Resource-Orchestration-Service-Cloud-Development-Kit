import * as ros from '@alicloud/ros-cdk-core';
import { RosUsers } from './ram.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosUsers as UsersProperty };

/**
 * Properties for defining a `Users`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ram-users
 */
export interface UsersProps {

    /**
     * Property groupName: The name of group to which users belongs.
     */
    readonly groupName?: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * Property userName: Filter the results by a specific user name. Supports using * and ? to fuzzy match.
     */
    readonly userName?: string | ros.IResolvable;
}

/**
 * Represents a `Users`.
 */
export interface IUsers extends ros.IResource {
    readonly props: UsersProps;

    /**
     * Attribute UserNames: The list of user names.
     */
    readonly attrUserNames: ros.IResolvable | string;

    /**
     * Attribute Users: The list of users.
     */
    readonly attrUsers: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::RAM::Users`, which is used to query the information about Resource Access Management (RAM) users.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosUsers`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ram-users
 */
export class Users extends ros.Resource implements IUsers {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: UsersProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute UserNames: The list of user names.
     */
    public readonly attrUserNames: ros.IResolvable | string;

    /**
     * Attribute Users: The list of users.
     */
    public readonly attrUsers: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: UsersProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosUsers = new RosUsers(this, id,  {
            groupName: props.groupName,
            userName: props.userName,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosUsers;
        this.attrUserNames = rosUsers.attrUserNames;
        this.attrUsers = rosUsers.attrUsers;
    }
}
