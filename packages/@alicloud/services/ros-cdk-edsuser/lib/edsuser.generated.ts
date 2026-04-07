// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosUser`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edsuser-user
 */
export interface RosUserProps {

    /**
     * @Property endUserId: The name of the end user. The name must be 3 to 24 characters in length, and can contain lowercase letters, digits, and underscores (_).
     */
    readonly endUserId: string | ros.IResolvable;

    /**
     * @Property autoLockTime: The date when the account is automatically locked. Format: yyyy-MM-dd HH:mm:ss.
     */
    readonly autoLockTime?: string | ros.IResolvable;

    /**
     * @Property businessChannel: The channel.
     */
    readonly businessChannel?: string | ros.IResolvable;

    /**
     * @Property email: The email address of the end user. The email address is used to receive notifications about events such as desktop assignment. You must specify an email address or a mobile number to receive notifications.
     */
    readonly email?: string | ros.IResolvable;

    /**
     * @Property isLocalAdmin: Whether to set this convenient account as a local administrator.
     */
    readonly isLocalAdmin?: boolean | ros.IResolvable;

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
     * @Property passwordExpireDays: The default password is valid indefinitely. This parameter can be used to set a validity period of 30 to 365 days. When the password expires, the end user must change the password before logging in again.
     * 
     * > This feature is currently in invitation-only testing. To try it, submit a ticket to enable it.
     */
    readonly passwordExpireDays?: string | ros.IResolvable;

    /**
     * @Property phone: Mobile numbers are not supported on the international site.
     */
    readonly phone?: string | ros.IResolvable;

    /**
     * @Property realNickName: The display name of the user.
     */
    readonly realNickName?: string | ros.IResolvable;

