import * as ros from '@alicloud/ros-cdk-core';
import { RosUser } from './ram.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosUser as UserProperty };

/**
 * Properties for defining a `User`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-user
 */
export interface UserProps {

    /**
     * Property userName: Specifies the user name, containing up to 64 characters.
     */
    readonly userName: string | ros.IResolvable;

    /**
     * Property comments: Comments of ram user.
     */
    readonly comments?: string | ros.IResolvable;

    /**
     * Property deletionForce: Whether force detach the policies and groups attached to the user. Default value is false.
     */
    readonly deletionForce?: boolean | ros.IResolvable;

    /**
     * Property displayName: Display name, up to 128 characters or Chinese characters.
     */
    readonly displayName?: string | ros.IResolvable;

    /**
     * Property email: Email of ram user.
     */
    readonly email?: string | ros.IResolvable;

    /**
     * Property groups: A name of a group to which you want to add the user.
     */
    readonly groups?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * Property loginProfile: Creates a login profile for users so that they can access the AliCloud Management Console.
     */
    readonly loginProfile?: RosUser.LoginProfileProperty | ros.IResolvable;

    /**
     * Property mobilePhone: Phone number of ram user.
     */
    readonly mobilePhone?: string | ros.IResolvable;

    /**
     * Property policies: Describes what actions are allowed on what resources.
     */
    readonly policies?: Array<RosUser.PoliciesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property policyAttachments: System and custom policy names to attach.
     */
    readonly policyAttachments?: RosUser.PolicyAttachmentsProperty | ros.IResolvable;
}

/**
 * Represents a `User`.
 */
export interface IUser extends ros.IResource {
    readonly props: UserProps;

    /**
     * Attribute CreateDate: Create date of ram user.
     */
    readonly attrCreateDate: ros.IResolvable | string;

    /**
     * Attribute LastLoginDate: Last login date of ram user.
     */
    readonly attrLastLoginDate: ros.IResolvable | string;

    /**
     * Attribute UserId: Id of ram user.
     */
    readonly attrUserId: ros.IResolvable | string;

    /**
     * Attribute UserName: Name of ram user.
     */
    readonly attrUserName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::RAM::User`, which is used to create a Resource Access Management (RAM) user.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosUser`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-user
 */
export class User extends ros.Resource implements IUser {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: UserProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CreateDate: Create date of ram user.
     */
    public readonly attrCreateDate: ros.IResolvable | string;

    /**
     * Attribute LastLoginDate: Last login date of ram user.
     */
    public readonly attrLastLoginDate: ros.IResolvable | string;

    /**
     * Attribute UserId: Id of ram user.
     */
    public readonly attrUserId: ros.IResolvable | string;

    /**
     * Attribute UserName: Name of ram user.
     */
    public readonly attrUserName: ros.IResolvable | string;

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
            userName: props.userName,
            policies: props.policies,
            email: props.email,
            deletionForce: props.deletionForce === undefined || props.deletionForce === null ? false : props.deletionForce,
            policyAttachments: props.policyAttachments,
            comments: props.comments,
            groups: props.groups,
            displayName: props.displayName,
            loginProfile: props.loginProfile,
            mobilePhone: props.mobilePhone,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosUser;
        this.attrCreateDate = rosUser.attrCreateDate;
        this.attrLastLoginDate = rosUser.attrLastLoginDate;
        this.attrUserId = rosUser.attrUserId;
        this.attrUserName = rosUser.attrUserName;
    }
}
