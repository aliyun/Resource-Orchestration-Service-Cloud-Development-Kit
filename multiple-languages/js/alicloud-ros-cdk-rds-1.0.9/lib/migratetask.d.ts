import * as ros from '@alicloud/ros-cdk-core';
import { RosMigrateTask } from './rds.generated';
export { RosMigrateTask as MigrateTaskProperty };
/**
 * Properties for defining a `ALIYUN::RDS::MigrateTask`
 */
export interface MigrateTaskProps {
    /**
     * Property backupMode: The type of the migration task. Valid values:
     * FULL: specifies that full backup files are used to restore data.
     * UPDF: specifies that incremental backup files or log files are used to restore incremental data.
     */
    readonly backupMode: string | ros.IResolvable;
    /**
     * Property dbInstanceId: The ID of the instance.
     */
    readonly dbInstanceId: string | ros.IResolvable;
    /**
     * Property dbName: The name of the database that you want to restore.
     */
    readonly dbName: string | ros.IResolvable;
    /**
     * Property isOnlineDb: Specifies whether to bring the restored database online for user access. Note The value for SQL Server 2008 R2 is fixed to True.
     */
    readonly isOnlineDb: boolean | ros.IResolvable;
    /**
     * Property checkDbMode: The consistency check method of the database. Valid values:
     * SyncExecuteDBCheck: synchronous database check
     * AsyncExecuteDBCheck: asynchronous database check
     * Default value: AsyncExecuteDBCheck (compatible with SQL Server 2008 R2).
     * Note When IsOnlineDB is set to True, this value is valid.
     */
    readonly checkDbMode?: string | ros.IResolvable;
    /**
     * Property ossObjectPositions: The information of the backup file in the OSS bucket.
     * The values consist of three parts that are separated by colons (:):
     * The endpoint of the OSS bucket: oss-ap-southeast-1.aliyuncs.com.
     * The name of the OSS bucket: rdsmssqlsingapore.
     * The key of the backup file in the OSS bucket: autotest_2008R2_TestMigration_FULL.bak.
     * Note
     * This parameter is optional for instances that run SQL Server 2008 R2.
     * This parameter is required for instances that run a database engine later than SQL
     * Server 2008 R2.
     */
    readonly ossObjectPositions?: string | ros.IResolvable;
    /**
     * Property ossUrls: The shared URL of the backup file in the OSS bucket. The URL must be encoded.
     * If you specify multiple URLs, separate them with vertical bars (|) and then encode
     * them.
     * Note This parameter must be entered for instances that run SQL Server 2008 R2.
     */
    readonly ossUrls?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::RDS::MigrateTask`
 */
export declare class MigrateTask extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute MigrateTaskId: The ID of the migrate task.
     */
    readonly attrMigrateTaskId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::RDS::MigrateTask`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: MigrateTaskProps, enableResourcePropertyConstraint?: boolean);
}