    /**
     * @Property remark: The remarks of the end user.
     */
    readonly remark?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosUserProps`
 *
 * @param properties - the TypeScript properties of a `RosUserProps`
 *
 * @returns the result of the validation.
 */
function RosUserPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('orgId', ros.validateString)(properties.orgId));
    if(properties.ownerType && (typeof properties.ownerType) !== 'object') {
        errors.collect(ros.propertyValidator('ownerType', ros.validateAllowedValues)({
          data: properties.ownerType,
          allowedValues: ["Normal","CreateFromManager"],
        }));
    }
    errors.collect(ros.propertyValidator('ownerType', ros.validateString)(properties.ownerType));
    errors.collect(ros.propertyValidator('endUserId', ros.requiredValidator)(properties.endUserId));
    errors.collect(ros.propertyValidator('endUserId', ros.validateString)(properties.endUserId));
    errors.collect(ros.propertyValidator('email', ros.validateString)(properties.email));
    errors.collect(ros.propertyValidator('isLocalAdmin', ros.validateBoolean)(properties.isLocalAdmin));
    errors.collect(ros.propertyValidator('phone', ros.validateString)(properties.phone));
    errors.collect(ros.propertyValidator('realNickName', ros.validateString)(properties.realNickName));
    errors.collect(ros.propertyValidator('autoLockTime', ros.validateString)(properties.autoLockTime));
    errors.collect(ros.propertyValidator('businessChannel', ros.validateString)(properties.businessChannel));
    errors.collect(ros.propertyValidator('remark', ros.validateString)(properties.remark));
    errors.collect(ros.propertyValidator('password', ros.validateString)(properties.password));
    errors.collect(ros.propertyValidator('passwordExpireDays', ros.validateString)(properties.passwordExpireDays));
    return errors.wrap('supplied properties not correct for "RosUserProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EdsUser::User` resource
 *
 * @param properties - the TypeScript properties of a `RosUserProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EdsUser::User` resource.
 */
// @ts-ignore TS6133
function rosUserPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosUserPropsValidator(properties).assertSuccess();
    }
    return {
      'EndUserId': ros.stringToRosTemplate(properties.endUserId),
      'AutoLockTime': ros.stringToRosTemplate(properties.autoLockTime),
      'BusinessChannel': ros.stringToRosTemplate(properties.businessChannel),
      'Email': ros.stringToRosTemplate(properties.email),
      'IsLocalAdmin': ros.booleanToRosTemplate(properties.isLocalAdmin),
      'OrgId': ros.stringToRosTemplate(properties.orgId),
      'OwnerType': ros.stringToRosTemplate(properties.ownerType),
      'Password': ros.stringToRosTemplate(properties.password),
      'PasswordExpireDays': ros.stringToRosTemplate(properties.passwordExpireDays),
      'Phone': ros.stringToRosTemplate(properties.phone),
      'RealNickName': ros.stringToRosTemplate(properties.realNickName),
      'Remark': ros.stringToRosTemplate(properties.remark),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::EdsUser::User`, which is used to create a convenience user.
 * @Note This class does not contain additional functions, so it is recommended to use the `User` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edsuser-user
 */
export class RosUser extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::EdsUser::User";

    /**
     * @Attribute EndUserId: The name of the end user.
     */
    public readonly attrEndUserId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property endUserId: The name of the end user. The name must be 3 to 24 characters in length, and can contain lowercase letters, digits, and underscores (_).
     */
    public endUserId: string | ros.IResolvable;

    /**
     * @Property autoLockTime: The date when the account is automatically locked. Format: yyyy-MM-dd HH:mm:ss.
     */
    public autoLockTime: string | ros.IResolvable | undefined;

    /**
     * @Property businessChannel: The channel.
     */
    public businessChannel: string | ros.IResolvable | undefined;

    /**
     * @Property email: The email address of the end user. The email address is used to receive notifications about events such as desktop assignment. You must specify an email address or a mobile number to receive notifications.
     */
    public email: string | ros.IResolvable | undefined;

    /**
     * @Property isLocalAdmin: Whether to set this convenient account as a local administrator.
     */
    public isLocalAdmin: boolean | ros.IResolvable | undefined;

    /**
     * @Property orgId: The organization to which the end user belongs.
     */
    public orgId: string | ros.IResolvable | undefined;

    /**
     * @Property ownerType: The type of the account ownership.
     * Enumeration Value:
     * CreateFromManager
     * Normal
     */
    public ownerType: string | ros.IResolvable | undefined;

    /**
     * @Property password: The initial password. If this parameter is left empty, an email for password reset is sent to the specified email address.
     */
    public password: string | ros.IResolvable | undefined;

    /**
     * @Property passwordExpireDays: The default password is valid indefinitely. This parameter can be used to set a validity period of 30 to 365 days. When the password expires, the end user must change the password before logging in again.
     * 
     * > This feature is currently in invitation-only testing. To try it, submit a ticket to enable it.
     */
    public passwordExpireDays: string | ros.IResolvable | undefined;

    /**
     * @Property phone: Mobile numbers are not supported on the international site.
     */
    public phone: string | ros.IResolvable | undefined;

    /**
     * @Property realNickName: The display name of the user.
     */
    public realNickName: string | ros.IResolvable | undefined;

    /**
     * @Property remark: The remarks of the end user.
     */
    public remark: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosUserProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosUser.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrEndUserId = this.getAtt('EndUserId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.endUserId = props.endUserId;
        this.autoLockTime = props.autoLockTime;
        this.businessChannel = props.businessChannel;
        this.email = props.email;
        this.isLocalAdmin = props.isLocalAdmin;
        this.orgId = props.orgId;
        this.ownerType = props.ownerType;
        this.password = props.password;
        this.passwordExpireDays = props.passwordExpireDays;
        this.phone = props.phone;
        this.realNickName = props.realNickName;
        this.remark = props.remark;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            endUserId: this.endUserId,
            autoLockTime: this.autoLockTime,
            businessChannel: this.businessChannel,
            email: this.email,
            isLocalAdmin: this.isLocalAdmin,
            orgId: this.orgId,
            ownerType: this.ownerType,
            password: this.password,
            passwordExpireDays: this.passwordExpireDays,
            phone: this.phone,
            realNickName: this.realNickName,
            remark: this.remark,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosUserPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
