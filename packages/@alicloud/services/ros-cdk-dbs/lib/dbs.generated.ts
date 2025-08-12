// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosDownload`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dbs-download
 */
export interface RosDownloadProps {

    /**
     * @Property formatType: The format to which the downloaded backup set is converted. 
     * Valid values: CSV|SQL|Parquet
     */
    readonly formatType: string | ros.IResolvable;

    /**
     * @Property instanceName: The ID of the instance.
     */
    readonly instanceName: string | ros.IResolvable;

    /**
     * @Property bakSetId: The ID of the backup set. You can call the DescribeBackups operation to query the ID of the backup set.
     * This parameter is required if the BakSetType parameter is set to full.
     */
    readonly bakSetId?: string | ros.IResolvable;

    /**
     * @Property bakSetSize: The size of the full backup set. Unit: bytes. 
     * You can call the DescribeBackups operation to query the size of the full backup set.
     */
    readonly bakSetSize?: string | ros.IResolvable;

    /**
     * @Property bakSetType: The type of the download task. Valid values:
     * full: downloads a full backup set
     * pitr: downloads a backup set at a specific point in time.
     */
    readonly bakSetType?: string | ros.IResolvable;

    /**
     * @Property deleteBackupSetInOss: Whether to delete the backup set in OSS when deleting the stack.
     * Valid values: true|false, default is true.
     */
    readonly deleteBackupSetInOss?: boolean | ros.IResolvable;

    /**
     * @Property downloadAddressDuration: When the download target is a URL, set the link validity period. 
     * The default URL validity period is 7200 seconds. 
     * The effective duration range can be set from 300 seconds to 86400 seconds
     */
    readonly downloadAddressDuration?: number | ros.IResolvable;

    /**
     * @Property downloadPointInTime: The point in time at which the backup set is downloaded. 
     * Specify a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
     * This parameter is required if the BakSetType parameter is set to pitr.
     */
    readonly downloadPointInTime?: string | ros.IResolvable;

    /**
     * @Property targetBucket: The name of the OSS bucket that is used to store the backup set.
     * This parameter is required if the TargetType parameter is set to OSS.
     * Make sure that your account is granted the AliyunDBSDefaultRole permission. 
     * For more information, see Use RAM for resource authorization. 
     * You can also grant permissions based on the operation instructions in the Resource Access Management (RAM) console.
     */
    readonly targetBucket?: string | ros.IResolvable;

    /**
     * @Property targetOssRegion: The region in which the OSS bucket resides.
     * This parameter is required if the TargetType parameter is set to OSS.
     */
    readonly targetOssRegion?: string | ros.IResolvable;

    /**
     * @Property targetPath: The destination path to which the backup set is downloaded.
     * This parameter is required if the TargetType parameter is set to OSS.
     */
    readonly targetPath?: string | ros.IResolvable;

