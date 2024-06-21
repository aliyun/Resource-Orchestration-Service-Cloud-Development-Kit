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
    errors.collect(ros.propertyValidator('principalType', ros.requiredValidator)(properties.principalType));
    if (properties.principalType && (typeof properties.principalType) !== 'object') {
        errors.collect(ros.propertyValidator('principalType', ros.validateAllowedValues)({
            data: properties.principalType,
            allowedValues: ["User", "Group"],
        }));
    }
    errors.collect(ros.propertyValidator('principalType', ros.validateString)(properties.principalType));
    errors.collect(ros.propertyValidator('accessConfigurationId', ros.requiredValidator)(properties.accessConfigurationId));
    errors.collect(ros.propertyValidator('accessConfigurationId', ros.validateString)(properties.accessConfigurationId));
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
        AccessConfigurationId: ros.stringToRosTemplate(properties.accessConfigurationId),
        DirectoryId: ros.stringToRosTemplate(properties.directoryId),
        PrincipalId: ros.stringToRosTemplate(properties.principalId),
        PrincipalType: ros.stringToRosTemplate(properties.principalType),
        TargetId: ros.stringToRosTemplate(properties.targetId),
        TargetType: ros.stringToRosTemplate(properties.targetType),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CloudSSO::AccessAssignment`, which is used to assign access permissions on an account in your resource directory to a user or group by using an access configuration.
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
    if (properties.sessionDuration && (typeof properties.sessionDuration) !== 'object') {
        errors.collect(ros.propertyValidator('sessionDuration', ros.validateRange)({
            data: properties.sessionDuration,
            min: 900,
            max: 43200,
        }));
    }
    errors.collect(ros.propertyValidator('sessionDuration', ros.validateNumber)(properties.sessionDuration));
    errors.collect(ros.propertyValidator('accessConfigurationName', ros.requiredValidator)(properties.accessConfigurationName));
    if (properties.accessConfigurationName && (typeof properties.accessConfigurationName) !== 'object') {
        errors.collect(ros.propertyValidator('accessConfigurationName', ros.validateAllowedPattern)({
            data: properties.accessConfigurationName,
            reg: /^[a-zA-Z0-9-]{1,32}$/
        }));
    }
    errors.collect(ros.propertyValidator('accessConfigurationName', ros.validateString)(properties.accessConfigurationName));
    errors.collect(ros.propertyValidator('directoryId', ros.requiredValidator)(properties.directoryId));
    errors.collect(ros.propertyValidator('directoryId', ros.validateString)(properties.directoryId));
    errors.collect(ros.propertyValidator('relayState', ros.validateString)(properties.relayState));
    if (properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: undefined,
            max: 1024,
        }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
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
        AccessConfigurationName: ros.stringToRosTemplate(properties.accessConfigurationName),
        DirectoryId: ros.stringToRosTemplate(properties.directoryId),
        Description: ros.stringToRosTemplate(properties.description),
        RelayState: ros.stringToRosTemplate(properties.relayState),
        SessionDuration: ros.numberToRosTemplate(properties.sessionDuration),
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
        AccessConfigurationId: ros.stringToRosTemplate(properties.accessConfigurationId),
        DirectoryId: ros.stringToRosTemplate(properties.directoryId),
        TargetId: ros.stringToRosTemplate(properties.targetId),
        TargetType: ros.stringToRosTemplate(properties.targetType),
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
        DirectoryName: ros.stringToRosTemplate(properties.directoryName),
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
        DirectoryId: ros.stringToRosTemplate(properties.directoryId),
        GroupName: ros.stringToRosTemplate(properties.groupName),
        Description: ros.stringToRosTemplate(properties.description),
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
        AccessConfigurationId: ros.stringToRosTemplate(properties.accessConfigurationId),
        DirectoryId: ros.stringToRosTemplate(properties.directoryId),
        PermissionPolicyName: ros.stringToRosTemplate(properties.permissionPolicyName),
        PermissionPolicyType: ros.stringToRosTemplate(properties.permissionPolicyType),
        InlinePolicyDocument: ros.hashMapper(ros.objectToRosTemplate)(properties.inlinePolicyDocument),
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
        DirectoryId: ros.stringToRosTemplate(properties.directoryId),
        EncodedMetadataDocument: ros.stringToRosTemplate(properties.encodedMetadataDocument),
        EntityId: ros.stringToRosTemplate(properties.entityId),
        LoginUrl: ros.stringToRosTemplate(properties.loginUrl),
        SSOStatus: ros.stringToRosTemplate(properties.ssoStatus),
        WantRequestSigned: ros.booleanToRosTemplate(properties.wantRequestSigned),
        X509Certificate: ros.stringToRosTemplate(properties.x509Certificate),
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
        DirectoryId: ros.stringToRosTemplate(properties.directoryId),
        Status: ros.stringToRosTemplate(properties.status),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CloudSSO::SCIMServerCredential`, which is used to create a System for Cross-domain Identity Management (SCIM) credential.
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
        DirectoryId: ros.stringToRosTemplate(properties.directoryId),
        SCIMSynchronizationStatus: ros.stringToRosTemplate(properties.scimSynchronizationStatus),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CloudSSO::SCIMSynchronization`, which is used to enable or disable System for Cross-domain Identity Management (SCIM) synchronization.
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
    errors.collect(ros.propertyValidator('userName', ros.requiredValidator)(properties.userName));
    if (properties.userName && (typeof properties.userName) !== 'object') {
        errors.collect(ros.propertyValidator('userName', ros.validateAllowedPattern)({
            data: properties.userName,
            reg: /^[a-zA-Z0-9@._-]{1,64}$/
        }));
    }
    errors.collect(ros.propertyValidator('userName', ros.validateString)(properties.userName));
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
        DirectoryId: ros.stringToRosTemplate(properties.directoryId),
        UserName: ros.stringToRosTemplate(properties.userName),
        Description: ros.stringToRosTemplate(properties.description),
        DisplayName: ros.stringToRosTemplate(properties.displayName),
        Email: ros.stringToRosTemplate(properties.email),
        FirstName: ros.stringToRosTemplate(properties.firstName),
        LastName: ros.stringToRosTemplate(properties.lastName),
        Status: ros.stringToRosTemplate(properties.status),
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
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
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
        DeletionStrategy: ros.stringToRosTemplate(properties.deletionStrategy),
        DirectoryId: ros.stringToRosTemplate(properties.directoryId),
        DuplicationStrategy: ros.stringToRosTemplate(properties.duplicationStrategy),
        PrincipalId: ros.stringToRosTemplate(properties.principalId),
        PrincipalType: ros.stringToRosTemplate(properties.principalType),
        TargetId: ros.stringToRosTemplate(properties.targetId),
        TargetType: ros.stringToRosTemplate(properties.targetType),
        Description: ros.stringToRosTemplate(properties.description),
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
        DirectoryId: ros.stringToRosTemplate(properties.directoryId),
        GroupId: ros.stringToRosTemplate(properties.groupId),
        UserId: ros.stringToRosTemplate(properties.userId),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWRzc28uZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2xvdWRzc28uZ2VuZXJhdGVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx5REFBeUQ7OztBQUV6RCw4Q0FBOEM7QUF5QzlDOzs7Ozs7R0FNRztBQUNILFNBQVMsaUNBQWlDLENBQUMsVUFBZTtJQUN0RCxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUFFLE9BQU8sR0FBRyxDQUFDLGtCQUFrQixDQUFDO0tBQUU7SUFDbkUsTUFBTSxNQUFNLEdBQUcsSUFBSSxHQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDcEcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUNqRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDcEcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUNqRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDbEcsSUFBRyxVQUFVLENBQUMsVUFBVSxJQUFJLENBQUMsT0FBTyxVQUFVLENBQUMsVUFBVSxDQUFDLEtBQUssUUFBUSxFQUFFO1FBQ3JFLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUM1RSxJQUFJLEVBQUUsVUFBVSxDQUFDLFVBQVU7WUFDM0IsYUFBYSxFQUFFLENBQUMsWUFBWSxDQUFDO1NBQzlCLENBQUMsQ0FBQyxDQUFDO0tBQ1A7SUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQy9GLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGVBQWUsRUFBRSxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUN4RyxJQUFHLFVBQVUsQ0FBQyxhQUFhLElBQUksQ0FBQyxPQUFPLFVBQVUsQ0FBQyxhQUFhLENBQUMsS0FBSyxRQUFRLEVBQUU7UUFDM0UsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsZUFBZSxFQUFFLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQy9FLElBQUksRUFBRSxVQUFVLENBQUMsYUFBYTtZQUM5QixhQUFhLEVBQUUsQ0FBQyxNQUFNLEVBQUMsT0FBTyxDQUFDO1NBQ2hDLENBQUMsQ0FBQyxDQUFDO0tBQ1A7SUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQ3JHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7SUFDeEgsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7SUFDckgsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQzlGLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDM0YsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLGdFQUFnRSxDQUFDLENBQUM7QUFDekYsQ0FBQztBQUVEOzs7Ozs7R0FNRztBQUNILG9CQUFvQjtBQUNwQixTQUFTLHFDQUFxQyxDQUFDLFVBQWUsRUFBRSxnQ0FBeUM7SUFDckcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFBRSxPQUFPLFVBQVUsQ0FBQztLQUFFO0lBQ3ZELElBQUcsZ0NBQWdDLEVBQUU7UUFDakMsaUNBQWlDLENBQUMsVUFBVSxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUM7S0FDakU7SUFDRCxPQUFPO1FBQ0wscUJBQXFCLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQztRQUNoRixXQUFXLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUM7UUFDNUQsV0FBVyxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO1FBQzVELGFBQWEsRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztRQUNoRSxRQUFRLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7UUFDdEQsVUFBVSxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDO0tBQzNELENBQUM7QUFDTixDQUFDO0FBRUQ7Ozs7R0FJRztBQUNILE1BQWEsbUJBQW9CLFNBQVEsR0FBRyxDQUFDLFdBQVc7SUF5Q3BEOzs7O09BSUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQStCLEVBQUUsZ0NBQXlDO1FBQ3BILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixDQUFDLHNCQUFzQixFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBRTFGLElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxnQ0FBZ0MsQ0FBQztRQUN6RSxJQUFJLENBQUMscUJBQXFCLEdBQUcsS0FBSyxDQUFDLHFCQUFxQixDQUFDO1FBQ3pELElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztRQUNyQyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7UUFDckMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQztRQUMvQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7SUFDdkMsQ0FBQztJQUdELElBQWMsYUFBYTtRQUN2QixPQUFPO1lBQ0gscUJBQXFCLEVBQUUsSUFBSSxDQUFDLHFCQUFxQjtZQUNqRCxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzdCLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUNqQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1NBQzlCLENBQUM7SUFDTixDQUFDO0lBQ1MsZ0JBQWdCLENBQUMsS0FBMkI7UUFDbEQsT0FBTyxxQ0FBcUMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7SUFDL0YsQ0FBQzs7QUF2RUwsa0RBd0VDO0FBdkVHOztHQUVHO0FBQ29CLDBDQUFzQixHQUFHLG9DQUFvQyxDQUFDO0FBNkd6Rjs7Ozs7O0dBTUc7QUFDSCxTQUFTLG9DQUFvQyxDQUFDLFVBQWU7SUFDekQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFBRSxPQUFPLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQztLQUFFO0lBQ25FLE1BQU0sTUFBTSxHQUFHLElBQUksR0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0MsSUFBRyxVQUFVLENBQUMsZUFBZSxJQUFJLENBQUMsT0FBTyxVQUFVLENBQUMsZUFBZSxDQUFDLEtBQUssUUFBUSxFQUFFO1FBQy9FLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUN2RSxJQUFJLEVBQUUsVUFBVSxDQUFDLGVBQWU7WUFDaEMsR0FBRyxFQUFFLEdBQUc7WUFDUixHQUFHLEVBQUUsS0FBSztTQUNYLENBQUMsQ0FBQyxDQUFDO0tBQ1Q7SUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFDekcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMseUJBQXlCLEVBQUUsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQztJQUM1SCxJQUFHLFVBQVUsQ0FBQyx1QkFBdUIsSUFBSSxDQUFDLE9BQU8sVUFBVSxDQUFDLHVCQUF1QixDQUFDLEtBQUssUUFBUSxFQUFFO1FBQy9GLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLHlCQUF5QixFQUFFLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1lBQzFGLElBQUksRUFBRSxVQUFVLENBQUMsdUJBQXVCO1lBQ3hDLEdBQUcsRUFBRSxzQkFBc0I7U0FDNUIsQ0FBQyxDQUFDLENBQUM7S0FDUDtJQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLHlCQUF5QixFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDO0lBQ3pILE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUNwRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ2pHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDL0YsSUFBRyxVQUFVLENBQUMsV0FBVyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLFVBQVUsQ0FBQyxXQUFXLENBQUMsS0FBSyxRQUFRLENBQUMsRUFBRTtRQUNsSCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ3BFLElBQUksRUFBRSxVQUFVLENBQUMsV0FBVyxDQUFDLE1BQU07WUFDbkMsR0FBRyxFQUFFLFNBQVM7WUFDZCxHQUFHLEVBQUUsSUFBSTtTQUNWLENBQUMsQ0FBQyxDQUFDO0tBQ1Q7SUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ2pHLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxtRUFBbUUsQ0FBQyxDQUFDO0FBQzVGLENBQUM7QUFFRDs7Ozs7O0dBTUc7QUFDSCxvQkFBb0I7QUFDcEIsU0FBUyx3Q0FBd0MsQ0FBQyxVQUFlLEVBQUUsZ0NBQXlDO0lBQ3hHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxVQUFVLENBQUM7S0FBRTtJQUN2RCxJQUFHLGdDQUFnQyxFQUFFO1FBQ2pDLG9DQUFvQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO0tBQ3BFO0lBQ0QsT0FBTztRQUNMLHVCQUF1QixFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUM7UUFDcEYsV0FBVyxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO1FBQzVELFdBQVcsRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQztRQUM1RCxVQUFVLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUM7UUFDMUQsZUFBZSxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDO0tBQ3JFLENBQUM7QUFDTixDQUFDO0FBRUQ7Ozs7R0FJRztBQUNILE1BQWEsc0JBQXVCLFNBQVEsR0FBRyxDQUFDLFdBQVc7SUE4Q3ZEOzs7O09BSUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQWtDLEVBQUUsZ0NBQXlDO1FBQ3ZILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLHNCQUFzQixDQUFDLHNCQUFzQixFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQzdGLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFFdEUsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLGdDQUFnQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxLQUFLLENBQUMsdUJBQXVCLENBQUM7UUFDN0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztRQUNyQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7UUFDbkMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUMsZUFBZSxDQUFDO0lBQ2pELENBQUM7SUFHRCxJQUFjLGFBQWE7UUFDdkIsT0FBTztZQUNILHVCQUF1QixFQUFFLElBQUksQ0FBQyx1QkFBdUI7WUFDckQsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzdCLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1NBQ3hDLENBQUM7SUFDTixDQUFDO0lBQ1MsZ0JBQWdCLENBQUMsS0FBMkI7UUFDbEQsT0FBTyx3Q0FBd0MsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7SUFDbEcsQ0FBQzs7QUEzRUwsd0RBNEVDO0FBM0VHOztHQUVHO0FBQ29CLDZDQUFzQixHQUFHLHVDQUF1QyxDQUFDO0FBcUc1Rjs7Ozs7O0dBTUc7QUFDSCxTQUFTLDZDQUE2QyxDQUFDLFVBQWU7SUFDbEUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFBRSxPQUFPLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQztLQUFFO0lBQ25FLE1BQU0sTUFBTSxHQUFHLElBQUksR0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0MsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ3BHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDakcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ2xHLElBQUcsVUFBVSxDQUFDLFVBQVUsSUFBSSxDQUFDLE9BQU8sVUFBVSxDQUFDLFVBQVUsQ0FBQyxLQUFLLFFBQVEsRUFBRTtRQUNyRSxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDNUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxVQUFVO1lBQzNCLGFBQWEsRUFBRSxDQUFDLFlBQVksQ0FBQztTQUM5QixDQUFDLENBQUMsQ0FBQztLQUNQO0lBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUMvRixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO0lBQ3hILE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO0lBQ3JILE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUM5RixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQzNGLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyw0RUFBNEUsQ0FBQyxDQUFDO0FBQ3JHLENBQUM7QUFFRDs7Ozs7O0dBTUc7QUFDSCxvQkFBb0I7QUFDcEIsU0FBUyxpREFBaUQsQ0FBQyxVQUFlLEVBQUUsZ0NBQXlDO0lBQ2pILElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxVQUFVLENBQUM7S0FBRTtJQUN2RCxJQUFHLGdDQUFnQyxFQUFFO1FBQ2pDLDZDQUE2QyxDQUFDLFVBQVUsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO0tBQzdFO0lBQ0QsT0FBTztRQUNMLHFCQUFxQixFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUM7UUFDaEYsV0FBVyxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO1FBQzVELFFBQVEsRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQztRQUN0RCxVQUFVLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUM7S0FDM0QsQ0FBQztBQUNOLENBQUM7QUFFRDs7OztHQUlHO0FBQ0gsTUFBYSwrQkFBZ0MsU0FBUSxHQUFHLENBQUMsV0FBVztJQTZCaEU7Ozs7T0FJRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBMkMsRUFBRSxnQ0FBeUM7UUFDaEksS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsK0JBQStCLENBQUMsc0JBQXNCLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFFdEcsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLGdDQUFnQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxLQUFLLENBQUMscUJBQXFCLENBQUM7UUFDekQsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQztRQUMvQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7SUFDdkMsQ0FBQztJQUdELElBQWMsYUFBYTtRQUN2QixPQUFPO1lBQ0gscUJBQXFCLEVBQUUsSUFBSSxDQUFDLHFCQUFxQjtZQUNqRCxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtTQUM5QixDQUFDO0lBQ04sQ0FBQztJQUNTLGdCQUFnQixDQUFDLEtBQTJCO1FBQ2xELE9BQU8saURBQWlELENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0lBQzNHLENBQUM7O0FBdkRMLDBFQXdEQztBQXZERzs7R0FFRztBQUNvQixzREFBc0IsR0FBRyxnREFBZ0QsQ0FBQztBQXFFckc7Ozs7OztHQU1HO0FBQ0gsU0FBUywwQkFBMEIsQ0FBQyxVQUFlO0lBQy9DLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxHQUFHLENBQUMsa0JBQWtCLENBQUM7S0FBRTtJQUNuRSxNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGVBQWUsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDckcsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLHlEQUF5RCxDQUFDLENBQUM7QUFDbEYsQ0FBQztBQUVEOzs7Ozs7R0FNRztBQUNILG9CQUFvQjtBQUNwQixTQUFTLDhCQUE4QixDQUFDLFVBQWUsRUFBRSxnQ0FBeUM7SUFDOUYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFBRSxPQUFPLFVBQVUsQ0FBQztLQUFFO0lBQ3ZELElBQUcsZ0NBQWdDLEVBQUU7UUFDakMsMEJBQTBCLENBQUMsVUFBVSxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUM7S0FDMUQ7SUFDRCxPQUFPO1FBQ0wsYUFBYSxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO0tBQ2pFLENBQUM7QUFDTixDQUFDO0FBRUQ7Ozs7R0FJRztBQUNILE1BQWEsWUFBYSxTQUFRLEdBQUcsQ0FBQyxXQUFXO0lBc0I3Qzs7OztPQUlHO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUF3QixFQUFFLGdDQUF5QztRQUM3RyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxZQUFZLENBQUMsc0JBQXNCLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDbkYsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRWxELElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxnQ0FBZ0MsQ0FBQztRQUN6RSxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUM7SUFDN0MsQ0FBQztJQUdELElBQWMsYUFBYTtRQUN2QixPQUFPO1lBQ0gsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1NBQ3BDLENBQUM7SUFDTixDQUFDO0lBQ1MsZ0JBQWdCLENBQUMsS0FBMkI7UUFDbEQsT0FBTyw4QkFBOEIsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7SUFDeEYsQ0FBQzs7QUEzQ0wsb0NBNENDO0FBM0NHOztHQUVHO0FBQ29CLG1DQUFzQixHQUFHLDZCQUE2QixDQUFDO0FBbUVsRjs7Ozs7O0dBTUc7QUFDSCxTQUFTLHNCQUFzQixDQUFDLFVBQWU7SUFDM0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFBRSxPQUFPLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQztLQUFFO0lBQ25FLE1BQU0sTUFBTSxHQUFHLElBQUksR0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0MsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ2hHLElBQUcsVUFBVSxDQUFDLFNBQVMsSUFBSSxDQUFDLE9BQU8sVUFBVSxDQUFDLFNBQVMsQ0FBQyxLQUFLLFFBQVEsRUFBRTtRQUNuRSxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFDNUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxTQUFTO1lBQzFCLEdBQUcsRUFBRSx5QkFBeUI7U0FDL0IsQ0FBQyxDQUFDLENBQUM7S0FDUDtJQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDN0YsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ3BHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDakcsSUFBRyxVQUFVLENBQUMsV0FBVyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLFVBQVUsQ0FBQyxXQUFXLENBQUMsS0FBSyxRQUFRLENBQUMsRUFBRTtRQUNsSCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ3BFLElBQUksRUFBRSxVQUFVLENBQUMsV0FBVyxDQUFDLE1BQU07WUFDbkMsR0FBRyxFQUFFLFNBQVM7WUFDZCxHQUFHLEVBQUUsSUFBSTtTQUNWLENBQUMsQ0FBQyxDQUFDO0tBQ1Q7SUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ2pHLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxxREFBcUQsQ0FBQyxDQUFDO0FBQzlFLENBQUM7QUFFRDs7Ozs7O0dBTUc7QUFDSCxvQkFBb0I7QUFDcEIsU0FBUywwQkFBMEIsQ0FBQyxVQUFlLEVBQUUsZ0NBQXlDO0lBQzFGLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxVQUFVLENBQUM7S0FBRTtJQUN2RCxJQUFHLGdDQUFnQyxFQUFFO1FBQ2pDLHNCQUFzQixDQUFDLFVBQVUsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO0tBQ3REO0lBQ0QsT0FBTztRQUNMLFdBQVcsRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQztRQUM1RCxTQUFTLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUM7UUFDeEQsV0FBVyxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO0tBQzdELENBQUM7QUFDTixDQUFDO0FBRUQ7Ozs7R0FJRztBQUNILE1BQWEsUUFBUyxTQUFRLEdBQUcsQ0FBQyxXQUFXO0lBZ0N6Qzs7OztPQUlHO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUFvQixFQUFFLGdDQUF5QztRQUN6RyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsc0JBQXNCLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDL0UsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRTFDLElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxnQ0FBZ0MsQ0FBQztRQUN6RSxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7UUFDckMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztJQUN6QyxDQUFDO0lBR0QsSUFBYyxhQUFhO1FBQ3ZCLE9BQU87WUFDSCxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztTQUNoQyxDQUFDO0lBQ04sQ0FBQztJQUNTLGdCQUFnQixDQUFDLEtBQTJCO1FBQ2xELE9BQU8sMEJBQTBCLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7O0FBekRMLDRCQTBEQztBQXpERzs7R0FFRztBQUNvQiwrQkFBc0IsR0FBRyx5QkFBeUIsQ0FBQztBQThGOUU7Ozs7OztHQU1HO0FBQ0gsU0FBUyw4REFBOEQsQ0FBQyxVQUFlO0lBQ25GLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxHQUFHLENBQUMsa0JBQWtCLENBQUM7S0FBRTtJQUNuRSxNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLHNCQUFzQixFQUFFLEdBQUcsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQztJQUNuSSxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDcEcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUNqRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxzQkFBc0IsRUFBRSxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO0lBQ3RILE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLHNCQUFzQixFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO0lBQ25ILE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLHNCQUFzQixFQUFFLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7SUFDdEgsSUFBRyxVQUFVLENBQUMsb0JBQW9CLElBQUksQ0FBQyxPQUFPLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLFFBQVEsRUFBRTtRQUN6RixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxzQkFBc0IsRUFBRSxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUN0RixJQUFJLEVBQUUsVUFBVSxDQUFDLG9CQUFvQjtZQUNyQyxhQUFhLEVBQUUsQ0FBQyxRQUFRLEVBQUMsUUFBUSxDQUFDO1NBQ25DLENBQUMsQ0FBQyxDQUFDO0tBQ1A7SUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxzQkFBc0IsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQztJQUNuSCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO0lBQ3hILE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO0lBQ3JILE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyw2RkFBNkYsQ0FBQyxDQUFDO0FBQ3RILENBQUM7QUFFRDs7Ozs7O0dBTUc7QUFDSCxvQkFBb0I7QUFDcEIsU0FBUyxrRUFBa0UsQ0FBQyxVQUFlLEVBQUUsZ0NBQXlDO0lBQ2xJLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxVQUFVLENBQUM7S0FBRTtJQUN2RCxJQUFHLGdDQUFnQyxFQUFFO1FBQ2pDLDhEQUE4RCxDQUFDLFVBQVUsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO0tBQzlGO0lBQ0QsT0FBTztRQUNMLHFCQUFxQixFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUM7UUFDaEYsV0FBVyxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO1FBQzVELG9CQUFvQixFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUM7UUFDOUUsb0JBQW9CLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQztRQUM5RSxvQkFBb0IsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQztLQUMvRixDQUFDO0FBQ04sQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxNQUFhLGdEQUFpRCxTQUFRLEdBQUcsQ0FBQyxXQUFXO0lBd0NqRjs7OztPQUlHO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUE0RCxFQUFFLGdDQUF5QztRQUNqSixLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxnREFBZ0QsQ0FBQyxzQkFBc0IsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUV2SCxJQUFJLENBQUMsZ0NBQWdDLEdBQUcsZ0NBQWdDLENBQUM7UUFDekUsSUFBSSxDQUFDLHFCQUFxQixHQUFHLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQztRQUN6RCxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7UUFDckMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQztRQUN2RCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDLG9CQUFvQixDQUFDO1FBQ3ZELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUMsb0JBQW9CLENBQUM7SUFDM0QsQ0FBQztJQUdELElBQWMsYUFBYTtRQUN2QixPQUFPO1lBQ0gscUJBQXFCLEVBQUUsSUFBSSxDQUFDLHFCQUFxQjtZQUNqRCxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0Isb0JBQW9CLEVBQUUsSUFBSSxDQUFDLG9CQUFvQjtZQUMvQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsb0JBQW9CO1lBQy9DLG9CQUFvQixFQUFFLElBQUksQ0FBQyxvQkFBb0I7U0FDbEQsQ0FBQztJQUNOLENBQUM7SUFDUyxnQkFBZ0IsQ0FBQyxLQUEyQjtRQUNsRCxPQUFPLGtFQUFrRSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztJQUM1SCxDQUFDOztBQXBFTCw0R0FxRUM7QUFwRUc7O0dBRUc7QUFDb0IsdUVBQXNCLEdBQUcsaUVBQWlFLENBQUM7QUFrSHRIOzs7Ozs7R0FNRztBQUNILFNBQVMscUNBQXFDLENBQUMsVUFBZTtJQUMxRCxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUFFLE9BQU8sR0FBRyxDQUFDLGtCQUFrQixDQUFDO0tBQUU7SUFDbkUsTUFBTSxNQUFNLEdBQUcsSUFBSSxHQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQzNGLElBQUcsVUFBVSxDQUFDLFNBQVMsSUFBSSxDQUFDLE9BQU8sVUFBVSxDQUFDLFNBQVMsQ0FBQyxLQUFLLFFBQVEsRUFBRTtRQUNuRSxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDM0UsSUFBSSxFQUFFLFVBQVUsQ0FBQyxTQUFTO1lBQzFCLGFBQWEsRUFBRSxDQUFDLFNBQVMsRUFBQyxVQUFVLENBQUM7U0FDdEMsQ0FBQyxDQUFDLENBQUM7S0FDUDtJQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDN0YsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ3BHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDakcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMseUJBQXlCLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUM7SUFDekgsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7SUFDOUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUMzRixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFDekcsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLG9FQUFvRSxDQUFDLENBQUM7QUFDN0YsQ0FBQztBQUVEOzs7Ozs7R0FNRztBQUNILG9CQUFvQjtBQUNwQixTQUFTLHlDQUF5QyxDQUFDLFVBQWUsRUFBRSxnQ0FBeUM7SUFDekcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFBRSxPQUFPLFVBQVUsQ0FBQztLQUFFO0lBQ3ZELElBQUcsZ0NBQWdDLEVBQUU7UUFDakMscUNBQXFDLENBQUMsVUFBVSxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUM7S0FDckU7SUFDRCxPQUFPO1FBQ0wsV0FBVyxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO1FBQzVELHVCQUF1QixFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUM7UUFDcEYsUUFBUSxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO1FBQ3RELFFBQVEsRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQztRQUN0RCxTQUFTLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUM7UUFDeEQsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQztRQUN6RSxlQUFlLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUM7S0FDckUsQ0FBQztBQUNOLENBQUM7QUFFRDs7OztHQUlHO0FBQ0gsTUFBYSx1QkFBd0IsU0FBUSxHQUFHLENBQUMsV0FBVztJQWlEeEQ7Ozs7T0FJRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBbUMsRUFBRSxnQ0FBeUM7UUFDeEgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsdUJBQXVCLENBQUMsc0JBQXNCLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFFOUYsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLGdDQUFnQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztRQUNyQyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsS0FBSyxDQUFDLHVCQUF1QixDQUFDO1FBQzdELElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQztRQUMvQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7UUFDL0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUMsaUJBQWlCLENBQUM7UUFDakQsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUMsZUFBZSxDQUFDO0lBQ2pELENBQUM7SUFHRCxJQUFjLGFBQWE7UUFDdkIsT0FBTztZQUNILFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3Qix1QkFBdUIsRUFBRSxJQUFJLENBQUMsdUJBQXVCO1lBQ3JELFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLGlCQUFpQixFQUFFLElBQUksQ0FBQyxpQkFBaUI7WUFDekMsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1NBQ3hDLENBQUM7SUFDTixDQUFDO0lBQ1MsZ0JBQWdCLENBQUMsS0FBMkI7UUFDbEQsT0FBTyx5Q0FBeUMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7SUFDbkcsQ0FBQzs7QUFqRkwsMERBa0ZDO0FBakZHOztHQUVHO0FBQ29CLDhDQUFzQixHQUFHLHdDQUF3QyxDQUFDO0FBb0c3Rjs7Ozs7O0dBTUc7QUFDSCxTQUFTLHFDQUFxQyxDQUFDLFVBQWU7SUFDMUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFBRSxPQUFPLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQztLQUFFO0lBQ25FLE1BQU0sTUFBTSxHQUFHLElBQUksR0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0MsSUFBRyxVQUFVLENBQUMsTUFBTSxJQUFJLENBQUMsT0FBTyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssUUFBUSxFQUFFO1FBQzdELE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUN4RSxJQUFJLEVBQUUsVUFBVSxDQUFDLE1BQU07WUFDdkIsYUFBYSxFQUFFLENBQUMsU0FBUyxFQUFDLFVBQVUsQ0FBQztTQUN0QyxDQUFDLENBQUMsQ0FBQztLQUNQO0lBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUN2RixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDcEcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUNqRyxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsb0VBQW9FLENBQUMsQ0FBQztBQUM3RixDQUFDO0FBRUQ7Ozs7OztHQU1HO0FBQ0gsb0JBQW9CO0FBQ3BCLFNBQVMseUNBQXlDLENBQUMsVUFBZSxFQUFFLGdDQUF5QztJQUN6RyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUFFLE9BQU8sVUFBVSxDQUFDO0tBQUU7SUFDdkQsSUFBRyxnQ0FBZ0MsRUFBRTtRQUNqQyxxQ0FBcUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztLQUNyRTtJQUNELE9BQU87UUFDTCxXQUFXLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUM7UUFDNUQsTUFBTSxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO0tBQ25ELENBQUM7QUFDTixDQUFDO0FBRUQ7Ozs7R0FJRztBQUNILE1BQWEsdUJBQXdCLFNBQVEsR0FBRyxDQUFDLFdBQVc7SUFnQ3hEOzs7O09BSUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQW1DLEVBQUUsZ0NBQXlDO1FBQ3hILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLHVCQUF1QixDQUFDLHNCQUFzQixFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQzlGLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFFNUQsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLGdDQUFnQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztRQUNyQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDL0IsQ0FBQztJQUdELElBQWMsYUFBYTtRQUN2QixPQUFPO1lBQ0gsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzdCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtTQUN0QixDQUFDO0lBQ04sQ0FBQztJQUNTLGdCQUFnQixDQUFDLEtBQTJCO1FBQ2xELE9BQU8seUNBQXlDLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0lBQ25HLENBQUM7O0FBeERMLDBEQXlEQztBQXhERzs7R0FFRztBQUNvQiw4Q0FBc0IsR0FBRyx3Q0FBd0MsQ0FBQztBQTJFN0Y7Ozs7OztHQU1HO0FBQ0gsU0FBUyxvQ0FBb0MsQ0FBQyxVQUFlO0lBQ3pELElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxHQUFHLENBQUMsa0JBQWtCLENBQUM7S0FBRTtJQUNuRSxNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUNwRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ2pHLElBQUcsVUFBVSxDQUFDLHlCQUF5QixJQUFJLENBQUMsT0FBTyxVQUFVLENBQUMseUJBQXlCLENBQUMsS0FBSyxRQUFRLEVBQUU7UUFDbkcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsMkJBQTJCLEVBQUUsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDM0YsSUFBSSxFQUFFLFVBQVUsQ0FBQyx5QkFBeUI7WUFDMUMsYUFBYSxFQUFFLENBQUMsU0FBUyxFQUFDLFVBQVUsQ0FBQztTQUN0QyxDQUFDLENBQUMsQ0FBQztLQUNQO0lBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsMkJBQTJCLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUM7SUFDN0gsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLG1FQUFtRSxDQUFDLENBQUM7QUFDNUYsQ0FBQztBQUVEOzs7Ozs7R0FNRztBQUNILG9CQUFvQjtBQUNwQixTQUFTLHdDQUF3QyxDQUFDLFVBQWUsRUFBRSxnQ0FBeUM7SUFDeEcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFBRSxPQUFPLFVBQVUsQ0FBQztLQUFFO0lBQ3ZELElBQUcsZ0NBQWdDLEVBQUU7UUFDakMsb0NBQW9DLENBQUMsVUFBVSxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUM7S0FDcEU7SUFDRCxPQUFPO1FBQ0wsV0FBVyxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO1FBQzVELHlCQUF5QixFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMseUJBQXlCLENBQUM7S0FDekYsQ0FBQztBQUNOLENBQUM7QUFFRDs7OztHQUlHO0FBQ0gsTUFBYSxzQkFBdUIsU0FBUSxHQUFHLENBQUMsV0FBVztJQXNCdkQ7Ozs7T0FJRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBa0MsRUFBRSxnQ0FBeUM7UUFDdkgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsc0JBQXNCLENBQUMsc0JBQXNCLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFFN0YsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLGdDQUFnQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztRQUNyQyxJQUFJLENBQUMseUJBQXlCLEdBQUcsS0FBSyxDQUFDLHlCQUF5QixDQUFDO0lBQ3JFLENBQUM7SUFHRCxJQUFjLGFBQWE7UUFDdkIsT0FBTztZQUNILFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3Qix5QkFBeUIsRUFBRSxJQUFJLENBQUMseUJBQXlCO1NBQzVELENBQUM7SUFDTixDQUFDO0lBQ1MsZ0JBQWdCLENBQUMsS0FBMkI7UUFDbEQsT0FBTyx3Q0FBd0MsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7SUFDbEcsQ0FBQzs7QUE1Q0wsd0RBNkNDO0FBNUNHOztHQUVHO0FBQ29CLDZDQUFzQixHQUFHLHVDQUF1QyxDQUFDO0FBbUc1Rjs7Ozs7O0dBTUc7QUFDSCxTQUFTLHFCQUFxQixDQUFDLFVBQWU7SUFDMUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFBRSxPQUFPLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQztLQUFFO0lBQ25FLE1BQU0sTUFBTSxHQUFHLElBQUksR0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0MsSUFBRyxVQUFVLENBQUMsTUFBTSxJQUFJLENBQUMsT0FBTyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssUUFBUSxFQUFFO1FBQzdELE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUN4RSxJQUFJLEVBQUUsVUFBVSxDQUFDLE1BQU07WUFDdkIsYUFBYSxFQUFFLENBQUMsU0FBUyxFQUFDLFVBQVUsQ0FBQztTQUN0QyxDQUFDLENBQUMsQ0FBQztLQUNQO0lBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUN2RixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDOUYsSUFBRyxVQUFVLENBQUMsUUFBUSxJQUFJLENBQUMsT0FBTyxVQUFVLENBQUMsUUFBUSxDQUFDLEtBQUssUUFBUSxFQUFFO1FBQ2pFLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUMzRSxJQUFJLEVBQUUsVUFBVSxDQUFDLFFBQVE7WUFDekIsR0FBRyxFQUFFLHlCQUF5QjtTQUMvQixDQUFDLENBQUMsQ0FBQztLQUNQO0lBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUMzRixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDcEcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUNqRyxJQUFHLFVBQVUsQ0FBQyxXQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sVUFBVSxDQUFDLFdBQVcsQ0FBQyxLQUFLLFFBQVEsQ0FBQyxFQUFFO1FBQ2xILE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDcEUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxXQUFXLENBQUMsTUFBTTtZQUNuQyxHQUFHLEVBQUUsU0FBUztZQUNkLEdBQUcsRUFBRSxJQUFJO1NBQ1YsQ0FBQyxDQUFDLENBQUM7S0FDVDtJQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDakcsSUFBRyxVQUFVLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxRQUFRLENBQUMsRUFBRTtRQUNoRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQzlELElBQUksRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLE1BQU07WUFDN0IsR0FBRyxFQUFFLFNBQVM7WUFDZCxHQUFHLEVBQUUsR0FBRztTQUNULENBQUMsQ0FBQyxDQUFDO0tBQ1Q7SUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3JGLElBQUcsVUFBVSxDQUFDLFNBQVMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxVQUFVLENBQUMsU0FBUyxDQUFDLEtBQUssUUFBUSxDQUFDLEVBQUU7UUFDNUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNsRSxJQUFJLEVBQUUsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNO1lBQ2pDLEdBQUcsRUFBRSxTQUFTO1lBQ2QsR0FBRyxFQUFFLEVBQUU7U0FDUixDQUFDLENBQUMsQ0FBQztLQUNUO0lBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUM3RixJQUFHLFVBQVUsQ0FBQyxXQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sVUFBVSxDQUFDLFdBQVcsQ0FBQyxLQUFLLFFBQVEsQ0FBQyxFQUFFO1FBQ2xILE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDcEUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxXQUFXLENBQUMsTUFBTTtZQUNuQyxHQUFHLEVBQUUsU0FBUztZQUNkLEdBQUcsRUFBRSxHQUFHO1NBQ1QsQ0FBQyxDQUFDLENBQUM7S0FDVDtJQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDakcsSUFBRyxVQUFVLENBQUMsUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSyxRQUFRLENBQUMsRUFBRTtRQUN6RyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ2pFLElBQUksRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDLE1BQU07WUFDaEMsR0FBRyxFQUFFLFNBQVM7WUFDZCxHQUFHLEVBQUUsRUFBRTtTQUNSLENBQUMsQ0FBQyxDQUFDO0tBQ1Q7SUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQzNGLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxvREFBb0QsQ0FBQyxDQUFDO0FBQzdFLENBQUM7QUFFRDs7Ozs7O0dBTUc7QUFDSCxvQkFBb0I7QUFDcEIsU0FBUyx5QkFBeUIsQ0FBQyxVQUFlLEVBQUUsZ0NBQXlDO0lBQ3pGLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxVQUFVLENBQUM7S0FBRTtJQUN2RCxJQUFHLGdDQUFnQyxFQUFFO1FBQ2pDLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO0tBQ3JEO0lBQ0QsT0FBTztRQUNMLFdBQVcsRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQztRQUM1RCxRQUFRLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7UUFDdEQsV0FBVyxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO1FBQzVELFdBQVcsRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQztRQUM1RCxLQUFLLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7UUFDaEQsU0FBUyxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDO1FBQ3hELFFBQVEsRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQztRQUN0RCxNQUFNLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7S0FDbkQsQ0FBQztBQUNOLENBQUM7QUFFRDs7OztHQUlHO0FBQ0gsTUFBYSxPQUFRLFNBQVEsR0FBRyxDQUFDLFdBQVc7SUErRHhDOzs7O09BSUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQW1CLEVBQUUsZ0NBQXlDO1FBQ3hHLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxzQkFBc0IsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUM5RSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFeEMsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLGdDQUFnQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztRQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7UUFDL0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztRQUNyQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQztRQUMvQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDL0IsQ0FBQztJQUdELElBQWMsYUFBYTtRQUN2QixPQUFPO1lBQ0gsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzdCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzdCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtTQUN0QixDQUFDO0lBQ04sQ0FBQztJQUNTLGdCQUFnQixDQUFDLEtBQTJCO1FBQ2xELE9BQU8seUJBQXlCLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0lBQ25GLENBQUM7O0FBbEdMLDBCQW1HQztBQWxHRzs7R0FFRztBQUNvQiw4QkFBc0IsR0FBRyx3QkFBd0IsQ0FBQztBQXdKN0U7Ozs7OztHQU1HO0FBQ0gsU0FBUyw4QkFBOEIsQ0FBQyxVQUFlO0lBQ25ELElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxHQUFHLENBQUMsa0JBQWtCLENBQUM7S0FBRTtJQUNuRSxNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDakcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ3BHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDakcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ3BHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDakcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ2xHLElBQUcsVUFBVSxDQUFDLFVBQVUsSUFBSSxDQUFDLE9BQU8sVUFBVSxDQUFDLFVBQVUsQ0FBQyxLQUFLLFFBQVEsRUFBRTtRQUNyRSxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDNUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxVQUFVO1lBQzNCLGFBQWEsRUFBRSxDQUFDLFlBQVksQ0FBQztTQUM5QixDQUFDLENBQUMsQ0FBQztLQUNQO0lBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUMvRixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxxQkFBcUIsRUFBRSxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO0lBQ3BILElBQUcsVUFBVSxDQUFDLG1CQUFtQixJQUFJLENBQUMsT0FBTyxVQUFVLENBQUMsbUJBQW1CLENBQUMsS0FBSyxRQUFRLEVBQUU7UUFDdkYsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMscUJBQXFCLEVBQUUsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDckYsSUFBSSxFQUFFLFVBQVUsQ0FBQyxtQkFBbUI7WUFDcEMsYUFBYSxFQUFFLENBQUMsVUFBVSxFQUFDLFVBQVUsQ0FBQztTQUN2QyxDQUFDLENBQUMsQ0FBQztLQUNQO0lBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMscUJBQXFCLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7SUFDakgsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztJQUM5RyxJQUFHLFVBQVUsQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLE9BQU8sVUFBVSxDQUFDLGdCQUFnQixDQUFDLEtBQUssUUFBUSxFQUFFO1FBQ2pGLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGtCQUFrQixFQUFFLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQ2xGLElBQUksRUFBRSxVQUFVLENBQUMsZ0JBQWdCO1lBQ2pDLGFBQWEsRUFBRSxDQUFDLFFBQVEsRUFBQyxNQUFNLENBQUM7U0FDakMsQ0FBQyxDQUFDLENBQUM7S0FDUDtJQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGtCQUFrQixFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0lBQzNHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGVBQWUsRUFBRSxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUN4RyxJQUFHLFVBQVUsQ0FBQyxhQUFhLElBQUksQ0FBQyxPQUFPLFVBQVUsQ0FBQyxhQUFhLENBQUMsS0FBSyxRQUFRLEVBQUU7UUFDM0UsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsZUFBZSxFQUFFLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQy9FLElBQUksRUFBRSxVQUFVLENBQUMsYUFBYTtZQUM5QixhQUFhLEVBQUUsQ0FBQyxNQUFNLEVBQUMsT0FBTyxDQUFDO1NBQ2hDLENBQUMsQ0FBQyxDQUFDO0tBQ1A7SUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQ3JHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUM5RixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQzNGLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyw2REFBNkQsQ0FBQyxDQUFDO0FBQ3RGLENBQUM7QUFFRDs7Ozs7O0dBTUc7QUFDSCxvQkFBb0I7QUFDcEIsU0FBUyxrQ0FBa0MsQ0FBQyxVQUFlLEVBQUUsZ0NBQXlDO0lBQ2xHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxVQUFVLENBQUM7S0FBRTtJQUN2RCxJQUFHLGdDQUFnQyxFQUFFO1FBQ2pDLDhCQUE4QixDQUFDLFVBQVUsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO0tBQzlEO0lBQ0QsT0FBTztRQUNMLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUM7UUFDdEUsV0FBVyxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO1FBQzVELG1CQUFtQixFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUM7UUFDNUUsV0FBVyxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO1FBQzVELGFBQWEsRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztRQUNoRSxRQUFRLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7UUFDdEQsVUFBVSxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDO1FBQzFELFdBQVcsRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQztLQUM3RCxDQUFDO0FBQ04sQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxNQUFhLGdCQUFpQixTQUFRLEdBQUcsQ0FBQyxXQUFXO0lBOERqRDs7OztPQUlHO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUE0QixFQUFFLGdDQUF5QztRQUNqSCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxzQkFBc0IsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUN2RixJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBRTFELElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxnQ0FBZ0MsQ0FBQztRQUN6RSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixDQUFDO1FBQy9DLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztRQUNyQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDLG1CQUFtQixDQUFDO1FBQ3JELElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztRQUNyQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUM7UUFDekMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO1FBQy9CLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQztRQUNuQyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7SUFDekMsQ0FBQztJQUdELElBQWMsYUFBYTtRQUN2QixPQUFPO1lBQ0gsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjtZQUN2QyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLG1CQUFtQjtZQUM3QyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1NBQ2hDLENBQUM7SUFDTixDQUFDO0lBQ1MsZ0JBQWdCLENBQUMsS0FBMkI7UUFDbEQsT0FBTyxrQ0FBa0MsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7SUFDNUYsQ0FBQzs7QUFqR0wsNENBa0dDO0FBakdHOztHQUVHO0FBQ29CLHVDQUFzQixHQUFHLGlDQUFpQyxDQUFDO0FBc0h0Rjs7Ozs7O0dBTUc7QUFDSCxTQUFTLG9DQUFvQyxDQUFDLFVBQWU7SUFDekQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFBRSxPQUFPLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQztLQUFFO0lBQ25FLE1BQU0sTUFBTSxHQUFHLElBQUksR0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0MsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ3BHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDakcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQzFGLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDdkYsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzVGLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDekYsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLG1FQUFtRSxDQUFDLENBQUM7QUFDNUYsQ0FBQztBQUVEOzs7Ozs7R0FNRztBQUNILG9CQUFvQjtBQUNwQixTQUFTLHdDQUF3QyxDQUFDLFVBQWUsRUFBRSxnQ0FBeUM7SUFDeEcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFBRSxPQUFPLFVBQVUsQ0FBQztLQUFFO0lBQ3ZELElBQUcsZ0NBQWdDLEVBQUU7UUFDakMsb0NBQW9DLENBQUMsVUFBVSxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUM7S0FDcEU7SUFDRCxPQUFPO1FBQ0wsV0FBVyxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO1FBQzVELE9BQU8sRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQztRQUNwRCxNQUFNLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7S0FDbkQsQ0FBQztBQUNOLENBQUM7QUFFRDs7OztHQUlHO0FBQ0gsTUFBYSxzQkFBdUIsU0FBUSxHQUFHLENBQUMsV0FBVztJQXdCdkQ7Ozs7T0FJRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBa0MsRUFBRSxnQ0FBeUM7UUFDdkgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsc0JBQXNCLENBQUMsc0JBQXNCLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFFN0YsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLGdDQUFnQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztRQUNyQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQy9CLENBQUM7SUFHRCxJQUFjLGFBQWE7UUFDdkIsT0FBTztZQUNILFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1NBQ3RCLENBQUM7SUFDTixDQUFDO0lBQ1MsZ0JBQWdCLENBQUMsS0FBMkI7UUFDbEQsT0FBTyx3Q0FBd0MsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7SUFDbEcsQ0FBQzs7QUFoREwsd0RBaURDO0FBaERHOztHQUVHO0FBQ29CLDZDQUFzQixHQUFHLHVDQUF1QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5cbmltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NBY2Nlc3NBc3NpZ25tZW50YC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWNsb3Vkc3NvLWFjY2Vzc2Fzc2lnbm1lbnRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NBY2Nlc3NBc3NpZ25tZW50UHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFjY2Vzc0NvbmZpZ3VyYXRpb25JZDogVGhlIElEIG9mIHRoZSBhY2Nlc3MgY29uZmlndXJhdGlvbi5cbiAgICAgKi9cbiAgICByZWFkb25seSBhY2Nlc3NDb25maWd1cmF0aW9uSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkaXJlY3RvcnlJZDogVGhlIElEIG9mIHRoZSBkaXJlY3RvcnkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGlyZWN0b3J5SWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwcmluY2lwYWxJZDogVGhlIElEIG9mIHRoZSBDbG91ZFNTTyBpZGVudGl0eS5cbiAgICAgKiAtIElmIHlvdSBzZXQgUHJpbmNpcGFsVHlwZSB0byBVc2VyLCBzZXQgUHJpbmNpcGFsSWQgdG8gdGhlIElEIG9mIHRoZSBDbG91ZFNTTyB1c2VyLlxuICAgICAqIC0gSWYgeW91IHNldCBQcmluY2lwYWxUeXBlIHRvIEdyb3VwLCBzZXQgUHJpbmNpcGFsSWQgdG8gdGhlIElEIG9mIHRoZSBDbG91ZFNTTyBncm91cC5cbiAgICAgKi9cbiAgICByZWFkb25seSBwcmluY2lwYWxJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHByaW5jaXBhbFR5cGU6IFRoZSB0eXBlIG9mIHRoZSBDbG91ZFNTTyBpZGVudGl0eS4gVmFsaWQgdmFsdWVzOiBVc2VyLCBHcm91cFxuICAgICAqL1xuICAgIHJlYWRvbmx5IHByaW5jaXBhbFR5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0YXJnZXRJZDogVGhlIElEIG9mIHRoZSB0YXNrIG9iamVjdC5cbiAgICAgKi9cbiAgICByZWFkb25seSB0YXJnZXRJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRhcmdldFR5cGU6IFRoZSB0eXBlIG9mIHRoZSB0YXNrIG9iamVjdC4gU2V0IHRoZSB2YWx1ZSB0byBSRC1BY2NvdW50LCB3aGljaCBzcGVjaWZpZXMgdGhlIGFjY291bnRzIGluIHRoZSByZXNvdXJjZSBkaXJlY3RvcnkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGFyZ2V0VHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc0FjY2Vzc0Fzc2lnbm1lbnRQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQWNjZXNzQXNzaWdubWVudFByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0FjY2Vzc0Fzc2lnbm1lbnRQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RpcmVjdG9yeUlkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmRpcmVjdG9yeUlkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkaXJlY3RvcnlJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5kaXJlY3RvcnlJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncHJpbmNpcGFsSWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucHJpbmNpcGFsSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ByaW5jaXBhbElkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnByaW5jaXBhbElkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0YXJnZXRUeXBlJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnRhcmdldFR5cGUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnRhcmdldFR5cGUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnRhcmdldFR5cGUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RhcmdldFR5cGUnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy50YXJnZXRUeXBlLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIlJELUFjY291bnRcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0YXJnZXRUeXBlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnRhcmdldFR5cGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ByaW5jaXBhbFR5cGUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucHJpbmNpcGFsVHlwZSkpO1xuICAgIGlmKHByb3BlcnRpZXMucHJpbmNpcGFsVHlwZSAmJiAodHlwZW9mIHByb3BlcnRpZXMucHJpbmNpcGFsVHlwZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncHJpbmNpcGFsVHlwZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnByaW5jaXBhbFR5cGUsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiVXNlclwiLFwiR3JvdXBcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwcmluY2lwYWxUeXBlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnByaW5jaXBhbFR5cGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FjY2Vzc0NvbmZpZ3VyYXRpb25JZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5hY2Nlc3NDb25maWd1cmF0aW9uSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FjY2Vzc0NvbmZpZ3VyYXRpb25JZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5hY2Nlc3NDb25maWd1cmF0aW9uSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RhcmdldElkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnRhcmdldElkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0YXJnZXRJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy50YXJnZXRJZCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NBY2Nlc3NBc3NpZ25tZW50UHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNsb3VkU1NPOjpBY2Nlc3NBc3NpZ25tZW50YCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NBY2Nlc3NBc3NpZ25tZW50UHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNsb3VkU1NPOjpBY2Nlc3NBc3NpZ25tZW50YCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0FjY2Vzc0Fzc2lnbm1lbnRQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc0FjY2Vzc0Fzc2lnbm1lbnRQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBBY2Nlc3NDb25maWd1cmF0aW9uSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYWNjZXNzQ29uZmlndXJhdGlvbklkKSxcbiAgICAgIERpcmVjdG9yeUlkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRpcmVjdG9yeUlkKSxcbiAgICAgIFByaW5jaXBhbElkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnByaW5jaXBhbElkKSxcbiAgICAgIFByaW5jaXBhbFR5cGU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucHJpbmNpcGFsVHlwZSksXG4gICAgICBUYXJnZXRJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy50YXJnZXRJZCksXG4gICAgICBUYXJnZXRUeXBlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnRhcmdldFR5cGUpLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OkNsb3VkU1NPOjpBY2Nlc3NBc3NpZ25tZW50YCwgd2hpY2ggaXMgdXNlZCB0byBhc3NpZ24gYWNjZXNzIHBlcm1pc3Npb25zIG9uIGFuIGFjY291bnQgaW4geW91ciByZXNvdXJjZSBkaXJlY3RvcnkgdG8gYSB1c2VyIG9yIGdyb3VwIGJ5IHVzaW5nIGFuIGFjY2VzcyBjb25maWd1cmF0aW9uLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBBY2Nlc3NBc3NpZ25tZW50YCBjbGFzcyBpbnN0ZWFkIG9mIHRoaXMgY2xhc3MgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1jbG91ZHNzby1hY2Nlc3Nhc3NpZ25tZW50XG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NBY2Nlc3NBc3NpZ25tZW50IGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpDbG91ZFNTTzo6QWNjZXNzQXNzaWdubWVudFwiO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYWNjZXNzQ29uZmlndXJhdGlvbklkOiBUaGUgSUQgb2YgdGhlIGFjY2VzcyBjb25maWd1cmF0aW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyBhY2Nlc3NDb25maWd1cmF0aW9uSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkaXJlY3RvcnlJZDogVGhlIElEIG9mIHRoZSBkaXJlY3RvcnkuXG4gICAgICovXG4gICAgcHVibGljIGRpcmVjdG9yeUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcHJpbmNpcGFsSWQ6IFRoZSBJRCBvZiB0aGUgQ2xvdWRTU08gaWRlbnRpdHkuXG4gICAgICogLSBJZiB5b3Ugc2V0IFByaW5jaXBhbFR5cGUgdG8gVXNlciwgc2V0IFByaW5jaXBhbElkIHRvIHRoZSBJRCBvZiB0aGUgQ2xvdWRTU08gdXNlci5cbiAgICAgKiAtIElmIHlvdSBzZXQgUHJpbmNpcGFsVHlwZSB0byBHcm91cCwgc2V0IFByaW5jaXBhbElkIHRvIHRoZSBJRCBvZiB0aGUgQ2xvdWRTU08gZ3JvdXAuXG4gICAgICovXG4gICAgcHVibGljIHByaW5jaXBhbElkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcHJpbmNpcGFsVHlwZTogVGhlIHR5cGUgb2YgdGhlIENsb3VkU1NPIGlkZW50aXR5LiBWYWxpZCB2YWx1ZXM6IFVzZXIsIEdyb3VwXG4gICAgICovXG4gICAgcHVibGljIHByaW5jaXBhbFR5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0YXJnZXRJZDogVGhlIElEIG9mIHRoZSB0YXNrIG9iamVjdC5cbiAgICAgKi9cbiAgICBwdWJsaWMgdGFyZ2V0SWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0YXJnZXRUeXBlOiBUaGUgdHlwZSBvZiB0aGUgdGFzayBvYmplY3QuIFNldCB0aGUgdmFsdWUgdG8gUkQtQWNjb3VudCwgd2hpY2ggc3BlY2lmaWVzIHRoZSBhY2NvdW50cyBpbiB0aGUgcmVzb3VyY2UgZGlyZWN0b3J5LlxuICAgICAqL1xuICAgIHB1YmxpYyB0YXJnZXRUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zQWNjZXNzQXNzaWdubWVudFByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zQWNjZXNzQXNzaWdubWVudC5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuYWNjZXNzQ29uZmlndXJhdGlvbklkID0gcHJvcHMuYWNjZXNzQ29uZmlndXJhdGlvbklkO1xuICAgICAgICB0aGlzLmRpcmVjdG9yeUlkID0gcHJvcHMuZGlyZWN0b3J5SWQ7XG4gICAgICAgIHRoaXMucHJpbmNpcGFsSWQgPSBwcm9wcy5wcmluY2lwYWxJZDtcbiAgICAgICAgdGhpcy5wcmluY2lwYWxUeXBlID0gcHJvcHMucHJpbmNpcGFsVHlwZTtcbiAgICAgICAgdGhpcy50YXJnZXRJZCA9IHByb3BzLnRhcmdldElkO1xuICAgICAgICB0aGlzLnRhcmdldFR5cGUgPSBwcm9wcy50YXJnZXRUeXBlO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFjY2Vzc0NvbmZpZ3VyYXRpb25JZDogdGhpcy5hY2Nlc3NDb25maWd1cmF0aW9uSWQsXG4gICAgICAgICAgICBkaXJlY3RvcnlJZDogdGhpcy5kaXJlY3RvcnlJZCxcbiAgICAgICAgICAgIHByaW5jaXBhbElkOiB0aGlzLnByaW5jaXBhbElkLFxuICAgICAgICAgICAgcHJpbmNpcGFsVHlwZTogdGhpcy5wcmluY2lwYWxUeXBlLFxuICAgICAgICAgICAgdGFyZ2V0SWQ6IHRoaXMudGFyZ2V0SWQsXG4gICAgICAgICAgICB0YXJnZXRUeXBlOiB0aGlzLnRhcmdldFR5cGUsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc0FjY2Vzc0Fzc2lnbm1lbnRQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NBY2Nlc3NDb25maWd1cmF0aW9uYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWNsb3Vkc3NvLWFjY2Vzc2NvbmZpZ3VyYXRpb25cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NBY2Nlc3NDb25maWd1cmF0aW9uUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFjY2Vzc0NvbmZpZ3VyYXRpb25OYW1lOiBUaGUgbmFtZSBvZiB0aGUgYWNjZXNzIGNvbmZpZ3VyYXRpb24uXG4gICAgICogVGhlIG5hbWUgY2FuIGNvbnRhaW4gbGV0dGVycywgZGlnaXRzLCBhbmQgaHlwaGVucyAoLSkuXG4gICAgICogVGhlIG5hbWUgY2FuIGJlIHVwIHRvIDMyIGNoYXJhY3RlcnMgaW4gbGVuZ3RoLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFjY2Vzc0NvbmZpZ3VyYXRpb25OYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGlyZWN0b3J5SWQ6IFRoZSBJRCBvZiB0aGUgZGlyZWN0b3J5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRpcmVjdG9yeUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVzY3JpcHRpb246IFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgYWNjZXNzIGNvbmZpZ3VyYXRpb24uXG4gICAgICogVGhlIGRlc2NyaXB0aW9uIGNhbiBiZSB1cCB0byAxLDAyNCBjaGFyYWN0ZXJzIGluIGxlbmd0aC5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZWxheVN0YXRlOiBUaGUgaW5pdGlhbCB3ZWIgcGFnZSB0aGF0IGlzIGRpc3BsYXllZCBhZnRlciBhIENsb3VkU1NPIHVzZXIgYWNjZXNzZXMgYW4gYWNjb3VudCBpbiB5b3VyIHJlc291cmNlIGRpcmVjdG9yeSBieSB1c2luZyB0aGUgYWNjZXNzIGNvbmZpZ3VyYXRpb24uXG4gICAgICogVGhlIHdlYiBwYWdlIG11c3QgYmUgYSBwYWdlIG9mIHRoZSBBbGliYWJhIENsb3VkIE1hbmFnZW1lbnQgQ29uc29sZS4gQnkgZGVmYXVsdCwgdGhpcyBwYXJhbWV0ZXIgaXMgZW1wdHksIHdoaWNoIGluZGljYXRlcyB0aGF0IHRoZSBpbml0aWFsIHdlYiBwYWdlIGlzIHRoZSBob21lcGFnZSBvZiB0aGUgQWxpYmFiYSBDbG91ZCBNYW5hZ2VtZW50IENvbnNvbGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVsYXlTdGF0ZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzZXNzaW9uRHVyYXRpb246IFRoZSBkdXJhdGlvbiBvZiBhIHNlc3Npb24gaW4gd2hpY2ggYSBDbG91ZFNTTyB1c2VyIGFjY2Vzc2VzIGFuIGFjY291bnQgaW4geW91ciByZXNvdXJjZSBkaXJlY3RvcnkgYnkgdXNpbmcgdGhlIGFjY2VzcyBjb25maWd1cmF0aW9uLlxuICAgICAqIFVuaXQ6IHNlY29uZHMuXG4gICAgICogVmFsaWQgdmFsdWVzOiA5MDAgdG8gNDMyMDAuIFRoZSB2YWx1ZSA5MDAgaW5kaWNhdGVzIDE1IG1pbnV0ZXMuIFRoZSB2YWx1ZSA0MzIwMCBpbmRpY2F0ZXMgMTIgaG91cnMuXG4gICAgICogRGVmYXVsdCB2YWx1ZTogMzYwMC4gVGhlIHZhbHVlIGluZGljYXRlcyAxIGhvdXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2Vzc2lvbkR1cmF0aW9uPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc0FjY2Vzc0NvbmZpZ3VyYXRpb25Qcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQWNjZXNzQ29uZmlndXJhdGlvblByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0FjY2Vzc0NvbmZpZ3VyYXRpb25Qcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBpZihwcm9wZXJ0aWVzLnNlc3Npb25EdXJhdGlvbiAmJiAodHlwZW9mIHByb3BlcnRpZXMuc2Vzc2lvbkR1cmF0aW9uKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzZXNzaW9uRHVyYXRpb24nLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5zZXNzaW9uRHVyYXRpb24sXG4gICAgICAgICAgICBtaW46IDkwMCxcbiAgICAgICAgICAgIG1heDogNDMyMDAsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Nlc3Npb25EdXJhdGlvbicsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5zZXNzaW9uRHVyYXRpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FjY2Vzc0NvbmZpZ3VyYXRpb25OYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmFjY2Vzc0NvbmZpZ3VyYXRpb25OYW1lKSk7XG4gICAgaWYocHJvcGVydGllcy5hY2Nlc3NDb25maWd1cmF0aW9uTmFtZSAmJiAodHlwZW9mIHByb3BlcnRpZXMuYWNjZXNzQ29uZmlndXJhdGlvbk5hbWUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FjY2Vzc0NvbmZpZ3VyYXRpb25OYW1lJywgcm9zLnZhbGlkYXRlQWxsb3dlZFBhdHRlcm4pKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmFjY2Vzc0NvbmZpZ3VyYXRpb25OYW1lLFxuICAgICAgICAgIHJlZzogL15bYS16QS1aMC05LV17MSwzMn0kL1xuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYWNjZXNzQ29uZmlndXJhdGlvbk5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuYWNjZXNzQ29uZmlndXJhdGlvbk5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RpcmVjdG9yeUlkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmRpcmVjdG9yeUlkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkaXJlY3RvcnlJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5kaXJlY3RvcnlJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVsYXlTdGF0ZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5yZWxheVN0YXRlKSk7XG4gICAgaWYocHJvcGVydGllcy5kZXNjcmlwdGlvbiAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSB8fCAodHlwZW9mIHByb3BlcnRpZXMuZGVzY3JpcHRpb24pID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZXNjcmlwdGlvbicsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5kZXNjcmlwdGlvbi5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG1heDogMTAyNCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVzY3JpcHRpb24nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZGVzY3JpcHRpb24pKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zQWNjZXNzQ29uZmlndXJhdGlvblByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpDbG91ZFNTTzo6QWNjZXNzQ29uZmlndXJhdGlvbmAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQWNjZXNzQ29uZmlndXJhdGlvblByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpDbG91ZFNTTzo6QWNjZXNzQ29uZmlndXJhdGlvbmAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NBY2Nlc3NDb25maWd1cmF0aW9uUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NBY2Nlc3NDb25maWd1cmF0aW9uUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgQWNjZXNzQ29uZmlndXJhdGlvbk5hbWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYWNjZXNzQ29uZmlndXJhdGlvbk5hbWUpLFxuICAgICAgRGlyZWN0b3J5SWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGlyZWN0b3J5SWQpLFxuICAgICAgRGVzY3JpcHRpb246IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGVzY3JpcHRpb24pLFxuICAgICAgUmVsYXlTdGF0ZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yZWxheVN0YXRlKSxcbiAgICAgIFNlc3Npb25EdXJhdGlvbjogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zZXNzaW9uRHVyYXRpb24pLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OkNsb3VkU1NPOjpBY2Nlc3NDb25maWd1cmF0aW9uYCwgd2hpY2ggaXMgdXNlZCB0byBjcmVhdGUgYW4gYWNjZXNzIGNvbmZpZ3VyYXRpb24uXG4gKiBATm90ZSBUaGlzIGNsYXNzIGRvZXMgbm90IGNvbnRhaW4gYWRkaXRpb25hbCBmdW5jdGlvbnMsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgYEFjY2Vzc0NvbmZpZ3VyYXRpb25gIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWNsb3Vkc3NvLWFjY2Vzc2NvbmZpZ3VyYXRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFJvc0FjY2Vzc0NvbmZpZ3VyYXRpb24gZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OkNsb3VkU1NPOjpBY2Nlc3NDb25maWd1cmF0aW9uXCI7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEFjY2Vzc0NvbmZpZ3VyYXRpb25JZDogVGhlIElEIG9mIHRoZSBhY2Nlc3MgY29uZmlndXJhdGlvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckFjY2Vzc0NvbmZpZ3VyYXRpb25JZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYWNjZXNzQ29uZmlndXJhdGlvbk5hbWU6IFRoZSBuYW1lIG9mIHRoZSBhY2Nlc3MgY29uZmlndXJhdGlvbi5cbiAgICAgKiBUaGUgbmFtZSBjYW4gY29udGFpbiBsZXR0ZXJzLCBkaWdpdHMsIGFuZCBoeXBoZW5zICgtKS5cbiAgICAgKiBUaGUgbmFtZSBjYW4gYmUgdXAgdG8gMzIgY2hhcmFjdGVycyBpbiBsZW5ndGguXG4gICAgICovXG4gICAgcHVibGljIGFjY2Vzc0NvbmZpZ3VyYXRpb25OYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGlyZWN0b3J5SWQ6IFRoZSBJRCBvZiB0aGUgZGlyZWN0b3J5LlxuICAgICAqL1xuICAgIHB1YmxpYyBkaXJlY3RvcnlJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlc2NyaXB0aW9uOiBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIGFjY2VzcyBjb25maWd1cmF0aW9uLlxuICAgICAqIFRoZSBkZXNjcmlwdGlvbiBjYW4gYmUgdXAgdG8gMSwwMjQgY2hhcmFjdGVycyBpbiBsZW5ndGguXG4gICAgICovXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVsYXlTdGF0ZTogVGhlIGluaXRpYWwgd2ViIHBhZ2UgdGhhdCBpcyBkaXNwbGF5ZWQgYWZ0ZXIgYSBDbG91ZFNTTyB1c2VyIGFjY2Vzc2VzIGFuIGFjY291bnQgaW4geW91ciByZXNvdXJjZSBkaXJlY3RvcnkgYnkgdXNpbmcgdGhlIGFjY2VzcyBjb25maWd1cmF0aW9uLlxuICAgICAqIFRoZSB3ZWIgcGFnZSBtdXN0IGJlIGEgcGFnZSBvZiB0aGUgQWxpYmFiYSBDbG91ZCBNYW5hZ2VtZW50IENvbnNvbGUuIEJ5IGRlZmF1bHQsIHRoaXMgcGFyYW1ldGVyIGlzIGVtcHR5LCB3aGljaCBpbmRpY2F0ZXMgdGhhdCB0aGUgaW5pdGlhbCB3ZWIgcGFnZSBpcyB0aGUgaG9tZXBhZ2Ugb2YgdGhlIEFsaWJhYmEgQ2xvdWQgTWFuYWdlbWVudCBDb25zb2xlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWxheVN0YXRlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2Vzc2lvbkR1cmF0aW9uOiBUaGUgZHVyYXRpb24gb2YgYSBzZXNzaW9uIGluIHdoaWNoIGEgQ2xvdWRTU08gdXNlciBhY2Nlc3NlcyBhbiBhY2NvdW50IGluIHlvdXIgcmVzb3VyY2UgZGlyZWN0b3J5IGJ5IHVzaW5nIHRoZSBhY2Nlc3MgY29uZmlndXJhdGlvbi5cbiAgICAgKiBVbml0OiBzZWNvbmRzLlxuICAgICAqIFZhbGlkIHZhbHVlczogOTAwIHRvIDQzMjAwLiBUaGUgdmFsdWUgOTAwIGluZGljYXRlcyAxNSBtaW51dGVzLiBUaGUgdmFsdWUgNDMyMDAgaW5kaWNhdGVzIDEyIGhvdXJzLlxuICAgICAqIERlZmF1bHQgdmFsdWU6IDM2MDAuIFRoZSB2YWx1ZSBpbmRpY2F0ZXMgMSBob3VyLlxuICAgICAqL1xuICAgIHB1YmxpYyBzZXNzaW9uRHVyYXRpb246IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NBY2Nlc3NDb25maWd1cmF0aW9uUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NBY2Nlc3NDb25maWd1cmF0aW9uLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJBY2Nlc3NDb25maWd1cmF0aW9uSWQgPSB0aGlzLmdldEF0dCgnQWNjZXNzQ29uZmlndXJhdGlvbklkJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmFjY2Vzc0NvbmZpZ3VyYXRpb25OYW1lID0gcHJvcHMuYWNjZXNzQ29uZmlndXJhdGlvbk5hbWU7XG4gICAgICAgIHRoaXMuZGlyZWN0b3J5SWQgPSBwcm9wcy5kaXJlY3RvcnlJZDtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IHByb3BzLmRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLnJlbGF5U3RhdGUgPSBwcm9wcy5yZWxheVN0YXRlO1xuICAgICAgICB0aGlzLnNlc3Npb25EdXJhdGlvbiA9IHByb3BzLnNlc3Npb25EdXJhdGlvbjtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhY2Nlc3NDb25maWd1cmF0aW9uTmFtZTogdGhpcy5hY2Nlc3NDb25maWd1cmF0aW9uTmFtZSxcbiAgICAgICAgICAgIGRpcmVjdG9yeUlkOiB0aGlzLmRpcmVjdG9yeUlkLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICByZWxheVN0YXRlOiB0aGlzLnJlbGF5U3RhdGUsXG4gICAgICAgICAgICBzZXNzaW9uRHVyYXRpb246IHRoaXMuc2Vzc2lvbkR1cmF0aW9uLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NBY2Nlc3NDb25maWd1cmF0aW9uUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUm9zQWNjZXNzQ29uZmlndXJhdGlvblByb3Zpc2lvbmAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1jbG91ZHNzby1hY2Nlc3Njb25maWd1cmF0aW9ucHJvdmlzaW9uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zQWNjZXNzQ29uZmlndXJhdGlvblByb3Zpc2lvblByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhY2Nlc3NDb25maWd1cmF0aW9uSWQ6IFRoZSBJRCBvZiB0aGUgYWNjZXNzIGNvbmZpZ3VyYXRpb24uXG4gICAgICovXG4gICAgcmVhZG9ubHkgYWNjZXNzQ29uZmlndXJhdGlvbklkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGlyZWN0b3J5SWQ6IFRoZSBJRCBvZiB0aGUgZGlyZWN0b3J5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRpcmVjdG9yeUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGFyZ2V0SWQ6IFRoZSBJRCBvZiB0aGUgdGFzayBvYmplY3QuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGFyZ2V0SWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0YXJnZXRUeXBlOiBUaGUgdHlwZSBvZiB0aGUgdGFzayBvYmplY3QuIFNldCB0aGUgdmFsdWUgdG8gUkQtQWNjb3VudCwgd2hpY2ggc3BlY2lmaWVzIHRoZSBhY2NvdW50cyBpbiB0aGUgcmVzb3VyY2UgZGlyZWN0b3J5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRhcmdldFR5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NBY2Nlc3NDb25maWd1cmF0aW9uUHJvdmlzaW9uUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0FjY2Vzc0NvbmZpZ3VyYXRpb25Qcm92aXNpb25Qcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NBY2Nlc3NDb25maWd1cmF0aW9uUHJvdmlzaW9uUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkaXJlY3RvcnlJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5kaXJlY3RvcnlJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGlyZWN0b3J5SWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZGlyZWN0b3J5SWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RhcmdldFR5cGUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMudGFyZ2V0VHlwZSkpO1xuICAgIGlmKHByb3BlcnRpZXMudGFyZ2V0VHlwZSAmJiAodHlwZW9mIHByb3BlcnRpZXMudGFyZ2V0VHlwZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGFyZ2V0VHlwZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnRhcmdldFR5cGUsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiUkQtQWNjb3VudFwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RhcmdldFR5cGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudGFyZ2V0VHlwZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYWNjZXNzQ29uZmlndXJhdGlvbklkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmFjY2Vzc0NvbmZpZ3VyYXRpb25JZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYWNjZXNzQ29uZmlndXJhdGlvbklkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmFjY2Vzc0NvbmZpZ3VyYXRpb25JZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGFyZ2V0SWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMudGFyZ2V0SWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RhcmdldElkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnRhcmdldElkKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc0FjY2Vzc0NvbmZpZ3VyYXRpb25Qcm92aXNpb25Qcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q2xvdWRTU086OkFjY2Vzc0NvbmZpZ3VyYXRpb25Qcm92aXNpb25gIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0FjY2Vzc0NvbmZpZ3VyYXRpb25Qcm92aXNpb25Qcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q2xvdWRTU086OkFjY2Vzc0NvbmZpZ3VyYXRpb25Qcm92aXNpb25gIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQWNjZXNzQ29uZmlndXJhdGlvblByb3Zpc2lvblByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zQWNjZXNzQ29uZmlndXJhdGlvblByb3Zpc2lvblByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIEFjY2Vzc0NvbmZpZ3VyYXRpb25JZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5hY2Nlc3NDb25maWd1cmF0aW9uSWQpLFxuICAgICAgRGlyZWN0b3J5SWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGlyZWN0b3J5SWQpLFxuICAgICAgVGFyZ2V0SWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudGFyZ2V0SWQpLFxuICAgICAgVGFyZ2V0VHlwZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy50YXJnZXRUeXBlKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBiYXNlIGVuY2Fwc3VsYXRpb24gYXJvdW5kIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpDbG91ZFNTTzo6QWNjZXNzQ29uZmlndXJhdGlvblByb3Zpc2lvbmAsIHdoaWNoIGlzIHVzZWQgdG8gcHJvdmlzaW9uIGFuIGFjY2VzcyBjb25maWd1cmF0aW9uIGZvciBhbiBhY2NvdW50IGluIHlvdXIgcmVzb3VyY2UgZGlyZWN0b3J5LlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBBY2Nlc3NDb25maWd1cmF0aW9uUHJvdmlzaW9uYCBjbGFzcyBpbnN0ZWFkIG9mIHRoaXMgY2xhc3MgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1jbG91ZHNzby1hY2Nlc3Njb25maWd1cmF0aW9ucHJvdmlzaW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NBY2Nlc3NDb25maWd1cmF0aW9uUHJvdmlzaW9uIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpDbG91ZFNTTzo6QWNjZXNzQ29uZmlndXJhdGlvblByb3Zpc2lvblwiO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYWNjZXNzQ29uZmlndXJhdGlvbklkOiBUaGUgSUQgb2YgdGhlIGFjY2VzcyBjb25maWd1cmF0aW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyBhY2Nlc3NDb25maWd1cmF0aW9uSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkaXJlY3RvcnlJZDogVGhlIElEIG9mIHRoZSBkaXJlY3RvcnkuXG4gICAgICovXG4gICAgcHVibGljIGRpcmVjdG9yeUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGFyZ2V0SWQ6IFRoZSBJRCBvZiB0aGUgdGFzayBvYmplY3QuXG4gICAgICovXG4gICAgcHVibGljIHRhcmdldElkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGFyZ2V0VHlwZTogVGhlIHR5cGUgb2YgdGhlIHRhc2sgb2JqZWN0LiBTZXQgdGhlIHZhbHVlIHRvIFJELUFjY291bnQsIHdoaWNoIHNwZWNpZmllcyB0aGUgYWNjb3VudHMgaW4gdGhlIHJlc291cmNlIGRpcmVjdG9yeS5cbiAgICAgKi9cbiAgICBwdWJsaWMgdGFyZ2V0VHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc0FjY2Vzc0NvbmZpZ3VyYXRpb25Qcm92aXNpb25Qcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc0FjY2Vzc0NvbmZpZ3VyYXRpb25Qcm92aXNpb24uUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmFjY2Vzc0NvbmZpZ3VyYXRpb25JZCA9IHByb3BzLmFjY2Vzc0NvbmZpZ3VyYXRpb25JZDtcbiAgICAgICAgdGhpcy5kaXJlY3RvcnlJZCA9IHByb3BzLmRpcmVjdG9yeUlkO1xuICAgICAgICB0aGlzLnRhcmdldElkID0gcHJvcHMudGFyZ2V0SWQ7XG4gICAgICAgIHRoaXMudGFyZ2V0VHlwZSA9IHByb3BzLnRhcmdldFR5cGU7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWNjZXNzQ29uZmlndXJhdGlvbklkOiB0aGlzLmFjY2Vzc0NvbmZpZ3VyYXRpb25JZCxcbiAgICAgICAgICAgIGRpcmVjdG9yeUlkOiB0aGlzLmRpcmVjdG9yeUlkLFxuICAgICAgICAgICAgdGFyZ2V0SWQ6IHRoaXMudGFyZ2V0SWQsXG4gICAgICAgICAgICB0YXJnZXRUeXBlOiB0aGlzLnRhcmdldFR5cGUsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc0FjY2Vzc0NvbmZpZ3VyYXRpb25Qcm92aXNpb25Qcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NEaXJlY3RvcnlgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tY2xvdWRzc28tZGlyZWN0b3J5XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zRGlyZWN0b3J5UHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRpcmVjdG9yeU5hbWU6IFRoZSBuYW1lIG9mIHRoZSBkaXJlY3RvcnkuIFRoZSBuYW1lIG11c3QgYmUgZ2xvYmFsbHkgdW5pcXVlLlxuICAgICAqIFRoZSBuYW1lIGNhbiBjb250YWluIGxvd2VyY2FzZSBsZXR0ZXJzLCBkaWdpdHMsIG9yIGh5cGhlbnMgKC0pLiBUaGUgbmFtZSBjYW5ub3Qgc3RhcnQgb3IgZW5kIHdpdGggYSBoeXBoZW4gKC0pIGFuZCBjYW5ub3QgY29udGFpbiB0d28gY29uc2VjdXRpdmUgaHlwaGVucyAoLSkuIFRoZSBuYW1lIGNhbm5vdCBzdGFydCB3aXRoIGQtLlxuICAgICAqIFRoZSBuYW1lIG11c3QgYmUgMiB0byA2NCBjaGFyYWN0ZXJzIGluIGxlbmd0aC5cbiAgICAgKiAqKk5vdGUqKjogSWYgeW91IGRvIG5vdCBzcGVjaWZ5IHRoaXMgcGFyYW1ldGVyLCB0aGUgdmFsdWUgb2YgdGhpcyBwYXJhbWV0ZXIgaXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYnkgdGhlIHN5c3RlbS5cbiAgICAgKi9cbiAgICByZWFkb25seSBkaXJlY3RvcnlOYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc0RpcmVjdG9yeVByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NEaXJlY3RvcnlQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NEaXJlY3RvcnlQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RpcmVjdG9yeU5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZGlyZWN0b3J5TmFtZSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NEaXJlY3RvcnlQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q2xvdWRTU086OkRpcmVjdG9yeWAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zRGlyZWN0b3J5UHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNsb3VkU1NPOjpEaXJlY3RvcnlgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zRGlyZWN0b3J5UHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NEaXJlY3RvcnlQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBEaXJlY3RvcnlOYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRpcmVjdG9yeU5hbWUpLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OkNsb3VkU1NPOjpEaXJlY3RvcnlgLCB3aGljaCBpcyB1c2VkIHRvIGNyZWF0ZSBhIGRpcmVjdG9yeS5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgZG9lcyBub3QgY29udGFpbiBhZGRpdGlvbmFsIGZ1bmN0aW9ucywgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgRGlyZWN0b3J5YCBjbGFzcyBpbnN0ZWFkIG9mIHRoaXMgY2xhc3MgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1jbG91ZHNzby1kaXJlY3RvcnlcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc0RpcmVjdG9yeSBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6Q2xvdWRTU086OkRpcmVjdG9yeVwiO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBEaXJlY3RvcnlJZDogVGhlIElEIG9mIHRoZSBkaXJlY3RvcnkuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJEaXJlY3RvcnlJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGlyZWN0b3J5TmFtZTogVGhlIG5hbWUgb2YgdGhlIGRpcmVjdG9yeS4gVGhlIG5hbWUgbXVzdCBiZSBnbG9iYWxseSB1bmlxdWUuXG4gICAgICogVGhlIG5hbWUgY2FuIGNvbnRhaW4gbG93ZXJjYXNlIGxldHRlcnMsIGRpZ2l0cywgb3IgaHlwaGVucyAoLSkuIFRoZSBuYW1lIGNhbm5vdCBzdGFydCBvciBlbmQgd2l0aCBhIGh5cGhlbiAoLSkgYW5kIGNhbm5vdCBjb250YWluIHR3byBjb25zZWN1dGl2ZSBoeXBoZW5zICgtKS4gVGhlIG5hbWUgY2Fubm90IHN0YXJ0IHdpdGggZC0uXG4gICAgICogVGhlIG5hbWUgbXVzdCBiZSAyIHRvIDY0IGNoYXJhY3RlcnMgaW4gbGVuZ3RoLlxuICAgICAqICoqTm90ZSoqOiBJZiB5b3UgZG8gbm90IHNwZWNpZnkgdGhpcyBwYXJhbWV0ZXIsIHRoZSB2YWx1ZSBvZiB0aGlzIHBhcmFtZXRlciBpcyBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBieSB0aGUgc3lzdGVtLlxuICAgICAqL1xuICAgIHB1YmxpYyBkaXJlY3RvcnlOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zRGlyZWN0b3J5UHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NEaXJlY3RvcnkuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckRpcmVjdG9yeUlkID0gdGhpcy5nZXRBdHQoJ0RpcmVjdG9yeUlkJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmRpcmVjdG9yeU5hbWUgPSBwcm9wcy5kaXJlY3RvcnlOYW1lO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRpcmVjdG9yeU5hbWU6IHRoaXMuZGlyZWN0b3J5TmFtZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zRGlyZWN0b3J5UHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUm9zR3JvdXBgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tY2xvdWRzc28tZ3JvdXBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NHcm91cFByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkaXJlY3RvcnlJZDogVGhlIElEIG9mIHRoZSBkaXJlY3RvcnkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGlyZWN0b3J5SWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBncm91cE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBncm91cC5cbiAgICAgKiBUaGUgbmFtZSBjYW4gY29udGFpbiBsZXR0ZXJzLCBkaWdpdHMsIHVuZGVyc2NvcmVzIChfKSwgaHlwaGVucyAoLSksIGFuZCBwZXJpb2RzICguKS5cbiAgICAgKiBUaGUgbmFtZSBjYW4gYmUgdXAgdG8gMTI4IGNoYXJhY3RlcnMgaW4gbGVuZ3RoLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGdyb3VwTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlc2NyaXB0aW9uOiBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIGdyb3VwLlxuICAgICAqIFRoZSBkZXNjcmlwdGlvbiBjYW4gYmUgdXAgdG8gMSwwMjQgY2hhcmFjdGVycyBpbiBsZW5ndGguXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zR3JvdXBQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zR3JvdXBQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NHcm91cFByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZ3JvdXBOYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmdyb3VwTmFtZSkpO1xuICAgIGlmKHByb3BlcnRpZXMuZ3JvdXBOYW1lICYmICh0eXBlb2YgcHJvcGVydGllcy5ncm91cE5hbWUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2dyb3VwTmFtZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRQYXR0ZXJuKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5ncm91cE5hbWUsXG4gICAgICAgICAgcmVnOiAvXlthLXpBLVowLTkuXy1dezEsMTI4fSQvXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdncm91cE5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZ3JvdXBOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkaXJlY3RvcnlJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5kaXJlY3RvcnlJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGlyZWN0b3J5SWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZGlyZWN0b3J5SWQpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMuZGVzY3JpcHRpb24pIHx8ICh0eXBlb2YgcHJvcGVydGllcy5kZXNjcmlwdGlvbikgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Rlc2NyaXB0aW9uJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbWF4OiAxMDI0LFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZXNjcmlwdGlvbicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5kZXNjcmlwdGlvbikpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NHcm91cFByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpDbG91ZFNTTzo6R3JvdXBgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0dyb3VwUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNsb3VkU1NPOjpHcm91cGAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NHcm91cFByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zR3JvdXBQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBEaXJlY3RvcnlJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kaXJlY3RvcnlJZCksXG4gICAgICBHcm91cE5hbWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZ3JvdXBOYW1lKSxcbiAgICAgIERlc2NyaXB0aW9uOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBiYXNlIGVuY2Fwc3VsYXRpb24gYXJvdW5kIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpDbG91ZFNTTzo6R3JvdXBgLCB3aGljaCBpcyB1c2VkIHRvIGNyZWF0ZSBhIGdyb3VwIGluIENsb3VkU1NPLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBHcm91cGAgY2xhc3MgaW5zdGVhZCBvZiB0aGlzIGNsYXNzIGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tY2xvdWRzc28tZ3JvdXBcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc0dyb3VwIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpDbG91ZFNTTzo6R3JvdXBcIjtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgR3JvdXBJZDogVGhlIElEIG9mIHRoZSBncm91cC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckdyb3VwSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRpcmVjdG9yeUlkOiBUaGUgSUQgb2YgdGhlIGRpcmVjdG9yeS5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGlyZWN0b3J5SWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBncm91cE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBncm91cC5cbiAgICAgKiBUaGUgbmFtZSBjYW4gY29udGFpbiBsZXR0ZXJzLCBkaWdpdHMsIHVuZGVyc2NvcmVzIChfKSwgaHlwaGVucyAoLSksIGFuZCBwZXJpb2RzICguKS5cbiAgICAgKiBUaGUgbmFtZSBjYW4gYmUgdXAgdG8gMTI4IGNoYXJhY3RlcnMgaW4gbGVuZ3RoLlxuICAgICAqL1xuICAgIHB1YmxpYyBncm91cE5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBncm91cC5cbiAgICAgKiBUaGUgZGVzY3JpcHRpb24gY2FuIGJlIHVwIHRvIDEsMDI0IGNoYXJhY3RlcnMgaW4gbGVuZ3RoLlxuICAgICAqL1xuICAgIHB1YmxpYyBkZXNjcmlwdGlvbjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc0dyb3VwUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NHcm91cC5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyR3JvdXBJZCA9IHRoaXMuZ2V0QXR0KCdHcm91cElkJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmRpcmVjdG9yeUlkID0gcHJvcHMuZGlyZWN0b3J5SWQ7XG4gICAgICAgIHRoaXMuZ3JvdXBOYW1lID0gcHJvcHMuZ3JvdXBOYW1lO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gcHJvcHMuZGVzY3JpcHRpb247XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGlyZWN0b3J5SWQ6IHRoaXMuZGlyZWN0b3J5SWQsXG4gICAgICAgICAgICBncm91cE5hbWU6IHRoaXMuZ3JvdXBOYW1lLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc0dyb3VwUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUm9zUGVybWlzc2lvblBvbGljeVRvQWNjZXNzQ29uZmlndXJhdGlvbkFkZGl0aW9uYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWNsb3Vkc3NvLXBlcm1pc3Npb25wb2xpY3l0b2FjY2Vzc2NvbmZpZ3VyYXRpb25hZGRpdGlvblxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc1Blcm1pc3Npb25Qb2xpY3lUb0FjY2Vzc0NvbmZpZ3VyYXRpb25BZGRpdGlvblByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhY2Nlc3NDb25maWd1cmF0aW9uSWQ6IFRoZSBJRCBvZiB0aGUgYWNjZXNzIGNvbmZpZ3VyYXRpb24uXG4gICAgICovXG4gICAgcmVhZG9ubHkgYWNjZXNzQ29uZmlndXJhdGlvbklkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGlyZWN0b3J5SWQ6IFRoZSBJRCBvZiB0aGUgZGlyZWN0b3J5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRpcmVjdG9yeUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcGVybWlzc2lvblBvbGljeU5hbWU6IFRoZSBuYW1lIG9mIHRoZSBwZXJtaXNzaW9uIHBvbGljeS5cbiAgICAgKiAtIElmIHlvdSBzZXQgUGVybWlzc2lvblBvbGljeVR5cGUgdG8gU3lzdGVtLCB5b3UgbXVzdCBzZXQgdGhpcyBwYXJhbWV0ZXIgdG8gdGhlIG5hbWUgb2YgdGhlIHN5c3RlbSBwb2xpY3kuIFlvdSBjYW4gb2J0YWluIHRoZSBuYW1lIG9mIHRoZSBzeXN0ZW0gcG9saWN5IGZyb20gUkFNLlxuICAgICAqIC0gSWYgeW91IHNldCBQZXJtaXNzaW9uUG9saWN5VHlwZSB0byBJbmxpbmUsIHlvdSBtdXN0IHNldCB0aGlzIHBhcmFtZXRlciB0byB0aGUgbmFtZSBvZiB0aGUgaW5saW5lIHBvbGljeS4gQSBjdXN0b20gdmFsdWUgaXMgc3VwcG9ydGVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBlcm1pc3Npb25Qb2xpY3lOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcGVybWlzc2lvblBvbGljeVR5cGU6IFRoZSB0eXBlIG9mIHRoZSBwZXJtaXNzaW9uIHBvbGljeS4gVmFsaWQgdmFsdWVzOlxuICAgICAqIC0gU3lzdGVtOiBzeXN0ZW0gcG9saWN5LiBSZXNvdXJjZSBBY2Nlc3MgTWFuYWdlbWVudCAoUkFNKSBzeXN0ZW0gcG9saWNpZXMgYXJlIHJldXNlZC5cbiAgICAgKiAtIElubGluZTogaW5saW5lIHBvbGljeS4gSW5saW5lIHBvbGljaWVzIGFyZSBjcmVhdGVkIGJhc2VkIG9uIHRoZSBSQU0gcG9saWN5IHN5bnRheCBhbmQgc3RydWN0dXJlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBlcm1pc3Npb25Qb2xpY3lUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW5saW5lUG9saWN5RG9jdW1lbnQ6IFRoZSBjb25maWd1cmF0aW9ucyBvZiB0aGUgaW5saW5lIHBvbGljeS5cbiAgICAgKiBUaGUgdmFsdWUgY2FuIGJlIHVwIHRvIDQsMDk2IGNoYXJhY3RlcnMgaW4gbGVuZ3RoLlxuICAgICAqIElmIHlvdSBzZXQgUGVybWlzc2lvblBvbGljeVR5cGUgdG8gSW5saW5lLCB5b3UgbXVzdCBzcGVjaWZ5IHRoaXMgcGFyYW1ldGVyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGlubGluZVBvbGljeURvY3VtZW50PzogeyBba2V5OiBzdHJpbmddOiAoYW55IHwgcm9zLklSZXNvbHZhYmxlKSB9IHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc1Blcm1pc3Npb25Qb2xpY3lUb0FjY2Vzc0NvbmZpZ3VyYXRpb25BZGRpdGlvblByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NQZXJtaXNzaW9uUG9saWN5VG9BY2Nlc3NDb25maWd1cmF0aW9uQWRkaXRpb25Qcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NQZXJtaXNzaW9uUG9saWN5VG9BY2Nlc3NDb25maWd1cmF0aW9uQWRkaXRpb25Qcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2lubGluZVBvbGljeURvY3VtZW50Jywgcm9zLmhhc2hWYWxpZGF0b3Iocm9zLnZhbGlkYXRlQW55KSkocHJvcGVydGllcy5pbmxpbmVQb2xpY3lEb2N1bWVudCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGlyZWN0b3J5SWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuZGlyZWN0b3J5SWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RpcmVjdG9yeUlkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmRpcmVjdG9yeUlkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwZXJtaXNzaW9uUG9saWN5TmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5wZXJtaXNzaW9uUG9saWN5TmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncGVybWlzc2lvblBvbGljeU5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucGVybWlzc2lvblBvbGljeU5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Blcm1pc3Npb25Qb2xpY3lUeXBlJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnBlcm1pc3Npb25Qb2xpY3lUeXBlKSk7XG4gICAgaWYocHJvcGVydGllcy5wZXJtaXNzaW9uUG9saWN5VHlwZSAmJiAodHlwZW9mIHByb3BlcnRpZXMucGVybWlzc2lvblBvbGljeVR5cGUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Blcm1pc3Npb25Qb2xpY3lUeXBlJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMucGVybWlzc2lvblBvbGljeVR5cGUsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiU3lzdGVtXCIsXCJJbmxpbmVcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwZXJtaXNzaW9uUG9saWN5VHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wZXJtaXNzaW9uUG9saWN5VHlwZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYWNjZXNzQ29uZmlndXJhdGlvbklkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmFjY2Vzc0NvbmZpZ3VyYXRpb25JZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYWNjZXNzQ29uZmlndXJhdGlvbklkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmFjY2Vzc0NvbmZpZ3VyYXRpb25JZCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NQZXJtaXNzaW9uUG9saWN5VG9BY2Nlc3NDb25maWd1cmF0aW9uQWRkaXRpb25Qcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q2xvdWRTU086OlBlcm1pc3Npb25Qb2xpY3lUb0FjY2Vzc0NvbmZpZ3VyYXRpb25BZGRpdGlvbmAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zUGVybWlzc2lvblBvbGljeVRvQWNjZXNzQ29uZmlndXJhdGlvbkFkZGl0aW9uUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNsb3VkU1NPOjpQZXJtaXNzaW9uUG9saWN5VG9BY2Nlc3NDb25maWd1cmF0aW9uQWRkaXRpb25gIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zUGVybWlzc2lvblBvbGljeVRvQWNjZXNzQ29uZmlndXJhdGlvbkFkZGl0aW9uUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NQZXJtaXNzaW9uUG9saWN5VG9BY2Nlc3NDb25maWd1cmF0aW9uQWRkaXRpb25Qcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBBY2Nlc3NDb25maWd1cmF0aW9uSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYWNjZXNzQ29uZmlndXJhdGlvbklkKSxcbiAgICAgIERpcmVjdG9yeUlkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRpcmVjdG9yeUlkKSxcbiAgICAgIFBlcm1pc3Npb25Qb2xpY3lOYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnBlcm1pc3Npb25Qb2xpY3lOYW1lKSxcbiAgICAgIFBlcm1pc3Npb25Qb2xpY3lUeXBlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnBlcm1pc3Npb25Qb2xpY3lUeXBlKSxcbiAgICAgIElubGluZVBvbGljeURvY3VtZW50OiByb3MuaGFzaE1hcHBlcihyb3Mub2JqZWN0VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5pbmxpbmVQb2xpY3lEb2N1bWVudCksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgYmFzZSBlbmNhcHN1bGF0aW9uIGFyb3VuZCB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6Q2xvdWRTU086OlBlcm1pc3Npb25Qb2xpY3lUb0FjY2Vzc0NvbmZpZ3VyYXRpb25BZGRpdGlvbmAsIHdoaWNoIGlzIHVzZWQgdG8gYWRkIGEgcG9saWN5IHRvIGFuIGFjY2VzcyBjb25maWd1cmF0aW9uLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBQZXJtaXNzaW9uUG9saWN5VG9BY2Nlc3NDb25maWd1cmF0aW9uQWRkaXRpb25gIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWNsb3Vkc3NvLXBlcm1pc3Npb25wb2xpY3l0b2FjY2Vzc2NvbmZpZ3VyYXRpb25hZGRpdGlvblxuICovXG5leHBvcnQgY2xhc3MgUm9zUGVybWlzc2lvblBvbGljeVRvQWNjZXNzQ29uZmlndXJhdGlvbkFkZGl0aW9uIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpDbG91ZFNTTzo6UGVybWlzc2lvblBvbGljeVRvQWNjZXNzQ29uZmlndXJhdGlvbkFkZGl0aW9uXCI7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhY2Nlc3NDb25maWd1cmF0aW9uSWQ6IFRoZSBJRCBvZiB0aGUgYWNjZXNzIGNvbmZpZ3VyYXRpb24uXG4gICAgICovXG4gICAgcHVibGljIGFjY2Vzc0NvbmZpZ3VyYXRpb25JZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRpcmVjdG9yeUlkOiBUaGUgSUQgb2YgdGhlIGRpcmVjdG9yeS5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGlyZWN0b3J5SWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwZXJtaXNzaW9uUG9saWN5TmFtZTogVGhlIG5hbWUgb2YgdGhlIHBlcm1pc3Npb24gcG9saWN5LlxuICAgICAqIC0gSWYgeW91IHNldCBQZXJtaXNzaW9uUG9saWN5VHlwZSB0byBTeXN0ZW0sIHlvdSBtdXN0IHNldCB0aGlzIHBhcmFtZXRlciB0byB0aGUgbmFtZSBvZiB0aGUgc3lzdGVtIHBvbGljeS4gWW91IGNhbiBvYnRhaW4gdGhlIG5hbWUgb2YgdGhlIHN5c3RlbSBwb2xpY3kgZnJvbSBSQU0uXG4gICAgICogLSBJZiB5b3Ugc2V0IFBlcm1pc3Npb25Qb2xpY3lUeXBlIHRvIElubGluZSwgeW91IG11c3Qgc2V0IHRoaXMgcGFyYW1ldGVyIHRvIHRoZSBuYW1lIG9mIHRoZSBpbmxpbmUgcG9saWN5LiBBIGN1c3RvbSB2YWx1ZSBpcyBzdXBwb3J0ZWQuXG4gICAgICovXG4gICAgcHVibGljIHBlcm1pc3Npb25Qb2xpY3lOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcGVybWlzc2lvblBvbGljeVR5cGU6IFRoZSB0eXBlIG9mIHRoZSBwZXJtaXNzaW9uIHBvbGljeS4gVmFsaWQgdmFsdWVzOlxuICAgICAqIC0gU3lzdGVtOiBzeXN0ZW0gcG9saWN5LiBSZXNvdXJjZSBBY2Nlc3MgTWFuYWdlbWVudCAoUkFNKSBzeXN0ZW0gcG9saWNpZXMgYXJlIHJldXNlZC5cbiAgICAgKiAtIElubGluZTogaW5saW5lIHBvbGljeS4gSW5saW5lIHBvbGljaWVzIGFyZSBjcmVhdGVkIGJhc2VkIG9uIHRoZSBSQU0gcG9saWN5IHN5bnRheCBhbmQgc3RydWN0dXJlLlxuICAgICAqL1xuICAgIHB1YmxpYyBwZXJtaXNzaW9uUG9saWN5VHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGlubGluZVBvbGljeURvY3VtZW50OiBUaGUgY29uZmlndXJhdGlvbnMgb2YgdGhlIGlubGluZSBwb2xpY3kuXG4gICAgICogVGhlIHZhbHVlIGNhbiBiZSB1cCB0byA0LDA5NiBjaGFyYWN0ZXJzIGluIGxlbmd0aC5cbiAgICAgKiBJZiB5b3Ugc2V0IFBlcm1pc3Npb25Qb2xpY3lUeXBlIHRvIElubGluZSwgeW91IG11c3Qgc3BlY2lmeSB0aGlzIHBhcmFtZXRlci5cbiAgICAgKi9cbiAgICBwdWJsaWMgaW5saW5lUG9saWN5RG9jdW1lbnQ6IHsgW2tleTogc3RyaW5nXTogKGFueSB8IHJvcy5JUmVzb2x2YWJsZSkgfSB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NQZXJtaXNzaW9uUG9saWN5VG9BY2Nlc3NDb25maWd1cmF0aW9uQWRkaXRpb25Qcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc1Blcm1pc3Npb25Qb2xpY3lUb0FjY2Vzc0NvbmZpZ3VyYXRpb25BZGRpdGlvbi5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuYWNjZXNzQ29uZmlndXJhdGlvbklkID0gcHJvcHMuYWNjZXNzQ29uZmlndXJhdGlvbklkO1xuICAgICAgICB0aGlzLmRpcmVjdG9yeUlkID0gcHJvcHMuZGlyZWN0b3J5SWQ7XG4gICAgICAgIHRoaXMucGVybWlzc2lvblBvbGljeU5hbWUgPSBwcm9wcy5wZXJtaXNzaW9uUG9saWN5TmFtZTtcbiAgICAgICAgdGhpcy5wZXJtaXNzaW9uUG9saWN5VHlwZSA9IHByb3BzLnBlcm1pc3Npb25Qb2xpY3lUeXBlO1xuICAgICAgICB0aGlzLmlubGluZVBvbGljeURvY3VtZW50ID0gcHJvcHMuaW5saW5lUG9saWN5RG9jdW1lbnQ7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWNjZXNzQ29uZmlndXJhdGlvbklkOiB0aGlzLmFjY2Vzc0NvbmZpZ3VyYXRpb25JZCxcbiAgICAgICAgICAgIGRpcmVjdG9yeUlkOiB0aGlzLmRpcmVjdG9yeUlkLFxuICAgICAgICAgICAgcGVybWlzc2lvblBvbGljeU5hbWU6IHRoaXMucGVybWlzc2lvblBvbGljeU5hbWUsXG4gICAgICAgICAgICBwZXJtaXNzaW9uUG9saWN5VHlwZTogdGhpcy5wZXJtaXNzaW9uUG9saWN5VHlwZSxcbiAgICAgICAgICAgIGlubGluZVBvbGljeURvY3VtZW50OiB0aGlzLmlubGluZVBvbGljeURvY3VtZW50LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NQZXJtaXNzaW9uUG9saWN5VG9BY2Nlc3NDb25maWd1cmF0aW9uQWRkaXRpb25Qcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NTQU1MSWRlbnRpdHlQcm92aWRlcmAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1jbG91ZHNzby1zYW1saWRlbnRpdHlwcm92aWRlclxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc1NBTUxJZGVudGl0eVByb3ZpZGVyUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRpcmVjdG9yeUlkOiBUaGUgSUQgb2YgdGhlIGRpcmVjdG9yeS5cbiAgICAgKi9cbiAgICByZWFkb25seSBkaXJlY3RvcnlJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGVuY29kZWRNZXRhZGF0YURvY3VtZW50OiBUaGUgbWV0YWRhdGEgZmlsZSBvZiB0aGUgSWRQLiBUaGUgdmFsdWUgb2YgdGhpcyBwYXJhbWV0ZXIgaXMgQmFzZTY0LWVuY29kZWQuXG4gICAgICogVGhlIGZpbGUgaXMgcHJvdmlkZWQgYnkgdGhlIElkUCB0aGF0IHN1cHBvcnRzIFNBTUwgMi4wLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGVuY29kZWRNZXRhZGF0YURvY3VtZW50Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGVudGl0eUlkOiBUaGUgZW50aXR5IElEIG9mIHRoZSBJZFAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZW50aXR5SWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbG9naW5Vcmw6IFRoZSBsb2dvbiBVUkwgb2YgdGhlIElkUC5cbiAgICAgKi9cbiAgICByZWFkb25seSBsb2dpblVybD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzc29TdGF0dXM6IFRoZSBzdGF0dXMgb2YgU1NPIGxvZ29uLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSBFbmFibGVkXG4gICAgICogLSBEaXNhYmxlZCAoZGVmYXVsdClcbiAgICAgKi9cbiAgICByZWFkb25seSBzc29TdGF0dXM/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgd2FudFJlcXVlc3RTaWduZWQ6IFNwZWNpZmllcyB3aGV0aGVyIENsb3VkU1NPIG5lZWRzIHRvIHNpZ24gU0FNTCByZXF1ZXN0cy4gVGhlIHJlcXVlc3RzIGFyZSBzZW50IHdoZW4gdXNlcnMgbG9nIG9uIHRvIHRoZSBDbG91ZFNTTyB1c2VyIHBvcnRhbCB0byBpbml0aWF0ZSBTQU1MLWJhc2VkIFNTTy4gVmFsaWQgdmFsdWVzOlxuICAgICAqIC0gdHJ1ZTogeWVzXG4gICAgICogLSBmYWxzZTogbm8gKGRlZmF1bHQpXG4gICAgICovXG4gICAgcmVhZG9ubHkgd2FudFJlcXVlc3RTaWduZWQ/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHg1MDlDZXJ0aWZpY2F0ZTogVGhlIFguNTA5IGNlcnRpZmljYXRlIG4gdGhlIFBFTSBmb3JtYXQuIElmIHlvdSBzcGVjaWZ5IHRoaXMgcGFyYW1ldGVyLCBhbGwgZXhpc3RpbmcgY2VydGlmaWNhdGVzIGFyZSByZXBsYWNlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSB4NTA5Q2VydGlmaWNhdGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zU0FNTElkZW50aXR5UHJvdmlkZXJQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zU0FNTElkZW50aXR5UHJvdmlkZXJQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NTQU1MSWRlbnRpdHlQcm92aWRlclByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZW50aXR5SWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZW50aXR5SWQpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnNzb1N0YXR1cyAmJiAodHlwZW9mIHByb3BlcnRpZXMuc3NvU3RhdHVzKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzc29TdGF0dXMnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5zc29TdGF0dXMsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiRW5hYmxlZFwiLFwiRGlzYWJsZWRcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzc29TdGF0dXMnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc3NvU3RhdHVzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkaXJlY3RvcnlJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5kaXJlY3RvcnlJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGlyZWN0b3J5SWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZGlyZWN0b3J5SWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2VuY29kZWRNZXRhZGF0YURvY3VtZW50Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmVuY29kZWRNZXRhZGF0YURvY3VtZW50KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd3YW50UmVxdWVzdFNpZ25lZCcsIHJvcy52YWxpZGF0ZUJvb2xlYW4pKHByb3BlcnRpZXMud2FudFJlcXVlc3RTaWduZWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2xvZ2luVXJsJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmxvZ2luVXJsKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd4NTA5Q2VydGlmaWNhdGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMueDUwOUNlcnRpZmljYXRlKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc1NBTUxJZGVudGl0eVByb3ZpZGVyUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNsb3VkU1NPOjpTQU1MSWRlbnRpdHlQcm92aWRlcmAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zU0FNTElkZW50aXR5UHJvdmlkZXJQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q2xvdWRTU086OlNBTUxJZGVudGl0eVByb3ZpZGVyYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1NBTUxJZGVudGl0eVByb3ZpZGVyUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NTQU1MSWRlbnRpdHlQcm92aWRlclByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIERpcmVjdG9yeUlkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRpcmVjdG9yeUlkKSxcbiAgICAgIEVuY29kZWRNZXRhZGF0YURvY3VtZW50OiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmVuY29kZWRNZXRhZGF0YURvY3VtZW50KSxcbiAgICAgIEVudGl0eUlkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmVudGl0eUlkKSxcbiAgICAgIExvZ2luVXJsOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmxvZ2luVXJsKSxcbiAgICAgIFNTT1N0YXR1czogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zc29TdGF0dXMpLFxuICAgICAgV2FudFJlcXVlc3RTaWduZWQ6IHJvcy5ib29sZWFuVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLndhbnRSZXF1ZXN0U2lnbmVkKSxcbiAgICAgIFg1MDlDZXJ0aWZpY2F0ZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy54NTA5Q2VydGlmaWNhdGUpLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OkNsb3VkU1NPOjpTQU1MSWRlbnRpdHlQcm92aWRlcmAsIHdoaWNoIGlzIHVzZWQgdG8gY29uZmlndXJlIHRoZSBpbmZvcm1hdGlvbiBhYm91dCBhIFNlY3VyaXR5IEFzc2VydGlvbiBNYXJrdXAgTGFuZ3VhZ2UgKFNBTUwpIGlkZW50aXR5IHByb3ZpZGVyIChJZFApLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBTQU1MSWRlbnRpdHlQcm92aWRlcmAgY2xhc3MgaW5zdGVhZCBvZiB0aGlzIGNsYXNzIGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tY2xvdWRzc28tc2FtbGlkZW50aXR5cHJvdmlkZXJcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc1NBTUxJZGVudGl0eVByb3ZpZGVyIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpDbG91ZFNTTzo6U0FNTElkZW50aXR5UHJvdmlkZXJcIjtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRpcmVjdG9yeUlkOiBUaGUgSUQgb2YgdGhlIGRpcmVjdG9yeS5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGlyZWN0b3J5SWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBlbmNvZGVkTWV0YWRhdGFEb2N1bWVudDogVGhlIG1ldGFkYXRhIGZpbGUgb2YgdGhlIElkUC4gVGhlIHZhbHVlIG9mIHRoaXMgcGFyYW1ldGVyIGlzIEJhc2U2NC1lbmNvZGVkLlxuICAgICAqIFRoZSBmaWxlIGlzIHByb3ZpZGVkIGJ5IHRoZSBJZFAgdGhhdCBzdXBwb3J0cyBTQU1MIDIuMC5cbiAgICAgKi9cbiAgICBwdWJsaWMgZW5jb2RlZE1ldGFkYXRhRG9jdW1lbnQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBlbnRpdHlJZDogVGhlIGVudGl0eSBJRCBvZiB0aGUgSWRQLlxuICAgICAqL1xuICAgIHB1YmxpYyBlbnRpdHlJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGxvZ2luVXJsOiBUaGUgbG9nb24gVVJMIG9mIHRoZSBJZFAuXG4gICAgICovXG4gICAgcHVibGljIGxvZ2luVXJsOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc3NvU3RhdHVzOiBUaGUgc3RhdHVzIG9mIFNTTyBsb2dvbi4gVmFsaWQgdmFsdWVzOlxuICAgICAqIC0gRW5hYmxlZFxuICAgICAqIC0gRGlzYWJsZWQgKGRlZmF1bHQpXG4gICAgICovXG4gICAgcHVibGljIHNzb1N0YXR1czogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHdhbnRSZXF1ZXN0U2lnbmVkOiBTcGVjaWZpZXMgd2hldGhlciBDbG91ZFNTTyBuZWVkcyB0byBzaWduIFNBTUwgcmVxdWVzdHMuIFRoZSByZXF1ZXN0cyBhcmUgc2VudCB3aGVuIHVzZXJzIGxvZyBvbiB0byB0aGUgQ2xvdWRTU08gdXNlciBwb3J0YWwgdG8gaW5pdGlhdGUgU0FNTC1iYXNlZCBTU08uIFZhbGlkIHZhbHVlczpcbiAgICAgKiAtIHRydWU6IHllc1xuICAgICAqIC0gZmFsc2U6IG5vIChkZWZhdWx0KVxuICAgICAqL1xuICAgIHB1YmxpYyB3YW50UmVxdWVzdFNpZ25lZDogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB4NTA5Q2VydGlmaWNhdGU6IFRoZSBYLjUwOSBjZXJ0aWZpY2F0ZSBuIHRoZSBQRU0gZm9ybWF0LiBJZiB5b3Ugc3BlY2lmeSB0aGlzIHBhcmFtZXRlciwgYWxsIGV4aXN0aW5nIGNlcnRpZmljYXRlcyBhcmUgcmVwbGFjZWQuXG4gICAgICovXG4gICAgcHVibGljIHg1MDlDZXJ0aWZpY2F0ZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc1NBTUxJZGVudGl0eVByb3ZpZGVyUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NTQU1MSWRlbnRpdHlQcm92aWRlci5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuZGlyZWN0b3J5SWQgPSBwcm9wcy5kaXJlY3RvcnlJZDtcbiAgICAgICAgdGhpcy5lbmNvZGVkTWV0YWRhdGFEb2N1bWVudCA9IHByb3BzLmVuY29kZWRNZXRhZGF0YURvY3VtZW50O1xuICAgICAgICB0aGlzLmVudGl0eUlkID0gcHJvcHMuZW50aXR5SWQ7XG4gICAgICAgIHRoaXMubG9naW5VcmwgPSBwcm9wcy5sb2dpblVybDtcbiAgICAgICAgdGhpcy5zc29TdGF0dXMgPSBwcm9wcy5zc29TdGF0dXM7XG4gICAgICAgIHRoaXMud2FudFJlcXVlc3RTaWduZWQgPSBwcm9wcy53YW50UmVxdWVzdFNpZ25lZDtcbiAgICAgICAgdGhpcy54NTA5Q2VydGlmaWNhdGUgPSBwcm9wcy54NTA5Q2VydGlmaWNhdGU7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGlyZWN0b3J5SWQ6IHRoaXMuZGlyZWN0b3J5SWQsXG4gICAgICAgICAgICBlbmNvZGVkTWV0YWRhdGFEb2N1bWVudDogdGhpcy5lbmNvZGVkTWV0YWRhdGFEb2N1bWVudCxcbiAgICAgICAgICAgIGVudGl0eUlkOiB0aGlzLmVudGl0eUlkLFxuICAgICAgICAgICAgbG9naW5Vcmw6IHRoaXMubG9naW5VcmwsXG4gICAgICAgICAgICBzc29TdGF0dXM6IHRoaXMuc3NvU3RhdHVzLFxuICAgICAgICAgICAgd2FudFJlcXVlc3RTaWduZWQ6IHRoaXMud2FudFJlcXVlc3RTaWduZWQsXG4gICAgICAgICAgICB4NTA5Q2VydGlmaWNhdGU6IHRoaXMueDUwOUNlcnRpZmljYXRlLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NTQU1MSWRlbnRpdHlQcm92aWRlclByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFJvc1NDSU1TZXJ2ZXJDcmVkZW50aWFsYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWNsb3Vkc3NvLXNjaW1zZXJ2ZXJjcmVkZW50aWFsXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zU0NJTVNlcnZlckNyZWRlbnRpYWxQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGlyZWN0b3J5SWQ6IFRoZSBJRCBvZiB0aGUgZGlyZWN0b3J5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRpcmVjdG9yeUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc3RhdHVzOiBUaGUgbmV3IHN0YXR1cyBvZiB0aGUgU0NJTSBjcmVkZW50aWFsLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSBFbmFibGVkOiBUaGUgU0NJTSBjcmVkZW50aWFsIGlzIGVuYWJsZWQuXG4gICAgICogLSBEaXNhYmxlZDogVGhlIFNDSU0gY3JlZGVudGlhbCBpcyBkaXNhYmxlZC5cbiAgICAgKiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyBFbmFibGVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHN0YXR1cz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NTQ0lNU2VydmVyQ3JlZGVudGlhbFByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NTQ0lNU2VydmVyQ3JlZGVudGlhbFByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1NDSU1TZXJ2ZXJDcmVkZW50aWFsUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgaWYocHJvcGVydGllcy5zdGF0dXMgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnN0YXR1cykgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3RhdHVzJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuc3RhdHVzLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIkVuYWJsZWRcIixcIkRpc2FibGVkXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3RhdHVzJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnN0YXR1cykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGlyZWN0b3J5SWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuZGlyZWN0b3J5SWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RpcmVjdG9yeUlkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmRpcmVjdG9yeUlkKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc1NDSU1TZXJ2ZXJDcmVkZW50aWFsUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNsb3VkU1NPOjpTQ0lNU2VydmVyQ3JlZGVudGlhbGAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zU0NJTVNlcnZlckNyZWRlbnRpYWxQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q2xvdWRTU086OlNDSU1TZXJ2ZXJDcmVkZW50aWFsYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1NDSU1TZXJ2ZXJDcmVkZW50aWFsUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NTQ0lNU2VydmVyQ3JlZGVudGlhbFByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIERpcmVjdG9yeUlkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRpcmVjdG9yeUlkKSxcbiAgICAgIFN0YXR1czogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zdGF0dXMpLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OkNsb3VkU1NPOjpTQ0lNU2VydmVyQ3JlZGVudGlhbGAsIHdoaWNoIGlzIHVzZWQgdG8gY3JlYXRlIGEgU3lzdGVtIGZvciBDcm9zcy1kb21haW4gSWRlbnRpdHkgTWFuYWdlbWVudCAoU0NJTSkgY3JlZGVudGlhbC5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgZG9lcyBub3QgY29udGFpbiBhZGRpdGlvbmFsIGZ1bmN0aW9ucywgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgU0NJTVNlcnZlckNyZWRlbnRpYWxgIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWNsb3Vkc3NvLXNjaW1zZXJ2ZXJjcmVkZW50aWFsXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NTQ0lNU2VydmVyQ3JlZGVudGlhbCBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6Q2xvdWRTU086OlNDSU1TZXJ2ZXJDcmVkZW50aWFsXCI7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIENyZWRlbnRpYWxJZDogVGhlIElEIG9mIHRoZSBTQ0lNIGNyZWRlbnRpYWwuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDcmVkZW50aWFsSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQ3JlZGVudGlhbFNlY3JldDogVGhlIHNlY3JldCBvZiB0aGUgU0NJTSBjcmVkZW50aWFsLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ3JlZGVudGlhbFNlY3JldDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGlyZWN0b3J5SWQ6IFRoZSBJRCBvZiB0aGUgZGlyZWN0b3J5LlxuICAgICAqL1xuICAgIHB1YmxpYyBkaXJlY3RvcnlJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHN0YXR1czogVGhlIG5ldyBzdGF0dXMgb2YgdGhlIFNDSU0gY3JlZGVudGlhbC4gVmFsaWQgdmFsdWVzOlxuICAgICAqIC0gRW5hYmxlZDogVGhlIFNDSU0gY3JlZGVudGlhbCBpcyBlbmFibGVkLlxuICAgICAqIC0gRGlzYWJsZWQ6IFRoZSBTQ0lNIGNyZWRlbnRpYWwgaXMgZGlzYWJsZWQuXG4gICAgICogVGhlIGRlZmF1bHQgdmFsdWUgaXMgRW5hYmxlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdHVzOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zU0NJTVNlcnZlckNyZWRlbnRpYWxQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc1NDSU1TZXJ2ZXJDcmVkZW50aWFsLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJDcmVkZW50aWFsSWQgPSB0aGlzLmdldEF0dCgnQ3JlZGVudGlhbElkJyk7XG4gICAgICAgIHRoaXMuYXR0ckNyZWRlbnRpYWxTZWNyZXQgPSB0aGlzLmdldEF0dCgnQ3JlZGVudGlhbFNlY3JldCcpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5kaXJlY3RvcnlJZCA9IHByb3BzLmRpcmVjdG9yeUlkO1xuICAgICAgICB0aGlzLnN0YXR1cyA9IHByb3BzLnN0YXR1cztcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkaXJlY3RvcnlJZDogdGhpcy5kaXJlY3RvcnlJZCxcbiAgICAgICAgICAgIHN0YXR1czogdGhpcy5zdGF0dXMsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc1NDSU1TZXJ2ZXJDcmVkZW50aWFsUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUm9zU0NJTVN5bmNocm9uaXphdGlvbmAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1jbG91ZHNzby1zY2ltc3luY2hyb25pemF0aW9uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zU0NJTVN5bmNocm9uaXphdGlvblByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkaXJlY3RvcnlJZDogVGhlIElEIG9mIHRoZSBkaXJlY3RvcnkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGlyZWN0b3J5SWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzY2ltU3luY2hyb25pemF0aW9uU3RhdHVzOiBUaGUgc3RhdHVzIG9mIFNDSU0gc3luY2hyb25pemF0aW9uLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSBFbmFibGVkXG4gICAgICogLSBEaXNhYmxlZFxuICAgICAqIFRoZSBkZWZhdWx0IHZhbHVlIGlzIEVuYWJsZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2NpbVN5bmNocm9uaXphdGlvblN0YXR1cz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NTQ0lNU3luY2hyb25pemF0aW9uUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1NDSU1TeW5jaHJvbml6YXRpb25Qcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NTQ0lNU3luY2hyb25pemF0aW9uUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkaXJlY3RvcnlJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5kaXJlY3RvcnlJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGlyZWN0b3J5SWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZGlyZWN0b3J5SWQpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnNjaW1TeW5jaHJvbml6YXRpb25TdGF0dXMgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnNjaW1TeW5jaHJvbml6YXRpb25TdGF0dXMpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NjaW1TeW5jaHJvbml6YXRpb25TdGF0dXMnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5zY2ltU3luY2hyb25pemF0aW9uU3RhdHVzLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIkVuYWJsZWRcIixcIkRpc2FibGVkXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2NpbVN5bmNocm9uaXphdGlvblN0YXR1cycsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zY2ltU3luY2hyb25pemF0aW9uU3RhdHVzKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc1NDSU1TeW5jaHJvbml6YXRpb25Qcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q2xvdWRTU086OlNDSU1TeW5jaHJvbml6YXRpb25gIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1NDSU1TeW5jaHJvbml6YXRpb25Qcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q2xvdWRTU086OlNDSU1TeW5jaHJvbml6YXRpb25gIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zU0NJTVN5bmNocm9uaXphdGlvblByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zU0NJTVN5bmNocm9uaXphdGlvblByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIERpcmVjdG9yeUlkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRpcmVjdG9yeUlkKSxcbiAgICAgIFNDSU1TeW5jaHJvbml6YXRpb25TdGF0dXM6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc2NpbVN5bmNocm9uaXphdGlvblN0YXR1cyksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgYmFzZSBlbmNhcHN1bGF0aW9uIGFyb3VuZCB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6Q2xvdWRTU086OlNDSU1TeW5jaHJvbml6YXRpb25gLCB3aGljaCBpcyB1c2VkIHRvIGVuYWJsZSBvciBkaXNhYmxlIFN5c3RlbSBmb3IgQ3Jvc3MtZG9tYWluIElkZW50aXR5IE1hbmFnZW1lbnQgKFNDSU0pIHN5bmNocm9uaXphdGlvbi5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgZG9lcyBub3QgY29udGFpbiBhZGRpdGlvbmFsIGZ1bmN0aW9ucywgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgU0NJTVN5bmNocm9uaXphdGlvbmAgY2xhc3MgaW5zdGVhZCBvZiB0aGlzIGNsYXNzIGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tY2xvdWRzc28tc2NpbXN5bmNocm9uaXphdGlvblxuICovXG5leHBvcnQgY2xhc3MgUm9zU0NJTVN5bmNocm9uaXphdGlvbiBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6Q2xvdWRTU086OlNDSU1TeW5jaHJvbml6YXRpb25cIjtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRpcmVjdG9yeUlkOiBUaGUgSUQgb2YgdGhlIGRpcmVjdG9yeS5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGlyZWN0b3J5SWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzY2ltU3luY2hyb25pemF0aW9uU3RhdHVzOiBUaGUgc3RhdHVzIG9mIFNDSU0gc3luY2hyb25pemF0aW9uLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSBFbmFibGVkXG4gICAgICogLSBEaXNhYmxlZFxuICAgICAqIFRoZSBkZWZhdWx0IHZhbHVlIGlzIEVuYWJsZWQuXG4gICAgICovXG4gICAgcHVibGljIHNjaW1TeW5jaHJvbml6YXRpb25TdGF0dXM6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NTQ0lNU3luY2hyb25pemF0aW9uUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NTQ0lNU3luY2hyb25pemF0aW9uLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5kaXJlY3RvcnlJZCA9IHByb3BzLmRpcmVjdG9yeUlkO1xuICAgICAgICB0aGlzLnNjaW1TeW5jaHJvbml6YXRpb25TdGF0dXMgPSBwcm9wcy5zY2ltU3luY2hyb25pemF0aW9uU3RhdHVzO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRpcmVjdG9yeUlkOiB0aGlzLmRpcmVjdG9yeUlkLFxuICAgICAgICAgICAgc2NpbVN5bmNocm9uaXphdGlvblN0YXR1czogdGhpcy5zY2ltU3luY2hyb25pemF0aW9uU3RhdHVzLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NTQ0lNU3luY2hyb25pemF0aW9uUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUm9zVXNlcmAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1jbG91ZHNzby11c2VyXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zVXNlclByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkaXJlY3RvcnlJZDogVGhlIElEIG9mIHRoZSBkaXJlY3RvcnkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGlyZWN0b3J5SWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB1c2VyTmFtZTogVGhlIG5hbWUgb2YgdGhlIHVzZXIuIFRoZSBuYW1lIG11c3QgYmUgdW5pcXVlIHdpdGhpbiB0aGUgZGlyZWN0b3J5LiBUaGUgbmFtZSBjYW5ub3QgYmUgY2hhbmdlZC5cbiAgICAgKiBUaGUgbmFtZSBjYW4gY29udGFpbiBudW1iZXJzLCBsZXR0ZXJzLCBhbmQgdGhlIGZvbGxvd2luZyBzcGVjaWFsIGNoYXJhY3RlcnM6IEBfLS5cbiAgICAgKiBUaGUgbmFtZSBjYW4gYmUgdXAgdG8gNjQgY2hhcmFjdGVycyBpbiBsZW5ndGguXG4gICAgICovXG4gICAgcmVhZG9ubHkgdXNlck5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSB1c2VyLlxuICAgICAqIFRoZSBkZXNjcmlwdGlvbiBjYW4gYmUgdXAgdG8gMSwwMjQgY2hhcmFjdGVycyBpbiBsZW5ndGguXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGlzcGxheU5hbWU6IFRoZSBkaXNwbGF5IG5hbWUgb2YgdGhlIHVzZXIuXG4gICAgICogVGhlIG5hbWUgY2FuIGJlIHVwIHRvIDI1NiBjaGFyYWN0ZXJzIGluIGxlbmd0aC5cbiAgICAgKi9cbiAgICByZWFkb25seSBkaXNwbGF5TmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBlbWFpbDogVGhlIGVtYWlsIGFkZHJlc3Mgb2YgdGhlIHVzZXIuIFRoZSBlbWFpbCBhZGRyZXNzIG11c3QgYmUgdW5pcXVlIHdpdGhpbiB0aGUgZGlyZWN0b3J5LlxuICAgICAqIFRoZSBlbWFpbCBhZGRyZXNzIGNhbiBiZSB1cCB0byAxMjggY2hhcmFjdGVycyBpbiBsZW5ndGguXG4gICAgICovXG4gICAgcmVhZG9ubHkgZW1haWw/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZmlyc3ROYW1lOiBUaGUgZmlyc3QgbmFtZSBvZiB0aGUgdXNlci5cbiAgICAgKiBUaGUgbmFtZSBjYW4gYmUgdXAgdG8gNjQgY2hhcmFjdGVycyBpbiBsZW5ndGguXG4gICAgICovXG4gICAgcmVhZG9ubHkgZmlyc3ROYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGxhc3ROYW1lOiBUaGUgbGFzdCBuYW1lIG9mIHRoZSB1c2VyLlxuICAgICAqIFRoZSBuYW1lIGNhbiBiZSB1cCB0byA2NCBjaGFyYWN0ZXJzIGluIGxlbmd0aC5cbiAgICAgKi9cbiAgICByZWFkb25seSBsYXN0TmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzdGF0dXM6IFRoZSBzdGF0dXMgb2YgdGhlIHVzZXIuIFZhbGlkIHZhbHVlczpcbiAgICAgKiAtIEVuYWJsZWQ6IFRoZSBsb2dvbiBvZiB0aGUgdXNlciBpcyBlbmFibGVkLiBUaGlzIGlzIHRoZSBkZWZhdWx0IHZhbHVlLlxuICAgICAqIC0gRGlzYWJsZWQ6IFRoZSBsb2dvbiBvZiB0aGUgdXNlciBpcyBkaXNhYmxlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBzdGF0dXM/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zVXNlclByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NVc2VyUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zVXNlclByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGlmKHByb3BlcnRpZXMuc3RhdHVzICYmICh0eXBlb2YgcHJvcGVydGllcy5zdGF0dXMpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N0YXR1cycsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnN0YXR1cyxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJFbmFibGVkXCIsXCJEaXNhYmxlZFwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N0YXR1cycsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zdGF0dXMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3VzZXJOYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnVzZXJOYW1lKSk7XG4gICAgaWYocHJvcGVydGllcy51c2VyTmFtZSAmJiAodHlwZW9mIHByb3BlcnRpZXMudXNlck5hbWUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3VzZXJOYW1lJywgcm9zLnZhbGlkYXRlQWxsb3dlZFBhdHRlcm4pKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnVzZXJOYW1lLFxuICAgICAgICAgIHJlZzogL15bYS16QS1aMC05QC5fLV17MSw2NH0kL1xuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndXNlck5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudXNlck5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RpcmVjdG9yeUlkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmRpcmVjdG9yeUlkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkaXJlY3RvcnlJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5kaXJlY3RvcnlJZCkpO1xuICAgIGlmKHByb3BlcnRpZXMuZGVzY3JpcHRpb24gJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5kZXNjcmlwdGlvbikgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVzY3JpcHRpb24nLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuZGVzY3JpcHRpb24ubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtYXg6IDEwMjQsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Rlc2NyaXB0aW9uJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSk7XG4gICAgaWYocHJvcGVydGllcy5lbWFpbCAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLmVtYWlsKSB8fCAodHlwZW9mIHByb3BlcnRpZXMuZW1haWwpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdlbWFpbCcsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5lbWFpbC5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG1heDogMTI4LFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdlbWFpbCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5lbWFpbCkpO1xuICAgIGlmKHByb3BlcnRpZXMuZmlyc3ROYW1lICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMuZmlyc3ROYW1lKSB8fCAodHlwZW9mIHByb3BlcnRpZXMuZmlyc3ROYW1lKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZmlyc3ROYW1lJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmZpcnN0TmFtZS5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG1heDogNjQsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2ZpcnN0TmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5maXJzdE5hbWUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmRpc3BsYXlOYW1lICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMuZGlzcGxheU5hbWUpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5kaXNwbGF5TmFtZSkgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Rpc3BsYXlOYW1lJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmRpc3BsYXlOYW1lLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbWF4OiAyNTYsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Rpc3BsYXlOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmRpc3BsYXlOYW1lKSk7XG4gICAgaWYocHJvcGVydGllcy5sYXN0TmFtZSAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLmxhc3ROYW1lKSB8fCAodHlwZW9mIHByb3BlcnRpZXMubGFzdE5hbWUpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdsYXN0TmFtZScsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5sYXN0TmFtZS5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG1heDogNjQsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2xhc3ROYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmxhc3ROYW1lKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc1VzZXJQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q2xvdWRTU086OlVzZXJgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1VzZXJQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q2xvdWRTU086OlVzZXJgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zVXNlclByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zVXNlclByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIERpcmVjdG9yeUlkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRpcmVjdG9yeUlkKSxcbiAgICAgIFVzZXJOYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnVzZXJOYW1lKSxcbiAgICAgIERlc2NyaXB0aW9uOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSxcbiAgICAgIERpc3BsYXlOYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRpc3BsYXlOYW1lKSxcbiAgICAgIEVtYWlsOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmVtYWlsKSxcbiAgICAgIEZpcnN0TmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5maXJzdE5hbWUpLFxuICAgICAgTGFzdE5hbWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubGFzdE5hbWUpLFxuICAgICAgU3RhdHVzOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnN0YXR1cyksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgYmFzZSBlbmNhcHN1bGF0aW9uIGFyb3VuZCB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6Q2xvdWRTU086OlVzZXJgLCB3aGljaCBpcyB1c2VkIHRvIGNyZWF0ZSBhIHVzZXIuXG4gKiBATm90ZSBUaGlzIGNsYXNzIGRvZXMgbm90IGNvbnRhaW4gYWRkaXRpb25hbCBmdW5jdGlvbnMsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgYFVzZXJgIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWNsb3Vkc3NvLXVzZXJcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc1VzZXIgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OkNsb3VkU1NPOjpVc2VyXCI7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFVzZXJJZDogVGhlIElEIG9mIHRoZSB1c2VyLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVXNlcklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkaXJlY3RvcnlJZDogVGhlIElEIG9mIHRoZSBkaXJlY3RvcnkuXG4gICAgICovXG4gICAgcHVibGljIGRpcmVjdG9yeUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdXNlck5hbWU6IFRoZSBuYW1lIG9mIHRoZSB1c2VyLiBUaGUgbmFtZSBtdXN0IGJlIHVuaXF1ZSB3aXRoaW4gdGhlIGRpcmVjdG9yeS4gVGhlIG5hbWUgY2Fubm90IGJlIGNoYW5nZWQuXG4gICAgICogVGhlIG5hbWUgY2FuIGNvbnRhaW4gbnVtYmVycywgbGV0dGVycywgYW5kIHRoZSBmb2xsb3dpbmcgc3BlY2lhbCBjaGFyYWN0ZXJzOiBAXy0uXG4gICAgICogVGhlIG5hbWUgY2FuIGJlIHVwIHRvIDY0IGNoYXJhY3RlcnMgaW4gbGVuZ3RoLlxuICAgICAqL1xuICAgIHB1YmxpYyB1c2VyTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlc2NyaXB0aW9uOiBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIHVzZXIuXG4gICAgICogVGhlIGRlc2NyaXB0aW9uIGNhbiBiZSB1cCB0byAxLDAyNCBjaGFyYWN0ZXJzIGluIGxlbmd0aC5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkaXNwbGF5TmFtZTogVGhlIGRpc3BsYXkgbmFtZSBvZiB0aGUgdXNlci5cbiAgICAgKiBUaGUgbmFtZSBjYW4gYmUgdXAgdG8gMjU2IGNoYXJhY3RlcnMgaW4gbGVuZ3RoLlxuICAgICAqL1xuICAgIHB1YmxpYyBkaXNwbGF5TmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGVtYWlsOiBUaGUgZW1haWwgYWRkcmVzcyBvZiB0aGUgdXNlci4gVGhlIGVtYWlsIGFkZHJlc3MgbXVzdCBiZSB1bmlxdWUgd2l0aGluIHRoZSBkaXJlY3RvcnkuXG4gICAgICogVGhlIGVtYWlsIGFkZHJlc3MgY2FuIGJlIHVwIHRvIDEyOCBjaGFyYWN0ZXJzIGluIGxlbmd0aC5cbiAgICAgKi9cbiAgICBwdWJsaWMgZW1haWw6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBmaXJzdE5hbWU6IFRoZSBmaXJzdCBuYW1lIG9mIHRoZSB1c2VyLlxuICAgICAqIFRoZSBuYW1lIGNhbiBiZSB1cCB0byA2NCBjaGFyYWN0ZXJzIGluIGxlbmd0aC5cbiAgICAgKi9cbiAgICBwdWJsaWMgZmlyc3ROYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbGFzdE5hbWU6IFRoZSBsYXN0IG5hbWUgb2YgdGhlIHVzZXIuXG4gICAgICogVGhlIG5hbWUgY2FuIGJlIHVwIHRvIDY0IGNoYXJhY3RlcnMgaW4gbGVuZ3RoLlxuICAgICAqL1xuICAgIHB1YmxpYyBsYXN0TmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHN0YXR1czogVGhlIHN0YXR1cyBvZiB0aGUgdXNlci4gVmFsaWQgdmFsdWVzOlxuICAgICAqIC0gRW5hYmxlZDogVGhlIGxvZ29uIG9mIHRoZSB1c2VyIGlzIGVuYWJsZWQuIFRoaXMgaXMgdGhlIGRlZmF1bHQgdmFsdWUuXG4gICAgICogLSBEaXNhYmxlZDogVGhlIGxvZ29uIG9mIHRoZSB1c2VyIGlzIGRpc2FibGVkLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0dXM6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NVc2VyUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NVc2VyLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJVc2VySWQgPSB0aGlzLmdldEF0dCgnVXNlcklkJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmRpcmVjdG9yeUlkID0gcHJvcHMuZGlyZWN0b3J5SWQ7XG4gICAgICAgIHRoaXMudXNlck5hbWUgPSBwcm9wcy51c2VyTmFtZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IHByb3BzLmRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmRpc3BsYXlOYW1lID0gcHJvcHMuZGlzcGxheU5hbWU7XG4gICAgICAgIHRoaXMuZW1haWwgPSBwcm9wcy5lbWFpbDtcbiAgICAgICAgdGhpcy5maXJzdE5hbWUgPSBwcm9wcy5maXJzdE5hbWU7XG4gICAgICAgIHRoaXMubGFzdE5hbWUgPSBwcm9wcy5sYXN0TmFtZTtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBwcm9wcy5zdGF0dXM7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGlyZWN0b3J5SWQ6IHRoaXMuZGlyZWN0b3J5SWQsXG4gICAgICAgICAgICB1c2VyTmFtZTogdGhpcy51c2VyTmFtZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgZGlzcGxheU5hbWU6IHRoaXMuZGlzcGxheU5hbWUsXG4gICAgICAgICAgICBlbWFpbDogdGhpcy5lbWFpbCxcbiAgICAgICAgICAgIGZpcnN0TmFtZTogdGhpcy5maXJzdE5hbWUsXG4gICAgICAgICAgICBsYXN0TmFtZTogdGhpcy5sYXN0TmFtZSxcbiAgICAgICAgICAgIHN0YXR1czogdGhpcy5zdGF0dXMsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc1VzZXJQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NVc2VyUHJvdmlzaW9uYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWNsb3Vkc3NvLXVzZXJwcm92aXNpb25cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NVc2VyUHJvdmlzaW9uUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlbGV0aW9uU3RyYXRlZ3k6IERlbGV0ZSBwb2xpY3kuIFRoZSB0cmVhdG1lbnQgc3RyYXRlZ3kgZm9yIHRoZSBzeW5jaHJvbml6ZWQgUkFNIHVzZXJzIHdoZW4gdGhlIFJBTSB1c2VyIHN5bmNocm9uaXphdGlvbiBpcyByZW1vdmVkLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSBEZWxldGU6IERlbGV0ZSBXaGVuIHRoZSBSQU0gdXNlciBzeW5jaHJvbml6YXRpb24gaXMgcmVtb3ZlZCwgdGhlIFJBTSB1c2VycyB0aGF0IGhhdmUgYmVlbiBzeW5jaHJvbml6ZWQgdG8gdGhlIFJBTSBmcm9tIHRoZSBjbG91ZCBTU08gYXJlIGRlbGV0ZWQuXG4gICAgICogLSBLZWVwOiBXaGVuIHRoZSBSQU0gdXNlciBzeW5jaHJvbml6YXRpb24gaXMgcmVtb3ZlZCwgdGhlIFJBTSB1c2VycyB0aGF0IGhhdmUgYmVlbiBzeW5jaHJvbml6ZWQgdG8gdGhlIFJBTSBmcm9tIHRoZSBjbG91ZCBTU08gYXJlIHJldGFpbmVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlbGV0aW9uU3RyYXRlZ3k6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkaXJlY3RvcnlJZDogVGhlIElEIG9mIHRoZSBkaXJlY3RvcnkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGlyZWN0b3J5SWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkdXBsaWNhdGlvblN0cmF0ZWd5OiBDb25mbGljdCBwb2xpY3kuIFdoZW4gdGhlIGNsb3VkIFNTTyB1c2VyIGlzIHN5bmNocm9uaXplZCB0byB0aGUgUkFNLCB0aGUgcHJvY2Vzc2luZyBzdHJhdGVneSBpZiB0aGVyZSBpcyBhIHVzZXIgd2l0aCB0aGUgc2FtZSBuYW1lIGluIHRoZSBSQU0uIFZhbGlkIHZhbHVlczpcbiAgICAgKiAtIEtlZXBCb3RoOiBLZWVwIGJvdGggb2YgdGhlbS4gV2hlbiB0aGUgY2xvdWQgU1NPIHVzZXIgaXMgc3luY2hyb25pemVkIHRvIFJBTSwgaWYgdGhlIFJBTSBhbHJlYWR5IGhhcyBhIHVzZXIgd2l0aCB0aGUgc2FtZSBuYW1lLCBpdCB3aWxsIHRyeSB0byBjcmVhdGUgYSBSQU0gdXNlciB3aXRoIHRoZSB1c2VyIG5hbWUgYWZ0ZXIgYWRkaW5nIHRoZSBzdWZmaXggX3NzbyB0byB0aGUgdXNlciBuYW1lIG9mIHRoZSBjbG91ZCBTU08gdXNlci5cbiAgICAgKiAtIFRha2VPdmVyOiBUYWtlIG92ZXIuIFdoZW4gdGhlIGNsb3VkIFNTTyB1c2VyIGlzIHN5bmNocm9uaXplZCB0byB0aGUgUkFNLCBpZiB0aGUgUkFNIGFscmVhZHkgaGFzIGEgdXNlciB3aXRoIHRoZSBzYW1lIG5hbWUsIHRoZSBleGlzdGluZyBSQU0gdXNlciBpcyBkaXJlY3RseSByZXBsYWNlZCBieSB0aGUgY2xvdWQgU1NPIHN5bmNocm9uaXphdGlvbiB1c2VyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGR1cGxpY2F0aW9uU3RyYXRlZ3k6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwcmluY2lwYWxJZDogVGhlIElEIG9mIHRoZSBwcmluY2lwYWwuIFZhbGlkIHZhbHVlczpcbiAgICAgKiAtIFdoZW4gdGhlIFByaW5jaXBhbFR5cGUgdmFsdWUgaXMgR3JvdXAsIHRoZSB2YWx1ZSBpcyB0aGUgY2xvdWQgU1NPIHVzZXIgZ3JvdXAgSUQgKGctKioqKioqKiopLlxuICAgICAqIC0gV2hlbiBQcmluY2lwYWxUeXBlIHRha2VzIHRoZSB2YWx1ZSBVc2VyLCB0aGlzIHZhbHVlIGlzIHRoZSBjbG91ZCBTU08gdXNlciBJRCAodS0qKioqKioqKikuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcHJpbmNpcGFsSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwcmluY2lwYWxUeXBlOiBUaGUgdHlwZSBvZiB0aGUgcHJpbmNpcGFsLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSBVc2VyOiBUaGUgcHJpbmNpcGFsIGlzIGEgY2xvdWQgU1NPIHVzZXIuXG4gICAgICogLSBHcm91cDogVGhlIHByaW5jaXBhbCBpcyBhIGNsb3VkIFNTTyBncm91cC5cbiAgICAgKi9cbiAgICByZWFkb25seSBwcmluY2lwYWxUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGFyZ2V0SWQ6IFRhcmdldCBJRCBmb3IgUkFNIHVzZXIgc3luY2hyb25pemF0aW9uLiBDdXJyZW50bHksIGl0IGlzIHRoZSBSRCBhY2NvdW50IElELlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRhcmdldElkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGFyZ2V0VHlwZTogVGFyZ2V0IHR5cGUgZm9yIFJBTSB1c2VyIHN5bmNocm9uaXphdGlvbi4gQ3VycmVudGx5LCBpdCBpcyBSRC1BY2NvdW50LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRhcmdldFR5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSB1c2VyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc1VzZXJQcm92aXNpb25Qcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zVXNlclByb3Zpc2lvblByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1VzZXJQcm92aXNpb25Qcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Rlc2NyaXB0aW9uJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkaXJlY3RvcnlJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5kaXJlY3RvcnlJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGlyZWN0b3J5SWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZGlyZWN0b3J5SWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ByaW5jaXBhbElkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnByaW5jaXBhbElkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwcmluY2lwYWxJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wcmluY2lwYWxJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGFyZ2V0VHlwZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy50YXJnZXRUeXBlKSk7XG4gICAgaWYocHJvcGVydGllcy50YXJnZXRUeXBlICYmICh0eXBlb2YgcHJvcGVydGllcy50YXJnZXRUeXBlKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0YXJnZXRUeXBlJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMudGFyZ2V0VHlwZSxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJSRC1BY2NvdW50XCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGFyZ2V0VHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy50YXJnZXRUeXBlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkdXBsaWNhdGlvblN0cmF0ZWd5Jywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmR1cGxpY2F0aW9uU3RyYXRlZ3kpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmR1cGxpY2F0aW9uU3RyYXRlZ3kgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmR1cGxpY2F0aW9uU3RyYXRlZ3kpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2R1cGxpY2F0aW9uU3RyYXRlZ3knLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5kdXBsaWNhdGlvblN0cmF0ZWd5LFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIktlZXBCb3RoXCIsXCJUYWtlT3ZlclwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2R1cGxpY2F0aW9uU3RyYXRlZ3knLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZHVwbGljYXRpb25TdHJhdGVneSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVsZXRpb25TdHJhdGVneScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5kZWxldGlvblN0cmF0ZWd5KSk7XG4gICAgaWYocHJvcGVydGllcy5kZWxldGlvblN0cmF0ZWd5ICYmICh0eXBlb2YgcHJvcGVydGllcy5kZWxldGlvblN0cmF0ZWd5KSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZWxldGlvblN0cmF0ZWd5Jywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuZGVsZXRpb25TdHJhdGVneSxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJEZWxldGVcIixcIktlZXBcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZWxldGlvblN0cmF0ZWd5Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmRlbGV0aW9uU3RyYXRlZ3kpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ByaW5jaXBhbFR5cGUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucHJpbmNpcGFsVHlwZSkpO1xuICAgIGlmKHByb3BlcnRpZXMucHJpbmNpcGFsVHlwZSAmJiAodHlwZW9mIHByb3BlcnRpZXMucHJpbmNpcGFsVHlwZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncHJpbmNpcGFsVHlwZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnByaW5jaXBhbFR5cGUsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiVXNlclwiLFwiR3JvdXBcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwcmluY2lwYWxUeXBlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnByaW5jaXBhbFR5cGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RhcmdldElkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnRhcmdldElkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0YXJnZXRJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy50YXJnZXRJZCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NVc2VyUHJvdmlzaW9uUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNsb3VkU1NPOjpVc2VyUHJvdmlzaW9uYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NVc2VyUHJvdmlzaW9uUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNsb3VkU1NPOjpVc2VyUHJvdmlzaW9uYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1VzZXJQcm92aXNpb25Qcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc1VzZXJQcm92aXNpb25Qcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBEZWxldGlvblN0cmF0ZWd5OiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRlbGV0aW9uU3RyYXRlZ3kpLFxuICAgICAgRGlyZWN0b3J5SWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGlyZWN0b3J5SWQpLFxuICAgICAgRHVwbGljYXRpb25TdHJhdGVneTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kdXBsaWNhdGlvblN0cmF0ZWd5KSxcbiAgICAgIFByaW5jaXBhbElkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnByaW5jaXBhbElkKSxcbiAgICAgIFByaW5jaXBhbFR5cGU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucHJpbmNpcGFsVHlwZSksXG4gICAgICBUYXJnZXRJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy50YXJnZXRJZCksXG4gICAgICBUYXJnZXRUeXBlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnRhcmdldFR5cGUpLFxuICAgICAgRGVzY3JpcHRpb246IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGVzY3JpcHRpb24pLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OkNsb3VkU1NPOjpVc2VyUHJvdmlzaW9uYCwgd2hpY2ggaXMgdXNlZCB0byBjcmVhdGUgYSBSZXNvdXJjZSBBY2Nlc3MgTWFuYWdlbWVudCAoUkFNKSB1c2VyIHByb3Zpc2lvbmluZy5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgZG9lcyBub3QgY29udGFpbiBhZGRpdGlvbmFsIGZ1bmN0aW9ucywgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgVXNlclByb3Zpc2lvbmAgY2xhc3MgaW5zdGVhZCBvZiB0aGlzIGNsYXNzIGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tY2xvdWRzc28tdXNlcnByb3Zpc2lvblxuICovXG5leHBvcnQgY2xhc3MgUm9zVXNlclByb3Zpc2lvbiBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6Q2xvdWRTU086OlVzZXJQcm92aXNpb25cIjtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgVXNlclByb3Zpc2lvbklkOiBUaGUgSUQgb2YgdGhlIHVzZXIgcHJvdmlzaW9uaW5nLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVXNlclByb3Zpc2lvbklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZWxldGlvblN0cmF0ZWd5OiBEZWxldGUgcG9saWN5LiBUaGUgdHJlYXRtZW50IHN0cmF0ZWd5IGZvciB0aGUgc3luY2hyb25pemVkIFJBTSB1c2VycyB3aGVuIHRoZSBSQU0gdXNlciBzeW5jaHJvbml6YXRpb24gaXMgcmVtb3ZlZC4gVmFsaWQgdmFsdWVzOlxuICAgICAqIC0gRGVsZXRlOiBEZWxldGUgV2hlbiB0aGUgUkFNIHVzZXIgc3luY2hyb25pemF0aW9uIGlzIHJlbW92ZWQsIHRoZSBSQU0gdXNlcnMgdGhhdCBoYXZlIGJlZW4gc3luY2hyb25pemVkIHRvIHRoZSBSQU0gZnJvbSB0aGUgY2xvdWQgU1NPIGFyZSBkZWxldGVkLlxuICAgICAqIC0gS2VlcDogV2hlbiB0aGUgUkFNIHVzZXIgc3luY2hyb25pemF0aW9uIGlzIHJlbW92ZWQsIHRoZSBSQU0gdXNlcnMgdGhhdCBoYXZlIGJlZW4gc3luY2hyb25pemVkIHRvIHRoZSBSQU0gZnJvbSB0aGUgY2xvdWQgU1NPIGFyZSByZXRhaW5lZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGVsZXRpb25TdHJhdGVneTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRpcmVjdG9yeUlkOiBUaGUgSUQgb2YgdGhlIGRpcmVjdG9yeS5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGlyZWN0b3J5SWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkdXBsaWNhdGlvblN0cmF0ZWd5OiBDb25mbGljdCBwb2xpY3kuIFdoZW4gdGhlIGNsb3VkIFNTTyB1c2VyIGlzIHN5bmNocm9uaXplZCB0byB0aGUgUkFNLCB0aGUgcHJvY2Vzc2luZyBzdHJhdGVneSBpZiB0aGVyZSBpcyBhIHVzZXIgd2l0aCB0aGUgc2FtZSBuYW1lIGluIHRoZSBSQU0uIFZhbGlkIHZhbHVlczpcbiAgICAgKiAtIEtlZXBCb3RoOiBLZWVwIGJvdGggb2YgdGhlbS4gV2hlbiB0aGUgY2xvdWQgU1NPIHVzZXIgaXMgc3luY2hyb25pemVkIHRvIFJBTSwgaWYgdGhlIFJBTSBhbHJlYWR5IGhhcyBhIHVzZXIgd2l0aCB0aGUgc2FtZSBuYW1lLCBpdCB3aWxsIHRyeSB0byBjcmVhdGUgYSBSQU0gdXNlciB3aXRoIHRoZSB1c2VyIG5hbWUgYWZ0ZXIgYWRkaW5nIHRoZSBzdWZmaXggX3NzbyB0byB0aGUgdXNlciBuYW1lIG9mIHRoZSBjbG91ZCBTU08gdXNlci5cbiAgICAgKiAtIFRha2VPdmVyOiBUYWtlIG92ZXIuIFdoZW4gdGhlIGNsb3VkIFNTTyB1c2VyIGlzIHN5bmNocm9uaXplZCB0byB0aGUgUkFNLCBpZiB0aGUgUkFNIGFscmVhZHkgaGFzIGEgdXNlciB3aXRoIHRoZSBzYW1lIG5hbWUsIHRoZSBleGlzdGluZyBSQU0gdXNlciBpcyBkaXJlY3RseSByZXBsYWNlZCBieSB0aGUgY2xvdWQgU1NPIHN5bmNocm9uaXphdGlvbiB1c2VyLlxuICAgICAqL1xuICAgIHB1YmxpYyBkdXBsaWNhdGlvblN0cmF0ZWd5OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcHJpbmNpcGFsSWQ6IFRoZSBJRCBvZiB0aGUgcHJpbmNpcGFsLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSBXaGVuIHRoZSBQcmluY2lwYWxUeXBlIHZhbHVlIGlzIEdyb3VwLCB0aGUgdmFsdWUgaXMgdGhlIGNsb3VkIFNTTyB1c2VyIGdyb3VwIElEIChnLSoqKioqKioqKS5cbiAgICAgKiAtIFdoZW4gUHJpbmNpcGFsVHlwZSB0YWtlcyB0aGUgdmFsdWUgVXNlciwgdGhpcyB2YWx1ZSBpcyB0aGUgY2xvdWQgU1NPIHVzZXIgSUQgKHUtKioqKioqKiopLlxuICAgICAqL1xuICAgIHB1YmxpYyBwcmluY2lwYWxJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHByaW5jaXBhbFR5cGU6IFRoZSB0eXBlIG9mIHRoZSBwcmluY2lwYWwuIFZhbGlkIHZhbHVlczpcbiAgICAgKiAtIFVzZXI6IFRoZSBwcmluY2lwYWwgaXMgYSBjbG91ZCBTU08gdXNlci5cbiAgICAgKiAtIEdyb3VwOiBUaGUgcHJpbmNpcGFsIGlzIGEgY2xvdWQgU1NPIGdyb3VwLlxuICAgICAqL1xuICAgIHB1YmxpYyBwcmluY2lwYWxUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGFyZ2V0SWQ6IFRhcmdldCBJRCBmb3IgUkFNIHVzZXIgc3luY2hyb25pemF0aW9uLiBDdXJyZW50bHksIGl0IGlzIHRoZSBSRCBhY2NvdW50IElELlxuICAgICAqL1xuICAgIHB1YmxpYyB0YXJnZXRJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRhcmdldFR5cGU6IFRhcmdldCB0eXBlIGZvciBSQU0gdXNlciBzeW5jaHJvbml6YXRpb24uIEN1cnJlbnRseSwgaXQgaXMgUkQtQWNjb3VudC5cbiAgICAgKi9cbiAgICBwdWJsaWMgdGFyZ2V0VHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlc2NyaXB0aW9uOiBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIHVzZXIuXG4gICAgICovXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zVXNlclByb3Zpc2lvblByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zVXNlclByb3Zpc2lvbi5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyVXNlclByb3Zpc2lvbklkID0gdGhpcy5nZXRBdHQoJ1VzZXJQcm92aXNpb25JZCcpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5kZWxldGlvblN0cmF0ZWd5ID0gcHJvcHMuZGVsZXRpb25TdHJhdGVneTtcbiAgICAgICAgdGhpcy5kaXJlY3RvcnlJZCA9IHByb3BzLmRpcmVjdG9yeUlkO1xuICAgICAgICB0aGlzLmR1cGxpY2F0aW9uU3RyYXRlZ3kgPSBwcm9wcy5kdXBsaWNhdGlvblN0cmF0ZWd5O1xuICAgICAgICB0aGlzLnByaW5jaXBhbElkID0gcHJvcHMucHJpbmNpcGFsSWQ7XG4gICAgICAgIHRoaXMucHJpbmNpcGFsVHlwZSA9IHByb3BzLnByaW5jaXBhbFR5cGU7XG4gICAgICAgIHRoaXMudGFyZ2V0SWQgPSBwcm9wcy50YXJnZXRJZDtcbiAgICAgICAgdGhpcy50YXJnZXRUeXBlID0gcHJvcHMudGFyZ2V0VHlwZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IHByb3BzLmRlc2NyaXB0aW9uO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRlbGV0aW9uU3RyYXRlZ3k6IHRoaXMuZGVsZXRpb25TdHJhdGVneSxcbiAgICAgICAgICAgIGRpcmVjdG9yeUlkOiB0aGlzLmRpcmVjdG9yeUlkLFxuICAgICAgICAgICAgZHVwbGljYXRpb25TdHJhdGVneTogdGhpcy5kdXBsaWNhdGlvblN0cmF0ZWd5LFxuICAgICAgICAgICAgcHJpbmNpcGFsSWQ6IHRoaXMucHJpbmNpcGFsSWQsXG4gICAgICAgICAgICBwcmluY2lwYWxUeXBlOiB0aGlzLnByaW5jaXBhbFR5cGUsXG4gICAgICAgICAgICB0YXJnZXRJZDogdGhpcy50YXJnZXRJZCxcbiAgICAgICAgICAgIHRhcmdldFR5cGU6IHRoaXMudGFyZ2V0VHlwZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NVc2VyUHJvdmlzaW9uUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUm9zVXNlclRvR3JvdXBBZGRpdGlvbmAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1jbG91ZHNzby11c2VydG9ncm91cGFkZGl0aW9uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zVXNlclRvR3JvdXBBZGRpdGlvblByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkaXJlY3RvcnlJZDogVGhlIElEIG9mIHRoZSBkaXJlY3RvcnkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGlyZWN0b3J5SWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBncm91cElkOiBUaGUgSUQgb2YgdGhlIGdyb3VwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGdyb3VwSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB1c2VySWQ6IFRoZSBJRCBvZiB0aGUgdXNlci5cbiAgICAgKi9cbiAgICByZWFkb25seSB1c2VySWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NVc2VyVG9Hcm91cEFkZGl0aW9uUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1VzZXJUb0dyb3VwQWRkaXRpb25Qcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NVc2VyVG9Hcm91cEFkZGl0aW9uUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkaXJlY3RvcnlJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5kaXJlY3RvcnlJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGlyZWN0b3J5SWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZGlyZWN0b3J5SWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3VzZXJJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy51c2VySWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3VzZXJJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy51c2VySWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2dyb3VwSWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuZ3JvdXBJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZ3JvdXBJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5ncm91cElkKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc1VzZXJUb0dyb3VwQWRkaXRpb25Qcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q2xvdWRTU086OlVzZXJUb0dyb3VwQWRkaXRpb25gIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1VzZXJUb0dyb3VwQWRkaXRpb25Qcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q2xvdWRTU086OlVzZXJUb0dyb3VwQWRkaXRpb25gIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zVXNlclRvR3JvdXBBZGRpdGlvblByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zVXNlclRvR3JvdXBBZGRpdGlvblByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIERpcmVjdG9yeUlkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRpcmVjdG9yeUlkKSxcbiAgICAgIEdyb3VwSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZ3JvdXBJZCksXG4gICAgICBVc2VySWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudXNlcklkKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBiYXNlIGVuY2Fwc3VsYXRpb24gYXJvdW5kIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpDbG91ZFNTTzo6VXNlclRvR3JvdXBBZGRpdGlvbmAsIHdoaWNoIGlzIHVzZWQgdG8gYWRkIGEgdXNlciB0byBhIGdyb3VwLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBVc2VyVG9Hcm91cEFkZGl0aW9uYCBjbGFzcyBpbnN0ZWFkIG9mIHRoaXMgY2xhc3MgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1jbG91ZHNzby11c2VydG9ncm91cGFkZGl0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NVc2VyVG9Hcm91cEFkZGl0aW9uIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpDbG91ZFNTTzo6VXNlclRvR3JvdXBBZGRpdGlvblwiO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGlyZWN0b3J5SWQ6IFRoZSBJRCBvZiB0aGUgZGlyZWN0b3J5LlxuICAgICAqL1xuICAgIHB1YmxpYyBkaXJlY3RvcnlJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGdyb3VwSWQ6IFRoZSBJRCBvZiB0aGUgZ3JvdXAuXG4gICAgICovXG4gICAgcHVibGljIGdyb3VwSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB1c2VySWQ6IFRoZSBJRCBvZiB0aGUgdXNlci5cbiAgICAgKi9cbiAgICBwdWJsaWMgdXNlcklkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zVXNlclRvR3JvdXBBZGRpdGlvblByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zVXNlclRvR3JvdXBBZGRpdGlvbi5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuZGlyZWN0b3J5SWQgPSBwcm9wcy5kaXJlY3RvcnlJZDtcbiAgICAgICAgdGhpcy5ncm91cElkID0gcHJvcHMuZ3JvdXBJZDtcbiAgICAgICAgdGhpcy51c2VySWQgPSBwcm9wcy51c2VySWQ7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGlyZWN0b3J5SWQ6IHRoaXMuZGlyZWN0b3J5SWQsXG4gICAgICAgICAgICBncm91cElkOiB0aGlzLmdyb3VwSWQsXG4gICAgICAgICAgICB1c2VySWQ6IHRoaXMudXNlcklkLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NVc2VyVG9Hcm91cEFkZGl0aW9uUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG4iXX0=