"use strict";
// Generated from the AliCloud ROS Resource Specification
Object.defineProperty(exports, "__esModule", { value: true });
exports.RosRestoreJob = exports.RosDbVault = exports.RosDbPlan = exports.RosDbAgent = exports.RosBackupClients = void 0;
const ros = require("@alicloud/ros-cdk-core");
/**
 * Determine whether the given properties match those of a `RosBackupClientsProps`
 *
 * @param properties - the TypeScript properties of a `RosBackupClientsProps`
 *
 * @returns the result of the validation.
 */
function RosBackupClientsPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceIds', ros.requiredValidator)(properties.instanceIds));
    if (properties.instanceIds && (Array.isArray(properties.instanceIds) || (typeof properties.instanceIds) === 'string')) {
        errors.collect(ros.propertyValidator('instanceIds', ros.validateLength)({
            data: properties.instanceIds.length,
            min: 1,
            max: 20,
        }));
    }
    errors.collect(ros.propertyValidator('instanceIds', ros.listValidator(ros.validateString))(properties.instanceIds));
    if (properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
        }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosBackupClients_TagsPropertyValidator))(properties.tags));
    return errors.wrap('supplied properties not correct for "RosBackupClientsProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::HBR::BackupClients` resource
 *
 * @param properties - the TypeScript properties of a `RosBackupClientsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::HBR::BackupClients` resource.
 */
// @ts-ignore TS6133
function rosBackupClientsPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosBackupClientsPropsValidator(properties).assertSuccess();
    }
    return {
        InstanceIds: ros.listMapper(ros.stringToRosTemplate)(properties.instanceIds),
        Tags: ros.listMapper(rosBackupClientsTagsPropertyToRosTemplate)(properties.tags),
    };
}
/**
 * A ROS template type:  `ALIYUN::HBR::BackupClients`
 */
class RosBackupClients extends ros.RosResource {
    /**
     * Create a new `ALIYUN::HBR::BackupClients`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosBackupClients.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrClientIds = this.getAtt('ClientIds');
        this.attrInstanceIds = this.getAtt('InstanceIds');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceIds = props.instanceIds;
        this.tags = props.tags;
    }
    get rosProperties() {
        return {
            instanceIds: this.instanceIds,
            tags: this.tags,
        };
    }
    renderProperties(props) {
        return rosBackupClientsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosBackupClients = RosBackupClients;
/**
 * The resource type name for this resource class.
 */
RosBackupClients.ROS_RESOURCE_TYPE_NAME = "ALIYUN::HBR::BackupClients";
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosBackupClients_TagsPropertyValidator(properties) {
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
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::HBR::BackupClients.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::HBR::BackupClients.Tags` resource.
 */
// @ts-ignore TS6133
function rosBackupClientsTagsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosBackupClients_TagsPropertyValidator(properties).assertSuccess();
    return {
        Value: ros.stringToRosTemplate(properties.value),
        Key: ros.stringToRosTemplate(properties.key),
    };
}
/**
 * Determine whether the given properties match those of a `RosDbAgentProps`
 *
 * @param properties - the TypeScript properties of a `RosDbAgentProps`
 *
 * @returns the result of the validation.
 */
function RosDbAgentPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceInfo', ros.requiredValidator)(properties.instanceInfo));
    if (properties.instanceInfo && (Array.isArray(properties.instanceInfo) || (typeof properties.instanceInfo) === 'string')) {
        errors.collect(ros.propertyValidator('instanceInfo', ros.validateLength)({
            data: properties.instanceInfo.length,
            min: 1,
            max: 100,
        }));
    }
    errors.collect(ros.propertyValidator('instanceInfo', ros.listValidator(RosDbAgent_InstanceInfoPropertyValidator))(properties.instanceInfo));
    return errors.wrap('supplied properties not correct for "RosDbAgentProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::HBR::DbAgent` resource
 *
 * @param properties - the TypeScript properties of a `RosDbAgentProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::HBR::DbAgent` resource.
 */
// @ts-ignore TS6133
function rosDbAgentPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosDbAgentPropsValidator(properties).assertSuccess();
    }
    return {
        InstanceInfo: ros.listMapper(rosDbAgentInstanceInfoPropertyToRosTemplate)(properties.instanceInfo),
    };
}
/**
 * A ROS template type:  `ALIYUN::HBR::DbAgent`
 */
class RosDbAgent extends ros.RosResource {
    /**
     * Create a new `ALIYUN::HBR::DbAgent`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosDbAgent.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInstanceIds = this.getAtt('InstanceIds');
        this.attrTaskId = this.getAtt('TaskId');
        this.attrUniBackupInstanceDetails = this.getAtt('UniBackupInstanceDetails');
        this.attrUniBackupInstances = this.getAtt('UniBackupInstances');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceInfo = props.instanceInfo;
    }
    get rosProperties() {
        return {
            instanceInfo: this.instanceInfo,
        };
    }
    renderProperties(props) {
        return rosDbAgentPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosDbAgent = RosDbAgent;
/**
 * The resource type name for this resource class.
 */
RosDbAgent.ROS_RESOURCE_TYPE_NAME = "ALIYUN::HBR::DbAgent";
/**
 * Determine whether the given properties match those of a `InstanceInfoProperty`
 *
 * @param properties - the TypeScript properties of a `InstanceInfoProperty`
 *
 * @returns the result of the validation.
 */
function RosDbAgent_InstanceInfoPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('userName', ros.validateString)(properties.userName));
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('sourceType', ros.requiredValidator)(properties.sourceType));
    if (properties.sourceType && (typeof properties.sourceType) !== 'object') {
        errors.collect(ros.propertyValidator('sourceType', ros.validateAllowedValues)({
            data: properties.sourceType,
            allowedValues: ["MYSQL", "ORACLE", "MSSQL"],
        }));
    }
    errors.collect(ros.propertyValidator('sourceType', ros.validateString)(properties.sourceType));
    errors.collect(ros.propertyValidator('password', ros.validateString)(properties.password));
    if (properties.authenticationType && (typeof properties.authenticationType) !== 'object') {
        errors.collect(ros.propertyValidator('authenticationType', ros.validateAllowedValues)({
            data: properties.authenticationType,
            allowedValues: ["INSTANCE", "ACCESS_KEY"],
        }));
    }
    errors.collect(ros.propertyValidator('authenticationType', ros.validateString)(properties.authenticationType));
    return errors.wrap('supplied properties not correct for "InstanceInfoProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::HBR::DbAgent.InstanceInfo` resource
 *
 * @param properties - the TypeScript properties of a `InstanceInfoProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::HBR::DbAgent.InstanceInfo` resource.
 */
// @ts-ignore TS6133
function rosDbAgentInstanceInfoPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosDbAgent_InstanceInfoPropertyValidator(properties).assertSuccess();
    return {
        UserName: ros.stringToRosTemplate(properties.userName),
        InstanceId: ros.stringToRosTemplate(properties.instanceId),
        SourceType: ros.stringToRosTemplate(properties.sourceType),
        Password: ros.stringToRosTemplate(properties.password),
        AuthenticationType: ros.stringToRosTemplate(properties.authenticationType),
    };
}
/**
 * Determine whether the given properties match those of a `RosDbPlanProps`
 *
 * @param properties - the TypeScript properties of a `RosDbPlanProps`
 *
 * @returns the result of the validation.
 */
function RosDbPlanPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('options', ros.validateString)(properties.options));
    errors.collect(ros.propertyValidator('instanceUuid', ros.validateString)(properties.instanceUuid));
    errors.collect(ros.propertyValidator('sourceType', ros.requiredValidator)(properties.sourceType));
    errors.collect(ros.propertyValidator('sourceType', ros.validateString)(properties.sourceType));
    errors.collect(ros.propertyValidator('vaultId', ros.requiredValidator)(properties.vaultId));
    errors.collect(ros.propertyValidator('vaultId', ros.validateString)(properties.vaultId));
    errors.collect(ros.propertyValidator('source', RosDbPlan_SourcePropertyValidator)(properties.source));
    errors.collect(ros.propertyValidator('continuousPlan', ros.validateString)(properties.continuousPlan));
    errors.collect(ros.propertyValidator('incPlan', ros.validateString)(properties.incPlan));
    errors.collect(ros.propertyValidator('maxRetrySeconds', ros.validateNumber)(properties.maxRetrySeconds));
    errors.collect(ros.propertyValidator('hostUuid', ros.requiredValidator)(properties.hostUuid));
    errors.collect(ros.propertyValidator('hostUuid', ros.validateString)(properties.hostUuid));
    errors.collect(ros.propertyValidator('cumulativePlan', ros.validateString)(properties.cumulativePlan));
    errors.collect(ros.propertyValidator('fullPlan', ros.validateString)(properties.fullPlan));
    errors.collect(ros.propertyValidator('logPlan', ros.validateString)(properties.logPlan));
    errors.collect(ros.propertyValidator('maxRateLimit', ros.validateNumber)(properties.maxRateLimit));
    errors.collect(ros.propertyValidator('dbPlanName', ros.requiredValidator)(properties.dbPlanName));
    errors.collect(ros.propertyValidator('dbPlanName', ros.validateString)(properties.dbPlanName));
    return errors.wrap('supplied properties not correct for "RosDbPlanProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::HBR::DbPlan` resource
 *
 * @param properties - the TypeScript properties of a `RosDbPlanProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::HBR::DbPlan` resource.
 */
// @ts-ignore TS6133
function rosDbPlanPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosDbPlanPropsValidator(properties).assertSuccess();
    }
    return {
        DbPlanName: ros.stringToRosTemplate(properties.dbPlanName),
        HostUuid: ros.stringToRosTemplate(properties.hostUuid),
        SourceType: ros.stringToRosTemplate(properties.sourceType),
        VaultId: ros.stringToRosTemplate(properties.vaultId),
        ContinuousPlan: ros.stringToRosTemplate(properties.continuousPlan),
        CumulativePlan: ros.stringToRosTemplate(properties.cumulativePlan),
        FullPlan: ros.stringToRosTemplate(properties.fullPlan),
        IncPlan: ros.stringToRosTemplate(properties.incPlan),
        InstanceUuid: ros.stringToRosTemplate(properties.instanceUuid),
        LogPlan: ros.stringToRosTemplate(properties.logPlan),
        MaxRateLimit: ros.numberToRosTemplate(properties.maxRateLimit),
        MaxRetrySeconds: ros.numberToRosTemplate(properties.maxRetrySeconds),
        Options: ros.stringToRosTemplate(properties.options),
        Source: rosDbPlanSourcePropertyToRosTemplate(properties.source),
    };
}
/**
 * A ROS template type:  `ALIYUN::HBR::DbPlan`
 */
