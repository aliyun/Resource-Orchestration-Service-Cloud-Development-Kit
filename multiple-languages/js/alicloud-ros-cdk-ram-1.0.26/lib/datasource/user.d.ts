import * as ros from '@alicloud/ros-cdk-core';
import { RosUser } from './ram.generated';
export { RosUser as UserProperty };
/**
 * Properties for defining a `User`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ram-user
 */
export interface UserProps {
    /**
     * Property userId: RAM user ID. At most one UserName and UserId can be specified; if both are specified, UserName will be used. If neither is specified, the current user ID will be used.
     */
    readonly userId?: string | ros.IResolvable;
    /**
     * Property userName: RAM user name. At most one UserName and UserId can be specified; if both are specified, UserName will be used. If neither is specified, the current user ID will be used.
     */
    readonly userName?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::RAM::User`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosUser`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ram-user
 */
export declare class User extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: UserProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Comments: The comments of the RAM user.
     */
    readonly attrComments: ros.IResolvable;
    /**
     * Attribute DisplayName: The display name of the RAM user.
     */
    readonly attrDisplayName: ros.IResolvable;
    /**
     * Attribute Email: The email address of the RAM user.
     */
    readonly attrEmail: ros.IResolvable;
    /**
     * Attribute MobilePhone: The mobile phone number of the RAM user.
     */
    readonly attrMobilePhone: ros.IResolvable;
    /**
     * Attribute UserId: The ID of the RAM user.
     */
    readonly attrUserId: ros.IResolvable;
    /**
     * Attribute UserName: The name of the RAM user.
     */
    readonly attrUserName: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: UserProps, enableResourcePropertyConstraint?: boolean);
}
