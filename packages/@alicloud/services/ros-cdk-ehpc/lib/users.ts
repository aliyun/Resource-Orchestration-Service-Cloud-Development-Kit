import * as ros from '@alicloud/ros-cdk-core';
import { RosUsers } from './ehpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosUsers as UsersProperty };

/**
 * Properties for defining a `ALIYUN::EHPC::Users`
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
 * A ROS resource type:  `ALIYUN::EHPC::Users`
 */
export class Users extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Create a new `ALIYUN::EHPC::Users`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: UsersProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosUsers = new RosUsers(this, id,  {
            clusterId: props.clusterId,
            users: props.users,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosUsers;
    }
}