class RosDbPlan extends ros.RosResource {
    /**
     * Create a new `ALIYUN::HBR::DbPlan`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosDbPlan.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrContinuousPlan = this.getAtt('ContinuousPlan');
        this.attrContinuousUuid = this.getAtt('ContinuousUuid');
        this.attrCumulativePlan = this.getAtt('CumulativePlan');
        this.attrCumulativeUuid = this.getAtt('CumulativeUuid');
        this.attrDbPlanName = this.getAtt('DbPlanName');
        this.attrFullPlan = this.getAtt('FullPlan');
        this.attrFullUuid = this.getAtt('FullUuid');
        this.attrHostUuid = this.getAtt('HostUuid');
        this.attrIncPlan = this.getAtt('IncPlan');
        this.attrIncUuid = this.getAtt('IncUuid');
        this.attrInstanceUuid = this.getAtt('InstanceUuid');
        this.attrLogPlan = this.getAtt('LogPlan');
        this.attrLogUuid = this.getAtt('LogUuid');
        this.attrMaxRateLimit = this.getAtt('MaxRateLimit');
        this.attrMaxRetrySeconds = this.getAtt('MaxRetrySeconds');
        this.attrOptions = this.getAtt('Options');
        this.attrPlanId = this.getAtt('PlanId');
        this.attrSourceType = this.getAtt('SourceType');
        this.attrTarget = this.getAtt('Target');
        this.attrVaultId = this.getAtt('VaultId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dbPlanName = props.dbPlanName;
        this.hostUuid = props.hostUuid;
        this.sourceType = props.sourceType;
        this.vaultId = props.vaultId;
        this.continuousPlan = props.continuousPlan;
        this.cumulativePlan = props.cumulativePlan;
        this.fullPlan = props.fullPlan;
        this.incPlan = props.incPlan;
        this.instanceUuid = props.instanceUuid;
        this.logPlan = props.logPlan;
        this.maxRateLimit = props.maxRateLimit;
        this.maxRetrySeconds = props.maxRetrySeconds;
        this.options = props.options;
        this.source = props.source;
    }
    get rosProperties() {
        return {
            dbPlanName: this.dbPlanName,
            hostUuid: this.hostUuid,
            sourceType: this.sourceType,
            vaultId: this.vaultId,
            continuousPlan: this.continuousPlan,
            cumulativePlan: this.cumulativePlan,
            fullPlan: this.fullPlan,
            incPlan: this.incPlan,
            instanceUuid: this.instanceUuid,
            logPlan: this.logPlan,
            maxRateLimit: this.maxRateLimit,
            maxRetrySeconds: this.maxRetrySeconds,
            options: this.options,
            source: this.source,
        };
    }
    renderProperties(props) {
        return rosDbPlanPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosDbPlan = RosDbPlan;
/**
 * The resource type name for this resource class.
 */
RosDbPlan.ROS_RESOURCE_TYPE_NAME = "ALIYUN::HBR::DbPlan";
/**
 * Determine whether the given properties match those of a `SourceProperty`
 *
 * @param properties - the TypeScript properties of a `SourceProperty`
 *
 * @returns the result of the validation.
 */
function RosDbPlan_SourcePropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('entries', ros.listValidator(ros.validateString))(properties.entries));
    return errors.wrap('supplied properties not correct for "SourceProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::HBR::DbPlan.Source` resource
 *
 * @param properties - the TypeScript properties of a `SourceProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::HBR::DbPlan.Source` resource.
 */
// @ts-ignore TS6133
function rosDbPlanSourcePropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosDbPlan_SourcePropertyValidator(properties).assertSuccess();
    return {
        Entries: ros.listMapper(ros.stringToRosTemplate)(properties.entries),
    };
}
/**
 * Determine whether the given properties match those of a `RosDbVaultProps`
 *
 * @param properties - the TypeScript properties of a `RosDbVaultProps`
 *
 * @returns the result of the validation.
 */
function RosDbVaultPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('vaultName', ros.requiredValidator)(properties.vaultName));
    errors.collect(ros.propertyValidator('vaultName', ros.validateString)(properties.vaultName));
    errors.collect(ros.propertyValidator('retentionDays', ros.requiredValidator)(properties.retentionDays));
    errors.collect(ros.propertyValidator('retentionDays', ros.validateNumber)(properties.retentionDays));
    errors.collect(ros.propertyValidator('vaultRegionId', ros.requiredValidator)(properties.vaultRegionId));
    errors.collect(ros.propertyValidator('vaultRegionId', ros.validateString)(properties.vaultRegionId));
    if (properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
        }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosDbVault_TagsPropertyValidator))(properties.tags));
    return errors.wrap('supplied properties not correct for "RosDbVaultProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::HBR::DbVault` resource
 *
 * @param properties - the TypeScript properties of a `RosDbVaultProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::HBR::DbVault` resource.
 */
// @ts-ignore TS6133
function rosDbVaultPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosDbVaultPropsValidator(properties).assertSuccess();
    }
    return {
        RetentionDays: ros.numberToRosTemplate(properties.retentionDays),
        VaultName: ros.stringToRosTemplate(properties.vaultName),
        VaultRegionId: ros.stringToRosTemplate(properties.vaultRegionId),
        Description: ros.stringToRosTemplate(properties.description),
        Tags: ros.listMapper(rosDbVaultTagsPropertyToRosTemplate)(properties.tags),
    };
}
/**
 * A ROS template type:  `ALIYUN::HBR::DbVault`
 */
class RosDbVault extends ros.RosResource {
    /**
     * Create a new `ALIYUN::HBR::DbVault`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosDbVault.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDescription = this.getAtt('Description');
        this.attrRetentionDays = this.getAtt('RetentionDays');
        this.attrVaultId = this.getAtt('VaultId');
        this.attrVaultName = this.getAtt('VaultName');
        this.attrVaultRegionId = this.getAtt('VaultRegionId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.retentionDays = props.retentionDays;
        this.vaultName = props.vaultName;
        this.vaultRegionId = props.vaultRegionId;
        this.description = props.description;
        this.tags = props.tags;
    }
    get rosProperties() {
        return {
            retentionDays: this.retentionDays,
            vaultName: this.vaultName,
            vaultRegionId: this.vaultRegionId,
            description: this.description,
            tags: this.tags,
        };
    }
    renderProperties(props) {
        return rosDbVaultPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosDbVault = RosDbVault;
/**
 * The resource type name for this resource class.
 */
RosDbVault.ROS_RESOURCE_TYPE_NAME = "ALIYUN::HBR::DbVault";
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosDbVault_TagsPropertyValidator(properties) {
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
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::HBR::DbVault.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::HBR::DbVault.Tags` resource.
 */
// @ts-ignore TS6133
function rosDbVaultTagsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosDbVault_TagsPropertyValidator(properties).assertSuccess();
    return {
        Value: ros.stringToRosTemplate(properties.value),
        Key: ros.stringToRosTemplate(properties.key),
    };
}
/**
 * Determine whether the given properties match those of a `RosRestoreJobProps`
 *
 * @param properties - the TypeScript properties of a `RosRestoreJobProps`
 *
 * @returns the result of the validation.
 */
function RosRestoreJobPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('snapshotId', ros.requiredValidator)(properties.snapshotId));
    errors.collect(ros.propertyValidator('snapshotId', ros.validateString)(properties.snapshotId));
    errors.collect(ros.propertyValidator('targetClientId', ros.requiredValidator)(properties.targetClientId));
    errors.collect(ros.propertyValidator('targetClientId', ros.validateString)(properties.targetClientId));
    errors.collect(ros.propertyValidator('targetPath', ros.requiredValidator)(properties.targetPath));
    errors.collect(ros.propertyValidator('targetPath', ros.validateString)(properties.targetPath));
    errors.collect(ros.propertyValidator('sourceType', ros.requiredValidator)(properties.sourceType));
    if (properties.sourceType && (typeof properties.sourceType) !== 'object') {
        errors.collect(ros.propertyValidator('sourceType', ros.validateAllowedValues)({
            data: properties.sourceType,
            allowedValues: ["FILE", "ECS_FILE"],
        }));
    }
    errors.collect(ros.propertyValidator('sourceType', ros.validateString)(properties.sourceType));
    errors.collect(ros.propertyValidator('sourceClientId', ros.requiredValidator)(properties.sourceClientId));
    errors.collect(ros.propertyValidator('sourceClientId', ros.validateString)(properties.sourceClientId));
    errors.collect(ros.propertyValidator('targetInstanceId', ros.requiredValidator)(properties.targetInstanceId));
    errors.collect(ros.propertyValidator('targetInstanceId', ros.validateString)(properties.targetInstanceId));
    errors.collect(ros.propertyValidator('vaultId', ros.requiredValidator)(properties.vaultId));
    errors.collect(ros.propertyValidator('vaultId', ros.validateString)(properties.vaultId));
    errors.collect(ros.propertyValidator('sourceInstanceId', ros.requiredValidator)(properties.sourceInstanceId));
    errors.collect(ros.propertyValidator('sourceInstanceId', ros.validateString)(properties.sourceInstanceId));
    errors.collect(ros.propertyValidator('restoreType', ros.requiredValidator)(properties.restoreType));
    if (properties.restoreType && (typeof properties.restoreType) !== 'object') {
        errors.collect(ros.propertyValidator('restoreType', ros.validateAllowedValues)({
            data: properties.restoreType,
            allowedValues: ["FILE", "ECS_FILE"],
        }));
    }
    errors.collect(ros.propertyValidator('restoreType', ros.validateString)(properties.restoreType));
    return errors.wrap('supplied properties not correct for "RosRestoreJobProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::HBR::RestoreJob` resource
 *
 * @param properties - the TypeScript properties of a `RosRestoreJobProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::HBR::RestoreJob` resource.
 */
// @ts-ignore TS6133
function rosRestoreJobPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosRestoreJobPropsValidator(properties).assertSuccess();
    }
    return {
        RestoreType: ros.stringToRosTemplate(properties.restoreType),
        SnapshotId: ros.stringToRosTemplate(properties.snapshotId),
        SourceClientId: ros.stringToRosTemplate(properties.sourceClientId),
        SourceInstanceId: ros.stringToRosTemplate(properties.sourceInstanceId),
        SourceType: ros.stringToRosTemplate(properties.sourceType),
        TargetClientId: ros.stringToRosTemplate(properties.targetClientId),
        TargetInstanceId: ros.stringToRosTemplate(properties.targetInstanceId),
        TargetPath: ros.stringToRosTemplate(properties.targetPath),
        VaultId: ros.stringToRosTemplate(properties.vaultId),
    };
}
/**
 * A ROS template type:  `ALIYUN::HBR::RestoreJob`
 */
