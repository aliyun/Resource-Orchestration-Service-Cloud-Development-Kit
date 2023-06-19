import * as ros from '@alicloud/ros-cdk-core';
import { RosUser } from './edsuser.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosUser as UserProperty };

/**
 * Properties for defining a `ALIYUN::EdsUser::User`
 */
export interface UserProps {

    /**
     * Property endUserId: The name of the end user. The name must be 3 to 24 characters in length, and can contain lowercase letters, digits, and underscores (_).
     */
    readonly endUserId: string | ros.IResolvable;

    /**
     * Property email: The email address of the end user. The email address is used to receive notifications about events such as desktop assignment. You must specify an email address or a mobile number to receive notifications.
     */
    readonly email?: string | ros.IResolvable;

    /**
     * Property orgId: The organization to which the end user belongs.
     */
    readonly orgId?: string | ros.IResolvable;

    /**
     * Property ownerType: The type of the account ownership.
     * Enumeration Value:
     * CreateFromManager
     * Normal
     */
    readonly ownerType?: string | ros.IResolvable;

    /**
     * Property password: The initial password. If this parameter is left empty, an email for password reset is sent to the specified email address.
     */
    readonly password?: string | ros.IResolvable;

    /**
     * Property phone: Mobile numbers are not supported on the international site (alibabacloud.com).
     */
    readonly phone?: string | ros.IResolvable;

    /**
     * Property remark: The remarks of the end user.
     */
    readonly remark?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::EdsUser::User`
 */
export class User extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute EndUserId: The name of the end user.
     */
    public readonly attrEndUserId: ros.IResolvable;

    /**
     * Create a new `ALIYUN::EdsUser::User`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: UserProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosUser = new RosUser(this, id,  {
            orgId: props.orgId,
            ownerType: props.ownerType,
            endUserId: props.endUserId,
            email: props.email,
            phone: props.phone,
            remark: props.remark,
            password: props.password,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosUser;
        this.attrEndUserId = rosUser.attrEndUserId;
    }
}
