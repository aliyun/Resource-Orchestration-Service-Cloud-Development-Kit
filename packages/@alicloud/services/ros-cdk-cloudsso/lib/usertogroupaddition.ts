import * as ros from '@alicloud/ros-cdk-core';
import { RosUserToGroupAddition } from './cloudsso.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosUserToGroupAddition as UserToGroupAdditionProperty };

/**
 * Properties for defining a `UserToGroupAddition`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-usertogroupaddition
 */
export interface UserToGroupAdditionProps {

    /**
     * Property directoryId: The ID of the directory.
     */
    readonly directoryId: string | ros.IResolvable;

    /**
     * Property groupId: The ID of the group.
     */
    readonly groupId: string | ros.IResolvable;

    /**
     * Property userId: The ID of the user.
     */
    readonly userId: string | ros.IResolvable;
}

/**
 * Represents a `UserToGroupAddition`.
 */
export interface IUserToGroupAddition extends ros.IResource {
    readonly props: UserToGroupAdditionProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CloudSSO::UserToGroupAddition`, which is used to add a user to a group.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosUserToGroupAddition`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-usertogroupaddition
 */
export class UserToGroupAddition extends ros.Resource implements IUserToGroupAddition {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: UserToGroupAdditionProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: UserToGroupAdditionProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosUserToGroupAddition = new RosUserToGroupAddition(this, id,  {
            directoryId: props.directoryId,
            userId: props.userId,
            groupId: props.groupId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosUserToGroupAddition;
    }
}
