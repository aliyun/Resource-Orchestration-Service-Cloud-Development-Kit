import * as ros from '@alicloud/ros-cdk-core';
import { RosUserInfo } from './cr.generated';
export { RosUserInfo as UserInfoProperty };
/**
 * Properties for defining a `ALIYUN::CR::UserInfo`
 */
export interface UserInfoProps {
    /**
     * Property user: User info. If user exists, will update user info.
     */
    readonly user: RosUserInfo.UserProperty | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::CR::UserInfo`
 */
export declare class UserInfo extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute LoginName: Login name.
     */
    readonly attrLoginName: ros.IResolvable;
    /**
     * Attribute UserId: User ID.
     */
    readonly attrUserId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::CR::UserInfo`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: UserInfoProps, enableResourcePropertyConstraint?: boolean);
}
//# sourceMappingURL=userinfo.d.ts.map