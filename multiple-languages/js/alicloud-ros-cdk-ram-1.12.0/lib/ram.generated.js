"use strict";
// Generated from the AliCloud ROS Resource Specification
Object.defineProperty(exports, "__esModule", { value: true });
exports.RosUserToGroupAddition = exports.RosUser = exports.RosSecurityPreference = exports.RosSAMLProvider = exports.RosRole = exports.RosRamAccountAlias = exports.RosOIDCProvider = exports.RosManagedPolicy = exports.RosLoginProfile = exports.RosGroup = exports.RosAttachPolicyToUser = exports.RosAttachPolicyToRole = exports.RosAttachPolicyToGroup = exports.RosApplication = exports.RosAppSecret = exports.RosAccessKey = void 0;
const ros = require("@alicloud/ros-cdk-core");
/**
 * Determine whether the given properties match those of a `RosAccessKeyProps`
 *
 * @param properties - the TypeScript properties of a `RosAccessKeyProps`
 *
 * @returns the result of the validation.
 */
function RosAccessKeyPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosAccessKeyPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosAccessKeyPropsValidator(properties).assertSuccess();
    }
    return {
        'UserName': ros.stringToRosTemplate(properties.userName),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::RAM::AccessKey`The , which resource type retrieves a specified RAM user’s AccessKey ID, AccessKey secret, and AccessKey status.
 * @Note This class does not contain additional functions, so it is recommended to use the `AccessKey` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-accesskey
 */
class RosAccessKey extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosAccessKey.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAccessKeyId = this.getAtt('AccessKeyId');
        this.attrAccessKeySecret = this.getAtt('AccessKeySecret');
        this.attrStatus = this.getAtt('Status');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.userName = props.userName;
    }
    get rosProperties() {
        return {
            userName: this.userName,
        };
    }
    renderProperties(props) {
        return rosAccessKeyPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosAccessKey = RosAccessKey;
/**
 * The resource type name for this resource class.
 */
RosAccessKey.ROS_RESOURCE_TYPE_NAME = "ALIYUN::RAM::AccessKey";
/**
 * Determine whether the given properties match those of a `RosAppSecretProps`
 *
 * @param properties - the TypeScript properties of a `RosAppSecretProps`
 *
 * @returns the result of the validation.
 */
function RosAppSecretPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosAppSecretPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosAppSecretPropsValidator(properties).assertSuccess();
    }
    return {
        'AppId': ros.stringToRosTemplate(properties.appId),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::RAM::AppSecret`, which is used to create an application secret.
 * @Note This class does not contain additional functions, so it is recommended to use the `AppSecret` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-appsecret
 */
class RosAppSecret extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosAppSecret.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAppSecretId = this.getAtt('AppSecretId');
        this.attrAppSecretValue = this.getAtt('AppSecretValue');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.appId = props.appId;
    }
    get rosProperties() {
        return {
            appId: this.appId,
        };
    }
    renderProperties(props) {
        return rosAppSecretPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosAppSecret = RosAppSecret;
/**
 * The resource type name for this resource class.
 */
RosAppSecret.ROS_RESOURCE_TYPE_NAME = "ALIYUN::RAM::AppSecret";
/**
 * Determine whether the given properties match those of a `RosApplicationProps`
 *
 * @param properties - the TypeScript properties of a `RosApplicationProps`
 *
 * @returns the result of the validation.
 */
function RosApplicationPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('predefinedScopes', ros.listValidator(ros.validateString))(properties.predefinedScopes));
    errors.collect(ros.propertyValidator('secretRequired', ros.validateBoolean)(properties.secretRequired));
    errors.collect(ros.propertyValidator('displayName', ros.requiredValidator)(properties.displayName));
    if (properties.displayName && (Array.isArray(properties.displayName) || (typeof properties.displayName) === 'string')) {
        errors.collect(ros.propertyValidator('displayName', ros.validateLength)({
            data: properties.displayName.length,
            min: undefined,
            max: 24,
        }));
    }
    errors.collect(ros.propertyValidator('displayName', ros.validateString)(properties.displayName));
    errors.collect(ros.propertyValidator('redirectUris', ros.listValidator(ros.validateString))(properties.redirectUris));
    if (properties.accessTokenValidity && (typeof properties.accessTokenValidity) !== 'object') {
        errors.collect(ros.propertyValidator('accessTokenValidity', ros.validateRange)({
            data: properties.accessTokenValidity,
            min: 900,
            max: 10800,
        }));
    }
    errors.collect(ros.propertyValidator('accessTokenValidity', ros.validateNumber)(properties.accessTokenValidity));
    errors.collect(ros.propertyValidator('isMultiTenant', ros.validateBoolean)(properties.isMultiTenant));
    if (properties.refreshTokenValidity && (typeof properties.refreshTokenValidity) !== 'object') {
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
    if (properties.appName && (typeof properties.appName) !== 'object') {
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
function rosApplicationPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::RAM::Application`, which is used to create an application.
 * @Note This class does not contain additional functions, so it is recommended to use the `Application` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-application
 */
class RosApplication extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
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
    get rosProperties() {
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
    renderProperties(props) {
        return rosApplicationPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosApplication = RosApplication;
/**
 * The resource type name for this resource class.
 */
RosApplication.ROS_RESOURCE_TYPE_NAME = "ALIYUN::RAM::Application";
/**
 * Determine whether the given properties match those of a `RosAttachPolicyToGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosAttachPolicyToGroupProps`
 *
 * @returns the result of the validation.
 */
function RosAttachPolicyToGroupPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('groupName', ros.requiredValidator)(properties.groupName));
    errors.collect(ros.propertyValidator('groupName', ros.validateString)(properties.groupName));
    errors.collect(ros.propertyValidator('policyType', ros.requiredValidator)(properties.policyType));
    if (properties.policyType && (typeof properties.policyType) !== 'object') {
        errors.collect(ros.propertyValidator('policyType', ros.validateAllowedValues)({
            data: properties.policyType,
            allowedValues: ["Custom", "System"],
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
function rosAttachPolicyToGroupPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosAttachPolicyToGroupPropsValidator(properties).assertSuccess();
    }
    return {
        'GroupName': ros.stringToRosTemplate(properties.groupName),
        'PolicyName': ros.stringToRosTemplate(properties.policyName),
        'PolicyType': ros.stringToRosTemplate(properties.policyType),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::RAM::AttachPolicyToGroup`, which is used to attach a policy to a user group.
 * @Note This class does not contain additional functions, so it is recommended to use the `AttachPolicyToGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-attachpolicytogroup
 */
class RosAttachPolicyToGroup extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosAttachPolicyToGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrGroupName = this.getAtt('GroupName');
        this.attrPolicyName = this.getAtt('PolicyName');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.groupName = props.groupName;
        this.policyName = props.policyName;
        this.policyType = props.policyType;
    }
    get rosProperties() {
        return {
            groupName: this.groupName,
            policyName: this.policyName,
            policyType: this.policyType,
        };
    }
    renderProperties(props) {
        return rosAttachPolicyToGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosAttachPolicyToGroup = RosAttachPolicyToGroup;
/**
 * The resource type name for this resource class.
 */
RosAttachPolicyToGroup.ROS_RESOURCE_TYPE_NAME = "ALIYUN::RAM::AttachPolicyToGroup";
/**
 * Determine whether the given properties match those of a `RosAttachPolicyToRoleProps`
 *
 * @param properties - the TypeScript properties of a `RosAttachPolicyToRoleProps`
 *
 * @returns the result of the validation.
 */
function RosAttachPolicyToRolePropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('policyType', ros.requiredValidator)(properties.policyType));
    if (properties.policyType && (typeof properties.policyType) !== 'object') {
        errors.collect(ros.propertyValidator('policyType', ros.validateAllowedValues)({
            data: properties.policyType,
            allowedValues: ["System", "Custom"],
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
function rosAttachPolicyToRolePropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosAttachPolicyToRolePropsValidator(properties).assertSuccess();
    }
    return {
        'PolicyName': ros.stringToRosTemplate(properties.policyName),
        'PolicyType': ros.stringToRosTemplate(properties.policyType),
        'RoleName': ros.stringToRosTemplate(properties.roleName),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::RAM::AttachPolicyToRole`, which is used to attach a policy to a specified role.
 * @Note This class does not contain additional functions, so it is recommended to use the `AttachPolicyToRole` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-attachpolicytorole
 */
class RosAttachPolicyToRole extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosAttachPolicyToRole.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.policyName = props.policyName;
        this.policyType = props.policyType;
        this.roleName = props.roleName;
    }
    get rosProperties() {
        return {
            policyName: this.policyName,
            policyType: this.policyType,
            roleName: this.roleName,
        };
    }
    renderProperties(props) {
        return rosAttachPolicyToRolePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosAttachPolicyToRole = RosAttachPolicyToRole;
/**
 * The resource type name for this resource class.
 */
RosAttachPolicyToRole.ROS_RESOURCE_TYPE_NAME = "ALIYUN::RAM::AttachPolicyToRole";
/**
 * Determine whether the given properties match those of a `RosAttachPolicyToUserProps`
 *
 * @param properties - the TypeScript properties of a `RosAttachPolicyToUserProps`
 *
 * @returns the result of the validation.
 */
function RosAttachPolicyToUserPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('policyType', ros.requiredValidator)(properties.policyType));
    if (properties.policyType && (typeof properties.policyType) !== 'object') {
        errors.collect(ros.propertyValidator('policyType', ros.validateAllowedValues)({
            data: properties.policyType,
            allowedValues: ["System", "Custom"],
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
function rosAttachPolicyToUserPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosAttachPolicyToUserPropsValidator(properties).assertSuccess();
    }
    return {
        'PolicyName': ros.stringToRosTemplate(properties.policyName),
        'PolicyType': ros.stringToRosTemplate(properties.policyType),
        'UserName': ros.stringToRosTemplate(properties.userName),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::RAM::AttachPolicyToUser`, which is used to grant permissions to a specified user.
 * @Note This class does not contain additional functions, so it is recommended to use the `AttachPolicyToUser` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-attachpolicytouser
 */
class RosAttachPolicyToUser extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosAttachPolicyToUser.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.policyName = props.policyName;
        this.policyType = props.policyType;
        this.userName = props.userName;
    }
    get rosProperties() {
        return {
            policyName: this.policyName,
            policyType: this.policyType,
            userName: this.userName,
        };
    }
    renderProperties(props) {
        return rosAttachPolicyToUserPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosAttachPolicyToUser = RosAttachPolicyToUser;
/**
 * The resource type name for this resource class.
 */
RosAttachPolicyToUser.ROS_RESOURCE_TYPE_NAME = "ALIYUN::RAM::AttachPolicyToUser";
/**
 * Determine whether the given properties match those of a `RosGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosGroupProps`
 *
 * @returns the result of the validation.
 */
function RosGroupPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('ignoreExisting', ros.validateBoolean)(properties.ignoreExisting));
    errors.collect(ros.propertyValidator('groupName', ros.requiredValidator)(properties.groupName));
    errors.collect(ros.propertyValidator('groupName', ros.validateString)(properties.groupName));
    errors.collect(ros.propertyValidator('policies', ros.listValidator(RosGroup_PoliciesPropertyValidator))(properties.policies));
    errors.collect(ros.propertyValidator('policyAttachments', RosGroup_PolicyAttachmentsPropertyValidator)(properties.policyAttachments));
    errors.collect(ros.propertyValidator('deletionForce', ros.validateBoolean)(properties.deletionForce));
    if (properties.comments && (Array.isArray(properties.comments) || (typeof properties.comments) === 'string')) {
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
function rosGroupPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::RAM::Group`, which is used to create a Resource Access Management (RAM) user group.
 * @Note This class does not contain additional functions, so it is recommended to use the `Group` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-group
 */
class RosGroup extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
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
    get rosProperties() {
        return {
            groupName: this.groupName,
            comments: this.comments,
            deletionForce: this.deletionForce,
            ignoreExisting: this.ignoreExisting,
            policies: this.policies,
            policyAttachments: this.policyAttachments,
        };
    }
    renderProperties(props) {
        return rosGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosGroup = RosGroup;
/**
 * The resource type name for this resource class.
 */
RosGroup.ROS_RESOURCE_TYPE_NAME = "ALIYUN::RAM::Group";
/**
 * Determine whether the given properties match those of a `PoliciesProperty`
 *
 * @param properties - the TypeScript properties of a `PoliciesProperty`
 *
 * @returns the result of the validation.
 */
function RosGroup_PoliciesPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('ignoreExisting', ros.validateBoolean)(properties.ignoreExisting));
    if (properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: undefined,
            max: 1024,
        }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('policyName', ros.requiredValidator)(properties.policyName));
    if (properties.policyName && (Array.isArray(properties.policyName) || (typeof properties.policyName) === 'string')) {
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
function rosGroupPoliciesPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosGroup_PoliciesPropertyValidator(properties).assertSuccess();
    return {
        'IgnoreExisting': ros.booleanToRosTemplate(properties.ignoreExisting),
        'Description': ros.stringToRosTemplate(properties.description),
        'PolicyName': ros.stringToRosTemplate(properties.policyName),
        'PolicyDocument': rosGroupPolicyDocumentPropertyToRosTemplate(properties.policyDocument),
    };
}
/**
 * Determine whether the given properties match those of a `PolicyAttachmentsProperty`
 *
 * @param properties - the TypeScript properties of a `PolicyAttachmentsProperty`
 *
 * @returns the result of the validation.
 */
function RosGroup_PolicyAttachmentsPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.custom && (Array.isArray(properties.custom) || (typeof properties.custom) === 'string')) {
        errors.collect(ros.propertyValidator('custom', ros.validateLength)({
            data: properties.custom.length,
            min: undefined,
            max: 5,
        }));
    }
    errors.collect(ros.propertyValidator('custom', ros.listValidator(ros.validateString))(properties.custom));
    if (properties.system && (Array.isArray(properties.system) || (typeof properties.system) === 'string')) {
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
function rosGroupPolicyAttachmentsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosGroup_PolicyAttachmentsPropertyValidator(properties).assertSuccess();
    return {
        'Custom': ros.listMapper(ros.stringToRosTemplate)(properties.custom),
        'System': ros.listMapper(ros.stringToRosTemplate)(properties.system),
    };
}
/**
 * Determine whether the given properties match those of a `PolicyDocumentProperty`
 *
 * @param properties - the TypeScript properties of a `PolicyDocumentProperty`
 *
 * @returns the result of the validation.
 */
function RosGroup_PolicyDocumentPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosGroupPolicyDocumentPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosGroup_PolicyDocumentPropertyValidator(properties).assertSuccess();
    return {
        'Version': ros.stringToRosTemplate(properties.version),
        'Statement': ros.listMapper(rosGroupStatementPropertyToRosTemplate)(properties.statement),
    };
}
/**
 * Determine whether the given properties match those of a `StatementProperty`
 *
 * @param properties - the TypeScript properties of a `StatementProperty`
 *
 * @returns the result of the validation.
 */
function RosGroup_StatementPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosGroupStatementPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosGroup_StatementPropertyValidator(properties).assertSuccess();
    return {
        'Condition': ros.hashMapper(ros.objectToRosTemplate)(properties.condition),
        'Action': ros.listMapper(ros.objectToRosTemplate)(properties.action),
        'Resource': ros.listMapper(ros.objectToRosTemplate)(properties.resource),
        'Effect': ros.stringToRosTemplate(properties.effect),
    };
}
/**
 * Determine whether the given properties match those of a `RosLoginProfileProps`
 *
 * @param properties - the TypeScript properties of a `RosLoginProfileProps`
 *
 * @returns the result of the validation.
 */
function RosLoginProfilePropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.status && (typeof properties.status) !== 'object') {
        errors.collect(ros.propertyValidator('status', ros.validateAllowedValues)({
            data: properties.status,
            allowedValues: ["Activate", "Inactivate"],
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
function rosLoginProfilePropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::RAM::LoginProfile`, which is used to create logon configurations for a Resource Access Management (RAM) user.
 * @Note This class does not contain additional functions, so it is recommended to use the `LoginProfile` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-loginprofile
 */
class RosLoginProfile extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
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
    get rosProperties() {
        return {
            userPrincipalName: this.userPrincipalName,
            generateRandomPassword: this.generateRandomPassword,
            mfaBindRequired: this.mfaBindRequired,
            password: this.password,
            passwordResetRequired: this.passwordResetRequired,
            status: this.status,
        };
    }
    renderProperties(props) {
        return rosLoginProfilePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosLoginProfile = RosLoginProfile;
/**
 * The resource type name for this resource class.
 */
RosLoginProfile.ROS_RESOURCE_TYPE_NAME = "ALIYUN::RAM::LoginProfile";
/**
 * Determine whether the given properties match those of a `RosManagedPolicyProps`
 *
 * @param properties - the TypeScript properties of a `RosManagedPolicyProps`
 *
 * @returns the result of the validation.
 */
function RosManagedPolicyPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('ignoreExisting', ros.validateBoolean)(properties.ignoreExisting));
    if (properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: undefined,
            max: 1024,
        }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('groups', ros.listValidator(ros.validateAny))(properties.groups));
    errors.collect(ros.propertyValidator('policyName', ros.requiredValidator)(properties.policyName));
    if (properties.policyName && (Array.isArray(properties.policyName) || (typeof properties.policyName) === 'string')) {
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
function rosManagedPolicyPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
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
class RosManagedPolicy extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
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
    get rosProperties() {
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
    renderProperties(props) {
        return rosManagedPolicyPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosManagedPolicy = RosManagedPolicy;
/**
 * The resource type name for this resource class.
 */
RosManagedPolicy.ROS_RESOURCE_TYPE_NAME = "ALIYUN::RAM::ManagedPolicy";
/**
 * Determine whether the given properties match those of a `PolicyDocumentProperty`
 *
 * @param properties - the TypeScript properties of a `PolicyDocumentProperty`
 *
 * @returns the result of the validation.
 */
function RosManagedPolicy_PolicyDocumentPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosManagedPolicyPolicyDocumentPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosManagedPolicy_PolicyDocumentPropertyValidator(properties).assertSuccess();
    return {
        'Version': ros.stringToRosTemplate(properties.version),
        'Statement': ros.listMapper(rosManagedPolicyStatementPropertyToRosTemplate)(properties.statement),
    };
}
/**
 * Determine whether the given properties match those of a `StatementProperty`
 *
 * @param properties - the TypeScript properties of a `StatementProperty`
 *
 * @returns the result of the validation.
 */
function RosManagedPolicy_StatementPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosManagedPolicyStatementPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosManagedPolicy_StatementPropertyValidator(properties).assertSuccess();
    return {
        'Condition': ros.hashMapper(ros.objectToRosTemplate)(properties.condition),
        'Action': ros.listMapper(ros.objectToRosTemplate)(properties.action),
        'Resource': ros.listMapper(ros.objectToRosTemplate)(properties.resource),
        'Effect': ros.stringToRosTemplate(properties.effect),
    };
}
/**
 * Determine whether the given properties match those of a `RosOIDCProviderProps`
 *
 * @param properties - the TypeScript properties of a `RosOIDCProviderProps`
 *
 * @returns the result of the validation.
 */
function RosOIDCProviderPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: undefined,
            max: 256,
        }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('oidcProviderName', ros.requiredValidator)(properties.oidcProviderName));
    if (properties.oidcProviderName && (Array.isArray(properties.oidcProviderName) || (typeof properties.oidcProviderName) === 'string')) {
        errors.collect(ros.propertyValidator('oidcProviderName', ros.validateLength)({
            data: properties.oidcProviderName.length,
            min: undefined,
            max: 128,
        }));
    }
    if (properties.oidcProviderName && (typeof properties.oidcProviderName) !== 'object') {
        errors.collect(ros.propertyValidator('oidcProviderName', ros.validateAllowedPattern)({
            data: properties.oidcProviderName,
            reg: /^[a-zA-Z0-9][a-zA-Z0-9._-]{0,126}[a-zA-Z0-9]$/
        }));
    }
    errors.collect(ros.propertyValidator('oidcProviderName', ros.validateString)(properties.oidcProviderName));
    errors.collect(ros.propertyValidator('fingerprints', ros.requiredValidator)(properties.fingerprints));
    if (properties.fingerprints && (Array.isArray(properties.fingerprints) || (typeof properties.fingerprints) === 'string')) {
        errors.collect(ros.propertyValidator('fingerprints', ros.validateLength)({
            data: properties.fingerprints.length,
            min: 1,
            max: 5,
        }));
    }
    errors.collect(ros.propertyValidator('fingerprints', ros.listValidator(ros.validateString))(properties.fingerprints));
    errors.collect(ros.propertyValidator('issuerUrl', ros.requiredValidator)(properties.issuerUrl));
    if (properties.issuerUrl && (Array.isArray(properties.issuerUrl) || (typeof properties.issuerUrl) === 'string')) {
        errors.collect(ros.propertyValidator('issuerUrl', ros.validateLength)({
            data: properties.issuerUrl.length,
            min: undefined,
            max: 255,
        }));
    }
    errors.collect(ros.propertyValidator('issuerUrl', ros.validateString)(properties.issuerUrl));
    if (properties.issuanceLimitTime && (typeof properties.issuanceLimitTime) !== 'object') {
        errors.collect(ros.propertyValidator('issuanceLimitTime', ros.validateRange)({
            data: properties.issuanceLimitTime,
            min: 1,
            max: 168,
        }));
    }
    errors.collect(ros.propertyValidator('issuanceLimitTime', ros.validateNumber)(properties.issuanceLimitTime));
    if (properties.clientIds && (Array.isArray(properties.clientIds) || (typeof properties.clientIds) === 'string')) {
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
function rosOIDCProviderPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::RAM::OIDCProvider`, which is used to create an OpenID Connect (OIDC) identity provider (IdP).
 * @Note This class does not contain additional functions, so it is recommended to use the `OIDCProvider` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-oidcprovider
 */
class RosOIDCProvider extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
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
    get rosProperties() {
        return {
            fingerprints: this.fingerprints,
            issuerUrl: this.issuerUrl,
            oidcProviderName: this.oidcProviderName,
            clientIds: this.clientIds,
            description: this.description,
            issuanceLimitTime: this.issuanceLimitTime,
        };
    }
    renderProperties(props) {
        return rosOIDCProviderPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosOIDCProvider = RosOIDCProvider;
/**
 * The resource type name for this resource class.
 */
RosOIDCProvider.ROS_RESOURCE_TYPE_NAME = "ALIYUN::RAM::OIDCProvider";
/**
 * Determine whether the given properties match those of a `RosRamAccountAliasProps`
 *
 * @param properties - the TypeScript properties of a `RosRamAccountAliasProps`
 *
 * @returns the result of the validation.
 */
function RosRamAccountAliasPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('accountAlias', ros.requiredValidator)(properties.accountAlias));
    if (properties.accountAlias && (typeof properties.accountAlias) !== 'object') {
        errors.collect(ros.propertyValidator('accountAlias', ros.validateAllowedPattern)({
            data: properties.accountAlias,
            reg: /[-0-9.a-zA-Z_]{1,50}/
        }));
    }
    if (properties.accountAlias && (Array.isArray(properties.accountAlias) || (typeof properties.accountAlias) === 'string')) {
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
function rosRamAccountAliasPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosRamAccountAliasPropsValidator(properties).assertSuccess();
    }
    return {
        'AccountAlias': ros.stringToRosTemplate(properties.accountAlias),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::RAM::RamAccountAlias`, which is used to create an alias for an Alibaba Cloud account.
 * @Note This class does not contain additional functions, so it is recommended to use the `RamAccountAlias` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-ramaccountalias
 */
class RosRamAccountAlias extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosRamAccountAlias.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAccountAlias = this.getAtt('AccountAlias');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.accountAlias = props.accountAlias;
    }
    get rosProperties() {
        return {
            accountAlias: this.accountAlias,
        };
    }
    renderProperties(props) {
        return rosRamAccountAliasPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosRamAccountAlias = RosRamAccountAlias;
/**
 * The resource type name for this resource class.
 */
RosRamAccountAlias.ROS_RESOURCE_TYPE_NAME = "ALIYUN::RAM::RamAccountAlias";
/**
 * Determine whether the given properties match those of a `RosRoleProps`
 *
 * @param properties - the TypeScript properties of a `RosRoleProps`
 *
 * @returns the result of the validation.
 */
function RosRolePropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('ignoreExisting', ros.validateBoolean)(properties.ignoreExisting));
    if (properties.maxSessionDuration && (typeof properties.maxSessionDuration) !== 'object') {
        errors.collect(ros.propertyValidator('maxSessionDuration', ros.validateRange)({
            data: properties.maxSessionDuration,
            min: 3600,
            max: 43200,
        }));
    }
    errors.collect(ros.propertyValidator('maxSessionDuration', ros.validateNumber)(properties.maxSessionDuration));
    errors.collect(ros.propertyValidator('roleName', ros.requiredValidator)(properties.roleName));
    errors.collect(ros.propertyValidator('roleName', ros.validateString)(properties.roleName));
    if (properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: undefined,
            max: 1024,
        }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('policies', ros.listValidator(RosRole_PoliciesPropertyValidator))(properties.policies));
    errors.collect(ros.propertyValidator('policyAttachments', RosRole_PolicyAttachmentsPropertyValidator)(properties.policyAttachments));
    errors.collect(ros.propertyValidator('deletionForce', ros.validateBoolean)(properties.deletionForce));
    errors.collect(ros.propertyValidator('assumeRolePolicyDocument', ros.requiredValidator)(properties.assumeRolePolicyDocument));
    errors.collect(ros.propertyValidator('assumeRolePolicyDocument', RosRole_AssumeRolePolicyDocumentPropertyValidator)(properties.assumeRolePolicyDocument));
    if (properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
        }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosRole_TagsPropertyValidator))(properties.tags));
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
function rosRolePropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
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
        'Tags': ros.listMapper(rosRoleTagsPropertyToRosTemplate)(properties.tags),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::RAM::Role`The , which resource creates a RAM role.
 * @Note This class does not contain additional functions, so it is recommended to use the `Role` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-role
 */
class RosRole extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
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
        this.tags = props.tags;
    }
    get rosProperties() {
        return {
            assumeRolePolicyDocument: this.assumeRolePolicyDocument,
            roleName: this.roleName,
            deletionForce: this.deletionForce,
            description: this.description,
            ignoreExisting: this.ignoreExisting,
            maxSessionDuration: this.maxSessionDuration,
            policies: this.policies,
            policyAttachments: this.policyAttachments,
            tags: this.tags,
        };
    }
    renderProperties(props) {
        return rosRolePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosRole = RosRole;
/**
 * The resource type name for this resource class.
 */
RosRole.ROS_RESOURCE_TYPE_NAME = "ALIYUN::RAM::Role";
/**
 * Determine whether the given properties match those of a `AssumeRolePolicyDocumentProperty`
 *
 * @param properties - the TypeScript properties of a `AssumeRolePolicyDocumentProperty`
 *
 * @returns the result of the validation.
 */
function RosRole_AssumeRolePolicyDocumentPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosRoleAssumeRolePolicyDocumentPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosRole_AssumeRolePolicyDocumentPropertyValidator(properties).assertSuccess();
    return {
        'Version': ros.stringToRosTemplate(properties.version),
        'Statement': ros.listMapper(rosRoleStatementPropertyToRosTemplate)(properties.statement),
    };
}
/**
 * Determine whether the given properties match those of a `ConditionProperty`
 *
 * @param properties - the TypeScript properties of a `ConditionProperty`
 *
 * @returns the result of the validation.
 */
function RosRole_ConditionPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('stringEquals', ros.hashValidator(ros.validateAny))(properties.stringEquals));
    errors.collect(ros.propertyValidator('numericNotEquals', ros.hashValidator(ros.validateAny))(properties.numericNotEquals));
    errors.collect(ros.propertyValidator('stringLike', ros.hashValidator(ros.validateAny))(properties.stringLike));
    errors.collect(ros.propertyValidator('numericLessThanEquals', ros.hashValidator(ros.validateAny))(properties.numericLessThanEquals));
    errors.collect(ros.propertyValidator('stringNotEquals', ros.hashValidator(ros.validateAny))(properties.stringNotEquals));
    errors.collect(ros.propertyValidator('stringNotEqualsIgnoreCase', ros.hashValidator(ros.validateAny))(properties.stringNotEqualsIgnoreCase));
    errors.collect(ros.propertyValidator('numericLessThan', ros.hashValidator(ros.validateAny))(properties.numericLessThan));
    errors.collect(ros.propertyValidator('numericGreaterThan', ros.hashValidator(ros.validateAny))(properties.numericGreaterThan));
    errors.collect(ros.propertyValidator('dateLessThanEquals', ros.hashValidator(ros.validateAny))(properties.dateLessThanEquals));
    errors.collect(ros.propertyValidator('numericEquals', ros.hashValidator(ros.validateAny))(properties.numericEquals));
    errors.collect(ros.propertyValidator('dateGreaterThanEquals', ros.hashValidator(ros.validateAny))(properties.dateGreaterThanEquals));
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
function rosRoleConditionPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosRole_ConditionPropertyValidator(properties).assertSuccess();
    return {
        'StringEquals': ros.hashMapper(ros.objectToRosTemplate)(properties.stringEquals),
        'NumericNotEquals': ros.hashMapper(ros.objectToRosTemplate)(properties.numericNotEquals),
        'StringLike': ros.hashMapper(ros.objectToRosTemplate)(properties.stringLike),
        'NumericLessThanEquals': ros.hashMapper(ros.objectToRosTemplate)(properties.numericLessThanEquals),
        'StringNotEquals': ros.hashMapper(ros.objectToRosTemplate)(properties.stringNotEquals),
        'StringNotEqualsIgnoreCase': ros.hashMapper(ros.objectToRosTemplate)(properties.stringNotEqualsIgnoreCase),
        'NumericLessThan': ros.hashMapper(ros.objectToRosTemplate)(properties.numericLessThan),
        'NumericGreaterThan': ros.hashMapper(ros.objectToRosTemplate)(properties.numericGreaterThan),
        'DateLessThanEquals': ros.hashMapper(ros.objectToRosTemplate)(properties.dateLessThanEquals),
        'NumericEquals': ros.hashMapper(ros.objectToRosTemplate)(properties.numericEquals),
        'DateGreaterThanEquals': ros.hashMapper(ros.objectToRosTemplate)(properties.dateGreaterThanEquals),
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
/**
 * Determine whether the given properties match those of a `PoliciesProperty`
 *
 * @param properties - the TypeScript properties of a `PoliciesProperty`
 *
 * @returns the result of the validation.
 */
function RosRole_PoliciesPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('ignoreExisting', ros.validateBoolean)(properties.ignoreExisting));
    if (properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: undefined,
            max: 1024,
        }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('policyName', ros.requiredValidator)(properties.policyName));
    if (properties.policyName && (Array.isArray(properties.policyName) || (typeof properties.policyName) === 'string')) {
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
function rosRolePoliciesPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosRole_PoliciesPropertyValidator(properties).assertSuccess();
    return {
        'IgnoreExisting': ros.booleanToRosTemplate(properties.ignoreExisting),
        'Description': ros.stringToRosTemplate(properties.description),
        'PolicyName': ros.stringToRosTemplate(properties.policyName),
        'PolicyDocument': rosRolePolicyDocumentPropertyToRosTemplate(properties.policyDocument),
    };
}
/**
 * Determine whether the given properties match those of a `PolicyAttachmentsProperty`
 *
 * @param properties - the TypeScript properties of a `PolicyAttachmentsProperty`
 *
 * @returns the result of the validation.
 */
function RosRole_PolicyAttachmentsPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.custom && (Array.isArray(properties.custom) || (typeof properties.custom) === 'string')) {
        errors.collect(ros.propertyValidator('custom', ros.validateLength)({
            data: properties.custom.length,
            min: undefined,
            max: 5,
        }));
    }
    errors.collect(ros.propertyValidator('custom', ros.listValidator(ros.validateString))(properties.custom));
    if (properties.system && (Array.isArray(properties.system) || (typeof properties.system) === 'string')) {
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
function rosRolePolicyAttachmentsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosRole_PolicyAttachmentsPropertyValidator(properties).assertSuccess();
    return {
        'Custom': ros.listMapper(ros.stringToRosTemplate)(properties.custom),
        'System': ros.listMapper(ros.stringToRosTemplate)(properties.system),
    };
}
/**
 * Determine whether the given properties match those of a `PolicyDocumentProperty`
 *
 * @param properties - the TypeScript properties of a `PolicyDocumentProperty`
 *
 * @returns the result of the validation.
 */
function RosRole_PolicyDocumentPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosRolePolicyDocumentPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosRole_PolicyDocumentPropertyValidator(properties).assertSuccess();
    return {
        'Version': ros.stringToRosTemplate(properties.version),
        'Statement': ros.listMapper(rosRolePolicyDocumentStatementPropertyToRosTemplate)(properties.statement),
    };
}
/**
 * Determine whether the given properties match those of a `PolicyDocumentStatementProperty`
 *
 * @param properties - the TypeScript properties of a `PolicyDocumentStatementProperty`
 *
 * @returns the result of the validation.
 */
function RosRole_PolicyDocumentStatementPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosRolePolicyDocumentStatementPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosRole_PolicyDocumentStatementPropertyValidator(properties).assertSuccess();
    return {
        'Condition': ros.hashMapper(ros.objectToRosTemplate)(properties.condition),
        'Action': ros.listMapper(ros.objectToRosTemplate)(properties.action),
        'Resource': ros.listMapper(ros.objectToRosTemplate)(properties.resource),
        'Effect': ros.stringToRosTemplate(properties.effect),
    };
}
/**
 * Determine whether the given properties match those of a `PrincipalProperty`
 *
 * @param properties - the TypeScript properties of a `PrincipalProperty`
 *
 * @returns the result of the validation.
 */
function RosRole_PrincipalPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosRolePrincipalPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosRole_PrincipalPropertyValidator(properties).assertSuccess();
    return {
        'Service': ros.listMapper(ros.objectToRosTemplate)(properties.service),
        'Federated': ros.listMapper(ros.objectToRosTemplate)(properties.federated),
        'RAM': ros.listMapper(ros.objectToRosTemplate)(properties.ram),
    };
}
/**
 * Determine whether the given properties match those of a `StatementProperty`
 *
 * @param properties - the TypeScript properties of a `StatementProperty`
 *
 * @returns the result of the validation.
 */
function RosRole_StatementPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosRoleStatementPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosRole_StatementPropertyValidator(properties).assertSuccess();
    return {
        'Condition': rosRoleConditionPropertyToRosTemplate(properties.condition),
        'Action': ros.stringToRosTemplate(properties.action),
        'Effect': ros.stringToRosTemplate(properties.effect),
        'Principal': rosRolePrincipalPropertyToRosTemplate(properties.principal),
    };
}
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosRole_TagsPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RAM::Role.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RAM::Role.Tags` resource.
 */
// @ts-ignore TS6133
function rosRoleTagsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosRole_TagsPropertyValidator(properties).assertSuccess();
    return {
        'Value': ros.stringToRosTemplate(properties.value),
        'Key': ros.stringToRosTemplate(properties.key),
    };
}
/**
 * Determine whether the given properties match those of a `RosSAMLProviderProps`
 *
 * @param properties - the TypeScript properties of a `RosSAMLProviderProps`
 *
 * @returns the result of the validation.
 */
function RosSAMLProviderPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('samlProviderName', ros.requiredValidator)(properties.samlProviderName));
    if (properties.samlProviderName && (Array.isArray(properties.samlProviderName) || (typeof properties.samlProviderName) === 'string')) {
        errors.collect(ros.propertyValidator('samlProviderName', ros.validateLength)({
            data: properties.samlProviderName.length,
            min: 1,
            max: 128,
        }));
    }
    errors.collect(ros.propertyValidator('samlProviderName', ros.validateString)(properties.samlProviderName));
    if (properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: undefined,
            max: 256,
        }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    if (properties.samlMetadataDocumentUrl && (Array.isArray(properties.samlMetadataDocumentUrl) || (typeof properties.samlMetadataDocumentUrl) === 'string')) {
        errors.collect(ros.propertyValidator('samlMetadataDocumentUrl', ros.validateLength)({
            data: properties.samlMetadataDocumentUrl.length,
            min: 1,
            max: 1024,
        }));
    }
    errors.collect(ros.propertyValidator('samlMetadataDocumentUrl', ros.validateString)(properties.samlMetadataDocumentUrl));
    if (properties.encodedSamlMetadataDocument && (Array.isArray(properties.encodedSamlMetadataDocument) || (typeof properties.encodedSamlMetadataDocument) === 'string')) {
        errors.collect(ros.propertyValidator('encodedSamlMetadataDocument', ros.validateLength)({
            data: properties.encodedSamlMetadataDocument.length,
            min: undefined,
            max: 102400,
        }));
    }
    errors.collect(ros.propertyValidator('encodedSamlMetadataDocument', ros.validateString)(properties.encodedSamlMetadataDocument));
    if (properties.samlMetadataDocument && (Array.isArray(properties.samlMetadataDocument) || (typeof properties.samlMetadataDocument) === 'string')) {
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
function rosSAMLProviderPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::RAM::SAMLProvider`, which is used to create an identity provider (IdP) for role-based single sign-on (SSO).
 * @Note This class does not contain additional functions, so it is recommended to use the `SAMLProvider` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-samlprovider
 */
