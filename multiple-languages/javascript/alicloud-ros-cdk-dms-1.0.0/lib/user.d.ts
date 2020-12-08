import * as ros from '@alicloud/ros-cdk-core';
import { RosUser } from './dms.generated';
export { RosUser as UserProperty };
/**
 * Properties for defining a `ALIYUN::DMS::User`
 */
export interface UserProps {
    /**
     * @Property uid: UserAliYunUid
     */
    readonly uid: string;
    /**
     * @Property mobile: UserMobile
     */
    readonly mobile?: string;
    /**
     * @Property roleNames: UserRole
     */
    readonly roleNames?: string[];
    /**
     * @Property status: UserStatus
     */
    readonly status?: string;
    /**
     * @Property tid:
     */
    readonly tid?: string;
    /**
     * @Property userName: UserNickName
     */
    readonly userName?: string;
}
/**
 * A ROS resource type:  `ALIYUN::DMS::User`
 */
export declare class User extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * @Attribute Mobile: UserMobile
     */
    readonly attrMobile: any;
    /**
     * @Attribute ParentUid: ParentAliYunUid
     */
    readonly attrParentUid: any;
    /**
     * @Attribute RoleIds: UserRoleId
     */
    readonly attrRoleIds: any;
    /**
     * @Attribute RoleNames: UserRole
     */
    readonly attrRoleNames: any;
    /**
     * @Attribute Uid: UserAliYunUid
     */
    readonly attrUid: any;
    /**
     * @Attribute UserId: UserId
     */
    readonly attrUserId: any;
    /**
     * @Attribute UserName: UserNickName
     */
    readonly attrUserName: any;
    /**
     * Create a new `ALIYUN::DMS::User`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: UserProps, enableResourcePropertyConstraint?: boolean);
}
