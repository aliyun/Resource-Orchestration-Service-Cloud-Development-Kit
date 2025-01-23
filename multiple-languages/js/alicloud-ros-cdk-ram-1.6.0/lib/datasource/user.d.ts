import * as ros from '@alicloud/ros-cdk-core';
import { RosUser } from './ram.generated';
export { RosUser as UserProperty };
/**
 * Properties for defining a `User`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ram-user
 */
export interface UserProps {
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
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
 * Represents a `User`.
 */
export interface IUser extends ros.IResource {
    readonly props: UserProps;
    /**
     * Attribute Comments: The comments of the RAM user.
     */
    readonly attrComments: ros.IResolvable | string;
    /**
     * Attribute DisplayName: The display name of the RAM user.
     */
    readonly attrDisplayName: ros.IResolvable | string;
    /**
     * Attribute Email: The email address of the RAM user.
     */
    readonly attrEmail: ros.IResolvable | string;
    /**
     * Attribute MobilePhone: The mobile phone number of the RAM user.
     */
    readonly attrMobilePhone: ros.IResolvable | string;
    /**
     * Attribute UserId: The ID of the RAM user.
     */
    readonly attrUserId: ros.IResolvable | string;
    /**
     * Attribute UserName: The name of the RAM user.
     */
    readonly attrUserName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::RAM::User`, which is used to query the information about a Resource Access Management (RAM) user.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosUser`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ram-user
 */
export declare class User extends ros.Resource implements IUser {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: UserProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Comments: The comments of the RAM user.
     */
    readonly attrComments: ros.IResolvable | string;
    /**
     * Attribute DisplayName: The display name of the RAM user.
     */
    readonly attrDisplayName: ros.IResolvable | string;
    /**
     * Attribute Email: The email address of the RAM user.
     */
    readonly attrEmail: ros.IResolvable | string;
    /**
     * Attribute MobilePhone: The mobile phone number of the RAM user.
     */
    readonly attrMobilePhone: ros.IResolvable | string;
    /**
     * Attribute UserId: The ID of the RAM user.
     */
    readonly attrUserId: ros.IResolvable | string;
    /**
     * Attribute UserName: The name of the RAM user.
     */
    readonly attrUserName: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: UserProps, enableResourcePropertyConstraint?: boolean);
}
