import * as ros from '@alicloud/ros-cdk-core';
import { RosUser } from './edsuser.generated';
// Generated from the AliCloud ROS Resource Specification
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
     * Property autoLockTime: The date when the account is automatically locked. Format: yyyy-MM-dd HH:mm:ss.
     */
    readonly autoLockTime?: string | ros.IResolvable;

    /**
     * Property businessChannel: The channel.
     */
    readonly businessChannel?: string | ros.IResolvable;

    /**
     * Property email: The email address of the end user. The email address is used to receive notifications about events such as desktop assignment. You must specify an email address or a mobile number to receive notifications.
     */
    readonly email?: string | ros.IResolvable;

    /**
     * Property isLocalAdmin: Whether to set this convenient account as a local administrator.
     */
    readonly isLocalAdmin?: boolean | ros.IResolvable;

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
     * Property passwordExpireDays: The default password is valid indefinitely. This parameter can be used to set a validity period of 30 to 365 days. When the password expires, the end user must change the password before logging in again.
     * 
     * > This feature is currently in invitation-only testing. To try it, submit a ticket to enable it.
     */
    readonly passwordExpireDays?: string | ros.IResolvable;

    /**
     * Property phone: Mobile numbers are not supported on the international site.
     */
    readonly phone?: string | ros.IResolvable;

    /**
     * Property realNickName: The display name of the user.
     */
    readonly realNickName?: string | ros.IResolvable;

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
export class User extends ros.Resource implements IUser {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: UserProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute EndUserId: The name of the end user.
     */
    public readonly attrEndUserId: ros.IResolvable | string;

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
            orgId: props.orgId,
            ownerType: props.ownerType,
            endUserId: props.endUserId,
            email: props.email,
            isLocalAdmin: props.isLocalAdmin,
            phone: props.phone,
            realNickName: props.realNickName,
            autoLockTime: props.autoLockTime,
            businessChannel: props.businessChannel,
            remark: props.remark,
            password: props.password,
            passwordExpireDays: props.passwordExpireDays,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosUser;
        this.attrEndUserId = rosUser.attrEndUserId;
    }
}
