import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::EdsUser::User`
 */
export interface RosUserProps {
    /**
     * @Property endUserId: The name of the end user. The name must be 3 to 24 characters in length, and can contain lowercase letters, digits, and underscores (_).
     */
    readonly endUserId: string | ros.IResolvable;
    /**
     * @Property email: The email address of the end user. The email address is used to receive notifications about events such as desktop assignment. You must specify an email address or a mobile number to receive notifications.
     */
    readonly email?: string | ros.IResolvable;
    /**
     * @Property orgId: The organization to which the end user belongs.
     */
    readonly orgId?: string | ros.IResolvable;
    /**
     * @Property ownerType: The type of the account ownership.
     * Enumeration Value:
     * CreateFromManager
     * Normal
     */
    readonly ownerType?: string | ros.IResolvable;
    /**
     * @Property password: The initial password. If this parameter is left empty, an email for password reset is sent to the specified email address.
     */
    readonly password?: string | ros.IResolvable;
    /**
     * @Property phone: Mobile numbers are not supported on the international site (alibabacloud.com).
     */
    readonly phone?: string | ros.IResolvable;
    /**
     * @Property remark: The remarks of the end user.
     */
    readonly remark?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::EdsUser::User`
 */
export declare class RosUser extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::EdsUser::User";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute EndUserId: The name of the end user.
     */
    readonly attrEndUserId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property endUserId: The name of the end user. The name must be 3 to 24 characters in length, and can contain lowercase letters, digits, and underscores (_).
     */
    endUserId: string | ros.IResolvable;
    /**
     * @Property email: The email address of the end user. The email address is used to receive notifications about events such as desktop assignment. You must specify an email address or a mobile number to receive notifications.
     */
    email: string | ros.IResolvable | undefined;
    /**
     * @Property orgId: The organization to which the end user belongs.
     */
    orgId: string | ros.IResolvable | undefined;
    /**
     * @Property ownerType: The type of the account ownership.
     * Enumeration Value:
     * CreateFromManager
     * Normal
     */
    ownerType: string | ros.IResolvable | undefined;
    /**
     * @Property password: The initial password. If this parameter is left empty, an email for password reset is sent to the specified email address.
     */
    password: string | ros.IResolvable | undefined;
    /**
     * @Property phone: Mobile numbers are not supported on the international site (alibabacloud.com).
     */
    phone: string | ros.IResolvable | undefined;
    /**
     * @Property remark: The remarks of the end user.
     */
    remark: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::EdsUser::User`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosUserProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
