import * as ros from '@alicloud/ros-cdk-core';
import { RosSecurityPreference } from './ram.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosSecurityPreference as SecurityPreferenceProperty };

/**
 * Properties for defining a `SecurityPreference`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-securitypreference
 */
export interface SecurityPreferenceProps {

    /**
     * Property allowUserToChangePassword: Specifies whether RAM users can change their passwords. Valid values:
     * true: RAM users can change their passwords. This is the default value.
     * false: RAM users cannot change their passwords.
     */
    readonly allowUserToChangePassword?: boolean | ros.IResolvable;

    /**
     * Property allowUserToManageAccessKeys: Specifies whether RAM users can manage their AccessKey pairs. Valid values:
     * true: RAM users can manage their AccessKey pairs.
     * false: RAM users cannot manage their AccessKey pairs. This is the default value.
     */
    readonly allowUserToManageAccessKeys?: boolean | ros.IResolvable;

    /**
     * Property allowUserToManageMfaDevices: Specifies whether RAM users can manage their MFA devices. Valid values:
     * true: RAM users can manage their MFA devices. This is the default value.
     * false: RAM users cannot manage their MFA devices.
     */
    readonly allowUserToManageMfaDevices?: boolean | ros.IResolvable;

    /**
     * Property allowUserToManagePublicKeys: Specifies whether RAM users can manage their public keys. Valid values:
     * true: RAM users can manage their public keys.
     * false: RAM users cannot manage their public keys. This is the default value.
     * Note This parameter is valid only for the Japan site.
     */
    readonly allowUserToManagePublicKeys?: boolean | ros.IResolvable;

    /**
     * Property enableSaveMfaTicket: Specifies whether RAM users can save multi-factor authentication (MFA) security codes
     * during logon. The security codes are valid for 7 days. Valid values:
     * true: RAM users can save MFA security codes during logon.
     * false: RAM users cannot save MFA security codes during logon. This is the default
     * value.
     */
    readonly enableSaveMfaTicket?: boolean | ros.IResolvable;

    /**
     * Property loginNetworkMasks: The subnet mask that specifies the IP addresses from which logon to the console is
     * allowed. This parameter applies to password-based logon and single sign-on (SSO).
     * However, this parameter does not apply to API calls that are authenticated based on
     * AccessKey pairs.
     * If a subnet mask is specified, RAM users can log on to the console only by using the
     * IP addresses in the subnet.
     * If you do not specify a subnet mask, RAM users can log on to the console by using
     * all IP addresses.
     * If you want to specify multiple subnet masks, separate the subnet masks with semicolons
     * (;). Example: 192.168.0.0\/16;10.0.0.0\/8.
     * A maximum of 25 subnet masks can be set. The total length of the subnet masks can
     * be 1 to 512 characters.
     */
    readonly loginNetworkMasks?: string | ros.IResolvable;

    /**
     * Property loginSessionDuration: The validity period of the logon session of the RAM user.
     * Valid values: 6 to 24. Default value: 6. Unit: hours.
     */
    readonly loginSessionDuration?: number | ros.IResolvable;
}

/**
 * Represents a `SecurityPreference`.
 */
export interface ISecurityPreference extends ros.IResource {
    readonly props: SecurityPreferenceProps;

    /**
     * Attribute AllowUserToChangePassword: Specifies whether RAM users can change their passwords.
     */
    readonly attrAllowUserToChangePassword: ros.IResolvable | string;

    /**
     * Attribute AllowUserToManageAccessKeys: Specifies whether RAM users can manage their AccessKey pairs.
     */
    readonly attrAllowUserToManageAccessKeys: ros.IResolvable | string;

    /**
     * Attribute AllowUserToManageMFADevices: Specifies whether RAM users can manage their MFA devices.
     */
    readonly attrAllowUserToManageMfaDevices: ros.IResolvable | string;

    /**
     * Attribute AllowUserToManagePublicKeys: Specifies whether RAM users can manage their public keys.
     */
    readonly attrAllowUserToManagePublicKeys: ros.IResolvable | string;

    /**
     * Attribute EnableSaveMFATicket: Specifies whether RAM users can save multi-factor authentication (MFA) security codes during logon.
     */
    readonly attrEnableSaveMfaTicket: ros.IResolvable | string;

    /**
     * Attribute LoginNetworkMasks: The subnet mask that specifies the IP addresses from which logon to the console is allowed.
     */
    readonly attrLoginNetworkMasks: ros.IResolvable | string;

    /**
     * Attribute LoginSessionDuration: The validity period of the logon session of the RAM user.
     */
    readonly attrLoginSessionDuration: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::RAM::SecurityPreference`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSecurityPreference`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-securitypreference
 */
export class SecurityPreference extends ros.Resource implements ISecurityPreference {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: SecurityPreferenceProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AllowUserToChangePassword: Specifies whether RAM users can change their passwords.
     */
    public readonly attrAllowUserToChangePassword: ros.IResolvable | string;

    /**
     * Attribute AllowUserToManageAccessKeys: Specifies whether RAM users can manage their AccessKey pairs.
     */
    public readonly attrAllowUserToManageAccessKeys: ros.IResolvable | string;

    /**
     * Attribute AllowUserToManageMFADevices: Specifies whether RAM users can manage their MFA devices.
     */
    public readonly attrAllowUserToManageMfaDevices: ros.IResolvable | string;

    /**
     * Attribute AllowUserToManagePublicKeys: Specifies whether RAM users can manage their public keys.
     */
    public readonly attrAllowUserToManagePublicKeys: ros.IResolvable | string;

    /**
     * Attribute EnableSaveMFATicket: Specifies whether RAM users can save multi-factor authentication (MFA) security codes during logon.
     */
    public readonly attrEnableSaveMfaTicket: ros.IResolvable | string;

    /**
     * Attribute LoginNetworkMasks: The subnet mask that specifies the IP addresses from which logon to the console is allowed.
     */
    public readonly attrLoginNetworkMasks: ros.IResolvable | string;

    /**
     * Attribute LoginSessionDuration: The validity period of the logon session of the RAM user.
     */
    public readonly attrLoginSessionDuration: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SecurityPreferenceProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosSecurityPreference = new RosSecurityPreference(this, id,  {
            loginSessionDuration: props.loginSessionDuration,
            allowUserToManageMfaDevices: props.allowUserToManageMfaDevices,
            allowUserToManagePublicKeys: props.allowUserToManagePublicKeys,
            loginNetworkMasks: props.loginNetworkMasks,
            allowUserToChangePassword: props.allowUserToChangePassword,
            allowUserToManageAccessKeys: props.allowUserToManageAccessKeys,
            enableSaveMfaTicket: props.enableSaveMfaTicket,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSecurityPreference;
        this.attrAllowUserToChangePassword = rosSecurityPreference.attrAllowUserToChangePassword;
        this.attrAllowUserToManageAccessKeys = rosSecurityPreference.attrAllowUserToManageAccessKeys;
        this.attrAllowUserToManageMfaDevices = rosSecurityPreference.attrAllowUserToManageMfaDevices;
        this.attrAllowUserToManagePublicKeys = rosSecurityPreference.attrAllowUserToManagePublicKeys;
        this.attrEnableSaveMfaTicket = rosSecurityPreference.attrEnableSaveMfaTicket;
        this.attrLoginNetworkMasks = rosSecurityPreference.attrLoginNetworkMasks;
        this.attrLoginSessionDuration = rosSecurityPreference.attrLoginSessionDuration;
    }
}
