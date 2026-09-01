import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosDownload`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dbs-download
 */
export interface RosDownloadProps {
    /**
     * @Property formatType: The target format of the downloaded data. Valid values:
     * - CSV
     * - SQL
     * - Parquet
     * - Bson
     * - qp.xb
     * > This parameter is required. The `Bson` format is available only for MongoDB
     * instances. The `qp.xb` format is available only for ApsaraDB RDS for MySQL
     * instances.
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DBS::Download`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Download` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dbs-download
 */
export declare class RosDownload extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DBS::Download";
    /**
     * @Attribute BakSetId: The ID of the backup set.
     */
    readonly attrBakSetId: ros.IResolvable;
    /**
     * @Attribute DownloadAddressInfo: The download address information.
     */
    readonly attrDownloadAddressInfo: ros.IResolvable;
    /**
     * @Attribute InstanceName: The ID of the instance.
     */
    readonly attrInstanceName: ros.IResolvable;
    /**
     * @Attribute TaskId: The ID of the download task.
     */
    readonly attrTaskId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property formatType: The target format of the downloaded data. Valid values:
     * - CSV
     * - SQL
     * - Parquet
     * - Bson
     * - qp.xb
     * > This parameter is required. The `Bson` format is available only for MongoDB
     * instances. The `qp.xb` format is available only for ApsaraDB RDS for MySQL
     * instances.
     */
    formatType: string | ros.IResolvable;
    /**
     * @Property instanceName: The ID of the instance.
     */
    instanceName: string | ros.IResolvable;
    /**
     * @Property bakSetId: The ID of the backup set. You can call the DescribeBackups operation to query the ID of the backup set.
     * This parameter is required if the BakSetType parameter is set to full.
     */
    bakSetId: string | ros.IResolvable | undefined;
    /**
     * @Property bakSetSize: The size of the full backup set. Unit: bytes.
     * You can call the DescribeBackups operation to query the size of the full backup set.
     */
    bakSetSize: string | ros.IResolvable | undefined;
    /**
     * @Property bakSetType: The type of the download task. Valid values:
     * full: downloads a full backup set
     * pitr: downloads a backup set at a specific point in time.
     */
    bakSetType: string | ros.IResolvable | undefined;
    /**
     * @Property deleteBackupSetInOss: Whether to delete the backup set in OSS when deleting the stack.
     * Valid values: true|false, default is true.
     */
    deleteBackupSetInOss: boolean | ros.IResolvable | undefined;
    /**
     * @Property downloadAddressDuration: When the download target is a URL, set the link validity period.
     * The default URL validity period is 7200 seconds.
     * The effective duration range can be set from 300 seconds to 86400 seconds
     */
    downloadAddressDuration: number | ros.IResolvable | undefined;
    /**
     * @Property downloadPointInTime: The point in time at which the backup set is downloaded.
     * Specify a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
     * This parameter is required if the BakSetType parameter is set to pitr.
     */
    downloadPointInTime: string | ros.IResolvable | undefined;
    /**
     * @Property targetBucket: The name of the OSS bucket that is used to store the backup set.
     * This parameter is required if the TargetType parameter is set to OSS.
     * Make sure that your account is granted the AliyunDBSDefaultRole permission.
     * For more information, see Use RAM for resource authorization.
     * You can also grant permissions based on the operation instructions in the Resource Access Management (RAM) console.
     */
    targetBucket: string | ros.IResolvable | undefined;
    /**
     * @Property targetOssRegion: The region in which the OSS bucket resides.
     * This parameter is required if the TargetType parameter is set to OSS.
     */
    targetOssRegion: string | ros.IResolvable | undefined;
    /**
     * @Property targetPath: The destination path to which the backup set is downloaded.
     * This parameter is required if the TargetType parameter is set to OSS.
     */
    targetPath: string | ros.IResolvable | undefined;
    /**
     * @Property targetType: The type of the destination to which the backup set is downloaded.
     * Valid values: OSS|URL
     */
    targetType: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDownloadProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
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
     * @Property destinationEndpointInstanceType: The type of the destination endpoint. Valid values:
     * - RDS: an ApsaraDB RDS instance.
     * - ECS: a self-managed database hosted on an ECS instance.
     * - Express: a database connected over a leased line, VPN Gateway, or Smart Access
     * Gateway.
     * - Agent: a database connected via a backup gateway.
     * - DDS: an ApsaraDB for MongoDB (DDS) instance.
     * - Other: a database connected over the internet by using a public IP address and
     * port.
     * - dg: a self-managed database without a public endpoint, connected via Database
     * Gateway.
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
     * @Property destinationEndpointPassword: The password for the destination database account.
     * > This parameter is optional if the database engine is Redis, or if
     * `DestinationEndpointInstanceType` is set to `Agent` and the database engine is
     * MSSQL. In other scenarios, this parameter is required.
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
     * @Property destinationEndpointUserName: The username for the destination database account.
     * > This parameter is optional if the database engine is Redis, or if
     * `DestinationEndpointInstanceType` is set to `Agent` and the database engine is
     * MSSQL. In other scenarios, this parameter is required.
     */
    readonly destinationEndpointUserName?: string | ros.IResolvable;
    /**
     * @Property duplicateConflict: The handling method for conflicts between objects with the same name. Valid values:
     * failure: The object with the same name fails (default).
     * renamenew: renames an object with the same name.
     */
    readonly duplicateConflict?: string | ros.IResolvable;
    /**
     * @Property restoreDir: The restore directory. This parameter is required if
     * DestinationEndpointInstanceType is set to `Agent` and the database type is MySQL.
     */
    readonly restoreDir?: string | ros.IResolvable;
    /**
     * @Property restoreHome: Database Program Directory.
     */
    readonly restoreHome?: string | ros.IResolvable;
    /**
     * @Property restoreObjects: The objects to restore.
     * - This parameter is optional if `DestinationEndpointInstanceType` is set to
     * `Agent`. In other scenarios, this parameter is required.
     * - The value must be a JSON string in the following format: `[{ "DBName":
     * "source_database_name", "NewDBName": "destination_database_name" }]`
     * > You can use this API operation to restore data only at the database level. To
     * restore data at the table level, log on to the console.
     */
    readonly restoreObjects?: string | ros.IResolvable;
    /**
     * @Property restoreTime: The point-in-time for the restore, specified as a UNIX timestamp in milliseconds.
     */
    readonly restoreTime?: number | ros.IResolvable;
    /**
     * @Property startTask: Start restore task after creating a recovery task.
     */
    readonly startTask?: boolean | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DBS::RestoreTask`.
 * @Note This class does not contain additional functions, so it is recommended to use the `RestoreTask` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dbs-restoretask
 */
