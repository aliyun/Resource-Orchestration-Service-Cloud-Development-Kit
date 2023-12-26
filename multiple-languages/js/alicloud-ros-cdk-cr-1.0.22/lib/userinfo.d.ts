import * as ros from '@alicloud/ros-cdk-core';
import { RosUserInfo } from './cr.generated';
export { RosUserInfo as UserInfoProperty };
/**
 * Properties for defining a `UserInfo`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-userinfo
 */
export interface UserInfoProps {
    /**
     * Property user: User info. If user exists, will update user info.
     */
    readonly user: RosUserInfo.UserProperty | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CR::UserInfo`, which is used to create the information about a user.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosUserInfo`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-userinfo
 */
export declare class UserInfo extends ros.Resource {
    /**
     * Attribute LoginName: Login name.
     */
    readonly attrLoginName: ros.IResolvable;
    /**
     * Attribute UserId: User ID.
     */
    readonly attrUserId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: UserInfoProps, enableResourcePropertyConstraint?: boolean);
}
