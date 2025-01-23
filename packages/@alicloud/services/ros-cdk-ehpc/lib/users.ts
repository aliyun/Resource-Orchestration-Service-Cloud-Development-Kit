import * as ros from '@alicloud/ros-cdk-core';
import { RosUsers } from './ehpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosUsers as UsersProperty };

/**
 * Properties for defining a `Users`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ehpc-users
 */
export interface UsersProps {

    /**
     * Property clusterId: The cluster ID.
     */
    readonly clusterId: string | ros.IResolvable;

    /**
     * Property users: The information about the users.
     */
    readonly users: Array<RosUsers.UsersProperty | ros.IResolvable> | ros.IResolvable;
}

/**
 * Represents a `Users`.
 */
export interface IUsers extends ros.IResource {
    readonly props: UsersProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::EHPC::Users`, which is used to add one or more users to a specified cluster.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosUsers`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ehpc-users
 */
export class Users extends ros.Resource implements IUsers {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: UsersProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: UsersProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosUsers = new RosUsers(this, id,  {
            clusterId: props.clusterId,
            users: props.users,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosUsers;
    }
}
