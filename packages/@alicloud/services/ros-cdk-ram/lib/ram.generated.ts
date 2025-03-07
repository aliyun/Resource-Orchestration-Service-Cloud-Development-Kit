// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosAccessKey`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-accesskey
 */
export interface RosAccessKeyProps {

    /**
     * @Property userName: Specifies the user name, containing up to 64 characters.
     */
    readonly userName: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAccessKeyProps`
 *
 * @param properties - the TypeScript properties of a `RosAccessKeyProps`
 *
 * @returns the result of the validation.
 */
function RosAccessKeyPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('userName', ros.requiredValidator)(properties.userName));
    errors.collect(ros.propertyValidator('userName', ros.validateString)(properties.userName));
    return errors.wrap('supplied properties not correct for "RosAccessKeyProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RAM::AccessKey` resource
 *
 * @param properties - the TypeScript properties of a `RosAccessKeyProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RAM::AccessKey` resource.
 */
// @ts-ignore TS6133
function rosAccessKeyPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAccessKeyPropsValidator(properties).assertSuccess();
    }
    return {
      'UserName': ros.stringToRosTemplate(properties.userName),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::RAM::AccessKey`.
 * @Note This class does not contain additional functions, so it is recommended to use the `AccessKey` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-accesskey
 */
export class RosAccessKey extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RAM::AccessKey";

    /**
     * @Attribute AccessKeyId: Id of access key.
     */
    public readonly attrAccessKeyId: ros.IResolvable;

    /**
     * @Attribute AccessKeySecret: Secret of access key.
     */
    public readonly attrAccessKeySecret: ros.IResolvable;

    /**
     * @Attribute Status: Status of access key.
     */
    public readonly attrStatus: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property userName: Specifies the user name, containing up to 64 characters.
     */
    public userName: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAccessKeyProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAccessKey.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAccessKeyId = this.getAtt('AccessKeyId');
        this.attrAccessKeySecret = this.getAtt('AccessKeySecret');
        this.attrStatus = this.getAtt('Status');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.userName = props.userName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            userName: this.userName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAccessKeyPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosAppSecret`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-appsecret
 */
export interface RosAppSecretProps {

    /**
     * @Property appId: The ID of the application.
     */
    readonly appId: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAppSecretProps`
 *
 * @param properties - the TypeScript properties of a `RosAppSecretProps`
 *
 * @returns the result of the validation.
 */
function RosAppSecretPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('appId', ros.requiredValidator)(properties.appId));
    errors.collect(ros.propertyValidator('appId', ros.validateString)(properties.appId));
    return errors.wrap('supplied properties not correct for "RosAppSecretProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RAM::AppSecret` resource
 *
 * @param properties - the TypeScript properties of a `RosAppSecretProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RAM::AppSecret` resource.
 */
// @ts-ignore TS6133
function rosAppSecretPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAppSecretPropsValidator(properties).assertSuccess();
    }
    return {
      'AppId': ros.stringToRosTemplate(properties.appId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::RAM::AppSecret`.
 * @Note This class does not contain additional functions, so it is recommended to use the `AppSecret` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-appsecret
 */
export class RosAppSecret extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RAM::AppSecret";

    /**
     * @Attribute AppSecretId: The ID of the application secret.
     */
    public readonly attrAppSecretId: ros.IResolvable;

    /**
     * @Attribute AppSecretValue: The content of the application secret. This value can be used as the client secret for open authorization.
     */
    public readonly attrAppSecretValue: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property appId: The ID of the application.
     */
    public appId: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAppSecretProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAppSecret.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAppSecretId = this.getAtt('AppSecretId');
        this.attrAppSecretValue = this.getAtt('AppSecretValue');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.appId = props.appId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            appId: this.appId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAppSecretPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosApplication`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-application
 */
export interface RosApplicationProps {

    /**
     * @Property appName: The name of the application. The name can be up to 64 characters in length. The name can contain letters, digits, periods (.), underscores (_), and hyphens (-).
     */
    readonly appName: string | ros.IResolvable;

    /**
     * @Property appType: The type of the application. Valid values:
     * - **WebApp**: a web application that interacts with a browser.
     * - **NativeApp**: a native application that runs on an operating system, such as a desktop operating system or a mobile operating system.
     * - **ServerApp**: an application that accesses Alibaba Cloud services without the need of manual user logon. User provisioning is automated based on the System for Cross-Domain Identity Management (SCIM) protocol.
     */
    readonly appType: string | ros.IResolvable;

    /**
     * @Property displayName: The display name of the application. The name can be up to 24 characters in length.
     */
    readonly displayName: string | ros.IResolvable;

    /**
     * @Property accessTokenValidity: The validity period of the access token.
     * Valid values: 900 to 10800. Unit: seconds.
     * Default value: 3600.
     */
    readonly accessTokenValidity?: number | ros.IResolvable;

    /**
     * @Property isMultiTenant: Indicates whether the application can be installed by using other Alibaba Cloud accounts. Valid values:
     * - **true**: If you do not set this parameter for applications of the NativeApp and ServerApp types, true is used.
     * - **false**: If you do not set this parameter for applications of the WebApp type, false is used.
     */
    readonly isMultiTenant?: boolean | ros.IResolvable;

    /**
     * @Property predefinedScopes: List of the scopes of application permissions.
     */
    readonly predefinedScopes?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property redirectUris: List of the callback URLs.
     */
    readonly redirectUris?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property refreshTokenValidity: The validity period of the refreshed token.
     * Valid values: 7200 to 31536000. Unit: seconds.
     * Default value:
     * - For applications of the WebApp and ServerApp types, if this parameter is left empty, the value 2592000 is used. The value 2592000 indicates that the validity period of the refreshed token is 30 days.
     * - For applications of the NativeApp type, if this parameter is left empty, the value 7776000 is used. The value 7776000 indicates that the validity period of the refreshed token is 90 days.
     */
    readonly refreshTokenValidity?: number | ros.IResolvable;

    /**
     * @Property requiredScopes: Required scope of application permissions. You can set one or more of the scopes set in the **PredefinedScopes** to be required, so that when a user authorizes the application, the required scopes are selected by default and cannot be canceled.
     * **Notes**: If you set a **RequiredScopes** entry that is not within the scope of **PredefinedScopes**, the required range will not take effect.
     */
    readonly requiredScopes?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property secretRequired: Indicates whether a secret is required. Valid values: **true** and **false**.
     * **Note**:
     * - For applications of the WebApp and ServerApp types, this parameter is automatically set to **true** and cannot be changed.
     * - For applications of the NativeApp type, this parameter can be set to true or false. If you do not set this parameter, false is used. Applications of the NativeApp type run in untrusted environments and the secrets of these applications are not protected. Therefore, we recommend that you do not set this parameter to true unless otherwise specified.
     */
    readonly secretRequired?: boolean | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosApplicationProps`
 *
 * @param properties - the TypeScript properties of a `RosApplicationProps`
 *
 * @returns the result of the validation.
 */
function RosApplicationPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('predefinedScopes', ros.listValidator(ros.validateString))(properties.predefinedScopes));
    errors.collect(ros.propertyValidator('secretRequired', ros.validateBoolean)(properties.secretRequired));
    errors.collect(ros.propertyValidator('displayName', ros.requiredValidator)(properties.displayName));
    if(properties.displayName && (Array.isArray(properties.displayName) || (typeof properties.displayName) === 'string')) {
        errors.collect(ros.propertyValidator('displayName', ros.validateLength)({
            data: properties.displayName.length,
            min: undefined,
            max: 24,
          }));
    }
    errors.collect(ros.propertyValidator('displayName', ros.validateString)(properties.displayName));
    errors.collect(ros.propertyValidator('isMultiTenant', ros.validateBoolean)(properties.isMultiTenant));
    if(properties.accessTokenValidity && (typeof properties.accessTokenValidity) !== 'object') {
        errors.collect(ros.propertyValidator('accessTokenValidity', ros.validateRange)({
            data: properties.accessTokenValidity,
            min: 900,
            max: 10800,
          }));
    }
    errors.collect(ros.propertyValidator('accessTokenValidity', ros.validateNumber)(properties.accessTokenValidity));
    errors.collect(ros.propertyValidator('redirectUris', ros.listValidator(ros.validateString))(properties.redirectUris));
    if(properties.refreshTokenValidity && (typeof properties.refreshTokenValidity) !== 'object') {
        errors.collect(ros.propertyValidator('refreshTokenValidity', ros.validateRange)({
            data: properties.refreshTokenValidity,
            min: 7200,
            max: 31536000,
          }));
    }
    errors.collect(ros.propertyValidator('refreshTokenValidity', ros.validateNumber)(properties.refreshTokenValidity));
    errors.collect(ros.propertyValidator('appType', ros.requiredValidator)(properties.appType));
    errors.collect(ros.propertyValidator('appType', ros.validateString)(properties.appType));
    errors.collect(ros.propertyValidator('requiredScopes', ros.listValidator(ros.validateString))(properties.requiredScopes));
    errors.collect(ros.propertyValidator('appName', ros.requiredValidator)(properties.appName));
    if(properties.appName && (typeof properties.appName) !== 'object') {
        errors.collect(ros.propertyValidator('appName', ros.validateAllowedPattern)({
          data: properties.appName,
          reg: /^[-_.a-zA-Z0-9]{1,64}$/
        }));
    }
    errors.collect(ros.propertyValidator('appName', ros.validateString)(properties.appName));
    return errors.wrap('supplied properties not correct for "RosApplicationProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RAM::Application` resource
 *
 * @param properties - the TypeScript properties of a `RosApplicationProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RAM::Application` resource.
 */
// @ts-ignore TS6133
function rosApplicationPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosApplicationPropsValidator(properties).assertSuccess();
    }
    return {
      'AppName': ros.stringToRosTemplate(properties.appName),
      'AppType': ros.stringToRosTemplate(properties.appType),
      'DisplayName': ros.stringToRosTemplate(properties.displayName),
      'AccessTokenValidity': ros.numberToRosTemplate(properties.accessTokenValidity),
      'IsMultiTenant': ros.booleanToRosTemplate(properties.isMultiTenant),
      'PredefinedScopes': ros.listMapper(ros.stringToRosTemplate)(properties.predefinedScopes),
      'RedirectUris': ros.listMapper(ros.stringToRosTemplate)(properties.redirectUris),
      'RefreshTokenValidity': ros.numberToRosTemplate(properties.refreshTokenValidity),
      'RequiredScopes': ros.listMapper(ros.stringToRosTemplate)(properties.requiredScopes),
      'SecretRequired': ros.booleanToRosTemplate(properties.secretRequired),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::RAM::Application`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Application` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-application
 */
export class RosApplication extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RAM::Application";

    /**
     * @Attribute AppId: The ID of the application.
     */
    public readonly attrAppId: ros.IResolvable;

    /**
     * @Attribute AppName: The name of the application.
     */
    public readonly attrAppName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property appName: The name of the application. The name can be up to 64 characters in length. The name can contain letters, digits, periods (.), underscores (_), and hyphens (-).
     */
    public appName: string | ros.IResolvable;

    /**
     * @Property appType: The type of the application. Valid values:
     * - **WebApp**: a web application that interacts with a browser.
     * - **NativeApp**: a native application that runs on an operating system, such as a desktop operating system or a mobile operating system.
     * - **ServerApp**: an application that accesses Alibaba Cloud services without the need of manual user logon. User provisioning is automated based on the System for Cross-Domain Identity Management (SCIM) protocol.
     */
    public appType: string | ros.IResolvable;

    /**
     * @Property displayName: The display name of the application. The name can be up to 24 characters in length.
     */
    public displayName: string | ros.IResolvable;

    /**
     * @Property accessTokenValidity: The validity period of the access token.
     * Valid values: 900 to 10800. Unit: seconds.
     * Default value: 3600.
     */
    public accessTokenValidity: number | ros.IResolvable | undefined;

    /**
     * @Property isMultiTenant: Indicates whether the application can be installed by using other Alibaba Cloud accounts. Valid values:
     * - **true**: If you do not set this parameter for applications of the NativeApp and ServerApp types, true is used.
     * - **false**: If you do not set this parameter for applications of the WebApp type, false is used.
     */
    public isMultiTenant: boolean | ros.IResolvable | undefined;

    /**
     * @Property predefinedScopes: List of the scopes of application permissions.
     */
    public predefinedScopes: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property redirectUris: List of the callback URLs.
     */
    public redirectUris: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property refreshTokenValidity: The validity period of the refreshed token.
     * Valid values: 7200 to 31536000. Unit: seconds.
     * Default value:
     * - For applications of the WebApp and ServerApp types, if this parameter is left empty, the value 2592000 is used. The value 2592000 indicates that the validity period of the refreshed token is 30 days.
     * - For applications of the NativeApp type, if this parameter is left empty, the value 7776000 is used. The value 7776000 indicates that the validity period of the refreshed token is 90 days.
     */
    public refreshTokenValidity: number | ros.IResolvable | undefined;

    /**
     * @Property requiredScopes: Required scope of application permissions. You can set one or more of the scopes set in the **PredefinedScopes** to be required, so that when a user authorizes the application, the required scopes are selected by default and cannot be canceled.
     * **Notes**: If you set a **RequiredScopes** entry that is not within the scope of **PredefinedScopes**, the required range will not take effect.
     */
    public requiredScopes: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property secretRequired: Indicates whether a secret is required. Valid values: **true** and **false**.
     * **Note**:
     * - For applications of the WebApp and ServerApp types, this parameter is automatically set to **true** and cannot be changed.
     * - For applications of the NativeApp type, this parameter can be set to true or false. If you do not set this parameter, false is used. Applications of the NativeApp type run in untrusted environments and the secrets of these applications are not protected. Therefore, we recommend that you do not set this parameter to true unless otherwise specified.
     */
    public secretRequired: boolean | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosApplicationProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosApplication.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAppId = this.getAtt('AppId');
        this.attrAppName = this.getAtt('AppName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.appName = props.appName;
        this.appType = props.appType;
        this.displayName = props.displayName;
        this.accessTokenValidity = props.accessTokenValidity;
        this.isMultiTenant = props.isMultiTenant;
        this.predefinedScopes = props.predefinedScopes;
        this.redirectUris = props.redirectUris;
        this.refreshTokenValidity = props.refreshTokenValidity;
        this.requiredScopes = props.requiredScopes;
        this.secretRequired = props.secretRequired;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            appName: this.appName,
            appType: this.appType,
            displayName: this.displayName,
            accessTokenValidity: this.accessTokenValidity,
            isMultiTenant: this.isMultiTenant,
            predefinedScopes: this.predefinedScopes,
            redirectUris: this.redirectUris,
            refreshTokenValidity: this.refreshTokenValidity,
            requiredScopes: this.requiredScopes,
            secretRequired: this.secretRequired,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosApplicationPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosAttachPolicyToGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-attachpolicytogroup
 */
export interface RosAttachPolicyToGroupProps {

    /**
     * @Property groupName: User group name.
     */
    readonly groupName: string | ros.IResolvable;

    /**
     * @Property policyName: Authorization policy name.
     */
    readonly policyName: string | ros.IResolvable;

    /**
     * @Property policyType: Authorization policy type. Value: "System" or "Custom".
     */
    readonly policyType: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAttachPolicyToGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosAttachPolicyToGroupProps`
 *
 * @returns the result of the validation.
 */
function RosAttachPolicyToGroupPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('groupName', ros.requiredValidator)(properties.groupName));
    errors.collect(ros.propertyValidator('groupName', ros.validateString)(properties.groupName));
    errors.collect(ros.propertyValidator('policyType', ros.requiredValidator)(properties.policyType));
    if(properties.policyType && (typeof properties.policyType) !== 'object') {
        errors.collect(ros.propertyValidator('policyType', ros.validateAllowedValues)({
          data: properties.policyType,
          allowedValues: ["Custom","System"],
        }));
    }
    errors.collect(ros.propertyValidator('policyType', ros.validateString)(properties.policyType));
    errors.collect(ros.propertyValidator('policyName', ros.requiredValidator)(properties.policyName));
    errors.collect(ros.propertyValidator('policyName', ros.validateString)(properties.policyName));
    return errors.wrap('supplied properties not correct for "RosAttachPolicyToGroupProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RAM::AttachPolicyToGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosAttachPolicyToGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RAM::AttachPolicyToGroup` resource.
 */
// @ts-ignore TS6133
function rosAttachPolicyToGroupPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAttachPolicyToGroupPropsValidator(properties).assertSuccess();
    }
    return {
      'GroupName': ros.stringToRosTemplate(properties.groupName),
      'PolicyName': ros.stringToRosTemplate(properties.policyName),
      'PolicyType': ros.stringToRosTemplate(properties.policyType),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::RAM::AttachPolicyToGroup`.
 * @Note This class does not contain additional functions, so it is recommended to use the `AttachPolicyToGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-attachpolicytogroup
 */
export class RosAttachPolicyToGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RAM::AttachPolicyToGroup";

    /**
     * @Attribute GroupName: User group name.
     */
    public readonly attrGroupName: ros.IResolvable;

    /**
     * @Attribute PolicyName: Authorization policy name.
     */
    public readonly attrPolicyName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property groupName: User group name.
     */
    public groupName: string | ros.IResolvable;

    /**
     * @Property policyName: Authorization policy name.
     */
    public policyName: string | ros.IResolvable;

    /**
     * @Property policyType: Authorization policy type. Value: "System" or "Custom".
     */
    public policyType: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAttachPolicyToGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAttachPolicyToGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrGroupName = this.getAtt('GroupName');
        this.attrPolicyName = this.getAtt('PolicyName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.groupName = props.groupName;
        this.policyName = props.policyName;
        this.policyType = props.policyType;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            groupName: this.groupName,
            policyName: this.policyName,
            policyType: this.policyType,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAttachPolicyToGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosAttachPolicyToRole`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-attachpolicytorole
 */
export interface RosAttachPolicyToRoleProps {

    /**
     * @Property policyName: Authorization policy name.
     */
    readonly policyName: string | ros.IResolvable;

    /**
     * @Property policyType: Authorization policy type. Value: "System" or "Custom".
     */
    readonly policyType: string | ros.IResolvable;

    /**
     * @Property roleName: Role name.Example: dev.
     */
    readonly roleName: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAttachPolicyToRoleProps`
 *
 * @param properties - the TypeScript properties of a `RosAttachPolicyToRoleProps`
 *
 * @returns the result of the validation.
 */
function RosAttachPolicyToRolePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('policyType', ros.requiredValidator)(properties.policyType));
    if(properties.policyType && (typeof properties.policyType) !== 'object') {
        errors.collect(ros.propertyValidator('policyType', ros.validateAllowedValues)({
          data: properties.policyType,
          allowedValues: ["System","Custom"],
        }));
    }
    errors.collect(ros.propertyValidator('policyType', ros.validateString)(properties.policyType));
    errors.collect(ros.propertyValidator('roleName', ros.requiredValidator)(properties.roleName));
    errors.collect(ros.propertyValidator('roleName', ros.validateString)(properties.roleName));
    errors.collect(ros.propertyValidator('policyName', ros.requiredValidator)(properties.policyName));
    errors.collect(ros.propertyValidator('policyName', ros.validateString)(properties.policyName));
    return errors.wrap('supplied properties not correct for "RosAttachPolicyToRoleProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RAM::AttachPolicyToRole` resource
 *
 * @param properties - the TypeScript properties of a `RosAttachPolicyToRoleProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RAM::AttachPolicyToRole` resource.
 */
// @ts-ignore TS6133
function rosAttachPolicyToRolePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAttachPolicyToRolePropsValidator(properties).assertSuccess();
    }
    return {
      'PolicyName': ros.stringToRosTemplate(properties.policyName),
      'PolicyType': ros.stringToRosTemplate(properties.policyType),
      'RoleName': ros.stringToRosTemplate(properties.roleName),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::RAM::AttachPolicyToRole`.
 * @Note This class does not contain additional functions, so it is recommended to use the `AttachPolicyToRole` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-attachpolicytorole
 */
export class RosAttachPolicyToRole extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RAM::AttachPolicyToRole";

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property policyName: Authorization policy name.
     */
    public policyName: string | ros.IResolvable;

    /**
     * @Property policyType: Authorization policy type. Value: "System" or "Custom".
     */
    public policyType: string | ros.IResolvable;

    /**
     * @Property roleName: Role name.Example: dev.
     */
    public roleName: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAttachPolicyToRoleProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAttachPolicyToRole.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.policyName = props.policyName;
        this.policyType = props.policyType;
        this.roleName = props.roleName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            policyName: this.policyName,
            policyType: this.policyType,
            roleName: this.roleName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAttachPolicyToRolePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosAttachPolicyToUser`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-attachpolicytouser
 */
export interface RosAttachPolicyToUserProps {

    /**
     * @Property policyName: Authorization policy name.
     */
    readonly policyName: string | ros.IResolvable;

    /**
     * @Property policyType: Authorization policy type. Value: "System" or "Custom".
     */
    readonly policyType: string | ros.IResolvable;

    /**
     * @Property userName: User name.Example: dev.
     */
    readonly userName: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAttachPolicyToUserProps`
 *
 * @param properties - the TypeScript properties of a `RosAttachPolicyToUserProps`
 *
 * @returns the result of the validation.
 */
function RosAttachPolicyToUserPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('policyType', ros.requiredValidator)(properties.policyType));
    if(properties.policyType && (typeof properties.policyType) !== 'object') {
        errors.collect(ros.propertyValidator('policyType', ros.validateAllowedValues)({
          data: properties.policyType,
          allowedValues: ["System","Custom"],
        }));
    }
    errors.collect(ros.propertyValidator('policyType', ros.validateString)(properties.policyType));
    errors.collect(ros.propertyValidator('userName', ros.requiredValidator)(properties.userName));
    errors.collect(ros.propertyValidator('userName', ros.validateString)(properties.userName));
    errors.collect(ros.propertyValidator('policyName', ros.requiredValidator)(properties.policyName));
    errors.collect(ros.propertyValidator('policyName', ros.validateString)(properties.policyName));
    return errors.wrap('supplied properties not correct for "RosAttachPolicyToUserProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RAM::AttachPolicyToUser` resource
 *
 * @param properties - the TypeScript properties of a `RosAttachPolicyToUserProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RAM::AttachPolicyToUser` resource.
 */
// @ts-ignore TS6133
function rosAttachPolicyToUserPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAttachPolicyToUserPropsValidator(properties).assertSuccess();
    }
    return {
      'PolicyName': ros.stringToRosTemplate(properties.policyName),
      'PolicyType': ros.stringToRosTemplate(properties.policyType),
      'UserName': ros.stringToRosTemplate(properties.userName),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::RAM::AttachPolicyToUser`.
 * @Note This class does not contain additional functions, so it is recommended to use the `AttachPolicyToUser` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-attachpolicytouser
 */
export class RosAttachPolicyToUser extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RAM::AttachPolicyToUser";

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property policyName: Authorization policy name.
     */
    public policyName: string | ros.IResolvable;

    /**
     * @Property policyType: Authorization policy type. Value: "System" or "Custom".
     */
    public policyType: string | ros.IResolvable;

    /**
     * @Property userName: User name.Example: dev.
     */
    public userName: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAttachPolicyToUserProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAttachPolicyToUser.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.policyName = props.policyName;
        this.policyType = props.policyType;
        this.userName = props.userName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            policyName: this.policyName,
            policyType: this.policyType,
            userName: this.userName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAttachPolicyToUserPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-group
 */
export interface RosGroupProps {

    /**
     * @Property groupName: Specifies the group name, containing up to 64 characters.
     */
    readonly groupName: string | ros.IResolvable;

    /**
     * @Property comments: Remark information, up to 128 characters or Chinese characters.
     */
    readonly comments?: string | ros.IResolvable;

    /**
     * @Property deletionForce: Whether force detach the policies attached to the group. Default value is false.
     */
    readonly deletionForce?: boolean | ros.IResolvable;

    /**
     * @Property ignoreExisting: Whether to ignore existing group
     * False: ROS will perform a uniqueness check.If a group with the same name exists, an error will be reported when creating it.
     * True: ROS will not check the uniqueness.If there is a group with the same name, the group creation process will be ignored.
     * If the group is not created by ROS, it will be ignored during update and delete stage.
     */
    readonly ignoreExisting?: boolean | ros.IResolvable;

    /**
     * @Property policies: Describes what actions are allowed on what resources.
     */
    readonly policies?: Array<RosGroup.PoliciesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property policyAttachments: System and custom policy names to attach.
     */
    readonly policyAttachments?: RosGroup.PolicyAttachmentsProperty | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosGroupProps`
 *
 * @returns the result of the validation.
 */
function RosGroupPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('groupName', ros.requiredValidator)(properties.groupName));
    errors.collect(ros.propertyValidator('groupName', ros.validateString)(properties.groupName));
    errors.collect(ros.propertyValidator('ignoreExisting', ros.validateBoolean)(properties.ignoreExisting));
    errors.collect(ros.propertyValidator('policyAttachments', RosGroup_PolicyAttachmentsPropertyValidator)(properties.policyAttachments));
    errors.collect(ros.propertyValidator('policies', ros.listValidator(RosGroup_PoliciesPropertyValidator))(properties.policies));
    errors.collect(ros.propertyValidator('deletionForce', ros.validateBoolean)(properties.deletionForce));
    if(properties.comments && (Array.isArray(properties.comments) || (typeof properties.comments) === 'string')) {
        errors.collect(ros.propertyValidator('comments', ros.validateLength)({
            data: properties.comments.length,
            min: undefined,
            max: 128,
          }));
    }
    errors.collect(ros.propertyValidator('comments', ros.validateString)(properties.comments));
    return errors.wrap('supplied properties not correct for "RosGroupProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RAM::Group` resource
 *
 * @param properties - the TypeScript properties of a `RosGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RAM::Group` resource.
 */
// @ts-ignore TS6133
function rosGroupPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosGroupPropsValidator(properties).assertSuccess();
    }
    return {
      'GroupName': ros.stringToRosTemplate(properties.groupName),
      'Comments': ros.stringToRosTemplate(properties.comments),
      'DeletionForce': ros.booleanToRosTemplate(properties.deletionForce),
      'IgnoreExisting': ros.booleanToRosTemplate(properties.ignoreExisting),
      'Policies': ros.listMapper(rosGroupPoliciesPropertyToRosTemplate)(properties.policies),
      'PolicyAttachments': rosGroupPolicyAttachmentsPropertyToRosTemplate(properties.policyAttachments),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::RAM::Group`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Group` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-group
 */
export class RosGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RAM::Group";

    /**
     * @Attribute GroupName: Id of ram group.
     */
    public readonly attrGroupName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property groupName: Specifies the group name, containing up to 64 characters.
     */
    public groupName: string | ros.IResolvable;

    /**
     * @Property comments: Remark information, up to 128 characters or Chinese characters.
     */
    public comments: string | ros.IResolvable | undefined;

    /**
     * @Property deletionForce: Whether force detach the policies attached to the group. Default value is false.
     */
    public deletionForce: boolean | ros.IResolvable | undefined;

    /**
     * @Property ignoreExisting: Whether to ignore existing group
     * False: ROS will perform a uniqueness check.If a group with the same name exists, an error will be reported when creating it.
     * True: ROS will not check the uniqueness.If there is a group with the same name, the group creation process will be ignored.
     * If the group is not created by ROS, it will be ignored during update and delete stage.
     */
    public ignoreExisting: boolean | ros.IResolvable | undefined;

    /**
     * @Property policies: Describes what actions are allowed on what resources.
     */
    public policies: Array<RosGroup.PoliciesProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property policyAttachments: System and custom policy names to attach.
     */
    public policyAttachments: RosGroup.PolicyAttachmentsProperty | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrGroupName = this.getAtt('GroupName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.groupName = props.groupName;
        this.comments = props.comments;
        this.deletionForce = props.deletionForce;
        this.ignoreExisting = props.ignoreExisting;
        this.policies = props.policies;
        this.policyAttachments = props.policyAttachments;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            groupName: this.groupName,
            comments: this.comments,
            deletionForce: this.deletionForce,
            ignoreExisting: this.ignoreExisting,
            policies: this.policies,
            policyAttachments: this.policyAttachments,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosGroup {
    /**
     * @stability external
     */
    export interface PoliciesProperty {
        /**
         * @Property ignoreExisting: Whether to ignore existing policy
     * False: ROS will perform a uniqueness check.If a policy with the same name exists, an error will be reported when creating it.
     * True: ROS will not check the uniqueness.If there is a policy with the same name, the policy creation process will be ignored.
     * If the policy is not created by ROS, it will be ignored during update and delete stage.
         */
        readonly ignoreExisting?: boolean | ros.IResolvable;
        /**
         * @Property description: Specifies the authorization policy description, containing up to 1024 characters.
         */
        readonly description?: string | ros.IResolvable;
        /**
         * @Property policyName: Specifies the authorization policy name, containing up to 128 characters.
         */
        readonly policyName: string | ros.IResolvable;
        /**
         * @Property policyDocument: A policy document that describes what actions are allowed on which resources.
         */
        readonly policyDocument: RosGroup.PolicyDocumentProperty | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `PoliciesProperty`
 *
 * @param properties - the TypeScript properties of a `PoliciesProperty`
 *
 * @returns the result of the validation.
 */
function RosGroup_PoliciesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('ignoreExisting', ros.validateBoolean)(properties.ignoreExisting));
    if(properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: undefined,
            max: 1024,
          }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('policyName', ros.requiredValidator)(properties.policyName));
    if(properties.policyName && (Array.isArray(properties.policyName) || (typeof properties.policyName) === 'string')) {
        errors.collect(ros.propertyValidator('policyName', ros.validateLength)({
            data: properties.policyName.length,
            min: undefined,
            max: 128,
          }));
    }
    errors.collect(ros.propertyValidator('policyName', ros.validateString)(properties.policyName));
    errors.collect(ros.propertyValidator('policyDocument', ros.requiredValidator)(properties.policyDocument));
    errors.collect(ros.propertyValidator('policyDocument', RosGroup_PolicyDocumentPropertyValidator)(properties.policyDocument));
    return errors.wrap('supplied properties not correct for "PoliciesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RAM::Group.Policies` resource
 *
 * @param properties - the TypeScript properties of a `PoliciesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RAM::Group.Policies` resource.
 */
// @ts-ignore TS6133
function rosGroupPoliciesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosGroup_PoliciesPropertyValidator(properties).assertSuccess();
    return {
      'IgnoreExisting': ros.booleanToRosTemplate(properties.ignoreExisting),
      'Description': ros.stringToRosTemplate(properties.description),
      'PolicyName': ros.stringToRosTemplate(properties.policyName),
      'PolicyDocument': rosGroupPolicyDocumentPropertyToRosTemplate(properties.policyDocument),
    };
}

export namespace RosGroup {
    /**
     * @stability external
     */
    export interface PolicyAttachmentsProperty {
        /**
         * @Property custom: undefined
         */
        readonly custom?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property system: undefined
         */
        readonly system?: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `PolicyAttachmentsProperty`
 *
 * @param properties - the TypeScript properties of a `PolicyAttachmentsProperty`
 *
 * @returns the result of the validation.
 */
function RosGroup_PolicyAttachmentsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.custom && (Array.isArray(properties.custom) || (typeof properties.custom) === 'string')) {
        errors.collect(ros.propertyValidator('custom', ros.validateLength)({
            data: properties.custom.length,
            min: undefined,
            max: 5,
          }));
    }
    errors.collect(ros.propertyValidator('custom', ros.listValidator(ros.validateString))(properties.custom));
    if(properties.system && (Array.isArray(properties.system) || (typeof properties.system) === 'string')) {
        errors.collect(ros.propertyValidator('system', ros.validateLength)({
            data: properties.system.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('system', ros.listValidator(ros.validateString))(properties.system));
    return errors.wrap('supplied properties not correct for "PolicyAttachmentsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RAM::Group.PolicyAttachments` resource
 *
 * @param properties - the TypeScript properties of a `PolicyAttachmentsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RAM::Group.PolicyAttachments` resource.
 */
// @ts-ignore TS6133
function rosGroupPolicyAttachmentsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosGroup_PolicyAttachmentsPropertyValidator(properties).assertSuccess();
    return {
      'Custom': ros.listMapper(ros.stringToRosTemplate)(properties.custom),
      'System': ros.listMapper(ros.stringToRosTemplate)(properties.system),
    };
}

export namespace RosGroup {
    /**
     * @stability external
     */
    export interface PolicyDocumentProperty {
        /**
         * @Property version: You can use versions to track changes to a managed policy.
         */
        readonly version: string | ros.IResolvable;
        /**
         * @Property statement: A policy consists of one or more statements.
         */
        readonly statement: Array<RosGroup.StatementProperty | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `PolicyDocumentProperty`
 *
 * @param properties - the TypeScript properties of a `PolicyDocumentProperty`
 *
 * @returns the result of the validation.
 */
function RosGroup_PolicyDocumentPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('version', ros.requiredValidator)(properties.version));
    errors.collect(ros.propertyValidator('version', ros.validateString)(properties.version));
    errors.collect(ros.propertyValidator('statement', ros.requiredValidator)(properties.statement));
    errors.collect(ros.propertyValidator('statement', ros.listValidator(RosGroup_StatementPropertyValidator))(properties.statement));
    return errors.wrap('supplied properties not correct for "PolicyDocumentProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RAM::Group.PolicyDocument` resource
 *
 * @param properties - the TypeScript properties of a `PolicyDocumentProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RAM::Group.PolicyDocument` resource.
 */
// @ts-ignore TS6133
function rosGroupPolicyDocumentPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosGroup_PolicyDocumentPropertyValidator(properties).assertSuccess();
    return {
      'Version': ros.stringToRosTemplate(properties.version),
      'Statement': ros.listMapper(rosGroupStatementPropertyToRosTemplate)(properties.statement),
    };
}

export namespace RosGroup {
    /**
     * @stability external
     */
    export interface StatementProperty {
        /**
         * @Property condition: What conditions should be satisfied.
         */
        readonly condition?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
        /**
         * @Property action: What actions you will allow.
         */
        readonly action?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property resource: Which resources you allow the action on.
         */
        readonly resource?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property effect: What the effect will be when the user requests access-either allow or deny.
         */
        readonly effect?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `StatementProperty`
 *
 * @param properties - the TypeScript properties of a `StatementProperty`
 *
 * @returns the result of the validation.
 */
function RosGroup_StatementPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('condition', ros.hashValidator(ros.validateAny))(properties.condition));
    errors.collect(ros.propertyValidator('action', ros.listValidator(ros.validateAny))(properties.action));
    errors.collect(ros.propertyValidator('resource', ros.listValidator(ros.validateAny))(properties.resource));
    errors.collect(ros.propertyValidator('effect', ros.validateString)(properties.effect));
    return errors.wrap('supplied properties not correct for "StatementProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RAM::Group.Statement` resource
 *
 * @param properties - the TypeScript properties of a `StatementProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RAM::Group.Statement` resource.
 */
// @ts-ignore TS6133
function rosGroupStatementPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosGroup_StatementPropertyValidator(properties).assertSuccess();
    return {
      'Condition': ros.hashMapper(ros.objectToRosTemplate)(properties.condition),
      'Action': ros.listMapper(ros.objectToRosTemplate)(properties.action),
      'Resource': ros.listMapper(ros.objectToRosTemplate)(properties.resource),
      'Effect': ros.stringToRosTemplate(properties.effect),
    };
}

/**
 * Properties for defining a `RosLoginProfile`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-loginprofile
 */
export interface RosLoginProfileProps {

    /**
     * @Property userPrincipalName: The login name of the RAM user.
     */
    readonly userPrincipalName: string | ros.IResolvable;

    /**
     * @Property generateRandomPassword: Whether to generate a random password for the RAM user.
     */
    readonly generateRandomPassword?: boolean | ros.IResolvable;

    /**
     * @Property mfaBindRequired: Whether to force RAM users to enable multi-factor authentication. Valid values:
     * - true: This is required. RAM users must bind the multifactor authentication device the next time they log in.
     * - false (default) : This is not required.
     */
    readonly mfaBindRequired?: boolean | ros.IResolvable;

    /**
     * @Property password: The password of the RAM user.
     */
    readonly password?: string | ros.IResolvable;

    /**
     * @Property passwordResetRequired: Whether RAM users must reset their password the next time they log in.
     */
    readonly passwordResetRequired?: boolean | ros.IResolvable;

    /**
     * @Property status: Enable or disable console password login. Valid values:
     * - Activate (default): Enable.
     * - Inactivate: Disable.
     */
    readonly status?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosLoginProfileProps`
 *
 * @param properties - the TypeScript properties of a `RosLoginProfileProps`
 *
 * @returns the result of the validation.
 */
function RosLoginProfilePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.status && (typeof properties.status) !== 'object') {
        errors.collect(ros.propertyValidator('status', ros.validateAllowedValues)({
          data: properties.status,
          allowedValues: ["Activate","Inactivate"],
        }));
    }
    errors.collect(ros.propertyValidator('status', ros.validateString)(properties.status));
    errors.collect(ros.propertyValidator('passwordResetRequired', ros.validateBoolean)(properties.passwordResetRequired));
    errors.collect(ros.propertyValidator('userPrincipalName', ros.requiredValidator)(properties.userPrincipalName));
    errors.collect(ros.propertyValidator('userPrincipalName', ros.validateString)(properties.userPrincipalName));
    errors.collect(ros.propertyValidator('generateRandomPassword', ros.validateBoolean)(properties.generateRandomPassword));
    errors.collect(ros.propertyValidator('mfaBindRequired', ros.validateBoolean)(properties.mfaBindRequired));
    errors.collect(ros.propertyValidator('password', ros.validateString)(properties.password));
    return errors.wrap('supplied properties not correct for "RosLoginProfileProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RAM::LoginProfile` resource
 *
 * @param properties - the TypeScript properties of a `RosLoginProfileProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RAM::LoginProfile` resource.
 */
// @ts-ignore TS6133
function rosLoginProfilePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosLoginProfilePropsValidator(properties).assertSuccess();
    }
    return {
      'UserPrincipalName': ros.stringToRosTemplate(properties.userPrincipalName),
      'GenerateRandomPassword': ros.booleanToRosTemplate(properties.generateRandomPassword),
      'MFABindRequired': ros.booleanToRosTemplate(properties.mfaBindRequired),
      'Password': ros.stringToRosTemplate(properties.password),
      'PasswordResetRequired': ros.booleanToRosTemplate(properties.passwordResetRequired),
      'Status': ros.stringToRosTemplate(properties.status),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::RAM::LoginProfile`.
 * @Note This class does not contain additional functions, so it is recommended to use the `LoginProfile` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-loginprofile
 */
export class RosLoginProfile extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RAM::LoginProfile";

    /**
     * @Attribute Password: The password of the RAM user.
     */
    public readonly attrPassword: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property userPrincipalName: The login name of the RAM user.
     */
    public userPrincipalName: string | ros.IResolvable;

    /**
     * @Property generateRandomPassword: Whether to generate a random password for the RAM user.
     */
    public generateRandomPassword: boolean | ros.IResolvable | undefined;

    /**
     * @Property mfaBindRequired: Whether to force RAM users to enable multi-factor authentication. Valid values:
     * - true: This is required. RAM users must bind the multifactor authentication device the next time they log in.
     * - false (default) : This is not required.
     */
    public mfaBindRequired: boolean | ros.IResolvable | undefined;

    /**
     * @Property password: The password of the RAM user.
     */
    public password: string | ros.IResolvable | undefined;

    /**
     * @Property passwordResetRequired: Whether RAM users must reset their password the next time they log in.
     */
    public passwordResetRequired: boolean | ros.IResolvable | undefined;

    /**
     * @Property status: Enable or disable console password login. Valid values:
     * - Activate (default): Enable.
     * - Inactivate: Disable.
     */
    public status: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosLoginProfileProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosLoginProfile.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrPassword = this.getAtt('Password');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.userPrincipalName = props.userPrincipalName;
        this.generateRandomPassword = props.generateRandomPassword;
        this.mfaBindRequired = props.mfaBindRequired;
        this.password = props.password;
        this.passwordResetRequired = props.passwordResetRequired;
        this.status = props.status;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            userPrincipalName: this.userPrincipalName,
            generateRandomPassword: this.generateRandomPassword,
            mfaBindRequired: this.mfaBindRequired,
            password: this.password,
            passwordResetRequired: this.passwordResetRequired,
            status: this.status,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosLoginProfilePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosManagedPolicy`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-managedpolicy
 */
export interface RosManagedPolicyProps {

    /**
     * @Property policyName: Specifies the authorization policy name, containing up to 128 characters.
     */
    readonly policyName: string | ros.IResolvable;

    /**
     * @Property description: Specifies the authorization policy description, containing up to 1024 characters.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property groups: The names of groups to attach to this policy.
     */
    readonly groups?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property ignoreExisting: Whether to ignore existing policy
     * False: ROS will perform a uniqueness check.If a policy with the same name exists, an error will be reported when creating it.
     * True: ROS will not check the uniqueness.If there is a policy with the same name, the policy creation process will be ignored.
     * If the policy is not created by ROS, it will be ignored during update and delete stage.
     */
    readonly ignoreExisting?: boolean | ros.IResolvable;

    /**
     * @Property policyDocument: A policy document that describes what actions are allowed on which resources.
     */
    readonly policyDocument?: RosManagedPolicy.PolicyDocumentProperty | ros.IResolvable;

    /**
     * @Property policyDocumentUnchecked: A policy document that describes what actions are allowed on which resources. If it is specified, PolicyDocument will be ignored.
     */
    readonly policyDocumentUnchecked?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property roles: The names of roles to attach to this policy.
     */
    readonly roles?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property users: The names of users to attach to this policy.
     */
    readonly users?: Array<any | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosManagedPolicyProps`
 *
 * @param properties - the TypeScript properties of a `RosManagedPolicyProps`
 *
 * @returns the result of the validation.
 */
function RosManagedPolicyPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('ignoreExisting', ros.validateBoolean)(properties.ignoreExisting));
    if(properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: undefined,
            max: 1024,
          }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('groups', ros.listValidator(ros.validateAny))(properties.groups));
    errors.collect(ros.propertyValidator('policyName', ros.requiredValidator)(properties.policyName));
    if(properties.policyName && (Array.isArray(properties.policyName) || (typeof properties.policyName) === 'string')) {
        errors.collect(ros.propertyValidator('policyName', ros.validateLength)({
            data: properties.policyName.length,
            min: undefined,
            max: 128,
          }));
    }
    errors.collect(ros.propertyValidator('policyName', ros.validateString)(properties.policyName));
    errors.collect(ros.propertyValidator('policyDocumentUnchecked', ros.hashValidator(ros.validateAny))(properties.policyDocumentUnchecked));
    errors.collect(ros.propertyValidator('policyDocument', RosManagedPolicy_PolicyDocumentPropertyValidator)(properties.policyDocument));
    errors.collect(ros.propertyValidator('roles', ros.listValidator(ros.validateAny))(properties.roles));
    errors.collect(ros.propertyValidator('users', ros.listValidator(ros.validateAny))(properties.users));
    return errors.wrap('supplied properties not correct for "RosManagedPolicyProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RAM::ManagedPolicy` resource
 *
 * @param properties - the TypeScript properties of a `RosManagedPolicyProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RAM::ManagedPolicy` resource.
 */
// @ts-ignore TS6133
function rosManagedPolicyPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosManagedPolicyPropsValidator(properties).assertSuccess();
    }
    return {
      'PolicyName': ros.stringToRosTemplate(properties.policyName),
      'Description': ros.stringToRosTemplate(properties.description),
      'Groups': ros.listMapper(ros.objectToRosTemplate)(properties.groups),
      'IgnoreExisting': ros.booleanToRosTemplate(properties.ignoreExisting),
      'PolicyDocument': rosManagedPolicyPolicyDocumentPropertyToRosTemplate(properties.policyDocument),
      'PolicyDocumentUnchecked': ros.hashMapper(ros.objectToRosTemplate)(properties.policyDocumentUnchecked),
      'Roles': ros.listMapper(ros.objectToRosTemplate)(properties.roles),
      'Users': ros.listMapper(ros.objectToRosTemplate)(properties.users),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::RAM::ManagedPolicy`, which is used to create a Resource Access Management (RAM) policy.
 * @Note This class does not contain additional functions, so it is recommended to use the `ManagedPolicy` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-managedpolicy
 */
export class RosManagedPolicy extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RAM::ManagedPolicy";

    /**
     * @Attribute PolicyName: When the logical ID of this resource is provided to the Ref intrinsic function, Ref returns the ARN.
     */
    public readonly attrPolicyName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property policyName: Specifies the authorization policy name, containing up to 128 characters.
     */
    public policyName: string | ros.IResolvable;

    /**
     * @Property description: Specifies the authorization policy description, containing up to 1024 characters.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property groups: The names of groups to attach to this policy.
     */
    public groups: Array<any | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property ignoreExisting: Whether to ignore existing policy
     * False: ROS will perform a uniqueness check.If a policy with the same name exists, an error will be reported when creating it.
     * True: ROS will not check the uniqueness.If there is a policy with the same name, the policy creation process will be ignored.
     * If the policy is not created by ROS, it will be ignored during update and delete stage.
     */
    public ignoreExisting: boolean | ros.IResolvable | undefined;

    /**
     * @Property policyDocument: A policy document that describes what actions are allowed on which resources.
     */
    public policyDocument: RosManagedPolicy.PolicyDocumentProperty | ros.IResolvable | undefined;

    /**
     * @Property policyDocumentUnchecked: A policy document that describes what actions are allowed on which resources. If it is specified, PolicyDocument will be ignored.
     */
    public policyDocumentUnchecked: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @Property roles: The names of roles to attach to this policy.
     */
    public roles: Array<any | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property users: The names of users to attach to this policy.
     */
    public users: Array<any | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosManagedPolicyProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosManagedPolicy.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrPolicyName = this.getAtt('PolicyName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.policyName = props.policyName;
        this.description = props.description;
        this.groups = props.groups;
        this.ignoreExisting = props.ignoreExisting;
        this.policyDocument = props.policyDocument;
        this.policyDocumentUnchecked = props.policyDocumentUnchecked;
        this.roles = props.roles;
        this.users = props.users;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            policyName: this.policyName,
            description: this.description,
            groups: this.groups,
            ignoreExisting: this.ignoreExisting,
            policyDocument: this.policyDocument,
            policyDocumentUnchecked: this.policyDocumentUnchecked,
            roles: this.roles,
            users: this.users,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosManagedPolicyPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosManagedPolicy {
    /**
     * @stability external
     */
    export interface PolicyDocumentProperty {
        /**
         * @Property version: You can use versions to track changes to a managed policy.
         */
        readonly version: string | ros.IResolvable;
        /**
         * @Property statement: A policy consists of one or more statements.
         */
        readonly statement: Array<RosManagedPolicy.StatementProperty | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `PolicyDocumentProperty`
 *
 * @param properties - the TypeScript properties of a `PolicyDocumentProperty`
 *
 * @returns the result of the validation.
 */
function RosManagedPolicy_PolicyDocumentPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('version', ros.requiredValidator)(properties.version));
    errors.collect(ros.propertyValidator('version', ros.validateString)(properties.version));
    errors.collect(ros.propertyValidator('statement', ros.requiredValidator)(properties.statement));
    errors.collect(ros.propertyValidator('statement', ros.listValidator(RosManagedPolicy_StatementPropertyValidator))(properties.statement));
    return errors.wrap('supplied properties not correct for "PolicyDocumentProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RAM::ManagedPolicy.PolicyDocument` resource
 *
 * @param properties - the TypeScript properties of a `PolicyDocumentProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RAM::ManagedPolicy.PolicyDocument` resource.
 */
// @ts-ignore TS6133
function rosManagedPolicyPolicyDocumentPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosManagedPolicy_PolicyDocumentPropertyValidator(properties).assertSuccess();
    return {
      'Version': ros.stringToRosTemplate(properties.version),
      'Statement': ros.listMapper(rosManagedPolicyStatementPropertyToRosTemplate)(properties.statement),
    };
}

export namespace RosManagedPolicy {
    /**
     * @stability external
     */
    export interface StatementProperty {
        /**
         * @Property condition: What conditions should be satisfied.
         */
        readonly condition?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
        /**
         * @Property action: What actions you will allow.
         */
        readonly action?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property resource: Which resources you allow the action on.
         */
        readonly resource?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property effect: What the effect will be when the user requests access-either allow or deny.
         */
        readonly effect?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `StatementProperty`
 *
 * @param properties - the TypeScript properties of a `StatementProperty`
 *
 * @returns the result of the validation.
 */
function RosManagedPolicy_StatementPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('condition', ros.hashValidator(ros.validateAny))(properties.condition));
    errors.collect(ros.propertyValidator('action', ros.listValidator(ros.validateAny))(properties.action));
    errors.collect(ros.propertyValidator('resource', ros.listValidator(ros.validateAny))(properties.resource));
    errors.collect(ros.propertyValidator('effect', ros.validateString)(properties.effect));
    return errors.wrap('supplied properties not correct for "StatementProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RAM::ManagedPolicy.Statement` resource
 *
 * @param properties - the TypeScript properties of a `StatementProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RAM::ManagedPolicy.Statement` resource.
 */
// @ts-ignore TS6133
function rosManagedPolicyStatementPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosManagedPolicy_StatementPropertyValidator(properties).assertSuccess();
    return {
      'Condition': ros.hashMapper(ros.objectToRosTemplate)(properties.condition),
      'Action': ros.listMapper(ros.objectToRosTemplate)(properties.action),
      'Resource': ros.listMapper(ros.objectToRosTemplate)(properties.resource),
      'Effect': ros.stringToRosTemplate(properties.effect),
    };
}

/**
 * Properties for defining a `RosOIDCProvider`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-oidcprovider
 */
export interface RosOIDCProviderProps {

    /**
     * @Property fingerprints: The list of the fingerprints, max length is 5
     */
    readonly fingerprints: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property issuerUrl: The URL of the issuer, which is provided by the external IdP. The URL of the issuer must be unique within an Alibaba Cloud account.
     * The URL of the issuer must start with https and be in the valid URL format. The URL cannot contain query parameters that follow a question mark (?) or logon information that is identified by at signs (@). The URL cannot be a fragment URL that contains number signs (#).
     * The URL can be up to 255 characters in length.
     */
    readonly issuerUrl: string | ros.IResolvable;

    /**
     * @Property oidcProviderName: The name of the OIDC IdP.
     * The name can contain letters, digits, and special characters and cannot start or end with the special characters. The special characters are periods, (.), hyphens (-), and underscores (_).``
     * The name can be up to 128 characters in length.
     */
    readonly oidcProviderName: string | ros.IResolvable;

    /**
     * @Property clientIds: The list of the client IDs, max length is 20
     */
    readonly clientIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property description: The description of the OIDC IdP.
     * The description can be up to 256 characters in length.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property issuanceLimitTime: The earliest time when an external IdP can issue an ID token. If the value of the iat field in the ID token is later than the current time, the request is rejected. Unit: hours. Valid values: 1 to 168.
     */
    readonly issuanceLimitTime?: number | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosOIDCProviderProps`
 *
 * @param properties - the TypeScript properties of a `RosOIDCProviderProps`
 *
 * @returns the result of the validation.
 */
function RosOIDCProviderPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: undefined,
            max: 256,
          }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('oidcProviderName', ros.requiredValidator)(properties.oidcProviderName));
    if(properties.oidcProviderName && (Array.isArray(properties.oidcProviderName) || (typeof properties.oidcProviderName) === 'string')) {
        errors.collect(ros.propertyValidator('oidcProviderName', ros.validateLength)({
            data: properties.oidcProviderName.length,
            min: undefined,
            max: 128,
          }));
    }
    if(properties.oidcProviderName && (typeof properties.oidcProviderName) !== 'object') {
        errors.collect(ros.propertyValidator('oidcProviderName', ros.validateAllowedPattern)({
          data: properties.oidcProviderName,
          reg: /^[a-zA-Z0-9][a-zA-Z0-9._-]{0,126}[a-zA-Z0-9]$/
        }));
    }
    errors.collect(ros.propertyValidator('oidcProviderName', ros.validateString)(properties.oidcProviderName));
    errors.collect(ros.propertyValidator('fingerprints', ros.requiredValidator)(properties.fingerprints));
    if(properties.fingerprints && (Array.isArray(properties.fingerprints) || (typeof properties.fingerprints) === 'string')) {
        errors.collect(ros.propertyValidator('fingerprints', ros.validateLength)({
            data: properties.fingerprints.length,
            min: 1,
            max: 5,
          }));
    }
    errors.collect(ros.propertyValidator('fingerprints', ros.listValidator(ros.validateString))(properties.fingerprints));
    errors.collect(ros.propertyValidator('issuerUrl', ros.requiredValidator)(properties.issuerUrl));
    if(properties.issuerUrl && (Array.isArray(properties.issuerUrl) || (typeof properties.issuerUrl) === 'string')) {
        errors.collect(ros.propertyValidator('issuerUrl', ros.validateLength)({
            data: properties.issuerUrl.length,
            min: undefined,
            max: 255,
          }));
    }
    errors.collect(ros.propertyValidator('issuerUrl', ros.validateString)(properties.issuerUrl));
    if(properties.issuanceLimitTime && (typeof properties.issuanceLimitTime) !== 'object') {
        errors.collect(ros.propertyValidator('issuanceLimitTime', ros.validateRange)({
            data: properties.issuanceLimitTime,
            min: 1,
            max: 168,
          }));
    }
    errors.collect(ros.propertyValidator('issuanceLimitTime', ros.validateNumber)(properties.issuanceLimitTime));
    if(properties.clientIds && (Array.isArray(properties.clientIds) || (typeof properties.clientIds) === 'string')) {
        errors.collect(ros.propertyValidator('clientIds', ros.validateLength)({
            data: properties.clientIds.length,
            min: 1,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('clientIds', ros.listValidator(ros.validateString))(properties.clientIds));
    return errors.wrap('supplied properties not correct for "RosOIDCProviderProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RAM::OIDCProvider` resource
 *
 * @param properties - the TypeScript properties of a `RosOIDCProviderProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RAM::OIDCProvider` resource.
 */
// @ts-ignore TS6133
function rosOIDCProviderPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosOIDCProviderPropsValidator(properties).assertSuccess();
    }
    return {
      'Fingerprints': ros.listMapper(ros.stringToRosTemplate)(properties.fingerprints),
      'IssuerUrl': ros.stringToRosTemplate(properties.issuerUrl),
      'OIDCProviderName': ros.stringToRosTemplate(properties.oidcProviderName),
      'ClientIds': ros.listMapper(ros.stringToRosTemplate)(properties.clientIds),
      'Description': ros.stringToRosTemplate(properties.description),
      'IssuanceLimitTime': ros.numberToRosTemplate(properties.issuanceLimitTime),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::RAM::OIDCProvider`.
 * @Note This class does not contain additional functions, so it is recommended to use the `OIDCProvider` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-oidcprovider
 */
export class RosOIDCProvider extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RAM::OIDCProvider";

    /**
     * @Attribute OIDCProviderName: The name of the OIDC IdP.
The name can contain letters, digits, and special characters and cannot start or end with the special characters. The special characters are periods, (.), hyphens (-), and underscores (_).``
The name can be up to 128 characters in length.
     */
    public readonly attrOidcProviderName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property fingerprints: The list of the fingerprints, max length is 5
     */
    public fingerprints: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property issuerUrl: The URL of the issuer, which is provided by the external IdP. The URL of the issuer must be unique within an Alibaba Cloud account.
     * The URL of the issuer must start with https and be in the valid URL format. The URL cannot contain query parameters that follow a question mark (?) or logon information that is identified by at signs (@). The URL cannot be a fragment URL that contains number signs (#).
     * The URL can be up to 255 characters in length.
     */
    public issuerUrl: string | ros.IResolvable;

    /**
     * @Property oidcProviderName: The name of the OIDC IdP.
     * The name can contain letters, digits, and special characters and cannot start or end with the special characters. The special characters are periods, (.), hyphens (-), and underscores (_).``
     * The name can be up to 128 characters in length.
     */
    public oidcProviderName: string | ros.IResolvable;

    /**
     * @Property clientIds: The list of the client IDs, max length is 20
     */
    public clientIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property description: The description of the OIDC IdP.
     * The description can be up to 256 characters in length.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property issuanceLimitTime: The earliest time when an external IdP can issue an ID token. If the value of the iat field in the ID token is later than the current time, the request is rejected. Unit: hours. Valid values: 1 to 168.
     */
    public issuanceLimitTime: number | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosOIDCProviderProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosOIDCProvider.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrOidcProviderName = this.getAtt('OIDCProviderName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.fingerprints = props.fingerprints;
        this.issuerUrl = props.issuerUrl;
        this.oidcProviderName = props.oidcProviderName;
        this.clientIds = props.clientIds;
        this.description = props.description;
        this.issuanceLimitTime = props.issuanceLimitTime;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            fingerprints: this.fingerprints,
            issuerUrl: this.issuerUrl,
            oidcProviderName: this.oidcProviderName,
            clientIds: this.clientIds,
            description: this.description,
            issuanceLimitTime: this.issuanceLimitTime,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosOIDCProviderPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosRamAccountAlias`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-ramaccountalias
 */
export interface RosRamAccountAliasProps {

    /**
     * @Property accountAlias: The alias of the Alibaba Cloud account.
     * The alias must be 1 to 50 characters in length, and can contain lowercase letters,
     * digits, hyphens (-), periods (.) and underscores (_).
     * Note It cannot start or end with a hyphen (-).The default domain name cannot start or end with a 
     * hyphen (-) and cannot have two consecutive hyphens (-).
     */
    readonly accountAlias: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosRamAccountAliasProps`
 *
 * @param properties - the TypeScript properties of a `RosRamAccountAliasProps`
 *
 * @returns the result of the validation.
 */
function RosRamAccountAliasPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('accountAlias', ros.requiredValidator)(properties.accountAlias));
    if(properties.accountAlias && (typeof properties.accountAlias) !== 'object') {
        errors.collect(ros.propertyValidator('accountAlias', ros.validateAllowedPattern)({
          data: properties.accountAlias,
          reg: /[-0-9.a-zA-Z_]{1,50}/
        }));
    }
    if(properties.accountAlias && (Array.isArray(properties.accountAlias) || (typeof properties.accountAlias) === 'string')) {
        errors.collect(ros.propertyValidator('accountAlias', ros.validateLength)({
            data: properties.accountAlias.length,
            min: 1,
            max: 50,
          }));
    }
    errors.collect(ros.propertyValidator('accountAlias', ros.validateString)(properties.accountAlias));
    return errors.wrap('supplied properties not correct for "RosRamAccountAliasProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RAM::RamAccountAlias` resource
 *
 * @param properties - the TypeScript properties of a `RosRamAccountAliasProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RAM::RamAccountAlias` resource.
 */
// @ts-ignore TS6133
function rosRamAccountAliasPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosRamAccountAliasPropsValidator(properties).assertSuccess();
    }
    return {
      'AccountAlias': ros.stringToRosTemplate(properties.accountAlias),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::RAM::RamAccountAlias`.
 * @Note This class does not contain additional functions, so it is recommended to use the `RamAccountAlias` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-ramaccountalias
 */
export class RosRamAccountAlias extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RAM::RamAccountAlias";

    /**
     * @Attribute AccountAlias: The alias of the Alibaba Cloud account.
     */
    public readonly attrAccountAlias: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property accountAlias: The alias of the Alibaba Cloud account.
     * The alias must be 1 to 50 characters in length, and can contain lowercase letters,
     * digits, hyphens (-), periods (.) and underscores (_).
     * Note It cannot start or end with a hyphen (-).The default domain name cannot start or end with a 
     * hyphen (-) and cannot have two consecutive hyphens (-).
     */
    public accountAlias: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRamAccountAliasProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosRamAccountAlias.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAccountAlias = this.getAtt('AccountAlias');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.accountAlias = props.accountAlias;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            accountAlias: this.accountAlias,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosRamAccountAliasPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosRole`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-role
 */
export interface RosRoleProps {

    /**
     * @Property assumeRolePolicyDocument: The RAM assume role policy that is associated with this role.
     */
    readonly assumeRolePolicyDocument: RosRole.AssumeRolePolicyDocumentProperty | ros.IResolvable;

    /**
     * @Property roleName: Specifies the role name, containing up to 64 characters.
     */
    readonly roleName: string | ros.IResolvable;

    /**
     * @Property deletionForce: Whether force detach the policies attached to the role. Default value is false.
     */
    readonly deletionForce?: boolean | ros.IResolvable;

    /**
     * @Property description: Remark information, up to 1024 characters or Chinese characters.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property ignoreExisting: Whether to ignore existing role
     * False: ROS will perform a uniqueness check.If a role with the same name exists, an error will be reported when creating it.
     * True: ROS will not check the uniqueness.If there is a role with the same name, the role creation process will be ignored.
     * If the role is not created by ROS, it will be ignored during update and delete stage.
     */
    readonly ignoreExisting?: boolean | ros.IResolvable;

    /**
     * @Property maxSessionDuration: The maximum session duration of the RAM role.
     * Valid values: 3600 to 43200. Unit: seconds. Default value: 3600.
     * The default value is used if the parameter is not specified.
     */
    readonly maxSessionDuration?: number | ros.IResolvable;

    /**
     * @Property policies: Describes what actions are allowed on what resources.
     */
    readonly policies?: Array<RosRole.PoliciesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property policyAttachments: System and custom policy names to attach.
     */
    readonly policyAttachments?: RosRole.PolicyAttachmentsProperty | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosRoleProps`
 *
 * @param properties - the TypeScript properties of a `RosRoleProps`
 *
 * @returns the result of the validation.
 */
function RosRolePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('ignoreExisting', ros.validateBoolean)(properties.ignoreExisting));
    if(properties.maxSessionDuration && (typeof properties.maxSessionDuration) !== 'object') {
        errors.collect(ros.propertyValidator('maxSessionDuration', ros.validateRange)({
            data: properties.maxSessionDuration,
            min: 3600,
            max: 43200,
          }));
    }
    errors.collect(ros.propertyValidator('maxSessionDuration', ros.validateNumber)(properties.maxSessionDuration));
    errors.collect(ros.propertyValidator('roleName', ros.requiredValidator)(properties.roleName));
    errors.collect(ros.propertyValidator('roleName', ros.validateString)(properties.roleName));
    if(properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: undefined,
            max: 1024,
          }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('policies', ros.listValidator(RosRole_PoliciesPropertyValidator))(properties.policies));
    errors.collect(ros.propertyValidator('deletionForce', ros.validateBoolean)(properties.deletionForce));
    errors.collect(ros.propertyValidator('policyAttachments', RosRole_PolicyAttachmentsPropertyValidator)(properties.policyAttachments));
    errors.collect(ros.propertyValidator('assumeRolePolicyDocument', ros.requiredValidator)(properties.assumeRolePolicyDocument));
    errors.collect(ros.propertyValidator('assumeRolePolicyDocument', RosRole_AssumeRolePolicyDocumentPropertyValidator)(properties.assumeRolePolicyDocument));
    return errors.wrap('supplied properties not correct for "RosRoleProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RAM::Role` resource
 *
 * @param properties - the TypeScript properties of a `RosRoleProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RAM::Role` resource.
 */
// @ts-ignore TS6133
function rosRolePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosRolePropsValidator(properties).assertSuccess();
    }
    return {
      'AssumeRolePolicyDocument': rosRoleAssumeRolePolicyDocumentPropertyToRosTemplate(properties.assumeRolePolicyDocument),
      'RoleName': ros.stringToRosTemplate(properties.roleName),
      'DeletionForce': ros.booleanToRosTemplate(properties.deletionForce),
      'Description': ros.stringToRosTemplate(properties.description),
      'IgnoreExisting': ros.booleanToRosTemplate(properties.ignoreExisting),
      'MaxSessionDuration': ros.numberToRosTemplate(properties.maxSessionDuration),
      'Policies': ros.listMapper(rosRolePoliciesPropertyToRosTemplate)(properties.policies),
      'PolicyAttachments': rosRolePolicyAttachmentsPropertyToRosTemplate(properties.policyAttachments),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::RAM::Role`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Role` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-role
 */
export class RosRole extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RAM::Role";

    /**
     * @Attribute Arn: Name of alicloud resource.
     */
    public readonly attrArn: ros.IResolvable;

    /**
     * @Attribute RoleId: Id of ram role.
     */
    public readonly attrRoleId: ros.IResolvable;

    /**
     * @Attribute RoleName: Name of ram role.
     */
    public readonly attrRoleName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property assumeRolePolicyDocument: The RAM assume role policy that is associated with this role.
     */
    public assumeRolePolicyDocument: RosRole.AssumeRolePolicyDocumentProperty | ros.IResolvable;

    /**
     * @Property roleName: Specifies the role name, containing up to 64 characters.
     */
    public roleName: string | ros.IResolvable;

    /**
     * @Property deletionForce: Whether force detach the policies attached to the role. Default value is false.
     */
    public deletionForce: boolean | ros.IResolvable | undefined;

    /**
     * @Property description: Remark information, up to 1024 characters or Chinese characters.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property ignoreExisting: Whether to ignore existing role
     * False: ROS will perform a uniqueness check.If a role with the same name exists, an error will be reported when creating it.
     * True: ROS will not check the uniqueness.If there is a role with the same name, the role creation process will be ignored.
     * If the role is not created by ROS, it will be ignored during update and delete stage.
     */
    public ignoreExisting: boolean | ros.IResolvable | undefined;

    /**
     * @Property maxSessionDuration: The maximum session duration of the RAM role.
     * Valid values: 3600 to 43200. Unit: seconds. Default value: 3600.
     * The default value is used if the parameter is not specified.
     */
    public maxSessionDuration: number | ros.IResolvable | undefined;

    /**
     * @Property policies: Describes what actions are allowed on what resources.
     */
    public policies: Array<RosRole.PoliciesProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property policyAttachments: System and custom policy names to attach.
     */
    public policyAttachments: RosRole.PolicyAttachmentsProperty | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRoleProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosRole.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrArn = this.getAtt('Arn');
        this.attrRoleId = this.getAtt('RoleId');
        this.attrRoleName = this.getAtt('RoleName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.assumeRolePolicyDocument = props.assumeRolePolicyDocument;
        this.roleName = props.roleName;
        this.deletionForce = props.deletionForce;
        this.description = props.description;
        this.ignoreExisting = props.ignoreExisting;
        this.maxSessionDuration = props.maxSessionDuration;
        this.policies = props.policies;
        this.policyAttachments = props.policyAttachments;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            assumeRolePolicyDocument: this.assumeRolePolicyDocument,
            roleName: this.roleName,
            deletionForce: this.deletionForce,
            description: this.description,
            ignoreExisting: this.ignoreExisting,
            maxSessionDuration: this.maxSessionDuration,
            policies: this.policies,
            policyAttachments: this.policyAttachments,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosRolePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosRole {
    /**
     * @stability external
     */
    export interface AssumeRolePolicyDocumentProperty {
        /**
         * @Property version: You can use versions to track changes to a managed policy.
         */
        readonly version: string | ros.IResolvable;
        /**
         * @Property statement: A policy consists of one or more statements.
         */
        readonly statement: Array<RosRole.StatementProperty | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `AssumeRolePolicyDocumentProperty`
 *
 * @param properties - the TypeScript properties of a `AssumeRolePolicyDocumentProperty`
 *
 * @returns the result of the validation.
 */
function RosRole_AssumeRolePolicyDocumentPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('version', ros.requiredValidator)(properties.version));
    errors.collect(ros.propertyValidator('version', ros.validateString)(properties.version));
    errors.collect(ros.propertyValidator('statement', ros.requiredValidator)(properties.statement));
    errors.collect(ros.propertyValidator('statement', ros.listValidator(RosRole_StatementPropertyValidator))(properties.statement));
    return errors.wrap('supplied properties not correct for "AssumeRolePolicyDocumentProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RAM::Role.AssumeRolePolicyDocument` resource
 *
 * @param properties - the TypeScript properties of a `AssumeRolePolicyDocumentProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RAM::Role.AssumeRolePolicyDocument` resource.
 */
// @ts-ignore TS6133
function rosRoleAssumeRolePolicyDocumentPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosRole_AssumeRolePolicyDocumentPropertyValidator(properties).assertSuccess();
    return {
      'Version': ros.stringToRosTemplate(properties.version),
      'Statement': ros.listMapper(rosRoleStatementPropertyToRosTemplate)(properties.statement),
    };
}

export namespace RosRole {
    /**
     * @stability external
     */
    export interface ConditionProperty {
        /**
         * @Property numericNotEquals: undefined
         */
        readonly numericNotEquals?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
        /**
         * @Property stringEquals: undefined
         */
        readonly stringEquals?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
        /**
         * @Property stringLike: undefined
         */
        readonly stringLike?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
        /**
         * @Property numericLessThanEquals: undefined
         */
        readonly numericLessThanEquals?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
        /**
         * @Property stringNotEquals: undefined
         */
        readonly stringNotEquals?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
        /**
         * @Property stringNotEqualsIgnoreCase: undefined
         */
        readonly stringNotEqualsIgnoreCase?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
        /**
         * @Property numericLessThan: undefined
         */
        readonly numericLessThan?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
        /**
         * @Property numericGreaterThan: undefined
         */
        readonly numericGreaterThan?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
        /**
         * @Property dateLessThanEquals: undefined
         */
        readonly dateLessThanEquals?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
        /**
         * @Property dateGreaterThanEquals: undefined
         */
        readonly dateGreaterThanEquals?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
        /**
         * @Property numericEquals: undefined
         */
        readonly numericEquals?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
        /**
         * @Property dateLessThan: undefined
         */
        readonly dateLessThan?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
        /**
         * @Property dateNotEquals: undefined
         */
        readonly dateNotEquals?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
        /**
         * @Property stringNotLike: undefined
         */
        readonly stringNotLike?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
        /**
         * @Property notIpAddress: undefined
         */
        readonly notIpAddress?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
        /**
         * @Property stringEqualsIgnoreCase: undefined
         */
        readonly stringEqualsIgnoreCase?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
        /**
         * @Property bool: undefined
         */
        readonly bool?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
        /**
         * @Property dateEquals: undefined
         */
        readonly dateEquals?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
        /**
         * @Property dateGreaterThan: undefined
         */
        readonly dateGreaterThan?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
        /**
         * @Property numericGreaterThanEquals: undefined
         */
        readonly numericGreaterThanEquals?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
        /**
         * @Property ipAddress: undefined
         */
        readonly ipAddress?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ConditionProperty`
 *
 * @param properties - the TypeScript properties of a `ConditionProperty`
 *
 * @returns the result of the validation.
 */
function RosRole_ConditionPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('numericNotEquals', ros.hashValidator(ros.validateAny))(properties.numericNotEquals));
    errors.collect(ros.propertyValidator('stringEquals', ros.hashValidator(ros.validateAny))(properties.stringEquals));
    errors.collect(ros.propertyValidator('stringLike', ros.hashValidator(ros.validateAny))(properties.stringLike));
    errors.collect(ros.propertyValidator('numericLessThanEquals', ros.hashValidator(ros.validateAny))(properties.numericLessThanEquals));
    errors.collect(ros.propertyValidator('stringNotEquals', ros.hashValidator(ros.validateAny))(properties.stringNotEquals));
    errors.collect(ros.propertyValidator('stringNotEqualsIgnoreCase', ros.hashValidator(ros.validateAny))(properties.stringNotEqualsIgnoreCase));
    errors.collect(ros.propertyValidator('numericLessThan', ros.hashValidator(ros.validateAny))(properties.numericLessThan));
    errors.collect(ros.propertyValidator('numericGreaterThan', ros.hashValidator(ros.validateAny))(properties.numericGreaterThan));
    errors.collect(ros.propertyValidator('dateLessThanEquals', ros.hashValidator(ros.validateAny))(properties.dateLessThanEquals));
    errors.collect(ros.propertyValidator('dateGreaterThanEquals', ros.hashValidator(ros.validateAny))(properties.dateGreaterThanEquals));
    errors.collect(ros.propertyValidator('numericEquals', ros.hashValidator(ros.validateAny))(properties.numericEquals));
    errors.collect(ros.propertyValidator('dateLessThan', ros.hashValidator(ros.validateAny))(properties.dateLessThan));
    errors.collect(ros.propertyValidator('dateNotEquals', ros.hashValidator(ros.validateAny))(properties.dateNotEquals));
    errors.collect(ros.propertyValidator('stringNotLike', ros.hashValidator(ros.validateAny))(properties.stringNotLike));
    errors.collect(ros.propertyValidator('notIpAddress', ros.hashValidator(ros.validateAny))(properties.notIpAddress));
    errors.collect(ros.propertyValidator('stringEqualsIgnoreCase', ros.hashValidator(ros.validateAny))(properties.stringEqualsIgnoreCase));
    errors.collect(ros.propertyValidator('bool', ros.hashValidator(ros.validateAny))(properties.bool));
    errors.collect(ros.propertyValidator('dateEquals', ros.hashValidator(ros.validateAny))(properties.dateEquals));
    errors.collect(ros.propertyValidator('dateGreaterThan', ros.hashValidator(ros.validateAny))(properties.dateGreaterThan));
    errors.collect(ros.propertyValidator('numericGreaterThanEquals', ros.hashValidator(ros.validateAny))(properties.numericGreaterThanEquals));
    errors.collect(ros.propertyValidator('ipAddress', ros.hashValidator(ros.validateAny))(properties.ipAddress));
    return errors.wrap('supplied properties not correct for "ConditionProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RAM::Role.Condition` resource
 *
 * @param properties - the TypeScript properties of a `ConditionProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RAM::Role.Condition` resource.
 */
// @ts-ignore TS6133
function rosRoleConditionPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosRole_ConditionPropertyValidator(properties).assertSuccess();
    return {
      'NumericNotEquals': ros.hashMapper(ros.objectToRosTemplate)(properties.numericNotEquals),
      'StringEquals': ros.hashMapper(ros.objectToRosTemplate)(properties.stringEquals),
      'StringLike': ros.hashMapper(ros.objectToRosTemplate)(properties.stringLike),
      'NumericLessThanEquals': ros.hashMapper(ros.objectToRosTemplate)(properties.numericLessThanEquals),
      'StringNotEquals': ros.hashMapper(ros.objectToRosTemplate)(properties.stringNotEquals),
      'StringNotEqualsIgnoreCase': ros.hashMapper(ros.objectToRosTemplate)(properties.stringNotEqualsIgnoreCase),
      'NumericLessThan': ros.hashMapper(ros.objectToRosTemplate)(properties.numericLessThan),
      'NumericGreaterThan': ros.hashMapper(ros.objectToRosTemplate)(properties.numericGreaterThan),
      'DateLessThanEquals': ros.hashMapper(ros.objectToRosTemplate)(properties.dateLessThanEquals),
      'DateGreaterThanEquals': ros.hashMapper(ros.objectToRosTemplate)(properties.dateGreaterThanEquals),
      'NumericEquals': ros.hashMapper(ros.objectToRosTemplate)(properties.numericEquals),
      'DateLessThan': ros.hashMapper(ros.objectToRosTemplate)(properties.dateLessThan),
      'DateNotEquals': ros.hashMapper(ros.objectToRosTemplate)(properties.dateNotEquals),
      'StringNotLike': ros.hashMapper(ros.objectToRosTemplate)(properties.stringNotLike),
      'NotIpAddress': ros.hashMapper(ros.objectToRosTemplate)(properties.notIpAddress),
      'StringEqualsIgnoreCase': ros.hashMapper(ros.objectToRosTemplate)(properties.stringEqualsIgnoreCase),
      'Bool': ros.hashMapper(ros.objectToRosTemplate)(properties.bool),
      'DateEquals': ros.hashMapper(ros.objectToRosTemplate)(properties.dateEquals),
      'DateGreaterThan': ros.hashMapper(ros.objectToRosTemplate)(properties.dateGreaterThan),
      'NumericGreaterThanEquals': ros.hashMapper(ros.objectToRosTemplate)(properties.numericGreaterThanEquals),
      'IpAddress': ros.hashMapper(ros.objectToRosTemplate)(properties.ipAddress),
    };
}

export namespace RosRole {
    /**
     * @stability external
     */
    export interface PoliciesProperty {
        /**
         * @Property ignoreExisting: Whether to ignore existing policy
     * False: ROS will perform a uniqueness check.If a policy with the same name exists, an error will be reported when creating it.
     * True: ROS will not check the uniqueness.If there is a policy with the same name, the policy creation process will be ignored.
     * If the policy is not created by ROS, it will be ignored during update and delete stage.
         */
        readonly ignoreExisting?: boolean | ros.IResolvable;
        /**
         * @Property description: Specifies the authorization policy description, containing up to 1024 characters.
         */
        readonly description?: string | ros.IResolvable;
        /**
         * @Property policyName: Specifies the authorization policy name, containing up to 128 characters.
         */
        readonly policyName: string | ros.IResolvable;
        /**
         * @Property policyDocument: A policy document that describes what actions are allowed on which resources.
         */
        readonly policyDocument: RosRole.PolicyDocumentProperty | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `PoliciesProperty`
 *
 * @param properties - the TypeScript properties of a `PoliciesProperty`
 *
 * @returns the result of the validation.
 */
function RosRole_PoliciesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('ignoreExisting', ros.validateBoolean)(properties.ignoreExisting));
    if(properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: undefined,
            max: 1024,
          }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('policyName', ros.requiredValidator)(properties.policyName));
    if(properties.policyName && (Array.isArray(properties.policyName) || (typeof properties.policyName) === 'string')) {
        errors.collect(ros.propertyValidator('policyName', ros.validateLength)({
            data: properties.policyName.length,
            min: undefined,
            max: 128,
          }));
    }
    errors.collect(ros.propertyValidator('policyName', ros.validateString)(properties.policyName));
    errors.collect(ros.propertyValidator('policyDocument', ros.requiredValidator)(properties.policyDocument));
    errors.collect(ros.propertyValidator('policyDocument', RosRole_PolicyDocumentPropertyValidator)(properties.policyDocument));
    return errors.wrap('supplied properties not correct for "PoliciesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RAM::Role.Policies` resource
 *
 * @param properties - the TypeScript properties of a `PoliciesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RAM::Role.Policies` resource.
 */
// @ts-ignore TS6133
function rosRolePoliciesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosRole_PoliciesPropertyValidator(properties).assertSuccess();
    return {
      'IgnoreExisting': ros.booleanToRosTemplate(properties.ignoreExisting),
      'Description': ros.stringToRosTemplate(properties.description),
      'PolicyName': ros.stringToRosTemplate(properties.policyName),
      'PolicyDocument': rosRolePolicyDocumentPropertyToRosTemplate(properties.policyDocument),
    };
}

export namespace RosRole {
    /**
     * @stability external
     */
    export interface PolicyAttachmentsProperty {
        /**
         * @Property custom: undefined
         */
        readonly custom?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property system: undefined
         */
        readonly system?: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `PolicyAttachmentsProperty`
 *
 * @param properties - the TypeScript properties of a `PolicyAttachmentsProperty`
 *
 * @returns the result of the validation.
 */
function RosRole_PolicyAttachmentsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.custom && (Array.isArray(properties.custom) || (typeof properties.custom) === 'string')) {
        errors.collect(ros.propertyValidator('custom', ros.validateLength)({
            data: properties.custom.length,
            min: undefined,
            max: 5,
          }));
    }
    errors.collect(ros.propertyValidator('custom', ros.listValidator(ros.validateString))(properties.custom));
    if(properties.system && (Array.isArray(properties.system) || (typeof properties.system) === 'string')) {
        errors.collect(ros.propertyValidator('system', ros.validateLength)({
            data: properties.system.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('system', ros.listValidator(ros.validateString))(properties.system));
    return errors.wrap('supplied properties not correct for "PolicyAttachmentsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RAM::Role.PolicyAttachments` resource
 *
 * @param properties - the TypeScript properties of a `PolicyAttachmentsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RAM::Role.PolicyAttachments` resource.
 */
// @ts-ignore TS6133
function rosRolePolicyAttachmentsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosRole_PolicyAttachmentsPropertyValidator(properties).assertSuccess();
    return {
      'Custom': ros.listMapper(ros.stringToRosTemplate)(properties.custom),
      'System': ros.listMapper(ros.stringToRosTemplate)(properties.system),
    };
}

export namespace RosRole {
    /**
     * @stability external
     */
    export interface PolicyDocumentProperty {
        /**
         * @Property version: You can use versions to track changes to a managed policy.
         */
        readonly version: string | ros.IResolvable;
        /**
         * @Property statement: A policy consists of one or more statements.
         */
        readonly statement: Array<RosRole.PolicyDocumentStatementProperty | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `PolicyDocumentProperty`
 *
 * @param properties - the TypeScript properties of a `PolicyDocumentProperty`
 *
 * @returns the result of the validation.
 */
function RosRole_PolicyDocumentPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('version', ros.requiredValidator)(properties.version));
    errors.collect(ros.propertyValidator('version', ros.validateString)(properties.version));
    errors.collect(ros.propertyValidator('statement', ros.requiredValidator)(properties.statement));
    errors.collect(ros.propertyValidator('statement', ros.listValidator(RosRole_PolicyDocumentStatementPropertyValidator))(properties.statement));
    return errors.wrap('supplied properties not correct for "PolicyDocumentProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RAM::Role.PolicyDocument` resource
 *
 * @param properties - the TypeScript properties of a `PolicyDocumentProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RAM::Role.PolicyDocument` resource.
 */
// @ts-ignore TS6133
function rosRolePolicyDocumentPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosRole_PolicyDocumentPropertyValidator(properties).assertSuccess();
    return {
      'Version': ros.stringToRosTemplate(properties.version),
      'Statement': ros.listMapper(rosRolePolicyDocumentStatementPropertyToRosTemplate)(properties.statement),
    };
}

export namespace RosRole {
    /**
     * @stability external
     */
    export interface PolicyDocumentStatementProperty {
        /**
         * @Property condition: What conditions should be satisfied.
         */
        readonly condition?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
        /**
         * @Property action: What actions you will allow.
         */
        readonly action?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property resource: Which resources you allow the action on.
         */
        readonly resource?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property effect: What the effect will be when the user requests access-either allow or deny.
         */
        readonly effect?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `PolicyDocumentStatementProperty`
 *
 * @param properties - the TypeScript properties of a `PolicyDocumentStatementProperty`
 *
 * @returns the result of the validation.
 */
function RosRole_PolicyDocumentStatementPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('condition', ros.hashValidator(ros.validateAny))(properties.condition));
    errors.collect(ros.propertyValidator('action', ros.listValidator(ros.validateAny))(properties.action));
    errors.collect(ros.propertyValidator('resource', ros.listValidator(ros.validateAny))(properties.resource));
    errors.collect(ros.propertyValidator('effect', ros.validateString)(properties.effect));
    return errors.wrap('supplied properties not correct for "PolicyDocumentStatementProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RAM::Role.PolicyDocumentStatement` resource
 *
 * @param properties - the TypeScript properties of a `PolicyDocumentStatementProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RAM::Role.PolicyDocumentStatement` resource.
 */
// @ts-ignore TS6133
function rosRolePolicyDocumentStatementPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosRole_PolicyDocumentStatementPropertyValidator(properties).assertSuccess();
    return {
      'Condition': ros.hashMapper(ros.objectToRosTemplate)(properties.condition),
      'Action': ros.listMapper(ros.objectToRosTemplate)(properties.action),
      'Resource': ros.listMapper(ros.objectToRosTemplate)(properties.resource),
      'Effect': ros.stringToRosTemplate(properties.effect),
    };
}

export namespace RosRole {
    /**
     * @stability external
     */
    export interface PrincipalProperty {
        /**
         * @Property service: undefined
         */
        readonly service?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property federated: undefined
         */
        readonly federated?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property ram: undefined
         */
        readonly ram?: Array<any | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `PrincipalProperty`
 *
 * @param properties - the TypeScript properties of a `PrincipalProperty`
 *
 * @returns the result of the validation.
 */
function RosRole_PrincipalPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('service', ros.listValidator(ros.validateAny))(properties.service));
    errors.collect(ros.propertyValidator('federated', ros.listValidator(ros.validateAny))(properties.federated));
    errors.collect(ros.propertyValidator('ram', ros.listValidator(ros.validateAny))(properties.ram));
    return errors.wrap('supplied properties not correct for "PrincipalProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RAM::Role.Principal` resource
 *
 * @param properties - the TypeScript properties of a `PrincipalProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RAM::Role.Principal` resource.
 */
// @ts-ignore TS6133
function rosRolePrincipalPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosRole_PrincipalPropertyValidator(properties).assertSuccess();
    return {
      'Service': ros.listMapper(ros.objectToRosTemplate)(properties.service),
      'Federated': ros.listMapper(ros.objectToRosTemplate)(properties.federated),
      'RAM': ros.listMapper(ros.objectToRosTemplate)(properties.ram),
    };
}

export namespace RosRole {
    /**
     * @stability external
     */
    export interface StatementProperty {
        /**
         * @Property condition: undefined
         */
        readonly condition?: RosRole.ConditionProperty | ros.IResolvable;
        /**
         * @Property action: What action you will allow.
         */
        readonly action?: string | ros.IResolvable;
        /**
         * @Property effect: What the effect will be when the user requests access-either allow or deny.
         */
        readonly effect?: string | ros.IResolvable;
        /**
         * @Property principal: undefined
         */
        readonly principal?: RosRole.PrincipalProperty | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `StatementProperty`
 *
 * @param properties - the TypeScript properties of a `StatementProperty`
 *
 * @returns the result of the validation.
 */
function RosRole_StatementPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('condition', RosRole_ConditionPropertyValidator)(properties.condition));
    errors.collect(ros.propertyValidator('action', ros.validateString)(properties.action));
    errors.collect(ros.propertyValidator('effect', ros.validateString)(properties.effect));
    errors.collect(ros.propertyValidator('principal', RosRole_PrincipalPropertyValidator)(properties.principal));
    return errors.wrap('supplied properties not correct for "StatementProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RAM::Role.Statement` resource
 *
 * @param properties - the TypeScript properties of a `StatementProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RAM::Role.Statement` resource.
 */
// @ts-ignore TS6133
function rosRoleStatementPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosRole_StatementPropertyValidator(properties).assertSuccess();
    return {
      'Condition': rosRoleConditionPropertyToRosTemplate(properties.condition),
      'Action': ros.stringToRosTemplate(properties.action),
      'Effect': ros.stringToRosTemplate(properties.effect),
      'Principal': rosRolePrincipalPropertyToRosTemplate(properties.principal),
    };
}

/**
 * Properties for defining a `RosSAMLProvider`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-samlprovider
 */
export interface RosSAMLProviderProps {

    /**
     * @Property samlProviderName: IdP Name. The IdP name can contain a maximum of 128 characters and only letters, numbers, and the following special characters are accepted: hyphens (-), periods (.), and underscores (_). It cannot start or end with a special character.
     */
    readonly samlProviderName: string | ros.IResolvable;

    /**
     * @Property description: The description can contain a maximum of 256 characters.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property encodedSamlMetadataDocument: SAML metadata document.Base64 encoded. Provided by an identity provider that supports the SAML2.0 protocol.
     * Only one of the three properties SAMLMetadataDocument, SAMLMetadataDocumentURL, EncodedSAMLMetadataDocument can be set.
     */
    readonly encodedSamlMetadataDocument?: string | ros.IResolvable;

    /**
     * @Property samlMetadataDocument: SAML metadata document. The content must be 1 to 102,400 bytes in length.
     * Only one of the three properties SAMLMetadataDocument, SAMLMetadataDocumentURL, EncodedSAMLMetadataDocument can be set.
     */
    readonly samlMetadataDocument?: string | ros.IResolvable;

    /**
     * @Property samlMetadataDocumentUrl: The URL for the file that contains the SAML metadata document. The URL must point to a document located in an HTTP or HTTPS web server or an Alibaba Cloud OSS bucket. Examples: oss:\/\/ros\/document\/demo and oss:\/\/ros\/document\/demo?RegionId=cn-hangzhou. The URL can be up to 1,024 bytes in length.
     * Only one of the three properties SAMLMetadataDocument, SAMLMetadataDocumentURL, EncodedSAMLMetadataDocument can be set.
     */
    readonly samlMetadataDocumentUrl?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosSAMLProviderProps`
 *
 * @param properties - the TypeScript properties of a `RosSAMLProviderProps`
 *
 * @returns the result of the validation.
 */
function RosSAMLProviderPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('samlProviderName', ros.requiredValidator)(properties.samlProviderName));
    if(properties.samlProviderName && (Array.isArray(properties.samlProviderName) || (typeof properties.samlProviderName) === 'string')) {
        errors.collect(ros.propertyValidator('samlProviderName', ros.validateLength)({
            data: properties.samlProviderName.length,
            min: 1,
            max: 128,
          }));
    }
    errors.collect(ros.propertyValidator('samlProviderName', ros.validateString)(properties.samlProviderName));
    if(properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: undefined,
            max: 256,
          }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    if(properties.samlMetadataDocumentUrl && (Array.isArray(properties.samlMetadataDocumentUrl) || (typeof properties.samlMetadataDocumentUrl) === 'string')) {
        errors.collect(ros.propertyValidator('samlMetadataDocumentUrl', ros.validateLength)({
            data: properties.samlMetadataDocumentUrl.length,
            min: 1,
            max: 1024,
          }));
    }
    errors.collect(ros.propertyValidator('samlMetadataDocumentUrl', ros.validateString)(properties.samlMetadataDocumentUrl));
    if(properties.encodedSamlMetadataDocument && (Array.isArray(properties.encodedSamlMetadataDocument) || (typeof properties.encodedSamlMetadataDocument) === 'string')) {
        errors.collect(ros.propertyValidator('encodedSamlMetadataDocument', ros.validateLength)({
            data: properties.encodedSamlMetadataDocument.length,
            min: undefined,
            max: 102400,
          }));
    }
    errors.collect(ros.propertyValidator('encodedSamlMetadataDocument', ros.validateString)(properties.encodedSamlMetadataDocument));
    if(properties.samlMetadataDocument && (Array.isArray(properties.samlMetadataDocument) || (typeof properties.samlMetadataDocument) === 'string')) {
        errors.collect(ros.propertyValidator('samlMetadataDocument', ros.validateLength)({
            data: properties.samlMetadataDocument.length,
            min: 1,
            max: 102400,
          }));
    }
    errors.collect(ros.propertyValidator('samlMetadataDocument', ros.validateString)(properties.samlMetadataDocument));
    return errors.wrap('supplied properties not correct for "RosSAMLProviderProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RAM::SAMLProvider` resource
 *
 * @param properties - the TypeScript properties of a `RosSAMLProviderProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RAM::SAMLProvider` resource.
 */
// @ts-ignore TS6133
function rosSAMLProviderPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosSAMLProviderPropsValidator(properties).assertSuccess();
    }
    return {
      'SAMLProviderName': ros.stringToRosTemplate(properties.samlProviderName),
      'Description': ros.stringToRosTemplate(properties.description),
      'EncodedSAMLMetadataDocument': ros.stringToRosTemplate(properties.encodedSamlMetadataDocument),
      'SAMLMetadataDocument': ros.stringToRosTemplate(properties.samlMetadataDocument),
      'SAMLMetadataDocumentURL': ros.stringToRosTemplate(properties.samlMetadataDocumentUrl),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::RAM::SAMLProvider`.
 * @Note This class does not contain additional functions, so it is recommended to use the `SAMLProvider` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-samlprovider
 */
export class RosSAMLProvider extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RAM::SAMLProvider";

    /**
     * @Attribute Arn: ARN.
     */
    public readonly attrArn: ros.IResolvable;

    /**
     * @Attribute SAMLProviderName: IdP Name.
     */
    public readonly attrSamlProviderName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property samlProviderName: IdP Name. The IdP name can contain a maximum of 128 characters and only letters, numbers, and the following special characters are accepted: hyphens (-), periods (.), and underscores (_). It cannot start or end with a special character.
     */
    public samlProviderName: string | ros.IResolvable;

    /**
     * @Property description: The description can contain a maximum of 256 characters.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property encodedSamlMetadataDocument: SAML metadata document.Base64 encoded. Provided by an identity provider that supports the SAML2.0 protocol.
     * Only one of the three properties SAMLMetadataDocument, SAMLMetadataDocumentURL, EncodedSAMLMetadataDocument can be set.
     */
    public encodedSamlMetadataDocument: string | ros.IResolvable | undefined;

    /**
     * @Property samlMetadataDocument: SAML metadata document. The content must be 1 to 102,400 bytes in length.
     * Only one of the three properties SAMLMetadataDocument, SAMLMetadataDocumentURL, EncodedSAMLMetadataDocument can be set.
     */
    public samlMetadataDocument: string | ros.IResolvable | undefined;

    /**
     * @Property samlMetadataDocumentUrl: The URL for the file that contains the SAML metadata document. The URL must point to a document located in an HTTP or HTTPS web server or an Alibaba Cloud OSS bucket. Examples: oss:\/\/ros\/document\/demo and oss:\/\/ros\/document\/demo?RegionId=cn-hangzhou. The URL can be up to 1,024 bytes in length.
     * Only one of the three properties SAMLMetadataDocument, SAMLMetadataDocumentURL, EncodedSAMLMetadataDocument can be set.
     */
    public samlMetadataDocumentUrl: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSAMLProviderProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSAMLProvider.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrArn = this.getAtt('Arn');
        this.attrSamlProviderName = this.getAtt('SAMLProviderName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.samlProviderName = props.samlProviderName;
        this.description = props.description;
        this.encodedSamlMetadataDocument = props.encodedSamlMetadataDocument;
        this.samlMetadataDocument = props.samlMetadataDocument;
        this.samlMetadataDocumentUrl = props.samlMetadataDocumentUrl;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            samlProviderName: this.samlProviderName,
            description: this.description,
            encodedSamlMetadataDocument: this.encodedSamlMetadataDocument,
            samlMetadataDocument: this.samlMetadataDocument,
            samlMetadataDocumentUrl: this.samlMetadataDocumentUrl,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSAMLProviderPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosSecurityPreference`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-securitypreference
 */
export interface RosSecurityPreferenceProps {

    /**
     * @Property allowUserToChangePassword: Specifies whether RAM users can change their passwords. Valid values:
     * true: RAM users can change their passwords. This is the default value.
     * false: RAM users cannot change their passwords.
     */
    readonly allowUserToChangePassword?: boolean | ros.IResolvable;

    /**
     * @Property allowUserToManageAccessKeys: Specifies whether RAM users can manage their AccessKey pairs. Valid values:
     * true: RAM users can manage their AccessKey pairs.
     * false: RAM users cannot manage their AccessKey pairs. This is the default value.
     */
    readonly allowUserToManageAccessKeys?: boolean | ros.IResolvable;

    /**
     * @Property allowUserToManageMfaDevices: Specifies whether RAM users can manage their MFA devices. Valid values:
     * true: RAM users can manage their MFA devices. This is the default value.
     * false: RAM users cannot manage their MFA devices.
     */
    readonly allowUserToManageMfaDevices?: boolean | ros.IResolvable;

    /**
     * @Property allowUserToManagePublicKeys: Specifies whether RAM users can manage their public keys. Valid values:
     * true: RAM users can manage their public keys.
     * false: RAM users cannot manage their public keys. This is the default value.
     * Note This parameter is valid only for the Japan site.
     */
    readonly allowUserToManagePublicKeys?: boolean | ros.IResolvable;

    /**
     * @Property enableSaveMfaTicket: Specifies whether RAM users can save multi-factor authentication (MFA) security codes
     * during logon. The security codes are valid for 7 days. Valid values:
     * true: RAM users can save MFA security codes during logon.
     * false: RAM users cannot save MFA security codes during logon. This is the default
     * value.
     */
    readonly enableSaveMfaTicket?: boolean | ros.IResolvable;

    /**
     * @Property loginNetworkMasks: The subnet mask that specifies the IP addresses from which logon to the console is
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
     * @Property loginSessionDuration: The validity period of the logon session of the RAM user.
     * Valid values: 6 to 24. Default value: 6. Unit: hours.
     */
    readonly loginSessionDuration?: number | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosSecurityPreferenceProps`
 *
 * @param properties - the TypeScript properties of a `RosSecurityPreferenceProps`
 *
 * @returns the result of the validation.
 */
function RosSecurityPreferencePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('loginSessionDuration', ros.validateNumber)(properties.loginSessionDuration));
    errors.collect(ros.propertyValidator('allowUserToManageMfaDevices', ros.validateBoolean)(properties.allowUserToManageMfaDevices));
    errors.collect(ros.propertyValidator('allowUserToManagePublicKeys', ros.validateBoolean)(properties.allowUserToManagePublicKeys));
    errors.collect(ros.propertyValidator('loginNetworkMasks', ros.validateString)(properties.loginNetworkMasks));
    errors.collect(ros.propertyValidator('allowUserToChangePassword', ros.validateBoolean)(properties.allowUserToChangePassword));
    errors.collect(ros.propertyValidator('allowUserToManageAccessKeys', ros.validateBoolean)(properties.allowUserToManageAccessKeys));
    errors.collect(ros.propertyValidator('enableSaveMfaTicket', ros.validateBoolean)(properties.enableSaveMfaTicket));
    return errors.wrap('supplied properties not correct for "RosSecurityPreferenceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RAM::SecurityPreference` resource
 *
 * @param properties - the TypeScript properties of a `RosSecurityPreferenceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RAM::SecurityPreference` resource.
 */
// @ts-ignore TS6133
function rosSecurityPreferencePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosSecurityPreferencePropsValidator(properties).assertSuccess();
    }
    return {
      'AllowUserToChangePassword': ros.booleanToRosTemplate(properties.allowUserToChangePassword),
      'AllowUserToManageAccessKeys': ros.booleanToRosTemplate(properties.allowUserToManageAccessKeys),
      'AllowUserToManageMFADevices': ros.booleanToRosTemplate(properties.allowUserToManageMfaDevices),
      'AllowUserToManagePublicKeys': ros.booleanToRosTemplate(properties.allowUserToManagePublicKeys),
      'EnableSaveMFATicket': ros.booleanToRosTemplate(properties.enableSaveMfaTicket),
      'LoginNetworkMasks': ros.stringToRosTemplate(properties.loginNetworkMasks),
      'LoginSessionDuration': ros.numberToRosTemplate(properties.loginSessionDuration),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::RAM::SecurityPreference`.
 * @Note This class does not contain additional functions, so it is recommended to use the `SecurityPreference` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-securitypreference
 */
export class RosSecurityPreference extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RAM::SecurityPreference";

    /**
     * @Attribute AllowUserToChangePassword: Specifies whether RAM users can change their passwords.
     */
    public readonly attrAllowUserToChangePassword: ros.IResolvable;

    /**
     * @Attribute AllowUserToManageAccessKeys: Specifies whether RAM users can manage their AccessKey pairs.
     */
    public readonly attrAllowUserToManageAccessKeys: ros.IResolvable;

    /**
     * @Attribute AllowUserToManageMFADevices: Specifies whether RAM users can manage their MFA devices.
     */
    public readonly attrAllowUserToManageMfaDevices: ros.IResolvable;

    /**
     * @Attribute AllowUserToManagePublicKeys: Specifies whether RAM users can manage their public keys.
     */
    public readonly attrAllowUserToManagePublicKeys: ros.IResolvable;

    /**
     * @Attribute EnableSaveMFATicket: Specifies whether RAM users can save multi-factor authentication (MFA) security codes during logon.
     */
    public readonly attrEnableSaveMfaTicket: ros.IResolvable;

    /**
     * @Attribute LoginNetworkMasks: The subnet mask that specifies the IP addresses from which logon to the console is allowed.
     */
    public readonly attrLoginNetworkMasks: ros.IResolvable;

    /**
     * @Attribute LoginSessionDuration: The validity period of the logon session of the RAM user.
     */
    public readonly attrLoginSessionDuration: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property allowUserToChangePassword: Specifies whether RAM users can change their passwords. Valid values:
     * true: RAM users can change their passwords. This is the default value.
     * false: RAM users cannot change their passwords.
     */
    public allowUserToChangePassword: boolean | ros.IResolvable | undefined;

    /**
     * @Property allowUserToManageAccessKeys: Specifies whether RAM users can manage their AccessKey pairs. Valid values:
     * true: RAM users can manage their AccessKey pairs.
     * false: RAM users cannot manage their AccessKey pairs. This is the default value.
     */
    public allowUserToManageAccessKeys: boolean | ros.IResolvable | undefined;

    /**
     * @Property allowUserToManageMfaDevices: Specifies whether RAM users can manage their MFA devices. Valid values:
     * true: RAM users can manage their MFA devices. This is the default value.
     * false: RAM users cannot manage their MFA devices.
     */
    public allowUserToManageMfaDevices: boolean | ros.IResolvable | undefined;

    /**
     * @Property allowUserToManagePublicKeys: Specifies whether RAM users can manage their public keys. Valid values:
     * true: RAM users can manage their public keys.
     * false: RAM users cannot manage their public keys. This is the default value.
     * Note This parameter is valid only for the Japan site.
     */
    public allowUserToManagePublicKeys: boolean | ros.IResolvable | undefined;

    /**
     * @Property enableSaveMfaTicket: Specifies whether RAM users can save multi-factor authentication (MFA) security codes
     * during logon. The security codes are valid for 7 days. Valid values:
     * true: RAM users can save MFA security codes during logon.
     * false: RAM users cannot save MFA security codes during logon. This is the default
     * value.
     */
    public enableSaveMfaTicket: boolean | ros.IResolvable | undefined;

    /**
     * @Property loginNetworkMasks: The subnet mask that specifies the IP addresses from which logon to the console is
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
    public loginNetworkMasks: string | ros.IResolvable | undefined;

    /**
     * @Property loginSessionDuration: The validity period of the logon session of the RAM user.
     * Valid values: 6 to 24. Default value: 6. Unit: hours.
     */
    public loginSessionDuration: number | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSecurityPreferenceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSecurityPreference.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAllowUserToChangePassword = this.getAtt('AllowUserToChangePassword');
        this.attrAllowUserToManageAccessKeys = this.getAtt('AllowUserToManageAccessKeys');
        this.attrAllowUserToManageMfaDevices = this.getAtt('AllowUserToManageMFADevices');
        this.attrAllowUserToManagePublicKeys = this.getAtt('AllowUserToManagePublicKeys');
        this.attrEnableSaveMfaTicket = this.getAtt('EnableSaveMFATicket');
        this.attrLoginNetworkMasks = this.getAtt('LoginNetworkMasks');
        this.attrLoginSessionDuration = this.getAtt('LoginSessionDuration');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.allowUserToChangePassword = props.allowUserToChangePassword;
        this.allowUserToManageAccessKeys = props.allowUserToManageAccessKeys;
        this.allowUserToManageMfaDevices = props.allowUserToManageMfaDevices;
        this.allowUserToManagePublicKeys = props.allowUserToManagePublicKeys;
        this.enableSaveMfaTicket = props.enableSaveMfaTicket;
        this.loginNetworkMasks = props.loginNetworkMasks;
        this.loginSessionDuration = props.loginSessionDuration;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            allowUserToChangePassword: this.allowUserToChangePassword,
            allowUserToManageAccessKeys: this.allowUserToManageAccessKeys,
            allowUserToManageMfaDevices: this.allowUserToManageMfaDevices,
            allowUserToManagePublicKeys: this.allowUserToManagePublicKeys,
            enableSaveMfaTicket: this.enableSaveMfaTicket,
            loginNetworkMasks: this.loginNetworkMasks,
            loginSessionDuration: this.loginSessionDuration,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSecurityPreferencePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosUser`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-user
 */
export interface RosUserProps {

    /**
     * @Property userName: Specifies the user name, containing up to 64 characters.
     */
    readonly userName: string | ros.IResolvable;

    /**
     * @Property comments: Comments of ram user.
     */
    readonly comments?: string | ros.IResolvable;

    /**
     * @Property deletionForce: Whether force detach the policies and groups attached to the user. Default value is false.
     */
    readonly deletionForce?: boolean | ros.IResolvable;

    /**
     * @Property displayName: Display name, up to 128 characters or Chinese characters.
     */
    readonly displayName?: string | ros.IResolvable;

    /**
     * @Property email: Email of ram user.
     */
    readonly email?: string | ros.IResolvable;

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
    readonly mobilePhone?: string | ros.IResolvable;

    /**
     * @Property policies: Describes what actions are allowed on what resources.
     */
    readonly policies?: Array<RosUser.PoliciesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property policyAttachments: System and custom policy names to attach.
     */
    readonly policyAttachments?: RosUser.PolicyAttachmentsProperty | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('userName', ros.requiredValidator)(properties.userName));
    errors.collect(ros.propertyValidator('userName', ros.validateString)(properties.userName));
    errors.collect(ros.propertyValidator('policies', ros.listValidator(RosUser_PoliciesPropertyValidator))(properties.policies));
    errors.collect(ros.propertyValidator('email', ros.validateString)(properties.email));
    errors.collect(ros.propertyValidator('deletionForce', ros.validateBoolean)(properties.deletionForce));
    errors.collect(ros.propertyValidator('policyAttachments', RosUser_PolicyAttachmentsPropertyValidator)(properties.policyAttachments));
    if(properties.comments && (Array.isArray(properties.comments) || (typeof properties.comments) === 'string')) {
        errors.collect(ros.propertyValidator('comments', ros.validateLength)({
            data: properties.comments.length,
            min: 1,
            max: 128,
          }));
    }
    errors.collect(ros.propertyValidator('comments', ros.validateString)(properties.comments));
    errors.collect(ros.propertyValidator('groups', ros.listValidator(ros.validateAny))(properties.groups));
    errors.collect(ros.propertyValidator('displayName', ros.validateString)(properties.displayName));
    errors.collect(ros.propertyValidator('loginProfile', RosUser_LoginProfilePropertyValidator)(properties.loginProfile));
    errors.collect(ros.propertyValidator('mobilePhone', ros.validateString)(properties.mobilePhone));
    return errors.wrap('supplied properties not correct for "RosUserProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RAM::User` resource
 *
 * @param properties - the TypeScript properties of a `RosUserProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RAM::User` resource.
 */
// @ts-ignore TS6133
function rosUserPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosUserPropsValidator(properties).assertSuccess();
    }
    return {
      'UserName': ros.stringToRosTemplate(properties.userName),
      'Comments': ros.stringToRosTemplate(properties.comments),
      'DeletionForce': ros.booleanToRosTemplate(properties.deletionForce),
      'DisplayName': ros.stringToRosTemplate(properties.displayName),
      'Email': ros.stringToRosTemplate(properties.email),
      'Groups': ros.listMapper(ros.objectToRosTemplate)(properties.groups),
      'LoginProfile': rosUserLoginProfilePropertyToRosTemplate(properties.loginProfile),
      'MobilePhone': ros.stringToRosTemplate(properties.mobilePhone),
      'Policies': ros.listMapper(rosUserPoliciesPropertyToRosTemplate)(properties.policies),
      'PolicyAttachments': rosUserPolicyAttachmentsPropertyToRosTemplate(properties.policyAttachments),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::RAM::User`.
 * @Note This class does not contain additional functions, so it is recommended to use the `User` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-user
 */
export class RosUser extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RAM::User";

    /**
     * @Attribute CreateDate: Create date of ram user.
     */
    public readonly attrCreateDate: ros.IResolvable;

    /**
     * @Attribute LastLoginDate: Last login date of ram user.
     */
    public readonly attrLastLoginDate: ros.IResolvable;

    /**
     * @Attribute UserId: Id of ram user.
     */
    public readonly attrUserId: ros.IResolvable;

    /**
     * @Attribute UserName: Name of ram user.
     */
    public readonly attrUserName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property userName: Specifies the user name, containing up to 64 characters.
     */
    public userName: string | ros.IResolvable;

    /**
     * @Property comments: Comments of ram user.
     */
    public comments: string | ros.IResolvable | undefined;

    /**
     * @Property deletionForce: Whether force detach the policies and groups attached to the user. Default value is false.
     */
    public deletionForce: boolean | ros.IResolvable | undefined;

    /**
     * @Property displayName: Display name, up to 128 characters or Chinese characters.
     */
    public displayName: string | ros.IResolvable | undefined;

    /**
     * @Property email: Email of ram user.
     */
    public email: string | ros.IResolvable | undefined;

    /**
     * @Property groups: A name of a group to which you want to add the user.
     */
    public groups: Array<any | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property loginProfile: Creates a login profile for users so that they can access the AliCloud Management Console.
     */
    public loginProfile: RosUser.LoginProfileProperty | ros.IResolvable | undefined;

    /**
     * @Property mobilePhone: Phone number of ram user.
     */
    public mobilePhone: string | ros.IResolvable | undefined;

    /**
     * @Property policies: Describes what actions are allowed on what resources.
     */
    public policies: Array<RosUser.PoliciesProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property policyAttachments: System and custom policy names to attach.
     */
    public policyAttachments: RosUser.PolicyAttachmentsProperty | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosUserProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosUser.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCreateDate = this.getAtt('CreateDate');
        this.attrLastLoginDate = this.getAtt('LastLoginDate');
        this.attrUserId = this.getAtt('UserId');
        this.attrUserName = this.getAtt('UserName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.userName = props.userName;
        this.comments = props.comments;
        this.deletionForce = props.deletionForce;
        this.displayName = props.displayName;
        this.email = props.email;
        this.groups = props.groups;
        this.loginProfile = props.loginProfile;
        this.mobilePhone = props.mobilePhone;
        this.policies = props.policies;
        this.policyAttachments = props.policyAttachments;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            userName: this.userName,
            comments: this.comments,
            deletionForce: this.deletionForce,
            displayName: this.displayName,
            email: this.email,
            groups: this.groups,
            loginProfile: this.loginProfile,
            mobilePhone: this.mobilePhone,
            policies: this.policies,
            policyAttachments: this.policyAttachments,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosUserPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosUser {
    /**
     * @stability external
     */
    export interface LoginProfileProperty {
        /**
         * @Property passwordResetRequired: Specifies whether the user is required to set a new password the next time the user logs in to the AliCloud Management Console.
         */
        readonly passwordResetRequired?: boolean | ros.IResolvable;
        /**
         * @Property mfaBindRequired: Specifies whether the user must bind a multi factor authentication device at the next logon.
         */
        readonly mfaBindRequired?: boolean | ros.IResolvable;
        /**
         * @Property password: The password for the user.
         */
        readonly password?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `LoginProfileProperty`
 *
 * @param properties - the TypeScript properties of a `LoginProfileProperty`
 *
 * @returns the result of the validation.
 */
function RosUser_LoginProfilePropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('passwordResetRequired', ros.validateBoolean)(properties.passwordResetRequired));
    errors.collect(ros.propertyValidator('mfaBindRequired', ros.validateBoolean)(properties.mfaBindRequired));
    if(properties.password && (Array.isArray(properties.password) || (typeof properties.password) === 'string')) {
        errors.collect(ros.propertyValidator('password', ros.validateLength)({
            data: properties.password.length,
            min: 8,
            max: 32,
          }));
    }
    errors.collect(ros.propertyValidator('password', ros.validateString)(properties.password));
    return errors.wrap('supplied properties not correct for "LoginProfileProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RAM::User.LoginProfile` resource
 *
 * @param properties - the TypeScript properties of a `LoginProfileProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RAM::User.LoginProfile` resource.
 */
// @ts-ignore TS6133
function rosUserLoginProfilePropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosUser_LoginProfilePropertyValidator(properties).assertSuccess();
    return {
      'PasswordResetRequired': ros.booleanToRosTemplate(properties.passwordResetRequired),
      'MFABindRequired': ros.booleanToRosTemplate(properties.mfaBindRequired),
      'Password': ros.stringToRosTemplate(properties.password),
    };
}

export namespace RosUser {
    /**
     * @stability external
     */
    export interface PoliciesProperty {
        /**
         * @Property ignoreExisting: Whether to ignore existing policy
     * False: ROS will perform a uniqueness check.If a policy with the same name exists, an error will be reported when creating it.
     * True: ROS will not check the uniqueness.If there is a policy with the same name, the policy creation process will be ignored.
     * If the policy is not created by ROS, it will be ignored during update and delete stage.
         */
        readonly ignoreExisting?: boolean | ros.IResolvable;
        /**
         * @Property description: Specifies the authorization policy description, containing up to 1024 characters.
         */
        readonly description?: string | ros.IResolvable;
        /**
         * @Property policyName: Specifies the authorization policy name, containing up to 128 characters.
         */
        readonly policyName: string | ros.IResolvable;
        /**
         * @Property policyDocument: A policy document that describes what actions are allowed on which resources.
         */
        readonly policyDocument: RosUser.PolicyDocumentProperty | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `PoliciesProperty`
 *
 * @param properties - the TypeScript properties of a `PoliciesProperty`
 *
 * @returns the result of the validation.
 */
function RosUser_PoliciesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('ignoreExisting', ros.validateBoolean)(properties.ignoreExisting));
    if(properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: undefined,
            max: 1024,
          }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('policyName', ros.requiredValidator)(properties.policyName));
    if(properties.policyName && (Array.isArray(properties.policyName) || (typeof properties.policyName) === 'string')) {
        errors.collect(ros.propertyValidator('policyName', ros.validateLength)({
            data: properties.policyName.length,
            min: undefined,
            max: 128,
          }));
    }
    errors.collect(ros.propertyValidator('policyName', ros.validateString)(properties.policyName));
    errors.collect(ros.propertyValidator('policyDocument', ros.requiredValidator)(properties.policyDocument));
    errors.collect(ros.propertyValidator('policyDocument', RosUser_PolicyDocumentPropertyValidator)(properties.policyDocument));
    return errors.wrap('supplied properties not correct for "PoliciesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RAM::User.Policies` resource
 *
 * @param properties - the TypeScript properties of a `PoliciesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RAM::User.Policies` resource.
 */
// @ts-ignore TS6133
function rosUserPoliciesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosUser_PoliciesPropertyValidator(properties).assertSuccess();
    return {
      'IgnoreExisting': ros.booleanToRosTemplate(properties.ignoreExisting),
      'Description': ros.stringToRosTemplate(properties.description),
      'PolicyName': ros.stringToRosTemplate(properties.policyName),
      'PolicyDocument': rosUserPolicyDocumentPropertyToRosTemplate(properties.policyDocument),
    };
}

export namespace RosUser {
    /**
     * @stability external
     */
    export interface PolicyAttachmentsProperty {
        /**
         * @Property custom: undefined
         */
        readonly custom?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property system: undefined
         */
        readonly system?: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `PolicyAttachmentsProperty`
 *
 * @param properties - the TypeScript properties of a `PolicyAttachmentsProperty`
 *
 * @returns the result of the validation.
 */
function RosUser_PolicyAttachmentsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.custom && (Array.isArray(properties.custom) || (typeof properties.custom) === 'string')) {
        errors.collect(ros.propertyValidator('custom', ros.validateLength)({
            data: properties.custom.length,
            min: undefined,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('custom', ros.listValidator(ros.validateString))(properties.custom));
    if(properties.system && (Array.isArray(properties.system) || (typeof properties.system) === 'string')) {
        errors.collect(ros.propertyValidator('system', ros.validateLength)({
            data: properties.system.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('system', ros.listValidator(ros.validateString))(properties.system));
    return errors.wrap('supplied properties not correct for "PolicyAttachmentsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RAM::User.PolicyAttachments` resource
 *
 * @param properties - the TypeScript properties of a `PolicyAttachmentsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RAM::User.PolicyAttachments` resource.
 */
// @ts-ignore TS6133
function rosUserPolicyAttachmentsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosUser_PolicyAttachmentsPropertyValidator(properties).assertSuccess();
    return {
      'Custom': ros.listMapper(ros.stringToRosTemplate)(properties.custom),
      'System': ros.listMapper(ros.stringToRosTemplate)(properties.system),
    };
}

export namespace RosUser {
    /**
     * @stability external
     */
    export interface PolicyDocumentProperty {
        /**
         * @Property version: You can use versions to track changes to a managed policy.
         */
        readonly version: string | ros.IResolvable;
        /**
         * @Property statement: A policy consists of one or more statements.
         */
        readonly statement: Array<RosUser.StatementProperty | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `PolicyDocumentProperty`
 *
 * @param properties - the TypeScript properties of a `PolicyDocumentProperty`
 *
 * @returns the result of the validation.
 */
function RosUser_PolicyDocumentPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('version', ros.requiredValidator)(properties.version));
    errors.collect(ros.propertyValidator('version', ros.validateString)(properties.version));
    errors.collect(ros.propertyValidator('statement', ros.requiredValidator)(properties.statement));
    errors.collect(ros.propertyValidator('statement', ros.listValidator(RosUser_StatementPropertyValidator))(properties.statement));
    return errors.wrap('supplied properties not correct for "PolicyDocumentProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RAM::User.PolicyDocument` resource
 *
 * @param properties - the TypeScript properties of a `PolicyDocumentProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RAM::User.PolicyDocument` resource.
 */
// @ts-ignore TS6133
function rosUserPolicyDocumentPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosUser_PolicyDocumentPropertyValidator(properties).assertSuccess();
    return {
      'Version': ros.stringToRosTemplate(properties.version),
      'Statement': ros.listMapper(rosUserStatementPropertyToRosTemplate)(properties.statement),
    };
}

export namespace RosUser {
    /**
     * @stability external
     */
    export interface StatementProperty {
        /**
         * @Property condition: What conditions should be satisfied.
         */
        readonly condition?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
        /**
         * @Property action: What actions you will allow.
         */
        readonly action?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property resource: Which resources you allow the action on.
         */
        readonly resource?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property effect: What the effect will be when the user requests access-either allow or deny.
         */
        readonly effect?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `StatementProperty`
 *
 * @param properties - the TypeScript properties of a `StatementProperty`
 *
 * @returns the result of the validation.
 */
function RosUser_StatementPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('condition', ros.hashValidator(ros.validateAny))(properties.condition));
    errors.collect(ros.propertyValidator('action', ros.listValidator(ros.validateAny))(properties.action));
    errors.collect(ros.propertyValidator('resource', ros.listValidator(ros.validateAny))(properties.resource));
    errors.collect(ros.propertyValidator('effect', ros.validateString)(properties.effect));
    return errors.wrap('supplied properties not correct for "StatementProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RAM::User.Statement` resource
 *
 * @param properties - the TypeScript properties of a `StatementProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RAM::User.Statement` resource.
 */
// @ts-ignore TS6133
function rosUserStatementPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosUser_StatementPropertyValidator(properties).assertSuccess();
    return {
      'Condition': ros.hashMapper(ros.objectToRosTemplate)(properties.condition),
      'Action': ros.listMapper(ros.objectToRosTemplate)(properties.action),
      'Resource': ros.listMapper(ros.objectToRosTemplate)(properties.resource),
      'Effect': ros.stringToRosTemplate(properties.effect),
    };
}

/**
 * Properties for defining a `RosUserToGroupAddition`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-usertogroupaddition
 */
export interface RosUserToGroupAdditionProps {

    /**
     * @Property groupName: Specifies the group name, containing up to 64 characters.
     */
    readonly groupName: string | ros.IResolvable;

    /**
     * @Property users: list name of a users to which you want to add the group.
     */
    readonly users: Array<any | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosUserToGroupAdditionProps`
 *
 * @param properties - the TypeScript properties of a `RosUserToGroupAdditionProps`
 *
 * @returns the result of the validation.
 */
function RosUserToGroupAdditionPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('groupName', ros.requiredValidator)(properties.groupName));
    errors.collect(ros.propertyValidator('groupName', ros.validateString)(properties.groupName));
    errors.collect(ros.propertyValidator('users', ros.requiredValidator)(properties.users));
    errors.collect(ros.propertyValidator('users', ros.listValidator(ros.validateAny))(properties.users));
    return errors.wrap('supplied properties not correct for "RosUserToGroupAdditionProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RAM::UserToGroupAddition` resource
 *
 * @param properties - the TypeScript properties of a `RosUserToGroupAdditionProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RAM::UserToGroupAddition` resource.
 */
// @ts-ignore TS6133
function rosUserToGroupAdditionPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosUserToGroupAdditionPropsValidator(properties).assertSuccess();
    }
    return {
      'GroupName': ros.stringToRosTemplate(properties.groupName),
      'Users': ros.listMapper(ros.objectToRosTemplate)(properties.users),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::RAM::UserToGroupAddition`.
 * @Note This class does not contain additional functions, so it is recommended to use the `UserToGroupAddition` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-usertogroupaddition
 */
export class RosUserToGroupAddition extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RAM::UserToGroupAddition";

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property groupName: Specifies the group name, containing up to 64 characters.
     */
    public groupName: string | ros.IResolvable;

    /**
     * @Property users: list name of a users to which you want to add the group.
     */
    public users: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosUserToGroupAdditionProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosUserToGroupAddition.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.groupName = props.groupName;
        this.users = props.users;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            groupName: this.groupName,
            users: this.users,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosUserToGroupAdditionPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
