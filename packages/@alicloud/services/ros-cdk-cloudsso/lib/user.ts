import * as ros from '@alicloud/ros-cdk-core';
import { RosUser } from './cloudsso.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosUser as UserProperty };

/**
 * Properties for defining a `User`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-user
 */
export interface UserProps {

    /**
     * Property directoryId: The ID of the directory.
     */
    readonly directoryId: string | ros.IResolvable;

    /**
     * Property userName: The name of the user. The name must be unique within the directory. The name cannot be changed.
     * The name can contain numbers, letters, and the following special characters: @_-.
     * The name can be up to 64 characters in length.
     */
    readonly userName: string | ros.IResolvable;

    /**
     * Property description: The description of the user.
     * The description can be up to 1,024 characters in length.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property displayName: The display name of the user.
     * The name can be up to 256 characters in length.
     */
    readonly displayName?: string | ros.IResolvable;

    /**
     * Property email: The email address of the user. The email address must be unique within the directory.
     * The email address can be up to 128 characters in length.
     */
    readonly email?: string | ros.IResolvable;

    /**
     * Property firstName: The first name of the user.
     * The name can be up to 64 characters in length.
     */
    readonly firstName?: string | ros.IResolvable;

    /**
     * Property lastName: The last name of the user.
     * The name can be up to 64 characters in length.
     */
    readonly lastName?: string | ros.IResolvable;

    /**
     * Property status: The status of the user. Valid values:
     * - Enabled: The logon of the user is enabled. This is the default value.
     * - Disabled: The logon of the user is disabled.
     */
    readonly status?: string | ros.IResolvable;
}

/**
 * Represents a `User`.
 */
export interface IUser extends ros.IResource {
    readonly props: UserProps;

    /**
     * Attribute UserId: The ID of the user.
     */
    readonly attrUserId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CloudSSO::User`, which is used to create a user.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosUser`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-user
 */
export class User extends ros.Resource implements IUser {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: UserProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute UserId: The ID of the user.
     */
    public readonly attrUserId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: UserProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosUser = new RosUser(this, id,  {
            status: props.status,
            userName: props.userName,
            directoryId: props.directoryId,
            description: props.description,
            email: props.email,
            firstName: props.firstName,
            displayName: props.displayName,
            lastName: props.lastName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosUser;
        this.attrUserId = rosUser.attrUserId;
    }
}
