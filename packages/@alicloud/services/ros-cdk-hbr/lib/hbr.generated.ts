// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::HBR::BackupClients`
 */
export interface RosBackupClientsProps {

    /**
     * @Property instanceIds: ID list of instances to install backup client
     */
    readonly instanceIds: Array<string | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosBackupClientsProps`
 *
 * @param properties - the TypeScript properties of a `RosBackupClientsProps`
 *
 * @returns the result of the validation.
 */
function RosBackupClientsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceIds', ros.requiredValidator)(properties.instanceIds));
    if(properties.instanceIds && (Array.isArray(properties.instanceIds) || (typeof properties.instanceIds) === 'string')) {
        errors.collect(ros.propertyValidator('instanceIds', ros.validateLength)({
            data: properties.instanceIds.length,
            min: 1,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('instanceIds', ros.listValidator(ros.validateString))(properties.instanceIds));
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
function rosBackupClientsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosBackupClientsPropsValidator(properties).assertSuccess();
    }
    return {
      InstanceIds: ros.listMapper(ros.stringToRosTemplate)(properties.instanceIds),
    };
}

/**
 * A ROS template type:  `ALIYUN::HBR::BackupClients`
 */
export class RosBackupClients extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::HBR::BackupClients";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ClientIds: ID list of clients installed in instances
     */
    public readonly attrClientIds: ros.IResolvable;

    /**
     * @Attribute InstanceIds: ID list of instances to install backup client
     */
    public readonly attrInstanceIds: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property instanceIds: ID list of instances to install backup client
     */
    public instanceIds: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Create a new `ALIYUN::HBR::BackupClients`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosBackupClientsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosBackupClients.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrClientIds = this.getAtt('ClientIds');
        this.attrInstanceIds = this.getAtt('InstanceIds');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceIds = props.instanceIds;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceIds: this.instanceIds,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosBackupClientsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::HBR::RestoreJob`
 */
export interface RosRestoreJobProps {

    /**
     * @Property restoreType: Restore type
     */
    readonly restoreType: string | ros.IResolvable;

    /**
     * @Property snapshotId: Snapshot ID
     */
    readonly snapshotId: string | ros.IResolvable;

    /**
     * @Property sourceClientId: Source client ID. It should be provided when SourceType=FILE.
     */
    readonly sourceClientId: string | ros.IResolvable;

    /**
     * @Property sourceInstanceId: Source instance ID. It should be provided when SourceType=ECS_FILE.
     */
    readonly sourceInstanceId: string | ros.IResolvable;

    /**
     * @Property sourceType: Source type
     */
    readonly sourceType: string | ros.IResolvable;

    /**
     * @Property targetClientId: Target client ID. It should be provided when RestoreType=FILE.
     */
    readonly targetClientId: string | ros.IResolvable;

    /**
     * @Property targetInstanceId: Target instance ID. It should be provided when RestoreType=ECS_FILE.
     */
    readonly targetInstanceId: string | ros.IResolvable;

    /**
     * @Property targetPath: Target path. For instance, "/".
     */
    readonly targetPath: string | ros.IResolvable;

    /**
     * @Property vaultId: Vault ID
     */
    readonly vaultId: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosRestoreJobProps`
 *
 * @param properties - the TypeScript properties of a `RosRestoreJobProps`
 *
 * @returns the result of the validation.
 */
function RosRestoreJobPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('snapshotId', ros.requiredValidator)(properties.snapshotId));
    errors.collect(ros.propertyValidator('snapshotId', ros.validateString)(properties.snapshotId));
    errors.collect(ros.propertyValidator('targetClientId', ros.requiredValidator)(properties.targetClientId));
    errors.collect(ros.propertyValidator('targetClientId', ros.validateString)(properties.targetClientId));
    errors.collect(ros.propertyValidator('targetPath', ros.requiredValidator)(properties.targetPath));
    errors.collect(ros.propertyValidator('targetPath', ros.validateString)(properties.targetPath));
    errors.collect(ros.propertyValidator('sourceType', ros.requiredValidator)(properties.sourceType));
    if(properties.sourceType && (typeof properties.sourceType) !== 'object') {
        errors.collect(ros.propertyValidator('sourceType', ros.validateAllowedValues)({
          data: properties.sourceType,
          allowedValues: ["FILE","ECS_FILE"],
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
    if(properties.restoreType && (typeof properties.restoreType) !== 'object') {
        errors.collect(ros.propertyValidator('restoreType', ros.validateAllowedValues)({
          data: properties.restoreType,
          allowedValues: ["FILE","ECS_FILE"],
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
function rosRestoreJobPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
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
export class RosRestoreJob extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::HBR::RestoreJob";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ErrorMessage: Error message of restore job
     */
    public readonly attrErrorMessage: ros.IResolvable;

    /**
     * @Attribute RestoreId: Restore job ID
     */
    public readonly attrRestoreId: ros.IResolvable;

    /**
     * @Attribute RestoreType: Restore type
     */
    public readonly attrRestoreType: ros.IResolvable;

    /**
     * @Attribute SourceType: Source type
     */
    public readonly attrSourceType: ros.IResolvable;

    /**
     * @Attribute Status: Restore job status
     */
    public readonly attrStatus: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property restoreType: Restore type
     */
    public restoreType: string | ros.IResolvable;

    /**
     * @Property snapshotId: Snapshot ID
     */
    public snapshotId: string | ros.IResolvable;

    /**
     * @Property sourceClientId: Source client ID. It should be provided when SourceType=FILE.
     */
    public sourceClientId: string | ros.IResolvable;

    /**
     * @Property sourceInstanceId: Source instance ID. It should be provided when SourceType=ECS_FILE.
     */
    public sourceInstanceId: string | ros.IResolvable;

    /**
     * @Property sourceType: Source type
     */
    public sourceType: string | ros.IResolvable;

    /**
     * @Property targetClientId: Target client ID. It should be provided when RestoreType=FILE.
     */
    public targetClientId: string | ros.IResolvable;

    /**
     * @Property targetInstanceId: Target instance ID. It should be provided when RestoreType=ECS_FILE.
     */
    public targetInstanceId: string | ros.IResolvable;

    /**
     * @Property targetPath: Target path. For instance, "/".
     */
    public targetPath: string | ros.IResolvable;

    /**
     * @Property vaultId: Vault ID
     */
    public vaultId: string | ros.IResolvable;

    /**
     * Create a new `ALIYUN::HBR::RestoreJob`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRestoreJobProps, enableResourcePropertyConstraint: boolean) {
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


    protected get rosProperties(): { [key: string]: any }  {
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
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosRestoreJobPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
