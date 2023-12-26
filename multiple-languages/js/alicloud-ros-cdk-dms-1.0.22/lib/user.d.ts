import * as ros from '@alicloud/ros-cdk-core';
import { RosUser } from './dms.generated';
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::DMS::User`, which is used to add a user to Data Management (DMS).
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosUser`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dms-user
 */
export declare class User extends ros.Resource {
    /**
     * Attribute Mobile: UserMobile
     */
    readonly attrMobile: ros.IResolvable;
    /**
     * Attribute ParentUid: ParentAliYunUid
     */
    readonly attrParentUid: ros.IResolvable;
    /**
     * Attribute RoleIds: UserRoleId
     */
    readonly attrRoleIds: ros.IResolvable;
    /**
     * Attribute RoleNames: UserRole
     */
    readonly attrRoleNames: ros.IResolvable;
    /**
     * Attribute Uid: UserAliYunUid
     */
    readonly attrUid: ros.IResolvable;
    /**
     * Attribute UserId: UserId
     */
    readonly attrUserId: ros.IResolvable;
    /**
     * Attribute UserName: UserNickName
     */
    readonly attrUserName: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: UserProps, enableResourcePropertyConstraint?: boolean);
}
