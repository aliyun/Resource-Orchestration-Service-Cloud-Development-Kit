import * as ros from '@alicloud/ros-cdk-core';
import { RosLoginProfile } from './ram.generated';
export { RosLoginProfile as LoginProfileProperty };
/**
 * Properties for defining a `LoginProfile`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-loginprofile
 */
export interface LoginProfileProps {
    /**
     * Property userPrincipalName: The login name of the RAM user.
     */
    readonly userPrincipalName: string | ros.IResolvable;
    /**
     * Property generateRandomPassword: Whether to generate a random password for the RAM user.
     */
    readonly generateRandomPassword?: boolean | ros.IResolvable;
    /**
     * Property mfaBindRequired: Whether to force RAM users to enable multi-factor authentication. Valid values:
     * - true: This is required. RAM users must bind the multifactor authentication device the next time they log in.
     * - false (default) : This is not required.
     */
    readonly mfaBindRequired?: boolean | ros.IResolvable;
    /**
     * Property password: The password of the RAM user.
     */
    readonly password?: string | ros.IResolvable;
    /**
     * Property passwordResetRequired: Whether RAM users must reset their password the next time they log in.
     */
    readonly passwordResetRequired?: boolean | ros.IResolvable;
    /**
     * Property status: Enable or disable console password login. Valid values:
     * - Activate (default): Enable.
     * - Inactivate: Disable.
     */
    readonly status?: string | ros.IResolvable;
}
/**
 * Represents a `LoginProfile`.
 */
export interface ILoginProfile extends ros.IResource {
    readonly props: LoginProfileProps;
    /**
     * Attribute Password: The password of the RAM user.
     */
    readonly attrPassword: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::RAM::LoginProfile`, which is used to create logon configurations for a Resource Access Management (RAM) user.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosLoginProfile`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-loginprofile
 */
export declare class LoginProfile extends ros.Resource implements ILoginProfile {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: LoginProfileProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Password: The password of the RAM user.
     */
    readonly attrPassword: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: LoginProfileProps, enableResourcePropertyConstraint?: boolean);
}
