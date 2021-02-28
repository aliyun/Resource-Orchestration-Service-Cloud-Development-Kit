import * as ros from '@alicloud/ros-cdk-core';
import { RosUser } from './dms.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosUser as UserProperty };

/**
 * Properties for defining a `ALIYUN::DMS::User`
 */
export interface UserProps {

    /**
     * Property uid: UserAliYunUid
     */
    readonly uid: string;

    /**
     * Property mobile: UserMobile
     */
    readonly mobile?: string;

    /**
     * Property roleNames: UserRole
     */
    readonly roleNames?: string[];

    /**
     * Property status: UserStatus
     */
    readonly status?: string;

    /**
     * Property tid:
     */
    readonly tid?: string;

    /**
     * Property userName: UserNickName
     */
    readonly userName?: string;
}

/**
 * A ROS resource type:  `ALIYUN::DMS::User`
 */
export class User extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute Mobile: UserMobile
     */
    public readonly attrMobile: any;

    /**
     * Attribute ParentUid: ParentAliYunUid
     */
    public readonly attrParentUid: any;

    /**
     * Attribute RoleIds: UserRoleId
     */
    public readonly attrRoleIds: any;

    /**
     * Attribute RoleNames: UserRole
     */
    public readonly attrRoleNames: any;

    /**
     * Attribute Uid: UserAliYunUid
     */
    public readonly attrUid: any;

    /**
     * Attribute UserId: UserId
     */
    public readonly attrUserId: any;

    /**
     * Attribute UserName: UserNickName
     */
    public readonly attrUserName: any;

    /**
     * Create a new `ALIYUN::DMS::User`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: UserProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

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