export declare class RosRestoreTask extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DBS::RestoreTask";
    /**
     * @Attribute RestoreTaskId: The ID of the restoration task.
     */
    readonly attrRestoreTaskId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property backupPlanId: The ID of the backup plan.
     */
    backupPlanId: string | ros.IResolvable;
    /**
     * @Property destinationEndpointInstanceType: The type of the destination endpoint. Valid values:
     * - RDS: an ApsaraDB RDS instance.
     * - ECS: a self-managed database hosted on an ECS instance.
     * - Express: a database connected over a leased line, VPN Gateway, or Smart Access
     * Gateway.
     * - Agent: a database connected via a backup gateway.
     * - DDS: an ApsaraDB for MongoDB (DDS) instance.
     * - Other: a database connected over the internet by using a public IP address and
     * port.
     * - dg: a self-managed database without a public endpoint, connected via Database
     * Gateway.
     */
    destinationEndpointInstanceType: string | ros.IResolvable;
    /**
     * @Property restoreTaskName: The name of the restoration task.
     */
    restoreTaskName: string | ros.IResolvable;
    /**
     * @Property backupGatewayId: The ID of the backup gateway.
     * NoteDestinationEndpointInstanceType if you set this parameter to agent, this parameter is required.
     */
    backupGatewayId: number | ros.IResolvable | undefined;
    /**
     * @Property backupSetId: The ID of the full backup set used for restoration, which is mutually exclusive to
     * RestoreTime.
     */
    backupSetId: string | ros.IResolvable | undefined;
    /**
     * @Property destinationEndpointDatabaseName: The name of the RDS database.
     * Note When the database type is PostgreSQL or MongoDB, this parameter is required.
     */
    destinationEndpointDatabaseName: string | ros.IResolvable | undefined;
    /**
     * @Property destinationEndpointInstanceId: The ID of the ApsaraDB RDS instance to query.
     * NoteDestinationEndpointInstanceType if the value is RDS, ECS, DDS, or Express, this parameter is required.
     */
    destinationEndpointInstanceId: string | ros.IResolvable | undefined;
    /**
     * @Property destinationEndpointIp: The endpoint used to connect to the database.
     * NoteDestinationEndpointInstanceType is express, agent, or other. This parameter is required.
     */
    destinationEndpointIp: string | ros.IResolvable | undefined;
    /**
     * @Property destinationEndpointOracleSid: The SID of the Oracle instance.
     * Note This parameter is required if the database type is Oracle.
     */
    destinationEndpointOracleSid: string | ros.IResolvable | undefined;
    /**
     * @Property destinationEndpointPassword: The password for the destination database account.
     * > This parameter is optional if the database engine is Redis, or if
     * `DestinationEndpointInstanceType` is set to `Agent` and the database engine is
     * MSSQL. In other scenarios, this parameter is required.
     */
    destinationEndpointPassword: string | ros.IResolvable | undefined;
    /**
     * @Property destinationEndpointPort: The port that is used to access the database of the primary MySQL server.
     * NoteDestinationEndpointInstanceType is in the format of express, agent, other, or ECS. This parameter is required.
     */
    destinationEndpointPort: number | ros.IResolvable | undefined;
    /**
     * @Property destinationEndpointRegion: The region of the database.
     * NoteDestinationEndpointInstanceType for RDS, ECS, DDS, Express, or Agent, this parameter is required.
     */
    destinationEndpointRegion: string | ros.IResolvable | undefined;
    /**
     * @Property destinationEndpointUserName: The username for the destination database account.
     * > This parameter is optional if the database engine is Redis, or if
     * `DestinationEndpointInstanceType` is set to `Agent` and the database engine is
     * MSSQL. In other scenarios, this parameter is required.
     */
    destinationEndpointUserName: string | ros.IResolvable | undefined;
    /**
     * @Property duplicateConflict: The handling method for conflicts between objects with the same name. Valid values:
     * failure: The object with the same name fails (default).
     * renamenew: renames an object with the same name.
     */
    duplicateConflict: string | ros.IResolvable | undefined;
    /**
     * @Property restoreDir: The restore directory. This parameter is required if
     * DestinationEndpointInstanceType is set to `Agent` and the database type is MySQL.
     */
    restoreDir: string | ros.IResolvable | undefined;
    /**
     * @Property restoreHome: Database Program Directory.
     */
    restoreHome: string | ros.IResolvable | undefined;
    /**
     * @Property restoreObjects: The objects to restore.
     * - This parameter is optional if `DestinationEndpointInstanceType` is set to
     * `Agent`. In other scenarios, this parameter is required.
     * - The value must be a JSON string in the following format: `[{ "DBName":
     * "source_database_name", "NewDBName": "destination_database_name" }]`
     * > You can use this API operation to restore data only at the database level. To
     * restore data at the table level, log on to the console.
     */
    restoreObjects: string | ros.IResolvable | undefined;
    /**
     * @Property restoreTime: The point-in-time for the restore, specified as a UNIX timestamp in milliseconds.
     */
    restoreTime: number | ros.IResolvable | undefined;
    /**
     * @Property startTask: Start restore task after creating a recovery task.
     */
    startTask: boolean | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRestoreTaskProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