class RosSAMLProvider extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
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
    get rosProperties() {
        return {
            samlProviderName: this.samlProviderName,
            description: this.description,
            encodedSamlMetadataDocument: this.encodedSamlMetadataDocument,
            samlMetadataDocument: this.samlMetadataDocument,
            samlMetadataDocumentUrl: this.samlMetadataDocumentUrl,
        };
    }
    renderProperties(props) {
        return rosSAMLProviderPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosSAMLProvider = RosSAMLProvider;
/**
 * The resource type name for this resource class.
 */
RosSAMLProvider.ROS_RESOURCE_TYPE_NAME = "ALIYUN::RAM::SAMLProvider";
/**
 * Determine whether the given properties match those of a `RosSecurityPreferenceProps`
 *
 * @param properties - the TypeScript properties of a `RosSecurityPreferenceProps`
 *
 * @returns the result of the validation.
 */
function RosSecurityPreferencePropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosSecurityPreferencePropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::RAM::SecurityPreference`, which is used to configure security preferences for Resource Access Management (RAM) users.
 * @Note This class does not contain additional functions, so it is recommended to use the `SecurityPreference` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-securitypreference
 */
class RosSecurityPreference extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
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
    get rosProperties() {
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
    renderProperties(props) {
        return rosSecurityPreferencePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosSecurityPreference = RosSecurityPreference;
/**
 * The resource type name for this resource class.
 */
RosSecurityPreference.ROS_RESOURCE_TYPE_NAME = "ALIYUN::RAM::SecurityPreference";
/**
 * Determine whether the given properties match those of a `RosUserProps`
 *
 * @param properties - the TypeScript properties of a `RosUserProps`
 *
 * @returns the result of the validation.
 */
function RosUserPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('userName', ros.requiredValidator)(properties.userName));
    errors.collect(ros.propertyValidator('userName', ros.validateString)(properties.userName));
    errors.collect(ros.propertyValidator('email', ros.validateString)(properties.email));
    errors.collect(ros.propertyValidator('policies', ros.listValidator(RosUser_PoliciesPropertyValidator))(properties.policies));
    errors.collect(ros.propertyValidator('policyAttachments', RosUser_PolicyAttachmentsPropertyValidator)(properties.policyAttachments));
    errors.collect(ros.propertyValidator('deletionForce', ros.validateBoolean)(properties.deletionForce));
    if (properties.comments && (Array.isArray(properties.comments) || (typeof properties.comments) === 'string')) {
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
function rosUserPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::RAM::User`The , which resource creates a RAM user.
 * @Note This class does not contain additional functions, so it is recommended to use the `User` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-user
 */
class RosUser extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
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
    get rosProperties() {
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
    renderProperties(props) {
        return rosUserPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosUser = RosUser;
/**
 * The resource type name for this resource class.
 */
RosUser.ROS_RESOURCE_TYPE_NAME = "ALIYUN::RAM::User";
/**
 * Determine whether the given properties match those of a `LoginProfileProperty`
 *
 * @param properties - the TypeScript properties of a `LoginProfileProperty`
 *
 * @returns the result of the validation.
 */
function RosUser_LoginProfilePropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('passwordResetRequired', ros.validateBoolean)(properties.passwordResetRequired));
    errors.collect(ros.propertyValidator('mfaBindRequired', ros.validateBoolean)(properties.mfaBindRequired));
    if (properties.password && (Array.isArray(properties.password) || (typeof properties.password) === 'string')) {
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
function rosUserLoginProfilePropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosUser_LoginProfilePropertyValidator(properties).assertSuccess();
    return {
        'PasswordResetRequired': ros.booleanToRosTemplate(properties.passwordResetRequired),
        'MFABindRequired': ros.booleanToRosTemplate(properties.mfaBindRequired),
        'Password': ros.stringToRosTemplate(properties.password),
    };
}
/**
 * Determine whether the given properties match those of a `PoliciesProperty`
 *
 * @param properties - the TypeScript properties of a `PoliciesProperty`
 *
 * @returns the result of the validation.
 */
function RosUser_PoliciesPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('ignoreExisting', ros.validateBoolean)(properties.ignoreExisting));
    if (properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: undefined,
            max: 1024,
        }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('policyName', ros.requiredValidator)(properties.policyName));
    if (properties.policyName && (Array.isArray(properties.policyName) || (typeof properties.policyName) === 'string')) {
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
function rosUserPoliciesPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosUser_PoliciesPropertyValidator(properties).assertSuccess();
    return {
        'IgnoreExisting': ros.booleanToRosTemplate(properties.ignoreExisting),
        'Description': ros.stringToRosTemplate(properties.description),
        'PolicyName': ros.stringToRosTemplate(properties.policyName),
        'PolicyDocument': rosUserPolicyDocumentPropertyToRosTemplate(properties.policyDocument),
    };
}
/**
 * Determine whether the given properties match those of a `PolicyAttachmentsProperty`
 *
 * @param properties - the TypeScript properties of a `PolicyAttachmentsProperty`
 *
 * @returns the result of the validation.
 */
function RosUser_PolicyAttachmentsPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.custom && (Array.isArray(properties.custom) || (typeof properties.custom) === 'string')) {
        errors.collect(ros.propertyValidator('custom', ros.validateLength)({
            data: properties.custom.length,
            min: undefined,
            max: 10,
        }));
    }
    errors.collect(ros.propertyValidator('custom', ros.listValidator(ros.validateString))(properties.custom));
    if (properties.system && (Array.isArray(properties.system) || (typeof properties.system) === 'string')) {
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
function rosUserPolicyAttachmentsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosUser_PolicyAttachmentsPropertyValidator(properties).assertSuccess();
    return {
        'Custom': ros.listMapper(ros.stringToRosTemplate)(properties.custom),
        'System': ros.listMapper(ros.stringToRosTemplate)(properties.system),
    };
}
/**
 * Determine whether the given properties match those of a `PolicyDocumentProperty`
 *
 * @param properties - the TypeScript properties of a `PolicyDocumentProperty`
 *
 * @returns the result of the validation.
 */
function RosUser_PolicyDocumentPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosUserPolicyDocumentPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosUser_PolicyDocumentPropertyValidator(properties).assertSuccess();
    return {
        'Version': ros.stringToRosTemplate(properties.version),
        'Statement': ros.listMapper(rosUserStatementPropertyToRosTemplate)(properties.statement),
    };
}
/**
 * Determine whether the given properties match those of a `StatementProperty`
 *
 * @param properties - the TypeScript properties of a `StatementProperty`
 *
 * @returns the result of the validation.
 */
function RosUser_StatementPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosUserStatementPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosUser_StatementPropertyValidator(properties).assertSuccess();
    return {
        'Condition': ros.hashMapper(ros.objectToRosTemplate)(properties.condition),
        'Action': ros.listMapper(ros.objectToRosTemplate)(properties.action),
        'Resource': ros.listMapper(ros.objectToRosTemplate)(properties.resource),
        'Effect': ros.stringToRosTemplate(properties.effect),
    };
}
/**
 * Determine whether the given properties match those of a `RosUserToGroupAdditionProps`
 *
 * @param properties - the TypeScript properties of a `RosUserToGroupAdditionProps`
 *
 * @returns the result of the validation.
 */
function RosUserToGroupAdditionPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosUserToGroupAdditionPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosUserToGroupAdditionPropsValidator(properties).assertSuccess();
    }
    return {
        'GroupName': ros.stringToRosTemplate(properties.groupName),
        'Users': ros.listMapper(ros.objectToRosTemplate)(properties.users),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::RAM::UserToGroupAddition`, which is used to add users to a RAM group.
 * @Note This class does not contain additional functions, so it is recommended to use the `UserToGroupAddition` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-usertogroupaddition
 */
class RosUserToGroupAddition extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosUserToGroupAddition.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.groupName = props.groupName;
        this.users = props.users;
    }
    get rosProperties() {
        return {
            groupName: this.groupName,
            users: this.users,
        };
    }
    renderProperties(props) {
        return rosUserToGroupAdditionPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosUserToGroupAddition = RosUserToGroupAddition;
/**
 * The resource type name for this resource class.
 */
RosUserToGroupAddition.ROS_RESOURCE_TYPE_NAME = "ALIYUN::RAM::UserToGroupAddition";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFtLmdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJhbS5nZW5lcmF0ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlEQUF5RDs7O0FBRXpELDhDQUE4QztBQWM5Qzs7Ozs7O0dBTUc7QUFDSCxTQUFTLDBCQUEwQixDQUFDLFVBQWU7SUFDL0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFBRSxPQUFPLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQztLQUFFO0lBQ25FLE1BQU0sTUFBTSxHQUFHLElBQUksR0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0MsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQzlGLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDM0YsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLHlEQUF5RCxDQUFDLENBQUM7QUFDbEYsQ0FBQztBQUVEOzs7Ozs7R0FNRztBQUNILG9CQUFvQjtBQUNwQixTQUFTLDhCQUE4QixDQUFDLFVBQWUsRUFBRSxnQ0FBeUM7SUFDOUYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFBRSxPQUFPLFVBQVUsQ0FBQztLQUFFO0lBQ3ZELElBQUcsZ0NBQWdDLEVBQUU7UUFDakMsMEJBQTBCLENBQUMsVUFBVSxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUM7S0FDMUQ7SUFDRCxPQUFPO1FBQ0wsVUFBVSxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO0tBQ3pE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QyxVQUFVLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztLQUNuRSxDQUFDO0FBQ04sQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxNQUFhLHNCQUF1QixTQUFRLEdBQUcsQ0FBQyxXQUFXO0lBbUJ2RDs7OztPQUlHO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUFrQyxFQUFFLGdDQUF5QztRQUN2SCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxzQkFBc0IsQ0FBQyxzQkFBc0IsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUU3RixJQUFJLENBQUMsZ0NBQWdDLEdBQUcsZ0NBQWdDLENBQUM7UUFDekUsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBR0QsSUFBYyxhQUFhO1FBQ3ZCLE9BQU87WUFDSCxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1NBQ3BCLENBQUM7SUFDTixDQUFDO0lBQ1MsZ0JBQWdCLENBQUMsS0FBMkI7UUFDbEQsT0FBTyx3Q0FBd0MsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7SUFDbEcsQ0FBQzs7QUF6Q0wsd0RBMENDO0FBekNHOztHQUVHO0FBQ29CLDZDQUFzQixHQUFHLGtDQUFrQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5cbmltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NBY2Nlc3NLZXlgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tcmFtLWFjY2Vzc2tleVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc0FjY2Vzc0tleVByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB1c2VyTmFtZTogU3BlY2lmaWVzIHRoZSB1c2VyIG5hbWUsIGNvbnRhaW5pbmcgdXAgdG8gNjQgY2hhcmFjdGVycy5cbiAgICAgKi9cbiAgICByZWFkb25seSB1c2VyTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc0FjY2Vzc0tleVByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NBY2Nlc3NLZXlQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NBY2Nlc3NLZXlQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3VzZXJOYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnVzZXJOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd1c2VyTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy51c2VyTmFtZSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NBY2Nlc3NLZXlQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6UkFNOjpBY2Nlc3NLZXlgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0FjY2Vzc0tleVByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpSQU06OkFjY2Vzc0tleWAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NBY2Nlc3NLZXlQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc0FjY2Vzc0tleVByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICdVc2VyTmFtZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudXNlck5hbWUpLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OlJBTTo6QWNjZXNzS2V5YFRoZSAsIHdoaWNoIHJlc291cmNlIHR5cGUgcmV0cmlldmVzIGEgc3BlY2lmaWVkIFJBTSB1c2Vy4oCZcyBBY2Nlc3NLZXkgSUQsIEFjY2Vzc0tleSBzZWNyZXQsIGFuZCBBY2Nlc3NLZXkgc3RhdHVzLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBBY2Nlc3NLZXlgIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLXJhbS1hY2Nlc3NrZXlcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc0FjY2Vzc0tleSBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6UkFNOjpBY2Nlc3NLZXlcIjtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQWNjZXNzS2V5SWQ6IElkIG9mIGFjY2VzcyBrZXkuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJBY2Nlc3NLZXlJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBBY2Nlc3NLZXlTZWNyZXQ6IFNlY3JldCBvZiBhY2Nlc3Mga2V5LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQWNjZXNzS2V5U2VjcmV0OiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFN0YXR1czogU3RhdHVzIG9mIGFjY2VzcyBrZXkuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJTdGF0dXM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHVzZXJOYW1lOiBTcGVjaWZpZXMgdGhlIHVzZXIgbmFtZSwgY29udGFpbmluZyB1cCB0byA2NCBjaGFyYWN0ZXJzLlxuICAgICAqL1xuICAgIHB1YmxpYyB1c2VyTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc0FjY2Vzc0tleVByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zQWNjZXNzS2V5LlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJBY2Nlc3NLZXlJZCA9IHRoaXMuZ2V0QXR0KCdBY2Nlc3NLZXlJZCcpO1xuICAgICAgICB0aGlzLmF0dHJBY2Nlc3NLZXlTZWNyZXQgPSB0aGlzLmdldEF0dCgnQWNjZXNzS2V5U2VjcmV0Jyk7XG4gICAgICAgIHRoaXMuYXR0clN0YXR1cyA9IHRoaXMuZ2V0QXR0KCdTdGF0dXMnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMudXNlck5hbWUgPSBwcm9wcy51c2VyTmFtZTtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1c2VyTmFtZTogdGhpcy51c2VyTmFtZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zQWNjZXNzS2V5UHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUm9zQXBwU2VjcmV0YC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLXJhbS1hcHBzZWNyZXRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NBcHBTZWNyZXRQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYXBwSWQ6IFRoZSBJRCBvZiB0aGUgYXBwbGljYXRpb24uXG4gICAgICovXG4gICAgcmVhZG9ubHkgYXBwSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NBcHBTZWNyZXRQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQXBwU2VjcmV0UHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQXBwU2VjcmV0UHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhcHBJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5hcHBJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYXBwSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuYXBwSWQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zQXBwU2VjcmV0UHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlJBTTo6QXBwU2VjcmV0YCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NBcHBTZWNyZXRQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6UkFNOjpBcHBTZWNyZXRgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQXBwU2VjcmV0UHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NBcHBTZWNyZXRQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAnQXBwSWQnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmFwcElkKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBiYXNlIGVuY2Fwc3VsYXRpb24gYXJvdW5kIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpSQU06OkFwcFNlY3JldGAsIHdoaWNoIGlzIHVzZWQgdG8gY3JlYXRlIGFuIGFwcGxpY2F0aW9uIHNlY3JldC5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgZG9lcyBub3QgY29udGFpbiBhZGRpdGlvbmFsIGZ1bmN0aW9ucywgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgQXBwU2VjcmV0YCBjbGFzcyBpbnN0ZWFkIG9mIHRoaXMgY2xhc3MgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1yYW0tYXBwc2VjcmV0XG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NBcHBTZWNyZXQgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OlJBTTo6QXBwU2VjcmV0XCI7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEFwcFNlY3JldElkOiBUaGUgSUQgb2YgdGhlIGFwcGxpY2F0aW9uIHNlY3JldC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckFwcFNlY3JldElkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEFwcFNlY3JldFZhbHVlOiBUaGUgY29udGVudCBvZiB0aGUgYXBwbGljYXRpb24gc2VjcmV0LiBUaGlzIHZhbHVlIGNhbiBiZSB1c2VkIGFzIHRoZSBjbGllbnQgc2VjcmV0IGZvciBvcGVuIGF1dGhvcml6YXRpb24uXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJBcHBTZWNyZXRWYWx1ZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYXBwSWQ6IFRoZSBJRCBvZiB0aGUgYXBwbGljYXRpb24uXG4gICAgICovXG4gICAgcHVibGljIGFwcElkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zQXBwU2VjcmV0UHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NBcHBTZWNyZXQuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckFwcFNlY3JldElkID0gdGhpcy5nZXRBdHQoJ0FwcFNlY3JldElkJyk7XG4gICAgICAgIHRoaXMuYXR0ckFwcFNlY3JldFZhbHVlID0gdGhpcy5nZXRBdHQoJ0FwcFNlY3JldFZhbHVlJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmFwcElkID0gcHJvcHMuYXBwSWQ7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYXBwSWQ6IHRoaXMuYXBwSWQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc0FwcFNlY3JldFByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFJvc0FwcGxpY2F0aW9uYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLXJhbS1hcHBsaWNhdGlvblxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc0FwcGxpY2F0aW9uUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFwcE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBhcHBsaWNhdGlvbi4gVGhlIG5hbWUgY2FuIGJlIHVwIHRvIDY0IGNoYXJhY3RlcnMgaW4gbGVuZ3RoLiBUaGUgbmFtZSBjYW4gY29udGFpbiBsZXR0ZXJzLCBkaWdpdHMsIHBlcmlvZHMgKC4pLCB1bmRlcnNjb3JlcyAoXyksIGFuZCBoeXBoZW5zICgtKS5cbiAgICAgKi9cbiAgICByZWFkb25seSBhcHBOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYXBwVHlwZTogVGhlIHR5cGUgb2YgdGhlIGFwcGxpY2F0aW9uLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSAqKldlYkFwcCoqOiBhIHdlYiBhcHBsaWNhdGlvbiB0aGF0IGludGVyYWN0cyB3aXRoIGEgYnJvd3Nlci5cbiAgICAgKiAtICoqTmF0aXZlQXBwKio6IGEgbmF0aXZlIGFwcGxpY2F0aW9uIHRoYXQgcnVucyBvbiBhbiBvcGVyYXRpbmcgc3lzdGVtLCBzdWNoIGFzIGEgZGVza3RvcCBvcGVyYXRpbmcgc3lzdGVtIG9yIGEgbW9iaWxlIG9wZXJhdGluZyBzeXN0ZW0uXG4gICAgICogLSAqKlNlcnZlckFwcCoqOiBhbiBhcHBsaWNhdGlvbiB0aGF0IGFjY2Vzc2VzIEFsaWJhYmEgQ2xvdWQgc2VydmljZXMgd2l0aG91dCB0aGUgbmVlZCBvZiBtYW51YWwgdXNlciBsb2dvbi4gVXNlciBwcm92aXNpb25pbmcgaXMgYXV0b21hdGVkIGJhc2VkIG9uIHRoZSBTeXN0ZW0gZm9yIENyb3NzLURvbWFpbiBJZGVudGl0eSBNYW5hZ2VtZW50IChTQ0lNKSBwcm90b2NvbC5cbiAgICAgKi9cbiAgICByZWFkb25seSBhcHBUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGlzcGxheU5hbWU6IFRoZSBkaXNwbGF5IG5hbWUgb2YgdGhlIGFwcGxpY2F0aW9uLiBUaGUgbmFtZSBjYW4gYmUgdXAgdG8gMjQgY2hhcmFjdGVycyBpbiBsZW5ndGguXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGlzcGxheU5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhY2Nlc3NUb2tlblZhbGlkaXR5OiBUaGUgdmFsaWRpdHkgcGVyaW9kIG9mIHRoZSBhY2Nlc3MgdG9rZW4uXG4gICAgICogVmFsaWQgdmFsdWVzOiA5MDAgdG8gMTA4MDAuIFVuaXQ6IHNlY29uZHMuXG4gICAgICogRGVmYXVsdCB2YWx1ZTogMzYwMC5cbiAgICAgKi9cbiAgICByZWFkb25seSBhY2Nlc3NUb2tlblZhbGlkaXR5PzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGlzTXVsdGlUZW5hbnQ6IEluZGljYXRlcyB3aGV0aGVyIHRoZSBhcHBsaWNhdGlvbiBjYW4gYmUgaW5zdGFsbGVkIGJ5IHVzaW5nIG90aGVyIEFsaWJhYmEgQ2xvdWQgYWNjb3VudHMuIFZhbGlkIHZhbHVlczpcbiAgICAgKiAtICoqdHJ1ZSoqOiBJZiB5b3UgZG8gbm90IHNldCB0aGlzIHBhcmFtZXRlciBmb3IgYXBwbGljYXRpb25zIG9mIHRoZSBOYXRpdmVBcHAgYW5kIFNlcnZlckFwcCB0eXBlcywgdHJ1ZSBpcyB1c2VkLlxuICAgICAqIC0gKipmYWxzZSoqOiBJZiB5b3UgZG8gbm90IHNldCB0aGlzIHBhcmFtZXRlciBmb3IgYXBwbGljYXRpb25zIG9mIHRoZSBXZWJBcHAgdHlwZSwgZmFsc2UgaXMgdXNlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBpc011bHRpVGVuYW50PzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwcmVkZWZpbmVkU2NvcGVzOiBMaXN0IG9mIHRoZSBzY29wZXMgb2YgYXBwbGljYXRpb24gcGVybWlzc2lvbnMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcHJlZGVmaW5lZFNjb3Blcz86IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVkaXJlY3RVcmlzOiBMaXN0IG9mIHRoZSBjYWxsYmFjayBVUkxzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlZGlyZWN0VXJpcz86IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVmcmVzaFRva2VuVmFsaWRpdHk6IFRoZSB2YWxpZGl0eSBwZXJpb2Qgb2YgdGhlIHJlZnJlc2hlZCB0b2tlbi5cbiAgICAgKiBWYWxpZCB2YWx1ZXM6IDcyMDAgdG8gMzE1MzYwMDAuIFVuaXQ6IHNlY29uZHMuXG4gICAgICogRGVmYXVsdCB2YWx1ZTpcbiAgICAgKiAtIEZvciBhcHBsaWNhdGlvbnMgb2YgdGhlIFdlYkFwcCBhbmQgU2VydmVyQXBwIHR5cGVzLCBpZiB0aGlzIHBhcmFtZXRlciBpcyBsZWZ0IGVtcHR5LCB0aGUgdmFsdWUgMjU5MjAwMCBpcyB1c2VkLiBUaGUgdmFsdWUgMjU5MjAwMCBpbmRpY2F0ZXMgdGhhdCB0aGUgdmFsaWRpdHkgcGVyaW9kIG9mIHRoZSByZWZyZXNoZWQgdG9rZW4gaXMgMzAgZGF5cy5cbiAgICAgKiAtIEZvciBhcHBsaWNhdGlvbnMgb2YgdGhlIE5hdGl2ZUFwcCB0eXBlLCBpZiB0aGlzIHBhcmFtZXRlciBpcyBsZWZ0IGVtcHR5LCB0aGUgdmFsdWUgNzc3NjAwMCBpcyB1c2VkLiBUaGUgdmFsdWUgNzc3NjAwMCBpbmRpY2F0ZXMgdGhhdCB0aGUgdmFsaWRpdHkgcGVyaW9kIG9mIHRoZSByZWZyZXNoZWQgdG9rZW4gaXMgOTAgZGF5cy5cbiAgICAgKi9cbiAgICByZWFkb25seSByZWZyZXNoVG9rZW5WYWxpZGl0eT86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZXF1aXJlZFNjb3BlczogUmVxdWlyZWQgc2NvcGUgb2YgYXBwbGljYXRpb24gcGVybWlzc2lvbnMuIFlvdSBjYW4gc2V0IG9uZSBvciBtb3JlIG9mIHRoZSBzY29wZXMgc2V0IGluIHRoZSAqKlByZWRlZmluZWRTY29wZXMqKiB0byBiZSByZXF1aXJlZCwgc28gdGhhdCB3aGVuIGEgdXNlciBhdXRob3JpemVzIHRoZSBhcHBsaWNhdGlvbiwgdGhlIHJlcXVpcmVkIHNjb3BlcyBhcmUgc2VsZWN0ZWQgYnkgZGVmYXVsdCBhbmQgY2Fubm90IGJlIGNhbmNlbGVkLlxuICAgICAqICoqTm90ZXMqKjogSWYgeW91IHNldCBhICoqUmVxdWlyZWRTY29wZXMqKiBlbnRyeSB0aGF0IGlzIG5vdCB3aXRoaW4gdGhlIHNjb3BlIG9mICoqUHJlZGVmaW5lZFNjb3BlcyoqLCB0aGUgcmVxdWlyZWQgcmFuZ2Ugd2lsbCBub3QgdGFrZSBlZmZlY3QuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVxdWlyZWRTY29wZXM/OiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNlY3JldFJlcXVpcmVkOiBJbmRpY2F0ZXMgd2hldGhlciBhIHNlY3JldCBpcyByZXF1aXJlZC4gVmFsaWQgdmFsdWVzOiAqKnRydWUqKiBhbmQgKipmYWxzZSoqLlxuICAgICAqICoqTm90ZSoqOlxuICAgICAqIC0gRm9yIGFwcGxpY2F0aW9ucyBvZiB0aGUgV2ViQXBwIGFuZCBTZXJ2ZXJBcHAgdHlwZXMsIHRoaXMgcGFyYW1ldGVyIGlzIGF1dG9tYXRpY2FsbHkgc2V0IHRvICoqdHJ1ZSoqIGFuZCBjYW5ub3QgYmUgY2hhbmdlZC5cbiAgICAgKiAtIEZvciBhcHBsaWNhdGlvbnMgb2YgdGhlIE5hdGl2ZUFwcCB0eXBlLCB0aGlzIHBhcmFtZXRlciBjYW4gYmUgc2V0IHRvIHRydWUgb3IgZmFsc2UuIElmIHlvdSBkbyBub3Qgc2V0IHRoaXMgcGFyYW1ldGVyLCBmYWxzZSBpcyB1c2VkLiBBcHBsaWNhdGlvbnMgb2YgdGhlIE5hdGl2ZUFwcCB0eXBlIHJ1biBpbiB1bnRydXN0ZWQgZW52aXJvbm1lbnRzIGFuZCB0aGUgc2VjcmV0cyBvZiB0aGVzZSBhcHBsaWNhdGlvbnMgYXJlIG5vdCBwcm90ZWN0ZWQuIFRoZXJlZm9yZSwgd2UgcmVjb21tZW5kIHRoYXQgeW91IGRvIG5vdCBzZXQgdGhpcyBwYXJhbWV0ZXIgdG8gdHJ1ZSB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBzZWNyZXRSZXF1aXJlZD86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zQXBwbGljYXRpb25Qcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQXBwbGljYXRpb25Qcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NBcHBsaWNhdGlvblByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncHJlZGVmaW5lZFNjb3BlcycsIHJvcy5saXN0VmFsaWRhdG9yKHJvcy52YWxpZGF0ZVN0cmluZykpKHByb3BlcnRpZXMucHJlZGVmaW5lZFNjb3BlcykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2VjcmV0UmVxdWlyZWQnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLnNlY3JldFJlcXVpcmVkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkaXNwbGF5TmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5kaXNwbGF5TmFtZSkpO1xuICAgIGlmKHByb3BlcnRpZXMuZGlzcGxheU5hbWUgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5kaXNwbGF5TmFtZSkgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLmRpc3BsYXlOYW1lKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGlzcGxheU5hbWUnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuZGlzcGxheU5hbWUubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtYXg6IDI0LFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkaXNwbGF5TmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5kaXNwbGF5TmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVkaXJlY3RVcmlzJywgcm9zLmxpc3RWYWxpZGF0b3Iocm9zLnZhbGlkYXRlU3RyaW5nKSkocHJvcGVydGllcy5yZWRpcmVjdFVyaXMpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmFjY2Vzc1Rva2VuVmFsaWRpdHkgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmFjY2Vzc1Rva2VuVmFsaWRpdHkpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FjY2Vzc1Rva2VuVmFsaWRpdHknLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5hY2Nlc3NUb2tlblZhbGlkaXR5LFxuICAgICAgICAgICAgbWluOiA5MDAsXG4gICAgICAgICAgICBtYXg6IDEwODAwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhY2Nlc3NUb2tlblZhbGlkaXR5Jywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLmFjY2Vzc1Rva2VuVmFsaWRpdHkpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2lzTXVsdGlUZW5hbnQnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLmlzTXVsdGlUZW5hbnQpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnJlZnJlc2hUb2tlblZhbGlkaXR5ICYmICh0eXBlb2YgcHJvcGVydGllcy5yZWZyZXNoVG9rZW5WYWxpZGl0eSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVmcmVzaFRva2VuVmFsaWRpdHknLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5yZWZyZXNoVG9rZW5WYWxpZGl0eSxcbiAgICAgICAgICAgIG1pbjogNzIwMCxcbiAgICAgICAgICAgIG1heDogMzE1MzYwMDAsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlZnJlc2hUb2tlblZhbGlkaXR5Jywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLnJlZnJlc2hUb2tlblZhbGlkaXR5KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhcHBUeXBlJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmFwcFR5cGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FwcFR5cGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuYXBwVHlwZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVxdWlyZWRTY29wZXMnLCByb3MubGlzdFZhbGlkYXRvcihyb3MudmFsaWRhdGVTdHJpbmcpKShwcm9wZXJ0aWVzLnJlcXVpcmVkU2NvcGVzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhcHBOYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmFwcE5hbWUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmFwcE5hbWUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmFwcE5hbWUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FwcE5hbWUnLCByb3MudmFsaWRhdGVBbGxvd2VkUGF0dGVybikoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuYXBwTmFtZSxcbiAgICAgICAgICByZWc6IC9eWy1fLmEtekEtWjAtOV17MSw2NH0kL1xuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYXBwTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5hcHBOYW1lKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc0FwcGxpY2F0aW9uUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlJBTTo6QXBwbGljYXRpb25gIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0FwcGxpY2F0aW9uUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlJBTTo6QXBwbGljYXRpb25gIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQXBwbGljYXRpb25Qcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc0FwcGxpY2F0aW9uUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgJ0FwcE5hbWUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmFwcE5hbWUpLFxuICAgICAgJ0FwcFR5cGUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmFwcFR5cGUpLFxuICAgICAgJ0Rpc3BsYXlOYW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kaXNwbGF5TmFtZSksXG4gICAgICAnQWNjZXNzVG9rZW5WYWxpZGl0eSc6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYWNjZXNzVG9rZW5WYWxpZGl0eSksXG4gICAgICAnSXNNdWx0aVRlbmFudCc6IHJvcy5ib29sZWFuVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmlzTXVsdGlUZW5hbnQpLFxuICAgICAgJ1ByZWRlZmluZWRTY29wZXMnOiByb3MubGlzdE1hcHBlcihyb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5wcmVkZWZpbmVkU2NvcGVzKSxcbiAgICAgICdSZWRpcmVjdFVyaXMnOiByb3MubGlzdE1hcHBlcihyb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5yZWRpcmVjdFVyaXMpLFxuICAgICAgJ1JlZnJlc2hUb2tlblZhbGlkaXR5Jzogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yZWZyZXNoVG9rZW5WYWxpZGl0eSksXG4gICAgICAnUmVxdWlyZWRTY29wZXMnOiByb3MubGlzdE1hcHBlcihyb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5yZXF1aXJlZFNjb3BlcyksXG4gICAgICAnU2VjcmV0UmVxdWlyZWQnOiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zZWNyZXRSZXF1aXJlZCksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgYmFzZSBlbmNhcHN1bGF0aW9uIGFyb3VuZCB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6UkFNOjpBcHBsaWNhdGlvbmAsIHdoaWNoIGlzIHVzZWQgdG8gY3JlYXRlIGFuIGFwcGxpY2F0aW9uLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBBcHBsaWNhdGlvbmAgY2xhc3MgaW5zdGVhZCBvZiB0aGlzIGNsYXNzIGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tcmFtLWFwcGxpY2F0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NBcHBsaWNhdGlvbiBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6UkFNOjpBcHBsaWNhdGlvblwiO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBBcHBJZDogVGhlIElEIG9mIHRoZSBhcHBsaWNhdGlvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckFwcElkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEFwcE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBhcHBsaWNhdGlvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckFwcE5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFwcE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBhcHBsaWNhdGlvbi4gVGhlIG5hbWUgY2FuIGJlIHVwIHRvIDY0IGNoYXJhY3RlcnMgaW4gbGVuZ3RoLiBUaGUgbmFtZSBjYW4gY29udGFpbiBsZXR0ZXJzLCBkaWdpdHMsIHBlcmlvZHMgKC4pLCB1bmRlcnNjb3JlcyAoXyksIGFuZCBoeXBoZW5zICgtKS5cbiAgICAgKi9cbiAgICBwdWJsaWMgYXBwTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFwcFR5cGU6IFRoZSB0eXBlIG9mIHRoZSBhcHBsaWNhdGlvbi4gVmFsaWQgdmFsdWVzOlxuICAgICAqIC0gKipXZWJBcHAqKjogYSB3ZWIgYXBwbGljYXRpb24gdGhhdCBpbnRlcmFjdHMgd2l0aCBhIGJyb3dzZXIuXG4gICAgICogLSAqKk5hdGl2ZUFwcCoqOiBhIG5hdGl2ZSBhcHBsaWNhdGlvbiB0aGF0IHJ1bnMgb24gYW4gb3BlcmF0aW5nIHN5c3RlbSwgc3VjaCBhcyBhIGRlc2t0b3Agb3BlcmF0aW5nIHN5c3RlbSBvciBhIG1vYmlsZSBvcGVyYXRpbmcgc3lzdGVtLlxuICAgICAqIC0gKipTZXJ2ZXJBcHAqKjogYW4gYXBwbGljYXRpb24gdGhhdCBhY2Nlc3NlcyBBbGliYWJhIENsb3VkIHNlcnZpY2VzIHdpdGhvdXQgdGhlIG5lZWQgb2YgbWFudWFsIHVzZXIgbG9nb24uIFVzZXIgcHJvdmlzaW9uaW5nIGlzIGF1dG9tYXRlZCBiYXNlZCBvbiB0aGUgU3lzdGVtIGZvciBDcm9zcy1Eb21haW4gSWRlbnRpdHkgTWFuYWdlbWVudCAoU0NJTSkgcHJvdG9jb2wuXG4gICAgICovXG4gICAgcHVibGljIGFwcFR5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkaXNwbGF5TmFtZTogVGhlIGRpc3BsYXkgbmFtZSBvZiB0aGUgYXBwbGljYXRpb24uIFRoZSBuYW1lIGNhbiBiZSB1cCB0byAyNCBjaGFyYWN0ZXJzIGluIGxlbmd0aC5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGlzcGxheU5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhY2Nlc3NUb2tlblZhbGlkaXR5OiBUaGUgdmFsaWRpdHkgcGVyaW9kIG9mIHRoZSBhY2Nlc3MgdG9rZW4uXG4gICAgICogVmFsaWQgdmFsdWVzOiA5MDAgdG8gMTA4MDAuIFVuaXQ6IHNlY29uZHMuXG4gICAgICogRGVmYXVsdCB2YWx1ZTogMzYwMC5cbiAgICAgKi9cbiAgICBwdWJsaWMgYWNjZXNzVG9rZW5WYWxpZGl0eTogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGlzTXVsdGlUZW5hbnQ6IEluZGljYXRlcyB3aGV0aGVyIHRoZSBhcHBsaWNhdGlvbiBjYW4gYmUgaW5zdGFsbGVkIGJ5IHVzaW5nIG90aGVyIEFsaWJhYmEgQ2xvdWQgYWNjb3VudHMuIFZhbGlkIHZhbHVlczpcbiAgICAgKiAtICoqdHJ1ZSoqOiBJZiB5b3UgZG8gbm90IHNldCB0aGlzIHBhcmFtZXRlciBmb3IgYXBwbGljYXRpb25zIG9mIHRoZSBOYXRpdmVBcHAgYW5kIFNlcnZlckFwcCB0eXBlcywgdHJ1ZSBpcyB1c2VkLlxuICAgICAqIC0gKipmYWxzZSoqOiBJZiB5b3UgZG8gbm90IHNldCB0aGlzIHBhcmFtZXRlciBmb3IgYXBwbGljYXRpb25zIG9mIHRoZSBXZWJBcHAgdHlwZSwgZmFsc2UgaXMgdXNlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgaXNNdWx0aVRlbmFudDogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwcmVkZWZpbmVkU2NvcGVzOiBMaXN0IG9mIHRoZSBzY29wZXMgb2YgYXBwbGljYXRpb24gcGVybWlzc2lvbnMuXG4gICAgICovXG4gICAgcHVibGljIHByZWRlZmluZWRTY29wZXM6IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVkaXJlY3RVcmlzOiBMaXN0IG9mIHRoZSBjYWxsYmFjayBVUkxzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWRpcmVjdFVyaXM6IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVmcmVzaFRva2VuVmFsaWRpdHk6IFRoZSB2YWxpZGl0eSBwZXJpb2Qgb2YgdGhlIHJlZnJlc2hlZCB0b2tlbi5cbiAgICAgKiBWYWxpZCB2YWx1ZXM6IDcyMDAgdG8gMzE1MzYwMDAuIFVuaXQ6IHNlY29uZHMuXG4gICAgICogRGVmYXVsdCB2YWx1ZTpcbiAgICAgKiAtIEZvciBhcHBsaWNhdGlvbnMgb2YgdGhlIFdlYkFwcCBhbmQgU2VydmVyQXBwIHR5cGVzLCBpZiB0aGlzIHBhcmFtZXRlciBpcyBsZWZ0IGVtcHR5LCB0aGUgdmFsdWUgMjU5MjAwMCBpcyB1c2VkLiBUaGUgdmFsdWUgMjU5MjAwMCBpbmRpY2F0ZXMgdGhhdCB0aGUgdmFsaWRpdHkgcGVyaW9kIG9mIHRoZSByZWZyZXNoZWQgdG9rZW4gaXMgMzAgZGF5cy5cbiAgICAgKiAtIEZvciBhcHBsaWNhdGlvbnMgb2YgdGhlIE5hdGl2ZUFwcCB0eXBlLCBpZiB0aGlzIHBhcmFtZXRlciBpcyBsZWZ0IGVtcHR5LCB0aGUgdmFsdWUgNzc3NjAwMCBpcyB1c2VkLiBUaGUgdmFsdWUgNzc3NjAwMCBpbmRpY2F0ZXMgdGhhdCB0aGUgdmFsaWRpdHkgcGVyaW9kIG9mIHRoZSByZWZyZXNoZWQgdG9rZW4gaXMgOTAgZGF5cy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVmcmVzaFRva2VuVmFsaWRpdHk6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZXF1aXJlZFNjb3BlczogUmVxdWlyZWQgc2NvcGUgb2YgYXBwbGljYXRpb24gcGVybWlzc2lvbnMuIFlvdSBjYW4gc2V0IG9uZSBvciBtb3JlIG9mIHRoZSBzY29wZXMgc2V0IGluIHRoZSAqKlByZWRlZmluZWRTY29wZXMqKiB0byBiZSByZXF1aXJlZCwgc28gdGhhdCB3aGVuIGEgdXNlciBhdXRob3JpemVzIHRoZSBhcHBsaWNhdGlvbiwgdGhlIHJlcXVpcmVkIHNjb3BlcyBhcmUgc2VsZWN0ZWQgYnkgZGVmYXVsdCBhbmQgY2Fubm90IGJlIGNhbmNlbGVkLlxuICAgICAqICoqTm90ZXMqKjogSWYgeW91IHNldCBhICoqUmVxdWlyZWRTY29wZXMqKiBlbnRyeSB0aGF0IGlzIG5vdCB3aXRoaW4gdGhlIHNjb3BlIG9mICoqUHJlZGVmaW5lZFNjb3BlcyoqLCB0aGUgcmVxdWlyZWQgcmFuZ2Ugd2lsbCBub3QgdGFrZSBlZmZlY3QuXG4gICAgICovXG4gICAgcHVibGljIHJlcXVpcmVkU2NvcGVzOiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNlY3JldFJlcXVpcmVkOiBJbmRpY2F0ZXMgd2hldGhlciBhIHNlY3JldCBpcyByZXF1aXJlZC4gVmFsaWQgdmFsdWVzOiAqKnRydWUqKiBhbmQgKipmYWxzZSoqLlxuICAgICAqICoqTm90ZSoqOlxuICAgICAqIC0gRm9yIGFwcGxpY2F0aW9ucyBvZiB0aGUgV2ViQXBwIGFuZCBTZXJ2ZXJBcHAgdHlwZXMsIHRoaXMgcGFyYW1ldGVyIGlzIGF1dG9tYXRpY2FsbHkgc2V0IHRvICoqdHJ1ZSoqIGFuZCBjYW5ub3QgYmUgY2hhbmdlZC5cbiAgICAgKiAtIEZvciBhcHBsaWNhdGlvbnMgb2YgdGhlIE5hdGl2ZUFwcCB0eXBlLCB0aGlzIHBhcmFtZXRlciBjYW4gYmUgc2V0IHRvIHRydWUgb3IgZmFsc2UuIElmIHlvdSBkbyBub3Qgc2V0IHRoaXMgcGFyYW1ldGVyLCBmYWxzZSBpcyB1c2VkLiBBcHBsaWNhdGlvbnMgb2YgdGhlIE5hdGl2ZUFwcCB0eXBlIHJ1biBpbiB1bnRydXN0ZWQgZW52aXJvbm1lbnRzIGFuZCB0aGUgc2VjcmV0cyBvZiB0aGVzZSBhcHBsaWNhdGlvbnMgYXJlIG5vdCBwcm90ZWN0ZWQuIFRoZXJlZm9yZSwgd2UgcmVjb21tZW5kIHRoYXQgeW91IGRvIG5vdCBzZXQgdGhpcyBwYXJhbWV0ZXIgdG8gdHJ1ZSB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgc2VjcmV0UmVxdWlyZWQ6IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zQXBwbGljYXRpb25Qcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc0FwcGxpY2F0aW9uLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJBcHBJZCA9IHRoaXMuZ2V0QXR0KCdBcHBJZCcpO1xuICAgICAgICB0aGlzLmF0dHJBcHBOYW1lID0gdGhpcy5nZXRBdHQoJ0FwcE5hbWUnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuYXBwTmFtZSA9IHByb3BzLmFwcE5hbWU7XG4gICAgICAgIHRoaXMuYXBwVHlwZSA9IHByb3BzLmFwcFR5cGU7XG4gICAgICAgIHRoaXMuZGlzcGxheU5hbWUgPSBwcm9wcy5kaXNwbGF5TmFtZTtcbiAgICAgICAgdGhpcy5hY2Nlc3NUb2tlblZhbGlkaXR5ID0gcHJvcHMuYWNjZXNzVG9rZW5WYWxpZGl0eTtcbiAgICAgICAgdGhpcy5pc011bHRpVGVuYW50ID0gcHJvcHMuaXNNdWx0aVRlbmFudDtcbiAgICAgICAgdGhpcy5wcmVkZWZpbmVkU2NvcGVzID0gcHJvcHMucHJlZGVmaW5lZFNjb3BlcztcbiAgICAgICAgdGhpcy5yZWRpcmVjdFVyaXMgPSBwcm9wcy5yZWRpcmVjdFVyaXM7XG4gICAgICAgIHRoaXMucmVmcmVzaFRva2VuVmFsaWRpdHkgPSBwcm9wcy5yZWZyZXNoVG9rZW5WYWxpZGl0eTtcbiAgICAgICAgdGhpcy5yZXF1aXJlZFNjb3BlcyA9IHByb3BzLnJlcXVpcmVkU2NvcGVzO1xuICAgICAgICB0aGlzLnNlY3JldFJlcXVpcmVkID0gcHJvcHMuc2VjcmV0UmVxdWlyZWQ7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYXBwTmFtZTogdGhpcy5hcHBOYW1lLFxuICAgICAgICAgICAgYXBwVHlwZTogdGhpcy5hcHBUeXBlLFxuICAgICAgICAgICAgZGlzcGxheU5hbWU6IHRoaXMuZGlzcGxheU5hbWUsXG4gICAgICAgICAgICBhY2Nlc3NUb2tlblZhbGlkaXR5OiB0aGlzLmFjY2Vzc1Rva2VuVmFsaWRpdHksXG4gICAgICAgICAgICBpc011bHRpVGVuYW50OiB0aGlzLmlzTXVsdGlUZW5hbnQsXG4gICAgICAgICAgICBwcmVkZWZpbmVkU2NvcGVzOiB0aGlzLnByZWRlZmluZWRTY29wZXMsXG4gICAgICAgICAgICByZWRpcmVjdFVyaXM6IHRoaXMucmVkaXJlY3RVcmlzLFxuICAgICAgICAgICAgcmVmcmVzaFRva2VuVmFsaWRpdHk6IHRoaXMucmVmcmVzaFRva2VuVmFsaWRpdHksXG4gICAgICAgICAgICByZXF1aXJlZFNjb3BlczogdGhpcy5yZXF1aXJlZFNjb3BlcyxcbiAgICAgICAgICAgIHNlY3JldFJlcXVpcmVkOiB0aGlzLnNlY3JldFJlcXVpcmVkLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NBcHBsaWNhdGlvblByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFJvc0F0dGFjaFBvbGljeVRvR3JvdXBgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tcmFtLWF0dGFjaHBvbGljeXRvZ3JvdXBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NBdHRhY2hQb2xpY3lUb0dyb3VwUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGdyb3VwTmFtZTogVXNlciBncm91cCBuYW1lLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGdyb3VwTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBvbGljeU5hbWU6IEF1dGhvcml6YXRpb24gcG9saWN5IG5hbWUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcG9saWN5TmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBvbGljeVR5cGU6IEF1dGhvcml6YXRpb24gcG9saWN5IHR5cGUuIFZhbHVlOiBcIlN5c3RlbVwiIG9yIFwiQ3VzdG9tXCIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcG9saWN5VHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc0F0dGFjaFBvbGljeVRvR3JvdXBQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQXR0YWNoUG9saWN5VG9Hcm91cFByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0F0dGFjaFBvbGljeVRvR3JvdXBQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2dyb3VwTmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5ncm91cE5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2dyb3VwTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5ncm91cE5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BvbGljeVR5cGUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucG9saWN5VHlwZSkpO1xuICAgIGlmKHByb3BlcnRpZXMucG9saWN5VHlwZSAmJiAodHlwZW9mIHByb3BlcnRpZXMucG9saWN5VHlwZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncG9saWN5VHlwZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnBvbGljeVR5cGUsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiQ3VzdG9tXCIsXCJTeXN0ZW1cIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwb2xpY3lUeXBlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnBvbGljeVR5cGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BvbGljeU5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucG9saWN5TmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncG9saWN5TmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wb2xpY3lOYW1lKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc0F0dGFjaFBvbGljeVRvR3JvdXBQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6UkFNOjpBdHRhY2hQb2xpY3lUb0dyb3VwYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NBdHRhY2hQb2xpY3lUb0dyb3VwUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlJBTTo6QXR0YWNoUG9saWN5VG9Hcm91cGAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NBdHRhY2hQb2xpY3lUb0dyb3VwUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NBdHRhY2hQb2xpY3lUb0dyb3VwUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgJ0dyb3VwTmFtZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZ3JvdXBOYW1lKSxcbiAgICAgICdQb2xpY3lOYW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wb2xpY3lOYW1lKSxcbiAgICAgICdQb2xpY3lUeXBlJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wb2xpY3lUeXBlKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBiYXNlIGVuY2Fwc3VsYXRpb24gYXJvdW5kIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpSQU06OkF0dGFjaFBvbGljeVRvR3JvdXBgLCB3aGljaCBpcyB1c2VkIHRvIGF0dGFjaCBhIHBvbGljeSB0byBhIHVzZXIgZ3JvdXAuXG4gKiBATm90ZSBUaGlzIGNsYXNzIGRvZXMgbm90IGNvbnRhaW4gYWRkaXRpb25hbCBmdW5jdGlvbnMsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgYEF0dGFjaFBvbGljeVRvR3JvdXBgIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLXJhbS1hdHRhY2hwb2xpY3l0b2dyb3VwXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NBdHRhY2hQb2xpY3lUb0dyb3VwIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpSQU06OkF0dGFjaFBvbGljeVRvR3JvdXBcIjtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgR3JvdXBOYW1lOiBVc2VyIGdyb3VwIG5hbWUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJHcm91cE5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgUG9saWN5TmFtZTogQXV0aG9yaXphdGlvbiBwb2xpY3kgbmFtZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clBvbGljeU5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGdyb3VwTmFtZTogVXNlciBncm91cCBuYW1lLlxuICAgICAqL1xuICAgIHB1YmxpYyBncm91cE5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwb2xpY3lOYW1lOiBBdXRob3JpemF0aW9uIHBvbGljeSBuYW1lLlxuICAgICAqL1xuICAgIHB1YmxpYyBwb2xpY3lOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcG9saWN5VHlwZTogQXV0aG9yaXphdGlvbiBwb2xpY3kgdHlwZS4gVmFsdWU6IFwiU3lzdGVtXCIgb3IgXCJDdXN0b21cIi5cbiAgICAgKi9cbiAgICBwdWJsaWMgcG9saWN5VHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc0F0dGFjaFBvbGljeVRvR3JvdXBQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc0F0dGFjaFBvbGljeVRvR3JvdXAuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckdyb3VwTmFtZSA9IHRoaXMuZ2V0QXR0KCdHcm91cE5hbWUnKTtcbiAgICAgICAgdGhpcy5hdHRyUG9saWN5TmFtZSA9IHRoaXMuZ2V0QXR0KCdQb2xpY3lOYW1lJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmdyb3VwTmFtZSA9IHByb3BzLmdyb3VwTmFtZTtcbiAgICAgICAgdGhpcy5wb2xpY3lOYW1lID0gcHJvcHMucG9saWN5TmFtZTtcbiAgICAgICAgdGhpcy5wb2xpY3lUeXBlID0gcHJvcHMucG9saWN5VHlwZTtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBncm91cE5hbWU6IHRoaXMuZ3JvdXBOYW1lLFxuICAgICAgICAgICAgcG9saWN5TmFtZTogdGhpcy5wb2xpY3lOYW1lLFxuICAgICAgICAgICAgcG9saWN5VHlwZTogdGhpcy5wb2xpY3lUeXBlLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NBdHRhY2hQb2xpY3lUb0dyb3VwUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUm9zQXR0YWNoUG9saWN5VG9Sb2xlYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLXJhbS1hdHRhY2hwb2xpY3l0b3JvbGVcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NBdHRhY2hQb2xpY3lUb1JvbGVQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcG9saWN5TmFtZTogQXV0aG9yaXphdGlvbiBwb2xpY3kgbmFtZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBwb2xpY3lOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcG9saWN5VHlwZTogQXV0aG9yaXphdGlvbiBwb2xpY3kgdHlwZS4gVmFsdWU6IFwiU3lzdGVtXCIgb3IgXCJDdXN0b21cIi5cbiAgICAgKi9cbiAgICByZWFkb25seSBwb2xpY3lUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcm9sZU5hbWU6IFJvbGUgbmFtZS5FeGFtcGxlOiBkZXYuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcm9sZU5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NBdHRhY2hQb2xpY3lUb1JvbGVQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQXR0YWNoUG9saWN5VG9Sb2xlUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQXR0YWNoUG9saWN5VG9Sb2xlUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwb2xpY3lUeXBlJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnBvbGljeVR5cGUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnBvbGljeVR5cGUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnBvbGljeVR5cGUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BvbGljeVR5cGUnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5wb2xpY3lUeXBlLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIlN5c3RlbVwiLFwiQ3VzdG9tXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncG9saWN5VHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wb2xpY3lUeXBlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyb2xlTmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5yb2xlTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncm9sZU5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucm9sZU5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BvbGljeU5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucG9saWN5TmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncG9saWN5TmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wb2xpY3lOYW1lKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc0F0dGFjaFBvbGljeVRvUm9sZVByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpSQU06OkF0dGFjaFBvbGljeVRvUm9sZWAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQXR0YWNoUG9saWN5VG9Sb2xlUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlJBTTo6QXR0YWNoUG9saWN5VG9Sb2xlYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0F0dGFjaFBvbGljeVRvUm9sZVByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zQXR0YWNoUG9saWN5VG9Sb2xlUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgJ1BvbGljeU5hbWUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnBvbGljeU5hbWUpLFxuICAgICAgJ1BvbGljeVR5cGUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnBvbGljeVR5cGUpLFxuICAgICAgJ1JvbGVOYW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yb2xlTmFtZSksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgYmFzZSBlbmNhcHN1bGF0aW9uIGFyb3VuZCB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6UkFNOjpBdHRhY2hQb2xpY3lUb1JvbGVgLCB3aGljaCBpcyB1c2VkIHRvIGF0dGFjaCBhIHBvbGljeSB0byBhIHNwZWNpZmllZCByb2xlLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBBdHRhY2hQb2xpY3lUb1JvbGVgIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLXJhbS1hdHRhY2hwb2xpY3l0b3JvbGVcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc0F0dGFjaFBvbGljeVRvUm9sZSBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6UkFNOjpBdHRhY2hQb2xpY3lUb1JvbGVcIjtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBvbGljeU5hbWU6IEF1dGhvcml6YXRpb24gcG9saWN5IG5hbWUuXG4gICAgICovXG4gICAgcHVibGljIHBvbGljeU5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwb2xpY3lUeXBlOiBBdXRob3JpemF0aW9uIHBvbGljeSB0eXBlLiBWYWx1ZTogXCJTeXN0ZW1cIiBvciBcIkN1c3RvbVwiLlxuICAgICAqL1xuICAgIHB1YmxpYyBwb2xpY3lUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcm9sZU5hbWU6IFJvbGUgbmFtZS5FeGFtcGxlOiBkZXYuXG4gICAgICovXG4gICAgcHVibGljIHJvbGVOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zQXR0YWNoUG9saWN5VG9Sb2xlUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NBdHRhY2hQb2xpY3lUb1JvbGUuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLnBvbGljeU5hbWUgPSBwcm9wcy5wb2xpY3lOYW1lO1xuICAgICAgICB0aGlzLnBvbGljeVR5cGUgPSBwcm9wcy5wb2xpY3lUeXBlO1xuICAgICAgICB0aGlzLnJvbGVOYW1lID0gcHJvcHMucm9sZU5hbWU7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcG9saWN5TmFtZTogdGhpcy5wb2xpY3lOYW1lLFxuICAgICAgICAgICAgcG9saWN5VHlwZTogdGhpcy5wb2xpY3lUeXBlLFxuICAgICAgICAgICAgcm9sZU5hbWU6IHRoaXMucm9sZU5hbWUsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc0F0dGFjaFBvbGljeVRvUm9sZVByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFJvc0F0dGFjaFBvbGljeVRvVXNlcmAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1yYW0tYXR0YWNocG9saWN5dG91c2VyXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zQXR0YWNoUG9saWN5VG9Vc2VyUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBvbGljeU5hbWU6IEF1dGhvcml6YXRpb24gcG9saWN5IG5hbWUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcG9saWN5TmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBvbGljeVR5cGU6IEF1dGhvcml6YXRpb24gcG9saWN5IHR5cGUuIFZhbHVlOiBcIlN5c3RlbVwiIG9yIFwiQ3VzdG9tXCIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcG9saWN5VHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHVzZXJOYW1lOiBVc2VyIG5hbWUuRXhhbXBsZTogZGV2LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHVzZXJOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zQXR0YWNoUG9saWN5VG9Vc2VyUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0F0dGFjaFBvbGljeVRvVXNlclByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0F0dGFjaFBvbGljeVRvVXNlclByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncG9saWN5VHlwZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5wb2xpY3lUeXBlKSk7XG4gICAgaWYocHJvcGVydGllcy5wb2xpY3lUeXBlICYmICh0eXBlb2YgcHJvcGVydGllcy5wb2xpY3lUeXBlKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwb2xpY3lUeXBlJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMucG9saWN5VHlwZSxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJTeXN0ZW1cIixcIkN1c3RvbVwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BvbGljeVR5cGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucG9saWN5VHlwZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndXNlck5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMudXNlck5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3VzZXJOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnVzZXJOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwb2xpY3lOYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnBvbGljeU5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BvbGljeU5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucG9saWN5TmFtZSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NBdHRhY2hQb2xpY3lUb1VzZXJQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6UkFNOjpBdHRhY2hQb2xpY3lUb1VzZXJgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0F0dGFjaFBvbGljeVRvVXNlclByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpSQU06OkF0dGFjaFBvbGljeVRvVXNlcmAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NBdHRhY2hQb2xpY3lUb1VzZXJQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc0F0dGFjaFBvbGljeVRvVXNlclByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICdQb2xpY3lOYW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wb2xpY3lOYW1lKSxcbiAgICAgICdQb2xpY3lUeXBlJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wb2xpY3lUeXBlKSxcbiAgICAgICdVc2VyTmFtZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudXNlck5hbWUpLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OlJBTTo6QXR0YWNoUG9saWN5VG9Vc2VyYCwgd2hpY2ggaXMgdXNlZCB0byBncmFudCBwZXJtaXNzaW9ucyB0byBhIHNwZWNpZmllZCB1c2VyLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBBdHRhY2hQb2xpY3lUb1VzZXJgIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLXJhbS1hdHRhY2hwb2xpY3l0b3VzZXJcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc0F0dGFjaFBvbGljeVRvVXNlciBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6UkFNOjpBdHRhY2hQb2xpY3lUb1VzZXJcIjtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBvbGljeU5hbWU6IEF1dGhvcml6YXRpb24gcG9saWN5IG5hbWUuXG4gICAgICovXG4gICAgcHVibGljIHBvbGljeU5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwb2xpY3lUeXBlOiBBdXRob3JpemF0aW9uIHBvbGljeSB0eXBlLiBWYWx1ZTogXCJTeXN0ZW1cIiBvciBcIkN1c3RvbVwiLlxuICAgICAqL1xuICAgIHB1YmxpYyBwb2xpY3lUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdXNlck5hbWU6IFVzZXIgbmFtZS5FeGFtcGxlOiBkZXYuXG4gICAgICovXG4gICAgcHVibGljIHVzZXJOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zQXR0YWNoUG9saWN5VG9Vc2VyUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NBdHRhY2hQb2xpY3lUb1VzZXIuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLnBvbGljeU5hbWUgPSBwcm9wcy5wb2xpY3lOYW1lO1xuICAgICAgICB0aGlzLnBvbGljeVR5cGUgPSBwcm9wcy5wb2xpY3lUeXBlO1xuICAgICAgICB0aGlzLnVzZXJOYW1lID0gcHJvcHMudXNlck5hbWU7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcG9saWN5TmFtZTogdGhpcy5wb2xpY3lOYW1lLFxuICAgICAgICAgICAgcG9saWN5VHlwZTogdGhpcy5wb2xpY3lUeXBlLFxuICAgICAgICAgICAgdXNlck5hbWU6IHRoaXMudXNlck5hbWUsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc0F0dGFjaFBvbGljeVRvVXNlclByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFJvc0dyb3VwYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLXJhbS1ncm91cFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc0dyb3VwUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGdyb3VwTmFtZTogU3BlY2lmaWVzIHRoZSBncm91cCBuYW1lLCBjb250YWluaW5nIHVwIHRvIDY0IGNoYXJhY3RlcnMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZ3JvdXBOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY29tbWVudHM6IFJlbWFyayBpbmZvcm1hdGlvbiwgdXAgdG8gMTI4IGNoYXJhY3RlcnMgb3IgQ2hpbmVzZSBjaGFyYWN0ZXJzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNvbW1lbnRzPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlbGV0aW9uRm9yY2U6IFdoZXRoZXIgZm9yY2UgZGV0YWNoIHRoZSBwb2xpY2llcyBhdHRhY2hlZCB0byB0aGUgZ3JvdXAuIERlZmF1bHQgdmFsdWUgaXMgZmFsc2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVsZXRpb25Gb3JjZT86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaWdub3JlRXhpc3Rpbmc6IFdoZXRoZXIgdG8gaWdub3JlIGV4aXN0aW5nIGdyb3VwXG4gICAgICogRmFsc2U6IFJPUyB3aWxsIHBlcmZvcm0gYSB1bmlxdWVuZXNzIGNoZWNrLklmIGEgZ3JvdXAgd2l0aCB0aGUgc2FtZSBuYW1lIGV4aXN0cywgYW4gZXJyb3Igd2lsbCBiZSByZXBvcnRlZCB3aGVuIGNyZWF0aW5nIGl0LlxuICAgICAqIFRydWU6IFJPUyB3aWxsIG5vdCBjaGVjayB0aGUgdW5pcXVlbmVzcy5JZiB0aGVyZSBpcyBhIGdyb3VwIHdpdGggdGhlIHNhbWUgbmFtZSwgdGhlIGdyb3VwIGNyZWF0aW9uIHByb2Nlc3Mgd2lsbCBiZSBpZ25vcmVkLlxuICAgICAqIElmIHRoZSBncm91cCBpcyBub3QgY3JlYXRlZCBieSBST1MsIGl0IHdpbGwgYmUgaWdub3JlZCBkdXJpbmcgdXBkYXRlIGFuZCBkZWxldGUgc3RhZ2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaWdub3JlRXhpc3Rpbmc/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBvbGljaWVzOiBEZXNjcmliZXMgd2hhdCBhY3Rpb25zIGFyZSBhbGxvd2VkIG9uIHdoYXQgcmVzb3VyY2VzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBvbGljaWVzPzogQXJyYXk8Um9zR3JvdXAuUG9saWNpZXNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcG9saWN5QXR0YWNobWVudHM6IFN5c3RlbSBhbmQgY3VzdG9tIHBvbGljeSBuYW1lcyB0byBhdHRhY2guXG4gICAgICovXG4gICAgcmVhZG9ubHkgcG9saWN5QXR0YWNobWVudHM/OiBSb3NHcm91cC5Qb2xpY3lBdHRhY2htZW50c1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc0dyb3VwUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0dyb3VwUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zR3JvdXBQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2lnbm9yZUV4aXN0aW5nJywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy5pZ25vcmVFeGlzdGluZykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZ3JvdXBOYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmdyb3VwTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZ3JvdXBOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmdyb3VwTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncG9saWNpZXMnLCByb3MubGlzdFZhbGlkYXRvcihSb3NHcm91cF9Qb2xpY2llc1Byb3BlcnR5VmFsaWRhdG9yKSkocHJvcGVydGllcy5wb2xpY2llcykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncG9saWN5QXR0YWNobWVudHMnLCBSb3NHcm91cF9Qb2xpY3lBdHRhY2htZW50c1Byb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLnBvbGljeUF0dGFjaG1lbnRzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZWxldGlvbkZvcmNlJywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy5kZWxldGlvbkZvcmNlKSk7XG4gICAgaWYocHJvcGVydGllcy5jb21tZW50cyAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLmNvbW1lbnRzKSB8fCAodHlwZW9mIHByb3BlcnRpZXMuY29tbWVudHMpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjb21tZW50cycsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5jb21tZW50cy5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG1heDogMTI4LFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjb21tZW50cycsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5jb21tZW50cykpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NHcm91cFByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpSQU06Okdyb3VwYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NHcm91cFByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpSQU06Okdyb3VwYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0dyb3VwUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NHcm91cFByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICdHcm91cE5hbWUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmdyb3VwTmFtZSksXG4gICAgICAnQ29tbWVudHMnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmNvbW1lbnRzKSxcbiAgICAgICdEZWxldGlvbkZvcmNlJzogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGVsZXRpb25Gb3JjZSksXG4gICAgICAnSWdub3JlRXhpc3RpbmcnOiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pZ25vcmVFeGlzdGluZyksXG4gICAgICAnUG9saWNpZXMnOiByb3MubGlzdE1hcHBlcihyb3NHcm91cFBvbGljaWVzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLnBvbGljaWVzKSxcbiAgICAgICdQb2xpY3lBdHRhY2htZW50cyc6IHJvc0dyb3VwUG9saWN5QXR0YWNobWVudHNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wb2xpY3lBdHRhY2htZW50cyksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgYmFzZSBlbmNhcHN1bGF0aW9uIGFyb3VuZCB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6UkFNOjpHcm91cGAsIHdoaWNoIGlzIHVzZWQgdG8gY3JlYXRlIGEgUmVzb3VyY2UgQWNjZXNzIE1hbmFnZW1lbnQgKFJBTSkgdXNlciBncm91cC5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgZG9lcyBub3QgY29udGFpbiBhZGRpdGlvbmFsIGZ1bmN0aW9ucywgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgR3JvdXBgIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLXJhbS1ncm91cFxuICovXG5leHBvcnQgY2xhc3MgUm9zR3JvdXAgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OlJBTTo6R3JvdXBcIjtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgR3JvdXBOYW1lOiBJZCBvZiByYW0gZ3JvdXAuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJHcm91cE5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGdyb3VwTmFtZTogU3BlY2lmaWVzIHRoZSBncm91cCBuYW1lLCBjb250YWluaW5nIHVwIHRvIDY0IGNoYXJhY3RlcnMuXG4gICAgICovXG4gICAgcHVibGljIGdyb3VwTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNvbW1lbnRzOiBSZW1hcmsgaW5mb3JtYXRpb24sIHVwIHRvIDEyOCBjaGFyYWN0ZXJzIG9yIENoaW5lc2UgY2hhcmFjdGVycy5cbiAgICAgKi9cbiAgICBwdWJsaWMgY29tbWVudHM6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZWxldGlvbkZvcmNlOiBXaGV0aGVyIGZvcmNlIGRldGFjaCB0aGUgcG9saWNpZXMgYXR0YWNoZWQgdG8gdGhlIGdyb3VwLiBEZWZhdWx0IHZhbHVlIGlzIGZhbHNlLlxuICAgICAqL1xuICAgIHB1YmxpYyBkZWxldGlvbkZvcmNlOiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGlnbm9yZUV4aXN0aW5nOiBXaGV0aGVyIHRvIGlnbm9yZSBleGlzdGluZyBncm91cFxuICAgICAqIEZhbHNlOiBST1Mgd2lsbCBwZXJmb3JtIGEgdW5pcXVlbmVzcyBjaGVjay5JZiBhIGdyb3VwIHdpdGggdGhlIHNhbWUgbmFtZSBleGlzdHMsIGFuIGVycm9yIHdpbGwgYmUgcmVwb3J0ZWQgd2hlbiBjcmVhdGluZyBpdC5cbiAgICAgKiBUcnVlOiBST1Mgd2lsbCBub3QgY2hlY2sgdGhlIHVuaXF1ZW5lc3MuSWYgdGhlcmUgaXMgYSBncm91cCB3aXRoIHRoZSBzYW1lIG5hbWUsIHRoZSBncm91cCBjcmVhdGlvbiBwcm9jZXNzIHdpbGwgYmUgaWdub3JlZC5cbiAgICAgKiBJZiB0aGUgZ3JvdXAgaXMgbm90IGNyZWF0ZWQgYnkgUk9TLCBpdCB3aWxsIGJlIGlnbm9yZWQgZHVyaW5nIHVwZGF0ZSBhbmQgZGVsZXRlIHN0YWdlLlxuICAgICAqL1xuICAgIHB1YmxpYyBpZ25vcmVFeGlzdGluZzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwb2xpY2llczogRGVzY3JpYmVzIHdoYXQgYWN0aW9ucyBhcmUgYWxsb3dlZCBvbiB3aGF0IHJlc291cmNlcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcG9saWNpZXM6IEFycmF5PFJvc0dyb3VwLlBvbGljaWVzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBvbGljeUF0dGFjaG1lbnRzOiBTeXN0ZW0gYW5kIGN1c3RvbSBwb2xpY3kgbmFtZXMgdG8gYXR0YWNoLlxuICAgICAqL1xuICAgIHB1YmxpYyBwb2xpY3lBdHRhY2htZW50czogUm9zR3JvdXAuUG9saWN5QXR0YWNobWVudHNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NHcm91cFByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zR3JvdXAuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckdyb3VwTmFtZSA9IHRoaXMuZ2V0QXR0KCdHcm91cE5hbWUnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuZ3JvdXBOYW1lID0gcHJvcHMuZ3JvdXBOYW1lO1xuICAgICAgICB0aGlzLmNvbW1lbnRzID0gcHJvcHMuY29tbWVudHM7XG4gICAgICAgIHRoaXMuZGVsZXRpb25Gb3JjZSA9IHByb3BzLmRlbGV0aW9uRm9yY2U7XG4gICAgICAgIHRoaXMuaWdub3JlRXhpc3RpbmcgPSBwcm9wcy5pZ25vcmVFeGlzdGluZztcbiAgICAgICAgdGhpcy5wb2xpY2llcyA9IHByb3BzLnBvbGljaWVzO1xuICAgICAgICB0aGlzLnBvbGljeUF0dGFjaG1lbnRzID0gcHJvcHMucG9saWN5QXR0YWNobWVudHM7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZ3JvdXBOYW1lOiB0aGlzLmdyb3VwTmFtZSxcbiAgICAgICAgICAgIGNvbW1lbnRzOiB0aGlzLmNvbW1lbnRzLFxuICAgICAgICAgICAgZGVsZXRpb25Gb3JjZTogdGhpcy5kZWxldGlvbkZvcmNlLFxuICAgICAgICAgICAgaWdub3JlRXhpc3Rpbmc6IHRoaXMuaWdub3JlRXhpc3RpbmcsXG4gICAgICAgICAgICBwb2xpY2llczogdGhpcy5wb2xpY2llcyxcbiAgICAgICAgICAgIHBvbGljeUF0dGFjaG1lbnRzOiB0aGlzLnBvbGljeUF0dGFjaG1lbnRzLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NHcm91cFByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0dyb3VwIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBQb2xpY2llc1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBpZ25vcmVFeGlzdGluZzogV2hldGhlciB0byBpZ25vcmUgZXhpc3RpbmcgcG9saWN5XG4gICAgICogRmFsc2U6IFJPUyB3aWxsIHBlcmZvcm0gYSB1bmlxdWVuZXNzIGNoZWNrLklmIGEgcG9saWN5IHdpdGggdGhlIHNhbWUgbmFtZSBleGlzdHMsIGFuIGVycm9yIHdpbGwgYmUgcmVwb3J0ZWQgd2hlbiBjcmVhdGluZyBpdC5cbiAgICAgKiBUcnVlOiBST1Mgd2lsbCBub3QgY2hlY2sgdGhlIHVuaXF1ZW5lc3MuSWYgdGhlcmUgaXMgYSBwb2xpY3kgd2l0aCB0aGUgc2FtZSBuYW1lLCB0aGUgcG9saWN5IGNyZWF0aW9uIHByb2Nlc3Mgd2lsbCBiZSBpZ25vcmVkLlxuICAgICAqIElmIHRoZSBwb2xpY3kgaXMgbm90IGNyZWF0ZWQgYnkgUk9TLCBpdCB3aWxsIGJlIGlnbm9yZWQgZHVyaW5nIHVwZGF0ZSBhbmQgZGVsZXRlIHN0YWdlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgaWdub3JlRXhpc3Rpbmc/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGRlc2NyaXB0aW9uOiBTcGVjaWZpZXMgdGhlIGF1dGhvcml6YXRpb24gcG9saWN5IGRlc2NyaXB0aW9uLCBjb250YWluaW5nIHVwIHRvIDEwMjQgY2hhcmFjdGVycy5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHBvbGljeU5hbWU6IFNwZWNpZmllcyB0aGUgYXV0aG9yaXphdGlvbiBwb2xpY3kgbmFtZSwgY29udGFpbmluZyB1cCB0byAxMjggY2hhcmFjdGVycy5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHBvbGljeU5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBwb2xpY3lEb2N1bWVudDogQSBwb2xpY3kgZG9jdW1lbnQgdGhhdCBkZXNjcmliZXMgd2hhdCBhY3Rpb25zIGFyZSBhbGxvd2VkIG9uIHdoaWNoIHJlc291cmNlcy5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHBvbGljeURvY3VtZW50OiBSb3NHcm91cC5Qb2xpY3lEb2N1bWVudFByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUG9saWNpZXNQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUG9saWNpZXNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NHcm91cF9Qb2xpY2llc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaWdub3JlRXhpc3RpbmcnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLmlnbm9yZUV4aXN0aW5nKSk7XG4gICAgaWYocHJvcGVydGllcy5kZXNjcmlwdGlvbiAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSB8fCAodHlwZW9mIHByb3BlcnRpZXMuZGVzY3JpcHRpb24pID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZXNjcmlwdGlvbicsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5kZXNjcmlwdGlvbi5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG1heDogMTAyNCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVzY3JpcHRpb24nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZGVzY3JpcHRpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BvbGljeU5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucG9saWN5TmFtZSkpO1xuICAgIGlmKHByb3BlcnRpZXMucG9saWN5TmFtZSAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLnBvbGljeU5hbWUpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5wb2xpY3lOYW1lKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncG9saWN5TmFtZScsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5wb2xpY3lOYW1lLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbWF4OiAxMjgsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BvbGljeU5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucG9saWN5TmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncG9saWN5RG9jdW1lbnQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucG9saWN5RG9jdW1lbnQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BvbGljeURvY3VtZW50JywgUm9zR3JvdXBfUG9saWN5RG9jdW1lbnRQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5wb2xpY3lEb2N1bWVudCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJQb2xpY2llc1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpSQU06Okdyb3VwLlBvbGljaWVzYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBQb2xpY2llc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpSQU06Okdyb3VwLlBvbGljaWVzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0dyb3VwUG9saWNpZXNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zR3JvdXBfUG9saWNpZXNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdJZ25vcmVFeGlzdGluZyc6IHJvcy5ib29sZWFuVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmlnbm9yZUV4aXN0aW5nKSxcbiAgICAgICdEZXNjcmlwdGlvbic6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGVzY3JpcHRpb24pLFxuICAgICAgJ1BvbGljeU5hbWUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnBvbGljeU5hbWUpLFxuICAgICAgJ1BvbGljeURvY3VtZW50Jzogcm9zR3JvdXBQb2xpY3lEb2N1bWVudFByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnBvbGljeURvY3VtZW50KSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0dyb3VwIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBQb2xpY3lBdHRhY2htZW50c1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBjdXN0b206IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgY3VzdG9tPzogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzeXN0ZW06IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc3lzdGVtPzogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFBvbGljeUF0dGFjaG1lbnRzUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFBvbGljeUF0dGFjaG1lbnRzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zR3JvdXBfUG9saWN5QXR0YWNobWVudHNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBpZihwcm9wZXJ0aWVzLmN1c3RvbSAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLmN1c3RvbSkgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLmN1c3RvbSkgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2N1c3RvbScsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5jdXN0b20ubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtYXg6IDUsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2N1c3RvbScsIHJvcy5saXN0VmFsaWRhdG9yKHJvcy52YWxpZGF0ZVN0cmluZykpKHByb3BlcnRpZXMuY3VzdG9tKSk7XG4gICAgaWYocHJvcGVydGllcy5zeXN0ZW0gJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5zeXN0ZW0pIHx8ICh0eXBlb2YgcHJvcGVydGllcy5zeXN0ZW0pID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzeXN0ZW0nLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuc3lzdGVtLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbWF4OiAyMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3lzdGVtJywgcm9zLmxpc3RWYWxpZGF0b3Iocm9zLnZhbGlkYXRlU3RyaW5nKSkocHJvcGVydGllcy5zeXN0ZW0pKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUG9saWN5QXR0YWNobWVudHNQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6UkFNOjpHcm91cC5Qb2xpY3lBdHRhY2htZW50c2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUG9saWN5QXR0YWNobWVudHNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6UkFNOjpHcm91cC5Qb2xpY3lBdHRhY2htZW50c2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NHcm91cFBvbGljeUF0dGFjaG1lbnRzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0dyb3VwX1BvbGljeUF0dGFjaG1lbnRzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnQ3VzdG9tJzogcm9zLmxpc3RNYXBwZXIocm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMuY3VzdG9tKSxcbiAgICAgICdTeXN0ZW0nOiByb3MubGlzdE1hcHBlcihyb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5zeXN0ZW0pLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zR3JvdXAge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFBvbGljeURvY3VtZW50UHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHZlcnNpb246IFlvdSBjYW4gdXNlIHZlcnNpb25zIHRvIHRyYWNrIGNoYW5nZXMgdG8gYSBtYW5hZ2VkIHBvbGljeS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHZlcnNpb246IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzdGF0ZW1lbnQ6IEEgcG9saWN5IGNvbnNpc3RzIG9mIG9uZSBvciBtb3JlIHN0YXRlbWVudHMuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzdGF0ZW1lbnQ6IEFycmF5PFJvc0dyb3VwLlN0YXRlbWVudFByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFBvbGljeURvY3VtZW50UHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFBvbGljeURvY3VtZW50UHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zR3JvdXBfUG9saWN5RG9jdW1lbnRQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZlcnNpb24nLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMudmVyc2lvbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndmVyc2lvbicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy52ZXJzaW9uKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdGF0ZW1lbnQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuc3RhdGVtZW50KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdGF0ZW1lbnQnLCByb3MubGlzdFZhbGlkYXRvcihSb3NHcm91cF9TdGF0ZW1lbnRQcm9wZXJ0eVZhbGlkYXRvcikpKHByb3BlcnRpZXMuc3RhdGVtZW50KSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlBvbGljeURvY3VtZW50UHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlJBTTo6R3JvdXAuUG9saWN5RG9jdW1lbnRgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFBvbGljeURvY3VtZW50UHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlJBTTo6R3JvdXAuUG9saWN5RG9jdW1lbnRgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zR3JvdXBQb2xpY3lEb2N1bWVudFByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NHcm91cF9Qb2xpY3lEb2N1bWVudFByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ1ZlcnNpb24nOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnZlcnNpb24pLFxuICAgICAgJ1N0YXRlbWVudCc6IHJvcy5saXN0TWFwcGVyKHJvc0dyb3VwU3RhdGVtZW50UHJvcGVydHlUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLnN0YXRlbWVudCksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NHcm91cCB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgU3RhdGVtZW50UHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGNvbmRpdGlvbjogV2hhdCBjb25kaXRpb25zIHNob3VsZCBiZSBzYXRpc2ZpZWQuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBjb25kaXRpb24/OiB7IFtrZXk6IHN0cmluZ106IChhbnkgfCByb3MuSVJlc29sdmFibGUpIH0gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgYWN0aW9uOiBXaGF0IGFjdGlvbnMgeW91IHdpbGwgYWxsb3cuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBhY3Rpb24/OiBBcnJheTxhbnkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHJlc291cmNlOiBXaGljaCByZXNvdXJjZXMgeW91IGFsbG93IHRoZSBhY3Rpb24gb24uXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSByZXNvdXJjZT86IEFycmF5PGFueSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgZWZmZWN0OiBXaGF0IHRoZSBlZmZlY3Qgd2lsbCBiZSB3aGVuIHRoZSB1c2VyIHJlcXVlc3RzIGFjY2Vzcy1laXRoZXIgYWxsb3cgb3IgZGVueS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGVmZmVjdD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFN0YXRlbWVudFByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBTdGF0ZW1lbnRQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NHcm91cF9TdGF0ZW1lbnRQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NvbmRpdGlvbicsIHJvcy5oYXNoVmFsaWRhdG9yKHJvcy52YWxpZGF0ZUFueSkpKHByb3BlcnRpZXMuY29uZGl0aW9uKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhY3Rpb24nLCByb3MubGlzdFZhbGlkYXRvcihyb3MudmFsaWRhdGVBbnkpKShwcm9wZXJ0aWVzLmFjdGlvbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVzb3VyY2UnLCByb3MubGlzdFZhbGlkYXRvcihyb3MudmFsaWRhdGVBbnkpKShwcm9wZXJ0aWVzLnJlc291cmNlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdlZmZlY3QnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZWZmZWN0KSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlN0YXRlbWVudFByb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpSQU06Okdyb3VwLlN0YXRlbWVudGAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgU3RhdGVtZW50UHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlJBTTo6R3JvdXAuU3RhdGVtZW50YCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0dyb3VwU3RhdGVtZW50UHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0dyb3VwX1N0YXRlbWVudFByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ0NvbmRpdGlvbic6IHJvcy5oYXNoTWFwcGVyKHJvcy5vYmplY3RUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLmNvbmRpdGlvbiksXG4gICAgICAnQWN0aW9uJzogcm9zLmxpc3RNYXBwZXIocm9zLm9iamVjdFRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMuYWN0aW9uKSxcbiAgICAgICdSZXNvdXJjZSc6IHJvcy5saXN0TWFwcGVyKHJvcy5vYmplY3RUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLnJlc291cmNlKSxcbiAgICAgICdFZmZlY3QnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmVmZmVjdCksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NMb2dpblByb2ZpbGVgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tcmFtLWxvZ2lucHJvZmlsZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc0xvZ2luUHJvZmlsZVByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB1c2VyUHJpbmNpcGFsTmFtZTogVGhlIGxvZ2luIG5hbWUgb2YgdGhlIFJBTSB1c2VyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHVzZXJQcmluY2lwYWxOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZ2VuZXJhdGVSYW5kb21QYXNzd29yZDogV2hldGhlciB0byBnZW5lcmF0ZSBhIHJhbmRvbSBwYXNzd29yZCBmb3IgdGhlIFJBTSB1c2VyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGdlbmVyYXRlUmFuZG9tUGFzc3dvcmQ/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG1mYUJpbmRSZXF1aXJlZDogV2hldGhlciB0byBmb3JjZSBSQU0gdXNlcnMgdG8gZW5hYmxlIG11bHRpLWZhY3RvciBhdXRoZW50aWNhdGlvbi4gVmFsaWQgdmFsdWVzOlxuICAgICAqIC0gdHJ1ZTogVGhpcyBpcyByZXF1aXJlZC4gUkFNIHVzZXJzIG11c3QgYmluZCB0aGUgbXVsdGlmYWN0b3IgYXV0aGVudGljYXRpb24gZGV2aWNlIHRoZSBuZXh0IHRpbWUgdGhleSBsb2cgaW4uXG4gICAgICogLSBmYWxzZSAoZGVmYXVsdCkgOiBUaGlzIGlzIG5vdCByZXF1aXJlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBtZmFCaW5kUmVxdWlyZWQ/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBhc3N3b3JkOiBUaGUgcGFzc3dvcmQgb2YgdGhlIFJBTSB1c2VyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBhc3N3b3JkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBhc3N3b3JkUmVzZXRSZXF1aXJlZDogV2hldGhlciBSQU0gdXNlcnMgbXVzdCByZXNldCB0aGVpciBwYXNzd29yZCB0aGUgbmV4dCB0aW1lIHRoZXkgbG9nIGluLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBhc3N3b3JkUmVzZXRSZXF1aXJlZD86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc3RhdHVzOiBFbmFibGUgb3IgZGlzYWJsZSBjb25zb2xlIHBhc3N3b3JkIGxvZ2luLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSBBY3RpdmF0ZSAoZGVmYXVsdCk6IEVuYWJsZS5cbiAgICAgKiAtIEluYWN0aXZhdGU6IERpc2FibGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc3RhdHVzPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc0xvZ2luUHJvZmlsZVByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NMb2dpblByb2ZpbGVQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NMb2dpblByb2ZpbGVQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBpZihwcm9wZXJ0aWVzLnN0YXR1cyAmJiAodHlwZW9mIHByb3BlcnRpZXMuc3RhdHVzKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdGF0dXMnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5zdGF0dXMsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiQWN0aXZhdGVcIixcIkluYWN0aXZhdGVcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdGF0dXMnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc3RhdHVzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwYXNzd29yZFJlc2V0UmVxdWlyZWQnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLnBhc3N3b3JkUmVzZXRSZXF1aXJlZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndXNlclByaW5jaXBhbE5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMudXNlclByaW5jaXBhbE5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3VzZXJQcmluY2lwYWxOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnVzZXJQcmluY2lwYWxOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdnZW5lcmF0ZVJhbmRvbVBhc3N3b3JkJywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy5nZW5lcmF0ZVJhbmRvbVBhc3N3b3JkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtZmFCaW5kUmVxdWlyZWQnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLm1mYUJpbmRSZXF1aXJlZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncGFzc3dvcmQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucGFzc3dvcmQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zTG9naW5Qcm9maWxlUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlJBTTo6TG9naW5Qcm9maWxlYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NMb2dpblByb2ZpbGVQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6UkFNOjpMb2dpblByb2ZpbGVgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zTG9naW5Qcm9maWxlUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NMb2dpblByb2ZpbGVQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAnVXNlclByaW5jaXBhbE5hbWUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnVzZXJQcmluY2lwYWxOYW1lKSxcbiAgICAgICdHZW5lcmF0ZVJhbmRvbVBhc3N3b3JkJzogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZ2VuZXJhdGVSYW5kb21QYXNzd29yZCksXG4gICAgICAnTUZBQmluZFJlcXVpcmVkJzogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubWZhQmluZFJlcXVpcmVkKSxcbiAgICAgICdQYXNzd29yZCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucGFzc3dvcmQpLFxuICAgICAgJ1Bhc3N3b3JkUmVzZXRSZXF1aXJlZCc6IHJvcy5ib29sZWFuVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnBhc3N3b3JkUmVzZXRSZXF1aXJlZCksXG4gICAgICAnU3RhdHVzJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zdGF0dXMpLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OlJBTTo6TG9naW5Qcm9maWxlYCwgd2hpY2ggaXMgdXNlZCB0byBjcmVhdGUgbG9nb24gY29uZmlndXJhdGlvbnMgZm9yIGEgUmVzb3VyY2UgQWNjZXNzIE1hbmFnZW1lbnQgKFJBTSkgdXNlci5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgZG9lcyBub3QgY29udGFpbiBhZGRpdGlvbmFsIGZ1bmN0aW9ucywgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgTG9naW5Qcm9maWxlYCBjbGFzcyBpbnN0ZWFkIG9mIHRoaXMgY2xhc3MgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1yYW0tbG9naW5wcm9maWxlXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NMb2dpblByb2ZpbGUgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OlJBTTo6TG9naW5Qcm9maWxlXCI7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFBhc3N3b3JkOiBUaGUgcGFzc3dvcmQgb2YgdGhlIFJBTSB1c2VyLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUGFzc3dvcmQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHVzZXJQcmluY2lwYWxOYW1lOiBUaGUgbG9naW4gbmFtZSBvZiB0aGUgUkFNIHVzZXIuXG4gICAgICovXG4gICAgcHVibGljIHVzZXJQcmluY2lwYWxOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZ2VuZXJhdGVSYW5kb21QYXNzd29yZDogV2hldGhlciB0byBnZW5lcmF0ZSBhIHJhbmRvbSBwYXNzd29yZCBmb3IgdGhlIFJBTSB1c2VyLlxuICAgICAqL1xuICAgIHB1YmxpYyBnZW5lcmF0ZVJhbmRvbVBhc3N3b3JkOiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG1mYUJpbmRSZXF1aXJlZDogV2hldGhlciB0byBmb3JjZSBSQU0gdXNlcnMgdG8gZW5hYmxlIG11bHRpLWZhY3RvciBhdXRoZW50aWNhdGlvbi4gVmFsaWQgdmFsdWVzOlxuICAgICAqIC0gdHJ1ZTogVGhpcyBpcyByZXF1aXJlZC4gUkFNIHVzZXJzIG11c3QgYmluZCB0aGUgbXVsdGlmYWN0b3IgYXV0aGVudGljYXRpb24gZGV2aWNlIHRoZSBuZXh0IHRpbWUgdGhleSBsb2cgaW4uXG4gICAgICogLSBmYWxzZSAoZGVmYXVsdCkgOiBUaGlzIGlzIG5vdCByZXF1aXJlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgbWZhQmluZFJlcXVpcmVkOiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBhc3N3b3JkOiBUaGUgcGFzc3dvcmQgb2YgdGhlIFJBTSB1c2VyLlxuICAgICAqL1xuICAgIHB1YmxpYyBwYXNzd29yZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBhc3N3b3JkUmVzZXRSZXF1aXJlZDogV2hldGhlciBSQU0gdXNlcnMgbXVzdCByZXNldCB0aGVpciBwYXNzd29yZCB0aGUgbmV4dCB0aW1lIHRoZXkgbG9nIGluLlxuICAgICAqL1xuICAgIHB1YmxpYyBwYXNzd29yZFJlc2V0UmVxdWlyZWQ6IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc3RhdHVzOiBFbmFibGUgb3IgZGlzYWJsZSBjb25zb2xlIHBhc3N3b3JkIGxvZ2luLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSBBY3RpdmF0ZSAoZGVmYXVsdCk6IEVuYWJsZS5cbiAgICAgKiAtIEluYWN0aXZhdGU6IERpc2FibGUuXG4gICAgICovXG4gICAgcHVibGljIHN0YXR1czogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc0xvZ2luUHJvZmlsZVByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zTG9naW5Qcm9maWxlLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJQYXNzd29yZCA9IHRoaXMuZ2V0QXR0KCdQYXNzd29yZCcpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy51c2VyUHJpbmNpcGFsTmFtZSA9IHByb3BzLnVzZXJQcmluY2lwYWxOYW1lO1xuICAgICAgICB0aGlzLmdlbmVyYXRlUmFuZG9tUGFzc3dvcmQgPSBwcm9wcy5nZW5lcmF0ZVJhbmRvbVBhc3N3b3JkO1xuICAgICAgICB0aGlzLm1mYUJpbmRSZXF1aXJlZCA9IHByb3BzLm1mYUJpbmRSZXF1aXJlZDtcbiAgICAgICAgdGhpcy5wYXNzd29yZCA9IHByb3BzLnBhc3N3b3JkO1xuICAgICAgICB0aGlzLnBhc3N3b3JkUmVzZXRSZXF1aXJlZCA9IHByb3BzLnBhc3N3b3JkUmVzZXRSZXF1aXJlZDtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBwcm9wcy5zdGF0dXM7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdXNlclByaW5jaXBhbE5hbWU6IHRoaXMudXNlclByaW5jaXBhbE5hbWUsXG4gICAgICAgICAgICBnZW5lcmF0ZVJhbmRvbVBhc3N3b3JkOiB0aGlzLmdlbmVyYXRlUmFuZG9tUGFzc3dvcmQsXG4gICAgICAgICAgICBtZmFCaW5kUmVxdWlyZWQ6IHRoaXMubWZhQmluZFJlcXVpcmVkLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmQsXG4gICAgICAgICAgICBwYXNzd29yZFJlc2V0UmVxdWlyZWQ6IHRoaXMucGFzc3dvcmRSZXNldFJlcXVpcmVkLFxuICAgICAgICAgICAgc3RhdHVzOiB0aGlzLnN0YXR1cyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zTG9naW5Qcm9maWxlUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUm9zTWFuYWdlZFBvbGljeWAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1yYW0tbWFuYWdlZHBvbGljeVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc01hbmFnZWRQb2xpY3lQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcG9saWN5TmFtZTogU3BlY2lmaWVzIHRoZSBhdXRob3JpemF0aW9uIHBvbGljeSBuYW1lLCBjb250YWluaW5nIHVwIHRvIDEyOCBjaGFyYWN0ZXJzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBvbGljeU5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogU3BlY2lmaWVzIHRoZSBhdXRob3JpemF0aW9uIHBvbGljeSBkZXNjcmlwdGlvbiwgY29udGFpbmluZyB1cCB0byAxMDI0IGNoYXJhY3RlcnMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZ3JvdXBzOiBUaGUgbmFtZXMgb2YgZ3JvdXBzIHRvIGF0dGFjaCB0byB0aGlzIHBvbGljeS5cbiAgICAgKi9cbiAgICByZWFkb25seSBncm91cHM/OiBBcnJheTxhbnkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGlnbm9yZUV4aXN0aW5nOiBXaGV0aGVyIHRvIGlnbm9yZSBleGlzdGluZyBwb2xpY3lcbiAgICAgKiBGYWxzZTogUk9TIHdpbGwgcGVyZm9ybSBhIHVuaXF1ZW5lc3MgY2hlY2suSWYgYSBwb2xpY3kgd2l0aCB0aGUgc2FtZSBuYW1lIGV4aXN0cywgYW4gZXJyb3Igd2lsbCBiZSByZXBvcnRlZCB3aGVuIGNyZWF0aW5nIGl0LlxuICAgICAqIFRydWU6IFJPUyB3aWxsIG5vdCBjaGVjayB0aGUgdW5pcXVlbmVzcy5JZiB0aGVyZSBpcyBhIHBvbGljeSB3aXRoIHRoZSBzYW1lIG5hbWUsIHRoZSBwb2xpY3kgY3JlYXRpb24gcHJvY2VzcyB3aWxsIGJlIGlnbm9yZWQuXG4gICAgICogSWYgdGhlIHBvbGljeSBpcyBub3QgY3JlYXRlZCBieSBST1MsIGl0IHdpbGwgYmUgaWdub3JlZCBkdXJpbmcgdXBkYXRlIGFuZCBkZWxldGUgc3RhZ2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaWdub3JlRXhpc3Rpbmc/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBvbGljeURvY3VtZW50OiBBIHBvbGljeSBkb2N1bWVudCB0aGF0IGRlc2NyaWJlcyB3aGF0IGFjdGlvbnMgYXJlIGFsbG93ZWQgb24gd2hpY2ggcmVzb3VyY2VzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBvbGljeURvY3VtZW50PzogUm9zTWFuYWdlZFBvbGljeS5Qb2xpY3lEb2N1bWVudFByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBvbGljeURvY3VtZW50VW5jaGVja2VkOiBBIHBvbGljeSBkb2N1bWVudCB0aGF0IGRlc2NyaWJlcyB3aGF0IGFjdGlvbnMgYXJlIGFsbG93ZWQgb24gd2hpY2ggcmVzb3VyY2VzLiBJZiBpdCBpcyBzcGVjaWZpZWQsIFBvbGljeURvY3VtZW50IHdpbGwgYmUgaWdub3JlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBwb2xpY3lEb2N1bWVudFVuY2hlY2tlZD86IHsgW2tleTogc3RyaW5nXTogKGFueSB8IHJvcy5JUmVzb2x2YWJsZSkgfSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByb2xlczogVGhlIG5hbWVzIG9mIHJvbGVzIHRvIGF0dGFjaCB0byB0aGlzIHBvbGljeS5cbiAgICAgKi9cbiAgICByZWFkb25seSByb2xlcz86IEFycmF5PGFueSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdXNlcnM6IFRoZSBuYW1lcyBvZiB1c2VycyB0byBhdHRhY2ggdG8gdGhpcyBwb2xpY3kuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdXNlcnM/OiBBcnJheTxhbnkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc01hbmFnZWRQb2xpY3lQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zTWFuYWdlZFBvbGljeVByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc01hbmFnZWRQb2xpY3lQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2lnbm9yZUV4aXN0aW5nJywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy5pZ25vcmVFeGlzdGluZykpO1xuICAgIGlmKHByb3BlcnRpZXMuZGVzY3JpcHRpb24gJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5kZXNjcmlwdGlvbikgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVzY3JpcHRpb24nLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuZGVzY3JpcHRpb24ubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtYXg6IDEwMjQsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Rlc2NyaXB0aW9uJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdncm91cHMnLCByb3MubGlzdFZhbGlkYXRvcihyb3MudmFsaWRhdGVBbnkpKShwcm9wZXJ0aWVzLmdyb3VwcykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncG9saWN5TmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5wb2xpY3lOYW1lKSk7XG4gICAgaWYocHJvcGVydGllcy5wb2xpY3lOYW1lICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMucG9saWN5TmFtZSkgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLnBvbGljeU5hbWUpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwb2xpY3lOYW1lJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnBvbGljeU5hbWUubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtYXg6IDEyOCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncG9saWN5TmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wb2xpY3lOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwb2xpY3lEb2N1bWVudFVuY2hlY2tlZCcsIHJvcy5oYXNoVmFsaWRhdG9yKHJvcy52YWxpZGF0ZUFueSkpKHByb3BlcnRpZXMucG9saWN5RG9jdW1lbnRVbmNoZWNrZWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BvbGljeURvY3VtZW50JywgUm9zTWFuYWdlZFBvbGljeV9Qb2xpY3lEb2N1bWVudFByb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLnBvbGljeURvY3VtZW50KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyb2xlcycsIHJvcy5saXN0VmFsaWRhdG9yKHJvcy52YWxpZGF0ZUFueSkpKHByb3BlcnRpZXMucm9sZXMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3VzZXJzJywgcm9zLmxpc3RWYWxpZGF0b3Iocm9zLnZhbGlkYXRlQW55KSkocHJvcGVydGllcy51c2VycykpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NNYW5hZ2VkUG9saWN5UHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlJBTTo6TWFuYWdlZFBvbGljeWAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zTWFuYWdlZFBvbGljeVByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpSQU06Ok1hbmFnZWRQb2xpY3lgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zTWFuYWdlZFBvbGljeVByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zTWFuYWdlZFBvbGljeVByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICdQb2xpY3lOYW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wb2xpY3lOYW1lKSxcbiAgICAgICdEZXNjcmlwdGlvbic6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGVzY3JpcHRpb24pLFxuICAgICAgJ0dyb3Vwcyc6IHJvcy5saXN0TWFwcGVyKHJvcy5vYmplY3RUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLmdyb3VwcyksXG4gICAgICAnSWdub3JlRXhpc3RpbmcnOiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pZ25vcmVFeGlzdGluZyksXG4gICAgICAnUG9saWN5RG9jdW1lbnQnOiByb3NNYW5hZ2VkUG9saWN5UG9saWN5RG9jdW1lbnRQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wb2xpY3lEb2N1bWVudCksXG4gICAgICAnUG9saWN5RG9jdW1lbnRVbmNoZWNrZWQnOiByb3MuaGFzaE1hcHBlcihyb3Mub2JqZWN0VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5wb2xpY3lEb2N1bWVudFVuY2hlY2tlZCksXG4gICAgICAnUm9sZXMnOiByb3MubGlzdE1hcHBlcihyb3Mub2JqZWN0VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5yb2xlcyksXG4gICAgICAnVXNlcnMnOiByb3MubGlzdE1hcHBlcihyb3Mub2JqZWN0VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy51c2VycyksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgYmFzZSBlbmNhcHN1bGF0aW9uIGFyb3VuZCB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6UkFNOjpNYW5hZ2VkUG9saWN5YCwgd2hpY2ggaXMgdXNlZCB0byBjcmVhdGUgYSBSZXNvdXJjZSBBY2Nlc3MgTWFuYWdlbWVudCAoUkFNKSBwb2xpY3kuXG4gKiBATm90ZSBUaGlzIGNsYXNzIGRvZXMgbm90IGNvbnRhaW4gYWRkaXRpb25hbCBmdW5jdGlvbnMsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgYE1hbmFnZWRQb2xpY3lgIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLXJhbS1tYW5hZ2VkcG9saWN5XG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NNYW5hZ2VkUG9saWN5IGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpSQU06Ok1hbmFnZWRQb2xpY3lcIjtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgUG9saWN5TmFtZTogV2hlbiB0aGUgbG9naWNhbCBJRCBvZiB0aGlzIHJlc291cmNlIGlzIHByb3ZpZGVkIHRvIHRoZSBSZWYgaW50cmluc2ljIGZ1bmN0aW9uLCBSZWYgcmV0dXJucyB0aGUgQVJOLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUG9saWN5TmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcG9saWN5TmFtZTogU3BlY2lmaWVzIHRoZSBhdXRob3JpemF0aW9uIHBvbGljeSBuYW1lLCBjb250YWluaW5nIHVwIHRvIDEyOCBjaGFyYWN0ZXJzLlxuICAgICAqL1xuICAgIHB1YmxpYyBwb2xpY3lOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVzY3JpcHRpb246IFNwZWNpZmllcyB0aGUgYXV0aG9yaXphdGlvbiBwb2xpY3kgZGVzY3JpcHRpb24sIGNvbnRhaW5pbmcgdXAgdG8gMTAyNCBjaGFyYWN0ZXJzLlxuICAgICAqL1xuICAgIHB1YmxpYyBkZXNjcmlwdGlvbjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGdyb3VwczogVGhlIG5hbWVzIG9mIGdyb3VwcyB0byBhdHRhY2ggdG8gdGhpcyBwb2xpY3kuXG4gICAgICovXG4gICAgcHVibGljIGdyb3VwczogQXJyYXk8YW55IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpZ25vcmVFeGlzdGluZzogV2hldGhlciB0byBpZ25vcmUgZXhpc3RpbmcgcG9saWN5XG4gICAgICogRmFsc2U6IFJPUyB3aWxsIHBlcmZvcm0gYSB1bmlxdWVuZXNzIGNoZWNrLklmIGEgcG9saWN5IHdpdGggdGhlIHNhbWUgbmFtZSBleGlzdHMsIGFuIGVycm9yIHdpbGwgYmUgcmVwb3J0ZWQgd2hlbiBjcmVhdGluZyBpdC5cbiAgICAgKiBUcnVlOiBST1Mgd2lsbCBub3QgY2hlY2sgdGhlIHVuaXF1ZW5lc3MuSWYgdGhlcmUgaXMgYSBwb2xpY3kgd2l0aCB0aGUgc2FtZSBuYW1lLCB0aGUgcG9saWN5IGNyZWF0aW9uIHByb2Nlc3Mgd2lsbCBiZSBpZ25vcmVkLlxuICAgICAqIElmIHRoZSBwb2xpY3kgaXMgbm90IGNyZWF0ZWQgYnkgUk9TLCBpdCB3aWxsIGJlIGlnbm9yZWQgZHVyaW5nIHVwZGF0ZSBhbmQgZGVsZXRlIHN0YWdlLlxuICAgICAqL1xuICAgIHB1YmxpYyBpZ25vcmVFeGlzdGluZzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwb2xpY3lEb2N1bWVudDogQSBwb2xpY3kgZG9jdW1lbnQgdGhhdCBkZXNjcmliZXMgd2hhdCBhY3Rpb25zIGFyZSBhbGxvd2VkIG9uIHdoaWNoIHJlc291cmNlcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcG9saWN5RG9jdW1lbnQ6IFJvc01hbmFnZWRQb2xpY3kuUG9saWN5RG9jdW1lbnRQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwb2xpY3lEb2N1bWVudFVuY2hlY2tlZDogQSBwb2xpY3kgZG9jdW1lbnQgdGhhdCBkZXNjcmliZXMgd2hhdCBhY3Rpb25zIGFyZSBhbGxvd2VkIG9uIHdoaWNoIHJlc291cmNlcy4gSWYgaXQgaXMgc3BlY2lmaWVkLCBQb2xpY3lEb2N1bWVudCB3aWxsIGJlIGlnbm9yZWQuXG4gICAgICovXG4gICAgcHVibGljIHBvbGljeURvY3VtZW50VW5jaGVja2VkOiB7IFtrZXk6IHN0cmluZ106IChhbnkgfCByb3MuSVJlc29sdmFibGUpIH0gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcm9sZXM6IFRoZSBuYW1lcyBvZiByb2xlcyB0byBhdHRhY2ggdG8gdGhpcyBwb2xpY3kuXG4gICAgICovXG4gICAgcHVibGljIHJvbGVzOiBBcnJheTxhbnkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHVzZXJzOiBUaGUgbmFtZXMgb2YgdXNlcnMgdG8gYXR0YWNoIHRvIHRoaXMgcG9saWN5LlxuICAgICAqL1xuICAgIHB1YmxpYyB1c2VyczogQXJyYXk8YW55IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NNYW5hZ2VkUG9saWN5UHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NNYW5hZ2VkUG9saWN5LlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJQb2xpY3lOYW1lID0gdGhpcy5nZXRBdHQoJ1BvbGljeU5hbWUnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMucG9saWN5TmFtZSA9IHByb3BzLnBvbGljeU5hbWU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBwcm9wcy5kZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5ncm91cHMgPSBwcm9wcy5ncm91cHM7XG4gICAgICAgIHRoaXMuaWdub3JlRXhpc3RpbmcgPSBwcm9wcy5pZ25vcmVFeGlzdGluZztcbiAgICAgICAgdGhpcy5wb2xpY3lEb2N1bWVudCA9IHByb3BzLnBvbGljeURvY3VtZW50O1xuICAgICAgICB0aGlzLnBvbGljeURvY3VtZW50VW5jaGVja2VkID0gcHJvcHMucG9saWN5RG9jdW1lbnRVbmNoZWNrZWQ7XG4gICAgICAgIHRoaXMucm9sZXMgPSBwcm9wcy5yb2xlcztcbiAgICAgICAgdGhpcy51c2VycyA9IHByb3BzLnVzZXJzO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBvbGljeU5hbWU6IHRoaXMucG9saWN5TmFtZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgZ3JvdXBzOiB0aGlzLmdyb3VwcyxcbiAgICAgICAgICAgIGlnbm9yZUV4aXN0aW5nOiB0aGlzLmlnbm9yZUV4aXN0aW5nLFxuICAgICAgICAgICAgcG9saWN5RG9jdW1lbnQ6IHRoaXMucG9saWN5RG9jdW1lbnQsXG4gICAgICAgICAgICBwb2xpY3lEb2N1bWVudFVuY2hlY2tlZDogdGhpcy5wb2xpY3lEb2N1bWVudFVuY2hlY2tlZCxcbiAgICAgICAgICAgIHJvbGVzOiB0aGlzLnJvbGVzLFxuICAgICAgICAgICAgdXNlcnM6IHRoaXMudXNlcnMsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc01hbmFnZWRQb2xpY3lQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NNYW5hZ2VkUG9saWN5IHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBQb2xpY3lEb2N1bWVudFByb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB2ZXJzaW9uOiBZb3UgY2FuIHVzZSB2ZXJzaW9ucyB0byB0cmFjayBjaGFuZ2VzIHRvIGEgbWFuYWdlZCBwb2xpY3kuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB2ZXJzaW9uOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc3RhdGVtZW50OiBBIHBvbGljeSBjb25zaXN0cyBvZiBvbmUgb3IgbW9yZSBzdGF0ZW1lbnRzLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc3RhdGVtZW50OiBBcnJheTxSb3NNYW5hZ2VkUG9saWN5LlN0YXRlbWVudFByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFBvbGljeURvY3VtZW50UHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFBvbGljeURvY3VtZW50UHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zTWFuYWdlZFBvbGljeV9Qb2xpY3lEb2N1bWVudFByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndmVyc2lvbicsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy52ZXJzaW9uKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd2ZXJzaW9uJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnZlcnNpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N0YXRlbWVudCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5zdGF0ZW1lbnQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N0YXRlbWVudCcsIHJvcy5saXN0VmFsaWRhdG9yKFJvc01hbmFnZWRQb2xpY3lfU3RhdGVtZW50UHJvcGVydHlWYWxpZGF0b3IpKShwcm9wZXJ0aWVzLnN0YXRlbWVudCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJQb2xpY3lEb2N1bWVudFByb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpSQU06Ok1hbmFnZWRQb2xpY3kuUG9saWN5RG9jdW1lbnRgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFBvbGljeURvY3VtZW50UHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlJBTTo6TWFuYWdlZFBvbGljeS5Qb2xpY3lEb2N1bWVudGAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NNYW5hZ2VkUG9saWN5UG9saWN5RG9jdW1lbnRQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zTWFuYWdlZFBvbGljeV9Qb2xpY3lEb2N1bWVudFByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ1ZlcnNpb24nOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnZlcnNpb24pLFxuICAgICAgJ1N0YXRlbWVudCc6IHJvcy5saXN0TWFwcGVyKHJvc01hbmFnZWRQb2xpY3lTdGF0ZW1lbnRQcm9wZXJ0eVRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMuc3RhdGVtZW50KSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc01hbmFnZWRQb2xpY3kge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFN0YXRlbWVudFByb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBjb25kaXRpb246IFdoYXQgY29uZGl0aW9ucyBzaG91bGQgYmUgc2F0aXNmaWVkLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgY29uZGl0aW9uPzogeyBba2V5OiBzdHJpbmddOiAoYW55IHwgcm9zLklSZXNvbHZhYmxlKSB9IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGFjdGlvbjogV2hhdCBhY3Rpb25zIHlvdSB3aWxsIGFsbG93LlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgYWN0aW9uPzogQXJyYXk8YW55IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSByZXNvdXJjZTogV2hpY2ggcmVzb3VyY2VzIHlvdSBhbGxvdyB0aGUgYWN0aW9uIG9uLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcmVzb3VyY2U/OiBBcnJheTxhbnkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGVmZmVjdDogV2hhdCB0aGUgZWZmZWN0IHdpbGwgYmUgd2hlbiB0aGUgdXNlciByZXF1ZXN0cyBhY2Nlc3MtZWl0aGVyIGFsbG93IG9yIGRlbnkuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBlZmZlY3Q/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBTdGF0ZW1lbnRQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgU3RhdGVtZW50UHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zTWFuYWdlZFBvbGljeV9TdGF0ZW1lbnRQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NvbmRpdGlvbicsIHJvcy5oYXNoVmFsaWRhdG9yKHJvcy52YWxpZGF0ZUFueSkpKHByb3BlcnRpZXMuY29uZGl0aW9uKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhY3Rpb24nLCByb3MubGlzdFZhbGlkYXRvcihyb3MudmFsaWRhdGVBbnkpKShwcm9wZXJ0aWVzLmFjdGlvbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVzb3VyY2UnLCByb3MubGlzdFZhbGlkYXRvcihyb3MudmFsaWRhdGVBbnkpKShwcm9wZXJ0aWVzLnJlc291cmNlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdlZmZlY3QnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZWZmZWN0KSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlN0YXRlbWVudFByb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpSQU06Ok1hbmFnZWRQb2xpY3kuU3RhdGVtZW50YCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBTdGF0ZW1lbnRQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6UkFNOjpNYW5hZ2VkUG9saWN5LlN0YXRlbWVudGAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NNYW5hZ2VkUG9saWN5U3RhdGVtZW50UHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc01hbmFnZWRQb2xpY3lfU3RhdGVtZW50UHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnQ29uZGl0aW9uJzogcm9zLmhhc2hNYXBwZXIocm9zLm9iamVjdFRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMuY29uZGl0aW9uKSxcbiAgICAgICdBY3Rpb24nOiByb3MubGlzdE1hcHBlcihyb3Mub2JqZWN0VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5hY3Rpb24pLFxuICAgICAgJ1Jlc291cmNlJzogcm9zLmxpc3RNYXBwZXIocm9zLm9iamVjdFRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMucmVzb3VyY2UpLFxuICAgICAgJ0VmZmVjdCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZWZmZWN0KSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFJvc09JRENQcm92aWRlcmAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1yYW0tb2lkY3Byb3ZpZGVyXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zT0lEQ1Byb3ZpZGVyUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGZpbmdlcnByaW50czogVGhlIGxpc3Qgb2YgdGhlIGZpbmdlcnByaW50cywgbWF4IGxlbmd0aCBpcyA1XG4gICAgICovXG4gICAgcmVhZG9ubHkgZmluZ2VycHJpbnRzOiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGlzc3VlclVybDogVGhlIFVSTCBvZiB0aGUgaXNzdWVyLCB3aGljaCBpcyBwcm92aWRlZCBieSB0aGUgZXh0ZXJuYWwgSWRQLiBUaGUgVVJMIG9mIHRoZSBpc3N1ZXIgbXVzdCBiZSB1bmlxdWUgd2l0aGluIGFuIEFsaWJhYmEgQ2xvdWQgYWNjb3VudC5cbiAgICAgKiBUaGUgVVJMIG9mIHRoZSBpc3N1ZXIgbXVzdCBzdGFydCB3aXRoIGh0dHBzIGFuZCBiZSBpbiB0aGUgdmFsaWQgVVJMIGZvcm1hdC4gVGhlIFVSTCBjYW5ub3QgY29udGFpbiBxdWVyeSBwYXJhbWV0ZXJzIHRoYXQgZm9sbG93IGEgcXVlc3Rpb24gbWFyayAoPykgb3IgbG9nb24gaW5mb3JtYXRpb24gdGhhdCBpcyBpZGVudGlmaWVkIGJ5IGF0IHNpZ25zIChAKS4gVGhlIFVSTCBjYW5ub3QgYmUgYSBmcmFnbWVudCBVUkwgdGhhdCBjb250YWlucyBudW1iZXIgc2lnbnMgKCMpLlxuICAgICAqIFRoZSBVUkwgY2FuIGJlIHVwIHRvIDI1NSBjaGFyYWN0ZXJzIGluIGxlbmd0aC5cbiAgICAgKi9cbiAgICByZWFkb25seSBpc3N1ZXJVcmw6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBvaWRjUHJvdmlkZXJOYW1lOiBUaGUgbmFtZSBvZiB0aGUgT0lEQyBJZFAuXG4gICAgICogVGhlIG5hbWUgY2FuIGNvbnRhaW4gbGV0dGVycywgZGlnaXRzLCBhbmQgc3BlY2lhbCBjaGFyYWN0ZXJzIGFuZCBjYW5ub3Qgc3RhcnQgb3IgZW5kIHdpdGggdGhlIHNwZWNpYWwgY2hhcmFjdGVycy4gVGhlIHNwZWNpYWwgY2hhcmFjdGVycyBhcmUgcGVyaW9kcywgKC4pLCBoeXBoZW5zICgtKSwgYW5kIHVuZGVyc2NvcmVzIChfKS5gYFxuICAgICAqIFRoZSBuYW1lIGNhbiBiZSB1cCB0byAxMjggY2hhcmFjdGVycyBpbiBsZW5ndGguXG4gICAgICovXG4gICAgcmVhZG9ubHkgb2lkY1Byb3ZpZGVyTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNsaWVudElkczogVGhlIGxpc3Qgb2YgdGhlIGNsaWVudCBJRHMsIG1heCBsZW5ndGggaXMgMjBcbiAgICAgKi9cbiAgICByZWFkb25seSBjbGllbnRJZHM/OiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlc2NyaXB0aW9uOiBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIE9JREMgSWRQLlxuICAgICAqIFRoZSBkZXNjcmlwdGlvbiBjYW4gYmUgdXAgdG8gMjU2IGNoYXJhY3RlcnMgaW4gbGVuZ3RoLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGlzc3VhbmNlTGltaXRUaW1lOiBUaGUgZWFybGllc3QgdGltZSB3aGVuIGFuIGV4dGVybmFsIElkUCBjYW4gaXNzdWUgYW4gSUQgdG9rZW4uIElmIHRoZSB2YWx1ZSBvZiB0aGUgaWF0IGZpZWxkIGluIHRoZSBJRCB0b2tlbiBpcyBsYXRlciB0aGFuIHRoZSBjdXJyZW50IHRpbWUsIHRoZSByZXF1ZXN0IGlzIHJlamVjdGVkLiBVbml0OiBob3Vycy4gVmFsaWQgdmFsdWVzOiAxIHRvIDE2OC5cbiAgICAgKi9cbiAgICByZWFkb25seSBpc3N1YW5jZUxpbWl0VGltZT86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NPSURDUHJvdmlkZXJQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zT0lEQ1Byb3ZpZGVyUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zT0lEQ1Byb3ZpZGVyUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgaWYocHJvcGVydGllcy5kZXNjcmlwdGlvbiAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSB8fCAodHlwZW9mIHByb3BlcnRpZXMuZGVzY3JpcHRpb24pID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZXNjcmlwdGlvbicsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5kZXNjcmlwdGlvbi5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG1heDogMjU2LFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZXNjcmlwdGlvbicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5kZXNjcmlwdGlvbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignb2lkY1Byb3ZpZGVyTmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5vaWRjUHJvdmlkZXJOYW1lKSk7XG4gICAgaWYocHJvcGVydGllcy5vaWRjUHJvdmlkZXJOYW1lICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMub2lkY1Byb3ZpZGVyTmFtZSkgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLm9pZGNQcm92aWRlck5hbWUpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdvaWRjUHJvdmlkZXJOYW1lJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLm9pZGNQcm92aWRlck5hbWUubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtYXg6IDEyOCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGlmKHByb3BlcnRpZXMub2lkY1Byb3ZpZGVyTmFtZSAmJiAodHlwZW9mIHByb3BlcnRpZXMub2lkY1Byb3ZpZGVyTmFtZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignb2lkY1Byb3ZpZGVyTmFtZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRQYXR0ZXJuKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5vaWRjUHJvdmlkZXJOYW1lLFxuICAgICAgICAgIHJlZzogL15bYS16QS1aMC05XVthLXpBLVowLTkuXy1dezAsMTI2fVthLXpBLVowLTldJC9cbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ29pZGNQcm92aWRlck5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMub2lkY1Byb3ZpZGVyTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZmluZ2VycHJpbnRzJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmZpbmdlcnByaW50cykpO1xuICAgIGlmKHByb3BlcnRpZXMuZmluZ2VycHJpbnRzICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMuZmluZ2VycHJpbnRzKSB8fCAodHlwZW9mIHByb3BlcnRpZXMuZmluZ2VycHJpbnRzKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZmluZ2VycHJpbnRzJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmZpbmdlcnByaW50cy5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDUsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2ZpbmdlcnByaW50cycsIHJvcy5saXN0VmFsaWRhdG9yKHJvcy52YWxpZGF0ZVN0cmluZykpKHByb3BlcnRpZXMuZmluZ2VycHJpbnRzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpc3N1ZXJVcmwnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuaXNzdWVyVXJsKSk7XG4gICAgaWYocHJvcGVydGllcy5pc3N1ZXJVcmwgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5pc3N1ZXJVcmwpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5pc3N1ZXJVcmwpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpc3N1ZXJVcmwnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuaXNzdWVyVXJsLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbWF4OiAyNTUsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2lzc3VlclVybCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5pc3N1ZXJVcmwpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmlzc3VhbmNlTGltaXRUaW1lICYmICh0eXBlb2YgcHJvcGVydGllcy5pc3N1YW5jZUxpbWl0VGltZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaXNzdWFuY2VMaW1pdFRpbWUnLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5pc3N1YW5jZUxpbWl0VGltZSxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogMTY4LFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpc3N1YW5jZUxpbWl0VGltZScsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5pc3N1YW5jZUxpbWl0VGltZSkpO1xuICAgIGlmKHByb3BlcnRpZXMuY2xpZW50SWRzICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMuY2xpZW50SWRzKSB8fCAodHlwZW9mIHByb3BlcnRpZXMuY2xpZW50SWRzKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY2xpZW50SWRzJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmNsaWVudElkcy5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDIwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjbGllbnRJZHMnLCByb3MubGlzdFZhbGlkYXRvcihyb3MudmFsaWRhdGVTdHJpbmcpKShwcm9wZXJ0aWVzLmNsaWVudElkcykpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NPSURDUHJvdmlkZXJQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6UkFNOjpPSURDUHJvdmlkZXJgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc09JRENQcm92aWRlclByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpSQU06Ok9JRENQcm92aWRlcmAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NPSURDUHJvdmlkZXJQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc09JRENQcm92aWRlclByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICdGaW5nZXJwcmludHMnOiByb3MubGlzdE1hcHBlcihyb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5maW5nZXJwcmludHMpLFxuICAgICAgJ0lzc3VlclVybCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaXNzdWVyVXJsKSxcbiAgICAgICdPSURDUHJvdmlkZXJOYW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5vaWRjUHJvdmlkZXJOYW1lKSxcbiAgICAgICdDbGllbnRJZHMnOiByb3MubGlzdE1hcHBlcihyb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5jbGllbnRJZHMpLFxuICAgICAgJ0Rlc2NyaXB0aW9uJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kZXNjcmlwdGlvbiksXG4gICAgICAnSXNzdWFuY2VMaW1pdFRpbWUnOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmlzc3VhbmNlTGltaXRUaW1lKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBiYXNlIGVuY2Fwc3VsYXRpb24gYXJvdW5kIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpSQU06Ok9JRENQcm92aWRlcmAsIHdoaWNoIGlzIHVzZWQgdG8gY3JlYXRlIGFuIE9wZW5JRCBDb25uZWN0IChPSURDKSBpZGVudGl0eSBwcm92aWRlciAoSWRQKS5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgZG9lcyBub3QgY29udGFpbiBhZGRpdGlvbmFsIGZ1bmN0aW9ucywgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgT0lEQ1Byb3ZpZGVyYCBjbGFzcyBpbnN0ZWFkIG9mIHRoaXMgY2xhc3MgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1yYW0tb2lkY3Byb3ZpZGVyXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NPSURDUHJvdmlkZXIgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OlJBTTo6T0lEQ1Byb3ZpZGVyXCI7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIE9JRENQcm92aWRlck5hbWU6IFRoZSBuYW1lIG9mIHRoZSBPSURDIElkUC5cblRoZSBuYW1lIGNhbiBjb250YWluIGxldHRlcnMsIGRpZ2l0cywgYW5kIHNwZWNpYWwgY2hhcmFjdGVycyBhbmQgY2Fubm90IHN0YXJ0IG9yIGVuZCB3aXRoIHRoZSBzcGVjaWFsIGNoYXJhY3RlcnMuIFRoZSBzcGVjaWFsIGNoYXJhY3RlcnMgYXJlIHBlcmlvZHMsICguKSwgaHlwaGVucyAoLSksIGFuZCB1bmRlcnNjb3JlcyAoXykuYGBcblRoZSBuYW1lIGNhbiBiZSB1cCB0byAxMjggY2hhcmFjdGVycyBpbiBsZW5ndGguXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJPaWRjUHJvdmlkZXJOYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBmaW5nZXJwcmludHM6IFRoZSBsaXN0IG9mIHRoZSBmaW5nZXJwcmludHMsIG1heCBsZW5ndGggaXMgNVxuICAgICAqL1xuICAgIHB1YmxpYyBmaW5nZXJwcmludHM6IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaXNzdWVyVXJsOiBUaGUgVVJMIG9mIHRoZSBpc3N1ZXIsIHdoaWNoIGlzIHByb3ZpZGVkIGJ5IHRoZSBleHRlcm5hbCBJZFAuIFRoZSBVUkwgb2YgdGhlIGlzc3VlciBtdXN0IGJlIHVuaXF1ZSB3aXRoaW4gYW4gQWxpYmFiYSBDbG91ZCBhY2NvdW50LlxuICAgICAqIFRoZSBVUkwgb2YgdGhlIGlzc3VlciBtdXN0IHN0YXJ0IHdpdGggaHR0cHMgYW5kIGJlIGluIHRoZSB2YWxpZCBVUkwgZm9ybWF0LiBUaGUgVVJMIGNhbm5vdCBjb250YWluIHF1ZXJ5IHBhcmFtZXRlcnMgdGhhdCBmb2xsb3cgYSBxdWVzdGlvbiBtYXJrICg/KSBvciBsb2dvbiBpbmZvcm1hdGlvbiB0aGF0IGlzIGlkZW50aWZpZWQgYnkgYXQgc2lnbnMgKEApLiBUaGUgVVJMIGNhbm5vdCBiZSBhIGZyYWdtZW50IFVSTCB0aGF0IGNvbnRhaW5zIG51bWJlciBzaWducyAoIykuXG4gICAgICogVGhlIFVSTCBjYW4gYmUgdXAgdG8gMjU1IGNoYXJhY3RlcnMgaW4gbGVuZ3RoLlxuICAgICAqL1xuICAgIHB1YmxpYyBpc3N1ZXJVcmw6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBvaWRjUHJvdmlkZXJOYW1lOiBUaGUgbmFtZSBvZiB0aGUgT0lEQyBJZFAuXG4gICAgICogVGhlIG5hbWUgY2FuIGNvbnRhaW4gbGV0dGVycywgZGlnaXRzLCBhbmQgc3BlY2lhbCBjaGFyYWN0ZXJzIGFuZCBjYW5ub3Qgc3RhcnQgb3IgZW5kIHdpdGggdGhlIHNwZWNpYWwgY2hhcmFjdGVycy4gVGhlIHNwZWNpYWwgY2hhcmFjdGVycyBhcmUgcGVyaW9kcywgKC4pLCBoeXBoZW5zICgtKSwgYW5kIHVuZGVyc2NvcmVzIChfKS5gYFxuICAgICAqIFRoZSBuYW1lIGNhbiBiZSB1cCB0byAxMjggY2hhcmFjdGVycyBpbiBsZW5ndGguXG4gICAgICovXG4gICAgcHVibGljIG9pZGNQcm92aWRlck5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjbGllbnRJZHM6IFRoZSBsaXN0IG9mIHRoZSBjbGllbnQgSURzLCBtYXggbGVuZ3RoIGlzIDIwXG4gICAgICovXG4gICAgcHVibGljIGNsaWVudElkczogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBPSURDIElkUC5cbiAgICAgKiBUaGUgZGVzY3JpcHRpb24gY2FuIGJlIHVwIHRvIDI1NiBjaGFyYWN0ZXJzIGluIGxlbmd0aC5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpc3N1YW5jZUxpbWl0VGltZTogVGhlIGVhcmxpZXN0IHRpbWUgd2hlbiBhbiBleHRlcm5hbCBJZFAgY2FuIGlzc3VlIGFuIElEIHRva2VuLiBJZiB0aGUgdmFsdWUgb2YgdGhlIGlhdCBmaWVsZCBpbiB0aGUgSUQgdG9rZW4gaXMgbGF0ZXIgdGhhbiB0aGUgY3VycmVudCB0aW1lLCB0aGUgcmVxdWVzdCBpcyByZWplY3RlZC4gVW5pdDogaG91cnMuIFZhbGlkIHZhbHVlczogMSB0byAxNjguXG4gICAgICovXG4gICAgcHVibGljIGlzc3VhbmNlTGltaXRUaW1lOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zT0lEQ1Byb3ZpZGVyUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NPSURDUHJvdmlkZXIuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ck9pZGNQcm92aWRlck5hbWUgPSB0aGlzLmdldEF0dCgnT0lEQ1Byb3ZpZGVyTmFtZScpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5maW5nZXJwcmludHMgPSBwcm9wcy5maW5nZXJwcmludHM7XG4gICAgICAgIHRoaXMuaXNzdWVyVXJsID0gcHJvcHMuaXNzdWVyVXJsO1xuICAgICAgICB0aGlzLm9pZGNQcm92aWRlck5hbWUgPSBwcm9wcy5vaWRjUHJvdmlkZXJOYW1lO1xuICAgICAgICB0aGlzLmNsaWVudElkcyA9IHByb3BzLmNsaWVudElkcztcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IHByb3BzLmRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmlzc3VhbmNlTGltaXRUaW1lID0gcHJvcHMuaXNzdWFuY2VMaW1pdFRpbWU7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZmluZ2VycHJpbnRzOiB0aGlzLmZpbmdlcnByaW50cyxcbiAgICAgICAgICAgIGlzc3VlclVybDogdGhpcy5pc3N1ZXJVcmwsXG4gICAgICAgICAgICBvaWRjUHJvdmlkZXJOYW1lOiB0aGlzLm9pZGNQcm92aWRlck5hbWUsXG4gICAgICAgICAgICBjbGllbnRJZHM6IHRoaXMuY2xpZW50SWRzLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBpc3N1YW5jZUxpbWl0VGltZTogdGhpcy5pc3N1YW5jZUxpbWl0VGltZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zT0lEQ1Byb3ZpZGVyUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUm9zUmFtQWNjb3VudEFsaWFzYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLXJhbS1yYW1hY2NvdW50YWxpYXNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NSYW1BY2NvdW50QWxpYXNQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYWNjb3VudEFsaWFzOiBUaGUgYWxpYXMgb2YgdGhlIEFsaWJhYmEgQ2xvdWQgYWNjb3VudC5cbiAgICAgKiBUaGUgYWxpYXMgbXVzdCBiZSAxIHRvIDUwIGNoYXJhY3RlcnMgaW4gbGVuZ3RoLCBhbmQgY2FuIGNvbnRhaW4gbG93ZXJjYXNlIGxldHRlcnMsXG4gICAgICogZGlnaXRzLCBoeXBoZW5zICgtKSwgcGVyaW9kcyAoLikgYW5kIHVuZGVyc2NvcmVzIChfKS5cbiAgICAgKiBOb3RlIEl0IGNhbm5vdCBzdGFydCBvciBlbmQgd2l0aCBhIGh5cGhlbiAoLSkuVGhlIGRlZmF1bHQgZG9tYWluIG5hbWUgY2Fubm90IHN0YXJ0IG9yIGVuZCB3aXRoIGEgXG4gICAgICogaHlwaGVuICgtKSBhbmQgY2Fubm90IGhhdmUgdHdvIGNvbnNlY3V0aXZlIGh5cGhlbnMgKC0pLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFjY291bnRBbGlhczogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc1JhbUFjY291bnRBbGlhc1Byb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NSYW1BY2NvdW50QWxpYXNQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NSYW1BY2NvdW50QWxpYXNQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FjY291bnRBbGlhcycsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5hY2NvdW50QWxpYXMpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmFjY291bnRBbGlhcyAmJiAodHlwZW9mIHByb3BlcnRpZXMuYWNjb3VudEFsaWFzKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhY2NvdW50QWxpYXMnLCByb3MudmFsaWRhdGVBbGxvd2VkUGF0dGVybikoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuYWNjb3VudEFsaWFzLFxuICAgICAgICAgIHJlZzogL1stMC05LmEtekEtWl9dezEsNTB9L1xuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGlmKHByb3BlcnRpZXMuYWNjb3VudEFsaWFzICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMuYWNjb3VudEFsaWFzKSB8fCAodHlwZW9mIHByb3BlcnRpZXMuYWNjb3VudEFsaWFzKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYWNjb3VudEFsaWFzJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmFjY291bnRBbGlhcy5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDUwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhY2NvdW50QWxpYXMnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuYWNjb3VudEFsaWFzKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc1JhbUFjY291bnRBbGlhc1Byb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpSQU06OlJhbUFjY291bnRBbGlhc2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zUmFtQWNjb3VudEFsaWFzUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlJBTTo6UmFtQWNjb3VudEFsaWFzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1JhbUFjY291bnRBbGlhc1Byb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zUmFtQWNjb3VudEFsaWFzUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgJ0FjY291bnRBbGlhcyc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYWNjb3VudEFsaWFzKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBiYXNlIGVuY2Fwc3VsYXRpb24gYXJvdW5kIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpSQU06OlJhbUFjY291bnRBbGlhc2AsIHdoaWNoIGlzIHVzZWQgdG8gY3JlYXRlIGFuIGFsaWFzIGZvciBhbiBBbGliYWJhIENsb3VkIGFjY291bnQuXG4gKiBATm90ZSBUaGlzIGNsYXNzIGRvZXMgbm90IGNvbnRhaW4gYWRkaXRpb25hbCBmdW5jdGlvbnMsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgYFJhbUFjY291bnRBbGlhc2AgY2xhc3MgaW5zdGVhZCBvZiB0aGlzIGNsYXNzIGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tcmFtLXJhbWFjY291bnRhbGlhc1xuICovXG5leHBvcnQgY2xhc3MgUm9zUmFtQWNjb3VudEFsaWFzIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpSQU06OlJhbUFjY291bnRBbGlhc1wiO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBBY2NvdW50QWxpYXM6IFRoZSBhbGlhcyBvZiB0aGUgQWxpYmFiYSBDbG91ZCBhY2NvdW50LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQWNjb3VudEFsaWFzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhY2NvdW50QWxpYXM6IFRoZSBhbGlhcyBvZiB0aGUgQWxpYmFiYSBDbG91ZCBhY2NvdW50LlxuICAgICAqIFRoZSBhbGlhcyBtdXN0IGJlIDEgdG8gNTAgY2hhcmFjdGVycyBpbiBsZW5ndGgsIGFuZCBjYW4gY29udGFpbiBsb3dlcmNhc2UgbGV0dGVycyxcbiAgICAgKiBkaWdpdHMsIGh5cGhlbnMgKC0pLCBwZXJpb2RzICguKSBhbmQgdW5kZXJzY29yZXMgKF8pLlxuICAgICAqIE5vdGUgSXQgY2Fubm90IHN0YXJ0IG9yIGVuZCB3aXRoIGEgaHlwaGVuICgtKS5UaGUgZGVmYXVsdCBkb21haW4gbmFtZSBjYW5ub3Qgc3RhcnQgb3IgZW5kIHdpdGggYSBcbiAgICAgKiBoeXBoZW4gKC0pIGFuZCBjYW5ub3QgaGF2ZSB0d28gY29uc2VjdXRpdmUgaHlwaGVucyAoLSkuXG4gICAgICovXG4gICAgcHVibGljIGFjY291bnRBbGlhczogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc1JhbUFjY291bnRBbGlhc1Byb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zUmFtQWNjb3VudEFsaWFzLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJBY2NvdW50QWxpYXMgPSB0aGlzLmdldEF0dCgnQWNjb3VudEFsaWFzJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmFjY291bnRBbGlhcyA9IHByb3BzLmFjY291bnRBbGlhcztcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhY2NvdW50QWxpYXM6IHRoaXMuYWNjb3VudEFsaWFzLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NSYW1BY2NvdW50QWxpYXNQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NSb2xlYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLXJhbS1yb2xlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zUm9sZVByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhc3N1bWVSb2xlUG9saWN5RG9jdW1lbnQ6IFRoZSBSQU0gYXNzdW1lIHJvbGUgcG9saWN5IHRoYXQgaXMgYXNzb2NpYXRlZCB3aXRoIHRoaXMgcm9sZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBhc3N1bWVSb2xlUG9saWN5RG9jdW1lbnQ6IFJvc1JvbGUuQXNzdW1lUm9sZVBvbGljeURvY3VtZW50UHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcm9sZU5hbWU6IFNwZWNpZmllcyB0aGUgcm9sZSBuYW1lLCBjb250YWluaW5nIHVwIHRvIDY0IGNoYXJhY3RlcnMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcm9sZU5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZWxldGlvbkZvcmNlOiBXaGV0aGVyIGZvcmNlIGRldGFjaCB0aGUgcG9saWNpZXMgYXR0YWNoZWQgdG8gdGhlIHJvbGUuIERlZmF1bHQgdmFsdWUgaXMgZmFsc2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVsZXRpb25Gb3JjZT86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVzY3JpcHRpb246IFJlbWFyayBpbmZvcm1hdGlvbiwgdXAgdG8gMTAyNCBjaGFyYWN0ZXJzIG9yIENoaW5lc2UgY2hhcmFjdGVycy5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpZ25vcmVFeGlzdGluZzogV2hldGhlciB0byBpZ25vcmUgZXhpc3Rpbmcgcm9sZVxuICAgICAqIEZhbHNlOiBST1Mgd2lsbCBwZXJmb3JtIGEgdW5pcXVlbmVzcyBjaGVjay5JZiBhIHJvbGUgd2l0aCB0aGUgc2FtZSBuYW1lIGV4aXN0cywgYW4gZXJyb3Igd2lsbCBiZSByZXBvcnRlZCB3aGVuIGNyZWF0aW5nIGl0LlxuICAgICAqIFRydWU6IFJPUyB3aWxsIG5vdCBjaGVjayB0aGUgdW5pcXVlbmVzcy5JZiB0aGVyZSBpcyBhIHJvbGUgd2l0aCB0aGUgc2FtZSBuYW1lLCB0aGUgcm9sZSBjcmVhdGlvbiBwcm9jZXNzIHdpbGwgYmUgaWdub3JlZC5cbiAgICAgKiBJZiB0aGUgcm9sZSBpcyBub3QgY3JlYXRlZCBieSBST1MsIGl0IHdpbGwgYmUgaWdub3JlZCBkdXJpbmcgdXBkYXRlIGFuZCBkZWxldGUgc3RhZ2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaWdub3JlRXhpc3Rpbmc/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG1heFNlc3Npb25EdXJhdGlvbjogVGhlIG1heGltdW0gc2Vzc2lvbiBkdXJhdGlvbiBvZiB0aGUgUkFNIHJvbGUuXG4gICAgICogVmFsaWQgdmFsdWVzOiAzNjAwIHRvIDQzMjAwLiBVbml0OiBzZWNvbmRzLiBEZWZhdWx0IHZhbHVlOiAzNjAwLlxuICAgICAqIFRoZSBkZWZhdWx0IHZhbHVlIGlzIHVzZWQgaWYgdGhlIHBhcmFtZXRlciBpcyBub3Qgc3BlY2lmaWVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG1heFNlc3Npb25EdXJhdGlvbj86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwb2xpY2llczogRGVzY3JpYmVzIHdoYXQgYWN0aW9ucyBhcmUgYWxsb3dlZCBvbiB3aGF0IHJlc291cmNlcy5cbiAgICAgKi9cbiAgICByZWFkb25seSBwb2xpY2llcz86IEFycmF5PFJvc1JvbGUuUG9saWNpZXNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcG9saWN5QXR0YWNobWVudHM6IFN5c3RlbSBhbmQgY3VzdG9tIHBvbGljeSBuYW1lcyB0byBhdHRhY2guXG4gICAgICovXG4gICAgcmVhZG9ubHkgcG9saWN5QXR0YWNobWVudHM/OiBSb3NSb2xlLlBvbGljeUF0dGFjaG1lbnRzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGFnczogVGFncyB0byBhdHRhY2ggdG8gcm9sZS4gTWF4IHN1cHBvcnQgMjAgdGFncyB0byBhZGQgZHVyaW5nIGNyZWF0ZSByb2xlLiBFYWNoIHRhZyB3aXRoIHR3byBwcm9wZXJ0aWVzIEtleSBhbmQgVmFsdWUsIGFuZCBLZXkgaXMgcmVxdWlyZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGFncz86IFJvc1JvbGUuVGFnc1Byb3BlcnR5W107XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zUm9sZVByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NSb2xlUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zUm9sZVByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaWdub3JlRXhpc3RpbmcnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLmlnbm9yZUV4aXN0aW5nKSk7XG4gICAgaWYocHJvcGVydGllcy5tYXhTZXNzaW9uRHVyYXRpb24gJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLm1heFNlc3Npb25EdXJhdGlvbikgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbWF4U2Vzc2lvbkR1cmF0aW9uJywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMubWF4U2Vzc2lvbkR1cmF0aW9uLFxuICAgICAgICAgICAgbWluOiAzNjAwLFxuICAgICAgICAgICAgbWF4OiA0MzIwMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbWF4U2Vzc2lvbkR1cmF0aW9uJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLm1heFNlc3Npb25EdXJhdGlvbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncm9sZU5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucm9sZU5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JvbGVOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnJvbGVOYW1lKSk7XG4gICAgaWYocHJvcGVydGllcy5kZXNjcmlwdGlvbiAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSB8fCAodHlwZW9mIHByb3BlcnRpZXMuZGVzY3JpcHRpb24pID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZXNjcmlwdGlvbicsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5kZXNjcmlwdGlvbi5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG1heDogMTAyNCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVzY3JpcHRpb24nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZGVzY3JpcHRpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BvbGljaWVzJywgcm9zLmxpc3RWYWxpZGF0b3IoUm9zUm9sZV9Qb2xpY2llc1Byb3BlcnR5VmFsaWRhdG9yKSkocHJvcGVydGllcy5wb2xpY2llcykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncG9saWN5QXR0YWNobWVudHMnLCBSb3NSb2xlX1BvbGljeUF0dGFjaG1lbnRzUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMucG9saWN5QXR0YWNobWVudHMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RlbGV0aW9uRm9yY2UnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLmRlbGV0aW9uRm9yY2UpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Fzc3VtZVJvbGVQb2xpY3lEb2N1bWVudCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5hc3N1bWVSb2xlUG9saWN5RG9jdW1lbnQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Fzc3VtZVJvbGVQb2xpY3lEb2N1bWVudCcsIFJvc1JvbGVfQXNzdW1lUm9sZVBvbGljeURvY3VtZW50UHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMuYXNzdW1lUm9sZVBvbGljeURvY3VtZW50KSk7XG4gICAgaWYocHJvcGVydGllcy50YWdzICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMudGFncykgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLnRhZ3MpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0YWdzJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnRhZ3MubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtYXg6IDIwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0YWdzJywgcm9zLmxpc3RWYWxpZGF0b3IoUm9zUm9sZV9UYWdzUHJvcGVydHlWYWxpZGF0b3IpKShwcm9wZXJ0aWVzLnRhZ3MpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zUm9sZVByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpSQU06OlJvbGVgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1JvbGVQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6UkFNOjpSb2xlYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1JvbGVQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc1JvbGVQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAnQXNzdW1lUm9sZVBvbGljeURvY3VtZW50Jzogcm9zUm9sZUFzc3VtZVJvbGVQb2xpY3lEb2N1bWVudFByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmFzc3VtZVJvbGVQb2xpY3lEb2N1bWVudCksXG4gICAgICAnUm9sZU5hbWUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJvbGVOYW1lKSxcbiAgICAgICdEZWxldGlvbkZvcmNlJzogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGVsZXRpb25Gb3JjZSksXG4gICAgICAnRGVzY3JpcHRpb24nOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSxcbiAgICAgICdJZ25vcmVFeGlzdGluZyc6IHJvcy5ib29sZWFuVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmlnbm9yZUV4aXN0aW5nKSxcbiAgICAgICdNYXhTZXNzaW9uRHVyYXRpb24nOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm1heFNlc3Npb25EdXJhdGlvbiksXG4gICAgICAnUG9saWNpZXMnOiByb3MubGlzdE1hcHBlcihyb3NSb2xlUG9saWNpZXNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMucG9saWNpZXMpLFxuICAgICAgJ1BvbGljeUF0dGFjaG1lbnRzJzogcm9zUm9sZVBvbGljeUF0dGFjaG1lbnRzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucG9saWN5QXR0YWNobWVudHMpLFxuICAgICAgJ1RhZ3MnOiByb3MubGlzdE1hcHBlcihyb3NSb2xlVGFnc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy50YWdzKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBiYXNlIGVuY2Fwc3VsYXRpb24gYXJvdW5kIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpSQU06OlJvbGVgVGhlICwgd2hpY2ggcmVzb3VyY2UgY3JlYXRlcyBhIFJBTSByb2xlLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBSb2xlYCBjbGFzcyBpbnN0ZWFkIG9mIHRoaXMgY2xhc3MgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1yYW0tcm9sZVxuICovXG5leHBvcnQgY2xhc3MgUm9zUm9sZSBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6UkFNOjpSb2xlXCI7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEFybjogTmFtZSBvZiBhbGljbG91ZCByZXNvdXJjZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckFybjogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBSb2xlSWQ6IElkIG9mIHJhbSByb2xlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUm9sZUlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFJvbGVOYW1lOiBOYW1lIG9mIHJhbSByb2xlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUm9sZU5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFzc3VtZVJvbGVQb2xpY3lEb2N1bWVudDogVGhlIFJBTSBhc3N1bWUgcm9sZSBwb2xpY3kgdGhhdCBpcyBhc3NvY2lhdGVkIHdpdGggdGhpcyByb2xlLlxuICAgICAqL1xuICAgIHB1YmxpYyBhc3N1bWVSb2xlUG9saWN5RG9jdW1lbnQ6IFJvc1JvbGUuQXNzdW1lUm9sZVBvbGljeURvY3VtZW50UHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcm9sZU5hbWU6IFNwZWNpZmllcyB0aGUgcm9sZSBuYW1lLCBjb250YWluaW5nIHVwIHRvIDY0IGNoYXJhY3RlcnMuXG4gICAgICovXG4gICAgcHVibGljIHJvbGVOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVsZXRpb25Gb3JjZTogV2hldGhlciBmb3JjZSBkZXRhY2ggdGhlIHBvbGljaWVzIGF0dGFjaGVkIHRvIHRoZSByb2xlLiBEZWZhdWx0IHZhbHVlIGlzIGZhbHNlLlxuICAgICAqL1xuICAgIHB1YmxpYyBkZWxldGlvbkZvcmNlOiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlc2NyaXB0aW9uOiBSZW1hcmsgaW5mb3JtYXRpb24sIHVwIHRvIDEwMjQgY2hhcmFjdGVycyBvciBDaGluZXNlIGNoYXJhY3RlcnMuXG4gICAgICovXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaWdub3JlRXhpc3Rpbmc6IFdoZXRoZXIgdG8gaWdub3JlIGV4aXN0aW5nIHJvbGVcbiAgICAgKiBGYWxzZTogUk9TIHdpbGwgcGVyZm9ybSBhIHVuaXF1ZW5lc3MgY2hlY2suSWYgYSByb2xlIHdpdGggdGhlIHNhbWUgbmFtZSBleGlzdHMsIGFuIGVycm9yIHdpbGwgYmUgcmVwb3J0ZWQgd2hlbiBjcmVhdGluZyBpdC5cbiAgICAgKiBUcnVlOiBST1Mgd2lsbCBub3QgY2hlY2sgdGhlIHVuaXF1ZW5lc3MuSWYgdGhlcmUgaXMgYSByb2xlIHdpdGggdGhlIHNhbWUgbmFtZSwgdGhlIHJvbGUgY3JlYXRpb24gcHJvY2VzcyB3aWxsIGJlIGlnbm9yZWQuXG4gICAgICogSWYgdGhlIHJvbGUgaXMgbm90IGNyZWF0ZWQgYnkgUk9TLCBpdCB3aWxsIGJlIGlnbm9yZWQgZHVyaW5nIHVwZGF0ZSBhbmQgZGVsZXRlIHN0YWdlLlxuICAgICAqL1xuICAgIHB1YmxpYyBpZ25vcmVFeGlzdGluZzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBtYXhTZXNzaW9uRHVyYXRpb246IFRoZSBtYXhpbXVtIHNlc3Npb24gZHVyYXRpb24gb2YgdGhlIFJBTSByb2xlLlxuICAgICAqIFZhbGlkIHZhbHVlczogMzYwMCB0byA0MzIwMC4gVW5pdDogc2Vjb25kcy4gRGVmYXVsdCB2YWx1ZTogMzYwMC5cbiAgICAgKiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyB1c2VkIGlmIHRoZSBwYXJhbWV0ZXIgaXMgbm90IHNwZWNpZmllZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgbWF4U2Vzc2lvbkR1cmF0aW9uOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcG9saWNpZXM6IERlc2NyaWJlcyB3aGF0IGFjdGlvbnMgYXJlIGFsbG93ZWQgb24gd2hhdCByZXNvdXJjZXMuXG4gICAgICovXG4gICAgcHVibGljIHBvbGljaWVzOiBBcnJheTxSb3NSb2xlLlBvbGljaWVzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBvbGljeUF0dGFjaG1lbnRzOiBTeXN0ZW0gYW5kIGN1c3RvbSBwb2xpY3kgbmFtZXMgdG8gYXR0YWNoLlxuICAgICAqL1xuICAgIHB1YmxpYyBwb2xpY3lBdHRhY2htZW50czogUm9zUm9sZS5Qb2xpY3lBdHRhY2htZW50c1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRhZ3M6IFRhZ3MgdG8gYXR0YWNoIHRvIHJvbGUuIE1heCBzdXBwb3J0IDIwIHRhZ3MgdG8gYWRkIGR1cmluZyBjcmVhdGUgcm9sZS4gRWFjaCB0YWcgd2l0aCB0d28gcHJvcGVydGllcyBLZXkgYW5kIFZhbHVlLCBhbmQgS2V5IGlzIHJlcXVpcmVkLlxuICAgICAqL1xuICAgIHB1YmxpYyB0YWdzOiBSb3NSb2xlLlRhZ3NQcm9wZXJ0eVtdIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc1JvbGVQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc1JvbGUuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckFybiA9IHRoaXMuZ2V0QXR0KCdBcm4nKTtcbiAgICAgICAgdGhpcy5hdHRyUm9sZUlkID0gdGhpcy5nZXRBdHQoJ1JvbGVJZCcpO1xuICAgICAgICB0aGlzLmF0dHJSb2xlTmFtZSA9IHRoaXMuZ2V0QXR0KCdSb2xlTmFtZScpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5hc3N1bWVSb2xlUG9saWN5RG9jdW1lbnQgPSBwcm9wcy5hc3N1bWVSb2xlUG9saWN5RG9jdW1lbnQ7XG4gICAgICAgIHRoaXMucm9sZU5hbWUgPSBwcm9wcy5yb2xlTmFtZTtcbiAgICAgICAgdGhpcy5kZWxldGlvbkZvcmNlID0gcHJvcHMuZGVsZXRpb25Gb3JjZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IHByb3BzLmRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmlnbm9yZUV4aXN0aW5nID0gcHJvcHMuaWdub3JlRXhpc3Rpbmc7XG4gICAgICAgIHRoaXMubWF4U2Vzc2lvbkR1cmF0aW9uID0gcHJvcHMubWF4U2Vzc2lvbkR1cmF0aW9uO1xuICAgICAgICB0aGlzLnBvbGljaWVzID0gcHJvcHMucG9saWNpZXM7XG4gICAgICAgIHRoaXMucG9saWN5QXR0YWNobWVudHMgPSBwcm9wcy5wb2xpY3lBdHRhY2htZW50cztcbiAgICAgICAgdGhpcy50YWdzID0gcHJvcHMudGFncztcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhc3N1bWVSb2xlUG9saWN5RG9jdW1lbnQ6IHRoaXMuYXNzdW1lUm9sZVBvbGljeURvY3VtZW50LFxuICAgICAgICAgICAgcm9sZU5hbWU6IHRoaXMucm9sZU5hbWUsXG4gICAgICAgICAgICBkZWxldGlvbkZvcmNlOiB0aGlzLmRlbGV0aW9uRm9yY2UsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGlnbm9yZUV4aXN0aW5nOiB0aGlzLmlnbm9yZUV4aXN0aW5nLFxuICAgICAgICAgICAgbWF4U2Vzc2lvbkR1cmF0aW9uOiB0aGlzLm1heFNlc3Npb25EdXJhdGlvbixcbiAgICAgICAgICAgIHBvbGljaWVzOiB0aGlzLnBvbGljaWVzLFxuICAgICAgICAgICAgcG9saWN5QXR0YWNobWVudHM6IHRoaXMucG9saWN5QXR0YWNobWVudHMsXG4gICAgICAgICAgICB0YWdzOiB0aGlzLnRhZ3MsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc1JvbGVQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NSb2xlIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBBc3N1bWVSb2xlUG9saWN5RG9jdW1lbnRQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgdmVyc2lvbjogWW91IGNhbiB1c2UgdmVyc2lvbnMgdG8gdHJhY2sgY2hhbmdlcyB0byBhIG1hbmFnZWQgcG9saWN5LlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgdmVyc2lvbjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHN0YXRlbWVudDogQSBwb2xpY3kgY29uc2lzdHMgb2Ygb25lIG9yIG1vcmUgc3RhdGVtZW50cy5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHN0YXRlbWVudDogQXJyYXk8Um9zUm9sZS5TdGF0ZW1lbnRQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBBc3N1bWVSb2xlUG9saWN5RG9jdW1lbnRQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgQXNzdW1lUm9sZVBvbGljeURvY3VtZW50UHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zUm9sZV9Bc3N1bWVSb2xlUG9saWN5RG9jdW1lbnRQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZlcnNpb24nLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMudmVyc2lvbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndmVyc2lvbicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy52ZXJzaW9uKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdGF0ZW1lbnQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuc3RhdGVtZW50KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdGF0ZW1lbnQnLCByb3MubGlzdFZhbGlkYXRvcihSb3NSb2xlX1N0YXRlbWVudFByb3BlcnR5VmFsaWRhdG9yKSkocHJvcGVydGllcy5zdGF0ZW1lbnQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiQXNzdW1lUm9sZVBvbGljeURvY3VtZW50UHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlJBTTo6Um9sZS5Bc3N1bWVSb2xlUG9saWN5RG9jdW1lbnRgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEFzc3VtZVJvbGVQb2xpY3lEb2N1bWVudFByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpSQU06OlJvbGUuQXNzdW1lUm9sZVBvbGljeURvY3VtZW50YCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1JvbGVBc3N1bWVSb2xlUG9saWN5RG9jdW1lbnRQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zUm9sZV9Bc3N1bWVSb2xlUG9saWN5RG9jdW1lbnRQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdWZXJzaW9uJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy52ZXJzaW9uKSxcbiAgICAgICdTdGF0ZW1lbnQnOiByb3MubGlzdE1hcHBlcihyb3NSb2xlU3RhdGVtZW50UHJvcGVydHlUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLnN0YXRlbWVudCksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NSb2xlIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBDb25kaXRpb25Qcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc3RyaW5nRXF1YWxzOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHN0cmluZ0VxdWFscz86IHsgW2tleTogc3RyaW5nXTogKGFueSB8IHJvcy5JUmVzb2x2YWJsZSkgfSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBudW1lcmljTm90RXF1YWxzOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG51bWVyaWNOb3RFcXVhbHM/OiB7IFtrZXk6IHN0cmluZ106IChhbnkgfCByb3MuSVJlc29sdmFibGUpIH0gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc3RyaW5nTGlrZTogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzdHJpbmdMaWtlPzogeyBba2V5OiBzdHJpbmddOiAoYW55IHwgcm9zLklSZXNvbHZhYmxlKSB9IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG51bWVyaWNMZXNzVGhhbkVxdWFsczogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBudW1lcmljTGVzc1RoYW5FcXVhbHM/OiB7IFtrZXk6IHN0cmluZ106IChhbnkgfCByb3MuSVJlc29sdmFibGUpIH0gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc3RyaW5nTm90RXF1YWxzOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHN0cmluZ05vdEVxdWFscz86IHsgW2tleTogc3RyaW5nXTogKGFueSB8IHJvcy5JUmVzb2x2YWJsZSkgfSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzdHJpbmdOb3RFcXVhbHNJZ25vcmVDYXNlOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHN0cmluZ05vdEVxdWFsc0lnbm9yZUNhc2U/OiB7IFtrZXk6IHN0cmluZ106IChhbnkgfCByb3MuSVJlc29sdmFibGUpIH0gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgbnVtZXJpY0xlc3NUaGFuOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG51bWVyaWNMZXNzVGhhbj86IHsgW2tleTogc3RyaW5nXTogKGFueSB8IHJvcy5JUmVzb2x2YWJsZSkgfSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBudW1lcmljR3JlYXRlclRoYW46IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgbnVtZXJpY0dyZWF0ZXJUaGFuPzogeyBba2V5OiBzdHJpbmddOiAoYW55IHwgcm9zLklSZXNvbHZhYmxlKSB9IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGRhdGVMZXNzVGhhbkVxdWFsczogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBkYXRlTGVzc1RoYW5FcXVhbHM/OiB7IFtrZXk6IHN0cmluZ106IChhbnkgfCByb3MuSVJlc29sdmFibGUpIH0gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgbnVtZXJpY0VxdWFsczogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBudW1lcmljRXF1YWxzPzogeyBba2V5OiBzdHJpbmddOiAoYW55IHwgcm9zLklSZXNvbHZhYmxlKSB9IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGRhdGVHcmVhdGVyVGhhbkVxdWFsczogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBkYXRlR3JlYXRlclRoYW5FcXVhbHM/OiB7IFtrZXk6IHN0cmluZ106IChhbnkgfCByb3MuSVJlc29sdmFibGUpIH0gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgZGF0ZUxlc3NUaGFuOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGRhdGVMZXNzVGhhbj86IHsgW2tleTogc3RyaW5nXTogKGFueSB8IHJvcy5JUmVzb2x2YWJsZSkgfSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBkYXRlTm90RXF1YWxzOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGRhdGVOb3RFcXVhbHM/OiB7IFtrZXk6IHN0cmluZ106IChhbnkgfCByb3MuSVJlc29sdmFibGUpIH0gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc3RyaW5nTm90TGlrZTogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzdHJpbmdOb3RMaWtlPzogeyBba2V5OiBzdHJpbmddOiAoYW55IHwgcm9zLklSZXNvbHZhYmxlKSB9IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG5vdElwQWRkcmVzczogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBub3RJcEFkZHJlc3M/OiB7IFtrZXk6IHN0cmluZ106IChhbnkgfCByb3MuSVJlc29sdmFibGUpIH0gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc3RyaW5nRXF1YWxzSWdub3JlQ2FzZTogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzdHJpbmdFcXVhbHNJZ25vcmVDYXNlPzogeyBba2V5OiBzdHJpbmddOiAoYW55IHwgcm9zLklSZXNvbHZhYmxlKSB9IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGJvb2w6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgYm9vbD86IHsgW2tleTogc3RyaW5nXTogKGFueSB8IHJvcy5JUmVzb2x2YWJsZSkgfSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBkYXRlRXF1YWxzOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGRhdGVFcXVhbHM/OiB7IFtrZXk6IHN0cmluZ106IChhbnkgfCByb3MuSVJlc29sdmFibGUpIH0gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgZGF0ZUdyZWF0ZXJUaGFuOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGRhdGVHcmVhdGVyVGhhbj86IHsgW2tleTogc3RyaW5nXTogKGFueSB8IHJvcy5JUmVzb2x2YWJsZSkgfSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBudW1lcmljR3JlYXRlclRoYW5FcXVhbHM6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgbnVtZXJpY0dyZWF0ZXJUaGFuRXF1YWxzPzogeyBba2V5OiBzdHJpbmddOiAoYW55IHwgcm9zLklSZXNvbHZhYmxlKSB9IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGlwQWRkcmVzczogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBpcEFkZHJlc3M/OiB7IFtrZXk6IHN0cmluZ106IChhbnkgfCByb3MuSVJlc29sdmFibGUpIH0gfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBDb25kaXRpb25Qcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgQ29uZGl0aW9uUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zUm9sZV9Db25kaXRpb25Qcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N0cmluZ0VxdWFscycsIHJvcy5oYXNoVmFsaWRhdG9yKHJvcy52YWxpZGF0ZUFueSkpKHByb3BlcnRpZXMuc3RyaW5nRXF1YWxzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdudW1lcmljTm90RXF1YWxzJywgcm9zLmhhc2hWYWxpZGF0b3Iocm9zLnZhbGlkYXRlQW55KSkocHJvcGVydGllcy5udW1lcmljTm90RXF1YWxzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdHJpbmdMaWtlJywgcm9zLmhhc2hWYWxpZGF0b3Iocm9zLnZhbGlkYXRlQW55KSkocHJvcGVydGllcy5zdHJpbmdMaWtlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdudW1lcmljTGVzc1RoYW5FcXVhbHMnLCByb3MuaGFzaFZhbGlkYXRvcihyb3MudmFsaWRhdGVBbnkpKShwcm9wZXJ0aWVzLm51bWVyaWNMZXNzVGhhbkVxdWFscykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3RyaW5nTm90RXF1YWxzJywgcm9zLmhhc2hWYWxpZGF0b3Iocm9zLnZhbGlkYXRlQW55KSkocHJvcGVydGllcy5zdHJpbmdOb3RFcXVhbHMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N0cmluZ05vdEVxdWFsc0lnbm9yZUNhc2UnLCByb3MuaGFzaFZhbGlkYXRvcihyb3MudmFsaWRhdGVBbnkpKShwcm9wZXJ0aWVzLnN0cmluZ05vdEVxdWFsc0lnbm9yZUNhc2UpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ251bWVyaWNMZXNzVGhhbicsIHJvcy5oYXNoVmFsaWRhdG9yKHJvcy52YWxpZGF0ZUFueSkpKHByb3BlcnRpZXMubnVtZXJpY0xlc3NUaGFuKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdudW1lcmljR3JlYXRlclRoYW4nLCByb3MuaGFzaFZhbGlkYXRvcihyb3MudmFsaWRhdGVBbnkpKShwcm9wZXJ0aWVzLm51bWVyaWNHcmVhdGVyVGhhbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGF0ZUxlc3NUaGFuRXF1YWxzJywgcm9zLmhhc2hWYWxpZGF0b3Iocm9zLnZhbGlkYXRlQW55KSkocHJvcGVydGllcy5kYXRlTGVzc1RoYW5FcXVhbHMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ251bWVyaWNFcXVhbHMnLCByb3MuaGFzaFZhbGlkYXRvcihyb3MudmFsaWRhdGVBbnkpKShwcm9wZXJ0aWVzLm51bWVyaWNFcXVhbHMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RhdGVHcmVhdGVyVGhhbkVxdWFscycsIHJvcy5oYXNoVmFsaWRhdG9yKHJvcy52YWxpZGF0ZUFueSkpKHByb3BlcnRpZXMuZGF0ZUdyZWF0ZXJUaGFuRXF1YWxzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkYXRlTGVzc1RoYW4nLCByb3MuaGFzaFZhbGlkYXRvcihyb3MudmFsaWRhdGVBbnkpKShwcm9wZXJ0aWVzLmRhdGVMZXNzVGhhbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGF0ZU5vdEVxdWFscycsIHJvcy5oYXNoVmFsaWRhdG9yKHJvcy52YWxpZGF0ZUFueSkpKHByb3BlcnRpZXMuZGF0ZU5vdEVxdWFscykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3RyaW5nTm90TGlrZScsIHJvcy5oYXNoVmFsaWRhdG9yKHJvcy52YWxpZGF0ZUFueSkpKHByb3BlcnRpZXMuc3RyaW5nTm90TGlrZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbm90SXBBZGRyZXNzJywgcm9zLmhhc2hWYWxpZGF0b3Iocm9zLnZhbGlkYXRlQW55KSkocHJvcGVydGllcy5ub3RJcEFkZHJlc3MpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N0cmluZ0VxdWFsc0lnbm9yZUNhc2UnLCByb3MuaGFzaFZhbGlkYXRvcihyb3MudmFsaWRhdGVBbnkpKShwcm9wZXJ0aWVzLnN0cmluZ0VxdWFsc0lnbm9yZUNhc2UpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Jvb2wnLCByb3MuaGFzaFZhbGlkYXRvcihyb3MudmFsaWRhdGVBbnkpKShwcm9wZXJ0aWVzLmJvb2wpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RhdGVFcXVhbHMnLCByb3MuaGFzaFZhbGlkYXRvcihyb3MudmFsaWRhdGVBbnkpKShwcm9wZXJ0aWVzLmRhdGVFcXVhbHMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RhdGVHcmVhdGVyVGhhbicsIHJvcy5oYXNoVmFsaWRhdG9yKHJvcy52YWxpZGF0ZUFueSkpKHByb3BlcnRpZXMuZGF0ZUdyZWF0ZXJUaGFuKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdudW1lcmljR3JlYXRlclRoYW5FcXVhbHMnLCByb3MuaGFzaFZhbGlkYXRvcihyb3MudmFsaWRhdGVBbnkpKShwcm9wZXJ0aWVzLm51bWVyaWNHcmVhdGVyVGhhbkVxdWFscykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaXBBZGRyZXNzJywgcm9zLmhhc2hWYWxpZGF0b3Iocm9zLnZhbGlkYXRlQW55KSkocHJvcGVydGllcy5pcEFkZHJlc3MpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiQ29uZGl0aW9uUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlJBTTo6Um9sZS5Db25kaXRpb25gIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYENvbmRpdGlvblByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpSQU06OlJvbGUuQ29uZGl0aW9uYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1JvbGVDb25kaXRpb25Qcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zUm9sZV9Db25kaXRpb25Qcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdTdHJpbmdFcXVhbHMnOiByb3MuaGFzaE1hcHBlcihyb3Mub2JqZWN0VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5zdHJpbmdFcXVhbHMpLFxuICAgICAgJ051bWVyaWNOb3RFcXVhbHMnOiByb3MuaGFzaE1hcHBlcihyb3Mub2JqZWN0VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5udW1lcmljTm90RXF1YWxzKSxcbiAgICAgICdTdHJpbmdMaWtlJzogcm9zLmhhc2hNYXBwZXIocm9zLm9iamVjdFRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMuc3RyaW5nTGlrZSksXG4gICAgICAnTnVtZXJpY0xlc3NUaGFuRXF1YWxzJzogcm9zLmhhc2hNYXBwZXIocm9zLm9iamVjdFRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMubnVtZXJpY0xlc3NUaGFuRXF1YWxzKSxcbiAgICAgICdTdHJpbmdOb3RFcXVhbHMnOiByb3MuaGFzaE1hcHBlcihyb3Mub2JqZWN0VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5zdHJpbmdOb3RFcXVhbHMpLFxuICAgICAgJ1N0cmluZ05vdEVxdWFsc0lnbm9yZUNhc2UnOiByb3MuaGFzaE1hcHBlcihyb3Mub2JqZWN0VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5zdHJpbmdOb3RFcXVhbHNJZ25vcmVDYXNlKSxcbiAgICAgICdOdW1lcmljTGVzc1RoYW4nOiByb3MuaGFzaE1hcHBlcihyb3Mub2JqZWN0VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5udW1lcmljTGVzc1RoYW4pLFxuICAgICAgJ051bWVyaWNHcmVhdGVyVGhhbic6IHJvcy5oYXNoTWFwcGVyKHJvcy5vYmplY3RUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLm51bWVyaWNHcmVhdGVyVGhhbiksXG4gICAgICAnRGF0ZUxlc3NUaGFuRXF1YWxzJzogcm9zLmhhc2hNYXBwZXIocm9zLm9iamVjdFRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMuZGF0ZUxlc3NUaGFuRXF1YWxzKSxcbiAgICAgICdOdW1lcmljRXF1YWxzJzogcm9zLmhhc2hNYXBwZXIocm9zLm9iamVjdFRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMubnVtZXJpY0VxdWFscyksXG4gICAgICAnRGF0ZUdyZWF0ZXJUaGFuRXF1YWxzJzogcm9zLmhhc2hNYXBwZXIocm9zLm9iamVjdFRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMuZGF0ZUdyZWF0ZXJUaGFuRXF1YWxzKSxcbiAgICAgICdEYXRlTGVzc1RoYW4nOiByb3MuaGFzaE1hcHBlcihyb3Mub2JqZWN0VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5kYXRlTGVzc1RoYW4pLFxuICAgICAgJ0RhdGVOb3RFcXVhbHMnOiByb3MuaGFzaE1hcHBlcihyb3Mub2JqZWN0VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5kYXRlTm90RXF1YWxzKSxcbiAgICAgICdTdHJpbmdOb3RMaWtlJzogcm9zLmhhc2hNYXBwZXIocm9zLm9iamVjdFRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMuc3RyaW5nTm90TGlrZSksXG4gICAgICAnTm90SXBBZGRyZXNzJzogcm9zLmhhc2hNYXBwZXIocm9zLm9iamVjdFRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMubm90SXBBZGRyZXNzKSxcbiAgICAgICdTdHJpbmdFcXVhbHNJZ25vcmVDYXNlJzogcm9zLmhhc2hNYXBwZXIocm9zLm9iamVjdFRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMuc3RyaW5nRXF1YWxzSWdub3JlQ2FzZSksXG4gICAgICAnQm9vbCc6IHJvcy5oYXNoTWFwcGVyKHJvcy5vYmplY3RUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLmJvb2wpLFxuICAgICAgJ0RhdGVFcXVhbHMnOiByb3MuaGFzaE1hcHBlcihyb3Mub2JqZWN0VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5kYXRlRXF1YWxzKSxcbiAgICAgICdEYXRlR3JlYXRlclRoYW4nOiByb3MuaGFzaE1hcHBlcihyb3Mub2JqZWN0VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5kYXRlR3JlYXRlclRoYW4pLFxuICAgICAgJ051bWVyaWNHcmVhdGVyVGhhbkVxdWFscyc6IHJvcy5oYXNoTWFwcGVyKHJvcy5vYmplY3RUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLm51bWVyaWNHcmVhdGVyVGhhbkVxdWFscyksXG4gICAgICAnSXBBZGRyZXNzJzogcm9zLmhhc2hNYXBwZXIocm9zLm9iamVjdFRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMuaXBBZGRyZXNzKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc1JvbGUge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFBvbGljaWVzUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGlnbm9yZUV4aXN0aW5nOiBXaGV0aGVyIHRvIGlnbm9yZSBleGlzdGluZyBwb2xpY3lcbiAgICAgKiBGYWxzZTogUk9TIHdpbGwgcGVyZm9ybSBhIHVuaXF1ZW5lc3MgY2hlY2suSWYgYSBwb2xpY3kgd2l0aCB0aGUgc2FtZSBuYW1lIGV4aXN0cywgYW4gZXJyb3Igd2lsbCBiZSByZXBvcnRlZCB3aGVuIGNyZWF0aW5nIGl0LlxuICAgICAqIFRydWU6IFJPUyB3aWxsIG5vdCBjaGVjayB0aGUgdW5pcXVlbmVzcy5JZiB0aGVyZSBpcyBhIHBvbGljeSB3aXRoIHRoZSBzYW1lIG5hbWUsIHRoZSBwb2xpY3kgY3JlYXRpb24gcHJvY2VzcyB3aWxsIGJlIGlnbm9yZWQuXG4gICAgICogSWYgdGhlIHBvbGljeSBpcyBub3QgY3JlYXRlZCBieSBST1MsIGl0IHdpbGwgYmUgaWdub3JlZCBkdXJpbmcgdXBkYXRlIGFuZCBkZWxldGUgc3RhZ2UuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBpZ25vcmVFeGlzdGluZz86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgZGVzY3JpcHRpb246IFNwZWNpZmllcyB0aGUgYXV0aG9yaXphdGlvbiBwb2xpY3kgZGVzY3JpcHRpb24sIGNvbnRhaW5pbmcgdXAgdG8gMTAyNCBjaGFyYWN0ZXJzLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcG9saWN5TmFtZTogU3BlY2lmaWVzIHRoZSBhdXRob3JpemF0aW9uIHBvbGljeSBuYW1lLCBjb250YWluaW5nIHVwIHRvIDEyOCBjaGFyYWN0ZXJzLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcG9saWN5TmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHBvbGljeURvY3VtZW50OiBBIHBvbGljeSBkb2N1bWVudCB0aGF0IGRlc2NyaWJlcyB3aGF0IGFjdGlvbnMgYXJlIGFsbG93ZWQgb24gd2hpY2ggcmVzb3VyY2VzLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcG9saWN5RG9jdW1lbnQ6IFJvc1JvbGUuUG9saWN5RG9jdW1lbnRQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFBvbGljaWVzUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFBvbGljaWVzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zUm9sZV9Qb2xpY2llc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaWdub3JlRXhpc3RpbmcnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLmlnbm9yZUV4aXN0aW5nKSk7XG4gICAgaWYocHJvcGVydGllcy5kZXNjcmlwdGlvbiAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSB8fCAodHlwZW9mIHByb3BlcnRpZXMuZGVzY3JpcHRpb24pID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZXNjcmlwdGlvbicsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5kZXNjcmlwdGlvbi5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG1heDogMTAyNCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVzY3JpcHRpb24nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZGVzY3JpcHRpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BvbGljeU5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucG9saWN5TmFtZSkpO1xuICAgIGlmKHByb3BlcnRpZXMucG9saWN5TmFtZSAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLnBvbGljeU5hbWUpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5wb2xpY3lOYW1lKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncG9saWN5TmFtZScsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5wb2xpY3lOYW1lLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbWF4OiAxMjgsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BvbGljeU5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucG9saWN5TmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncG9saWN5RG9jdW1lbnQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucG9saWN5RG9jdW1lbnQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BvbGljeURvY3VtZW50JywgUm9zUm9sZV9Qb2xpY3lEb2N1bWVudFByb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLnBvbGljeURvY3VtZW50KSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlBvbGljaWVzUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlJBTTo6Um9sZS5Qb2xpY2llc2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUG9saWNpZXNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6UkFNOjpSb2xlLlBvbGljaWVzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1JvbGVQb2xpY2llc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NSb2xlX1BvbGljaWVzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnSWdub3JlRXhpc3RpbmcnOiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pZ25vcmVFeGlzdGluZyksXG4gICAgICAnRGVzY3JpcHRpb24nOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSxcbiAgICAgICdQb2xpY3lOYW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wb2xpY3lOYW1lKSxcbiAgICAgICdQb2xpY3lEb2N1bWVudCc6IHJvc1JvbGVQb2xpY3lEb2N1bWVudFByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnBvbGljeURvY3VtZW50KSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc1JvbGUge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFBvbGljeUF0dGFjaG1lbnRzUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGN1c3RvbTogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBjdXN0b20/OiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHN5c3RlbTogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzeXN0ZW0/OiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUG9saWN5QXR0YWNobWVudHNQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUG9saWN5QXR0YWNobWVudHNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NSb2xlX1BvbGljeUF0dGFjaG1lbnRzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgaWYocHJvcGVydGllcy5jdXN0b20gJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5jdXN0b20pIHx8ICh0eXBlb2YgcHJvcGVydGllcy5jdXN0b20pID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjdXN0b20nLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuY3VzdG9tLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbWF4OiA1LFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjdXN0b20nLCByb3MubGlzdFZhbGlkYXRvcihyb3MudmFsaWRhdGVTdHJpbmcpKShwcm9wZXJ0aWVzLmN1c3RvbSkpO1xuICAgIGlmKHByb3BlcnRpZXMuc3lzdGVtICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMuc3lzdGVtKSB8fCAodHlwZW9mIHByb3BlcnRpZXMuc3lzdGVtKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3lzdGVtJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnN5c3RlbS5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG1heDogMjAsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N5c3RlbScsIHJvcy5saXN0VmFsaWRhdG9yKHJvcy52YWxpZGF0ZVN0cmluZykpKHByb3BlcnRpZXMuc3lzdGVtKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlBvbGljeUF0dGFjaG1lbnRzUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlJBTTo6Um9sZS5Qb2xpY3lBdHRhY2htZW50c2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUG9saWN5QXR0YWNobWVudHNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6UkFNOjpSb2xlLlBvbGljeUF0dGFjaG1lbnRzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1JvbGVQb2xpY3lBdHRhY2htZW50c1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NSb2xlX1BvbGljeUF0dGFjaG1lbnRzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnQ3VzdG9tJzogcm9zLmxpc3RNYXBwZXIocm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMuY3VzdG9tKSxcbiAgICAgICdTeXN0ZW0nOiByb3MubGlzdE1hcHBlcihyb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5zeXN0ZW0pLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zUm9sZSB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgUG9saWN5RG9jdW1lbnRQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgdmVyc2lvbjogWW91IGNhbiB1c2UgdmVyc2lvbnMgdG8gdHJhY2sgY2hhbmdlcyB0byBhIG1hbmFnZWQgcG9saWN5LlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgdmVyc2lvbjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHN0YXRlbWVudDogQSBwb2xpY3kgY29uc2lzdHMgb2Ygb25lIG9yIG1vcmUgc3RhdGVtZW50cy5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHN0YXRlbWVudDogQXJyYXk8Um9zUm9sZS5Qb2xpY3lEb2N1bWVudFN0YXRlbWVudFByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFBvbGljeURvY3VtZW50UHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFBvbGljeURvY3VtZW50UHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zUm9sZV9Qb2xpY3lEb2N1bWVudFByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndmVyc2lvbicsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy52ZXJzaW9uKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd2ZXJzaW9uJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnZlcnNpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N0YXRlbWVudCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5zdGF0ZW1lbnQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N0YXRlbWVudCcsIHJvcy5saXN0VmFsaWRhdG9yKFJvc1JvbGVfUG9saWN5RG9jdW1lbnRTdGF0ZW1lbnRQcm9wZXJ0eVZhbGlkYXRvcikpKHByb3BlcnRpZXMuc3RhdGVtZW50KSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlBvbGljeURvY3VtZW50UHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlJBTTo6Um9sZS5Qb2xpY3lEb2N1bWVudGAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUG9saWN5RG9jdW1lbnRQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6UkFNOjpSb2xlLlBvbGljeURvY3VtZW50YCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1JvbGVQb2xpY3lEb2N1bWVudFByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NSb2xlX1BvbGljeURvY3VtZW50UHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnVmVyc2lvbic6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudmVyc2lvbiksXG4gICAgICAnU3RhdGVtZW50Jzogcm9zLmxpc3RNYXBwZXIocm9zUm9sZVBvbGljeURvY3VtZW50U3RhdGVtZW50UHJvcGVydHlUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLnN0YXRlbWVudCksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NSb2xlIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBQb2xpY3lEb2N1bWVudFN0YXRlbWVudFByb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBjb25kaXRpb246IFdoYXQgY29uZGl0aW9ucyBzaG91bGQgYmUgc2F0aXNmaWVkLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgY29uZGl0aW9uPzogeyBba2V5OiBzdHJpbmddOiAoYW55IHwgcm9zLklSZXNvbHZhYmxlKSB9IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGFjdGlvbjogV2hhdCBhY3Rpb25zIHlvdSB3aWxsIGFsbG93LlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgYWN0aW9uPzogQXJyYXk8YW55IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSByZXNvdXJjZTogV2hpY2ggcmVzb3VyY2VzIHlvdSBhbGxvdyB0aGUgYWN0aW9uIG9uLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcmVzb3VyY2U/OiBBcnJheTxhbnkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGVmZmVjdDogV2hhdCB0aGUgZWZmZWN0IHdpbGwgYmUgd2hlbiB0aGUgdXNlciByZXF1ZXN0cyBhY2Nlc3MtZWl0aGVyIGFsbG93IG9yIGRlbnkuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBlZmZlY3Q/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBQb2xpY3lEb2N1bWVudFN0YXRlbWVudFByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBQb2xpY3lEb2N1bWVudFN0YXRlbWVudFByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1JvbGVfUG9saWN5RG9jdW1lbnRTdGF0ZW1lbnRQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NvbmRpdGlvbicsIHJvcy5oYXNoVmFsaWRhdG9yKHJvcy52YWxpZGF0ZUFueSkpKHByb3BlcnRpZXMuY29uZGl0aW9uKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhY3Rpb24nLCByb3MubGlzdFZhbGlkYXRvcihyb3MudmFsaWRhdGVBbnkpKShwcm9wZXJ0aWVzLmFjdGlvbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVzb3VyY2UnLCByb3MubGlzdFZhbGlkYXRvcihyb3MudmFsaWRhdGVBbnkpKShwcm9wZXJ0aWVzLnJlc291cmNlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdlZmZlY3QnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZWZmZWN0KSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlBvbGljeURvY3VtZW50U3RhdGVtZW50UHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlJBTTo6Um9sZS5Qb2xpY3lEb2N1bWVudFN0YXRlbWVudGAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUG9saWN5RG9jdW1lbnRTdGF0ZW1lbnRQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6UkFNOjpSb2xlLlBvbGljeURvY3VtZW50U3RhdGVtZW50YCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1JvbGVQb2xpY3lEb2N1bWVudFN0YXRlbWVudFByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NSb2xlX1BvbGljeURvY3VtZW50U3RhdGVtZW50UHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnQ29uZGl0aW9uJzogcm9zLmhhc2hNYXBwZXIocm9zLm9iamVjdFRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMuY29uZGl0aW9uKSxcbiAgICAgICdBY3Rpb24nOiByb3MubGlzdE1hcHBlcihyb3Mub2JqZWN0VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5hY3Rpb24pLFxuICAgICAgJ1Jlc291cmNlJzogcm9zLmxpc3RNYXBwZXIocm9zLm9iamVjdFRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMucmVzb3VyY2UpLFxuICAgICAgJ0VmZmVjdCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZWZmZWN0KSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc1JvbGUge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFByaW5jaXBhbFByb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzZXJ2aWNlOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHNlcnZpY2U/OiBBcnJheTxhbnkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGZlZGVyYXRlZDogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBmZWRlcmF0ZWQ/OiBBcnJheTxhbnkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHJhbTogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSByYW0/OiBBcnJheTxhbnkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUHJpbmNpcGFsUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFByaW5jaXBhbFByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1JvbGVfUHJpbmNpcGFsUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzZXJ2aWNlJywgcm9zLmxpc3RWYWxpZGF0b3Iocm9zLnZhbGlkYXRlQW55KSkocHJvcGVydGllcy5zZXJ2aWNlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdmZWRlcmF0ZWQnLCByb3MubGlzdFZhbGlkYXRvcihyb3MudmFsaWRhdGVBbnkpKShwcm9wZXJ0aWVzLmZlZGVyYXRlZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmFtJywgcm9zLmxpc3RWYWxpZGF0b3Iocm9zLnZhbGlkYXRlQW55KSkocHJvcGVydGllcy5yYW0pKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUHJpbmNpcGFsUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlJBTTo6Um9sZS5QcmluY2lwYWxgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFByaW5jaXBhbFByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpSQU06OlJvbGUuUHJpbmNpcGFsYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1JvbGVQcmluY2lwYWxQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zUm9sZV9QcmluY2lwYWxQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdTZXJ2aWNlJzogcm9zLmxpc3RNYXBwZXIocm9zLm9iamVjdFRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMuc2VydmljZSksXG4gICAgICAnRmVkZXJhdGVkJzogcm9zLmxpc3RNYXBwZXIocm9zLm9iamVjdFRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMuZmVkZXJhdGVkKSxcbiAgICAgICdSQU0nOiByb3MubGlzdE1hcHBlcihyb3Mub2JqZWN0VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5yYW0pLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zUm9sZSB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgU3RhdGVtZW50UHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGNvbmRpdGlvbjogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBjb25kaXRpb24/OiBSb3NSb2xlLkNvbmRpdGlvblByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGFjdGlvbjogV2hhdCBhY3Rpb24geW91IHdpbGwgYWxsb3cuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBhY3Rpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgZWZmZWN0OiBXaGF0IHRoZSBlZmZlY3Qgd2lsbCBiZSB3aGVuIHRoZSB1c2VyIHJlcXVlc3RzIGFjY2Vzcy1laXRoZXIgYWxsb3cgb3IgZGVueS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGVmZmVjdD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBwcmluY2lwYWw6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcHJpbmNpcGFsPzogUm9zUm9sZS5QcmluY2lwYWxQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFN0YXRlbWVudFByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBTdGF0ZW1lbnRQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NSb2xlX1N0YXRlbWVudFByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY29uZGl0aW9uJywgUm9zUm9sZV9Db25kaXRpb25Qcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5jb25kaXRpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FjdGlvbicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5hY3Rpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2VmZmVjdCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5lZmZlY3QpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ByaW5jaXBhbCcsIFJvc1JvbGVfUHJpbmNpcGFsUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMucHJpbmNpcGFsKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlN0YXRlbWVudFByb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpSQU06OlJvbGUuU3RhdGVtZW50YCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBTdGF0ZW1lbnRQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6UkFNOjpSb2xlLlN0YXRlbWVudGAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NSb2xlU3RhdGVtZW50UHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc1JvbGVfU3RhdGVtZW50UHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnQ29uZGl0aW9uJzogcm9zUm9sZUNvbmRpdGlvblByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmNvbmRpdGlvbiksXG4gICAgICAnQWN0aW9uJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5hY3Rpb24pLFxuICAgICAgJ0VmZmVjdCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZWZmZWN0KSxcbiAgICAgICdQcmluY2lwYWwnOiByb3NSb2xlUHJpbmNpcGFsUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucHJpbmNpcGFsKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc1JvbGUge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFRhZ3NQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgdmFsdWU6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgdmFsdWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkga2V5OiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGtleTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgVGFnc1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBUYWdzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zUm9sZV9UYWdzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd2YWx1ZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy52YWx1ZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigna2V5Jywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmtleSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigna2V5Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmtleSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJUYWdzUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlJBTTo6Um9sZS5UYWdzYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBUYWdzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlJBTTo6Um9sZS5UYWdzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1JvbGVUYWdzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc1JvbGVfVGFnc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ1ZhbHVlJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy52YWx1ZSksXG4gICAgICAnS2V5Jzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5rZXkpLFxuICAgIH07XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUm9zU0FNTFByb3ZpZGVyYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLXJhbS1zYW1scHJvdmlkZXJcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NTQU1MUHJvdmlkZXJQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2FtbFByb3ZpZGVyTmFtZTogSWRQIE5hbWUuIFRoZSBJZFAgbmFtZSBjYW4gY29udGFpbiBhIG1heGltdW0gb2YgMTI4IGNoYXJhY3RlcnMgYW5kIG9ubHkgbGV0dGVycywgbnVtYmVycywgYW5kIHRoZSBmb2xsb3dpbmcgc3BlY2lhbCBjaGFyYWN0ZXJzIGFyZSBhY2NlcHRlZDogaHlwaGVucyAoLSksIHBlcmlvZHMgKC4pLCBhbmQgdW5kZXJzY29yZXMgKF8pLiBJdCBjYW5ub3Qgc3RhcnQgb3IgZW5kIHdpdGggYSBzcGVjaWFsIGNoYXJhY3Rlci5cbiAgICAgKi9cbiAgICByZWFkb25seSBzYW1sUHJvdmlkZXJOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVzY3JpcHRpb246IFRoZSBkZXNjcmlwdGlvbiBjYW4gY29udGFpbiBhIG1heGltdW0gb2YgMjU2IGNoYXJhY3RlcnMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZW5jb2RlZFNhbWxNZXRhZGF0YURvY3VtZW50OiBTQU1MIG1ldGFkYXRhIGRvY3VtZW50LkJhc2U2NCBlbmNvZGVkLiBQcm92aWRlZCBieSBhbiBpZGVudGl0eSBwcm92aWRlciB0aGF0IHN1cHBvcnRzIHRoZSBTQU1MMi4wIHByb3RvY29sLlxuICAgICAqIE9ubHkgb25lIG9mIHRoZSB0aHJlZSBwcm9wZXJ0aWVzIFNBTUxNZXRhZGF0YURvY3VtZW50LCBTQU1MTWV0YWRhdGFEb2N1bWVudFVSTCwgRW5jb2RlZFNBTUxNZXRhZGF0YURvY3VtZW50IGNhbiBiZSBzZXQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZW5jb2RlZFNhbWxNZXRhZGF0YURvY3VtZW50Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNhbWxNZXRhZGF0YURvY3VtZW50OiBTQU1MIG1ldGFkYXRhIGRvY3VtZW50LiBUaGUgY29udGVudCBtdXN0IGJlIDEgdG8gMTAyLDQwMCBieXRlcyBpbiBsZW5ndGguXG4gICAgICogT25seSBvbmUgb2YgdGhlIHRocmVlIHByb3BlcnRpZXMgU0FNTE1ldGFkYXRhRG9jdW1lbnQsIFNBTUxNZXRhZGF0YURvY3VtZW50VVJMLCBFbmNvZGVkU0FNTE1ldGFkYXRhRG9jdW1lbnQgY2FuIGJlIHNldC5cbiAgICAgKi9cbiAgICByZWFkb25seSBzYW1sTWV0YWRhdGFEb2N1bWVudD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzYW1sTWV0YWRhdGFEb2N1bWVudFVybDogVGhlIFVSTCBmb3IgdGhlIGZpbGUgdGhhdCBjb250YWlucyB0aGUgU0FNTCBtZXRhZGF0YSBkb2N1bWVudC4gVGhlIFVSTCBtdXN0IHBvaW50IHRvIGEgZG9jdW1lbnQgbG9jYXRlZCBpbiBhbiBIVFRQIG9yIEhUVFBTIHdlYiBzZXJ2ZXIgb3IgYW4gQWxpYmFiYSBDbG91ZCBPU1MgYnVja2V0LiBFeGFtcGxlczogb3NzOlxcL1xcL3Jvc1xcL2RvY3VtZW50XFwvZGVtbyBhbmQgb3NzOlxcL1xcL3Jvc1xcL2RvY3VtZW50XFwvZGVtbz9SZWdpb25JZD1jbi1oYW5nemhvdS4gVGhlIFVSTCBjYW4gYmUgdXAgdG8gMSwwMjQgYnl0ZXMgaW4gbGVuZ3RoLlxuICAgICAqIE9ubHkgb25lIG9mIHRoZSB0aHJlZSBwcm9wZXJ0aWVzIFNBTUxNZXRhZGF0YURvY3VtZW50LCBTQU1MTWV0YWRhdGFEb2N1bWVudFVSTCwgRW5jb2RlZFNBTUxNZXRhZGF0YURvY3VtZW50IGNhbiBiZSBzZXQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2FtbE1ldGFkYXRhRG9jdW1lbnRVcmw/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zU0FNTFByb3ZpZGVyUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1NBTUxQcm92aWRlclByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1NBTUxQcm92aWRlclByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2FtbFByb3ZpZGVyTmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5zYW1sUHJvdmlkZXJOYW1lKSk7XG4gICAgaWYocHJvcGVydGllcy5zYW1sUHJvdmlkZXJOYW1lICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMuc2FtbFByb3ZpZGVyTmFtZSkgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLnNhbWxQcm92aWRlck5hbWUpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzYW1sUHJvdmlkZXJOYW1lJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnNhbWxQcm92aWRlck5hbWUubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiAxMjgsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NhbWxQcm92aWRlck5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc2FtbFByb3ZpZGVyTmFtZSkpO1xuICAgIGlmKHByb3BlcnRpZXMuZGVzY3JpcHRpb24gJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5kZXNjcmlwdGlvbikgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVzY3JpcHRpb24nLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuZGVzY3JpcHRpb24ubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtYXg6IDI1NixcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVzY3JpcHRpb24nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZGVzY3JpcHRpb24pKTtcbiAgICBpZihwcm9wZXJ0aWVzLnNhbWxNZXRhZGF0YURvY3VtZW50VXJsICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMuc2FtbE1ldGFkYXRhRG9jdW1lbnRVcmwpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5zYW1sTWV0YWRhdGFEb2N1bWVudFVybCkgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NhbWxNZXRhZGF0YURvY3VtZW50VXJsJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnNhbWxNZXRhZGF0YURvY3VtZW50VXJsLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogMTAyNCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2FtbE1ldGFkYXRhRG9jdW1lbnRVcmwnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc2FtbE1ldGFkYXRhRG9jdW1lbnRVcmwpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmVuY29kZWRTYW1sTWV0YWRhdGFEb2N1bWVudCAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLmVuY29kZWRTYW1sTWV0YWRhdGFEb2N1bWVudCkgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLmVuY29kZWRTYW1sTWV0YWRhdGFEb2N1bWVudCkgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2VuY29kZWRTYW1sTWV0YWRhdGFEb2N1bWVudCcsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5lbmNvZGVkU2FtbE1ldGFkYXRhRG9jdW1lbnQubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtYXg6IDEwMjQwMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZW5jb2RlZFNhbWxNZXRhZGF0YURvY3VtZW50Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmVuY29kZWRTYW1sTWV0YWRhdGFEb2N1bWVudCkpO1xuICAgIGlmKHByb3BlcnRpZXMuc2FtbE1ldGFkYXRhRG9jdW1lbnQgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5zYW1sTWV0YWRhdGFEb2N1bWVudCkgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLnNhbWxNZXRhZGF0YURvY3VtZW50KSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2FtbE1ldGFkYXRhRG9jdW1lbnQnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuc2FtbE1ldGFkYXRhRG9jdW1lbnQubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiAxMDI0MDAsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NhbWxNZXRhZGF0YURvY3VtZW50Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnNhbWxNZXRhZGF0YURvY3VtZW50KSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc1NBTUxQcm92aWRlclByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpSQU06OlNBTUxQcm92aWRlcmAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zU0FNTFByb3ZpZGVyUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlJBTTo6U0FNTFByb3ZpZGVyYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1NBTUxQcm92aWRlclByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zU0FNTFByb3ZpZGVyUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgJ1NBTUxQcm92aWRlck5hbWUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnNhbWxQcm92aWRlck5hbWUpLFxuICAgICAgJ0Rlc2NyaXB0aW9uJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kZXNjcmlwdGlvbiksXG4gICAgICAnRW5jb2RlZFNBTUxNZXRhZGF0YURvY3VtZW50Jzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5lbmNvZGVkU2FtbE1ldGFkYXRhRG9jdW1lbnQpLFxuICAgICAgJ1NBTUxNZXRhZGF0YURvY3VtZW50Jzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zYW1sTWV0YWRhdGFEb2N1bWVudCksXG4gICAgICAnU0FNTE1ldGFkYXRhRG9jdW1lbnRVUkwnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnNhbWxNZXRhZGF0YURvY3VtZW50VXJsKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBiYXNlIGVuY2Fwc3VsYXRpb24gYXJvdW5kIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpSQU06OlNBTUxQcm92aWRlcmAsIHdoaWNoIGlzIHVzZWQgdG8gY3JlYXRlIGFuIGlkZW50aXR5IHByb3ZpZGVyIChJZFApIGZvciByb2xlLWJhc2VkIHNpbmdsZSBzaWduLW9uIChTU08pLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBTQU1MUHJvdmlkZXJgIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLXJhbS1zYW1scHJvdmlkZXJcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc1NBTUxQcm92aWRlciBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6UkFNOjpTQU1MUHJvdmlkZXJcIjtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQXJuOiBBUk4uXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJBcm46IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgU0FNTFByb3ZpZGVyTmFtZTogSWRQIE5hbWUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJTYW1sUHJvdmlkZXJOYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzYW1sUHJvdmlkZXJOYW1lOiBJZFAgTmFtZS4gVGhlIElkUCBuYW1lIGNhbiBjb250YWluIGEgbWF4aW11bSBvZiAxMjggY2hhcmFjdGVycyBhbmQgb25seSBsZXR0ZXJzLCBudW1iZXJzLCBhbmQgdGhlIGZvbGxvd2luZyBzcGVjaWFsIGNoYXJhY3RlcnMgYXJlIGFjY2VwdGVkOiBoeXBoZW5zICgtKSwgcGVyaW9kcyAoLiksIGFuZCB1bmRlcnNjb3JlcyAoXykuIEl0IGNhbm5vdCBzdGFydCBvciBlbmQgd2l0aCBhIHNwZWNpYWwgY2hhcmFjdGVyLlxuICAgICAqL1xuICAgIHB1YmxpYyBzYW1sUHJvdmlkZXJOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVzY3JpcHRpb246IFRoZSBkZXNjcmlwdGlvbiBjYW4gY29udGFpbiBhIG1heGltdW0gb2YgMjU2IGNoYXJhY3RlcnMuXG4gICAgICovXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZW5jb2RlZFNhbWxNZXRhZGF0YURvY3VtZW50OiBTQU1MIG1ldGFkYXRhIGRvY3VtZW50LkJhc2U2NCBlbmNvZGVkLiBQcm92aWRlZCBieSBhbiBpZGVudGl0eSBwcm92aWRlciB0aGF0IHN1cHBvcnRzIHRoZSBTQU1MMi4wIHByb3RvY29sLlxuICAgICAqIE9ubHkgb25lIG9mIHRoZSB0aHJlZSBwcm9wZXJ0aWVzIFNBTUxNZXRhZGF0YURvY3VtZW50LCBTQU1MTWV0YWRhdGFEb2N1bWVudFVSTCwgRW5jb2RlZFNBTUxNZXRhZGF0YURvY3VtZW50IGNhbiBiZSBzZXQuXG4gICAgICovXG4gICAgcHVibGljIGVuY29kZWRTYW1sTWV0YWRhdGFEb2N1bWVudDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNhbWxNZXRhZGF0YURvY3VtZW50OiBTQU1MIG1ldGFkYXRhIGRvY3VtZW50LiBUaGUgY29udGVudCBtdXN0IGJlIDEgdG8gMTAyLDQwMCBieXRlcyBpbiBsZW5ndGguXG4gICAgICogT25seSBvbmUgb2YgdGhlIHRocmVlIHByb3BlcnRpZXMgU0FNTE1ldGFkYXRhRG9jdW1lbnQsIFNBTUxNZXRhZGF0YURvY3VtZW50VVJMLCBFbmNvZGVkU0FNTE1ldGFkYXRhRG9jdW1lbnQgY2FuIGJlIHNldC5cbiAgICAgKi9cbiAgICBwdWJsaWMgc2FtbE1ldGFkYXRhRG9jdW1lbnQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzYW1sTWV0YWRhdGFEb2N1bWVudFVybDogVGhlIFVSTCBmb3IgdGhlIGZpbGUgdGhhdCBjb250YWlucyB0aGUgU0FNTCBtZXRhZGF0YSBkb2N1bWVudC4gVGhlIFVSTCBtdXN0IHBvaW50IHRvIGEgZG9jdW1lbnQgbG9jYXRlZCBpbiBhbiBIVFRQIG9yIEhUVFBTIHdlYiBzZXJ2ZXIgb3IgYW4gQWxpYmFiYSBDbG91ZCBPU1MgYnVja2V0LiBFeGFtcGxlczogb3NzOlxcL1xcL3Jvc1xcL2RvY3VtZW50XFwvZGVtbyBhbmQgb3NzOlxcL1xcL3Jvc1xcL2RvY3VtZW50XFwvZGVtbz9SZWdpb25JZD1jbi1oYW5nemhvdS4gVGhlIFVSTCBjYW4gYmUgdXAgdG8gMSwwMjQgYnl0ZXMgaW4gbGVuZ3RoLlxuICAgICAqIE9ubHkgb25lIG9mIHRoZSB0aHJlZSBwcm9wZXJ0aWVzIFNBTUxNZXRhZGF0YURvY3VtZW50LCBTQU1MTWV0YWRhdGFEb2N1bWVudFVSTCwgRW5jb2RlZFNBTUxNZXRhZGF0YURvY3VtZW50IGNhbiBiZSBzZXQuXG4gICAgICovXG4gICAgcHVibGljIHNhbWxNZXRhZGF0YURvY3VtZW50VXJsOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zU0FNTFByb3ZpZGVyUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NTQU1MUHJvdmlkZXIuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckFybiA9IHRoaXMuZ2V0QXR0KCdBcm4nKTtcbiAgICAgICAgdGhpcy5hdHRyU2FtbFByb3ZpZGVyTmFtZSA9IHRoaXMuZ2V0QXR0KCdTQU1MUHJvdmlkZXJOYW1lJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLnNhbWxQcm92aWRlck5hbWUgPSBwcm9wcy5zYW1sUHJvdmlkZXJOYW1lO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gcHJvcHMuZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZW5jb2RlZFNhbWxNZXRhZGF0YURvY3VtZW50ID0gcHJvcHMuZW5jb2RlZFNhbWxNZXRhZGF0YURvY3VtZW50O1xuICAgICAgICB0aGlzLnNhbWxNZXRhZGF0YURvY3VtZW50ID0gcHJvcHMuc2FtbE1ldGFkYXRhRG9jdW1lbnQ7XG4gICAgICAgIHRoaXMuc2FtbE1ldGFkYXRhRG9jdW1lbnRVcmwgPSBwcm9wcy5zYW1sTWV0YWRhdGFEb2N1bWVudFVybDtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzYW1sUHJvdmlkZXJOYW1lOiB0aGlzLnNhbWxQcm92aWRlck5hbWUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGVuY29kZWRTYW1sTWV0YWRhdGFEb2N1bWVudDogdGhpcy5lbmNvZGVkU2FtbE1ldGFkYXRhRG9jdW1lbnQsXG4gICAgICAgICAgICBzYW1sTWV0YWRhdGFEb2N1bWVudDogdGhpcy5zYW1sTWV0YWRhdGFEb2N1bWVudCxcbiAgICAgICAgICAgIHNhbWxNZXRhZGF0YURvY3VtZW50VXJsOiB0aGlzLnNhbWxNZXRhZGF0YURvY3VtZW50VXJsLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NTQU1MUHJvdmlkZXJQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NTZWN1cml0eVByZWZlcmVuY2VgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tcmFtLXNlY3VyaXR5cHJlZmVyZW5jZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc1NlY3VyaXR5UHJlZmVyZW5jZVByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhbGxvd1VzZXJUb0NoYW5nZVBhc3N3b3JkOiBTcGVjaWZpZXMgd2hldGhlciBSQU0gdXNlcnMgY2FuIGNoYW5nZSB0aGVpciBwYXNzd29yZHMuIFZhbGlkIHZhbHVlczpcbiAgICAgKiB0cnVlOiBSQU0gdXNlcnMgY2FuIGNoYW5nZSB0aGVpciBwYXNzd29yZHMuIFRoaXMgaXMgdGhlIGRlZmF1bHQgdmFsdWUuXG4gICAgICogZmFsc2U6IFJBTSB1c2VycyBjYW5ub3QgY2hhbmdlIHRoZWlyIHBhc3N3b3Jkcy5cbiAgICAgKi9cbiAgICByZWFkb25seSBhbGxvd1VzZXJUb0NoYW5nZVBhc3N3b3JkPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhbGxvd1VzZXJUb01hbmFnZUFjY2Vzc0tleXM6IFNwZWNpZmllcyB3aGV0aGVyIFJBTSB1c2VycyBjYW4gbWFuYWdlIHRoZWlyIEFjY2Vzc0tleSBwYWlycy4gVmFsaWQgdmFsdWVzOlxuICAgICAqIHRydWU6IFJBTSB1c2VycyBjYW4gbWFuYWdlIHRoZWlyIEFjY2Vzc0tleSBwYWlycy5cbiAgICAgKiBmYWxzZTogUkFNIHVzZXJzIGNhbm5vdCBtYW5hZ2UgdGhlaXIgQWNjZXNzS2V5IHBhaXJzLiBUaGlzIGlzIHRoZSBkZWZhdWx0IHZhbHVlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFsbG93VXNlclRvTWFuYWdlQWNjZXNzS2V5cz86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYWxsb3dVc2VyVG9NYW5hZ2VNZmFEZXZpY2VzOiBTcGVjaWZpZXMgd2hldGhlciBSQU0gdXNlcnMgY2FuIG1hbmFnZSB0aGVpciBNRkEgZGV2aWNlcy4gVmFsaWQgdmFsdWVzOlxuICAgICAqIHRydWU6IFJBTSB1c2VycyBjYW4gbWFuYWdlIHRoZWlyIE1GQSBkZXZpY2VzLiBUaGlzIGlzIHRoZSBkZWZhdWx0IHZhbHVlLlxuICAgICAqIGZhbHNlOiBSQU0gdXNlcnMgY2Fubm90IG1hbmFnZSB0aGVpciBNRkEgZGV2aWNlcy5cbiAgICAgKi9cbiAgICByZWFkb25seSBhbGxvd1VzZXJUb01hbmFnZU1mYURldmljZXM/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFsbG93VXNlclRvTWFuYWdlUHVibGljS2V5czogU3BlY2lmaWVzIHdoZXRoZXIgUkFNIHVzZXJzIGNhbiBtYW5hZ2UgdGhlaXIgcHVibGljIGtleXMuIFZhbGlkIHZhbHVlczpcbiAgICAgKiB0cnVlOiBSQU0gdXNlcnMgY2FuIG1hbmFnZSB0aGVpciBwdWJsaWMga2V5cy5cbiAgICAgKiBmYWxzZTogUkFNIHVzZXJzIGNhbm5vdCBtYW5hZ2UgdGhlaXIgcHVibGljIGtleXMuIFRoaXMgaXMgdGhlIGRlZmF1bHQgdmFsdWUuXG4gICAgICogTm90ZSBUaGlzIHBhcmFtZXRlciBpcyB2YWxpZCBvbmx5IGZvciB0aGUgSmFwYW4gc2l0ZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBhbGxvd1VzZXJUb01hbmFnZVB1YmxpY0tleXM/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGVuYWJsZVNhdmVNZmFUaWNrZXQ6IFNwZWNpZmllcyB3aGV0aGVyIFJBTSB1c2VycyBjYW4gc2F2ZSBtdWx0aS1mYWN0b3IgYXV0aGVudGljYXRpb24gKE1GQSkgc2VjdXJpdHkgY29kZXNcbiAgICAgKiBkdXJpbmcgbG9nb24uIFRoZSBzZWN1cml0eSBjb2RlcyBhcmUgdmFsaWQgZm9yIDcgZGF5cy4gVmFsaWQgdmFsdWVzOlxuICAgICAqIHRydWU6IFJBTSB1c2VycyBjYW4gc2F2ZSBNRkEgc2VjdXJpdHkgY29kZXMgZHVyaW5nIGxvZ29uLlxuICAgICAqIGZhbHNlOiBSQU0gdXNlcnMgY2Fubm90IHNhdmUgTUZBIHNlY3VyaXR5IGNvZGVzIGR1cmluZyBsb2dvbi4gVGhpcyBpcyB0aGUgZGVmYXVsdFxuICAgICAqIHZhbHVlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGVuYWJsZVNhdmVNZmFUaWNrZXQ/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGxvZ2luTmV0d29ya01hc2tzOiBUaGUgc3VibmV0IG1hc2sgdGhhdCBzcGVjaWZpZXMgdGhlIElQIGFkZHJlc3NlcyBmcm9tIHdoaWNoIGxvZ29uIHRvIHRoZSBjb25zb2xlIGlzXG4gICAgICogYWxsb3dlZC4gVGhpcyBwYXJhbWV0ZXIgYXBwbGllcyB0byBwYXNzd29yZC1iYXNlZCBsb2dvbiBhbmQgc2luZ2xlIHNpZ24tb24gKFNTTykuXG4gICAgICogSG93ZXZlciwgdGhpcyBwYXJhbWV0ZXIgZG9lcyBub3QgYXBwbHkgdG8gQVBJIGNhbGxzIHRoYXQgYXJlIGF1dGhlbnRpY2F0ZWQgYmFzZWQgb25cbiAgICAgKiBBY2Nlc3NLZXkgcGFpcnMuXG4gICAgICogSWYgYSBzdWJuZXQgbWFzayBpcyBzcGVjaWZpZWQsIFJBTSB1c2VycyBjYW4gbG9nIG9uIHRvIHRoZSBjb25zb2xlIG9ubHkgYnkgdXNpbmcgdGhlXG4gICAgICogSVAgYWRkcmVzc2VzIGluIHRoZSBzdWJuZXQuXG4gICAgICogSWYgeW91IGRvIG5vdCBzcGVjaWZ5IGEgc3VibmV0IG1hc2ssIFJBTSB1c2VycyBjYW4gbG9nIG9uIHRvIHRoZSBjb25zb2xlIGJ5IHVzaW5nXG4gICAgICogYWxsIElQIGFkZHJlc3Nlcy5cbiAgICAgKiBJZiB5b3Ugd2FudCB0byBzcGVjaWZ5IG11bHRpcGxlIHN1Ym5ldCBtYXNrcywgc2VwYXJhdGUgdGhlIHN1Ym5ldCBtYXNrcyB3aXRoIHNlbWljb2xvbnNcbiAgICAgKiAoOykuIEV4YW1wbGU6IDE5Mi4xNjguMC4wXFwvMTY7MTAuMC4wLjBcXC84LlxuICAgICAqIEEgbWF4aW11bSBvZiAyNSBzdWJuZXQgbWFza3MgY2FuIGJlIHNldC4gVGhlIHRvdGFsIGxlbmd0aCBvZiB0aGUgc3VibmV0IG1hc2tzIGNhblxuICAgICAqIGJlIDEgdG8gNTEyIGNoYXJhY3RlcnMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbG9naW5OZXR3b3JrTWFza3M/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbG9naW5TZXNzaW9uRHVyYXRpb246IFRoZSB2YWxpZGl0eSBwZXJpb2Qgb2YgdGhlIGxvZ29uIHNlc3Npb24gb2YgdGhlIFJBTSB1c2VyLlxuICAgICAqIFZhbGlkIHZhbHVlczogNiB0byAyNC4gRGVmYXVsdCB2YWx1ZTogNi4gVW5pdDogaG91cnMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbG9naW5TZXNzaW9uRHVyYXRpb24/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zU2VjdXJpdHlQcmVmZXJlbmNlUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1NlY3VyaXR5UHJlZmVyZW5jZVByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1NlY3VyaXR5UHJlZmVyZW5jZVByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbG9naW5TZXNzaW9uRHVyYXRpb24nLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMubG9naW5TZXNzaW9uRHVyYXRpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FsbG93VXNlclRvTWFuYWdlTWZhRGV2aWNlcycsIHJvcy52YWxpZGF0ZUJvb2xlYW4pKHByb3BlcnRpZXMuYWxsb3dVc2VyVG9NYW5hZ2VNZmFEZXZpY2VzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhbGxvd1VzZXJUb01hbmFnZVB1YmxpY0tleXMnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLmFsbG93VXNlclRvTWFuYWdlUHVibGljS2V5cykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbG9naW5OZXR3b3JrTWFza3MnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubG9naW5OZXR3b3JrTWFza3MpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FsbG93VXNlclRvQ2hhbmdlUGFzc3dvcmQnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLmFsbG93VXNlclRvQ2hhbmdlUGFzc3dvcmQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FsbG93VXNlclRvTWFuYWdlQWNjZXNzS2V5cycsIHJvcy52YWxpZGF0ZUJvb2xlYW4pKHByb3BlcnRpZXMuYWxsb3dVc2VyVG9NYW5hZ2VBY2Nlc3NLZXlzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdlbmFibGVTYXZlTWZhVGlja2V0Jywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy5lbmFibGVTYXZlTWZhVGlja2V0KSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc1NlY3VyaXR5UHJlZmVyZW5jZVByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpSQU06OlNlY3VyaXR5UHJlZmVyZW5jZWAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zU2VjdXJpdHlQcmVmZXJlbmNlUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlJBTTo6U2VjdXJpdHlQcmVmZXJlbmNlYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1NlY3VyaXR5UHJlZmVyZW5jZVByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zU2VjdXJpdHlQcmVmZXJlbmNlUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgJ0FsbG93VXNlclRvQ2hhbmdlUGFzc3dvcmQnOiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5hbGxvd1VzZXJUb0NoYW5nZVBhc3N3b3JkKSxcbiAgICAgICdBbGxvd1VzZXJUb01hbmFnZUFjY2Vzc0tleXMnOiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5hbGxvd1VzZXJUb01hbmFnZUFjY2Vzc0tleXMpLFxuICAgICAgJ0FsbG93VXNlclRvTWFuYWdlTUZBRGV2aWNlcyc6IHJvcy5ib29sZWFuVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmFsbG93VXNlclRvTWFuYWdlTWZhRGV2aWNlcyksXG4gICAgICAnQWxsb3dVc2VyVG9NYW5hZ2VQdWJsaWNLZXlzJzogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYWxsb3dVc2VyVG9NYW5hZ2VQdWJsaWNLZXlzKSxcbiAgICAgICdFbmFibGVTYXZlTUZBVGlja2V0Jzogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZW5hYmxlU2F2ZU1mYVRpY2tldCksXG4gICAgICAnTG9naW5OZXR3b3JrTWFza3MnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmxvZ2luTmV0d29ya01hc2tzKSxcbiAgICAgICdMb2dpblNlc3Npb25EdXJhdGlvbic6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubG9naW5TZXNzaW9uRHVyYXRpb24pLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OlJBTTo6U2VjdXJpdHlQcmVmZXJlbmNlYCwgd2hpY2ggaXMgdXNlZCB0byBjb25maWd1cmUgc2VjdXJpdHkgcHJlZmVyZW5jZXMgZm9yIFJlc291cmNlIEFjY2VzcyBNYW5hZ2VtZW50IChSQU0pIHVzZXJzLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBTZWN1cml0eVByZWZlcmVuY2VgIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLXJhbS1zZWN1cml0eXByZWZlcmVuY2VcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc1NlY3VyaXR5UHJlZmVyZW5jZSBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6UkFNOjpTZWN1cml0eVByZWZlcmVuY2VcIjtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQWxsb3dVc2VyVG9DaGFuZ2VQYXNzd29yZDogU3BlY2lmaWVzIHdoZXRoZXIgUkFNIHVzZXJzIGNhbiBjaGFuZ2UgdGhlaXIgcGFzc3dvcmRzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQWxsb3dVc2VyVG9DaGFuZ2VQYXNzd29yZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBBbGxvd1VzZXJUb01hbmFnZUFjY2Vzc0tleXM6IFNwZWNpZmllcyB3aGV0aGVyIFJBTSB1c2VycyBjYW4gbWFuYWdlIHRoZWlyIEFjY2Vzc0tleSBwYWlycy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckFsbG93VXNlclRvTWFuYWdlQWNjZXNzS2V5czogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBBbGxvd1VzZXJUb01hbmFnZU1GQURldmljZXM6IFNwZWNpZmllcyB3aGV0aGVyIFJBTSB1c2VycyBjYW4gbWFuYWdlIHRoZWlyIE1GQSBkZXZpY2VzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQWxsb3dVc2VyVG9NYW5hZ2VNZmFEZXZpY2VzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEFsbG93VXNlclRvTWFuYWdlUHVibGljS2V5czogU3BlY2lmaWVzIHdoZXRoZXIgUkFNIHVzZXJzIGNhbiBtYW5hZ2UgdGhlaXIgcHVibGljIGtleXMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJBbGxvd1VzZXJUb01hbmFnZVB1YmxpY0tleXM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgRW5hYmxlU2F2ZU1GQVRpY2tldDogU3BlY2lmaWVzIHdoZXRoZXIgUkFNIHVzZXJzIGNhbiBzYXZlIG11bHRpLWZhY3RvciBhdXRoZW50aWNhdGlvbiAoTUZBKSBzZWN1cml0eSBjb2RlcyBkdXJpbmcgbG9nb24uXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJFbmFibGVTYXZlTWZhVGlja2V0OiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIExvZ2luTmV0d29ya01hc2tzOiBUaGUgc3VibmV0IG1hc2sgdGhhdCBzcGVjaWZpZXMgdGhlIElQIGFkZHJlc3NlcyBmcm9tIHdoaWNoIGxvZ29uIHRvIHRoZSBjb25zb2xlIGlzIGFsbG93ZWQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJMb2dpbk5ldHdvcmtNYXNrczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBMb2dpblNlc3Npb25EdXJhdGlvbjogVGhlIHZhbGlkaXR5IHBlcmlvZCBvZiB0aGUgbG9nb24gc2Vzc2lvbiBvZiB0aGUgUkFNIHVzZXIuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJMb2dpblNlc3Npb25EdXJhdGlvbjogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYWxsb3dVc2VyVG9DaGFuZ2VQYXNzd29yZDogU3BlY2lmaWVzIHdoZXRoZXIgUkFNIHVzZXJzIGNhbiBjaGFuZ2UgdGhlaXIgcGFzc3dvcmRzLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogdHJ1ZTogUkFNIHVzZXJzIGNhbiBjaGFuZ2UgdGhlaXIgcGFzc3dvcmRzLiBUaGlzIGlzIHRoZSBkZWZhdWx0IHZhbHVlLlxuICAgICAqIGZhbHNlOiBSQU0gdXNlcnMgY2Fubm90IGNoYW5nZSB0aGVpciBwYXNzd29yZHMuXG4gICAgICovXG4gICAgcHVibGljIGFsbG93VXNlclRvQ2hhbmdlUGFzc3dvcmQ6IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYWxsb3dVc2VyVG9NYW5hZ2VBY2Nlc3NLZXlzOiBTcGVjaWZpZXMgd2hldGhlciBSQU0gdXNlcnMgY2FuIG1hbmFnZSB0aGVpciBBY2Nlc3NLZXkgcGFpcnMuIFZhbGlkIHZhbHVlczpcbiAgICAgKiB0cnVlOiBSQU0gdXNlcnMgY2FuIG1hbmFnZSB0aGVpciBBY2Nlc3NLZXkgcGFpcnMuXG4gICAgICogZmFsc2U6IFJBTSB1c2VycyBjYW5ub3QgbWFuYWdlIHRoZWlyIEFjY2Vzc0tleSBwYWlycy4gVGhpcyBpcyB0aGUgZGVmYXVsdCB2YWx1ZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgYWxsb3dVc2VyVG9NYW5hZ2VBY2Nlc3NLZXlzOiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFsbG93VXNlclRvTWFuYWdlTWZhRGV2aWNlczogU3BlY2lmaWVzIHdoZXRoZXIgUkFNIHVzZXJzIGNhbiBtYW5hZ2UgdGhlaXIgTUZBIGRldmljZXMuIFZhbGlkIHZhbHVlczpcbiAgICAgKiB0cnVlOiBSQU0gdXNlcnMgY2FuIG1hbmFnZSB0aGVpciBNRkEgZGV2aWNlcy4gVGhpcyBpcyB0aGUgZGVmYXVsdCB2YWx1ZS5cbiAgICAgKiBmYWxzZTogUkFNIHVzZXJzIGNhbm5vdCBtYW5hZ2UgdGhlaXIgTUZBIGRldmljZXMuXG4gICAgICovXG4gICAgcHVibGljIGFsbG93VXNlclRvTWFuYWdlTWZhRGV2aWNlczogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhbGxvd1VzZXJUb01hbmFnZVB1YmxpY0tleXM6IFNwZWNpZmllcyB3aGV0aGVyIFJBTSB1c2VycyBjYW4gbWFuYWdlIHRoZWlyIHB1YmxpYyBrZXlzLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogdHJ1ZTogUkFNIHVzZXJzIGNhbiBtYW5hZ2UgdGhlaXIgcHVibGljIGtleXMuXG4gICAgICogZmFsc2U6IFJBTSB1c2VycyBjYW5ub3QgbWFuYWdlIHRoZWlyIHB1YmxpYyBrZXlzLiBUaGlzIGlzIHRoZSBkZWZhdWx0IHZhbHVlLlxuICAgICAqIE5vdGUgVGhpcyBwYXJhbWV0ZXIgaXMgdmFsaWQgb25seSBmb3IgdGhlIEphcGFuIHNpdGUuXG4gICAgICovXG4gICAgcHVibGljIGFsbG93VXNlclRvTWFuYWdlUHVibGljS2V5czogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBlbmFibGVTYXZlTWZhVGlja2V0OiBTcGVjaWZpZXMgd2hldGhlciBSQU0gdXNlcnMgY2FuIHNhdmUgbXVsdGktZmFjdG9yIGF1dGhlbnRpY2F0aW9uIChNRkEpIHNlY3VyaXR5IGNvZGVzXG4gICAgICogZHVyaW5nIGxvZ29uLiBUaGUgc2VjdXJpdHkgY29kZXMgYXJlIHZhbGlkIGZvciA3IGRheXMuIFZhbGlkIHZhbHVlczpcbiAgICAgKiB0cnVlOiBSQU0gdXNlcnMgY2FuIHNhdmUgTUZBIHNlY3VyaXR5IGNvZGVzIGR1cmluZyBsb2dvbi5cbiAgICAgKiBmYWxzZTogUkFNIHVzZXJzIGNhbm5vdCBzYXZlIE1GQSBzZWN1cml0eSBjb2RlcyBkdXJpbmcgbG9nb24uIFRoaXMgaXMgdGhlIGRlZmF1bHRcbiAgICAgKiB2YWx1ZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgZW5hYmxlU2F2ZU1mYVRpY2tldDogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBsb2dpbk5ldHdvcmtNYXNrczogVGhlIHN1Ym5ldCBtYXNrIHRoYXQgc3BlY2lmaWVzIHRoZSBJUCBhZGRyZXNzZXMgZnJvbSB3aGljaCBsb2dvbiB0byB0aGUgY29uc29sZSBpc1xuICAgICAqIGFsbG93ZWQuIFRoaXMgcGFyYW1ldGVyIGFwcGxpZXMgdG8gcGFzc3dvcmQtYmFzZWQgbG9nb24gYW5kIHNpbmdsZSBzaWduLW9uIChTU08pLlxuICAgICAqIEhvd2V2ZXIsIHRoaXMgcGFyYW1ldGVyIGRvZXMgbm90IGFwcGx5IHRvIEFQSSBjYWxscyB0aGF0IGFyZSBhdXRoZW50aWNhdGVkIGJhc2VkIG9uXG4gICAgICogQWNjZXNzS2V5IHBhaXJzLlxuICAgICAqIElmIGEgc3VibmV0IG1hc2sgaXMgc3BlY2lmaWVkLCBSQU0gdXNlcnMgY2FuIGxvZyBvbiB0byB0aGUgY29uc29sZSBvbmx5IGJ5IHVzaW5nIHRoZVxuICAgICAqIElQIGFkZHJlc3NlcyBpbiB0aGUgc3VibmV0LlxuICAgICAqIElmIHlvdSBkbyBub3Qgc3BlY2lmeSBhIHN1Ym5ldCBtYXNrLCBSQU0gdXNlcnMgY2FuIGxvZyBvbiB0byB0aGUgY29uc29sZSBieSB1c2luZ1xuICAgICAqIGFsbCBJUCBhZGRyZXNzZXMuXG4gICAgICogSWYgeW91IHdhbnQgdG8gc3BlY2lmeSBtdWx0aXBsZSBzdWJuZXQgbWFza3MsIHNlcGFyYXRlIHRoZSBzdWJuZXQgbWFza3Mgd2l0aCBzZW1pY29sb25zXG4gICAgICogKDspLiBFeGFtcGxlOiAxOTIuMTY4LjAuMFxcLzE2OzEwLjAuMC4wXFwvOC5cbiAgICAgKiBBIG1heGltdW0gb2YgMjUgc3VibmV0IG1hc2tzIGNhbiBiZSBzZXQuIFRoZSB0b3RhbCBsZW5ndGggb2YgdGhlIHN1Ym5ldCBtYXNrcyBjYW5cbiAgICAgKiBiZSAxIHRvIDUxMiBjaGFyYWN0ZXJzLlxuICAgICAqL1xuICAgIHB1YmxpYyBsb2dpbk5ldHdvcmtNYXNrczogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGxvZ2luU2Vzc2lvbkR1cmF0aW9uOiBUaGUgdmFsaWRpdHkgcGVyaW9kIG9mIHRoZSBsb2dvbiBzZXNzaW9uIG9mIHRoZSBSQU0gdXNlci5cbiAgICAgKiBWYWxpZCB2YWx1ZXM6IDYgdG8gMjQuIERlZmF1bHQgdmFsdWU6IDYuIFVuaXQ6IGhvdXJzLlxuICAgICAqL1xuICAgIHB1YmxpYyBsb2dpblNlc3Npb25EdXJhdGlvbjogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc1NlY3VyaXR5UHJlZmVyZW5jZVByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zU2VjdXJpdHlQcmVmZXJlbmNlLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJBbGxvd1VzZXJUb0NoYW5nZVBhc3N3b3JkID0gdGhpcy5nZXRBdHQoJ0FsbG93VXNlclRvQ2hhbmdlUGFzc3dvcmQnKTtcbiAgICAgICAgdGhpcy5hdHRyQWxsb3dVc2VyVG9NYW5hZ2VBY2Nlc3NLZXlzID0gdGhpcy5nZXRBdHQoJ0FsbG93VXNlclRvTWFuYWdlQWNjZXNzS2V5cycpO1xuICAgICAgICB0aGlzLmF0dHJBbGxvd1VzZXJUb01hbmFnZU1mYURldmljZXMgPSB0aGlzLmdldEF0dCgnQWxsb3dVc2VyVG9NYW5hZ2VNRkFEZXZpY2VzJyk7XG4gICAgICAgIHRoaXMuYXR0ckFsbG93VXNlclRvTWFuYWdlUHVibGljS2V5cyA9IHRoaXMuZ2V0QXR0KCdBbGxvd1VzZXJUb01hbmFnZVB1YmxpY0tleXMnKTtcbiAgICAgICAgdGhpcy5hdHRyRW5hYmxlU2F2ZU1mYVRpY2tldCA9IHRoaXMuZ2V0QXR0KCdFbmFibGVTYXZlTUZBVGlja2V0Jyk7XG4gICAgICAgIHRoaXMuYXR0ckxvZ2luTmV0d29ya01hc2tzID0gdGhpcy5nZXRBdHQoJ0xvZ2luTmV0d29ya01hc2tzJyk7XG4gICAgICAgIHRoaXMuYXR0ckxvZ2luU2Vzc2lvbkR1cmF0aW9uID0gdGhpcy5nZXRBdHQoJ0xvZ2luU2Vzc2lvbkR1cmF0aW9uJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmFsbG93VXNlclRvQ2hhbmdlUGFzc3dvcmQgPSBwcm9wcy5hbGxvd1VzZXJUb0NoYW5nZVBhc3N3b3JkO1xuICAgICAgICB0aGlzLmFsbG93VXNlclRvTWFuYWdlQWNjZXNzS2V5cyA9IHByb3BzLmFsbG93VXNlclRvTWFuYWdlQWNjZXNzS2V5cztcbiAgICAgICAgdGhpcy5hbGxvd1VzZXJUb01hbmFnZU1mYURldmljZXMgPSBwcm9wcy5hbGxvd1VzZXJUb01hbmFnZU1mYURldmljZXM7XG4gICAgICAgIHRoaXMuYWxsb3dVc2VyVG9NYW5hZ2VQdWJsaWNLZXlzID0gcHJvcHMuYWxsb3dVc2VyVG9NYW5hZ2VQdWJsaWNLZXlzO1xuICAgICAgICB0aGlzLmVuYWJsZVNhdmVNZmFUaWNrZXQgPSBwcm9wcy5lbmFibGVTYXZlTWZhVGlja2V0O1xuICAgICAgICB0aGlzLmxvZ2luTmV0d29ya01hc2tzID0gcHJvcHMubG9naW5OZXR3b3JrTWFza3M7XG4gICAgICAgIHRoaXMubG9naW5TZXNzaW9uRHVyYXRpb24gPSBwcm9wcy5sb2dpblNlc3Npb25EdXJhdGlvbjtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhbGxvd1VzZXJUb0NoYW5nZVBhc3N3b3JkOiB0aGlzLmFsbG93VXNlclRvQ2hhbmdlUGFzc3dvcmQsXG4gICAgICAgICAgICBhbGxvd1VzZXJUb01hbmFnZUFjY2Vzc0tleXM6IHRoaXMuYWxsb3dVc2VyVG9NYW5hZ2VBY2Nlc3NLZXlzLFxuICAgICAgICAgICAgYWxsb3dVc2VyVG9NYW5hZ2VNZmFEZXZpY2VzOiB0aGlzLmFsbG93VXNlclRvTWFuYWdlTWZhRGV2aWNlcyxcbiAgICAgICAgICAgIGFsbG93VXNlclRvTWFuYWdlUHVibGljS2V5czogdGhpcy5hbGxvd1VzZXJUb01hbmFnZVB1YmxpY0tleXMsXG4gICAgICAgICAgICBlbmFibGVTYXZlTWZhVGlja2V0OiB0aGlzLmVuYWJsZVNhdmVNZmFUaWNrZXQsXG4gICAgICAgICAgICBsb2dpbk5ldHdvcmtNYXNrczogdGhpcy5sb2dpbk5ldHdvcmtNYXNrcyxcbiAgICAgICAgICAgIGxvZ2luU2Vzc2lvbkR1cmF0aW9uOiB0aGlzLmxvZ2luU2Vzc2lvbkR1cmF0aW9uLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NTZWN1cml0eVByZWZlcmVuY2VQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NVc2VyYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLXJhbS11c2VyXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zVXNlclByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB1c2VyTmFtZTogU3BlY2lmaWVzIHRoZSB1c2VyIG5hbWUsIGNvbnRhaW5pbmcgdXAgdG8gNjQgY2hhcmFjdGVycy5cbiAgICAgKi9cbiAgICByZWFkb25seSB1c2VyTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNvbW1lbnRzOiBDb21tZW50cyBvZiByYW0gdXNlci5cbiAgICAgKi9cbiAgICByZWFkb25seSBjb21tZW50cz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZWxldGlvbkZvcmNlOiBXaGV0aGVyIGZvcmNlIGRldGFjaCB0aGUgcG9saWNpZXMgYW5kIGdyb3VwcyBhdHRhY2hlZCB0byB0aGUgdXNlci4gRGVmYXVsdCB2YWx1ZSBpcyBmYWxzZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZWxldGlvbkZvcmNlPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkaXNwbGF5TmFtZTogRGlzcGxheSBuYW1lLCB1cCB0byAxMjggY2hhcmFjdGVycyBvciBDaGluZXNlIGNoYXJhY3RlcnMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGlzcGxheU5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZW1haWw6IEVtYWlsIG9mIHJhbSB1c2VyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGVtYWlsPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGdyb3VwczogQSBuYW1lIG9mIGEgZ3JvdXAgdG8gd2hpY2ggeW91IHdhbnQgdG8gYWRkIHRoZSB1c2VyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGdyb3Vwcz86IEFycmF5PGFueSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbG9naW5Qcm9maWxlOiBDcmVhdGVzIGEgbG9naW4gcHJvZmlsZSBmb3IgdXNlcnMgc28gdGhhdCB0aGV5IGNhbiBhY2Nlc3MgdGhlIEFsaUNsb3VkIE1hbmFnZW1lbnQgQ29uc29sZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBsb2dpblByb2ZpbGU/OiBSb3NVc2VyLkxvZ2luUHJvZmlsZVByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG1vYmlsZVBob25lOiBQaG9uZSBudW1iZXIgb2YgcmFtIHVzZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbW9iaWxlUGhvbmU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcG9saWNpZXM6IERlc2NyaWJlcyB3aGF0IGFjdGlvbnMgYXJlIGFsbG93ZWQgb24gd2hhdCByZXNvdXJjZXMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcG9saWNpZXM/OiBBcnJheTxSb3NVc2VyLlBvbGljaWVzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBvbGljeUF0dGFjaG1lbnRzOiBTeXN0ZW0gYW5kIGN1c3RvbSBwb2xpY3kgbmFtZXMgdG8gYXR0YWNoLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBvbGljeUF0dGFjaG1lbnRzPzogUm9zVXNlci5Qb2xpY3lBdHRhY2htZW50c1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc1VzZXJQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zVXNlclByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1VzZXJQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3VzZXJOYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnVzZXJOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd1c2VyTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy51c2VyTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZW1haWwnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZW1haWwpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BvbGljaWVzJywgcm9zLmxpc3RWYWxpZGF0b3IoUm9zVXNlcl9Qb2xpY2llc1Byb3BlcnR5VmFsaWRhdG9yKSkocHJvcGVydGllcy5wb2xpY2llcykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncG9saWN5QXR0YWNobWVudHMnLCBSb3NVc2VyX1BvbGljeUF0dGFjaG1lbnRzUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMucG9saWN5QXR0YWNobWVudHMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RlbGV0aW9uRm9yY2UnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLmRlbGV0aW9uRm9yY2UpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmNvbW1lbnRzICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMuY29tbWVudHMpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5jb21tZW50cykgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NvbW1lbnRzJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmNvbW1lbnRzLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogMTI4LFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjb21tZW50cycsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5jb21tZW50cykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZ3JvdXBzJywgcm9zLmxpc3RWYWxpZGF0b3Iocm9zLnZhbGlkYXRlQW55KSkocHJvcGVydGllcy5ncm91cHMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Rpc3BsYXlOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmRpc3BsYXlOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdsb2dpblByb2ZpbGUnLCBSb3NVc2VyX0xvZ2luUHJvZmlsZVByb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLmxvZ2luUHJvZmlsZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbW9iaWxlUGhvbmUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubW9iaWxlUGhvbmUpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zVXNlclByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpSQU06OlVzZXJgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1VzZXJQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6UkFNOjpVc2VyYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1VzZXJQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc1VzZXJQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAnVXNlck5hbWUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnVzZXJOYW1lKSxcbiAgICAgICdDb21tZW50cyc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY29tbWVudHMpLFxuICAgICAgJ0RlbGV0aW9uRm9yY2UnOiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kZWxldGlvbkZvcmNlKSxcbiAgICAgICdEaXNwbGF5TmFtZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGlzcGxheU5hbWUpLFxuICAgICAgJ0VtYWlsJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5lbWFpbCksXG4gICAgICAnR3JvdXBzJzogcm9zLmxpc3RNYXBwZXIocm9zLm9iamVjdFRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMuZ3JvdXBzKSxcbiAgICAgICdMb2dpblByb2ZpbGUnOiByb3NVc2VyTG9naW5Qcm9maWxlUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubG9naW5Qcm9maWxlKSxcbiAgICAgICdNb2JpbGVQaG9uZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubW9iaWxlUGhvbmUpLFxuICAgICAgJ1BvbGljaWVzJzogcm9zLmxpc3RNYXBwZXIocm9zVXNlclBvbGljaWVzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLnBvbGljaWVzKSxcbiAgICAgICdQb2xpY3lBdHRhY2htZW50cyc6IHJvc1VzZXJQb2xpY3lBdHRhY2htZW50c1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnBvbGljeUF0dGFjaG1lbnRzKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBiYXNlIGVuY2Fwc3VsYXRpb24gYXJvdW5kIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpSQU06OlVzZXJgVGhlICwgd2hpY2ggcmVzb3VyY2UgY3JlYXRlcyBhIFJBTSB1c2VyLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBVc2VyYCBjbGFzcyBpbnN0ZWFkIG9mIHRoaXMgY2xhc3MgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1yYW0tdXNlclxuICovXG5leHBvcnQgY2xhc3MgUm9zVXNlciBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6UkFNOjpVc2VyXCI7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIENyZWF0ZURhdGU6IENyZWF0ZSBkYXRlIG9mIHJhbSB1c2VyLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ3JlYXRlRGF0ZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBMYXN0TG9naW5EYXRlOiBMYXN0IGxvZ2luIGRhdGUgb2YgcmFtIHVzZXIuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJMYXN0TG9naW5EYXRlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFVzZXJJZDogSWQgb2YgcmFtIHVzZXIuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJVc2VySWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgVXNlck5hbWU6IE5hbWUgb2YgcmFtIHVzZXIuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJVc2VyTmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdXNlck5hbWU6IFNwZWNpZmllcyB0aGUgdXNlciBuYW1lLCBjb250YWluaW5nIHVwIHRvIDY0IGNoYXJhY3RlcnMuXG4gICAgICovXG4gICAgcHVibGljIHVzZXJOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY29tbWVudHM6IENvbW1lbnRzIG9mIHJhbSB1c2VyLlxuICAgICAqL1xuICAgIHB1YmxpYyBjb21tZW50czogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlbGV0aW9uRm9yY2U6IFdoZXRoZXIgZm9yY2UgZGV0YWNoIHRoZSBwb2xpY2llcyBhbmQgZ3JvdXBzIGF0dGFjaGVkIHRvIHRoZSB1c2VyLiBEZWZhdWx0IHZhbHVlIGlzIGZhbHNlLlxuICAgICAqL1xuICAgIHB1YmxpYyBkZWxldGlvbkZvcmNlOiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRpc3BsYXlOYW1lOiBEaXNwbGF5IG5hbWUsIHVwIHRvIDEyOCBjaGFyYWN0ZXJzIG9yIENoaW5lc2UgY2hhcmFjdGVycy5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGlzcGxheU5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBlbWFpbDogRW1haWwgb2YgcmFtIHVzZXIuXG4gICAgICovXG4gICAgcHVibGljIGVtYWlsOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZ3JvdXBzOiBBIG5hbWUgb2YgYSBncm91cCB0byB3aGljaCB5b3Ugd2FudCB0byBhZGQgdGhlIHVzZXIuXG4gICAgICovXG4gICAgcHVibGljIGdyb3VwczogQXJyYXk8YW55IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBsb2dpblByb2ZpbGU6IENyZWF0ZXMgYSBsb2dpbiBwcm9maWxlIGZvciB1c2VycyBzbyB0aGF0IHRoZXkgY2FuIGFjY2VzcyB0aGUgQWxpQ2xvdWQgTWFuYWdlbWVudCBDb25zb2xlLlxuICAgICAqL1xuICAgIHB1YmxpYyBsb2dpblByb2ZpbGU6IFJvc1VzZXIuTG9naW5Qcm9maWxlUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbW9iaWxlUGhvbmU6IFBob25lIG51bWJlciBvZiByYW0gdXNlci5cbiAgICAgKi9cbiAgICBwdWJsaWMgbW9iaWxlUGhvbmU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwb2xpY2llczogRGVzY3JpYmVzIHdoYXQgYWN0aW9ucyBhcmUgYWxsb3dlZCBvbiB3aGF0IHJlc291cmNlcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcG9saWNpZXM6IEFycmF5PFJvc1VzZXIuUG9saWNpZXNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcG9saWN5QXR0YWNobWVudHM6IFN5c3RlbSBhbmQgY3VzdG9tIHBvbGljeSBuYW1lcyB0byBhdHRhY2guXG4gICAgICovXG4gICAgcHVibGljIHBvbGljeUF0dGFjaG1lbnRzOiBSb3NVc2VyLlBvbGljeUF0dGFjaG1lbnRzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zVXNlclByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zVXNlci5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyQ3JlYXRlRGF0ZSA9IHRoaXMuZ2V0QXR0KCdDcmVhdGVEYXRlJyk7XG4gICAgICAgIHRoaXMuYXR0ckxhc3RMb2dpbkRhdGUgPSB0aGlzLmdldEF0dCgnTGFzdExvZ2luRGF0ZScpO1xuICAgICAgICB0aGlzLmF0dHJVc2VySWQgPSB0aGlzLmdldEF0dCgnVXNlcklkJyk7XG4gICAgICAgIHRoaXMuYXR0clVzZXJOYW1lID0gdGhpcy5nZXRBdHQoJ1VzZXJOYW1lJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLnVzZXJOYW1lID0gcHJvcHMudXNlck5hbWU7XG4gICAgICAgIHRoaXMuY29tbWVudHMgPSBwcm9wcy5jb21tZW50cztcbiAgICAgICAgdGhpcy5kZWxldGlvbkZvcmNlID0gcHJvcHMuZGVsZXRpb25Gb3JjZTtcbiAgICAgICAgdGhpcy5kaXNwbGF5TmFtZSA9IHByb3BzLmRpc3BsYXlOYW1lO1xuICAgICAgICB0aGlzLmVtYWlsID0gcHJvcHMuZW1haWw7XG4gICAgICAgIHRoaXMuZ3JvdXBzID0gcHJvcHMuZ3JvdXBzO1xuICAgICAgICB0aGlzLmxvZ2luUHJvZmlsZSA9IHByb3BzLmxvZ2luUHJvZmlsZTtcbiAgICAgICAgdGhpcy5tb2JpbGVQaG9uZSA9IHByb3BzLm1vYmlsZVBob25lO1xuICAgICAgICB0aGlzLnBvbGljaWVzID0gcHJvcHMucG9saWNpZXM7XG4gICAgICAgIHRoaXMucG9saWN5QXR0YWNobWVudHMgPSBwcm9wcy5wb2xpY3lBdHRhY2htZW50cztcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1c2VyTmFtZTogdGhpcy51c2VyTmFtZSxcbiAgICAgICAgICAgIGNvbW1lbnRzOiB0aGlzLmNvbW1lbnRzLFxuICAgICAgICAgICAgZGVsZXRpb25Gb3JjZTogdGhpcy5kZWxldGlvbkZvcmNlLFxuICAgICAgICAgICAgZGlzcGxheU5hbWU6IHRoaXMuZGlzcGxheU5hbWUsXG4gICAgICAgICAgICBlbWFpbDogdGhpcy5lbWFpbCxcbiAgICAgICAgICAgIGdyb3VwczogdGhpcy5ncm91cHMsXG4gICAgICAgICAgICBsb2dpblByb2ZpbGU6IHRoaXMubG9naW5Qcm9maWxlLFxuICAgICAgICAgICAgbW9iaWxlUGhvbmU6IHRoaXMubW9iaWxlUGhvbmUsXG4gICAgICAgICAgICBwb2xpY2llczogdGhpcy5wb2xpY2llcyxcbiAgICAgICAgICAgIHBvbGljeUF0dGFjaG1lbnRzOiB0aGlzLnBvbGljeUF0dGFjaG1lbnRzLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NVc2VyUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zVXNlciB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgTG9naW5Qcm9maWxlUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHBhc3N3b3JkUmVzZXRSZXF1aXJlZDogU3BlY2lmaWVzIHdoZXRoZXIgdGhlIHVzZXIgaXMgcmVxdWlyZWQgdG8gc2V0IGEgbmV3IHBhc3N3b3JkIHRoZSBuZXh0IHRpbWUgdGhlIHVzZXIgbG9ncyBpbiB0byB0aGUgQWxpQ2xvdWQgTWFuYWdlbWVudCBDb25zb2xlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcGFzc3dvcmRSZXNldFJlcXVpcmVkPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBtZmFCaW5kUmVxdWlyZWQ6IFNwZWNpZmllcyB3aGV0aGVyIHRoZSB1c2VyIG11c3QgYmluZCBhIG11bHRpIGZhY3RvciBhdXRoZW50aWNhdGlvbiBkZXZpY2UgYXQgdGhlIG5leHQgbG9nb24uXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBtZmFCaW5kUmVxdWlyZWQ/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHBhc3N3b3JkOiBUaGUgcGFzc3dvcmQgZm9yIHRoZSB1c2VyLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcGFzc3dvcmQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBMb2dpblByb2ZpbGVQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgTG9naW5Qcm9maWxlUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zVXNlcl9Mb2dpblByb2ZpbGVQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Bhc3N3b3JkUmVzZXRSZXF1aXJlZCcsIHJvcy52YWxpZGF0ZUJvb2xlYW4pKHByb3BlcnRpZXMucGFzc3dvcmRSZXNldFJlcXVpcmVkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtZmFCaW5kUmVxdWlyZWQnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLm1mYUJpbmRSZXF1aXJlZCkpO1xuICAgIGlmKHByb3BlcnRpZXMucGFzc3dvcmQgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5wYXNzd29yZCkgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLnBhc3N3b3JkKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncGFzc3dvcmQnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMucGFzc3dvcmQubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiA4LFxuICAgICAgICAgICAgbWF4OiAzMixcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncGFzc3dvcmQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucGFzc3dvcmQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiTG9naW5Qcm9maWxlUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlJBTTo6VXNlci5Mb2dpblByb2ZpbGVgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYExvZ2luUHJvZmlsZVByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpSQU06OlVzZXIuTG9naW5Qcm9maWxlYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1VzZXJMb2dpblByb2ZpbGVQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zVXNlcl9Mb2dpblByb2ZpbGVQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdQYXNzd29yZFJlc2V0UmVxdWlyZWQnOiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wYXNzd29yZFJlc2V0UmVxdWlyZWQpLFxuICAgICAgJ01GQUJpbmRSZXF1aXJlZCc6IHJvcy5ib29sZWFuVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm1mYUJpbmRSZXF1aXJlZCksXG4gICAgICAnUGFzc3dvcmQnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnBhc3N3b3JkKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc1VzZXIge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFBvbGljaWVzUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGlnbm9yZUV4aXN0aW5nOiBXaGV0aGVyIHRvIGlnbm9yZSBleGlzdGluZyBwb2xpY3lcbiAgICAgKiBGYWxzZTogUk9TIHdpbGwgcGVyZm9ybSBhIHVuaXF1ZW5lc3MgY2hlY2suSWYgYSBwb2xpY3kgd2l0aCB0aGUgc2FtZSBuYW1lIGV4aXN0cywgYW4gZXJyb3Igd2lsbCBiZSByZXBvcnRlZCB3aGVuIGNyZWF0aW5nIGl0LlxuICAgICAqIFRydWU6IFJPUyB3aWxsIG5vdCBjaGVjayB0aGUgdW5pcXVlbmVzcy5JZiB0aGVyZSBpcyBhIHBvbGljeSB3aXRoIHRoZSBzYW1lIG5hbWUsIHRoZSBwb2xpY3kgY3JlYXRpb24gcHJvY2VzcyB3aWxsIGJlIGlnbm9yZWQuXG4gICAgICogSWYgdGhlIHBvbGljeSBpcyBub3QgY3JlYXRlZCBieSBST1MsIGl0IHdpbGwgYmUgaWdub3JlZCBkdXJpbmcgdXBkYXRlIGFuZCBkZWxldGUgc3RhZ2UuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBpZ25vcmVFeGlzdGluZz86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgZGVzY3JpcHRpb246IFNwZWNpZmllcyB0aGUgYXV0aG9yaXphdGlvbiBwb2xpY3kgZGVzY3JpcHRpb24sIGNvbnRhaW5pbmcgdXAgdG8gMTAyNCBjaGFyYWN0ZXJzLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcG9saWN5TmFtZTogU3BlY2lmaWVzIHRoZSBhdXRob3JpemF0aW9uIHBvbGljeSBuYW1lLCBjb250YWluaW5nIHVwIHRvIDEyOCBjaGFyYWN0ZXJzLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcG9saWN5TmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHBvbGljeURvY3VtZW50OiBBIHBvbGljeSBkb2N1bWVudCB0aGF0IGRlc2NyaWJlcyB3aGF0IGFjdGlvbnMgYXJlIGFsbG93ZWQgb24gd2hpY2ggcmVzb3VyY2VzLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcG9saWN5RG9jdW1lbnQ6IFJvc1VzZXIuUG9saWN5RG9jdW1lbnRQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFBvbGljaWVzUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFBvbGljaWVzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zVXNlcl9Qb2xpY2llc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaWdub3JlRXhpc3RpbmcnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLmlnbm9yZUV4aXN0aW5nKSk7XG4gICAgaWYocHJvcGVydGllcy5kZXNjcmlwdGlvbiAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSB8fCAodHlwZW9mIHByb3BlcnRpZXMuZGVzY3JpcHRpb24pID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZXNjcmlwdGlvbicsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5kZXNjcmlwdGlvbi5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG1heDogMTAyNCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVzY3JpcHRpb24nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZGVzY3JpcHRpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BvbGljeU5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucG9saWN5TmFtZSkpO1xuICAgIGlmKHByb3BlcnRpZXMucG9saWN5TmFtZSAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLnBvbGljeU5hbWUpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5wb2xpY3lOYW1lKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncG9saWN5TmFtZScsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5wb2xpY3lOYW1lLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbWF4OiAxMjgsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BvbGljeU5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucG9saWN5TmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncG9saWN5RG9jdW1lbnQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucG9saWN5RG9jdW1lbnQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BvbGljeURvY3VtZW50JywgUm9zVXNlcl9Qb2xpY3lEb2N1bWVudFByb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLnBvbGljeURvY3VtZW50KSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlBvbGljaWVzUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlJBTTo6VXNlci5Qb2xpY2llc2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUG9saWNpZXNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6UkFNOjpVc2VyLlBvbGljaWVzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1VzZXJQb2xpY2llc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NVc2VyX1BvbGljaWVzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnSWdub3JlRXhpc3RpbmcnOiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pZ25vcmVFeGlzdGluZyksXG4gICAgICAnRGVzY3JpcHRpb24nOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSxcbiAgICAgICdQb2xpY3lOYW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wb2xpY3lOYW1lKSxcbiAgICAgICdQb2xpY3lEb2N1bWVudCc6IHJvc1VzZXJQb2xpY3lEb2N1bWVudFByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnBvbGljeURvY3VtZW50KSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc1VzZXIge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFBvbGljeUF0dGFjaG1lbnRzUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGN1c3RvbTogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBjdXN0b20/OiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHN5c3RlbTogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzeXN0ZW0/OiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUG9saWN5QXR0YWNobWVudHNQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUG9saWN5QXR0YWNobWVudHNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NVc2VyX1BvbGljeUF0dGFjaG1lbnRzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgaWYocHJvcGVydGllcy5jdXN0b20gJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5jdXN0b20pIHx8ICh0eXBlb2YgcHJvcGVydGllcy5jdXN0b20pID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjdXN0b20nLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuY3VzdG9tLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbWF4OiAxMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY3VzdG9tJywgcm9zLmxpc3RWYWxpZGF0b3Iocm9zLnZhbGlkYXRlU3RyaW5nKSkocHJvcGVydGllcy5jdXN0b20pKTtcbiAgICBpZihwcm9wZXJ0aWVzLnN5c3RlbSAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLnN5c3RlbSkgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLnN5c3RlbSkgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N5c3RlbScsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5zeXN0ZW0ubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtYXg6IDIwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzeXN0ZW0nLCByb3MubGlzdFZhbGlkYXRvcihyb3MudmFsaWRhdGVTdHJpbmcpKShwcm9wZXJ0aWVzLnN5c3RlbSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJQb2xpY3lBdHRhY2htZW50c1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpSQU06OlVzZXIuUG9saWN5QXR0YWNobWVudHNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFBvbGljeUF0dGFjaG1lbnRzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlJBTTo6VXNlci5Qb2xpY3lBdHRhY2htZW50c2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NVc2VyUG9saWN5QXR0YWNobWVudHNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zVXNlcl9Qb2xpY3lBdHRhY2htZW50c1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ0N1c3RvbSc6IHJvcy5saXN0TWFwcGVyKHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLmN1c3RvbSksXG4gICAgICAnU3lzdGVtJzogcm9zLmxpc3RNYXBwZXIocm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMuc3lzdGVtKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc1VzZXIge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFBvbGljeURvY3VtZW50UHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHZlcnNpb246IFlvdSBjYW4gdXNlIHZlcnNpb25zIHRvIHRyYWNrIGNoYW5nZXMgdG8gYSBtYW5hZ2VkIHBvbGljeS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHZlcnNpb246IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzdGF0ZW1lbnQ6IEEgcG9saWN5IGNvbnNpc3RzIG9mIG9uZSBvciBtb3JlIHN0YXRlbWVudHMuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzdGF0ZW1lbnQ6IEFycmF5PFJvc1VzZXIuU3RhdGVtZW50UHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUG9saWN5RG9jdW1lbnRQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUG9saWN5RG9jdW1lbnRQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NVc2VyX1BvbGljeURvY3VtZW50UHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd2ZXJzaW9uJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnZlcnNpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZlcnNpb24nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudmVyc2lvbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3RhdGVtZW50Jywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnN0YXRlbWVudCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3RhdGVtZW50Jywgcm9zLmxpc3RWYWxpZGF0b3IoUm9zVXNlcl9TdGF0ZW1lbnRQcm9wZXJ0eVZhbGlkYXRvcikpKHByb3BlcnRpZXMuc3RhdGVtZW50KSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlBvbGljeURvY3VtZW50UHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlJBTTo6VXNlci5Qb2xpY3lEb2N1bWVudGAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUG9saWN5RG9jdW1lbnRQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6UkFNOjpVc2VyLlBvbGljeURvY3VtZW50YCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1VzZXJQb2xpY3lEb2N1bWVudFByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NVc2VyX1BvbGljeURvY3VtZW50UHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnVmVyc2lvbic6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudmVyc2lvbiksXG4gICAgICAnU3RhdGVtZW50Jzogcm9zLmxpc3RNYXBwZXIocm9zVXNlclN0YXRlbWVudFByb3BlcnR5VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5zdGF0ZW1lbnQpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zVXNlciB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgU3RhdGVtZW50UHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGNvbmRpdGlvbjogV2hhdCBjb25kaXRpb25zIHNob3VsZCBiZSBzYXRpc2ZpZWQuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBjb25kaXRpb24/OiB7IFtrZXk6IHN0cmluZ106IChhbnkgfCByb3MuSVJlc29sdmFibGUpIH0gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgYWN0aW9uOiBXaGF0IGFjdGlvbnMgeW91IHdpbGwgYWxsb3cuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBhY3Rpb24/OiBBcnJheTxhbnkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHJlc291cmNlOiBXaGljaCByZXNvdXJjZXMgeW91IGFsbG93IHRoZSBhY3Rpb24gb24uXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSByZXNvdXJjZT86IEFycmF5PGFueSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgZWZmZWN0OiBXaGF0IHRoZSBlZmZlY3Qgd2lsbCBiZSB3aGVuIHRoZSB1c2VyIHJlcXVlc3RzIGFjY2Vzcy1laXRoZXIgYWxsb3cgb3IgZGVueS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGVmZmVjdD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFN0YXRlbWVudFByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBTdGF0ZW1lbnRQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NVc2VyX1N0YXRlbWVudFByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY29uZGl0aW9uJywgcm9zLmhhc2hWYWxpZGF0b3Iocm9zLnZhbGlkYXRlQW55KSkocHJvcGVydGllcy5jb25kaXRpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FjdGlvbicsIHJvcy5saXN0VmFsaWRhdG9yKHJvcy52YWxpZGF0ZUFueSkpKHByb3BlcnRpZXMuYWN0aW9uKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZXNvdXJjZScsIHJvcy5saXN0VmFsaWRhdG9yKHJvcy52YWxpZGF0ZUFueSkpKHByb3BlcnRpZXMucmVzb3VyY2UpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2VmZmVjdCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5lZmZlY3QpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiU3RhdGVtZW50UHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlJBTTo6VXNlci5TdGF0ZW1lbnRgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFN0YXRlbWVudFByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpSQU06OlVzZXIuU3RhdGVtZW50YCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1VzZXJTdGF0ZW1lbnRQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zVXNlcl9TdGF0ZW1lbnRQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdDb25kaXRpb24nOiByb3MuaGFzaE1hcHBlcihyb3Mub2JqZWN0VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5jb25kaXRpb24pLFxuICAgICAgJ0FjdGlvbic6IHJvcy5saXN0TWFwcGVyKHJvcy5vYmplY3RUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLmFjdGlvbiksXG4gICAgICAnUmVzb3VyY2UnOiByb3MubGlzdE1hcHBlcihyb3Mub2JqZWN0VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5yZXNvdXJjZSksXG4gICAgICAnRWZmZWN0Jzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5lZmZlY3QpLFxuICAgIH07XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUm9zVXNlclRvR3JvdXBBZGRpdGlvbmAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1yYW0tdXNlcnRvZ3JvdXBhZGRpdGlvblxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc1VzZXJUb0dyb3VwQWRkaXRpb25Qcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZ3JvdXBOYW1lOiBTcGVjaWZpZXMgdGhlIGdyb3VwIG5hbWUsIGNvbnRhaW5pbmcgdXAgdG8gNjQgY2hhcmFjdGVycy5cbiAgICAgKi9cbiAgICByZWFkb25seSBncm91cE5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB1c2VyczogbGlzdCBuYW1lIG9mIGEgdXNlcnMgdG8gd2hpY2ggeW91IHdhbnQgdG8gYWRkIHRoZSBncm91cC5cbiAgICAgKi9cbiAgICByZWFkb25seSB1c2VyczogQXJyYXk8YW55IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NVc2VyVG9Hcm91cEFkZGl0aW9uUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1VzZXJUb0dyb3VwQWRkaXRpb25Qcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NVc2VyVG9Hcm91cEFkZGl0aW9uUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdncm91cE5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuZ3JvdXBOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdncm91cE5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZ3JvdXBOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd1c2VycycsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy51c2VycykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndXNlcnMnLCByb3MubGlzdFZhbGlkYXRvcihyb3MudmFsaWRhdGVBbnkpKShwcm9wZXJ0aWVzLnVzZXJzKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc1VzZXJUb0dyb3VwQWRkaXRpb25Qcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6UkFNOjpVc2VyVG9Hcm91cEFkZGl0aW9uYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NVc2VyVG9Hcm91cEFkZGl0aW9uUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlJBTTo6VXNlclRvR3JvdXBBZGRpdGlvbmAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NVc2VyVG9Hcm91cEFkZGl0aW9uUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NVc2VyVG9Hcm91cEFkZGl0aW9uUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgJ0dyb3VwTmFtZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZ3JvdXBOYW1lKSxcbiAgICAgICdVc2Vycyc6IHJvcy5saXN0TWFwcGVyKHJvcy5vYmplY3RUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLnVzZXJzKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBiYXNlIGVuY2Fwc3VsYXRpb24gYXJvdW5kIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpSQU06OlVzZXJUb0dyb3VwQWRkaXRpb25gLCB3aGljaCBpcyB1c2VkIHRvIGFkZCB1c2VycyB0byBhIFJBTSBncm91cC5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgZG9lcyBub3QgY29udGFpbiBhZGRpdGlvbmFsIGZ1bmN0aW9ucywgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgVXNlclRvR3JvdXBBZGRpdGlvbmAgY2xhc3MgaW5zdGVhZCBvZiB0aGlzIGNsYXNzIGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tcmFtLXVzZXJ0b2dyb3VwYWRkaXRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFJvc1VzZXJUb0dyb3VwQWRkaXRpb24gZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OlJBTTo6VXNlclRvR3JvdXBBZGRpdGlvblwiO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZ3JvdXBOYW1lOiBTcGVjaWZpZXMgdGhlIGdyb3VwIG5hbWUsIGNvbnRhaW5pbmcgdXAgdG8gNjQgY2hhcmFjdGVycy5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ3JvdXBOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdXNlcnM6IGxpc3QgbmFtZSBvZiBhIHVzZXJzIHRvIHdoaWNoIHlvdSB3YW50IHRvIGFkZCB0aGUgZ3JvdXAuXG4gICAgICovXG4gICAgcHVibGljIHVzZXJzOiBBcnJheTxhbnkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc1VzZXJUb0dyb3VwQWRkaXRpb25Qcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc1VzZXJUb0dyb3VwQWRkaXRpb24uUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmdyb3VwTmFtZSA9IHByb3BzLmdyb3VwTmFtZTtcbiAgICAgICAgdGhpcy51c2VycyA9IHByb3BzLnVzZXJzO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGdyb3VwTmFtZTogdGhpcy5ncm91cE5hbWUsXG4gICAgICAgICAgICB1c2VyczogdGhpcy51c2VycyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zVXNlclRvR3JvdXBBZGRpdGlvblByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuIl19