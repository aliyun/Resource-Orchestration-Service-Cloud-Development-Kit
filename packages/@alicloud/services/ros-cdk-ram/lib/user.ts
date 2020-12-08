import * as ros from '@alicloud/ros-cdk-core';
import { RosUser } from './ram.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosUser as UserProperty };

/**
 * Properties for defining a `ALIYUN::RAM::User`
 */
export interface UserProps {

    /**
     * @Property userName: Specifies the user name, containing up to 64 characters.
     */
    readonly userName: string;

    /**
     * @Property comments: Comments of ram user.
     */
    readonly comments?: string;

    /**
     * @Property displayName: Display name, up to 128 characters or Chinese characters.
     */
    readonly displayName?: string;

    /**
     * @Property email: Email of ram user.
     */
    readonly email?: string;

    /**
     * @Property groups: A name of a group to which you want to add the user.
     */
    readonly groups?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property loginProfile: Creates a login profile for users so that they can access the AliCloud Management Console.
     */
    readonly loginProfile?: RosUser.LoginProfileProperty | ros.IResolvable;

    /**
     * @Property mobilePhone: Phone number of ram user.
     */
    readonly mobilePhone?: string;

    /**
     * @Property policies: Describes what actions are allowed on what resources.
     */
    readonly policies?: Array<RosUser.PoliciesProperty | ros.IResolvable> | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::RAM::User`
 */
export class User extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * @Attribute CreateDate: Create date of ram user.
     */
    public readonly attrCreateDate: any;

    /**
     * @Attribute LastLoginDate: Last login date of ram user.
     */
    public readonly attrLastLoginDate: any;

    /**
     * @Attribute UserId: Id of ram user.
     */
    public readonly attrUserId: any;

    /**
     * @Attribute UserName: Name of ram user.
     */
    public readonly attrUserName: any;

    /**
     * Create a new `ALIYUN::RAM::User`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: UserProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosUser = new RosUser(this, id,  {
            userName: props.userName,
            policies: props.policies,
            email: props.email,
            groups: props.groups,
            comments: props.comments,
            displayName: props.displayName,
            loginProfile: props.loginProfile,
            mobilePhone: props.mobilePhone,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosUser;
        this.attrCreateDate = rosUser.attrCreateDate;
        this.attrLastLoginDate = rosUser.attrLastLoginDate;
        this.attrUserId = rosUser.attrUserId;
        this.attrUserName = rosUser.attrUserName;
    }
}
