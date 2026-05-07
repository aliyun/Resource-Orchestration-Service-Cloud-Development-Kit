"use strict";
// Generated from the AliCloud ROS Resource Specification
Object.defineProperty(exports, "__esModule", { value: true });
exports.RosUserToGroupAddition = exports.RosUserProvision = exports.RosUser = exports.RosSCIMSynchronization = exports.RosSCIMServerCredential = exports.RosSAMLIdentityProvider = exports.RosPermissionPolicyToAccessConfigurationAddition = exports.RosGroup = exports.RosDirectory = exports.RosAccessConfigurationProvision = exports.RosAccessConfiguration = exports.RosAccessAssignment = void 0;
const ros = require("@alicloud/ros-cdk-core");
/**
 * Determine whether the given properties match those of a `RosAccessAssignmentProps`
 *
 * @param properties - the TypeScript properties of a `RosAccessAssignmentProps`
 *
 * @returns the result of the validation.
 */
function RosAccessAssignmentPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('directoryId', ros.requiredValidator)(properties.directoryId));
    errors.collect(ros.propertyValidator('directoryId', ros.validateString)(properties.directoryId));
    errors.collect(ros.propertyValidator('principalId', ros.requiredValidator)(properties.principalId));
    errors.collect(ros.propertyValidator('principalId', ros.validateString)(properties.principalId));
    errors.collect(ros.propertyValidator('targetType', ros.requiredValidator)(properties.targetType));
    if (properties.targetType && (typeof properties.targetType) !== 'object') {
        errors.collect(ros.propertyValidator('targetType', ros.validateAllowedValues)({
            data: properties.targetType,
            allowedValues: ["RD-Account"],
        }));
    }
    errors.collect(ros.propertyValidator('targetType', ros.validateString)(properties.targetType));
    errors.collect(ros.propertyValidator('accessConfigurationId', ros.requiredValidator)(properties.accessConfigurationId));
    errors.collect(ros.propertyValidator('accessConfigurationId', ros.validateString)(properties.accessConfigurationId));
    errors.collect(ros.propertyValidator('principalType', ros.requiredValidator)(properties.principalType));
    if (properties.principalType && (typeof properties.principalType) !== 'object') {
        errors.collect(ros.propertyValidator('principalType', ros.validateAllowedValues)({
            data: properties.principalType,
            allowedValues: ["User", "Group"],
        }));
    }
    errors.collect(ros.propertyValidator('principalType', ros.validateString)(properties.principalType));
    errors.collect(ros.propertyValidator('targetId', ros.requiredValidator)(properties.targetId));
    errors.collect(ros.propertyValidator('targetId', ros.validateString)(properties.targetId));
    return errors.wrap('supplied properties not correct for "RosAccessAssignmentProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CloudSSO::AccessAssignment` resource
 *
 * @param properties - the TypeScript properties of a `RosAccessAssignmentProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CloudSSO::AccessAssignment` resource.
 */
// @ts-ignore TS6133
function rosAccessAssignmentPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosAccessAssignmentPropsValidator(properties).assertSuccess();
    }
    return {
        'AccessConfigurationId': ros.stringToRosTemplate(properties.accessConfigurationId),
        'DirectoryId': ros.stringToRosTemplate(properties.directoryId),
        'PrincipalId': ros.stringToRosTemplate(properties.principalId),
        'PrincipalType': ros.stringToRosTemplate(properties.principalType),
        'TargetId': ros.stringToRosTemplate(properties.targetId),
        'TargetType': ros.stringToRosTemplate(properties.targetType),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CloudSSO::AccessAssignment`.
 * @Note This class does not contain additional functions, so it is recommended to use the `AccessAssignment` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-accessassignment
 */
class RosAccessAssignment extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosAccessAssignment.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.accessConfigurationId = props.accessConfigurationId;
        this.directoryId = props.directoryId;
        this.principalId = props.principalId;
        this.principalType = props.principalType;
        this.targetId = props.targetId;
        this.targetType = props.targetType;
    }
    get rosProperties() {
        return {
            accessConfigurationId: this.accessConfigurationId,
            directoryId: this.directoryId,
            principalId: this.principalId,
            principalType: this.principalType,
            targetId: this.targetId,
            targetType: this.targetType,
        };
    }
    renderProperties(props) {
        return rosAccessAssignmentPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosAccessAssignment = RosAccessAssignment;
/**
 * The resource type name for this resource class.
 */
RosAccessAssignment.ROS_RESOURCE_TYPE_NAME = "ALIYUN::CloudSSO::AccessAssignment";
/**
 * Determine whether the given properties match those of a `RosAccessConfigurationProps`
 *
 * @param properties - the TypeScript properties of a `RosAccessConfigurationProps`
 *
 * @returns the result of the validation.
 */
function RosAccessConfigurationPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('accessConfigurationName', ros.requiredValidator)(properties.accessConfigurationName));
    if (properties.accessConfigurationName && (typeof properties.accessConfigurationName) !== 'object') {
        errors.collect(ros.propertyValidator('accessConfigurationName', ros.validateAllowedPattern)({
            data: properties.accessConfigurationName,
            reg: /^[a-zA-Z0-9-]{1,32}$/
        }));
    }
    errors.collect(ros.propertyValidator('accessConfigurationName', ros.validateString)(properties.accessConfigurationName));
    if (properties.sessionDuration && (typeof properties.sessionDuration) !== 'object') {
        errors.collect(ros.propertyValidator('sessionDuration', ros.validateRange)({
            data: properties.sessionDuration,
            min: 900,
            max: 43200,
        }));
    }
    errors.collect(ros.propertyValidator('sessionDuration', ros.validateNumber)(properties.sessionDuration));
    errors.collect(ros.propertyValidator('directoryId', ros.requiredValidator)(properties.directoryId));
    errors.collect(ros.propertyValidator('directoryId', ros.validateString)(properties.directoryId));
    if (properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: undefined,
            max: 1024,
        }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('relayState', ros.validateString)(properties.relayState));
    return errors.wrap('supplied properties not correct for "RosAccessConfigurationProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CloudSSO::AccessConfiguration` resource
 *
 * @param properties - the TypeScript properties of a `RosAccessConfigurationProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CloudSSO::AccessConfiguration` resource.
 */
// @ts-ignore TS6133
function rosAccessConfigurationPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosAccessConfigurationPropsValidator(properties).assertSuccess();
    }
    return {
        'AccessConfigurationName': ros.stringToRosTemplate(properties.accessConfigurationName),
        'DirectoryId': ros.stringToRosTemplate(properties.directoryId),
        'Description': ros.stringToRosTemplate(properties.description),
        'RelayState': ros.stringToRosTemplate(properties.relayState),
        'SessionDuration': ros.numberToRosTemplate(properties.sessionDuration),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CloudSSO::AccessConfiguration`, which is used to create an access configuration.
 * @Note This class does not contain additional functions, so it is recommended to use the `AccessConfiguration` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-accessconfiguration
 */
class RosAccessConfiguration extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosAccessConfiguration.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAccessConfigurationId = this.getAtt('AccessConfigurationId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.accessConfigurationName = props.accessConfigurationName;
        this.directoryId = props.directoryId;
        this.description = props.description;
        this.relayState = props.relayState;
        this.sessionDuration = props.sessionDuration;
    }
    get rosProperties() {
        return {
            accessConfigurationName: this.accessConfigurationName,
            directoryId: this.directoryId,
            description: this.description,
            relayState: this.relayState,
            sessionDuration: this.sessionDuration,
        };
    }
    renderProperties(props) {
        return rosAccessConfigurationPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosAccessConfiguration = RosAccessConfiguration;
/**
 * The resource type name for this resource class.
 */
RosAccessConfiguration.ROS_RESOURCE_TYPE_NAME = "ALIYUN::CloudSSO::AccessConfiguration";
/**
 * Determine whether the given properties match those of a `RosAccessConfigurationProvisionProps`
 *
 * @param properties - the TypeScript properties of a `RosAccessConfigurationProvisionProps`
 *
 * @returns the result of the validation.
 */
function RosAccessConfigurationProvisionPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('directoryId', ros.requiredValidator)(properties.directoryId));
    errors.collect(ros.propertyValidator('directoryId', ros.validateString)(properties.directoryId));
    errors.collect(ros.propertyValidator('targetType', ros.requiredValidator)(properties.targetType));
    if (properties.targetType && (typeof properties.targetType) !== 'object') {
        errors.collect(ros.propertyValidator('targetType', ros.validateAllowedValues)({
            data: properties.targetType,
            allowedValues: ["RD-Account"],
        }));
    }
    errors.collect(ros.propertyValidator('targetType', ros.validateString)(properties.targetType));
    errors.collect(ros.propertyValidator('accessConfigurationId', ros.requiredValidator)(properties.accessConfigurationId));
    errors.collect(ros.propertyValidator('accessConfigurationId', ros.validateString)(properties.accessConfigurationId));
    errors.collect(ros.propertyValidator('targetId', ros.requiredValidator)(properties.targetId));
    errors.collect(ros.propertyValidator('targetId', ros.validateString)(properties.targetId));
    return errors.wrap('supplied properties not correct for "RosAccessConfigurationProvisionProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CloudSSO::AccessConfigurationProvision` resource
 *
 * @param properties - the TypeScript properties of a `RosAccessConfigurationProvisionProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CloudSSO::AccessConfigurationProvision` resource.
 */
// @ts-ignore TS6133
function rosAccessConfigurationProvisionPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosAccessConfigurationProvisionPropsValidator(properties).assertSuccess();
    }
    return {
        'AccessConfigurationId': ros.stringToRosTemplate(properties.accessConfigurationId),
        'DirectoryId': ros.stringToRosTemplate(properties.directoryId),
        'TargetId': ros.stringToRosTemplate(properties.targetId),
        'TargetType': ros.stringToRosTemplate(properties.targetType),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CloudSSO::AccessConfigurationProvision`, which is used to provision an access configuration for an account in your resource directory.
 * @Note This class does not contain additional functions, so it is recommended to use the `AccessConfigurationProvision` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-accessconfigurationprovision
 */
class RosAccessConfigurationProvision extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosAccessConfigurationProvision.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.accessConfigurationId = props.accessConfigurationId;
        this.directoryId = props.directoryId;
        this.targetId = props.targetId;
        this.targetType = props.targetType;
    }
    get rosProperties() {
        return {
            accessConfigurationId: this.accessConfigurationId,
            directoryId: this.directoryId,
            targetId: this.targetId,
            targetType: this.targetType,
        };
    }
    renderProperties(props) {
        return rosAccessConfigurationProvisionPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosAccessConfigurationProvision = RosAccessConfigurationProvision;
/**
 * The resource type name for this resource class.
 */
RosAccessConfigurationProvision.ROS_RESOURCE_TYPE_NAME = "ALIYUN::CloudSSO::AccessConfigurationProvision";
/**
 * Determine whether the given properties match those of a `RosDirectoryProps`
 *
 * @param properties - the TypeScript properties of a `RosDirectoryProps`
 *
 * @returns the result of the validation.
 */
function RosDirectoryPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('directoryName', ros.validateString)(properties.directoryName));
    return errors.wrap('supplied properties not correct for "RosDirectoryProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CloudSSO::Directory` resource
 *
 * @param properties - the TypeScript properties of a `RosDirectoryProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CloudSSO::Directory` resource.
 */
// @ts-ignore TS6133
function rosDirectoryPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosDirectoryPropsValidator(properties).assertSuccess();
    }
    return {
        'DirectoryName': ros.stringToRosTemplate(properties.directoryName),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CloudSSO::Directory`, which is used to create a directory.
 * @Note This class does not contain additional functions, so it is recommended to use the `Directory` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-directory
 */
class RosDirectory extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosDirectory.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDirectoryId = this.getAtt('DirectoryId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.directoryName = props.directoryName;
    }
    get rosProperties() {
        return {
            directoryName: this.directoryName,
        };
    }
    renderProperties(props) {
        return rosDirectoryPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosDirectory = RosDirectory;
/**
 * The resource type name for this resource class.
 */
RosDirectory.ROS_RESOURCE_TYPE_NAME = "ALIYUN::CloudSSO::Directory";
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
    errors.collect(ros.propertyValidator('groupName', ros.requiredValidator)(properties.groupName));
    if (properties.groupName && (typeof properties.groupName) !== 'object') {
        errors.collect(ros.propertyValidator('groupName', ros.validateAllowedPattern)({
            data: properties.groupName,
            reg: /^[a-zA-Z0-9._-]{1,128}$/
        }));
    }
    errors.collect(ros.propertyValidator('groupName', ros.validateString)(properties.groupName));
    errors.collect(ros.propertyValidator('directoryId', ros.requiredValidator)(properties.directoryId));
    errors.collect(ros.propertyValidator('directoryId', ros.validateString)(properties.directoryId));
    if (properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: undefined,
            max: 1024,
        }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    return errors.wrap('supplied properties not correct for "RosGroupProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CloudSSO::Group` resource
 *
 * @param properties - the TypeScript properties of a `RosGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CloudSSO::Group` resource.
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
        'DirectoryId': ros.stringToRosTemplate(properties.directoryId),
        'GroupName': ros.stringToRosTemplate(properties.groupName),
        'Description': ros.stringToRosTemplate(properties.description),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CloudSSO::Group`, which is used to create a group in CloudSSO.
 * @Note This class does not contain additional functions, so it is recommended to use the `Group` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-group
 */
class RosGroup extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrGroupId = this.getAtt('GroupId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.directoryId = props.directoryId;
        this.groupName = props.groupName;
        this.description = props.description;
    }
    get rosProperties() {
        return {
            directoryId: this.directoryId,
            groupName: this.groupName,
            description: this.description,
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
RosGroup.ROS_RESOURCE_TYPE_NAME = "ALIYUN::CloudSSO::Group";
/**
 * Determine whether the given properties match those of a `RosPermissionPolicyToAccessConfigurationAdditionProps`
 *
 * @param properties - the TypeScript properties of a `RosPermissionPolicyToAccessConfigurationAdditionProps`
 *
 * @returns the result of the validation.
 */
function RosPermissionPolicyToAccessConfigurationAdditionPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('inlinePolicyDocument', ros.hashValidator(ros.validateAny))(properties.inlinePolicyDocument));
    errors.collect(ros.propertyValidator('directoryId', ros.requiredValidator)(properties.directoryId));
    errors.collect(ros.propertyValidator('directoryId', ros.validateString)(properties.directoryId));
    errors.collect(ros.propertyValidator('permissionPolicyName', ros.requiredValidator)(properties.permissionPolicyName));
    errors.collect(ros.propertyValidator('permissionPolicyName', ros.validateString)(properties.permissionPolicyName));
    errors.collect(ros.propertyValidator('permissionPolicyType', ros.requiredValidator)(properties.permissionPolicyType));
    if (properties.permissionPolicyType && (typeof properties.permissionPolicyType) !== 'object') {
        errors.collect(ros.propertyValidator('permissionPolicyType', ros.validateAllowedValues)({
            data: properties.permissionPolicyType,
            allowedValues: ["System", "Inline"],
        }));
    }
    errors.collect(ros.propertyValidator('permissionPolicyType', ros.validateString)(properties.permissionPolicyType));
    errors.collect(ros.propertyValidator('accessConfigurationId', ros.requiredValidator)(properties.accessConfigurationId));
    errors.collect(ros.propertyValidator('accessConfigurationId', ros.validateString)(properties.accessConfigurationId));
    return errors.wrap('supplied properties not correct for "RosPermissionPolicyToAccessConfigurationAdditionProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CloudSSO::PermissionPolicyToAccessConfigurationAddition` resource
 *
 * @param properties - the TypeScript properties of a `RosPermissionPolicyToAccessConfigurationAdditionProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CloudSSO::PermissionPolicyToAccessConfigurationAddition` resource.
 */
// @ts-ignore TS6133
function rosPermissionPolicyToAccessConfigurationAdditionPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosPermissionPolicyToAccessConfigurationAdditionPropsValidator(properties).assertSuccess();
    }
    return {
        'AccessConfigurationId': ros.stringToRosTemplate(properties.accessConfigurationId),
        'DirectoryId': ros.stringToRosTemplate(properties.directoryId),
        'PermissionPolicyName': ros.stringToRosTemplate(properties.permissionPolicyName),
        'PermissionPolicyType': ros.stringToRosTemplate(properties.permissionPolicyType),
        'InlinePolicyDocument': ros.hashMapper(ros.objectToRosTemplate)(properties.inlinePolicyDocument),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CloudSSO::PermissionPolicyToAccessConfigurationAddition`, which is used to add a policy to an access configuration.
 * @Note This class does not contain additional functions, so it is recommended to use the `PermissionPolicyToAccessConfigurationAddition` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-permissionpolicytoaccessconfigurationaddition
 */
class RosPermissionPolicyToAccessConfigurationAddition extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosPermissionPolicyToAccessConfigurationAddition.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.accessConfigurationId = props.accessConfigurationId;
        this.directoryId = props.directoryId;
        this.permissionPolicyName = props.permissionPolicyName;
        this.permissionPolicyType = props.permissionPolicyType;
        this.inlinePolicyDocument = props.inlinePolicyDocument;
    }
    get rosProperties() {
        return {
            accessConfigurationId: this.accessConfigurationId,
            directoryId: this.directoryId,
            permissionPolicyName: this.permissionPolicyName,
            permissionPolicyType: this.permissionPolicyType,
            inlinePolicyDocument: this.inlinePolicyDocument,
        };
    }
    renderProperties(props) {
        return rosPermissionPolicyToAccessConfigurationAdditionPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosPermissionPolicyToAccessConfigurationAddition = RosPermissionPolicyToAccessConfigurationAddition;
/**
 * The resource type name for this resource class.
 */
RosPermissionPolicyToAccessConfigurationAddition.ROS_RESOURCE_TYPE_NAME = "ALIYUN::CloudSSO::PermissionPolicyToAccessConfigurationAddition";
/**
 * Determine whether the given properties match those of a `RosSAMLIdentityProviderProps`
 *
 * @param properties - the TypeScript properties of a `RosSAMLIdentityProviderProps`
 *
 * @returns the result of the validation.
 */
function RosSAMLIdentityProviderPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('entityId', ros.validateString)(properties.entityId));
    if (properties.ssoStatus && (typeof properties.ssoStatus) !== 'object') {
        errors.collect(ros.propertyValidator('ssoStatus', ros.validateAllowedValues)({
            data: properties.ssoStatus,
            allowedValues: ["Enabled", "Disabled"],
        }));
    }
    errors.collect(ros.propertyValidator('ssoStatus', ros.validateString)(properties.ssoStatus));
    errors.collect(ros.propertyValidator('directoryId', ros.requiredValidator)(properties.directoryId));
    errors.collect(ros.propertyValidator('directoryId', ros.validateString)(properties.directoryId));
    errors.collect(ros.propertyValidator('encodedMetadataDocument', ros.validateString)(properties.encodedMetadataDocument));
    errors.collect(ros.propertyValidator('wantRequestSigned', ros.validateBoolean)(properties.wantRequestSigned));
    errors.collect(ros.propertyValidator('loginUrl', ros.validateString)(properties.loginUrl));
    errors.collect(ros.propertyValidator('x509Certificate', ros.validateString)(properties.x509Certificate));
    return errors.wrap('supplied properties not correct for "RosSAMLIdentityProviderProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CloudSSO::SAMLIdentityProvider` resource
 *
 * @param properties - the TypeScript properties of a `RosSAMLIdentityProviderProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CloudSSO::SAMLIdentityProvider` resource.
 */
// @ts-ignore TS6133
function rosSAMLIdentityProviderPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosSAMLIdentityProviderPropsValidator(properties).assertSuccess();
    }
    return {
        'DirectoryId': ros.stringToRosTemplate(properties.directoryId),
        'EncodedMetadataDocument': ros.stringToRosTemplate(properties.encodedMetadataDocument),
        'EntityId': ros.stringToRosTemplate(properties.entityId),
        'LoginUrl': ros.stringToRosTemplate(properties.loginUrl),
        'SSOStatus': ros.stringToRosTemplate(properties.ssoStatus),
        'WantRequestSigned': ros.booleanToRosTemplate(properties.wantRequestSigned),
        'X509Certificate': ros.stringToRosTemplate(properties.x509Certificate),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CloudSSO::SAMLIdentityProvider`, which is used to configure the information about a Security Assertion Markup Language (SAML) identity provider (IdP).
 * @Note This class does not contain additional functions, so it is recommended to use the `SAMLIdentityProvider` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-samlidentityprovider
 */
class RosSAMLIdentityProvider extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosSAMLIdentityProvider.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.directoryId = props.directoryId;
        this.encodedMetadataDocument = props.encodedMetadataDocument;
        this.entityId = props.entityId;
        this.loginUrl = props.loginUrl;
        this.ssoStatus = props.ssoStatus;
        this.wantRequestSigned = props.wantRequestSigned;
        this.x509Certificate = props.x509Certificate;
    }
    get rosProperties() {
        return {
            directoryId: this.directoryId,
            encodedMetadataDocument: this.encodedMetadataDocument,
            entityId: this.entityId,
            loginUrl: this.loginUrl,
            ssoStatus: this.ssoStatus,
            wantRequestSigned: this.wantRequestSigned,
            x509Certificate: this.x509Certificate,
        };
    }
    renderProperties(props) {
        return rosSAMLIdentityProviderPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosSAMLIdentityProvider = RosSAMLIdentityProvider;
/**
 * The resource type name for this resource class.
 */
RosSAMLIdentityProvider.ROS_RESOURCE_TYPE_NAME = "ALIYUN::CloudSSO::SAMLIdentityProvider";
/**
 * Determine whether the given properties match those of a `RosSCIMServerCredentialProps`
 *
 * @param properties - the TypeScript properties of a `RosSCIMServerCredentialProps`
 *
 * @returns the result of the validation.
 */
function RosSCIMServerCredentialPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.status && (typeof properties.status) !== 'object') {
        errors.collect(ros.propertyValidator('status', ros.validateAllowedValues)({
            data: properties.status,
            allowedValues: ["Enabled", "Disabled"],
        }));
    }
    errors.collect(ros.propertyValidator('status', ros.validateString)(properties.status));
    errors.collect(ros.propertyValidator('directoryId', ros.requiredValidator)(properties.directoryId));
    errors.collect(ros.propertyValidator('directoryId', ros.validateString)(properties.directoryId));
    return errors.wrap('supplied properties not correct for "RosSCIMServerCredentialProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CloudSSO::SCIMServerCredential` resource
 *
 * @param properties - the TypeScript properties of a `RosSCIMServerCredentialProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CloudSSO::SCIMServerCredential` resource.
 */
// @ts-ignore TS6133
function rosSCIMServerCredentialPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosSCIMServerCredentialPropsValidator(properties).assertSuccess();
    }
    return {
        'DirectoryId': ros.stringToRosTemplate(properties.directoryId),
        'Status': ros.stringToRosTemplate(properties.status),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CloudSSO::SCIMServerCredential`.
 * @Note This class does not contain additional functions, so it is recommended to use the `SCIMServerCredential` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-scimservercredential
 */
class RosSCIMServerCredential extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosSCIMServerCredential.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCredentialId = this.getAtt('CredentialId');
        this.attrCredentialSecret = this.getAtt('CredentialSecret');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.directoryId = props.directoryId;
        this.status = props.status;
    }
    get rosProperties() {
        return {
            directoryId: this.directoryId,
            status: this.status,
        };
    }
    renderProperties(props) {
        return rosSCIMServerCredentialPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosSCIMServerCredential = RosSCIMServerCredential;
/**
 * The resource type name for this resource class.
 */
RosSCIMServerCredential.ROS_RESOURCE_TYPE_NAME = "ALIYUN::CloudSSO::SCIMServerCredential";
/**
 * Determine whether the given properties match those of a `RosSCIMSynchronizationProps`
 *
 * @param properties - the TypeScript properties of a `RosSCIMSynchronizationProps`
 *
 * @returns the result of the validation.
 */
function RosSCIMSynchronizationPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('directoryId', ros.requiredValidator)(properties.directoryId));
    errors.collect(ros.propertyValidator('directoryId', ros.validateString)(properties.directoryId));
    if (properties.scimSynchronizationStatus && (typeof properties.scimSynchronizationStatus) !== 'object') {
        errors.collect(ros.propertyValidator('scimSynchronizationStatus', ros.validateAllowedValues)({
            data: properties.scimSynchronizationStatus,
            allowedValues: ["Enabled", "Disabled"],
        }));
    }
    errors.collect(ros.propertyValidator('scimSynchronizationStatus', ros.validateString)(properties.scimSynchronizationStatus));
    return errors.wrap('supplied properties not correct for "RosSCIMSynchronizationProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CloudSSO::SCIMSynchronization` resource
 *
 * @param properties - the TypeScript properties of a `RosSCIMSynchronizationProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CloudSSO::SCIMSynchronization` resource.
 */
// @ts-ignore TS6133
function rosSCIMSynchronizationPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosSCIMSynchronizationPropsValidator(properties).assertSuccess();
    }
    return {
        'DirectoryId': ros.stringToRosTemplate(properties.directoryId),
        'SCIMSynchronizationStatus': ros.stringToRosTemplate(properties.scimSynchronizationStatus),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CloudSSO::SCIMSynchronization`.
 * @Note This class does not contain additional functions, so it is recommended to use the `SCIMSynchronization` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-scimsynchronization
 */
class RosSCIMSynchronization extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosSCIMSynchronization.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.directoryId = props.directoryId;
        this.scimSynchronizationStatus = props.scimSynchronizationStatus;
    }
    get rosProperties() {
        return {
            directoryId: this.directoryId,
            scimSynchronizationStatus: this.scimSynchronizationStatus,
        };
    }
    renderProperties(props) {
        return rosSCIMSynchronizationPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosSCIMSynchronization = RosSCIMSynchronization;
/**
 * The resource type name for this resource class.
 */
RosSCIMSynchronization.ROS_RESOURCE_TYPE_NAME = "ALIYUN::CloudSSO::SCIMSynchronization";
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
    if (properties.status && (typeof properties.status) !== 'object') {
        errors.collect(ros.propertyValidator('status', ros.validateAllowedValues)({
            data: properties.status,
            allowedValues: ["Enabled", "Disabled"],
        }));
    }
    errors.collect(ros.propertyValidator('status', ros.validateString)(properties.status));
    errors.collect(ros.propertyValidator('directoryId', ros.requiredValidator)(properties.directoryId));
    errors.collect(ros.propertyValidator('directoryId', ros.validateString)(properties.directoryId));
    errors.collect(ros.propertyValidator('userName', ros.requiredValidator)(properties.userName));
    if (properties.userName && (typeof properties.userName) !== 'object') {
        errors.collect(ros.propertyValidator('userName', ros.validateAllowedPattern)({
            data: properties.userName,
            reg: /^[a-zA-Z0-9@._-]{1,64}$/
        }));
    }
    errors.collect(ros.propertyValidator('userName', ros.validateString)(properties.userName));
    if (properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: undefined,
            max: 1024,
        }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    if (properties.email && (Array.isArray(properties.email) || (typeof properties.email) === 'string')) {
        errors.collect(ros.propertyValidator('email', ros.validateLength)({
            data: properties.email.length,
            min: undefined,
            max: 128,
        }));
    }
    errors.collect(ros.propertyValidator('email', ros.validateString)(properties.email));
    if (properties.firstName && (Array.isArray(properties.firstName) || (typeof properties.firstName) === 'string')) {
        errors.collect(ros.propertyValidator('firstName', ros.validateLength)({
            data: properties.firstName.length,
            min: undefined,
            max: 64,
        }));
    }
    errors.collect(ros.propertyValidator('firstName', ros.validateString)(properties.firstName));
    if (properties.displayName && (Array.isArray(properties.displayName) || (typeof properties.displayName) === 'string')) {
        errors.collect(ros.propertyValidator('displayName', ros.validateLength)({
            data: properties.displayName.length,
            min: undefined,
            max: 256,
        }));
    }
    errors.collect(ros.propertyValidator('displayName', ros.validateString)(properties.displayName));
    if (properties.lastName && (Array.isArray(properties.lastName) || (typeof properties.lastName) === 'string')) {
        errors.collect(ros.propertyValidator('lastName', ros.validateLength)({
            data: properties.lastName.length,
            min: undefined,
            max: 64,
        }));
    }
    errors.collect(ros.propertyValidator('lastName', ros.validateString)(properties.lastName));
    return errors.wrap('supplied properties not correct for "RosUserProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CloudSSO::User` resource
 *
 * @param properties - the TypeScript properties of a `RosUserProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CloudSSO::User` resource.
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
        'DirectoryId': ros.stringToRosTemplate(properties.directoryId),
        'UserName': ros.stringToRosTemplate(properties.userName),
        'Description': ros.stringToRosTemplate(properties.description),
        'DisplayName': ros.stringToRosTemplate(properties.displayName),
        'Email': ros.stringToRosTemplate(properties.email),
        'FirstName': ros.stringToRosTemplate(properties.firstName),
        'LastName': ros.stringToRosTemplate(properties.lastName),
        'Status': ros.stringToRosTemplate(properties.status),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CloudSSO::User`, which is used to create a user.
 * @Note This class does not contain additional functions, so it is recommended to use the `User` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-user
 */
class RosUser extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosUser.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrUserId = this.getAtt('UserId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.directoryId = props.directoryId;
        this.userName = props.userName;
        this.description = props.description;
        this.displayName = props.displayName;
        this.email = props.email;
        this.firstName = props.firstName;
        this.lastName = props.lastName;
        this.status = props.status;
    }
    get rosProperties() {
        return {
            directoryId: this.directoryId,
            userName: this.userName,
            description: this.description,
            displayName: this.displayName,
            email: this.email,
            firstName: this.firstName,
            lastName: this.lastName,
            status: this.status,
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
RosUser.ROS_RESOURCE_TYPE_NAME = "ALIYUN::CloudSSO::User";
/**
 * Determine whether the given properties match those of a `RosUserProvisionProps`
 *
 * @param properties - the TypeScript properties of a `RosUserProvisionProps`
 *
 * @returns the result of the validation.
 */
function RosUserProvisionPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('directoryId', ros.requiredValidator)(properties.directoryId));
    errors.collect(ros.propertyValidator('directoryId', ros.validateString)(properties.directoryId));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('principalId', ros.requiredValidator)(properties.principalId));
    errors.collect(ros.propertyValidator('principalId', ros.validateString)(properties.principalId));
    errors.collect(ros.propertyValidator('targetType', ros.requiredValidator)(properties.targetType));
    if (properties.targetType && (typeof properties.targetType) !== 'object') {
        errors.collect(ros.propertyValidator('targetType', ros.validateAllowedValues)({
            data: properties.targetType,
            allowedValues: ["RD-Account"],
        }));
    }
    errors.collect(ros.propertyValidator('targetType', ros.validateString)(properties.targetType));
    errors.collect(ros.propertyValidator('duplicationStrategy', ros.requiredValidator)(properties.duplicationStrategy));
    if (properties.duplicationStrategy && (typeof properties.duplicationStrategy) !== 'object') {
        errors.collect(ros.propertyValidator('duplicationStrategy', ros.validateAllowedValues)({
            data: properties.duplicationStrategy,
            allowedValues: ["KeepBoth", "TakeOver"],
        }));
    }
    errors.collect(ros.propertyValidator('duplicationStrategy', ros.validateString)(properties.duplicationStrategy));
    errors.collect(ros.propertyValidator('deletionStrategy', ros.requiredValidator)(properties.deletionStrategy));
    if (properties.deletionStrategy && (typeof properties.deletionStrategy) !== 'object') {
        errors.collect(ros.propertyValidator('deletionStrategy', ros.validateAllowedValues)({
            data: properties.deletionStrategy,
            allowedValues: ["Delete", "Keep"],
        }));
    }
    errors.collect(ros.propertyValidator('deletionStrategy', ros.validateString)(properties.deletionStrategy));
    errors.collect(ros.propertyValidator('principalType', ros.requiredValidator)(properties.principalType));
    if (properties.principalType && (typeof properties.principalType) !== 'object') {
        errors.collect(ros.propertyValidator('principalType', ros.validateAllowedValues)({
            data: properties.principalType,
            allowedValues: ["User", "Group"],
        }));
    }
    errors.collect(ros.propertyValidator('principalType', ros.validateString)(properties.principalType));
    errors.collect(ros.propertyValidator('targetId', ros.requiredValidator)(properties.targetId));
    errors.collect(ros.propertyValidator('targetId', ros.validateString)(properties.targetId));
    return errors.wrap('supplied properties not correct for "RosUserProvisionProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CloudSSO::UserProvision` resource
 *
 * @param properties - the TypeScript properties of a `RosUserProvisionProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CloudSSO::UserProvision` resource.
 */
// @ts-ignore TS6133
function rosUserProvisionPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosUserProvisionPropsValidator(properties).assertSuccess();
    }
    return {
        'DeletionStrategy': ros.stringToRosTemplate(properties.deletionStrategy),
        'DirectoryId': ros.stringToRosTemplate(properties.directoryId),
        'DuplicationStrategy': ros.stringToRosTemplate(properties.duplicationStrategy),
        'PrincipalId': ros.stringToRosTemplate(properties.principalId),
        'PrincipalType': ros.stringToRosTemplate(properties.principalType),
        'TargetId': ros.stringToRosTemplate(properties.targetId),
        'TargetType': ros.stringToRosTemplate(properties.targetType),
        'Description': ros.stringToRosTemplate(properties.description),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CloudSSO::UserProvision`, which is used to create a Resource Access Management (RAM) user provisioning.
 * @Note This class does not contain additional functions, so it is recommended to use the `UserProvision` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-userprovision
 */
class RosUserProvision extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosUserProvision.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrUserProvisionId = this.getAtt('UserProvisionId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.deletionStrategy = props.deletionStrategy;
        this.directoryId = props.directoryId;
        this.duplicationStrategy = props.duplicationStrategy;
        this.principalId = props.principalId;
        this.principalType = props.principalType;
        this.targetId = props.targetId;
        this.targetType = props.targetType;
        this.description = props.description;
    }
    get rosProperties() {
        return {
            deletionStrategy: this.deletionStrategy,
            directoryId: this.directoryId,
            duplicationStrategy: this.duplicationStrategy,
            principalId: this.principalId,
            principalType: this.principalType,
            targetId: this.targetId,
            targetType: this.targetType,
            description: this.description,
        };
    }
    renderProperties(props) {
        return rosUserProvisionPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosUserProvision = RosUserProvision;
/**
 * The resource type name for this resource class.
 */
RosUserProvision.ROS_RESOURCE_TYPE_NAME = "ALIYUN::CloudSSO::UserProvision";
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
    errors.collect(ros.propertyValidator('directoryId', ros.requiredValidator)(properties.directoryId));
    errors.collect(ros.propertyValidator('directoryId', ros.validateString)(properties.directoryId));
    errors.collect(ros.propertyValidator('userId', ros.requiredValidator)(properties.userId));
    errors.collect(ros.propertyValidator('userId', ros.validateString)(properties.userId));
    errors.collect(ros.propertyValidator('groupId', ros.requiredValidator)(properties.groupId));
    errors.collect(ros.propertyValidator('groupId', ros.validateString)(properties.groupId));
    return errors.wrap('supplied properties not correct for "RosUserToGroupAdditionProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CloudSSO::UserToGroupAddition` resource
 *
 * @param properties - the TypeScript properties of a `RosUserToGroupAdditionProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CloudSSO::UserToGroupAddition` resource.
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
        'DirectoryId': ros.stringToRosTemplate(properties.directoryId),
        'GroupId': ros.stringToRosTemplate(properties.groupId),
        'UserId': ros.stringToRosTemplate(properties.userId),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CloudSSO::UserToGroupAddition`, which is used to add a user to a group.
 * @Note This class does not contain additional functions, so it is recommended to use the `UserToGroupAddition` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-usertogroupaddition
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
        this.directoryId = props.directoryId;
        this.groupId = props.groupId;
        this.userId = props.userId;
    }
    get rosProperties() {
        return {
            directoryId: this.directoryId,
            groupId: this.groupId,
            userId: this.userId,
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
RosUserToGroupAddition.ROS_RESOURCE_TYPE_NAME = "ALIYUN::CloudSSO::UserToGroupAddition";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWRzc28uZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2xvdWRzc28uZ2VuZXJhdGVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx5REFBeUQ7OztBQUV6RCw4Q0FBOEM7QUF5QzlDOzs7Ozs7R0FNRztBQUNILFNBQVMsaUNBQWlDLENBQUMsVUFBZTtJQUN0RCxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUFFLE9BQU8sR0FBRyxDQUFDLGtCQUFrQixDQUFDO0tBQUU7SUFDbkUsTUFBTSxNQUFNLEdBQUcsSUFBSSxHQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDcEcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUNqRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDcEcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUNqRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENB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QyxPQUFPLENBQUM7UUFDdEQsUUFBUSxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO0tBQ3JELENBQUM7QUFDTixDQUFDO0FBRUQ7Ozs7R0FJRztBQUNILE1BQWEsc0JBQXVCLFNBQVEsR0FBRyxDQUFDLFdBQVc7SUF3QnZEOzs7O09BSUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQWtDLEVBQUUsZ0NBQXlDO1FBQ3ZILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLHNCQUFzQixDQUFDLHNCQUFzQixFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBRTdGLElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxnQ0FBZ0MsQ0FBQztRQUN6RSxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7UUFDckMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBQzdCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUMvQixDQUFDO0lBR0QsSUFBYyxhQUFhO1FBQ3ZCLE9BQU87WUFDSCxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3JCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtTQUN0QixDQUFDO0lBQ04sQ0FBQztJQUNTLGdCQUFnQixDQUFDLEtBQTJCO1FBQ2xELE9BQU8sd0NBQXdDLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0lBQ2xHLENBQUM7O0FBaERMLHdEQWlEQztBQWhERzs7R0FFRztBQUNvQiw2Q0FBc0IsR0FBRyx1Q0FBdUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuXG5pbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUm9zQWNjZXNzQXNzaWdubWVudGAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1jbG91ZHNzby1hY2Nlc3Nhc3NpZ25tZW50XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zQWNjZXNzQXNzaWdubWVudFByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhY2Nlc3NDb25maWd1cmF0aW9uSWQ6IFRoZSBJRCBvZiB0aGUgYWNjZXNzIGNvbmZpZ3VyYXRpb24uXG4gICAgICovXG4gICAgcmVhZG9ubHkgYWNjZXNzQ29uZmlndXJhdGlvbklkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGlyZWN0b3J5SWQ6IFRoZSBJRCBvZiB0aGUgZGlyZWN0b3J5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRpcmVjdG9yeUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcHJpbmNpcGFsSWQ6IFRoZSBJRCBvZiB0aGUgQ2xvdWRTU08gaWRlbnRpdHkuXG4gICAgICogLSBJZiB5b3Ugc2V0IFByaW5jaXBhbFR5cGUgdG8gVXNlciwgc2V0IFByaW5jaXBhbElkIHRvIHRoZSBJRCBvZiB0aGUgQ2xvdWRTU08gdXNlci5cbiAgICAgKiAtIElmIHlvdSBzZXQgUHJpbmNpcGFsVHlwZSB0byBHcm91cCwgc2V0IFByaW5jaXBhbElkIHRvIHRoZSBJRCBvZiB0aGUgQ2xvdWRTU08gZ3JvdXAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcHJpbmNpcGFsSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwcmluY2lwYWxUeXBlOiBUaGUgdHlwZSBvZiB0aGUgQ2xvdWRTU08gaWRlbnRpdHkuIFZhbGlkIHZhbHVlczogVXNlciwgR3JvdXBcbiAgICAgKi9cbiAgICByZWFkb25seSBwcmluY2lwYWxUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGFyZ2V0SWQ6IFRoZSBJRCBvZiB0aGUgdGFzayBvYmplY3QuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGFyZ2V0SWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0YXJnZXRUeXBlOiBUaGUgdHlwZSBvZiB0aGUgdGFzayBvYmplY3QuIFNldCB0aGUgdmFsdWUgdG8gUkQtQWNjb3VudCwgd2hpY2ggc3BlY2lmaWVzIHRoZSBhY2NvdW50cyBpbiB0aGUgcmVzb3VyY2UgZGlyZWN0b3J5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRhcmdldFR5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NBY2Nlc3NBc3NpZ25tZW50UHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0FjY2Vzc0Fzc2lnbm1lbnRQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NBY2Nlc3NBc3NpZ25tZW50UHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkaXJlY3RvcnlJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5kaXJlY3RvcnlJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGlyZWN0b3J5SWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZGlyZWN0b3J5SWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ByaW5jaXBhbElkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnByaW5jaXBhbElkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwcmluY2lwYWxJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wcmluY2lwYWxJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGFyZ2V0VHlwZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy50YXJnZXRUeXBlKSk7XG4gICAgaWYocHJvcGVydGllcy50YXJnZXRUeXBlICYmICh0eXBlb2YgcHJvcGVydGllcy50YXJnZXRUeXBlKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0YXJnZXRUeXBlJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMudGFyZ2V0VHlwZSxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJSRC1BY2NvdW50XCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGFyZ2V0VHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy50YXJnZXRUeXBlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhY2Nlc3NDb25maWd1cmF0aW9uSWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuYWNjZXNzQ29uZmlndXJhdGlvbklkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhY2Nlc3NDb25maWd1cmF0aW9uSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuYWNjZXNzQ29uZmlndXJhdGlvbklkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwcmluY2lwYWxUeXBlJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnByaW5jaXBhbFR5cGUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnByaW5jaXBhbFR5cGUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnByaW5jaXBhbFR5cGUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ByaW5jaXBhbFR5cGUnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5wcmluY2lwYWxUeXBlLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIlVzZXJcIixcIkdyb3VwXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncHJpbmNpcGFsVHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wcmluY2lwYWxUeXBlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0YXJnZXRJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy50YXJnZXRJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGFyZ2V0SWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudGFyZ2V0SWQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zQWNjZXNzQXNzaWdubWVudFByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpDbG91ZFNTTzo6QWNjZXNzQXNzaWdubWVudGAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQWNjZXNzQXNzaWdubWVudFByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpDbG91ZFNTTzo6QWNjZXNzQXNzaWdubWVudGAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NBY2Nlc3NBc3NpZ25tZW50UHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NBY2Nlc3NBc3NpZ25tZW50UHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgJ0FjY2Vzc0NvbmZpZ3VyYXRpb25JZCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYWNjZXNzQ29uZmlndXJhdGlvbklkKSxcbiAgICAgICdEaXJlY3RvcnlJZCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGlyZWN0b3J5SWQpLFxuICAgICAgJ1ByaW5jaXBhbElkJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wcmluY2lwYWxJZCksXG4gICAgICAnUHJpbmNpcGFsVHlwZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucHJpbmNpcGFsVHlwZSksXG4gICAgICAnVGFyZ2V0SWQnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnRhcmdldElkKSxcbiAgICAgICdUYXJnZXRUeXBlJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy50YXJnZXRUeXBlKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBiYXNlIGVuY2Fwc3VsYXRpb24gYXJvdW5kIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpDbG91ZFNTTzo6QWNjZXNzQXNzaWdubWVudGAuXG4gKiBATm90ZSBUaGlzIGNsYXNzIGRvZXMgbm90IGNvbnRhaW4gYWRkaXRpb25hbCBmdW5jdGlvbnMsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgYEFjY2Vzc0Fzc2lnbm1lbnRgIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWNsb3Vkc3NvLWFjY2Vzc2Fzc2lnbm1lbnRcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc0FjY2Vzc0Fzc2lnbm1lbnQgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OkNsb3VkU1NPOjpBY2Nlc3NBc3NpZ25tZW50XCI7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhY2Nlc3NDb25maWd1cmF0aW9uSWQ6IFRoZSBJRCBvZiB0aGUgYWNjZXNzIGNvbmZpZ3VyYXRpb24uXG4gICAgICovXG4gICAgcHVibGljIGFjY2Vzc0NvbmZpZ3VyYXRpb25JZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRpcmVjdG9yeUlkOiBUaGUgSUQgb2YgdGhlIGRpcmVjdG9yeS5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGlyZWN0b3J5SWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwcmluY2lwYWxJZDogVGhlIElEIG9mIHRoZSBDbG91ZFNTTyBpZGVudGl0eS5cbiAgICAgKiAtIElmIHlvdSBzZXQgUHJpbmNpcGFsVHlwZSB0byBVc2VyLCBzZXQgUHJpbmNpcGFsSWQgdG8gdGhlIElEIG9mIHRoZSBDbG91ZFNTTyB1c2VyLlxuICAgICAqIC0gSWYgeW91IHNldCBQcmluY2lwYWxUeXBlIHRvIEdyb3VwLCBzZXQgUHJpbmNpcGFsSWQgdG8gdGhlIElEIG9mIHRoZSBDbG91ZFNTTyBncm91cC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcHJpbmNpcGFsSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwcmluY2lwYWxUeXBlOiBUaGUgdHlwZSBvZiB0aGUgQ2xvdWRTU08gaWRlbnRpdHkuIFZhbGlkIHZhbHVlczogVXNlciwgR3JvdXBcbiAgICAgKi9cbiAgICBwdWJsaWMgcHJpbmNpcGFsVHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRhcmdldElkOiBUaGUgSUQgb2YgdGhlIHRhc2sgb2JqZWN0LlxuICAgICAqL1xuICAgIHB1YmxpYyB0YXJnZXRJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRhcmdldFR5cGU6IFRoZSB0eXBlIG9mIHRoZSB0YXNrIG9iamVjdC4gU2V0IHRoZSB2YWx1ZSB0byBSRC1BY2NvdW50LCB3aGljaCBzcGVjaWZpZXMgdGhlIGFjY291bnRzIGluIHRoZSByZXNvdXJjZSBkaXJlY3RvcnkuXG4gICAgICovXG4gICAgcHVibGljIHRhcmdldFR5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NBY2Nlc3NBc3NpZ25tZW50UHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NBY2Nlc3NBc3NpZ25tZW50LlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5hY2Nlc3NDb25maWd1cmF0aW9uSWQgPSBwcm9wcy5hY2Nlc3NDb25maWd1cmF0aW9uSWQ7XG4gICAgICAgIHRoaXMuZGlyZWN0b3J5SWQgPSBwcm9wcy5kaXJlY3RvcnlJZDtcbiAgICAgICAgdGhpcy5wcmluY2lwYWxJZCA9IHByb3BzLnByaW5jaXBhbElkO1xuICAgICAgICB0aGlzLnByaW5jaXBhbFR5cGUgPSBwcm9wcy5wcmluY2lwYWxUeXBlO1xuICAgICAgICB0aGlzLnRhcmdldElkID0gcHJvcHMudGFyZ2V0SWQ7XG4gICAgICAgIHRoaXMudGFyZ2V0VHlwZSA9IHByb3BzLnRhcmdldFR5cGU7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWNjZXNzQ29uZmlndXJhdGlvbklkOiB0aGlzLmFjY2Vzc0NvbmZpZ3VyYXRpb25JZCxcbiAgICAgICAgICAgIGRpcmVjdG9yeUlkOiB0aGlzLmRpcmVjdG9yeUlkLFxuICAgICAgICAgICAgcHJpbmNpcGFsSWQ6IHRoaXMucHJpbmNpcGFsSWQsXG4gICAgICAgICAgICBwcmluY2lwYWxUeXBlOiB0aGlzLnByaW5jaXBhbFR5cGUsXG4gICAgICAgICAgICB0YXJnZXRJZDogdGhpcy50YXJnZXRJZCxcbiAgICAgICAgICAgIHRhcmdldFR5cGU6IHRoaXMudGFyZ2V0VHlwZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zQWNjZXNzQXNzaWdubWVudFByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFJvc0FjY2Vzc0NvbmZpZ3VyYXRpb25gLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tY2xvdWRzc28tYWNjZXNzY29uZmlndXJhdGlvblxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc0FjY2Vzc0NvbmZpZ3VyYXRpb25Qcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYWNjZXNzQ29uZmlndXJhdGlvbk5hbWU6IFRoZSBuYW1lIG9mIHRoZSBhY2Nlc3MgY29uZmlndXJhdGlvbi5cbiAgICAgKiBUaGUgbmFtZSBjYW4gY29udGFpbiBsZXR0ZXJzLCBkaWdpdHMsIGFuZCBoeXBoZW5zICgtKS5cbiAgICAgKiBUaGUgbmFtZSBjYW4gYmUgdXAgdG8gMzIgY2hhcmFjdGVycyBpbiBsZW5ndGguXG4gICAgICovXG4gICAgcmVhZG9ubHkgYWNjZXNzQ29uZmlndXJhdGlvbk5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkaXJlY3RvcnlJZDogVGhlIElEIG9mIHRoZSBkaXJlY3RvcnkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGlyZWN0b3J5SWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBhY2Nlc3MgY29uZmlndXJhdGlvbi5cbiAgICAgKiBUaGUgZGVzY3JpcHRpb24gY2FuIGJlIHVwIHRvIDEsMDI0IGNoYXJhY3RlcnMgaW4gbGVuZ3RoLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlbGF5U3RhdGU6IFRoZSBpbml0aWFsIHdlYiBwYWdlIHRoYXQgaXMgZGlzcGxheWVkIGFmdGVyIGEgQ2xvdWRTU08gdXNlciBhY2Nlc3NlcyBhbiBhY2NvdW50IGluIHlvdXIgcmVzb3VyY2UgZGlyZWN0b3J5IGJ5IHVzaW5nIHRoZSBhY2Nlc3MgY29uZmlndXJhdGlvbi5cbiAgICAgKiBUaGUgd2ViIHBhZ2UgbXVzdCBiZSBhIHBhZ2Ugb2YgdGhlIEFsaWJhYmEgQ2xvdWQgTWFuYWdlbWVudCBDb25zb2xlLiBCeSBkZWZhdWx0LCB0aGlzIHBhcmFtZXRlciBpcyBlbXB0eSwgd2hpY2ggaW5kaWNhdGVzIHRoYXQgdGhlIGluaXRpYWwgd2ViIHBhZ2UgaXMgdGhlIGhvbWVwYWdlIG9mIHRoZSBBbGliYWJhIENsb3VkIE1hbmFnZW1lbnQgQ29uc29sZS5cbiAgICAgKi9cbiAgICByZWFkb25seSByZWxheVN0YXRlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNlc3Npb25EdXJhdGlvbjogVGhlIGR1cmF0aW9uIG9mIGEgc2Vzc2lvbiBpbiB3aGljaCBhIENsb3VkU1NPIHVzZXIgYWNjZXNzZXMgYW4gYWNjb3VudCBpbiB5b3VyIHJlc291cmNlIGRpcmVjdG9yeSBieSB1c2luZyB0aGUgYWNjZXNzIGNvbmZpZ3VyYXRpb24uXG4gICAgICogVW5pdDogc2Vjb25kcy5cbiAgICAgKiBWYWxpZCB2YWx1ZXM6IDkwMCB0byA0MzIwMC4gVGhlIHZhbHVlIDkwMCBpbmRpY2F0ZXMgMTUgbWludXRlcy4gVGhlIHZhbHVlIDQzMjAwIGluZGljYXRlcyAxMiBob3Vycy5cbiAgICAgKiBEZWZhdWx0IHZhbHVlOiAzNjAwLiBUaGUgdmFsdWUgaW5kaWNhdGVzIDEgaG91ci5cbiAgICAgKi9cbiAgICByZWFkb25seSBzZXNzaW9uRHVyYXRpb24/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zQWNjZXNzQ29uZmlndXJhdGlvblByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NBY2Nlc3NDb25maWd1cmF0aW9uUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQWNjZXNzQ29uZmlndXJhdGlvblByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYWNjZXNzQ29uZmlndXJhdGlvbk5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuYWNjZXNzQ29uZmlndXJhdGlvbk5hbWUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmFjY2Vzc0NvbmZpZ3VyYXRpb25OYW1lICYmICh0eXBlb2YgcHJvcGVydGllcy5hY2Nlc3NDb25maWd1cmF0aW9uTmFtZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYWNjZXNzQ29uZmlndXJhdGlvbk5hbWUnLCByb3MudmFsaWRhdGVBbGxvd2VkUGF0dGVybikoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuYWNjZXNzQ29uZmlndXJhdGlvbk5hbWUsXG4gICAgICAgICAgcmVnOiAvXlthLXpBLVowLTktXXsxLDMyfSQvXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhY2Nlc3NDb25maWd1cmF0aW9uTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5hY2Nlc3NDb25maWd1cmF0aW9uTmFtZSkpO1xuICAgIGlmKHByb3BlcnRpZXMuc2Vzc2lvbkR1cmF0aW9uICYmICh0eXBlb2YgcHJvcGVydGllcy5zZXNzaW9uRHVyYXRpb24pICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Nlc3Npb25EdXJhdGlvbicsIHJvcy52YWxpZGF0ZVJhbmdlKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnNlc3Npb25EdXJhdGlvbixcbiAgICAgICAgICAgIG1pbjogOTAwLFxuICAgICAgICAgICAgbWF4OiA0MzIwMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2Vzc2lvbkR1cmF0aW9uJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLnNlc3Npb25EdXJhdGlvbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGlyZWN0b3J5SWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuZGlyZWN0b3J5SWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RpcmVjdG9yeUlkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmRpcmVjdG9yeUlkKSk7XG4gICAgaWYocHJvcGVydGllcy5kZXNjcmlwdGlvbiAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSB8fCAodHlwZW9mIHByb3BlcnRpZXMuZGVzY3JpcHRpb24pID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZXNjcmlwdGlvbicsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5kZXNjcmlwdGlvbi5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG1heDogMTAyNCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVzY3JpcHRpb24nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZGVzY3JpcHRpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlbGF5U3RhdGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucmVsYXlTdGF0ZSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NBY2Nlc3NDb25maWd1cmF0aW9uUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNsb3VkU1NPOjpBY2Nlc3NDb25maWd1cmF0aW9uYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NBY2Nlc3NDb25maWd1cmF0aW9uUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNsb3VkU1NPOjpBY2Nlc3NDb25maWd1cmF0aW9uYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0FjY2Vzc0NvbmZpZ3VyYXRpb25Qcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc0FjY2Vzc0NvbmZpZ3VyYXRpb25Qcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAnQWNjZXNzQ29uZmlndXJhdGlvbk5hbWUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmFjY2Vzc0NvbmZpZ3VyYXRpb25OYW1lKSxcbiAgICAgICdEaXJlY3RvcnlJZCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGlyZWN0b3J5SWQpLFxuICAgICAgJ0Rlc2NyaXB0aW9uJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kZXNjcmlwdGlvbiksXG4gICAgICAnUmVsYXlTdGF0ZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVsYXlTdGF0ZSksXG4gICAgICAnU2Vzc2lvbkR1cmF0aW9uJzogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zZXNzaW9uRHVyYXRpb24pLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OkNsb3VkU1NPOjpBY2Nlc3NDb25maWd1cmF0aW9uYCwgd2hpY2ggaXMgdXNlZCB0byBjcmVhdGUgYW4gYWNjZXNzIGNvbmZpZ3VyYXRpb24uXG4gKiBATm90ZSBUaGlzIGNsYXNzIGRvZXMgbm90IGNvbnRhaW4gYWRkaXRpb25hbCBmdW5jdGlvbnMsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgYEFjY2Vzc0NvbmZpZ3VyYXRpb25gIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWNsb3Vkc3NvLWFjY2Vzc2NvbmZpZ3VyYXRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFJvc0FjY2Vzc0NvbmZpZ3VyYXRpb24gZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OkNsb3VkU1NPOjpBY2Nlc3NDb25maWd1cmF0aW9uXCI7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEFjY2Vzc0NvbmZpZ3VyYXRpb25JZDogVGhlIElEIG9mIHRoZSBhY2Nlc3MgY29uZmlndXJhdGlvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckFjY2Vzc0NvbmZpZ3VyYXRpb25JZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYWNjZXNzQ29uZmlndXJhdGlvbk5hbWU6IFRoZSBuYW1lIG9mIHRoZSBhY2Nlc3MgY29uZmlndXJhdGlvbi5cbiAgICAgKiBUaGUgbmFtZSBjYW4gY29udGFpbiBsZXR0ZXJzLCBkaWdpdHMsIGFuZCBoeXBoZW5zICgtKS5cbiAgICAgKiBUaGUgbmFtZSBjYW4gYmUgdXAgdG8gMzIgY2hhcmFjdGVycyBpbiBsZW5ndGguXG4gICAgICovXG4gICAgcHVibGljIGFjY2Vzc0NvbmZpZ3VyYXRpb25OYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGlyZWN0b3J5SWQ6IFRoZSBJRCBvZiB0aGUgZGlyZWN0b3J5LlxuICAgICAqL1xuICAgIHB1YmxpYyBkaXJlY3RvcnlJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlc2NyaXB0aW9uOiBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIGFjY2VzcyBjb25maWd1cmF0aW9uLlxuICAgICAqIFRoZSBkZXNjcmlwdGlvbiBjYW4gYmUgdXAgdG8gMSwwMjQgY2hhcmFjdGVycyBpbiBsZW5ndGguXG4gICAgICovXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVsYXlTdGF0ZTogVGhlIGluaXRpYWwgd2ViIHBhZ2UgdGhhdCBpcyBkaXNwbGF5ZWQgYWZ0ZXIgYSBDbG91ZFNTTyB1c2VyIGFjY2Vzc2VzIGFuIGFjY291bnQgaW4geW91ciByZXNvdXJjZSBkaXJlY3RvcnkgYnkgdXNpbmcgdGhlIGFjY2VzcyBjb25maWd1cmF0aW9uLlxuICAgICAqIFRoZSB3ZWIgcGFnZSBtdXN0IGJlIGEgcGFnZSBvZiB0aGUgQWxpYmFiYSBDbG91ZCBNYW5hZ2VtZW50IENvbnNvbGUuIEJ5IGRlZmF1bHQsIHRoaXMgcGFyYW1ldGVyIGlzIGVtcHR5LCB3aGljaCBpbmRpY2F0ZXMgdGhhdCB0aGUgaW5pdGlhbCB3ZWIgcGFnZSBpcyB0aGUgaG9tZXBhZ2Ugb2YgdGhlIEFsaWJhYmEgQ2xvdWQgTWFuYWdlbWVudCBDb25zb2xlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWxheVN0YXRlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2Vzc2lvbkR1cmF0aW9uOiBUaGUgZHVyYXRpb24gb2YgYSBzZXNzaW9uIGluIHdoaWNoIGEgQ2xvdWRTU08gdXNlciBhY2Nlc3NlcyBhbiBhY2NvdW50IGluIHlvdXIgcmVzb3VyY2UgZGlyZWN0b3J5IGJ5IHVzaW5nIHRoZSBhY2Nlc3MgY29uZmlndXJhdGlvbi5cbiAgICAgKiBVbml0OiBzZWNvbmRzLlxuICAgICAqIFZhbGlkIHZhbHVlczogOTAwIHRvIDQzMjAwLiBUaGUgdmFsdWUgOTAwIGluZGljYXRlcyAxNSBtaW51dGVzLiBUaGUgdmFsdWUgNDMyMDAgaW5kaWNhdGVzIDEyIGhvdXJzLlxuICAgICAqIERlZmF1bHQgdmFsdWU6IDM2MDAuIFRoZSB2YWx1ZSBpbmRpY2F0ZXMgMSBob3VyLlxuICAgICAqL1xuICAgIHB1YmxpYyBzZXNzaW9uRHVyYXRpb246IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NBY2Nlc3NDb25maWd1cmF0aW9uUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NBY2Nlc3NDb25maWd1cmF0aW9uLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJBY2Nlc3NDb25maWd1cmF0aW9uSWQgPSB0aGlzLmdldEF0dCgnQWNjZXNzQ29uZmlndXJhdGlvbklkJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmFjY2Vzc0NvbmZpZ3VyYXRpb25OYW1lID0gcHJvcHMuYWNjZXNzQ29uZmlndXJhdGlvbk5hbWU7XG4gICAgICAgIHRoaXMuZGlyZWN0b3J5SWQgPSBwcm9wcy5kaXJlY3RvcnlJZDtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IHByb3BzLmRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLnJlbGF5U3RhdGUgPSBwcm9wcy5yZWxheVN0YXRlO1xuICAgICAgICB0aGlzLnNlc3Npb25EdXJhdGlvbiA9IHByb3BzLnNlc3Npb25EdXJhdGlvbjtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhY2Nlc3NDb25maWd1cmF0aW9uTmFtZTogdGhpcy5hY2Nlc3NDb25maWd1cmF0aW9uTmFtZSxcbiAgICAgICAgICAgIGRpcmVjdG9yeUlkOiB0aGlzLmRpcmVjdG9yeUlkLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICByZWxheVN0YXRlOiB0aGlzLnJlbGF5U3RhdGUsXG4gICAgICAgICAgICBzZXNzaW9uRHVyYXRpb246IHRoaXMuc2Vzc2lvbkR1cmF0aW9uLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NBY2Nlc3NDb25maWd1cmF0aW9uUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUm9zQWNjZXNzQ29uZmlndXJhdGlvblByb3Zpc2lvbmAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1jbG91ZHNzby1hY2Nlc3Njb25maWd1cmF0aW9ucHJvdmlzaW9uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zQWNjZXNzQ29uZmlndXJhdGlvblByb3Zpc2lvblByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhY2Nlc3NDb25maWd1cmF0aW9uSWQ6IFRoZSBJRCBvZiB0aGUgYWNjZXNzIGNvbmZpZ3VyYXRpb24uXG4gICAgICovXG4gICAgcmVhZG9ubHkgYWNjZXNzQ29uZmlndXJhdGlvbklkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGlyZWN0b3J5SWQ6IFRoZSBJRCBvZiB0aGUgZGlyZWN0b3J5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRpcmVjdG9yeUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGFyZ2V0SWQ6IFRoZSBJRCBvZiB0aGUgdGFzayBvYmplY3QuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGFyZ2V0SWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0YXJnZXRUeXBlOiBUaGUgdHlwZSBvZiB0aGUgdGFzayBvYmplY3QuIFNldCB0aGUgdmFsdWUgdG8gUkQtQWNjb3VudCwgd2hpY2ggc3BlY2lmaWVzIHRoZSBhY2NvdW50cyBpbiB0aGUgcmVzb3VyY2UgZGlyZWN0b3J5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRhcmdldFR5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NBY2Nlc3NDb25maWd1cmF0aW9uUHJvdmlzaW9uUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0FjY2Vzc0NvbmZpZ3VyYXRpb25Qcm92aXNpb25Qcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NBY2Nlc3NDb25maWd1cmF0aW9uUHJvdmlzaW9uUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkaXJlY3RvcnlJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5kaXJlY3RvcnlJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGlyZWN0b3J5SWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZGlyZWN0b3J5SWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RhcmdldFR5cGUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMudGFyZ2V0VHlwZSkpO1xuICAgIGlmKHByb3BlcnRpZXMudGFyZ2V0VHlwZSAmJiAodHlwZW9mIHByb3BlcnRpZXMudGFyZ2V0VHlwZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGFyZ2V0VHlwZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnRhcmdldFR5cGUsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiUkQtQWNjb3VudFwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RhcmdldFR5cGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudGFyZ2V0VHlwZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYWNjZXNzQ29uZmlndXJhdGlvbklkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmFjY2Vzc0NvbmZpZ3VyYXRpb25JZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYWNjZXNzQ29uZmlndXJhdGlvbklkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmFjY2Vzc0NvbmZpZ3VyYXRpb25JZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGFyZ2V0SWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMudGFyZ2V0SWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RhcmdldElkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnRhcmdldElkKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc0FjY2Vzc0NvbmZpZ3VyYXRpb25Qcm92aXNpb25Qcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q2xvdWRTU086OkFjY2Vzc0NvbmZpZ3VyYXRpb25Qcm92aXNpb25gIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0FjY2Vzc0NvbmZpZ3VyYXRpb25Qcm92aXNpb25Qcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q2xvdWRTU086OkFjY2Vzc0NvbmZpZ3VyYXRpb25Qcm92aXNpb25gIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQWNjZXNzQ29uZmlndXJhdGlvblByb3Zpc2lvblByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zQWNjZXNzQ29uZmlndXJhdGlvblByb3Zpc2lvblByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICdBY2Nlc3NDb25maWd1cmF0aW9uSWQnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmFjY2Vzc0NvbmZpZ3VyYXRpb25JZCksXG4gICAgICAnRGlyZWN0b3J5SWQnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRpcmVjdG9yeUlkKSxcbiAgICAgICdUYXJnZXRJZCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudGFyZ2V0SWQpLFxuICAgICAgJ1RhcmdldFR5cGUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnRhcmdldFR5cGUpLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OkNsb3VkU1NPOjpBY2Nlc3NDb25maWd1cmF0aW9uUHJvdmlzaW9uYCwgd2hpY2ggaXMgdXNlZCB0byBwcm92aXNpb24gYW4gYWNjZXNzIGNvbmZpZ3VyYXRpb24gZm9yIGFuIGFjY291bnQgaW4geW91ciByZXNvdXJjZSBkaXJlY3RvcnkuXG4gKiBATm90ZSBUaGlzIGNsYXNzIGRvZXMgbm90IGNvbnRhaW4gYWRkaXRpb25hbCBmdW5jdGlvbnMsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgYEFjY2Vzc0NvbmZpZ3VyYXRpb25Qcm92aXNpb25gIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWNsb3Vkc3NvLWFjY2Vzc2NvbmZpZ3VyYXRpb25wcm92aXNpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFJvc0FjY2Vzc0NvbmZpZ3VyYXRpb25Qcm92aXNpb24gZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OkNsb3VkU1NPOjpBY2Nlc3NDb25maWd1cmF0aW9uUHJvdmlzaW9uXCI7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhY2Nlc3NDb25maWd1cmF0aW9uSWQ6IFRoZSBJRCBvZiB0aGUgYWNjZXNzIGNvbmZpZ3VyYXRpb24uXG4gICAgICovXG4gICAgcHVibGljIGFjY2Vzc0NvbmZpZ3VyYXRpb25JZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRpcmVjdG9yeUlkOiBUaGUgSUQgb2YgdGhlIGRpcmVjdG9yeS5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGlyZWN0b3J5SWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0YXJnZXRJZDogVGhlIElEIG9mIHRoZSB0YXNrIG9iamVjdC5cbiAgICAgKi9cbiAgICBwdWJsaWMgdGFyZ2V0SWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0YXJnZXRUeXBlOiBUaGUgdHlwZSBvZiB0aGUgdGFzayBvYmplY3QuIFNldCB0aGUgdmFsdWUgdG8gUkQtQWNjb3VudCwgd2hpY2ggc3BlY2lmaWVzIHRoZSBhY2NvdW50cyBpbiB0aGUgcmVzb3VyY2UgZGlyZWN0b3J5LlxuICAgICAqL1xuICAgIHB1YmxpYyB0YXJnZXRUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zQWNjZXNzQ29uZmlndXJhdGlvblByb3Zpc2lvblByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zQWNjZXNzQ29uZmlndXJhdGlvblByb3Zpc2lvbi5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuYWNjZXNzQ29uZmlndXJhdGlvbklkID0gcHJvcHMuYWNjZXNzQ29uZmlndXJhdGlvbklkO1xuICAgICAgICB0aGlzLmRpcmVjdG9yeUlkID0gcHJvcHMuZGlyZWN0b3J5SWQ7XG4gICAgICAgIHRoaXMudGFyZ2V0SWQgPSBwcm9wcy50YXJnZXRJZDtcbiAgICAgICAgdGhpcy50YXJnZXRUeXBlID0gcHJvcHMudGFyZ2V0VHlwZTtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhY2Nlc3NDb25maWd1cmF0aW9uSWQ6IHRoaXMuYWNjZXNzQ29uZmlndXJhdGlvbklkLFxuICAgICAgICAgICAgZGlyZWN0b3J5SWQ6IHRoaXMuZGlyZWN0b3J5SWQsXG4gICAgICAgICAgICB0YXJnZXRJZDogdGhpcy50YXJnZXRJZCxcbiAgICAgICAgICAgIHRhcmdldFR5cGU6IHRoaXMudGFyZ2V0VHlwZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zQWNjZXNzQ29uZmlndXJhdGlvblByb3Zpc2lvblByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFJvc0RpcmVjdG9yeWAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1jbG91ZHNzby1kaXJlY3RvcnlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NEaXJlY3RvcnlQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGlyZWN0b3J5TmFtZTogVGhlIG5hbWUgb2YgdGhlIGRpcmVjdG9yeS4gVGhlIG5hbWUgbXVzdCBiZSBnbG9iYWxseSB1bmlxdWUuXG4gICAgICogVGhlIG5hbWUgY2FuIGNvbnRhaW4gbG93ZXJjYXNlIGxldHRlcnMsIGRpZ2l0cywgb3IgaHlwaGVucyAoLSkuIFRoZSBuYW1lIGNhbm5vdCBzdGFydCBvciBlbmQgd2l0aCBhIGh5cGhlbiAoLSkgYW5kIGNhbm5vdCBjb250YWluIHR3byBjb25zZWN1dGl2ZSBoeXBoZW5zICgtKS4gVGhlIG5hbWUgY2Fubm90IHN0YXJ0IHdpdGggZC0uXG4gICAgICogVGhlIG5hbWUgbXVzdCBiZSAyIHRvIDY0IGNoYXJhY3RlcnMgaW4gbGVuZ3RoLlxuICAgICAqICoqTm90ZSoqOiBJZiB5b3UgZG8gbm90IHNwZWNpZnkgdGhpcyBwYXJhbWV0ZXIsIHRoZSB2YWx1ZSBvZiB0aGlzIHBhcmFtZXRlciBpcyBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBieSB0aGUgc3lzdGVtLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRpcmVjdG9yeU5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zRGlyZWN0b3J5UHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0RpcmVjdG9yeVByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0RpcmVjdG9yeVByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGlyZWN0b3J5TmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5kaXJlY3RvcnlOYW1lKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc0RpcmVjdG9yeVByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpDbG91ZFNTTzo6RGlyZWN0b3J5YCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NEaXJlY3RvcnlQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q2xvdWRTU086OkRpcmVjdG9yeWAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NEaXJlY3RvcnlQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc0RpcmVjdG9yeVByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICdEaXJlY3RvcnlOYW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kaXJlY3RvcnlOYW1lKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBiYXNlIGVuY2Fwc3VsYXRpb24gYXJvdW5kIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpDbG91ZFNTTzo6RGlyZWN0b3J5YCwgd2hpY2ggaXMgdXNlZCB0byBjcmVhdGUgYSBkaXJlY3RvcnkuXG4gKiBATm90ZSBUaGlzIGNsYXNzIGRvZXMgbm90IGNvbnRhaW4gYWRkaXRpb25hbCBmdW5jdGlvbnMsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgYERpcmVjdG9yeWAgY2xhc3MgaW5zdGVhZCBvZiB0aGlzIGNsYXNzIGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tY2xvdWRzc28tZGlyZWN0b3J5XG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NEaXJlY3RvcnkgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OkNsb3VkU1NPOjpEaXJlY3RvcnlcIjtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgRGlyZWN0b3J5SWQ6IFRoZSBJRCBvZiB0aGUgZGlyZWN0b3J5LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRGlyZWN0b3J5SWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRpcmVjdG9yeU5hbWU6IFRoZSBuYW1lIG9mIHRoZSBkaXJlY3RvcnkuIFRoZSBuYW1lIG11c3QgYmUgZ2xvYmFsbHkgdW5pcXVlLlxuICAgICAqIFRoZSBuYW1lIGNhbiBjb250YWluIGxvd2VyY2FzZSBsZXR0ZXJzLCBkaWdpdHMsIG9yIGh5cGhlbnMgKC0pLiBUaGUgbmFtZSBjYW5ub3Qgc3RhcnQgb3IgZW5kIHdpdGggYSBoeXBoZW4gKC0pIGFuZCBjYW5ub3QgY29udGFpbiB0d28gY29uc2VjdXRpdmUgaHlwaGVucyAoLSkuIFRoZSBuYW1lIGNhbm5vdCBzdGFydCB3aXRoIGQtLlxuICAgICAqIFRoZSBuYW1lIG11c3QgYmUgMiB0byA2NCBjaGFyYWN0ZXJzIGluIGxlbmd0aC5cbiAgICAgKiAqKk5vdGUqKjogSWYgeW91IGRvIG5vdCBzcGVjaWZ5IHRoaXMgcGFyYW1ldGVyLCB0aGUgdmFsdWUgb2YgdGhpcyBwYXJhbWV0ZXIgaXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYnkgdGhlIHN5c3RlbS5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGlyZWN0b3J5TmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc0RpcmVjdG9yeVByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zRGlyZWN0b3J5LlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJEaXJlY3RvcnlJZCA9IHRoaXMuZ2V0QXR0KCdEaXJlY3RvcnlJZCcpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5kaXJlY3RvcnlOYW1lID0gcHJvcHMuZGlyZWN0b3J5TmFtZTtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkaXJlY3RvcnlOYW1lOiB0aGlzLmRpcmVjdG9yeU5hbWUsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc0RpcmVjdG9yeVByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFJvc0dyb3VwYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWNsb3Vkc3NvLWdyb3VwXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zR3JvdXBQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGlyZWN0b3J5SWQ6IFRoZSBJRCBvZiB0aGUgZGlyZWN0b3J5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRpcmVjdG9yeUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZ3JvdXBOYW1lOiBUaGUgbmFtZSBvZiB0aGUgZ3JvdXAuXG4gICAgICogVGhlIG5hbWUgY2FuIGNvbnRhaW4gbGV0dGVycywgZGlnaXRzLCB1bmRlcnNjb3JlcyAoXyksIGh5cGhlbnMgKC0pLCBhbmQgcGVyaW9kcyAoLikuXG4gICAgICogVGhlIG5hbWUgY2FuIGJlIHVwIHRvIDEyOCBjaGFyYWN0ZXJzIGluIGxlbmd0aC5cbiAgICAgKi9cbiAgICByZWFkb25seSBncm91cE5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBncm91cC5cbiAgICAgKiBUaGUgZGVzY3JpcHRpb24gY2FuIGJlIHVwIHRvIDEsMDI0IGNoYXJhY3RlcnMgaW4gbGVuZ3RoLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc0dyb3VwUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0dyb3VwUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zR3JvdXBQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2dyb3VwTmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5ncm91cE5hbWUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmdyb3VwTmFtZSAmJiAodHlwZW9mIHByb3BlcnRpZXMuZ3JvdXBOYW1lKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdncm91cE5hbWUnLCByb3MudmFsaWRhdGVBbGxvd2VkUGF0dGVybikoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuZ3JvdXBOYW1lLFxuICAgICAgICAgIHJlZzogL15bYS16QS1aMC05Ll8tXXsxLDEyOH0kL1xuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZ3JvdXBOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmdyb3VwTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGlyZWN0b3J5SWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuZGlyZWN0b3J5SWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RpcmVjdG9yeUlkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmRpcmVjdG9yeUlkKSk7XG4gICAgaWYocHJvcGVydGllcy5kZXNjcmlwdGlvbiAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSB8fCAodHlwZW9mIHByb3BlcnRpZXMuZGVzY3JpcHRpb24pID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZXNjcmlwdGlvbicsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5kZXNjcmlwdGlvbi5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG1heDogMTAyNCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVzY3JpcHRpb24nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZGVzY3JpcHRpb24pKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zR3JvdXBQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q2xvdWRTU086Okdyb3VwYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NHcm91cFByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpDbG91ZFNTTzo6R3JvdXBgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zR3JvdXBQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc0dyb3VwUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgJ0RpcmVjdG9yeUlkJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kaXJlY3RvcnlJZCksXG4gICAgICAnR3JvdXBOYW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5ncm91cE5hbWUpLFxuICAgICAgJ0Rlc2NyaXB0aW9uJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kZXNjcmlwdGlvbiksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgYmFzZSBlbmNhcHN1bGF0aW9uIGFyb3VuZCB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6Q2xvdWRTU086Okdyb3VwYCwgd2hpY2ggaXMgdXNlZCB0byBjcmVhdGUgYSBncm91cCBpbiBDbG91ZFNTTy5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgZG9lcyBub3QgY29udGFpbiBhZGRpdGlvbmFsIGZ1bmN0aW9ucywgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgR3JvdXBgIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWNsb3Vkc3NvLWdyb3VwXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NHcm91cCBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6Q2xvdWRTU086Okdyb3VwXCI7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEdyb3VwSWQ6IFRoZSBJRCBvZiB0aGUgZ3JvdXAuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJHcm91cElkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkaXJlY3RvcnlJZDogVGhlIElEIG9mIHRoZSBkaXJlY3RvcnkuXG4gICAgICovXG4gICAgcHVibGljIGRpcmVjdG9yeUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZ3JvdXBOYW1lOiBUaGUgbmFtZSBvZiB0aGUgZ3JvdXAuXG4gICAgICogVGhlIG5hbWUgY2FuIGNvbnRhaW4gbGV0dGVycywgZGlnaXRzLCB1bmRlcnNjb3JlcyAoXyksIGh5cGhlbnMgKC0pLCBhbmQgcGVyaW9kcyAoLikuXG4gICAgICogVGhlIG5hbWUgY2FuIGJlIHVwIHRvIDEyOCBjaGFyYWN0ZXJzIGluIGxlbmd0aC5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ3JvdXBOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVzY3JpcHRpb246IFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgZ3JvdXAuXG4gICAgICogVGhlIGRlc2NyaXB0aW9uIGNhbiBiZSB1cCB0byAxLDAyNCBjaGFyYWN0ZXJzIGluIGxlbmd0aC5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NHcm91cFByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zR3JvdXAuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckdyb3VwSWQgPSB0aGlzLmdldEF0dCgnR3JvdXBJZCcpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5kaXJlY3RvcnlJZCA9IHByb3BzLmRpcmVjdG9yeUlkO1xuICAgICAgICB0aGlzLmdyb3VwTmFtZSA9IHByb3BzLmdyb3VwTmFtZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IHByb3BzLmRlc2NyaXB0aW9uO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRpcmVjdG9yeUlkOiB0aGlzLmRpcmVjdG9yeUlkLFxuICAgICAgICAgICAgZ3JvdXBOYW1lOiB0aGlzLmdyb3VwTmFtZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NHcm91cFByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFJvc1Blcm1pc3Npb25Qb2xpY3lUb0FjY2Vzc0NvbmZpZ3VyYXRpb25BZGRpdGlvbmAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1jbG91ZHNzby1wZXJtaXNzaW9ucG9saWN5dG9hY2Nlc3Njb25maWd1cmF0aW9uYWRkaXRpb25cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NQZXJtaXNzaW9uUG9saWN5VG9BY2Nlc3NDb25maWd1cmF0aW9uQWRkaXRpb25Qcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYWNjZXNzQ29uZmlndXJhdGlvbklkOiBUaGUgSUQgb2YgdGhlIGFjY2VzcyBjb25maWd1cmF0aW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFjY2Vzc0NvbmZpZ3VyYXRpb25JZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRpcmVjdG9yeUlkOiBUaGUgSUQgb2YgdGhlIGRpcmVjdG9yeS5cbiAgICAgKi9cbiAgICByZWFkb25seSBkaXJlY3RvcnlJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBlcm1pc3Npb25Qb2xpY3lOYW1lOiBUaGUgbmFtZSBvZiB0aGUgcGVybWlzc2lvbiBwb2xpY3kuXG4gICAgICogLSBJZiB5b3Ugc2V0IFBlcm1pc3Npb25Qb2xpY3lUeXBlIHRvIFN5c3RlbSwgeW91IG11c3Qgc2V0IHRoaXMgcGFyYW1ldGVyIHRvIHRoZSBuYW1lIG9mIHRoZSBzeXN0ZW0gcG9saWN5LiBZb3UgY2FuIG9idGFpbiB0aGUgbmFtZSBvZiB0aGUgc3lzdGVtIHBvbGljeSBmcm9tIFJBTS5cbiAgICAgKiAtIElmIHlvdSBzZXQgUGVybWlzc2lvblBvbGljeVR5cGUgdG8gSW5saW5lLCB5b3UgbXVzdCBzZXQgdGhpcyBwYXJhbWV0ZXIgdG8gdGhlIG5hbWUgb2YgdGhlIGlubGluZSBwb2xpY3kuIEEgY3VzdG9tIHZhbHVlIGlzIHN1cHBvcnRlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBwZXJtaXNzaW9uUG9saWN5TmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBlcm1pc3Npb25Qb2xpY3lUeXBlOiBUaGUgdHlwZSBvZiB0aGUgcGVybWlzc2lvbiBwb2xpY3kuIFZhbGlkIHZhbHVlczpcbiAgICAgKiAtIFN5c3RlbTogc3lzdGVtIHBvbGljeS4gUmVzb3VyY2UgQWNjZXNzIE1hbmFnZW1lbnQgKFJBTSkgc3lzdGVtIHBvbGljaWVzIGFyZSByZXVzZWQuXG4gICAgICogLSBJbmxpbmU6IGlubGluZSBwb2xpY3kuIElubGluZSBwb2xpY2llcyBhcmUgY3JlYXRlZCBiYXNlZCBvbiB0aGUgUkFNIHBvbGljeSBzeW50YXggYW5kIHN0cnVjdHVyZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBwZXJtaXNzaW9uUG9saWN5VHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGlubGluZVBvbGljeURvY3VtZW50OiBUaGUgY29uZmlndXJhdGlvbnMgb2YgdGhlIGlubGluZSBwb2xpY3kuXG4gICAgICogVGhlIHZhbHVlIGNhbiBiZSB1cCB0byA0LDA5NiBjaGFyYWN0ZXJzIGluIGxlbmd0aC5cbiAgICAgKiBJZiB5b3Ugc2V0IFBlcm1pc3Npb25Qb2xpY3lUeXBlIHRvIElubGluZSwgeW91IG11c3Qgc3BlY2lmeSB0aGlzIHBhcmFtZXRlci5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbmxpbmVQb2xpY3lEb2N1bWVudD86IHsgW2tleTogc3RyaW5nXTogKGFueSB8IHJvcy5JUmVzb2x2YWJsZSkgfSB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NQZXJtaXNzaW9uUG9saWN5VG9BY2Nlc3NDb25maWd1cmF0aW9uQWRkaXRpb25Qcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zUGVybWlzc2lvblBvbGljeVRvQWNjZXNzQ29uZmlndXJhdGlvbkFkZGl0aW9uUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zUGVybWlzc2lvblBvbGljeVRvQWNjZXNzQ29uZmlndXJhdGlvbkFkZGl0aW9uUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbmxpbmVQb2xpY3lEb2N1bWVudCcsIHJvcy5oYXNoVmFsaWRhdG9yKHJvcy52YWxpZGF0ZUFueSkpKHByb3BlcnRpZXMuaW5saW5lUG9saWN5RG9jdW1lbnQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RpcmVjdG9yeUlkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmRpcmVjdG9yeUlkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkaXJlY3RvcnlJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5kaXJlY3RvcnlJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncGVybWlzc2lvblBvbGljeU5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucGVybWlzc2lvblBvbGljeU5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Blcm1pc3Npb25Qb2xpY3lOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnBlcm1pc3Npb25Qb2xpY3lOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwZXJtaXNzaW9uUG9saWN5VHlwZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5wZXJtaXNzaW9uUG9saWN5VHlwZSkpO1xuICAgIGlmKHByb3BlcnRpZXMucGVybWlzc2lvblBvbGljeVR5cGUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnBlcm1pc3Npb25Qb2xpY3lUeXBlKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwZXJtaXNzaW9uUG9saWN5VHlwZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnBlcm1pc3Npb25Qb2xpY3lUeXBlLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIlN5c3RlbVwiLFwiSW5saW5lXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncGVybWlzc2lvblBvbGljeVR5cGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucGVybWlzc2lvblBvbGljeVR5cGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FjY2Vzc0NvbmZpZ3VyYXRpb25JZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5hY2Nlc3NDb25maWd1cmF0aW9uSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FjY2Vzc0NvbmZpZ3VyYXRpb25JZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5hY2Nlc3NDb25maWd1cmF0aW9uSWQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zUGVybWlzc2lvblBvbGljeVRvQWNjZXNzQ29uZmlndXJhdGlvbkFkZGl0aW9uUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNsb3VkU1NPOjpQZXJtaXNzaW9uUG9saWN5VG9BY2Nlc3NDb25maWd1cmF0aW9uQWRkaXRpb25gIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1Blcm1pc3Npb25Qb2xpY3lUb0FjY2Vzc0NvbmZpZ3VyYXRpb25BZGRpdGlvblByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpDbG91ZFNTTzo6UGVybWlzc2lvblBvbGljeVRvQWNjZXNzQ29uZmlndXJhdGlvbkFkZGl0aW9uYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1Blcm1pc3Npb25Qb2xpY3lUb0FjY2Vzc0NvbmZpZ3VyYXRpb25BZGRpdGlvblByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zUGVybWlzc2lvblBvbGljeVRvQWNjZXNzQ29uZmlndXJhdGlvbkFkZGl0aW9uUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgJ0FjY2Vzc0NvbmZpZ3VyYXRpb25JZCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYWNjZXNzQ29uZmlndXJhdGlvbklkKSxcbiAgICAgICdEaXJlY3RvcnlJZCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGlyZWN0b3J5SWQpLFxuICAgICAgJ1Blcm1pc3Npb25Qb2xpY3lOYW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wZXJtaXNzaW9uUG9saWN5TmFtZSksXG4gICAgICAnUGVybWlzc2lvblBvbGljeVR5cGUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnBlcm1pc3Npb25Qb2xpY3lUeXBlKSxcbiAgICAgICdJbmxpbmVQb2xpY3lEb2N1bWVudCc6IHJvcy5oYXNoTWFwcGVyKHJvcy5vYmplY3RUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLmlubGluZVBvbGljeURvY3VtZW50KSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBiYXNlIGVuY2Fwc3VsYXRpb24gYXJvdW5kIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpDbG91ZFNTTzo6UGVybWlzc2lvblBvbGljeVRvQWNjZXNzQ29uZmlndXJhdGlvbkFkZGl0aW9uYCwgd2hpY2ggaXMgdXNlZCB0byBhZGQgYSBwb2xpY3kgdG8gYW4gYWNjZXNzIGNvbmZpZ3VyYXRpb24uXG4gKiBATm90ZSBUaGlzIGNsYXNzIGRvZXMgbm90IGNvbnRhaW4gYWRkaXRpb25hbCBmdW5jdGlvbnMsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgYFBlcm1pc3Npb25Qb2xpY3lUb0FjY2Vzc0NvbmZpZ3VyYXRpb25BZGRpdGlvbmAgY2xhc3MgaW5zdGVhZCBvZiB0aGlzIGNsYXNzIGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tY2xvdWRzc28tcGVybWlzc2lvbnBvbGljeXRvYWNjZXNzY29uZmlndXJhdGlvbmFkZGl0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NQZXJtaXNzaW9uUG9saWN5VG9BY2Nlc3NDb25maWd1cmF0aW9uQWRkaXRpb24gZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OkNsb3VkU1NPOjpQZXJtaXNzaW9uUG9saWN5VG9BY2Nlc3NDb25maWd1cmF0aW9uQWRkaXRpb25cIjtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFjY2Vzc0NvbmZpZ3VyYXRpb25JZDogVGhlIElEIG9mIHRoZSBhY2Nlc3MgY29uZmlndXJhdGlvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgYWNjZXNzQ29uZmlndXJhdGlvbklkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGlyZWN0b3J5SWQ6IFRoZSBJRCBvZiB0aGUgZGlyZWN0b3J5LlxuICAgICAqL1xuICAgIHB1YmxpYyBkaXJlY3RvcnlJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBlcm1pc3Npb25Qb2xpY3lOYW1lOiBUaGUgbmFtZSBvZiB0aGUgcGVybWlzc2lvbiBwb2xpY3kuXG4gICAgICogLSBJZiB5b3Ugc2V0IFBlcm1pc3Npb25Qb2xpY3lUeXBlIHRvIFN5c3RlbSwgeW91IG11c3Qgc2V0IHRoaXMgcGFyYW1ldGVyIHRvIHRoZSBuYW1lIG9mIHRoZSBzeXN0ZW0gcG9saWN5LiBZb3UgY2FuIG9idGFpbiB0aGUgbmFtZSBvZiB0aGUgc3lzdGVtIHBvbGljeSBmcm9tIFJBTS5cbiAgICAgKiAtIElmIHlvdSBzZXQgUGVybWlzc2lvblBvbGljeVR5cGUgdG8gSW5saW5lLCB5b3UgbXVzdCBzZXQgdGhpcyBwYXJhbWV0ZXIgdG8gdGhlIG5hbWUgb2YgdGhlIGlubGluZSBwb2xpY3kuIEEgY3VzdG9tIHZhbHVlIGlzIHN1cHBvcnRlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcGVybWlzc2lvblBvbGljeU5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwZXJtaXNzaW9uUG9saWN5VHlwZTogVGhlIHR5cGUgb2YgdGhlIHBlcm1pc3Npb24gcG9saWN5LiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSBTeXN0ZW06IHN5c3RlbSBwb2xpY3kuIFJlc291cmNlIEFjY2VzcyBNYW5hZ2VtZW50IChSQU0pIHN5c3RlbSBwb2xpY2llcyBhcmUgcmV1c2VkLlxuICAgICAqIC0gSW5saW5lOiBpbmxpbmUgcG9saWN5LiBJbmxpbmUgcG9saWNpZXMgYXJlIGNyZWF0ZWQgYmFzZWQgb24gdGhlIFJBTSBwb2xpY3kgc3ludGF4IGFuZCBzdHJ1Y3R1cmUuXG4gICAgICovXG4gICAgcHVibGljIHBlcm1pc3Npb25Qb2xpY3lUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW5saW5lUG9saWN5RG9jdW1lbnQ6IFRoZSBjb25maWd1cmF0aW9ucyBvZiB0aGUgaW5saW5lIHBvbGljeS5cbiAgICAgKiBUaGUgdmFsdWUgY2FuIGJlIHVwIHRvIDQsMDk2IGNoYXJhY3RlcnMgaW4gbGVuZ3RoLlxuICAgICAqIElmIHlvdSBzZXQgUGVybWlzc2lvblBvbGljeVR5cGUgdG8gSW5saW5lLCB5b3UgbXVzdCBzcGVjaWZ5IHRoaXMgcGFyYW1ldGVyLlxuICAgICAqL1xuICAgIHB1YmxpYyBpbmxpbmVQb2xpY3lEb2N1bWVudDogeyBba2V5OiBzdHJpbmddOiAoYW55IHwgcm9zLklSZXNvbHZhYmxlKSB9IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc1Blcm1pc3Npb25Qb2xpY3lUb0FjY2Vzc0NvbmZpZ3VyYXRpb25BZGRpdGlvblByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zUGVybWlzc2lvblBvbGljeVRvQWNjZXNzQ29uZmlndXJhdGlvbkFkZGl0aW9uLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5hY2Nlc3NDb25maWd1cmF0aW9uSWQgPSBwcm9wcy5hY2Nlc3NDb25maWd1cmF0aW9uSWQ7XG4gICAgICAgIHRoaXMuZGlyZWN0b3J5SWQgPSBwcm9wcy5kaXJlY3RvcnlJZDtcbiAgICAgICAgdGhpcy5wZXJtaXNzaW9uUG9saWN5TmFtZSA9IHByb3BzLnBlcm1pc3Npb25Qb2xpY3lOYW1lO1xuICAgICAgICB0aGlzLnBlcm1pc3Npb25Qb2xpY3lUeXBlID0gcHJvcHMucGVybWlzc2lvblBvbGljeVR5cGU7XG4gICAgICAgIHRoaXMuaW5saW5lUG9saWN5RG9jdW1lbnQgPSBwcm9wcy5pbmxpbmVQb2xpY3lEb2N1bWVudDtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhY2Nlc3NDb25maWd1cmF0aW9uSWQ6IHRoaXMuYWNjZXNzQ29uZmlndXJhdGlvbklkLFxuICAgICAgICAgICAgZGlyZWN0b3J5SWQ6IHRoaXMuZGlyZWN0b3J5SWQsXG4gICAgICAgICAgICBwZXJtaXNzaW9uUG9saWN5TmFtZTogdGhpcy5wZXJtaXNzaW9uUG9saWN5TmFtZSxcbiAgICAgICAgICAgIHBlcm1pc3Npb25Qb2xpY3lUeXBlOiB0aGlzLnBlcm1pc3Npb25Qb2xpY3lUeXBlLFxuICAgICAgICAgICAgaW5saW5lUG9saWN5RG9jdW1lbnQ6IHRoaXMuaW5saW5lUG9saWN5RG9jdW1lbnQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc1Blcm1pc3Npb25Qb2xpY3lUb0FjY2Vzc0NvbmZpZ3VyYXRpb25BZGRpdGlvblByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFJvc1NBTUxJZGVudGl0eVByb3ZpZGVyYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWNsb3Vkc3NvLXNhbWxpZGVudGl0eXByb3ZpZGVyXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zU0FNTElkZW50aXR5UHJvdmlkZXJQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGlyZWN0b3J5SWQ6IFRoZSBJRCBvZiB0aGUgZGlyZWN0b3J5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRpcmVjdG9yeUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZW5jb2RlZE1ldGFkYXRhRG9jdW1lbnQ6IFRoZSBtZXRhZGF0YSBmaWxlIG9mIHRoZSBJZFAuIFRoZSB2YWx1ZSBvZiB0aGlzIHBhcmFtZXRlciBpcyBCYXNlNjQtZW5jb2RlZC5cbiAgICAgKiBUaGUgZmlsZSBpcyBwcm92aWRlZCBieSB0aGUgSWRQIHRoYXQgc3VwcG9ydHMgU0FNTCAyLjAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZW5jb2RlZE1ldGFkYXRhRG9jdW1lbnQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZW50aXR5SWQ6IFRoZSBlbnRpdHkgSUQgb2YgdGhlIElkUC5cbiAgICAgKi9cbiAgICByZWFkb25seSBlbnRpdHlJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBsb2dpblVybDogVGhlIGxvZ29uIFVSTCBvZiB0aGUgSWRQLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGxvZ2luVXJsPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNzb1N0YXR1czogVGhlIHN0YXR1cyBvZiBTU08gbG9nb24uIFZhbGlkIHZhbHVlczpcbiAgICAgKiAtIEVuYWJsZWRcbiAgICAgKiAtIERpc2FibGVkIChkZWZhdWx0KVxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNzb1N0YXR1cz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB3YW50UmVxdWVzdFNpZ25lZDogU3BlY2lmaWVzIHdoZXRoZXIgQ2xvdWRTU08gbmVlZHMgdG8gc2lnbiBTQU1MIHJlcXVlc3RzLiBUaGUgcmVxdWVzdHMgYXJlIHNlbnQgd2hlbiB1c2VycyBsb2cgb24gdG8gdGhlIENsb3VkU1NPIHVzZXIgcG9ydGFsIHRvIGluaXRpYXRlIFNBTUwtYmFzZWQgU1NPLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSB0cnVlOiB5ZXNcbiAgICAgKiAtIGZhbHNlOiBubyAoZGVmYXVsdClcbiAgICAgKi9cbiAgICByZWFkb25seSB3YW50UmVxdWVzdFNpZ25lZD86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgeDUwOUNlcnRpZmljYXRlOiBUaGUgWC41MDkgY2VydGlmaWNhdGUgbiB0aGUgUEVNIGZvcm1hdC4gSWYgeW91IHNwZWNpZnkgdGhpcyBwYXJhbWV0ZXIsIGFsbCBleGlzdGluZyBjZXJ0aWZpY2F0ZXMgYXJlIHJlcGxhY2VkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHg1MDlDZXJ0aWZpY2F0ZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NTQU1MSWRlbnRpdHlQcm92aWRlclByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NTQU1MSWRlbnRpdHlQcm92aWRlclByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1NBTUxJZGVudGl0eVByb3ZpZGVyUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdlbnRpdHlJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5lbnRpdHlJZCkpO1xuICAgIGlmKHByb3BlcnRpZXMuc3NvU3RhdHVzICYmICh0eXBlb2YgcHJvcGVydGllcy5zc29TdGF0dXMpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Nzb1N0YXR1cycsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnNzb1N0YXR1cyxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJFbmFibGVkXCIsXCJEaXNhYmxlZFwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Nzb1N0YXR1cycsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zc29TdGF0dXMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RpcmVjdG9yeUlkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmRpcmVjdG9yeUlkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkaXJlY3RvcnlJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5kaXJlY3RvcnlJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZW5jb2RlZE1ldGFkYXRhRG9jdW1lbnQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZW5jb2RlZE1ldGFkYXRhRG9jdW1lbnQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3dhbnRSZXF1ZXN0U2lnbmVkJywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy53YW50UmVxdWVzdFNpZ25lZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbG9naW5VcmwnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubG9naW5VcmwpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3g1MDlDZXJ0aWZpY2F0ZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy54NTA5Q2VydGlmaWNhdGUpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zU0FNTElkZW50aXR5UHJvdmlkZXJQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q2xvdWRTU086OlNBTUxJZGVudGl0eVByb3ZpZGVyYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NTQU1MSWRlbnRpdHlQcm92aWRlclByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpDbG91ZFNTTzo6U0FNTElkZW50aXR5UHJvdmlkZXJgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zU0FNTElkZW50aXR5UHJvdmlkZXJQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc1NBTUxJZGVudGl0eVByb3ZpZGVyUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgJ0RpcmVjdG9yeUlkJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kaXJlY3RvcnlJZCksXG4gICAgICAnRW5jb2RlZE1ldGFkYXRhRG9jdW1lbnQnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmVuY29kZWRNZXRhZGF0YURvY3VtZW50KSxcbiAgICAgICdFbnRpdHlJZCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZW50aXR5SWQpLFxuICAgICAgJ0xvZ2luVXJsJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5sb2dpblVybCksXG4gICAgICAnU1NPU3RhdHVzJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zc29TdGF0dXMpLFxuICAgICAgJ1dhbnRSZXF1ZXN0U2lnbmVkJzogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMud2FudFJlcXVlc3RTaWduZWQpLFxuICAgICAgJ1g1MDlDZXJ0aWZpY2F0ZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMueDUwOUNlcnRpZmljYXRlKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBiYXNlIGVuY2Fwc3VsYXRpb24gYXJvdW5kIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpDbG91ZFNTTzo6U0FNTElkZW50aXR5UHJvdmlkZXJgLCB3aGljaCBpcyB1c2VkIHRvIGNvbmZpZ3VyZSB0aGUgaW5mb3JtYXRpb24gYWJvdXQgYSBTZWN1cml0eSBBc3NlcnRpb24gTWFya3VwIExhbmd1YWdlIChTQU1MKSBpZGVudGl0eSBwcm92aWRlciAoSWRQKS5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgZG9lcyBub3QgY29udGFpbiBhZGRpdGlvbmFsIGZ1bmN0aW9ucywgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgU0FNTElkZW50aXR5UHJvdmlkZXJgIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWNsb3Vkc3NvLXNhbWxpZGVudGl0eXByb3ZpZGVyXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NTQU1MSWRlbnRpdHlQcm92aWRlciBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6Q2xvdWRTU086OlNBTUxJZGVudGl0eVByb3ZpZGVyXCI7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkaXJlY3RvcnlJZDogVGhlIElEIG9mIHRoZSBkaXJlY3RvcnkuXG4gICAgICovXG4gICAgcHVibGljIGRpcmVjdG9yeUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZW5jb2RlZE1ldGFkYXRhRG9jdW1lbnQ6IFRoZSBtZXRhZGF0YSBmaWxlIG9mIHRoZSBJZFAuIFRoZSB2YWx1ZSBvZiB0aGlzIHBhcmFtZXRlciBpcyBCYXNlNjQtZW5jb2RlZC5cbiAgICAgKiBUaGUgZmlsZSBpcyBwcm92aWRlZCBieSB0aGUgSWRQIHRoYXQgc3VwcG9ydHMgU0FNTCAyLjAuXG4gICAgICovXG4gICAgcHVibGljIGVuY29kZWRNZXRhZGF0YURvY3VtZW50OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZW50aXR5SWQ6IFRoZSBlbnRpdHkgSUQgb2YgdGhlIElkUC5cbiAgICAgKi9cbiAgICBwdWJsaWMgZW50aXR5SWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBsb2dpblVybDogVGhlIGxvZ29uIFVSTCBvZiB0aGUgSWRQLlxuICAgICAqL1xuICAgIHB1YmxpYyBsb2dpblVybDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNzb1N0YXR1czogVGhlIHN0YXR1cyBvZiBTU08gbG9nb24uIFZhbGlkIHZhbHVlczpcbiAgICAgKiAtIEVuYWJsZWRcbiAgICAgKiAtIERpc2FibGVkIChkZWZhdWx0KVxuICAgICAqL1xuICAgIHB1YmxpYyBzc29TdGF0dXM6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB3YW50UmVxdWVzdFNpZ25lZDogU3BlY2lmaWVzIHdoZXRoZXIgQ2xvdWRTU08gbmVlZHMgdG8gc2lnbiBTQU1MIHJlcXVlc3RzLiBUaGUgcmVxdWVzdHMgYXJlIHNlbnQgd2hlbiB1c2VycyBsb2cgb24gdG8gdGhlIENsb3VkU1NPIHVzZXIgcG9ydGFsIHRvIGluaXRpYXRlIFNBTUwtYmFzZWQgU1NPLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSB0cnVlOiB5ZXNcbiAgICAgKiAtIGZhbHNlOiBubyAoZGVmYXVsdClcbiAgICAgKi9cbiAgICBwdWJsaWMgd2FudFJlcXVlc3RTaWduZWQ6IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgeDUwOUNlcnRpZmljYXRlOiBUaGUgWC41MDkgY2VydGlmaWNhdGUgbiB0aGUgUEVNIGZvcm1hdC4gSWYgeW91IHNwZWNpZnkgdGhpcyBwYXJhbWV0ZXIsIGFsbCBleGlzdGluZyBjZXJ0aWZpY2F0ZXMgYXJlIHJlcGxhY2VkLlxuICAgICAqL1xuICAgIHB1YmxpYyB4NTA5Q2VydGlmaWNhdGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NTQU1MSWRlbnRpdHlQcm92aWRlclByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zU0FNTElkZW50aXR5UHJvdmlkZXIuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmRpcmVjdG9yeUlkID0gcHJvcHMuZGlyZWN0b3J5SWQ7XG4gICAgICAgIHRoaXMuZW5jb2RlZE1ldGFkYXRhRG9jdW1lbnQgPSBwcm9wcy5lbmNvZGVkTWV0YWRhdGFEb2N1bWVudDtcbiAgICAgICAgdGhpcy5lbnRpdHlJZCA9IHByb3BzLmVudGl0eUlkO1xuICAgICAgICB0aGlzLmxvZ2luVXJsID0gcHJvcHMubG9naW5Vcmw7XG4gICAgICAgIHRoaXMuc3NvU3RhdHVzID0gcHJvcHMuc3NvU3RhdHVzO1xuICAgICAgICB0aGlzLndhbnRSZXF1ZXN0U2lnbmVkID0gcHJvcHMud2FudFJlcXVlc3RTaWduZWQ7XG4gICAgICAgIHRoaXMueDUwOUNlcnRpZmljYXRlID0gcHJvcHMueDUwOUNlcnRpZmljYXRlO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRpcmVjdG9yeUlkOiB0aGlzLmRpcmVjdG9yeUlkLFxuICAgICAgICAgICAgZW5jb2RlZE1ldGFkYXRhRG9jdW1lbnQ6IHRoaXMuZW5jb2RlZE1ldGFkYXRhRG9jdW1lbnQsXG4gICAgICAgICAgICBlbnRpdHlJZDogdGhpcy5lbnRpdHlJZCxcbiAgICAgICAgICAgIGxvZ2luVXJsOiB0aGlzLmxvZ2luVXJsLFxuICAgICAgICAgICAgc3NvU3RhdHVzOiB0aGlzLnNzb1N0YXR1cyxcbiAgICAgICAgICAgIHdhbnRSZXF1ZXN0U2lnbmVkOiB0aGlzLndhbnRSZXF1ZXN0U2lnbmVkLFxuICAgICAgICAgICAgeDUwOUNlcnRpZmljYXRlOiB0aGlzLng1MDlDZXJ0aWZpY2F0ZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zU0FNTElkZW50aXR5UHJvdmlkZXJQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NTQ0lNU2VydmVyQ3JlZGVudGlhbGAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1jbG91ZHNzby1zY2ltc2VydmVyY3JlZGVudGlhbFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc1NDSU1TZXJ2ZXJDcmVkZW50aWFsUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRpcmVjdG9yeUlkOiBUaGUgSUQgb2YgdGhlIGRpcmVjdG9yeS5cbiAgICAgKi9cbiAgICByZWFkb25seSBkaXJlY3RvcnlJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHN0YXR1czogVGhlIG5ldyBzdGF0dXMgb2YgdGhlIFNDSU0gY3JlZGVudGlhbC4gVmFsaWQgdmFsdWVzOlxuICAgICAqIC0gRW5hYmxlZDogVGhlIFNDSU0gY3JlZGVudGlhbCBpcyBlbmFibGVkLlxuICAgICAqIC0gRGlzYWJsZWQ6IFRoZSBTQ0lNIGNyZWRlbnRpYWwgaXMgZGlzYWJsZWQuXG4gICAgICogVGhlIGRlZmF1bHQgdmFsdWUgaXMgRW5hYmxlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBzdGF0dXM/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zU0NJTVNlcnZlckNyZWRlbnRpYWxQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zU0NJTVNlcnZlckNyZWRlbnRpYWxQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NTQ0lNU2VydmVyQ3JlZGVudGlhbFByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGlmKHByb3BlcnRpZXMuc3RhdHVzICYmICh0eXBlb2YgcHJvcGVydGllcy5zdGF0dXMpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N0YXR1cycsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnN0YXR1cyxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJFbmFibGVkXCIsXCJEaXNhYmxlZFwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N0YXR1cycsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zdGF0dXMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RpcmVjdG9yeUlkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmRpcmVjdG9yeUlkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkaXJlY3RvcnlJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5kaXJlY3RvcnlJZCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NTQ0lNU2VydmVyQ3JlZGVudGlhbFByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpDbG91ZFNTTzo6U0NJTVNlcnZlckNyZWRlbnRpYWxgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1NDSU1TZXJ2ZXJDcmVkZW50aWFsUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNsb3VkU1NPOjpTQ0lNU2VydmVyQ3JlZGVudGlhbGAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NTQ0lNU2VydmVyQ3JlZGVudGlhbFByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zU0NJTVNlcnZlckNyZWRlbnRpYWxQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAnRGlyZWN0b3J5SWQnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRpcmVjdG9yeUlkKSxcbiAgICAgICdTdGF0dXMnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnN0YXR1cyksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgYmFzZSBlbmNhcHN1bGF0aW9uIGFyb3VuZCB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6Q2xvdWRTU086OlNDSU1TZXJ2ZXJDcmVkZW50aWFsYC5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgZG9lcyBub3QgY29udGFpbiBhZGRpdGlvbmFsIGZ1bmN0aW9ucywgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgU0NJTVNlcnZlckNyZWRlbnRpYWxgIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWNsb3Vkc3NvLXNjaW1zZXJ2ZXJjcmVkZW50aWFsXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NTQ0lNU2VydmVyQ3JlZGVudGlhbCBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6Q2xvdWRTU086OlNDSU1TZXJ2ZXJDcmVkZW50aWFsXCI7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIENyZWRlbnRpYWxJZDogVGhlIElEIG9mIHRoZSBTQ0lNIGNyZWRlbnRpYWwuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDcmVkZW50aWFsSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQ3JlZGVudGlhbFNlY3JldDogVGhlIHNlY3JldCBvZiB0aGUgU0NJTSBjcmVkZW50aWFsLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ3JlZGVudGlhbFNlY3JldDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGlyZWN0b3J5SWQ6IFRoZSBJRCBvZiB0aGUgZGlyZWN0b3J5LlxuICAgICAqL1xuICAgIHB1YmxpYyBkaXJlY3RvcnlJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHN0YXR1czogVGhlIG5ldyBzdGF0dXMgb2YgdGhlIFNDSU0gY3JlZGVudGlhbC4gVmFsaWQgdmFsdWVzOlxuICAgICAqIC0gRW5hYmxlZDogVGhlIFNDSU0gY3JlZGVudGlhbCBpcyBlbmFibGVkLlxuICAgICAqIC0gRGlzYWJsZWQ6IFRoZSBTQ0lNIGNyZWRlbnRpYWwgaXMgZGlzYWJsZWQuXG4gICAgICogVGhlIGRlZmF1bHQgdmFsdWUgaXMgRW5hYmxlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdHVzOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zU0NJTVNlcnZlckNyZWRlbnRpYWxQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc1NDSU1TZXJ2ZXJDcmVkZW50aWFsLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJDcmVkZW50aWFsSWQgPSB0aGlzLmdldEF0dCgnQ3JlZGVudGlhbElkJyk7XG4gICAgICAgIHRoaXMuYXR0ckNyZWRlbnRpYWxTZWNyZXQgPSB0aGlzLmdldEF0dCgnQ3JlZGVudGlhbFNlY3JldCcpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5kaXJlY3RvcnlJZCA9IHByb3BzLmRpcmVjdG9yeUlkO1xuICAgICAgICB0aGlzLnN0YXR1cyA9IHByb3BzLnN0YXR1cztcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkaXJlY3RvcnlJZDogdGhpcy5kaXJlY3RvcnlJZCxcbiAgICAgICAgICAgIHN0YXR1czogdGhpcy5zdGF0dXMsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc1NDSU1TZXJ2ZXJDcmVkZW50aWFsUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUm9zU0NJTVN5bmNocm9uaXphdGlvbmAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1jbG91ZHNzby1zY2ltc3luY2hyb25pemF0aW9uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zU0NJTVN5bmNocm9uaXphdGlvblByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkaXJlY3RvcnlJZDogVGhlIElEIG9mIHRoZSBkaXJlY3RvcnkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGlyZWN0b3J5SWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzY2ltU3luY2hyb25pemF0aW9uU3RhdHVzOiBUaGUgc3RhdHVzIG9mIFNDSU0gc3luY2hyb25pemF0aW9uLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSBFbmFibGVkXG4gICAgICogLSBEaXNhYmxlZFxuICAgICAqIFRoZSBkZWZhdWx0IHZhbHVlIGlzIEVuYWJsZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2NpbVN5bmNocm9uaXphdGlvblN0YXR1cz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NTQ0lNU3luY2hyb25pemF0aW9uUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1NDSU1TeW5jaHJvbml6YXRpb25Qcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NTQ0lNU3luY2hyb25pemF0aW9uUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkaXJlY3RvcnlJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5kaXJlY3RvcnlJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGlyZWN0b3J5SWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZGlyZWN0b3J5SWQpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnNjaW1TeW5jaHJvbml6YXRpb25TdGF0dXMgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnNjaW1TeW5jaHJvbml6YXRpb25TdGF0dXMpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NjaW1TeW5jaHJvbml6YXRpb25TdGF0dXMnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5zY2ltU3luY2hyb25pemF0aW9uU3RhdHVzLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIkVuYWJsZWRcIixcIkRpc2FibGVkXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2NpbVN5bmNocm9uaXphdGlvblN0YXR1cycsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zY2ltU3luY2hyb25pemF0aW9uU3RhdHVzKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc1NDSU1TeW5jaHJvbml6YXRpb25Qcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q2xvdWRTU086OlNDSU1TeW5jaHJvbml6YXRpb25gIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1NDSU1TeW5jaHJvbml6YXRpb25Qcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q2xvdWRTU086OlNDSU1TeW5jaHJvbml6YXRpb25gIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zU0NJTVN5bmNocm9uaXphdGlvblByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zU0NJTVN5bmNocm9uaXphdGlvblByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICdEaXJlY3RvcnlJZCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGlyZWN0b3J5SWQpLFxuICAgICAgJ1NDSU1TeW5jaHJvbml6YXRpb25TdGF0dXMnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnNjaW1TeW5jaHJvbml6YXRpb25TdGF0dXMpLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OkNsb3VkU1NPOjpTQ0lNU3luY2hyb25pemF0aW9uYC5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgZG9lcyBub3QgY29udGFpbiBhZGRpdGlvbmFsIGZ1bmN0aW9ucywgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgU0NJTVN5bmNocm9uaXphdGlvbmAgY2xhc3MgaW5zdGVhZCBvZiB0aGlzIGNsYXNzIGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tY2xvdWRzc28tc2NpbXN5bmNocm9uaXphdGlvblxuICovXG5leHBvcnQgY2xhc3MgUm9zU0NJTVN5bmNocm9uaXphdGlvbiBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6Q2xvdWRTU086OlNDSU1TeW5jaHJvbml6YXRpb25cIjtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRpcmVjdG9yeUlkOiBUaGUgSUQgb2YgdGhlIGRpcmVjdG9yeS5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGlyZWN0b3J5SWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzY2ltU3luY2hyb25pemF0aW9uU3RhdHVzOiBUaGUgc3RhdHVzIG9mIFNDSU0gc3luY2hyb25pemF0aW9uLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSBFbmFibGVkXG4gICAgICogLSBEaXNhYmxlZFxuICAgICAqIFRoZSBkZWZhdWx0IHZhbHVlIGlzIEVuYWJsZWQuXG4gICAgICovXG4gICAgcHVibGljIHNjaW1TeW5jaHJvbml6YXRpb25TdGF0dXM6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NTQ0lNU3luY2hyb25pemF0aW9uUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NTQ0lNU3luY2hyb25pemF0aW9uLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5kaXJlY3RvcnlJZCA9IHByb3BzLmRpcmVjdG9yeUlkO1xuICAgICAgICB0aGlzLnNjaW1TeW5jaHJvbml6YXRpb25TdGF0dXMgPSBwcm9wcy5zY2ltU3luY2hyb25pemF0aW9uU3RhdHVzO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRpcmVjdG9yeUlkOiB0aGlzLmRpcmVjdG9yeUlkLFxuICAgICAgICAgICAgc2NpbVN5bmNocm9uaXphdGlvblN0YXR1czogdGhpcy5zY2ltU3luY2hyb25pemF0aW9uU3RhdHVzLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NTQ0lNU3luY2hyb25pemF0aW9uUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUm9zVXNlcmAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1jbG91ZHNzby11c2VyXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zVXNlclByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkaXJlY3RvcnlJZDogVGhlIElEIG9mIHRoZSBkaXJlY3RvcnkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGlyZWN0b3J5SWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB1c2VyTmFtZTogVGhlIG5hbWUgb2YgdGhlIHVzZXIuIFRoZSBuYW1lIG11c3QgYmUgdW5pcXVlIHdpdGhpbiB0aGUgZGlyZWN0b3J5LiBUaGUgbmFtZSBjYW5ub3QgYmUgY2hhbmdlZC5cbiAgICAgKiBUaGUgbmFtZSBjYW4gY29udGFpbiBudW1iZXJzLCBsZXR0ZXJzLCBhbmQgdGhlIGZvbGxvd2luZyBzcGVjaWFsIGNoYXJhY3RlcnM6IEBfLS5cbiAgICAgKiBUaGUgbmFtZSBjYW4gYmUgdXAgdG8gNjQgY2hhcmFjdGVycyBpbiBsZW5ndGguXG4gICAgICovXG4gICAgcmVhZG9ubHkgdXNlck5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSB1c2VyLlxuICAgICAqIFRoZSBkZXNjcmlwdGlvbiBjYW4gYmUgdXAgdG8gMSwwMjQgY2hhcmFjdGVycyBpbiBsZW5ndGguXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGlzcGxheU5hbWU6IFRoZSBkaXNwbGF5IG5hbWUgb2YgdGhlIHVzZXIuXG4gICAgICogVGhlIG5hbWUgY2FuIGJlIHVwIHRvIDI1NiBjaGFyYWN0ZXJzIGluIGxlbmd0aC5cbiAgICAgKi9cbiAgICByZWFkb25seSBkaXNwbGF5TmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBlbWFpbDogVGhlIGVtYWlsIGFkZHJlc3Mgb2YgdGhlIHVzZXIuIFRoZSBlbWFpbCBhZGRyZXNzIG11c3QgYmUgdW5pcXVlIHdpdGhpbiB0aGUgZGlyZWN0b3J5LlxuICAgICAqIFRoZSBlbWFpbCBhZGRyZXNzIGNhbiBiZSB1cCB0byAxMjggY2hhcmFjdGVycyBpbiBsZW5ndGguXG4gICAgICovXG4gICAgcmVhZG9ubHkgZW1haWw/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZmlyc3ROYW1lOiBUaGUgZmlyc3QgbmFtZSBvZiB0aGUgdXNlci5cbiAgICAgKiBUaGUgbmFtZSBjYW4gYmUgdXAgdG8gNjQgY2hhcmFjdGVycyBpbiBsZW5ndGguXG4gICAgICovXG4gICAgcmVhZG9ubHkgZmlyc3ROYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGxhc3ROYW1lOiBUaGUgbGFzdCBuYW1lIG9mIHRoZSB1c2VyLlxuICAgICAqIFRoZSBuYW1lIGNhbiBiZSB1cCB0byA2NCBjaGFyYWN0ZXJzIGluIGxlbmd0aC5cbiAgICAgKi9cbiAgICByZWFkb25seSBsYXN0TmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzdGF0dXM6IFRoZSBzdGF0dXMgb2YgdGhlIHVzZXIuIFZhbGlkIHZhbHVlczpcbiAgICAgKiAtIEVuYWJsZWQ6IFRoZSBsb2dvbiBvZiB0aGUgdXNlciBpcyBlbmFibGVkLiBUaGlzIGlzIHRoZSBkZWZhdWx0IHZhbHVlLlxuICAgICAqIC0gRGlzYWJsZWQ6IFRoZSBsb2dvbiBvZiB0aGUgdXNlciBpcyBkaXNhYmxlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBzdGF0dXM/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zVXNlclByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NVc2VyUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zVXNlclByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGlmKHByb3BlcnRpZXMuc3RhdHVzICYmICh0eXBlb2YgcHJvcGVydGllcy5zdGF0dXMpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N0YXR1cycsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnN0YXR1cyxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJFbmFibGVkXCIsXCJEaXNhYmxlZFwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N0YXR1cycsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zdGF0dXMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RpcmVjdG9yeUlkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmRpcmVjdG9yeUlkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkaXJlY3RvcnlJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5kaXJlY3RvcnlJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndXNlck5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMudXNlck5hbWUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnVzZXJOYW1lICYmICh0eXBlb2YgcHJvcGVydGllcy51c2VyTmFtZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndXNlck5hbWUnLCByb3MudmFsaWRhdGVBbGxvd2VkUGF0dGVybikoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMudXNlck5hbWUsXG4gICAgICAgICAgcmVnOiAvXlthLXpBLVowLTlALl8tXXsxLDY0fSQvXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd1c2VyTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy51c2VyTmFtZSkpO1xuICAgIGlmKHByb3BlcnRpZXMuZGVzY3JpcHRpb24gJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5kZXNjcmlwdGlvbikgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVzY3JpcHRpb24nLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuZGVzY3JpcHRpb24ubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtYXg6IDEwMjQsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Rlc2NyaXB0aW9uJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSk7XG4gICAgaWYocHJvcGVydGllcy5lbWFpbCAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLmVtYWlsKSB8fCAodHlwZW9mIHByb3BlcnRpZXMuZW1haWwpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdlbWFpbCcsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5lbWFpbC5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG1heDogMTI4LFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdlbWFpbCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5lbWFpbCkpO1xuICAgIGlmKHByb3BlcnRpZXMuZmlyc3ROYW1lICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMuZmlyc3ROYW1lKSB8fCAodHlwZW9mIHByb3BlcnRpZXMuZmlyc3ROYW1lKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZmlyc3ROYW1lJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmZpcnN0TmFtZS5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG1heDogNjQsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2ZpcnN0TmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5maXJzdE5hbWUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmRpc3BsYXlOYW1lICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMuZGlzcGxheU5hbWUpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5kaXNwbGF5TmFtZSkgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Rpc3BsYXlOYW1lJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmRpc3BsYXlOYW1lLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbWF4OiAyNTYsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Rpc3BsYXlOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmRpc3BsYXlOYW1lKSk7XG4gICAgaWYocHJvcGVydGllcy5sYXN0TmFtZSAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLmxhc3ROYW1lKSB8fCAodHlwZW9mIHByb3BlcnRpZXMubGFzdE5hbWUpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdsYXN0TmFtZScsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5sYXN0TmFtZS5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG1heDogNjQsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2xhc3ROYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmxhc3ROYW1lKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc1VzZXJQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q2xvdWRTU086OlVzZXJgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1VzZXJQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q2xvdWRTU086OlVzZXJgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zVXNlclByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zVXNlclByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICdEaXJlY3RvcnlJZCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGlyZWN0b3J5SWQpLFxuICAgICAgJ1VzZXJOYW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy51c2VyTmFtZSksXG4gICAgICAnRGVzY3JpcHRpb24nOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSxcbiAgICAgICdEaXNwbGF5TmFtZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGlzcGxheU5hbWUpLFxuICAgICAgJ0VtYWlsJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5lbWFpbCksXG4gICAgICAnRmlyc3ROYW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5maXJzdE5hbWUpLFxuICAgICAgJ0xhc3ROYW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5sYXN0TmFtZSksXG4gICAgICAnU3RhdHVzJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zdGF0dXMpLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OkNsb3VkU1NPOjpVc2VyYCwgd2hpY2ggaXMgdXNlZCB0byBjcmVhdGUgYSB1c2VyLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBVc2VyYCBjbGFzcyBpbnN0ZWFkIG9mIHRoaXMgY2xhc3MgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1jbG91ZHNzby11c2VyXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NVc2VyIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpDbG91ZFNTTzo6VXNlclwiO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBVc2VySWQ6IFRoZSBJRCBvZiB0aGUgdXNlci5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clVzZXJJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGlyZWN0b3J5SWQ6IFRoZSBJRCBvZiB0aGUgZGlyZWN0b3J5LlxuICAgICAqL1xuICAgIHB1YmxpYyBkaXJlY3RvcnlJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHVzZXJOYW1lOiBUaGUgbmFtZSBvZiB0aGUgdXNlci4gVGhlIG5hbWUgbXVzdCBiZSB1bmlxdWUgd2l0aGluIHRoZSBkaXJlY3RvcnkuIFRoZSBuYW1lIGNhbm5vdCBiZSBjaGFuZ2VkLlxuICAgICAqIFRoZSBuYW1lIGNhbiBjb250YWluIG51bWJlcnMsIGxldHRlcnMsIGFuZCB0aGUgZm9sbG93aW5nIHNwZWNpYWwgY2hhcmFjdGVyczogQF8tLlxuICAgICAqIFRoZSBuYW1lIGNhbiBiZSB1cCB0byA2NCBjaGFyYWN0ZXJzIGluIGxlbmd0aC5cbiAgICAgKi9cbiAgICBwdWJsaWMgdXNlck5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSB1c2VyLlxuICAgICAqIFRoZSBkZXNjcmlwdGlvbiBjYW4gYmUgdXAgdG8gMSwwMjQgY2hhcmFjdGVycyBpbiBsZW5ndGguXG4gICAgICovXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGlzcGxheU5hbWU6IFRoZSBkaXNwbGF5IG5hbWUgb2YgdGhlIHVzZXIuXG4gICAgICogVGhlIG5hbWUgY2FuIGJlIHVwIHRvIDI1NiBjaGFyYWN0ZXJzIGluIGxlbmd0aC5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGlzcGxheU5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBlbWFpbDogVGhlIGVtYWlsIGFkZHJlc3Mgb2YgdGhlIHVzZXIuIFRoZSBlbWFpbCBhZGRyZXNzIG11c3QgYmUgdW5pcXVlIHdpdGhpbiB0aGUgZGlyZWN0b3J5LlxuICAgICAqIFRoZSBlbWFpbCBhZGRyZXNzIGNhbiBiZSB1cCB0byAxMjggY2hhcmFjdGVycyBpbiBsZW5ndGguXG4gICAgICovXG4gICAgcHVibGljIGVtYWlsOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZmlyc3ROYW1lOiBUaGUgZmlyc3QgbmFtZSBvZiB0aGUgdXNlci5cbiAgICAgKiBUaGUgbmFtZSBjYW4gYmUgdXAgdG8gNjQgY2hhcmFjdGVycyBpbiBsZW5ndGguXG4gICAgICovXG4gICAgcHVibGljIGZpcnN0TmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGxhc3ROYW1lOiBUaGUgbGFzdCBuYW1lIG9mIHRoZSB1c2VyLlxuICAgICAqIFRoZSBuYW1lIGNhbiBiZSB1cCB0byA2NCBjaGFyYWN0ZXJzIGluIGxlbmd0aC5cbiAgICAgKi9cbiAgICBwdWJsaWMgbGFzdE5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzdGF0dXM6IFRoZSBzdGF0dXMgb2YgdGhlIHVzZXIuIFZhbGlkIHZhbHVlczpcbiAgICAgKiAtIEVuYWJsZWQ6IFRoZSBsb2dvbiBvZiB0aGUgdXNlciBpcyBlbmFibGVkLiBUaGlzIGlzIHRoZSBkZWZhdWx0IHZhbHVlLlxuICAgICAqIC0gRGlzYWJsZWQ6IFRoZSBsb2dvbiBvZiB0aGUgdXNlciBpcyBkaXNhYmxlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdHVzOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zVXNlclByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zVXNlci5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyVXNlcklkID0gdGhpcy5nZXRBdHQoJ1VzZXJJZCcpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5kaXJlY3RvcnlJZCA9IHByb3BzLmRpcmVjdG9yeUlkO1xuICAgICAgICB0aGlzLnVzZXJOYW1lID0gcHJvcHMudXNlck5hbWU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBwcm9wcy5kZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kaXNwbGF5TmFtZSA9IHByb3BzLmRpc3BsYXlOYW1lO1xuICAgICAgICB0aGlzLmVtYWlsID0gcHJvcHMuZW1haWw7XG4gICAgICAgIHRoaXMuZmlyc3ROYW1lID0gcHJvcHMuZmlyc3ROYW1lO1xuICAgICAgICB0aGlzLmxhc3ROYW1lID0gcHJvcHMubGFzdE5hbWU7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gcHJvcHMuc3RhdHVzO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRpcmVjdG9yeUlkOiB0aGlzLmRpcmVjdG9yeUlkLFxuICAgICAgICAgICAgdXNlck5hbWU6IHRoaXMudXNlck5hbWUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiB0aGlzLmRpc3BsYXlOYW1lLFxuICAgICAgICAgICAgZW1haWw6IHRoaXMuZW1haWwsXG4gICAgICAgICAgICBmaXJzdE5hbWU6IHRoaXMuZmlyc3ROYW1lLFxuICAgICAgICAgICAgbGFzdE5hbWU6IHRoaXMubGFzdE5hbWUsXG4gICAgICAgICAgICBzdGF0dXM6IHRoaXMuc3RhdHVzLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NVc2VyUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUm9zVXNlclByb3Zpc2lvbmAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1jbG91ZHNzby11c2VycHJvdmlzaW9uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zVXNlclByb3Zpc2lvblByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZWxldGlvblN0cmF0ZWd5OiBEZWxldGUgcG9saWN5LiBUaGUgdHJlYXRtZW50IHN0cmF0ZWd5IGZvciB0aGUgc3luY2hyb25pemVkIFJBTSB1c2VycyB3aGVuIHRoZSBSQU0gdXNlciBzeW5jaHJvbml6YXRpb24gaXMgcmVtb3ZlZC4gVmFsaWQgdmFsdWVzOlxuICAgICAqIC0gRGVsZXRlOiBEZWxldGUgV2hlbiB0aGUgUkFNIHVzZXIgc3luY2hyb25pemF0aW9uIGlzIHJlbW92ZWQsIHRoZSBSQU0gdXNlcnMgdGhhdCBoYXZlIGJlZW4gc3luY2hyb25pemVkIHRvIHRoZSBSQU0gZnJvbSB0aGUgY2xvdWQgU1NPIGFyZSBkZWxldGVkLlxuICAgICAqIC0gS2VlcDogV2hlbiB0aGUgUkFNIHVzZXIgc3luY2hyb25pemF0aW9uIGlzIHJlbW92ZWQsIHRoZSBSQU0gdXNlcnMgdGhhdCBoYXZlIGJlZW4gc3luY2hyb25pemVkIHRvIHRoZSBSQU0gZnJvbSB0aGUgY2xvdWQgU1NPIGFyZSByZXRhaW5lZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZWxldGlvblN0cmF0ZWd5OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGlyZWN0b3J5SWQ6IFRoZSBJRCBvZiB0aGUgZGlyZWN0b3J5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRpcmVjdG9yeUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZHVwbGljYXRpb25TdHJhdGVneTogQ29uZmxpY3QgcG9saWN5LiBXaGVuIHRoZSBjbG91ZCBTU08gdXNlciBpcyBzeW5jaHJvbml6ZWQgdG8gdGhlIFJBTSwgdGhlIHByb2Nlc3Npbmcgc3RyYXRlZ3kgaWYgdGhlcmUgaXMgYSB1c2VyIHdpdGggdGhlIHNhbWUgbmFtZSBpbiB0aGUgUkFNLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSBLZWVwQm90aDogS2VlcCBib3RoIG9mIHRoZW0uIFdoZW4gdGhlIGNsb3VkIFNTTyB1c2VyIGlzIHN5bmNocm9uaXplZCB0byBSQU0sIGlmIHRoZSBSQU0gYWxyZWFkeSBoYXMgYSB1c2VyIHdpdGggdGhlIHNhbWUgbmFtZSwgaXQgd2lsbCB0cnkgdG8gY3JlYXRlIGEgUkFNIHVzZXIgd2l0aCB0aGUgdXNlciBuYW1lIGFmdGVyIGFkZGluZyB0aGUgc3VmZml4IF9zc28gdG8gdGhlIHVzZXIgbmFtZSBvZiB0aGUgY2xvdWQgU1NPIHVzZXIuXG4gICAgICogLSBUYWtlT3ZlcjogVGFrZSBvdmVyLiBXaGVuIHRoZSBjbG91ZCBTU08gdXNlciBpcyBzeW5jaHJvbml6ZWQgdG8gdGhlIFJBTSwgaWYgdGhlIFJBTSBhbHJlYWR5IGhhcyBhIHVzZXIgd2l0aCB0aGUgc2FtZSBuYW1lLCB0aGUgZXhpc3RpbmcgUkFNIHVzZXIgaXMgZGlyZWN0bHkgcmVwbGFjZWQgYnkgdGhlIGNsb3VkIFNTTyBzeW5jaHJvbml6YXRpb24gdXNlci5cbiAgICAgKi9cbiAgICByZWFkb25seSBkdXBsaWNhdGlvblN0cmF0ZWd5OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcHJpbmNpcGFsSWQ6IFRoZSBJRCBvZiB0aGUgcHJpbmNpcGFsLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSBXaGVuIHRoZSBQcmluY2lwYWxUeXBlIHZhbHVlIGlzIEdyb3VwLCB0aGUgdmFsdWUgaXMgdGhlIGNsb3VkIFNTTyB1c2VyIGdyb3VwIElEIChnLSoqKioqKioqKS5cbiAgICAgKiAtIFdoZW4gUHJpbmNpcGFsVHlwZSB0YWtlcyB0aGUgdmFsdWUgVXNlciwgdGhpcyB2YWx1ZSBpcyB0aGUgY2xvdWQgU1NPIHVzZXIgSUQgKHUtKioqKioqKiopLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHByaW5jaXBhbElkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcHJpbmNpcGFsVHlwZTogVGhlIHR5cGUgb2YgdGhlIHByaW5jaXBhbC4gVmFsaWQgdmFsdWVzOlxuICAgICAqIC0gVXNlcjogVGhlIHByaW5jaXBhbCBpcyBhIGNsb3VkIFNTTyB1c2VyLlxuICAgICAqIC0gR3JvdXA6IFRoZSBwcmluY2lwYWwgaXMgYSBjbG91ZCBTU08gZ3JvdXAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcHJpbmNpcGFsVHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRhcmdldElkOiBUYXJnZXQgSUQgZm9yIFJBTSB1c2VyIHN5bmNocm9uaXphdGlvbi4gQ3VycmVudGx5LCBpdCBpcyB0aGUgUkQgYWNjb3VudCBJRC5cbiAgICAgKi9cbiAgICByZWFkb25seSB0YXJnZXRJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRhcmdldFR5cGU6IFRhcmdldCB0eXBlIGZvciBSQU0gdXNlciBzeW5jaHJvbml6YXRpb24uIEN1cnJlbnRseSwgaXQgaXMgUkQtQWNjb3VudC5cbiAgICAgKi9cbiAgICByZWFkb25seSB0YXJnZXRUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVzY3JpcHRpb246IFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgdXNlci5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NVc2VyUHJvdmlzaW9uUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1VzZXJQcm92aXNpb25Qcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NVc2VyUHJvdmlzaW9uUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkaXJlY3RvcnlJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5kaXJlY3RvcnlJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGlyZWN0b3J5SWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZGlyZWN0b3J5SWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Rlc2NyaXB0aW9uJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwcmluY2lwYWxJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5wcmluY2lwYWxJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncHJpbmNpcGFsSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucHJpbmNpcGFsSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RhcmdldFR5cGUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMudGFyZ2V0VHlwZSkpO1xuICAgIGlmKHByb3BlcnRpZXMudGFyZ2V0VHlwZSAmJiAodHlwZW9mIHByb3BlcnRpZXMudGFyZ2V0VHlwZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGFyZ2V0VHlwZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnRhcmdldFR5cGUsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiUkQtQWNjb3VudFwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RhcmdldFR5cGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudGFyZ2V0VHlwZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZHVwbGljYXRpb25TdHJhdGVneScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5kdXBsaWNhdGlvblN0cmF0ZWd5KSk7XG4gICAgaWYocHJvcGVydGllcy5kdXBsaWNhdGlvblN0cmF0ZWd5ICYmICh0eXBlb2YgcHJvcGVydGllcy5kdXBsaWNhdGlvblN0cmF0ZWd5KSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkdXBsaWNhdGlvblN0cmF0ZWd5Jywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuZHVwbGljYXRpb25TdHJhdGVneSxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJLZWVwQm90aFwiLFwiVGFrZU92ZXJcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkdXBsaWNhdGlvblN0cmF0ZWd5Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmR1cGxpY2F0aW9uU3RyYXRlZ3kpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RlbGV0aW9uU3RyYXRlZ3knLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuZGVsZXRpb25TdHJhdGVneSkpO1xuICAgIGlmKHByb3BlcnRpZXMuZGVsZXRpb25TdHJhdGVneSAmJiAodHlwZW9mIHByb3BlcnRpZXMuZGVsZXRpb25TdHJhdGVneSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVsZXRpb25TdHJhdGVneScsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmRlbGV0aW9uU3RyYXRlZ3ksXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiRGVsZXRlXCIsXCJLZWVwXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVsZXRpb25TdHJhdGVneScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5kZWxldGlvblN0cmF0ZWd5KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwcmluY2lwYWxUeXBlJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnByaW5jaXBhbFR5cGUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnByaW5jaXBhbFR5cGUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnByaW5jaXBhbFR5cGUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ByaW5jaXBhbFR5cGUnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5wcmluY2lwYWxUeXBlLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIlVzZXJcIixcIkdyb3VwXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncHJpbmNpcGFsVHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wcmluY2lwYWxUeXBlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0YXJnZXRJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy50YXJnZXRJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGFyZ2V0SWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudGFyZ2V0SWQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zVXNlclByb3Zpc2lvblByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpDbG91ZFNTTzo6VXNlclByb3Zpc2lvbmAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zVXNlclByb3Zpc2lvblByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpDbG91ZFNTTzo6VXNlclByb3Zpc2lvbmAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NVc2VyUHJvdmlzaW9uUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NVc2VyUHJvdmlzaW9uUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgJ0RlbGV0aW9uU3RyYXRlZ3knOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRlbGV0aW9uU3RyYXRlZ3kpLFxuICAgICAgJ0RpcmVjdG9yeUlkJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kaXJlY3RvcnlJZCksXG4gICAgICAnRHVwbGljYXRpb25TdHJhdGVneSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZHVwbGljYXRpb25TdHJhdGVneSksXG4gICAgICAnUHJpbmNpcGFsSWQnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnByaW5jaXBhbElkKSxcbiAgICAgICdQcmluY2lwYWxUeXBlJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wcmluY2lwYWxUeXBlKSxcbiAgICAgICdUYXJnZXRJZCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudGFyZ2V0SWQpLFxuICAgICAgJ1RhcmdldFR5cGUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnRhcmdldFR5cGUpLFxuICAgICAgJ0Rlc2NyaXB0aW9uJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kZXNjcmlwdGlvbiksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgYmFzZSBlbmNhcHN1bGF0aW9uIGFyb3VuZCB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6Q2xvdWRTU086OlVzZXJQcm92aXNpb25gLCB3aGljaCBpcyB1c2VkIHRvIGNyZWF0ZSBhIFJlc291cmNlIEFjY2VzcyBNYW5hZ2VtZW50IChSQU0pIHVzZXIgcHJvdmlzaW9uaW5nLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBVc2VyUHJvdmlzaW9uYCBjbGFzcyBpbnN0ZWFkIG9mIHRoaXMgY2xhc3MgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1jbG91ZHNzby11c2VycHJvdmlzaW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NVc2VyUHJvdmlzaW9uIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpDbG91ZFNTTzo6VXNlclByb3Zpc2lvblwiO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBVc2VyUHJvdmlzaW9uSWQ6IFRoZSBJRCBvZiB0aGUgdXNlciBwcm92aXNpb25pbmcuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJVc2VyUHJvdmlzaW9uSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlbGV0aW9uU3RyYXRlZ3k6IERlbGV0ZSBwb2xpY3kuIFRoZSB0cmVhdG1lbnQgc3RyYXRlZ3kgZm9yIHRoZSBzeW5jaHJvbml6ZWQgUkFNIHVzZXJzIHdoZW4gdGhlIFJBTSB1c2VyIHN5bmNocm9uaXphdGlvbiBpcyByZW1vdmVkLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSBEZWxldGU6IERlbGV0ZSBXaGVuIHRoZSBSQU0gdXNlciBzeW5jaHJvbml6YXRpb24gaXMgcmVtb3ZlZCwgdGhlIFJBTSB1c2VycyB0aGF0IGhhdmUgYmVlbiBzeW5jaHJvbml6ZWQgdG8gdGhlIFJBTSBmcm9tIHRoZSBjbG91ZCBTU08gYXJlIGRlbGV0ZWQuXG4gICAgICogLSBLZWVwOiBXaGVuIHRoZSBSQU0gdXNlciBzeW5jaHJvbml6YXRpb24gaXMgcmVtb3ZlZCwgdGhlIFJBTSB1c2VycyB0aGF0IGhhdmUgYmVlbiBzeW5jaHJvbml6ZWQgdG8gdGhlIFJBTSBmcm9tIHRoZSBjbG91ZCBTU08gYXJlIHJldGFpbmVkLlxuICAgICAqL1xuICAgIHB1YmxpYyBkZWxldGlvblN0cmF0ZWd5OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGlyZWN0b3J5SWQ6IFRoZSBJRCBvZiB0aGUgZGlyZWN0b3J5LlxuICAgICAqL1xuICAgIHB1YmxpYyBkaXJlY3RvcnlJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGR1cGxpY2F0aW9uU3RyYXRlZ3k6IENvbmZsaWN0IHBvbGljeS4gV2hlbiB0aGUgY2xvdWQgU1NPIHVzZXIgaXMgc3luY2hyb25pemVkIHRvIHRoZSBSQU0sIHRoZSBwcm9jZXNzaW5nIHN0cmF0ZWd5IGlmIHRoZXJlIGlzIGEgdXNlciB3aXRoIHRoZSBzYW1lIG5hbWUgaW4gdGhlIFJBTS4gVmFsaWQgdmFsdWVzOlxuICAgICAqIC0gS2VlcEJvdGg6IEtlZXAgYm90aCBvZiB0aGVtLiBXaGVuIHRoZSBjbG91ZCBTU08gdXNlciBpcyBzeW5jaHJvbml6ZWQgdG8gUkFNLCBpZiB0aGUgUkFNIGFscmVhZHkgaGFzIGEgdXNlciB3aXRoIHRoZSBzYW1lIG5hbWUsIGl0IHdpbGwgdHJ5IHRvIGNyZWF0ZSBhIFJBTSB1c2VyIHdpdGggdGhlIHVzZXIgbmFtZSBhZnRlciBhZGRpbmcgdGhlIHN1ZmZpeCBfc3NvIHRvIHRoZSB1c2VyIG5hbWUgb2YgdGhlIGNsb3VkIFNTTyB1c2VyLlxuICAgICAqIC0gVGFrZU92ZXI6IFRha2Ugb3Zlci4gV2hlbiB0aGUgY2xvdWQgU1NPIHVzZXIgaXMgc3luY2hyb25pemVkIHRvIHRoZSBSQU0sIGlmIHRoZSBSQU0gYWxyZWFkeSBoYXMgYSB1c2VyIHdpdGggdGhlIHNhbWUgbmFtZSwgdGhlIGV4aXN0aW5nIFJBTSB1c2VyIGlzIGRpcmVjdGx5IHJlcGxhY2VkIGJ5IHRoZSBjbG91ZCBTU08gc3luY2hyb25pemF0aW9uIHVzZXIuXG4gICAgICovXG4gICAgcHVibGljIGR1cGxpY2F0aW9uU3RyYXRlZ3k6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwcmluY2lwYWxJZDogVGhlIElEIG9mIHRoZSBwcmluY2lwYWwuIFZhbGlkIHZhbHVlczpcbiAgICAgKiAtIFdoZW4gdGhlIFByaW5jaXBhbFR5cGUgdmFsdWUgaXMgR3JvdXAsIHRoZSB2YWx1ZSBpcyB0aGUgY2xvdWQgU1NPIHVzZXIgZ3JvdXAgSUQgKGctKioqKioqKiopLlxuICAgICAqIC0gV2hlbiBQcmluY2lwYWxUeXBlIHRha2VzIHRoZSB2YWx1ZSBVc2VyLCB0aGlzIHZhbHVlIGlzIHRoZSBjbG91ZCBTU08gdXNlciBJRCAodS0qKioqKioqKikuXG4gICAgICovXG4gICAgcHVibGljIHByaW5jaXBhbElkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcHJpbmNpcGFsVHlwZTogVGhlIHR5cGUgb2YgdGhlIHByaW5jaXBhbC4gVmFsaWQgdmFsdWVzOlxuICAgICAqIC0gVXNlcjogVGhlIHByaW5jaXBhbCBpcyBhIGNsb3VkIFNTTyB1c2VyLlxuICAgICAqIC0gR3JvdXA6IFRoZSBwcmluY2lwYWwgaXMgYSBjbG91ZCBTU08gZ3JvdXAuXG4gICAgICovXG4gICAgcHVibGljIHByaW5jaXBhbFR5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0YXJnZXRJZDogVGFyZ2V0IElEIGZvciBSQU0gdXNlciBzeW5jaHJvbml6YXRpb24uIEN1cnJlbnRseSwgaXQgaXMgdGhlIFJEIGFjY291bnQgSUQuXG4gICAgICovXG4gICAgcHVibGljIHRhcmdldElkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGFyZ2V0VHlwZTogVGFyZ2V0IHR5cGUgZm9yIFJBTSB1c2VyIHN5bmNocm9uaXphdGlvbi4gQ3VycmVudGx5LCBpdCBpcyBSRC1BY2NvdW50LlxuICAgICAqL1xuICAgIHB1YmxpYyB0YXJnZXRUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVzY3JpcHRpb246IFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgdXNlci5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NVc2VyUHJvdmlzaW9uUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NVc2VyUHJvdmlzaW9uLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJVc2VyUHJvdmlzaW9uSWQgPSB0aGlzLmdldEF0dCgnVXNlclByb3Zpc2lvbklkJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmRlbGV0aW9uU3RyYXRlZ3kgPSBwcm9wcy5kZWxldGlvblN0cmF0ZWd5O1xuICAgICAgICB0aGlzLmRpcmVjdG9yeUlkID0gcHJvcHMuZGlyZWN0b3J5SWQ7XG4gICAgICAgIHRoaXMuZHVwbGljYXRpb25TdHJhdGVneSA9IHByb3BzLmR1cGxpY2F0aW9uU3RyYXRlZ3k7XG4gICAgICAgIHRoaXMucHJpbmNpcGFsSWQgPSBwcm9wcy5wcmluY2lwYWxJZDtcbiAgICAgICAgdGhpcy5wcmluY2lwYWxUeXBlID0gcHJvcHMucHJpbmNpcGFsVHlwZTtcbiAgICAgICAgdGhpcy50YXJnZXRJZCA9IHByb3BzLnRhcmdldElkO1xuICAgICAgICB0aGlzLnRhcmdldFR5cGUgPSBwcm9wcy50YXJnZXRUeXBlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gcHJvcHMuZGVzY3JpcHRpb247XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGVsZXRpb25TdHJhdGVneTogdGhpcy5kZWxldGlvblN0cmF0ZWd5LFxuICAgICAgICAgICAgZGlyZWN0b3J5SWQ6IHRoaXMuZGlyZWN0b3J5SWQsXG4gICAgICAgICAgICBkdXBsaWNhdGlvblN0cmF0ZWd5OiB0aGlzLmR1cGxpY2F0aW9uU3RyYXRlZ3ksXG4gICAgICAgICAgICBwcmluY2lwYWxJZDogdGhpcy5wcmluY2lwYWxJZCxcbiAgICAgICAgICAgIHByaW5jaXBhbFR5cGU6IHRoaXMucHJpbmNpcGFsVHlwZSxcbiAgICAgICAgICAgIHRhcmdldElkOiB0aGlzLnRhcmdldElkLFxuICAgICAgICAgICAgdGFyZ2V0VHlwZTogdGhpcy50YXJnZXRUeXBlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc1VzZXJQcm92aXNpb25Qcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NVc2VyVG9Hcm91cEFkZGl0aW9uYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWNsb3Vkc3NvLXVzZXJ0b2dyb3VwYWRkaXRpb25cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NVc2VyVG9Hcm91cEFkZGl0aW9uUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRpcmVjdG9yeUlkOiBUaGUgSUQgb2YgdGhlIGRpcmVjdG9yeS5cbiAgICAgKi9cbiAgICByZWFkb25seSBkaXJlY3RvcnlJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGdyb3VwSWQ6IFRoZSBJRCBvZiB0aGUgZ3JvdXAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZ3JvdXBJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHVzZXJJZDogVGhlIElEIG9mIHRoZSB1c2VyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHVzZXJJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc1VzZXJUb0dyb3VwQWRkaXRpb25Qcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zVXNlclRvR3JvdXBBZGRpdGlvblByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1VzZXJUb0dyb3VwQWRkaXRpb25Qcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RpcmVjdG9yeUlkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmRpcmVjdG9yeUlkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkaXJlY3RvcnlJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5kaXJlY3RvcnlJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndXNlcklkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnVzZXJJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndXNlcklkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnVzZXJJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZ3JvdXBJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5ncm91cElkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdncm91cElkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmdyb3VwSWQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zVXNlclRvR3JvdXBBZGRpdGlvblByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpDbG91ZFNTTzo6VXNlclRvR3JvdXBBZGRpdGlvbmAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zVXNlclRvR3JvdXBBZGRpdGlvblByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpDbG91ZFNTTzo6VXNlclRvR3JvdXBBZGRpdGlvbmAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NVc2VyVG9Hcm91cEFkZGl0aW9uUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NVc2VyVG9Hcm91cEFkZGl0aW9uUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgJ0RpcmVjdG9yeUlkJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kaXJlY3RvcnlJZCksXG4gICAgICAnR3JvdXBJZCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZ3JvdXBJZCksXG4gICAgICAnVXNlcklkJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy51c2VySWQpLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OkNsb3VkU1NPOjpVc2VyVG9Hcm91cEFkZGl0aW9uYCwgd2hpY2ggaXMgdXNlZCB0byBhZGQgYSB1c2VyIHRvIGEgZ3JvdXAuXG4gKiBATm90ZSBUaGlzIGNsYXNzIGRvZXMgbm90IGNvbnRhaW4gYWRkaXRpb25hbCBmdW5jdGlvbnMsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgYFVzZXJUb0dyb3VwQWRkaXRpb25gIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWNsb3Vkc3NvLXVzZXJ0b2dyb3VwYWRkaXRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFJvc1VzZXJUb0dyb3VwQWRkaXRpb24gZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OkNsb3VkU1NPOjpVc2VyVG9Hcm91cEFkZGl0aW9uXCI7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkaXJlY3RvcnlJZDogVGhlIElEIG9mIHRoZSBkaXJlY3RvcnkuXG4gICAgICovXG4gICAgcHVibGljIGRpcmVjdG9yeUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZ3JvdXBJZDogVGhlIElEIG9mIHRoZSBncm91cC5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ3JvdXBJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHVzZXJJZDogVGhlIElEIG9mIHRoZSB1c2VyLlxuICAgICAqL1xuICAgIHB1YmxpYyB1c2VySWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NVc2VyVG9Hcm91cEFkZGl0aW9uUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NVc2VyVG9Hcm91cEFkZGl0aW9uLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5kaXJlY3RvcnlJZCA9IHByb3BzLmRpcmVjdG9yeUlkO1xuICAgICAgICB0aGlzLmdyb3VwSWQgPSBwcm9wcy5ncm91cElkO1xuICAgICAgICB0aGlzLnVzZXJJZCA9IHByb3BzLnVzZXJJZDtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkaXJlY3RvcnlJZDogdGhpcy5kaXJlY3RvcnlJZCxcbiAgICAgICAgICAgIGdyb3VwSWQ6IHRoaXMuZ3JvdXBJZCxcbiAgICAgICAgICAgIHVzZXJJZDogdGhpcy51c2VySWQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc1VzZXJUb0dyb3VwQWRkaXRpb25Qcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cbiJdfQ==