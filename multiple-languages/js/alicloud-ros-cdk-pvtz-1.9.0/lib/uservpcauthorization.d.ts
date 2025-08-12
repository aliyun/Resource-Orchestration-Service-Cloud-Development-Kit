import * as ros from '@alicloud/ros-cdk-core';
import { RosUserVpcAuthorization } from './pvtz.generated';
export { RosUserVpcAuthorization as UserVpcAuthorizationProperty };
/**
 * Properties for defining a `UserVpcAuthorization`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pvtz-uservpcauthorization
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
 * Represents a `UserVpcAuthorization`.
 */
export interface IUserVpcAuthorization extends ros.IResource {
    readonly props: UserVpcAuthorizationProps;
    /**
     * Attribute AuthType: Authorization type.
     */
    readonly attrAuthType: ros.IResolvable | string;
    /**
     * Attribute AuthorizedUserId: The account ID of the user who authorizes the resource.
     */
    readonly attrAuthorizedUserId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::PVTZ::UserVpcAuthorization`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosUserVpcAuthorization`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pvtz-uservpcauthorization
 */
export declare class UserVpcAuthorization extends ros.Resource implements IUserVpcAuthorization {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: UserVpcAuthorizationProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AuthType: Authorization type.
     */
    readonly attrAuthType: ros.IResolvable | string;
    /**
     * Attribute AuthorizedUserId: The account ID of the user who authorizes the resource.
     */
    readonly attrAuthorizedUserId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: UserVpcAuthorizationProps, enableResourcePropertyConstraint?: boolean);
}