class RosRestoreJob extends ros.RosResource {
    /**
     * Create a new `ALIYUN::HBR::RestoreJob`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosRestoreJob.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrErrorMessage = this.getAtt('ErrorMessage');
        this.attrRestoreId = this.getAtt('RestoreId');
        this.attrRestoreType = this.getAtt('RestoreType');
        this.attrSourceType = this.getAtt('SourceType');
        this.attrStatus = this.getAtt('Status');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.restoreType = props.restoreType;
        this.snapshotId = props.snapshotId;
        this.sourceClientId = props.sourceClientId;
        this.sourceInstanceId = props.sourceInstanceId;
        this.sourceType = props.sourceType;
        this.targetClientId = props.targetClientId;
        this.targetInstanceId = props.targetInstanceId;
        this.targetPath = props.targetPath;
        this.vaultId = props.vaultId;
    }
    get rosProperties() {
        return {
            restoreType: this.restoreType,
            snapshotId: this.snapshotId,
            sourceClientId: this.sourceClientId,
            sourceInstanceId: this.sourceInstanceId,
            sourceType: this.sourceType,
            targetClientId: this.targetClientId,
            targetInstanceId: this.targetInstanceId,
            targetPath: this.targetPath,
            vaultId: this.vaultId,
        };
    }
    renderProperties(props) {
        return rosRestoreJobPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosRestoreJob = RosRestoreJob;
/**
 * The resource type name for this resource class.
 */
RosRestoreJob.ROS_RESOURCE_TYPE_NAME = "ALIYUN::HBR::RestoreJob";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGJyLmdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhici5nZW5lcmF0ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlEQUF5RDs7O0FBRXpELDhDQUE4QztBQWtCOUM7Ozs7OztHQU1HO0FBQ0gsU0FBUyw4QkFBOEIsQ0FBQyxVQUFlO0lBQ25ELElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxHQUFHLENBQUMsa0JBQWtCLENBQUM7S0FBRTtJQUNuRSxNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUNwRyxJQUFHLFVBQVUsQ0FBQyxXQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sVUFBVSxDQUFDLFdBQVcsQ0FBQyxLQUFLLFFBQVEsQ0FBQyxFQUFFO1FBQ2xILE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDcEUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxXQUFXLENBQUMsTUFBTTtZQUNuQyxHQUFHLEVBQUUsQ0FBQztZQUNOLEdBQUcsRUFBRSxFQUFFO1NBQ1IsQ0FBQyxDQUFDLENBQUM7S0FDVDtJQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ3BI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ekYsQ0FBQzs7QUEvSEwsc0NBZ0lDO0FBL0hHOztHQUVHO0FBQ29CLG9DQUFzQixHQUFHLHlCQUF5QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5cbmltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OkhCUjo6QmFja3VwQ2xpZW50c2BcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NCYWNrdXBDbGllbnRzUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGluc3RhbmNlSWRzOiBJRCBsaXN0IG9mIGluc3RhbmNlcyB0byBpbnN0YWxsIGJhY2t1cCBjbGllbnRcbiAgICAgKi9cbiAgICByZWFkb25seSBpbnN0YW5jZUlkczogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0YWdzOiBUYWdzIHRvIGF0dGFjaCB0byBpbnN0YW5jZS4gTWF4IHN1cHBvcnQgMjAgdGFncyB0byBhZGQgZHVyaW5nIGNyZWF0ZSBpbnN0YW5jZS4gRWFjaCB0YWcgd2l0aCB0d28gcHJvcGVydGllcyBLZXkgYW5kIFZhbHVlLCBhbmQgS2V5IGlzIHJlcXVpcmVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRhZ3M/OiBSb3NCYWNrdXBDbGllbnRzLlRhZ3NQcm9wZXJ0eVtdO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc0JhY2t1cENsaWVudHNQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQmFja3VwQ2xpZW50c1Byb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0JhY2t1cENsaWVudHNQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luc3RhbmNlSWRzJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmluc3RhbmNlSWRzKSk7XG4gICAgaWYocHJvcGVydGllcy5pbnN0YW5jZUlkcyAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLmluc3RhbmNlSWRzKSB8fCAodHlwZW9mIHByb3BlcnRpZXMuaW5zdGFuY2VJZHMpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnN0YW5jZUlkcycsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5pbnN0YW5jZUlkcy5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDIwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnN0YW5jZUlkcycsIHJvcy5saXN0VmFsaWRhdG9yKHJvcy52YWxpZGF0ZVN0cmluZykpKHByb3BlcnRpZXMuaW5zdGFuY2VJZHMpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnRhZ3MgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy50YWdzKSB8fCAodHlwZW9mIHByb3BlcnRpZXMudGFncykgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RhZ3MnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMudGFncy5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG1heDogMjAsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RhZ3MnLCByb3MubGlzdFZhbGlkYXRvcihSb3NCYWNrdXBDbGllbnRzX1RhZ3NQcm9wZXJ0eVZhbGlkYXRvcikpKHByb3BlcnRpZXMudGFncykpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NCYWNrdXBDbGllbnRzUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkhCUjo6QmFja3VwQ2xpZW50c2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQmFja3VwQ2xpZW50c1Byb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpIQlI6OkJhY2t1cENsaWVudHNgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQmFja3VwQ2xpZW50c1Byb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zQmFja3VwQ2xpZW50c1Byb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIEluc3RhbmNlSWRzOiByb3MubGlzdE1hcHBlcihyb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5pbnN0YW5jZUlkcyksXG4gICAgICBUYWdzOiByb3MubGlzdE1hcHBlcihyb3NCYWNrdXBDbGllbnRzVGFnc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy50YWdzKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIEEgUk9TIHRlbXBsYXRlIHR5cGU6ICBgQUxJWVVOOjpIQlI6OkJhY2t1cENsaWVudHNgXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NCYWNrdXBDbGllbnRzIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpIQlI6OkJhY2t1cENsaWVudHNcIjtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBDbGllbnRJZHM6IElEIGxpc3Qgb2YgY2xpZW50cyBpbnN0YWxsZWQgaW4gaW5zdGFuY2VzXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDbGllbnRJZHM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgSW5zdGFuY2VJZHM6IElEIGxpc3Qgb2YgaW5zdGFuY2VzIHRvIGluc3RhbGwgYmFja3VwIGNsaWVudFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySW5zdGFuY2VJZHM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGluc3RhbmNlSWRzOiBJRCBsaXN0IG9mIGluc3RhbmNlcyB0byBpbnN0YWxsIGJhY2t1cCBjbGllbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgaW5zdGFuY2VJZHM6IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGFnczogVGFncyB0byBhdHRhY2ggdG8gaW5zdGFuY2UuIE1heCBzdXBwb3J0IDIwIHRhZ3MgdG8gYWRkIGR1cmluZyBjcmVhdGUgaW5zdGFuY2UuIEVhY2ggdGFnIHdpdGggdHdvIHByb3BlcnRpZXMgS2V5IGFuZCBWYWx1ZSwgYW5kIEtleSBpcyByZXF1aXJlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgdGFnczogUm9zQmFja3VwQ2xpZW50cy5UYWdzUHJvcGVydHlbXSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpIQlI6OkJhY2t1cENsaWVudHNgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc0JhY2t1cENsaWVudHNQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc0JhY2t1cENsaWVudHMuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckNsaWVudElkcyA9IHRoaXMuZ2V0QXR0KCdDbGllbnRJZHMnKTtcbiAgICAgICAgdGhpcy5hdHRySW5zdGFuY2VJZHMgPSB0aGlzLmdldEF0dCgnSW5zdGFuY2VJZHMnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuaW5zdGFuY2VJZHMgPSBwcm9wcy5pbnN0YW5jZUlkcztcbiAgICAgICAgdGhpcy50YWdzID0gcHJvcHMudGFncztcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpbnN0YW5jZUlkczogdGhpcy5pbnN0YW5jZUlkcyxcbiAgICAgICAgICAgIHRhZ3M6IHRoaXMudGFncyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zQmFja3VwQ2xpZW50c1Byb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0JhY2t1cENsaWVudHMge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFRhZ3NQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgdmFsdWU6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgdmFsdWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkga2V5OiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGtleTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgVGFnc1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBUYWdzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQmFja3VwQ2xpZW50c19UYWdzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd2YWx1ZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy52YWx1ZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigna2V5Jywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmtleSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigna2V5Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmtleSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJUYWdzUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkhCUjo6QmFja3VwQ2xpZW50cy5UYWdzYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBUYWdzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkhCUjo6QmFja3VwQ2xpZW50cy5UYWdzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0JhY2t1cENsaWVudHNUYWdzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0JhY2t1cENsaWVudHNfVGFnc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgVmFsdWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudmFsdWUpLFxuICAgICAgS2V5OiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmtleSksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OkhCUjo6RGJBZ2VudGBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NEYkFnZW50UHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGluc3RhbmNlSW5mbzogSW5zdGFuY2UgaW5mb3NcbiAgICAgKi9cbiAgICByZWFkb25seSBpbnN0YW5jZUluZm86IEFycmF5PFJvc0RiQWdlbnQuSW5zdGFuY2VJbmZvUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc0RiQWdlbnRQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zRGJBZ2VudFByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0RiQWdlbnRQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luc3RhbmNlSW5mbycsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5pbnN0YW5jZUluZm8pKTtcbiAgICBpZihwcm9wZXJ0aWVzLmluc3RhbmNlSW5mbyAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLmluc3RhbmNlSW5mbykgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLmluc3RhbmNlSW5mbykgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luc3RhbmNlSW5mbycsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5pbnN0YW5jZUluZm8ubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiAxMDAsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luc3RhbmNlSW5mbycsIHJvcy5saXN0VmFsaWRhdG9yKFJvc0RiQWdlbnRfSW5zdGFuY2VJbmZvUHJvcGVydHlWYWxpZGF0b3IpKShwcm9wZXJ0aWVzLmluc3RhbmNlSW5mbykpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NEYkFnZW50UHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkhCUjo6RGJBZ2VudGAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zRGJBZ2VudFByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpIQlI6OkRiQWdlbnRgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zRGJBZ2VudFByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zRGJBZ2VudFByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIEluc3RhbmNlSW5mbzogcm9zLmxpc3RNYXBwZXIocm9zRGJBZ2VudEluc3RhbmNlSW5mb1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5pbnN0YW5jZUluZm8pLFxuICAgIH07XG59XG5cbi8qKlxuICogQSBST1MgdGVtcGxhdGUgdHlwZTogIGBBTElZVU46OkhCUjo6RGJBZ2VudGBcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc0RiQWdlbnQgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OkhCUjo6RGJBZ2VudFwiO1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEluc3RhbmNlSWRzOiBVbmkgYmFja3VwIGFnZW50IGluc3RhbmNlIGlkc1xuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySW5zdGFuY2VJZHM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgVGFza0lkOiBVbmkgYmFja3VwIGFnZW50IGluc3RhbGwgdGFzayBpZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clRhc2tJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBVbmlCYWNrdXBJbnN0YW5jZURldGFpbHM6IFVuaSBiYWNrdXAgYWdlbnQgaW5zdGFuY2UgaW5mbyBkZXRhaWxzXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJVbmlCYWNrdXBJbnN0YW5jZURldGFpbHM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgVW5pQmFja3VwSW5zdGFuY2VzOiBVbmkgYmFja3VwIGFnZW50IGluc3RhbmNlIGluZm9cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clVuaUJhY2t1cEluc3RhbmNlczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW5zdGFuY2VJbmZvOiBJbnN0YW5jZSBpbmZvc1xuICAgICAqL1xuICAgIHB1YmxpYyBpbnN0YW5jZUluZm86IEFycmF5PFJvc0RiQWdlbnQuSW5zdGFuY2VJbmZvUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OkhCUjo6RGJBZ2VudGAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zRGJBZ2VudFByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zRGJBZ2VudC5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRySW5zdGFuY2VJZHMgPSB0aGlzLmdldEF0dCgnSW5zdGFuY2VJZHMnKTtcbiAgICAgICAgdGhpcy5hdHRyVGFza0lkID0gdGhpcy5nZXRBdHQoJ1Rhc2tJZCcpO1xuICAgICAgICB0aGlzLmF0dHJVbmlCYWNrdXBJbnN0YW5jZURldGFpbHMgPSB0aGlzLmdldEF0dCgnVW5pQmFja3VwSW5zdGFuY2VEZXRhaWxzJyk7XG4gICAgICAgIHRoaXMuYXR0clVuaUJhY2t1cEluc3RhbmNlcyA9IHRoaXMuZ2V0QXR0KCdVbmlCYWNrdXBJbnN0YW5jZXMnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuaW5zdGFuY2VJbmZvID0gcHJvcHMuaW5zdGFuY2VJbmZvO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGluc3RhbmNlSW5mbzogdGhpcy5pbnN0YW5jZUluZm8sXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc0RiQWdlbnRQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NEYkFnZW50IHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBJbnN0YW5jZUluZm9Qcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgdXNlck5hbWU6IERhdGFiYXNlIGJhY2t1cCBhY2NvdW50IHVzZXJuYW1lXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB1c2VyTmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBpbnN0YW5jZUlkOiBFQ1MgaW5zdGFuY2UgaWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGluc3RhbmNlSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzb3VyY2VUeXBlOiBEYXRhIHNvdXJjZSB0eXBlLCB2YWxpZCB2YWx1ZTogTVlTUUwsIE9SQUNMRSwgTVNTUUxcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHNvdXJjZVR5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBwYXNzd29yZDogRGF0YWJhc2UgYmFja3VwIGFjY291bnQgcGFzc3dvcmRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHBhc3N3b3JkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGF1dGhlbnRpY2F0aW9uVHlwZTogdmVyaWZpY2F0aW9uIG1ldGhvZCwgdmFsaWQgdmFsdWU6IElOU1RBTkNFLCBBQ0NFU1NfS0VZXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBhdXRoZW50aWNhdGlvblR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBJbnN0YW5jZUluZm9Qcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgSW5zdGFuY2VJbmZvUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zRGJBZ2VudF9JbnN0YW5jZUluZm9Qcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3VzZXJOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnVzZXJOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnN0YW5jZUlkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmluc3RhbmNlSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luc3RhbmNlSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaW5zdGFuY2VJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc291cmNlVHlwZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5zb3VyY2VUeXBlKSk7XG4gICAgaWYocHJvcGVydGllcy5zb3VyY2VUeXBlICYmICh0eXBlb2YgcHJvcGVydGllcy5zb3VyY2VUeXBlKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzb3VyY2VUeXBlJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuc291cmNlVHlwZSxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJNWVNRTFwiLFwiT1JBQ0xFXCIsXCJNU1NRTFwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NvdXJjZVR5cGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc291cmNlVHlwZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncGFzc3dvcmQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucGFzc3dvcmQpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmF1dGhlbnRpY2F0aW9uVHlwZSAmJiAodHlwZW9mIHByb3BlcnRpZXMuYXV0aGVudGljYXRpb25UeXBlKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhdXRoZW50aWNhdGlvblR5cGUnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5hdXRoZW50aWNhdGlvblR5cGUsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiSU5TVEFOQ0VcIixcIkFDQ0VTU19LRVlcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhdXRoZW50aWNhdGlvblR5cGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuYXV0aGVudGljYXRpb25UeXBlKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIkluc3RhbmNlSW5mb1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpIQlI6OkRiQWdlbnQuSW5zdGFuY2VJbmZvYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBJbnN0YW5jZUluZm9Qcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6SEJSOjpEYkFnZW50Lkluc3RhbmNlSW5mb2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NEYkFnZW50SW5zdGFuY2VJbmZvUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0RiQWdlbnRfSW5zdGFuY2VJbmZvUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBVc2VyTmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy51c2VyTmFtZSksXG4gICAgICBJbnN0YW5jZUlkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmluc3RhbmNlSWQpLFxuICAgICAgU291cmNlVHlwZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zb3VyY2VUeXBlKSxcbiAgICAgIFBhc3N3b3JkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnBhc3N3b3JkKSxcbiAgICAgIEF1dGhlbnRpY2F0aW9uVHlwZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5hdXRoZW50aWNhdGlvblR5cGUpLFxuICAgIH07XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpIQlI6OkRiUGxhbmBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NEYlBsYW5Qcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGJQbGFuTmFtZTogRGlzcGxheSBuYW1lIG9mIHRoZSBiYWNrdXAgcGxhbi5cbiAgICAgKi9cbiAgICByZWFkb25seSBkYlBsYW5OYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaG9zdFV1aWQ6IFV1aWQgb2YgdGhlIGhvc3Qgb2YgdGhlIGRhdGFiYXNlIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGhvc3RVdWlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc291cmNlVHlwZTogRGF0YWJhc2UgdHlwZSwgYWxsb3dlZCB2YWx1ZTogTVlTUUwsIE9SQUNMRSwgTVNTUUxcbiAgICAgKi9cbiAgICByZWFkb25seSBzb3VyY2VUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdmF1bHRJZDogVmF1bHQgSUQgdG8gY3JlYXRlIGJhY2t1cCBwbGFuLCB0aGUgYmFja3VwIGRhdGEgd2lsbCBiZSBzdG9yZWQgdG8gdGhlIHZhdWx0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHZhdWx0SWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjb250aW51b3VzUGxhbjogQ29udGludW91cyBiYWNrdXAgcGxhbiBzY2hlZHVsZS4gVXNlIHsgICBcInR5cGVcIjogXCJjb250aW51b3VzXCIgfS5cbiAgICAgKi9cbiAgICByZWFkb25seSBjb250aW51b3VzUGxhbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjdW11bGF0aXZlUGxhbjogQ3VtdWxhdGl2ZSBwbGFuIHNjaGVkdWxlLCBvbmx5IGZvciBtc3NxbC4gTW9yZSBkZXRhaWxzIHNlZSBGdWxsUGxhbi5cbiAgICAgKi9cbiAgICByZWFkb25seSBjdW11bGF0aXZlUGxhbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBmdWxsUGxhbjogRnVsbCBiYWNrdXAgcGxhbiBzY2hlZHVsZS4gZGFpbHk6IHtcInR5cGVcIjogXCJkYWlseVwiLCBcInN0YXJ0XCI6IFwiMDA6MDA6MDBcIiwgXCJpbnRlcnZhbFwiOiAzfSwgd2Vla2x5IHtcInR5cGVcIjpcIndlZWtseVwiLFwic3RhcnRcIjogXCIwMzowMDowMFwiLFwiZGF5c1wiOiBbMSwyLDMsNCw1XSxcImludGVydmFsXCI6IDF9LCBkYXlzIGNhbiBiZSAwIC0gNiwgMCBtZWFucyBTdW5kYXksIGFuZCBpbnRlcnZhbCBjYW4gYmUgMSAtIDUyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGZ1bGxQbGFuPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGluY1BsYW46IEluY3JlbWVudGFsIGJhY2t1cCBwbGFuIHNjaGVkdWxlLiBPbmx5IGZvciBteXNxbCBhbmQgb3JhY2xlLiBNb3JlIGRldGFpbHMgc2VlIEZ1bGxQbGFuLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGluY1BsYW4/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW5zdGFuY2VVdWlkOiBVdWlkIG9mIGRhdGFiYXNlIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGluc3RhbmNlVXVpZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBsb2dQbGFuOiBMb2cgYmFja3VwIHBsYW4gc2NoZWR1bGUuTW9yZSBkZXRhaWxzIHNlZSBGdWxsUGxhbi5cbiAgICAgKi9cbiAgICByZWFkb25seSBsb2dQbGFuPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG1heFJhdGVMaW1pdDogTWF4IHJhdGUgbGltaXQgZm9yIGJhY2t1cCBqb2IsXG4gICAgICovXG4gICAgcmVhZG9ubHkgbWF4UmF0ZUxpbWl0PzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG1heFJldHJ5U2Vjb25kczogTWF4IHJldHJ5IHNlY29uZHMgb24gbmV0d29yayBmYWlsdXJlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG1heFJldHJ5U2Vjb25kcz86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBvcHRpb25zOiBCYWNrdXAgb3B0aW9ucyBpbiBqc29uIGZvcm1hdCwgZGlmZmVyZW50IGZvciBlYWNoIHR5cGUgb2YgZGF0YWJhc2UuIEZvciBPcmFjbGUsIHVzZSB7XCJjaGFubmVsc1wiOjQsXCJjb21wcmVzc2lvblwiOlwibHpvcFwiLFwib2ZmbGluZV9iYWNrdXBcIjpmYWxzZSxcImFyY2hpdmVsb2dfcmVzZXJ2ZV9ob3Vyc1wiOjI0LFwiY3VzdG9tX2NvbW1hbmRzXCI6XCJcIn0sIFwiY2hhbm5lbHNcIiBtZWFucyBudW1iZXJzIG9mIGNvbmN1cnJlbnQgdGhlYWRzLCBcImFyY2hpdmVsb2dfcmVzZXJ2ZV9ob3Vyc1wiIG1lYW5zIGhvdyBsb25nIGJlZm9yZSB0aGUgYXJjaGl2ZSBsb2cgd2lsbCBiZSBkZWxldGVkIGFmdGVyIGJhY2t1cCBqb2IgY29tcGxldGVkLCBvdGhlciBwYXJhbXRlcnMgc2hvdWxkIHVzZSB0aGUgZGVmYXVsdCB2YXVsZS4gRm9yIE15c3FsLCB1c2Uge1wiY2hhbm5lbHNcIjo0LFwiY29tcHJlc3Npb25cIjpcImx6b3BcIixcImRlbF9iaW5sb2dcIjpmYWxzZX0sIFwiZGVsX2JpbmxvZ1wiIG1lYW5zIHdoZXRoZXIgdGhlIGJpbmxvZyB3aWxsIGJlIGRlbGV0ZWQgYWZ0ZXIgYmFja3VwIGNvbXBsZXRlZCwgb25seSB0YWtlIGVmZmVjdCBmb3IgbG9nIG9yIGNvbnRpbnVvdXMgYmFja3VwLiBGb3IgU1FMIFNlcnZlciwgdXNlIHtcXFwiY2hhbm5lbHNcXFwiOjQsXFxcInZlcmlmeVxcXCI6ZmFsc2UsXFxcImNvbXByZXNzaW9uXFxcIjpcXFwibHpvcFxcXCIsXFxcImJhY2t1cF9uZXdfZGF0YWJhc2VzXFxcIjpmYWxzZX0uXG4gICAgICovXG4gICAgcmVhZG9ubHkgb3B0aW9ucz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzb3VyY2U6IFdoaWNoIGRhdGFiYXNlIGluc3RhbmNlIG9yIGRhdGFiYXNlIHdpbGwgYmUgYmFja3VwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNvdXJjZT86IFJvc0RiUGxhbi5Tb3VyY2VQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NEYlBsYW5Qcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zRGJQbGFuUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zRGJQbGFuUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdvcHRpb25zJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm9wdGlvbnMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luc3RhbmNlVXVpZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5pbnN0YW5jZVV1aWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NvdXJjZVR5cGUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuc291cmNlVHlwZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc291cmNlVHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zb3VyY2VUeXBlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd2YXVsdElkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnZhdWx0SWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZhdWx0SWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudmF1bHRJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc291cmNlJywgUm9zRGJQbGFuX1NvdXJjZVByb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLnNvdXJjZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY29udGludW91c1BsYW4nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuY29udGludW91c1BsYW4pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luY1BsYW4nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaW5jUGxhbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbWF4UmV0cnlTZWNvbmRzJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLm1heFJldHJ5U2Vjb25kcykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaG9zdFV1aWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuaG9zdFV1aWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2hvc3RVdWlkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmhvc3RVdWlkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjdW11bGF0aXZlUGxhbicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5jdW11bGF0aXZlUGxhbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZnVsbFBsYW4nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZnVsbFBsYW4pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2xvZ1BsYW4nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubG9nUGxhbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbWF4UmF0ZUxpbWl0Jywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLm1heFJhdGVMaW1pdCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGJQbGFuTmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5kYlBsYW5OYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkYlBsYW5OYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmRiUGxhbk5hbWUpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zRGJQbGFuUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkhCUjo6RGJQbGFuYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NEYlBsYW5Qcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6SEJSOjpEYlBsYW5gIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zRGJQbGFuUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NEYlBsYW5Qcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBEYlBsYW5OYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRiUGxhbk5hbWUpLFxuICAgICAgSG9zdFV1aWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaG9zdFV1aWQpLFxuICAgICAgU291cmNlVHlwZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zb3VyY2VUeXBlKSxcbiAgICAgIFZhdWx0SWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudmF1bHRJZCksXG4gICAgICBDb250aW51b3VzUGxhbjogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jb250aW51b3VzUGxhbiksXG4gICAgICBDdW11bGF0aXZlUGxhbjogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jdW11bGF0aXZlUGxhbiksXG4gICAgICBGdWxsUGxhbjogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5mdWxsUGxhbiksXG4gICAgICBJbmNQbGFuOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmluY1BsYW4pLFxuICAgICAgSW5zdGFuY2VVdWlkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmluc3RhbmNlVXVpZCksXG4gICAgICBMb2dQbGFuOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmxvZ1BsYW4pLFxuICAgICAgTWF4UmF0ZUxpbWl0OiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm1heFJhdGVMaW1pdCksXG4gICAgICBNYXhSZXRyeVNlY29uZHM6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubWF4UmV0cnlTZWNvbmRzKSxcbiAgICAgIE9wdGlvbnM6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMub3B0aW9ucyksXG4gICAgICBTb3VyY2U6IHJvc0RiUGxhblNvdXJjZVByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnNvdXJjZSksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBBIFJPUyB0ZW1wbGF0ZSB0eXBlOiAgYEFMSVlVTjo6SEJSOjpEYlBsYW5gXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NEYlBsYW4gZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OkhCUjo6RGJQbGFuXCI7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQ29udGludW91c1BsYW46IENvbnRpbnVvdXMgYmFja3VwIHBsYW4gc2NoZWR1bGUuIFVzZSB7ICAgXCJ0eXBlXCI6IFwiY29udGludW91c1wiIH0uXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDb250aW51b3VzUGxhbjogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBDb250aW51b3VzVXVpZDogVXVpZCBvZiBjb250aW51b3VzIGJhY2t1cCBwbGFuLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ29udGludW91c1V1aWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQ3VtdWxhdGl2ZVBsYW46IEN1bXVsYXRpdmUgcGxhbiBzY2hlZHVsZSwgb25seSBmb3IgbXNzcWwuIE1vcmUgZGV0YWlscyBzZWUgRnVsbFBsYW4uXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDdW11bGF0aXZlUGxhbjogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBDdW11bGF0aXZlVXVpZDogVXVpZCBvZiBjdW11bGF0aXZlIHBsYW4uXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDdW11bGF0aXZlVXVpZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBEYlBsYW5OYW1lOiBEaXNwbGF5IG5hbWUgb2YgdGhlIGJhY2t1cCBwbGFuLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRGJQbGFuTmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBGdWxsUGxhbjogRnVsbCBiYWNrdXAgcGxhbiBzY2hlZHVsZS4gZGFpbHk6IHtcInR5cGVcIjogXCJkYWlseVwiLCBcInN0YXJ0XCI6IFwiMDA6MDA6MDBcIiwgXCJpbnRlcnZhbFwiOiAzfSwgd2Vla2x5IHtcInR5cGVcIjpcIndlZWtseVwiLFwic3RhcnRcIjogXCIwMzowMDowMFwiLFwiZGF5c1wiOiBbMSwyLDMsNCw1XSxcImludGVydmFsXCI6IDF9LCBkYXlzIGNhbiBiZSAwIC0gNiwgMCBtZWFucyBTdW5kYXksIGFuZCBpbnRlcnZhbCBjYW4gYmUgMSAtIDUyLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRnVsbFBsYW46IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgRnVsbFV1aWQ6IFV1aWQgb2YgZnVsbCBiYWNrdXAgcGxhbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckZ1bGxVdWlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEhvc3RVdWlkOiBVdWlkIG9mIHRoZSBob3N0IG9mIHRoZSBkYXRhYmFzZSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckhvc3RVdWlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEluY1BsYW46IEluY3JlbWVudGFsIGJhY2t1cCBwbGFuIHNjaGVkdWxlLiBPbmx5IGZvciBteXNxbCBhbmQgb3JhY2xlLiBNb3JlIGRldGFpbHMgc2VlIEZ1bGxQbGFuLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySW5jUGxhbjogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBJbmNVdWlkOiBVdWlkIG9mIHRoZSBpbmNyZW1lbnRhbCBiYWtjdXAgcGxhbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckluY1V1aWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgSW5zdGFuY2VVdWlkOiBVdWlkIG9mIGRhdGFiYXNlIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySW5zdGFuY2VVdWlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIExvZ1BsYW46IExvZyBiYWNrdXAgcGxhbiBzY2hlZHVsZS5Nb3JlIGRldGFpbHMgc2VlIEZ1bGxQbGFuLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTG9nUGxhbjogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBMb2dVdWlkOiBVdWlkIG9mIHRoZSBsb2cgYmFja3VwIHBsYW4uXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJMb2dVdWlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIE1heFJhdGVMaW1pdDogTWF4IHJhdGUgbGltaXQgZm9yIGJhY2t1cCBqb2IsXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJNYXhSYXRlTGltaXQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgTWF4UmV0cnlTZWNvbmRzOiBNYXggcmV0cnkgc2Vjb25kcyBvbiBuZXR3b3JrIGZhaWx1cmUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJNYXhSZXRyeVNlY29uZHM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgT3B0aW9uczogQmFja3VwIG9wdGlvbnMgaW4ganNvbiBmb3JtYXQsIGRpZmZlcmVudCBmb3IgZWFjaCB0eXBlIG9mIGRhdGFiYXNlLiBGb3IgT3JhY2xlLCB1c2Uge1wiY2hhbm5lbHNcIjo0LFwiY29tcHJlc3Npb25cIjpcImx6b3BcIixcIm9mZmxpbmVfYmFja3VwXCI6ZmFsc2UsXCJhcmNoaXZlbG9nX3Jlc2VydmVfaG91cnNcIjoyNCxcImN1c3RvbV9jb21tYW5kc1wiOlwiXCJ9LCBcImNoYW5uZWxzXCIgbWVhbnMgbnVtYmVycyBvZiBjb25jdXJyZW50IHRoZWFkcywgXCJhcmNoaXZlbG9nX3Jlc2VydmVfaG91cnNcIiBtZWFucyBob3cgbG9uZyBiZWZvcmUgdGhlIGFyY2hpdmUgbG9nIHdpbGwgYmUgZGVsZXRlZCBhZnRlciBiYWNrdXAgam9iIGNvbXBsZXRlZCwgb3RoZXIgcGFyYW10ZXJzIHNob3VsZCB1c2UgdGhlIGRlZmF1bHQgdmF1bGUuIEZvciBNeXNxbCwgdXNlIHtcImNoYW5uZWxzXCI6NCxcImNvbXByZXNzaW9uXCI6XCJsem9wXCIsXCJkZWxfYmlubG9nXCI6ZmFsc2V9LCBcImRlbF9iaW5sb2dcIiBtZWFucyB3aGV0aGVyIHRoZSBiaW5sb2cgd2lsbCBiZSBkZWxldGVkIGFmdGVyIGJhY2t1cCBjb21wbGV0ZWQsIG9ubHkgdGFrZSBlZmZlY3QgZm9yIGxvZyBvciBjb250aW51b3VzIGJhY2t1cC4gRm9yIFNRTCBTZXJ2ZXIsIHVzZSB7XFxcImNoYW5uZWxzXFxcIjo0LFxcXCJ2ZXJpZnlcXFwiOmZhbHNlLFxcXCJjb21wcmVzc2lvblxcXCI6XFxcImx6b3BcXFwiLFxcXCJiYWNrdXBfbmV3X2RhdGFiYXNlc1xcXCI6ZmFsc2V9LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyT3B0aW9uczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBQbGFuSWQ6IElkIG9mIHRoZSBiYWNrdXAgcGxhbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clBsYW5JZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBTb3VyY2VUeXBlOiBEYXRhYmFzZSB0eXBlLCBhbGxvd2VkIHZhbHVlOiBNWVNRTCwgT1JBQ0xFLCBNU1NRTFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU291cmNlVHlwZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBUYXJnZXQ6IFRhcmdldCB2YXVsdCB0byBiYWNrdXAuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJUYXJnZXQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgVmF1bHRJZDogVmF1bHQgSUQgdG8gY3JlYXRlIGJhY2t1cCBwbGFuLCB0aGUgYmFja3VwIGRhdGEgd2lsbCBiZSBzdG9yZWQgdG8gdGhlIHZhdWx0LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVmF1bHRJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGJQbGFuTmFtZTogRGlzcGxheSBuYW1lIG9mIHRoZSBiYWNrdXAgcGxhbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGJQbGFuTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGhvc3RVdWlkOiBVdWlkIG9mIHRoZSBob3N0IG9mIHRoZSBkYXRhYmFzZSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgaG9zdFV1aWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzb3VyY2VUeXBlOiBEYXRhYmFzZSB0eXBlLCBhbGxvd2VkIHZhbHVlOiBNWVNRTCwgT1JBQ0xFLCBNU1NRTFxuICAgICAqL1xuICAgIHB1YmxpYyBzb3VyY2VUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdmF1bHRJZDogVmF1bHQgSUQgdG8gY3JlYXRlIGJhY2t1cCBwbGFuLCB0aGUgYmFja3VwIGRhdGEgd2lsbCBiZSBzdG9yZWQgdG8gdGhlIHZhdWx0LlxuICAgICAqL1xuICAgIHB1YmxpYyB2YXVsdElkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY29udGludW91c1BsYW46IENvbnRpbnVvdXMgYmFja3VwIHBsYW4gc2NoZWR1bGUuIFVzZSB7ICAgXCJ0eXBlXCI6IFwiY29udGludW91c1wiIH0uXG4gICAgICovXG4gICAgcHVibGljIGNvbnRpbnVvdXNQbGFuOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY3VtdWxhdGl2ZVBsYW46IEN1bXVsYXRpdmUgcGxhbiBzY2hlZHVsZSwgb25seSBmb3IgbXNzcWwuIE1vcmUgZGV0YWlscyBzZWUgRnVsbFBsYW4uXG4gICAgICovXG4gICAgcHVibGljIGN1bXVsYXRpdmVQbGFuOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZnVsbFBsYW46IEZ1bGwgYmFja3VwIHBsYW4gc2NoZWR1bGUuIGRhaWx5OiB7XCJ0eXBlXCI6IFwiZGFpbHlcIiwgXCJzdGFydFwiOiBcIjAwOjAwOjAwXCIsIFwiaW50ZXJ2YWxcIjogM30sIHdlZWtseSB7XCJ0eXBlXCI6XCJ3ZWVrbHlcIixcInN0YXJ0XCI6IFwiMDM6MDA6MDBcIixcImRheXNcIjogWzEsMiwzLDQsNV0sXCJpbnRlcnZhbFwiOiAxfSwgZGF5cyBjYW4gYmUgMCAtIDYsIDAgbWVhbnMgU3VuZGF5LCBhbmQgaW50ZXJ2YWwgY2FuIGJlIDEgLSA1Mi5cbiAgICAgKi9cbiAgICBwdWJsaWMgZnVsbFBsYW46IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbmNQbGFuOiBJbmNyZW1lbnRhbCBiYWNrdXAgcGxhbiBzY2hlZHVsZS4gT25seSBmb3IgbXlzcWwgYW5kIG9yYWNsZS4gTW9yZSBkZXRhaWxzIHNlZSBGdWxsUGxhbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgaW5jUGxhbjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGluc3RhbmNlVXVpZDogVXVpZCBvZiBkYXRhYmFzZSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgaW5zdGFuY2VVdWlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbG9nUGxhbjogTG9nIGJhY2t1cCBwbGFuIHNjaGVkdWxlLk1vcmUgZGV0YWlscyBzZWUgRnVsbFBsYW4uXG4gICAgICovXG4gICAgcHVibGljIGxvZ1BsYW46IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBtYXhSYXRlTGltaXQ6IE1heCByYXRlIGxpbWl0IGZvciBiYWNrdXAgam9iLFxuICAgICAqL1xuICAgIHB1YmxpYyBtYXhSYXRlTGltaXQ6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBtYXhSZXRyeVNlY29uZHM6IE1heCByZXRyeSBzZWNvbmRzIG9uIG5ldHdvcmsgZmFpbHVyZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgbWF4UmV0cnlTZWNvbmRzOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgb3B0aW9uczogQmFja3VwIG9wdGlvbnMgaW4ganNvbiBmb3JtYXQsIGRpZmZlcmVudCBmb3IgZWFjaCB0eXBlIG9mIGRhdGFiYXNlLiBGb3IgT3JhY2xlLCB1c2Uge1wiY2hhbm5lbHNcIjo0LFwiY29tcHJlc3Npb25cIjpcImx6b3BcIixcIm9mZmxpbmVfYmFja3VwXCI6ZmFsc2UsXCJhcmNoaXZlbG9nX3Jlc2VydmVfaG91cnNcIjoyNCxcImN1c3RvbV9jb21tYW5kc1wiOlwiXCJ9LCBcImNoYW5uZWxzXCIgbWVhbnMgbnVtYmVycyBvZiBjb25jdXJyZW50IHRoZWFkcywgXCJhcmNoaXZlbG9nX3Jlc2VydmVfaG91cnNcIiBtZWFucyBob3cgbG9uZyBiZWZvcmUgdGhlIGFyY2hpdmUgbG9nIHdpbGwgYmUgZGVsZXRlZCBhZnRlciBiYWNrdXAgam9iIGNvbXBsZXRlZCwgb3RoZXIgcGFyYW10ZXJzIHNob3VsZCB1c2UgdGhlIGRlZmF1bHQgdmF1bGUuIEZvciBNeXNxbCwgdXNlIHtcImNoYW5uZWxzXCI6NCxcImNvbXByZXNzaW9uXCI6XCJsem9wXCIsXCJkZWxfYmlubG9nXCI6ZmFsc2V9LCBcImRlbF9iaW5sb2dcIiBtZWFucyB3aGV0aGVyIHRoZSBiaW5sb2cgd2lsbCBiZSBkZWxldGVkIGFmdGVyIGJhY2t1cCBjb21wbGV0ZWQsIG9ubHkgdGFrZSBlZmZlY3QgZm9yIGxvZyBvciBjb250aW51b3VzIGJhY2t1cC4gRm9yIFNRTCBTZXJ2ZXIsIHVzZSB7XFxcImNoYW5uZWxzXFxcIjo0LFxcXCJ2ZXJpZnlcXFwiOmZhbHNlLFxcXCJjb21wcmVzc2lvblxcXCI6XFxcImx6b3BcXFwiLFxcXCJiYWNrdXBfbmV3X2RhdGFiYXNlc1xcXCI6ZmFsc2V9LlxuICAgICAqL1xuICAgIHB1YmxpYyBvcHRpb25zOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc291cmNlOiBXaGljaCBkYXRhYmFzZSBpbnN0YW5jZSBvciBkYXRhYmFzZSB3aWxsIGJlIGJhY2t1cC5cbiAgICAgKi9cbiAgICBwdWJsaWMgc291cmNlOiBSb3NEYlBsYW4uU291cmNlUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6SEJSOjpEYlBsYW5gLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc0RiUGxhblByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zRGJQbGFuLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJDb250aW51b3VzUGxhbiA9IHRoaXMuZ2V0QXR0KCdDb250aW51b3VzUGxhbicpO1xuICAgICAgICB0aGlzLmF0dHJDb250aW51b3VzVXVpZCA9IHRoaXMuZ2V0QXR0KCdDb250aW51b3VzVXVpZCcpO1xuICAgICAgICB0aGlzLmF0dHJDdW11bGF0aXZlUGxhbiA9IHRoaXMuZ2V0QXR0KCdDdW11bGF0aXZlUGxhbicpO1xuICAgICAgICB0aGlzLmF0dHJDdW11bGF0aXZlVXVpZCA9IHRoaXMuZ2V0QXR0KCdDdW11bGF0aXZlVXVpZCcpO1xuICAgICAgICB0aGlzLmF0dHJEYlBsYW5OYW1lID0gdGhpcy5nZXRBdHQoJ0RiUGxhbk5hbWUnKTtcbiAgICAgICAgdGhpcy5hdHRyRnVsbFBsYW4gPSB0aGlzLmdldEF0dCgnRnVsbFBsYW4nKTtcbiAgICAgICAgdGhpcy5hdHRyRnVsbFV1aWQgPSB0aGlzLmdldEF0dCgnRnVsbFV1aWQnKTtcbiAgICAgICAgdGhpcy5hdHRySG9zdFV1aWQgPSB0aGlzLmdldEF0dCgnSG9zdFV1aWQnKTtcbiAgICAgICAgdGhpcy5hdHRySW5jUGxhbiA9IHRoaXMuZ2V0QXR0KCdJbmNQbGFuJyk7XG4gICAgICAgIHRoaXMuYXR0ckluY1V1aWQgPSB0aGlzLmdldEF0dCgnSW5jVXVpZCcpO1xuICAgICAgICB0aGlzLmF0dHJJbnN0YW5jZVV1aWQgPSB0aGlzLmdldEF0dCgnSW5zdGFuY2VVdWlkJyk7XG4gICAgICAgIHRoaXMuYXR0ckxvZ1BsYW4gPSB0aGlzLmdldEF0dCgnTG9nUGxhbicpO1xuICAgICAgICB0aGlzLmF0dHJMb2dVdWlkID0gdGhpcy5nZXRBdHQoJ0xvZ1V1aWQnKTtcbiAgICAgICAgdGhpcy5hdHRyTWF4UmF0ZUxpbWl0ID0gdGhpcy5nZXRBdHQoJ01heFJhdGVMaW1pdCcpO1xuICAgICAgICB0aGlzLmF0dHJNYXhSZXRyeVNlY29uZHMgPSB0aGlzLmdldEF0dCgnTWF4UmV0cnlTZWNvbmRzJyk7XG4gICAgICAgIHRoaXMuYXR0ck9wdGlvbnMgPSB0aGlzLmdldEF0dCgnT3B0aW9ucycpO1xuICAgICAgICB0aGlzLmF0dHJQbGFuSWQgPSB0aGlzLmdldEF0dCgnUGxhbklkJyk7XG4gICAgICAgIHRoaXMuYXR0clNvdXJjZVR5cGUgPSB0aGlzLmdldEF0dCgnU291cmNlVHlwZScpO1xuICAgICAgICB0aGlzLmF0dHJUYXJnZXQgPSB0aGlzLmdldEF0dCgnVGFyZ2V0Jyk7XG4gICAgICAgIHRoaXMuYXR0clZhdWx0SWQgPSB0aGlzLmdldEF0dCgnVmF1bHRJZCcpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5kYlBsYW5OYW1lID0gcHJvcHMuZGJQbGFuTmFtZTtcbiAgICAgICAgdGhpcy5ob3N0VXVpZCA9IHByb3BzLmhvc3RVdWlkO1xuICAgICAgICB0aGlzLnNvdXJjZVR5cGUgPSBwcm9wcy5zb3VyY2VUeXBlO1xuICAgICAgICB0aGlzLnZhdWx0SWQgPSBwcm9wcy52YXVsdElkO1xuICAgICAgICB0aGlzLmNvbnRpbnVvdXNQbGFuID0gcHJvcHMuY29udGludW91c1BsYW47XG4gICAgICAgIHRoaXMuY3VtdWxhdGl2ZVBsYW4gPSBwcm9wcy5jdW11bGF0aXZlUGxhbjtcbiAgICAgICAgdGhpcy5mdWxsUGxhbiA9IHByb3BzLmZ1bGxQbGFuO1xuICAgICAgICB0aGlzLmluY1BsYW4gPSBwcm9wcy5pbmNQbGFuO1xuICAgICAgICB0aGlzLmluc3RhbmNlVXVpZCA9IHByb3BzLmluc3RhbmNlVXVpZDtcbiAgICAgICAgdGhpcy5sb2dQbGFuID0gcHJvcHMubG9nUGxhbjtcbiAgICAgICAgdGhpcy5tYXhSYXRlTGltaXQgPSBwcm9wcy5tYXhSYXRlTGltaXQ7XG4gICAgICAgIHRoaXMubWF4UmV0cnlTZWNvbmRzID0gcHJvcHMubWF4UmV0cnlTZWNvbmRzO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBwcm9wcy5vcHRpb25zO1xuICAgICAgICB0aGlzLnNvdXJjZSA9IHByb3BzLnNvdXJjZTtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkYlBsYW5OYW1lOiB0aGlzLmRiUGxhbk5hbWUsXG4gICAgICAgICAgICBob3N0VXVpZDogdGhpcy5ob3N0VXVpZCxcbiAgICAgICAgICAgIHNvdXJjZVR5cGU6IHRoaXMuc291cmNlVHlwZSxcbiAgICAgICAgICAgIHZhdWx0SWQ6IHRoaXMudmF1bHRJZCxcbiAgICAgICAgICAgIGNvbnRpbnVvdXNQbGFuOiB0aGlzLmNvbnRpbnVvdXNQbGFuLFxuICAgICAgICAgICAgY3VtdWxhdGl2ZVBsYW46IHRoaXMuY3VtdWxhdGl2ZVBsYW4sXG4gICAgICAgICAgICBmdWxsUGxhbjogdGhpcy5mdWxsUGxhbixcbiAgICAgICAgICAgIGluY1BsYW46IHRoaXMuaW5jUGxhbixcbiAgICAgICAgICAgIGluc3RhbmNlVXVpZDogdGhpcy5pbnN0YW5jZVV1aWQsXG4gICAgICAgICAgICBsb2dQbGFuOiB0aGlzLmxvZ1BsYW4sXG4gICAgICAgICAgICBtYXhSYXRlTGltaXQ6IHRoaXMubWF4UmF0ZUxpbWl0LFxuICAgICAgICAgICAgbWF4UmV0cnlTZWNvbmRzOiB0aGlzLm1heFJldHJ5U2Vjb25kcyxcbiAgICAgICAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyxcbiAgICAgICAgICAgIHNvdXJjZTogdGhpcy5zb3VyY2UsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc0RiUGxhblByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0RiUGxhbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgU291cmNlUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGVudHJpZXM6IEJhY2t1cCBkYXRhYmFzZSBpbnN0YW5jZSBvciBkYXRhYmFzZXMgb3IgdGFibGVzLiBGb3IgT3JhY2xlLCB1c2UgW1wib3JhY2xlOi8vJHtpbnN0YW5jZU5hbWV9XCIsIFwib3JhY2xlOi8vJHtpbnN0YW5jZU5hbWV9L2FyY2hpdmVsb2dcIl0sICR7aW5zdGFuY2VOYW1lfSBpcyB0aGUgbmFtZSBvZiB0aGUgb3JhY2xlIGRhdGFiYXNlIGluc3RhbmNlLCB3aGljaCBjYW4gYmUgZ2V0IGZyb20gZGJBZ2VudCByZXNvdXJjZS4gRm9yIE15c3FsLCB1c2UgXCJteXNxbDovLyR7aW5zdGFuY2VOYW1lfVwiLiBGb3IgU1FMIFNlcnZlciwgIHVzZSBbXCJtc3NxbDovLyR7aW5zdGFuY2VOYW1lfS8ke2RhdGFic2UxfVwiLCBcIm1zc3FsOi8vJHtpbnN0YW5jZU5hbWV9LyR7ZGF0YWJzZTJ9XCJdLCAke2RhdGFic2V9IGNhbiBiZSBnZXQgZnJvbSBkYkFnZW50IHJlc291cmNlKE1TU1FMKVxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgZW50cmllcz86IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBTb3VyY2VQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgU291cmNlUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zRGJQbGFuX1NvdXJjZVByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZW50cmllcycsIHJvcy5saXN0VmFsaWRhdG9yKHJvcy52YWxpZGF0ZVN0cmluZykpKHByb3BlcnRpZXMuZW50cmllcykpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJTb3VyY2VQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6SEJSOjpEYlBsYW4uU291cmNlYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBTb3VyY2VQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6SEJSOjpEYlBsYW4uU291cmNlYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0RiUGxhblNvdXJjZVByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NEYlBsYW5fU291cmNlUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBFbnRyaWVzOiByb3MubGlzdE1hcHBlcihyb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5lbnRyaWVzKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6SEJSOjpEYlZhdWx0YFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc0RiVmF1bHRQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmV0ZW50aW9uRGF5czogRGF0YSByZXRlbnRpb24gZGF5cyBvZiB0aGUgdmF1bHQuIERhdGEgd2lsbCBiZSBkZWxldGVkIHdoZW4gaXQncyBvbGRlciB0aGFuIHRoaXMgdGltZS5cbiAgICAgKi9cbiAgICByZWFkb25seSByZXRlbnRpb25EYXlzOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdmF1bHROYW1lOiBEaXNwbGF5IG5hbWUgb2YgdGhlIHZhdWx0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHZhdWx0TmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHZhdWx0UmVnaW9uSWQ6IFRoZSByZWdpb24gSUQgdG8gY3JlYXRlIHRoZSB2YXVsdC5cbiAgICAgKi9cbiAgICByZWFkb25seSB2YXVsdFJlZ2lvbklkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVzY3JpcHRpb246IERlc2NyaXB0aW9uIG9mIHRoZSB2YXVsdC5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0YWdzOiBUYWdzIHRvIGF0dGFjaCB0byBpbnN0YW5jZS4gTWF4IHN1cHBvcnQgMjAgdGFncyB0byBhZGQgZHVyaW5nIGNyZWF0ZSBpbnN0YW5jZS4gRWFjaCB0YWcgd2l0aCB0d28gcHJvcGVydGllcyBLZXkgYW5kIFZhbHVlLCBhbmQgS2V5IGlzIHJlcXVpcmVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRhZ3M/OiBSb3NEYlZhdWx0LlRhZ3NQcm9wZXJ0eVtdO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc0RiVmF1bHRQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zRGJWYXVsdFByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0RiVmF1bHRQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Rlc2NyaXB0aW9uJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd2YXVsdE5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMudmF1bHROYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd2YXVsdE5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudmF1bHROYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZXRlbnRpb25EYXlzJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnJldGVudGlvbkRheXMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JldGVudGlvbkRheXMnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMucmV0ZW50aW9uRGF5cykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndmF1bHRSZWdpb25JZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy52YXVsdFJlZ2lvbklkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd2YXVsdFJlZ2lvbklkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnZhdWx0UmVnaW9uSWQpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnRhZ3MgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy50YWdzKSB8fCAodHlwZW9mIHByb3BlcnRpZXMudGFncykgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RhZ3MnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMudGFncy5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG1heDogMjAsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RhZ3MnLCByb3MubGlzdFZhbGlkYXRvcihSb3NEYlZhdWx0X1RhZ3NQcm9wZXJ0eVZhbGlkYXRvcikpKHByb3BlcnRpZXMudGFncykpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NEYlZhdWx0UHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkhCUjo6RGJWYXVsdGAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zRGJWYXVsdFByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpIQlI6OkRiVmF1bHRgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zRGJWYXVsdFByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zRGJWYXVsdFByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIFJldGVudGlvbkRheXM6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmV0ZW50aW9uRGF5cyksXG4gICAgICBWYXVsdE5hbWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudmF1bHROYW1lKSxcbiAgICAgIFZhdWx0UmVnaW9uSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudmF1bHRSZWdpb25JZCksXG4gICAgICBEZXNjcmlwdGlvbjogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kZXNjcmlwdGlvbiksXG4gICAgICBUYWdzOiByb3MubGlzdE1hcHBlcihyb3NEYlZhdWx0VGFnc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy50YWdzKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIEEgUk9TIHRlbXBsYXRlIHR5cGU6ICBgQUxJWVVOOjpIQlI6OkRiVmF1bHRgXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NEYlZhdWx0IGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpIQlI6OkRiVmF1bHRcIjtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBEZXNjcmlwdGlvbjogRGVzY3JpcHRpb24gb2YgdGhlIHZhdWx0LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRGVzY3JpcHRpb246IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgUmV0ZW50aW9uRGF5czogRGF0YSByZXRlbnRpb24gZGF5cyBvZiB0aGUgdmF1bHQuIERhdGEgd2lsbCBiZSBkZWxldGVkIHdoZW4gaXQncyBvbGRlciB0aGFuIHRoaXMgdGltZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clJldGVudGlvbkRheXM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgVmF1bHRJZDogVmF1bHQgSUQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJWYXVsdElkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFZhdWx0TmFtZTogRGlzcGxheSBuYW1lIG9mIHRoZSB2YXVsdC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clZhdWx0TmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBWYXVsdFJlZ2lvbklkOiBUaGUgcmVnaW9uIElEIHRvIGNyZWF0ZSB0aGUgdmF1bHQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJWYXVsdFJlZ2lvbklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZXRlbnRpb25EYXlzOiBEYXRhIHJldGVudGlvbiBkYXlzIG9mIHRoZSB2YXVsdC4gRGF0YSB3aWxsIGJlIGRlbGV0ZWQgd2hlbiBpdCdzIG9sZGVyIHRoYW4gdGhpcyB0aW1lLlxuICAgICAqL1xuICAgIHB1YmxpYyByZXRlbnRpb25EYXlzOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdmF1bHROYW1lOiBEaXNwbGF5IG5hbWUgb2YgdGhlIHZhdWx0LlxuICAgICAqL1xuICAgIHB1YmxpYyB2YXVsdE5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB2YXVsdFJlZ2lvbklkOiBUaGUgcmVnaW9uIElEIHRvIGNyZWF0ZSB0aGUgdmF1bHQuXG4gICAgICovXG4gICAgcHVibGljIHZhdWx0UmVnaW9uSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogRGVzY3JpcHRpb24gb2YgdGhlIHZhdWx0LlxuICAgICAqL1xuICAgIHB1YmxpYyBkZXNjcmlwdGlvbjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRhZ3M6IFRhZ3MgdG8gYXR0YWNoIHRvIGluc3RhbmNlLiBNYXggc3VwcG9ydCAyMCB0YWdzIHRvIGFkZCBkdXJpbmcgY3JlYXRlIGluc3RhbmNlLiBFYWNoIHRhZyB3aXRoIHR3byBwcm9wZXJ0aWVzIEtleSBhbmQgVmFsdWUsIGFuZCBLZXkgaXMgcmVxdWlyZWQuXG4gICAgICovXG4gICAgcHVibGljIHRhZ3M6IFJvc0RiVmF1bHQuVGFnc1Byb3BlcnR5W10gfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6SEJSOjpEYlZhdWx0YC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NEYlZhdWx0UHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NEYlZhdWx0LlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJEZXNjcmlwdGlvbiA9IHRoaXMuZ2V0QXR0KCdEZXNjcmlwdGlvbicpO1xuICAgICAgICB0aGlzLmF0dHJSZXRlbnRpb25EYXlzID0gdGhpcy5nZXRBdHQoJ1JldGVudGlvbkRheXMnKTtcbiAgICAgICAgdGhpcy5hdHRyVmF1bHRJZCA9IHRoaXMuZ2V0QXR0KCdWYXVsdElkJyk7XG4gICAgICAgIHRoaXMuYXR0clZhdWx0TmFtZSA9IHRoaXMuZ2V0QXR0KCdWYXVsdE5hbWUnKTtcbiAgICAgICAgdGhpcy5hdHRyVmF1bHRSZWdpb25JZCA9IHRoaXMuZ2V0QXR0KCdWYXVsdFJlZ2lvbklkJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLnJldGVudGlvbkRheXMgPSBwcm9wcy5yZXRlbnRpb25EYXlzO1xuICAgICAgICB0aGlzLnZhdWx0TmFtZSA9IHByb3BzLnZhdWx0TmFtZTtcbiAgICAgICAgdGhpcy52YXVsdFJlZ2lvbklkID0gcHJvcHMudmF1bHRSZWdpb25JZDtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IHByb3BzLmRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLnRhZ3MgPSBwcm9wcy50YWdzO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJldGVudGlvbkRheXM6IHRoaXMucmV0ZW50aW9uRGF5cyxcbiAgICAgICAgICAgIHZhdWx0TmFtZTogdGhpcy52YXVsdE5hbWUsXG4gICAgICAgICAgICB2YXVsdFJlZ2lvbklkOiB0aGlzLnZhdWx0UmVnaW9uSWQsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHRhZ3M6IHRoaXMudGFncyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zRGJWYXVsdFByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0RiVmF1bHQge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFRhZ3NQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgdmFsdWU6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgdmFsdWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkga2V5OiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGtleTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgVGFnc1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBUYWdzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zRGJWYXVsdF9UYWdzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd2YWx1ZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy52YWx1ZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigna2V5Jywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmtleSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigna2V5Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmtleSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJUYWdzUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkhCUjo6RGJWYXVsdC5UYWdzYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBUYWdzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkhCUjo6RGJWYXVsdC5UYWdzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0RiVmF1bHRUYWdzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0RiVmF1bHRfVGFnc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgVmFsdWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudmFsdWUpLFxuICAgICAgS2V5OiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmtleSksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OkhCUjo6UmVzdG9yZUpvYmBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NSZXN0b3JlSm9iUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlc3RvcmVUeXBlOiBSZXN0b3JlIHR5cGVcbiAgICAgKi9cbiAgICByZWFkb25seSByZXN0b3JlVHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNuYXBzaG90SWQ6IFNuYXBzaG90IElEXG4gICAgICovXG4gICAgcmVhZG9ubHkgc25hcHNob3RJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNvdXJjZUNsaWVudElkOiBTb3VyY2UgY2xpZW50IElELiBJdCBzaG91bGQgYmUgcHJvdmlkZWQgd2hlbiBTb3VyY2VUeXBlPUZJTEUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc291cmNlQ2xpZW50SWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzb3VyY2VJbnN0YW5jZUlkOiBTb3VyY2UgaW5zdGFuY2UgSUQuIEl0IHNob3VsZCBiZSBwcm92aWRlZCB3aGVuIFNvdXJjZVR5cGU9RUNTX0ZJTEUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc291cmNlSW5zdGFuY2VJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNvdXJjZVR5cGU6IFNvdXJjZSB0eXBlXG4gICAgICovXG4gICAgcmVhZG9ubHkgc291cmNlVHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRhcmdldENsaWVudElkOiBUYXJnZXQgY2xpZW50IElELiBJdCBzaG91bGQgYmUgcHJvdmlkZWQgd2hlbiBSZXN0b3JlVHlwZT1GSUxFLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRhcmdldENsaWVudElkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGFyZ2V0SW5zdGFuY2VJZDogVGFyZ2V0IGluc3RhbmNlIElELiBJdCBzaG91bGQgYmUgcHJvdmlkZWQgd2hlbiBSZXN0b3JlVHlwZT1FQ1NfRklMRS5cbiAgICAgKi9cbiAgICByZWFkb25seSB0YXJnZXRJbnN0YW5jZUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGFyZ2V0UGF0aDogVGFyZ2V0IHBhdGguIEZvciBpbnN0YW5jZSwgXCIvXCIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGFyZ2V0UGF0aDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHZhdWx0SWQ6IFZhdWx0IElEXG4gICAgICovXG4gICAgcmVhZG9ubHkgdmF1bHRJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc1Jlc3RvcmVKb2JQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zUmVzdG9yZUpvYlByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1Jlc3RvcmVKb2JQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NuYXBzaG90SWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuc25hcHNob3RJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc25hcHNob3RJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zbmFwc2hvdElkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0YXJnZXRDbGllbnRJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy50YXJnZXRDbGllbnRJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGFyZ2V0Q2xpZW50SWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudGFyZ2V0Q2xpZW50SWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RhcmdldFBhdGgnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMudGFyZ2V0UGF0aCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGFyZ2V0UGF0aCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy50YXJnZXRQYXRoKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzb3VyY2VUeXBlJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnNvdXJjZVR5cGUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnNvdXJjZVR5cGUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnNvdXJjZVR5cGUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NvdXJjZVR5cGUnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5zb3VyY2VUeXBlLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIkZJTEVcIixcIkVDU19GSUxFXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc291cmNlVHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zb3VyY2VUeXBlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzb3VyY2VDbGllbnRJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5zb3VyY2VDbGllbnRJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc291cmNlQ2xpZW50SWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc291cmNlQ2xpZW50SWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RhcmdldEluc3RhbmNlSWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMudGFyZ2V0SW5zdGFuY2VJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGFyZ2V0SW5zdGFuY2VJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy50YXJnZXRJbnN0YW5jZUlkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd2YXVsdElkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnZhdWx0SWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZhdWx0SWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudmF1bHRJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc291cmNlSW5zdGFuY2VJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5zb3VyY2VJbnN0YW5jZUlkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzb3VyY2VJbnN0YW5jZUlkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnNvdXJjZUluc3RhbmNlSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Jlc3RvcmVUeXBlJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnJlc3RvcmVUeXBlKSk7XG4gICAgaWYocHJvcGVydGllcy5yZXN0b3JlVHlwZSAmJiAodHlwZW9mIHByb3BlcnRpZXMucmVzdG9yZVR5cGUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Jlc3RvcmVUeXBlJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMucmVzdG9yZVR5cGUsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiRklMRVwiLFwiRUNTX0ZJTEVcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZXN0b3JlVHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5yZXN0b3JlVHlwZSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NSZXN0b3JlSm9iUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkhCUjo6UmVzdG9yZUpvYmAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zUmVzdG9yZUpvYlByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpIQlI6OlJlc3RvcmVKb2JgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zUmVzdG9yZUpvYlByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zUmVzdG9yZUpvYlByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIFJlc3RvcmVUeXBlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJlc3RvcmVUeXBlKSxcbiAgICAgIFNuYXBzaG90SWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc25hcHNob3RJZCksXG4gICAgICBTb3VyY2VDbGllbnRJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zb3VyY2VDbGllbnRJZCksXG4gICAgICBTb3VyY2VJbnN0YW5jZUlkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnNvdXJjZUluc3RhbmNlSWQpLFxuICAgICAgU291cmNlVHlwZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zb3VyY2VUeXBlKSxcbiAgICAgIFRhcmdldENsaWVudElkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnRhcmdldENsaWVudElkKSxcbiAgICAgIFRhcmdldEluc3RhbmNlSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudGFyZ2V0SW5zdGFuY2VJZCksXG4gICAgICBUYXJnZXRQYXRoOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnRhcmdldFBhdGgpLFxuICAgICAgVmF1bHRJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy52YXVsdElkKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIEEgUk9TIHRlbXBsYXRlIHR5cGU6ICBgQUxJWVVOOjpIQlI6OlJlc3RvcmVKb2JgXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NSZXN0b3JlSm9iIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpIQlI6OlJlc3RvcmVKb2JcIjtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBFcnJvck1lc3NhZ2U6IEVycm9yIG1lc3NhZ2Ugb2YgcmVzdG9yZSBqb2JcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckVycm9yTWVzc2FnZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBSZXN0b3JlSWQ6IFJlc3RvcmUgam9iIElEXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJSZXN0b3JlSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgUmVzdG9yZVR5cGU6IFJlc3RvcmUgdHlwZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUmVzdG9yZVR5cGU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgU291cmNlVHlwZTogU291cmNlIHR5cGVcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clNvdXJjZVR5cGU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgU3RhdHVzOiBSZXN0b3JlIGpvYiBzdGF0dXNcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clN0YXR1czogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVzdG9yZVR5cGU6IFJlc3RvcmUgdHlwZVxuICAgICAqL1xuICAgIHB1YmxpYyByZXN0b3JlVHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNuYXBzaG90SWQ6IFNuYXBzaG90IElEXG4gICAgICovXG4gICAgcHVibGljIHNuYXBzaG90SWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzb3VyY2VDbGllbnRJZDogU291cmNlIGNsaWVudCBJRC4gSXQgc2hvdWxkIGJlIHByb3ZpZGVkIHdoZW4gU291cmNlVHlwZT1GSUxFLlxuICAgICAqL1xuICAgIHB1YmxpYyBzb3VyY2VDbGllbnRJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNvdXJjZUluc3RhbmNlSWQ6IFNvdXJjZSBpbnN0YW5jZSBJRC4gSXQgc2hvdWxkIGJlIHByb3ZpZGVkIHdoZW4gU291cmNlVHlwZT1FQ1NfRklMRS5cbiAgICAgKi9cbiAgICBwdWJsaWMgc291cmNlSW5zdGFuY2VJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNvdXJjZVR5cGU6IFNvdXJjZSB0eXBlXG4gICAgICovXG4gICAgcHVibGljIHNvdXJjZVR5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0YXJnZXRDbGllbnRJZDogVGFyZ2V0IGNsaWVudCBJRC4gSXQgc2hvdWxkIGJlIHByb3ZpZGVkIHdoZW4gUmVzdG9yZVR5cGU9RklMRS5cbiAgICAgKi9cbiAgICBwdWJsaWMgdGFyZ2V0Q2xpZW50SWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0YXJnZXRJbnN0YW5jZUlkOiBUYXJnZXQgaW5zdGFuY2UgSUQuIEl0IHNob3VsZCBiZSBwcm92aWRlZCB3aGVuIFJlc3RvcmVUeXBlPUVDU19GSUxFLlxuICAgICAqL1xuICAgIHB1YmxpYyB0YXJnZXRJbnN0YW5jZUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGFyZ2V0UGF0aDogVGFyZ2V0IHBhdGguIEZvciBpbnN0YW5jZSwgXCIvXCIuXG4gICAgICovXG4gICAgcHVibGljIHRhcmdldFBhdGg6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB2YXVsdElkOiBWYXVsdCBJRFxuICAgICAqL1xuICAgIHB1YmxpYyB2YXVsdElkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6SEJSOjpSZXN0b3JlSm9iYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NSZXN0b3JlSm9iUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NSZXN0b3JlSm9iLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJFcnJvck1lc3NhZ2UgPSB0aGlzLmdldEF0dCgnRXJyb3JNZXNzYWdlJyk7XG4gICAgICAgIHRoaXMuYXR0clJlc3RvcmVJZCA9IHRoaXMuZ2V0QXR0KCdSZXN0b3JlSWQnKTtcbiAgICAgICAgdGhpcy5hdHRyUmVzdG9yZVR5cGUgPSB0aGlzLmdldEF0dCgnUmVzdG9yZVR5cGUnKTtcbiAgICAgICAgdGhpcy5hdHRyU291cmNlVHlwZSA9IHRoaXMuZ2V0QXR0KCdTb3VyY2VUeXBlJyk7XG4gICAgICAgIHRoaXMuYXR0clN0YXR1cyA9IHRoaXMuZ2V0QXR0KCdTdGF0dXMnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMucmVzdG9yZVR5cGUgPSBwcm9wcy5yZXN0b3JlVHlwZTtcbiAgICAgICAgdGhpcy5zbmFwc2hvdElkID0gcHJvcHMuc25hcHNob3RJZDtcbiAgICAgICAgdGhpcy5zb3VyY2VDbGllbnRJZCA9IHByb3BzLnNvdXJjZUNsaWVudElkO1xuICAgICAgICB0aGlzLnNvdXJjZUluc3RhbmNlSWQgPSBwcm9wcy5zb3VyY2VJbnN0YW5jZUlkO1xuICAgICAgICB0aGlzLnNvdXJjZVR5cGUgPSBwcm9wcy5zb3VyY2VUeXBlO1xuICAgICAgICB0aGlzLnRhcmdldENsaWVudElkID0gcHJvcHMudGFyZ2V0Q2xpZW50SWQ7XG4gICAgICAgIHRoaXMudGFyZ2V0SW5zdGFuY2VJZCA9IHByb3BzLnRhcmdldEluc3RhbmNlSWQ7XG4gICAgICAgIHRoaXMudGFyZ2V0UGF0aCA9IHByb3BzLnRhcmdldFBhdGg7XG4gICAgICAgIHRoaXMudmF1bHRJZCA9IHByb3BzLnZhdWx0SWQ7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzdG9yZVR5cGU6IHRoaXMucmVzdG9yZVR5cGUsXG4gICAgICAgICAgICBzbmFwc2hvdElkOiB0aGlzLnNuYXBzaG90SWQsXG4gICAgICAgICAgICBzb3VyY2VDbGllbnRJZDogdGhpcy5zb3VyY2VDbGllbnRJZCxcbiAgICAgICAgICAgIHNvdXJjZUluc3RhbmNlSWQ6IHRoaXMuc291cmNlSW5zdGFuY2VJZCxcbiAgICAgICAgICAgIHNvdXJjZVR5cGU6IHRoaXMuc291cmNlVHlwZSxcbiAgICAgICAgICAgIHRhcmdldENsaWVudElkOiB0aGlzLnRhcmdldENsaWVudElkLFxuICAgICAgICAgICAgdGFyZ2V0SW5zdGFuY2VJZDogdGhpcy50YXJnZXRJbnN0YW5jZUlkLFxuICAgICAgICAgICAgdGFyZ2V0UGF0aDogdGhpcy50YXJnZXRQYXRoLFxuICAgICAgICAgICAgdmF1bHRJZDogdGhpcy52YXVsdElkLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NSZXN0b3JlSm9iUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG4iXX0=