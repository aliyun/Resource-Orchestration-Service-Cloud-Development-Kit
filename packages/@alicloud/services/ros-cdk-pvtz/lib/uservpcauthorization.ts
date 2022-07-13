import * as ros from '@alicloud/ros-cdk-core';
import { RosUserVpcAuthorization } from './pvtz.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosUserVpcAuthorization as UserVpcAuthorizationProperty };

/**
 * Properties for defining a `ALIYUN::PVTZ::UserVpcAuthorization`
 */
export interface UserVpcAuthorizationProps {

    /**
     * Property authorizedUserId: The account ID of the user who authorizes the resource.
     */
    readonly authorizedUserId: string | ros.IResolvable;

    /**
     * Property authChannel: Authorization channel. Valid values:
     * AUTH_CODE: Verification code authorization, to verify whether the verification code passed in by AuthCode is correct.
     * RESOURCE_DIRECTORY: Resource directory authorization, verify whether the AuthorizedUserId and the current account have resource directory credit.When it is empty, it is the same as AUTH_CODE, that is, verification code authorization.
     */
    readonly authChannel?: string | ros.IResolvable;

    /**
     * Property authCode: Verification code, if AuthChannel takes "AUTH_CODE" or is empty, it is mandatory.
     */
    readonly authCode?: string | ros.IResolvable;

    /**
     * Property authType: Authorization type.
     */
    readonly authType?: string | ros.IResolvable;

    /**
     * Property ignoreDeletionForbidden: Whether to ignore following deletion forbidden errors when deleting:- UserAuth.DeleteForbidden.ZoneVpcExists
     */
    readonly ignoreDeletionForbidden?: boolean | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::PVTZ::UserVpcAuthorization`
 */
export class UserVpcAuthorization extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute AuthType: Authorization type.
     */
    public readonly attrAuthType: ros.IResolvable;

    /**
     * Attribute AuthorizedUserId: The account ID of the user who authorizes the resource.
     */
    public readonly attrAuthorizedUserId: ros.IResolvable;

    /**
     * Create a new `ALIYUN::PVTZ::UserVpcAuthorization`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: UserVpcAuthorizationProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosUserVpcAuthorization = new RosUserVpcAuthorization(this, id,  {
            authCode: props.authCode,
            authChannel: props.authChannel,
            authorizedUserId: props.authorizedUserId,
            authType: props.authType,
            ignoreDeletionForbidden: props.ignoreDeletionForbidden === undefined || props.ignoreDeletionForbidden === null ? false : props.ignoreDeletionForbidden,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosUserVpcAuthorization;
        this.attrAuthType = rosUserVpcAuthorization.attrAuthType;
        this.attrAuthorizedUserId = rosUserVpcAuthorization.attrAuthorizedUserId;
    }
}
