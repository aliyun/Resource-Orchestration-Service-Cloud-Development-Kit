import * as ros from '@alicloud/ros-cdk-core';
import { RosUser } from './edsuser.generated';
export { RosUser as UserProperty };
/**
 * Properties for defining a `User`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edsuser-user
 */
export interface UserProps {
    /**
     * Property endUserId: The name of the end user. The name must be 3 to 24 characters in length, and can contain lowercase letters, digits, and underscores (_).
     */
    readonly endUserId: string | ros.IResolvable;
    /**
     * Property email: The email address of the end user. The email address is used to receive notifications about events such as desktop assignment. You must specify an email address or a mobile number to receive notifications.
     */
    readonly email?: string | ros.IResolvable;
    /**
     * Property orgId: The organization to which the end user belongs.
     */
    readonly orgId?: string | ros.IResolvable;
    /**
     * Property ownerType: The type of the account ownership.
     * Enumeration Value:
     * CreateFromManager
     * Normal
     */
    readonly ownerType?: string | ros.IResolvable;
    /**
     * Property password: The initial password. If this parameter is left empty, an email for password reset is sent to the specified email address.
     */
    readonly password?: string | ros.IResolvable;
    /**
     * Property phone: Mobile numbers are not supported on the international site (alibabacloud.com).
     */
    readonly phone?: string | ros.IResolvable;
    /**
     * Property remark: The remarks of the end user.
     */
    readonly remark?: string | ros.IResolvable;
}
/**
 * Represents a `User`.
 */
export interface IUser extends ros.IResource {
    readonly props: UserProps;
    /**
     * Attribute EndUserId: The name of the end user.
     */
    readonly attrEndUserId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::EdsUser::User`, which is used to create a convenience user.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosUser`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edsuser-user
 */
export declare class User extends ros.Resource implements IUser {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: UserProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute EndUserId: The name of the end user.
     */
    readonly attrEndUserId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: UserProps, enableResourcePropertyConstraint?: boolean);
}
