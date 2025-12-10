import * as ros from '@alicloud/ros-cdk-core';
import { RosUser } from './dms.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosUser as UserProperty };

/**
 * Properties for defining a `User`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dms-user
 */
export interface UserProps {

    /**
     * Property uid: UserAliYunUid
     */
    readonly uid: string | ros.IResolvable;

    /**
     * Property mobile: UserMobile
     */
    readonly mobile?: string | ros.IResolvable;

    /**
     * Property roleNames: UserRole
     */
    readonly roleNames?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property status: UserStatus
     */
    readonly status?: string | ros.IResolvable;

    /**
     * Property tid:
     */
    readonly tid?: string | ros.IResolvable;

    /**
     * Property userName: UserNickName
     */
    readonly userName?: string | ros.IResolvable;
}

/**
 * Represents a `User`.
 */
export interface IUser extends ros.IResource {
    readonly props: UserProps;

    /**
     * Attribute Mobile: UserMobile
     */
    readonly attrMobile: ros.IResolvable | string;

    /**
     * Attribute ParentUid: ParentAliYunUid
     */
    readonly attrParentUid: ros.IResolvable | string;

    /**
     * Attribute RoleIds: UserRoleId
     */
    readonly attrRoleIds: ros.IResolvable | string;

    /**
     * Attribute RoleNames: UserRole
     */
    readonly attrRoleNames: ros.IResolvable | string;

    /**
     * Attribute Uid: UserAliYunUid
     */
    readonly attrUid: ros.IResolvable | string;

    /**
     * Attribute UserId: UserId
     */
    readonly attrUserId: ros.IResolvable | string;

    /**
     * Attribute UserName: UserNickName
     */
    readonly attrUserName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::DMS::User`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosUser`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dms-user
 */
export class User extends ros.Resource implements IUser {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: UserProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Mobile: UserMobile
     */
    public readonly attrMobile: ros.IResolvable | string;

    /**
     * Attribute ParentUid: ParentAliYunUid
     */
    public readonly attrParentUid: ros.IResolvable | string;

    /**
     * Attribute RoleIds: UserRoleId
     */
    public readonly attrRoleIds: ros.IResolvable | string;

    /**
     * Attribute RoleNames: UserRole
     */
    public readonly attrRoleNames: ros.IResolvable | string;

    /**
     * Attribute Uid: UserAliYunUid
     */
    public readonly attrUid: ros.IResolvable | string;

    /**
     * Attribute UserId: UserId
     */
    public readonly attrUserId: ros.IResolvable | string;

    /**
     * Attribute UserName: UserNickName
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
            status: props.status,
            uid: props.uid,
            userName: props.userName,
            roleNames: props.roleNames,
            mobile: props.mobile,
            tid: props.tid,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosUser;
        this.attrMobile = rosUser.attrMobile;
        this.attrParentUid = rosUser.attrParentUid;
        this.attrRoleIds = rosUser.attrRoleIds;
        this.attrRoleNames = rosUser.attrRoleNames;
        this.attrUid = rosUser.attrUid;
        this.attrUserId = rosUser.attrUserId;
        this.attrUserName = rosUser.attrUserName;
    }
}
