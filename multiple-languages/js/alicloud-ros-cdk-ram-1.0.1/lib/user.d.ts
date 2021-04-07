import * as ros from '@alicloud/ros-cdk-core';
import { RosUser } from './ram.generated';
export { RosUser as UserProperty };
/**
 * Properties for defining a `ALIYUN::RAM::User`
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
}
/**
 * A ROS resource type:  `ALIYUN::RAM::User`
 */
export declare class User extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute CreateDate: Create date of ram user.
     */
    readonly attrCreateDate: ros.IResolvable;
    /**
     * Attribute LastLoginDate: Last login date of ram user.
     */
    readonly attrLastLoginDate: ros.IResolvable;
    /**
     * Attribute UserId: Id of ram user.
     */
    readonly attrUserId: ros.IResolvable;
    /**
     * Attribute UserName: Name of ram user.
     */
    readonly attrUserName: ros.IResolvable;
    /**
     * Create a new `ALIYUN::RAM::User`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: UserProps, enableResourcePropertyConstraint?: boolean);
}