    /**
     * @Property targetType: The type of the destination to which the backup set is downloaded. 
     * Valid values: OSS|URL
     */
    readonly targetType?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDownloadProps`
 *
 * @param properties - the TypeScript properties of a `RosDownloadProps`
 *
 * @returns the result of the validation.
 */
function RosDownloadPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('bakSetId', ros.validateString)(properties.bakSetId));
    errors.collect(ros.propertyValidator('instanceName', ros.requiredValidator)(properties.instanceName));
    errors.collect(ros.propertyValidator('instanceName', ros.validateString)(properties.instanceName));
    errors.collect(ros.propertyValidator('downloadPointInTime', ros.validateString)(properties.downloadPointInTime));
    errors.collect(ros.propertyValidator('bakSetType', ros.validateString)(properties.bakSetType));
    errors.collect(ros.propertyValidator('bakSetSize', ros.validateString)(properties.bakSetSize));
    errors.collect(ros.propertyValidator('targetPath', ros.validateString)(properties.targetPath));
    errors.collect(ros.propertyValidator('targetType', ros.validateString)(properties.targetType));
    errors.collect(ros.propertyValidator('targetOssRegion', ros.validateString)(properties.targetOssRegion));
    errors.collect(ros.propertyValidator('deleteBackupSetInOss', ros.validateBoolean)(properties.deleteBackupSetInOss));
    errors.collect(ros.propertyValidator('targetBucket', ros.validateString)(properties.targetBucket));
    errors.collect(ros.propertyValidator('formatType', ros.requiredValidator)(properties.formatType));
    errors.collect(ros.propertyValidator('formatType', ros.validateString)(properties.formatType));
    if(properties.downloadAddressDuration && (typeof properties.downloadAddressDuration) !== 'object') {
        errors.collect(ros.propertyValidator('downloadAddressDuration', ros.validateRange)({
            data: properties.downloadAddressDuration,
            min: 300,
            max: 86400,
          }));
    }
    errors.collect(ros.propertyValidator('downloadAddressDuration', ros.validateNumber)(properties.downloadAddressDuration));
    return errors.wrap('supplied properties not correct for "RosDownloadProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DBS::Download` resource
 *
 * @param properties - the TypeScript properties of a `RosDownloadProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DBS::Download` resource.
 */
// @ts-ignore TS6133
function rosDownloadPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDownloadPropsValidator(properties).assertSuccess();
    }
    return {
      'FormatType': ros.stringToRosTemplate(properties.formatType),
      'InstanceName': ros.stringToRosTemplate(properties.instanceName),
      'BakSetId': ros.stringToRosTemplate(properties.bakSetId),
      'BakSetSize': ros.stringToRosTemplate(properties.bakSetSize),
      'BakSetType': ros.stringToRosTemplate(properties.bakSetType),
      'DeleteBackupSetInOss': ros.booleanToRosTemplate(properties.deleteBackupSetInOss),
      'DownloadAddressDuration': ros.numberToRosTemplate(properties.downloadAddressDuration),
      'DownloadPointInTime': ros.stringToRosTemplate(properties.downloadPointInTime),
      'TargetBucket': ros.stringToRosTemplate(properties.targetBucket),
      'TargetOssRegion': ros.stringToRosTemplate(properties.targetOssRegion),
      'TargetPath': ros.stringToRosTemplate(properties.targetPath),
      'TargetType': ros.stringToRosTemplate(properties.targetType),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DBS::Download`, which is used to create an advanced download task.
 * @Note This class does not contain additional functions, so it is recommended to use the `Download` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dbs-download
 */
export class RosDownload extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DBS::Download";

    /**
     * @Attribute BakSetId: The ID of the backup set.
     */
    public readonly attrBakSetId: ros.IResolvable;

    /**
     * @Attribute DownloadAddressInfo: The download address information.
     */
    public readonly attrDownloadAddressInfo: ros.IResolvable;

    /**
     * @Attribute InstanceName: The ID of the instance.
     */
    public readonly attrInstanceName: ros.IResolvable;

    /**
     * @Attribute TaskId: The ID of the download task.
     */
    public readonly attrTaskId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property formatType: The format to which the downloaded backup set is converted. 
     * Valid values: CSV|SQL|Parquet
     */
    public formatType: string | ros.IResolvable;

    /**
     * @Property instanceName: The ID of the instance.
     */
    public instanceName: string | ros.IResolvable;

    /**
     * @Property bakSetId: The ID of the backup set. You can call the DescribeBackups operation to query the ID of the backup set.
     * This parameter is required if the BakSetType parameter is set to full.
     */
    public bakSetId: string | ros.IResolvable | undefined;

    /**
     * @Property bakSetSize: The size of the full backup set. Unit: bytes. 
     * You can call the DescribeBackups operation to query the size of the full backup set.
     */
    public bakSetSize: string | ros.IResolvable | undefined;

    /**
     * @Property bakSetType: The type of the download task. Valid values:
     * full: downloads a full backup set
     * pitr: downloads a backup set at a specific point in time.
     */
    public bakSetType: string | ros.IResolvable | undefined;

    /**
     * @Property deleteBackupSetInOss: Whether to delete the backup set in OSS when deleting the stack.
     * Valid values: true|false, default is true.
     */
    public deleteBackupSetInOss: boolean | ros.IResolvable | undefined;

    /**
     * @Property downloadAddressDuration: When the download target is a URL, set the link validity period. 
     * The default URL validity period is 7200 seconds. 
     * The effective duration range can be set from 300 seconds to 86400 seconds
     */
    public downloadAddressDuration: number | ros.IResolvable | undefined;

    /**
     * @Property downloadPointInTime: The point in time at which the backup set is downloaded. 
     * Specify a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
     * This parameter is required if the BakSetType parameter is set to pitr.
     */
    public downloadPointInTime: string | ros.IResolvable | undefined;

    /**
     * @Property targetBucket: The name of the OSS bucket that is used to store the backup set.
     * This parameter is required if the TargetType parameter is set to OSS.
     * Make sure that your account is granted the AliyunDBSDefaultRole permission. 
     * For more information, see Use RAM for resource authorization. 
     * You can also grant permissions based on the operation instructions in the Resource Access Management (RAM) console.
     */
    public targetBucket: string | ros.IResolvable | undefined;

    /**
     * @Property targetOssRegion: The region in which the OSS bucket resides.
     * This parameter is required if the TargetType parameter is set to OSS.
     */
    public targetOssRegion: string | ros.IResolvable | undefined;

    /**
     * @Property targetPath: The destination path to which the backup set is downloaded.
     * This parameter is required if the TargetType parameter is set to OSS.
     */
    public targetPath: string | ros.IResolvable | undefined;

    /**
     * @Property targetType: The type of the destination to which the backup set is downloaded. 
     * Valid values: OSS|URL
     */
    public targetType: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDownloadProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDownload.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrBakSetId = this.getAtt('BakSetId');
        this.attrDownloadAddressInfo = this.getAtt('DownloadAddressInfo');
        this.attrInstanceName = this.getAtt('InstanceName');
        this.attrTaskId = this.getAtt('TaskId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.formatType = props.formatType;
        this.instanceName = props.instanceName;
        this.bakSetId = props.bakSetId;
        this.bakSetSize = props.bakSetSize;
        this.bakSetType = props.bakSetType;
        this.deleteBackupSetInOss = props.deleteBackupSetInOss;
        this.downloadAddressDuration = props.downloadAddressDuration;
        this.downloadPointInTime = props.downloadPointInTime;
        this.targetBucket = props.targetBucket;
        this.targetOssRegion = props.targetOssRegion;
        this.targetPath = props.targetPath;
        this.targetType = props.targetType;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            formatType: this.formatType,
            instanceName: this.instanceName,
            bakSetId: this.bakSetId,
            bakSetSize: this.bakSetSize,
            bakSetType: this.bakSetType,
            deleteBackupSetInOss: this.deleteBackupSetInOss,
            downloadAddressDuration: this.downloadAddressDuration,
            downloadPointInTime: this.downloadPointInTime,
            targetBucket: this.targetBucket,
            targetOssRegion: this.targetOssRegion,
            targetPath: this.targetPath,
            targetType: this.targetType,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDownloadPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosRestoreTask`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dbs-restoretask
 */
export interface RosRestoreTaskProps {

    /**
     * @Property backupPlanId: The ID of the backup plan.
     */
    readonly backupPlanId: string | ros.IResolvable;

    /**
     * @Property destinationEndpointInstanceType: The location of the database. Valid values: 
     * - rds 
     * - ecs 
     * - express: a database connected over express connect, VPN Gateway, or smart gateway. 
     * - agent: The database connected through the backup Gateway 
     * - dds: apsaradb for MongoDB 
     * - kvstore 
     * - polardb 
     * - drds 
     * - dg: the database is directly connected through IP Address: Port.
     */
    readonly destinationEndpointInstanceType: string | ros.IResolvable;

    /**
     * @Property restoreTaskName: The name of the restoration task.
     */
    readonly restoreTaskName: string | ros.IResolvable;

    /**
     * @Property backupGatewayId: The ID of the backup gateway.
     * NoteDestinationEndpointInstanceType if you set this parameter to agent, this parameter is required.
     */
    readonly backupGatewayId?: number | ros.IResolvable;

    /**
     * @Property backupSetId: The ID of the full backup set used for restoration, which is mutually exclusive to
     * RestoreTime.
     */
    readonly backupSetId?: string | ros.IResolvable;

    /**
     * @Property destinationEndpointDatabaseName: The name of the RDS database.
     * Note When the database type is PostgreSQL or MongoDB, this parameter is required.
     */
    readonly destinationEndpointDatabaseName?: string | ros.IResolvable;

    /**
     * @Property destinationEndpointInstanceId: The ID of the ApsaraDB RDS instance to query.
     * NoteDestinationEndpointInstanceType if the value is RDS, ECS, DDS, or Express, this parameter is required.
     */
    readonly destinationEndpointInstanceId?: string | ros.IResolvable;

    /**
     * @Property destinationEndpointIp: The endpoint used to connect to the database.
     * NoteDestinationEndpointInstanceType is express, agent, or other. This parameter is required.
     */
    readonly destinationEndpointIp?: string | ros.IResolvable;

    /**
     * @Property destinationEndpointOracleSid: The SID of the Oracle instance.
     * Note This parameter is required if the database type is Oracle.
     */
    readonly destinationEndpointOracleSid?: string | ros.IResolvable;

    /**
     * @Property destinationEndpointPassword: The password that is used to log on to the RDS instance.
     * Note You must specify this parameter when the database type is Redis, or the database location
     * is agent and the database type is MSSQL.
     */
    readonly destinationEndpointPassword?: string | ros.IResolvable;

    /**
     * @Property destinationEndpointPort: The port that is used to access the database of the primary MySQL server.
     * NoteDestinationEndpointInstanceType is in the format of express, agent, other, or ECS. This parameter is required.
     */
    readonly destinationEndpointPort?: number | ros.IResolvable;

    /**
     * @Property destinationEndpointRegion: The region of the database.
     * NoteDestinationEndpointInstanceType for RDS, ECS, DDS, Express, or Agent, this parameter is required.
     */
    readonly destinationEndpointRegion?: string | ros.IResolvable;

    /**
     * @Property destinationEndpointUserName: The database account.
     * Note You must specify this parameter when the database type is Redis, or the database location
     * is agent and the database type is MSSQL.
     */
    readonly destinationEndpointUserName?: string | ros.IResolvable;

    /**
     * @Property duplicateConflict: The handling method for conflicts between objects with the same name. Valid values:
     * failure: The object with the same name fails (default).
     * renamenew: renames an object with the same name.
     */
    readonly duplicateConflict?: string | ros.IResolvable;

    /**
     * @Property restoreDir: DestinationEndpointInstanceType this parameter is required when agent is specified and the backup schedule is MySQL.
     */
    readonly restoreDir?: string | ros.IResolvable;

    /**
     * @Property restoreHome: Database Program Directory.
     */
    readonly restoreHome?: string | ros.IResolvable;

    /**
     * @Property restoreObjects: Restore an object.
     * Note For details, see the following RestoreObjects if the database is located in an agent, this parameter is required in other scenarios.
     */
    readonly restoreObjects?: string | ros.IResolvable;

    /**
     * @Property restoreTime: The time when the fault is restored. Set the value to 1554560477000.
     */
    readonly restoreTime?: number | ros.IResolvable;

    /**
     * @Property startTask: Start restore task after creating a recovery task.
     */
    readonly startTask?: boolean | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosRestoreTaskProps`
 *
 * @param properties - the TypeScript properties of a `RosRestoreTaskProps`
 *
 * @returns the result of the validation.
 */
function RosRestoreTaskPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('startTask', ros.validateBoolean)(properties.startTask));
    errors.collect(ros.propertyValidator('restoreDir', ros.validateString)(properties.restoreDir));
    if(properties.duplicateConflict && (typeof properties.duplicateConflict) !== 'object') {
        errors.collect(ros.propertyValidator('duplicateConflict', ros.validateAllowedValues)({
          data: properties.duplicateConflict,
          allowedValues: ["failure","renamenew"],
        }));
    }
    errors.collect(ros.propertyValidator('duplicateConflict', ros.validateString)(properties.duplicateConflict));
    errors.collect(ros.propertyValidator('restoreHome', ros.validateString)(properties.restoreHome));
    errors.collect(ros.propertyValidator('destinationEndpointPassword', ros.validateString)(properties.destinationEndpointPassword));
    errors.collect(ros.propertyValidator('destinationEndpointIp', ros.validateString)(properties.destinationEndpointIp));
    errors.collect(ros.propertyValidator('destinationEndpointPort', ros.validateNumber)(properties.destinationEndpointPort));
    errors.collect(ros.propertyValidator('destinationEndpointOracleSid', ros.validateString)(properties.destinationEndpointOracleSid));
    errors.collect(ros.propertyValidator('backupSetId', ros.validateString)(properties.backupSetId));
    errors.collect(ros.propertyValidator('destinationEndpointInstanceType', ros.requiredValidator)(properties.destinationEndpointInstanceType));
    errors.collect(ros.propertyValidator('destinationEndpointInstanceType', ros.validateString)(properties.destinationEndpointInstanceType));
    errors.collect(ros.propertyValidator('restoreTime', ros.validateNumber)(properties.restoreTime));
    errors.collect(ros.propertyValidator('destinationEndpointRegion', ros.validateString)(properties.destinationEndpointRegion));
    errors.collect(ros.propertyValidator('destinationEndpointDatabaseName', ros.validateString)(properties.destinationEndpointDatabaseName));
    errors.collect(ros.propertyValidator('destinationEndpointUserName', ros.validateString)(properties.destinationEndpointUserName));
    errors.collect(ros.propertyValidator('restoreObjects', ros.validateString)(properties.restoreObjects));
    errors.collect(ros.propertyValidator('restoreTaskName', ros.requiredValidator)(properties.restoreTaskName));
    errors.collect(ros.propertyValidator('restoreTaskName', ros.validateString)(properties.restoreTaskName));
    errors.collect(ros.propertyValidator('backupPlanId', ros.requiredValidator)(properties.backupPlanId));
    errors.collect(ros.propertyValidator('backupPlanId', ros.validateString)(properties.backupPlanId));
    errors.collect(ros.propertyValidator('backupGatewayId', ros.validateNumber)(properties.backupGatewayId));
    errors.collect(ros.propertyValidator('destinationEndpointInstanceId', ros.validateString)(properties.destinationEndpointInstanceId));
    return errors.wrap('supplied properties not correct for "RosRestoreTaskProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DBS::RestoreTask` resource
 *
 * @param properties - the TypeScript properties of a `RosRestoreTaskProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DBS::RestoreTask` resource.
 */
// @ts-ignore TS6133
function rosRestoreTaskPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosRestoreTaskPropsValidator(properties).assertSuccess();
    }
    return {
      'BackupPlanId': ros.stringToRosTemplate(properties.backupPlanId),
      'DestinationEndpointInstanceType': ros.stringToRosTemplate(properties.destinationEndpointInstanceType),
      'RestoreTaskName': ros.stringToRosTemplate(properties.restoreTaskName),
      'BackupGatewayId': ros.numberToRosTemplate(properties.backupGatewayId),
      'BackupSetId': ros.stringToRosTemplate(properties.backupSetId),
      'DestinationEndpointDatabaseName': ros.stringToRosTemplate(properties.destinationEndpointDatabaseName),
      'DestinationEndpointInstanceID': ros.stringToRosTemplate(properties.destinationEndpointInstanceId),
      'DestinationEndpointIP': ros.stringToRosTemplate(properties.destinationEndpointIp),
      'DestinationEndpointOracleSID': ros.stringToRosTemplate(properties.destinationEndpointOracleSid),
      'DestinationEndpointPassword': ros.stringToRosTemplate(properties.destinationEndpointPassword),
      'DestinationEndpointPort': ros.numberToRosTemplate(properties.destinationEndpointPort),
      'DestinationEndpointRegion': ros.stringToRosTemplate(properties.destinationEndpointRegion),
      'DestinationEndpointUserName': ros.stringToRosTemplate(properties.destinationEndpointUserName),
      'DuplicateConflict': ros.stringToRosTemplate(properties.duplicateConflict),
      'RestoreDir': ros.stringToRosTemplate(properties.restoreDir),
      'RestoreHome': ros.stringToRosTemplate(properties.restoreHome),
      'RestoreObjects': ros.stringToRosTemplate(properties.restoreObjects),
      'RestoreTime': ros.numberToRosTemplate(properties.restoreTime),
      'StartTask': ros.booleanToRosTemplate(properties.startTask),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DBS::RestoreTask`, which is used to create a restoration task of Data Disaster Recovery.
 * @Note This class does not contain additional functions, so it is recommended to use the `RestoreTask` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dbs-restoretask
 */
export class RosRestoreTask extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DBS::RestoreTask";

    /**
     * @Attribute RestoreTaskId: The ID of the restoration task.
     */
    public readonly attrRestoreTaskId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property backupPlanId: The ID of the backup plan.
     */
    public backupPlanId: string | ros.IResolvable;

    /**
     * @Property destinationEndpointInstanceType: The location of the database. Valid values: 
     * - rds 
     * - ecs 
     * - express: a database connected over express connect, VPN Gateway, or smart gateway. 
     * - agent: The database connected through the backup Gateway 
     * - dds: apsaradb for MongoDB 
     * - kvstore 
     * - polardb 
     * - drds 
     * - dg: the database is directly connected through IP Address: Port.
     */
    public destinationEndpointInstanceType: string | ros.IResolvable;

    /**
     * @Property restoreTaskName: The name of the restoration task.
     */
    public restoreTaskName: string | ros.IResolvable;

    /**
     * @Property backupGatewayId: The ID of the backup gateway.
     * NoteDestinationEndpointInstanceType if you set this parameter to agent, this parameter is required.
     */
    public backupGatewayId: number | ros.IResolvable | undefined;

    /**
     * @Property backupSetId: The ID of the full backup set used for restoration, which is mutually exclusive to
     * RestoreTime.
     */
    public backupSetId: string | ros.IResolvable | undefined;

    /**
     * @Property destinationEndpointDatabaseName: The name of the RDS database.
     * Note When the database type is PostgreSQL or MongoDB, this parameter is required.
     */
    public destinationEndpointDatabaseName: string | ros.IResolvable | undefined;

    /**
     * @Property destinationEndpointInstanceId: The ID of the ApsaraDB RDS instance to query.
     * NoteDestinationEndpointInstanceType if the value is RDS, ECS, DDS, or Express, this parameter is required.
     */
    public destinationEndpointInstanceId: string | ros.IResolvable | undefined;

    /**
     * @Property destinationEndpointIp: The endpoint used to connect to the database.
     * NoteDestinationEndpointInstanceType is express, agent, or other. This parameter is required.
     */
    public destinationEndpointIp: string | ros.IResolvable | undefined;

    /**
     * @Property destinationEndpointOracleSid: The SID of the Oracle instance.
     * Note This parameter is required if the database type is Oracle.
     */
    public destinationEndpointOracleSid: string | ros.IResolvable | undefined;

    /**
     * @Property destinationEndpointPassword: The password that is used to log on to the RDS instance.
     * Note You must specify this parameter when the database type is Redis, or the database location
     * is agent and the database type is MSSQL.
     */
    public destinationEndpointPassword: string | ros.IResolvable | undefined;

    /**
     * @Property destinationEndpointPort: The port that is used to access the database of the primary MySQL server.
     * NoteDestinationEndpointInstanceType is in the format of express, agent, other, or ECS. This parameter is required.
     */
    public destinationEndpointPort: number | ros.IResolvable | undefined;

    /**
     * @Property destinationEndpointRegion: The region of the database.
     * NoteDestinationEndpointInstanceType for RDS, ECS, DDS, Express, or Agent, this parameter is required.
     */
    public destinationEndpointRegion: string | ros.IResolvable | undefined;

    /**
     * @Property destinationEndpointUserName: The database account.
     * Note You must specify this parameter when the database type is Redis, or the database location
     * is agent and the database type is MSSQL.
     */
    public destinationEndpointUserName: string | ros.IResolvable | undefined;

    /**
     * @Property duplicateConflict: The handling method for conflicts between objects with the same name. Valid values:
     * failure: The object with the same name fails (default).
     * renamenew: renames an object with the same name.
     */
    public duplicateConflict: string | ros.IResolvable | undefined;

    /**
     * @Property restoreDir: DestinationEndpointInstanceType this parameter is required when agent is specified and the backup schedule is MySQL.
     */
    public restoreDir: string | ros.IResolvable | undefined;

    /**
     * @Property restoreHome: Database Program Directory.
     */
    public restoreHome: string | ros.IResolvable | undefined;

    /**
     * @Property restoreObjects: Restore an object.
     * Note For details, see the following RestoreObjects if the database is located in an agent, this parameter is required in other scenarios.
     */
    public restoreObjects: string | ros.IResolvable | undefined;

    /**
     * @Property restoreTime: The time when the fault is restored. Set the value to 1554560477000.
     */
    public restoreTime: number | ros.IResolvable | undefined;

    /**
     * @Property startTask: Start restore task after creating a recovery task.
     */
    public startTask: boolean | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRestoreTaskProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosRestoreTask.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrRestoreTaskId = this.getAtt('RestoreTaskId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.backupPlanId = props.backupPlanId;
        this.destinationEndpointInstanceType = props.destinationEndpointInstanceType;
        this.restoreTaskName = props.restoreTaskName;
        this.backupGatewayId = props.backupGatewayId;
        this.backupSetId = props.backupSetId;
        this.destinationEndpointDatabaseName = props.destinationEndpointDatabaseName;
        this.destinationEndpointInstanceId = props.destinationEndpointInstanceId;
        this.destinationEndpointIp = props.destinationEndpointIp;
        this.destinationEndpointOracleSid = props.destinationEndpointOracleSid;
        this.destinationEndpointPassword = props.destinationEndpointPassword;
        this.destinationEndpointPort = props.destinationEndpointPort;
        this.destinationEndpointRegion = props.destinationEndpointRegion;
        this.destinationEndpointUserName = props.destinationEndpointUserName;
        this.duplicateConflict = props.duplicateConflict;
        this.restoreDir = props.restoreDir;
        this.restoreHome = props.restoreHome;
        this.restoreObjects = props.restoreObjects;
        this.restoreTime = props.restoreTime;
        this.startTask = props.startTask;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            backupPlanId: this.backupPlanId,
            destinationEndpointInstanceType: this.destinationEndpointInstanceType,
            restoreTaskName: this.restoreTaskName,
            backupGatewayId: this.backupGatewayId,
            backupSetId: this.backupSetId,
            destinationEndpointDatabaseName: this.destinationEndpointDatabaseName,
            destinationEndpointInstanceId: this.destinationEndpointInstanceId,
            destinationEndpointIp: this.destinationEndpointIp,
            destinationEndpointOracleSid: this.destinationEndpointOracleSid,
            destinationEndpointPassword: this.destinationEndpointPassword,
            destinationEndpointPort: this.destinationEndpointPort,
            destinationEndpointRegion: this.destinationEndpointRegion,
            destinationEndpointUserName: this.destinationEndpointUserName,
            duplicateConflict: this.duplicateConflict,
            restoreDir: this.restoreDir,
            restoreHome: this.restoreHome,
            restoreObjects: this.restoreObjects,
            restoreTime: this.restoreTime,
            startTask: this.startTask,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosRestoreTaskPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
