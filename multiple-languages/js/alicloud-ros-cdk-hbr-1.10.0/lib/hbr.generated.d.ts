import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosBackupClients`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-backupclients
 */
export interface RosBackupClientsProps {
    /**
     * @Property instanceIds: ID list of instances to install backup client
     */
    readonly instanceIds: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosBackupClients.TagsProperty[];
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::HBR::BackupClients`.
 * @Note This class does not contain additional functions, so it is recommended to use the `BackupClients` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-backupclients
 */
export declare class RosBackupClients extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::HBR::BackupClients";
    /**
     * @Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    readonly attrArn: ros.IResolvable;
    /**
     * @Attribute ClientIds: ID list of clients installed in instances
     */
    readonly attrClientIds: ros.IResolvable;
    /**
     * @Attribute InstanceIds: ID list of instances to install backup client
     */
    readonly attrInstanceIds: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceIds: ID list of instances to install backup client
     */
    instanceIds: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosBackupClients.TagsProperty[] | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosBackupClientsProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosBackupClients {
    /**
     * @stability external
     */
    interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosDbAgent`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-dbagent
 */
export interface RosDbAgentProps {
    /**
     * @Property instanceInfo: Instance infos
     */
    readonly instanceInfo: Array<RosDbAgent.InstanceInfoProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property crossAccountRoleName: The RAM role name that the original account created for cross-account backup operations.
     */
    readonly crossAccountRoleName?: string | ros.IResolvable;
    /**
     * @Property crossAccountType: The type of cross-account backup. Supported values: SELF_ACCOUNT: backup within the same account; CROSS_ACCOUNT: cross-account backup. Example: CROSS_ACCOUNT
     */
    readonly crossAccountType?: string | ros.IResolvable;
    /**
     * @Property crossAccountUserId: The user ID of the original account for cross-account backup operations.
     */
    readonly crossAccountUserId?: number | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::HBR::DbAgent`, which is used to install a Data Disaster Recovery client.
 * @Note This class does not contain additional functions, so it is recommended to use the `DbAgent` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-dbagent
 */
export declare class RosDbAgent extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::HBR::DbAgent";
    /**
     * @Attribute InstanceIds: Uni backup agent instance ids
     */
    readonly attrInstanceIds: ros.IResolvable;
    /**
     * @Attribute TaskId: Uni backup agent install task id.
     */
    readonly attrTaskId: ros.IResolvable;
    /**
     * @Attribute UniBackupInstanceDetails: Uni backup agent instance info details
     */
    readonly attrUniBackupInstanceDetails: ros.IResolvable;
    /**
     * @Attribute UniBackupInstances: Uni backup agent instance info
     */
    readonly attrUniBackupInstances: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceInfo: Instance infos
     */
    instanceInfo: Array<RosDbAgent.InstanceInfoProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property crossAccountRoleName: The RAM role name that the original account created for cross-account backup operations.
     */
    crossAccountRoleName: string | ros.IResolvable | undefined;
    /**
     * @Property crossAccountType: The type of cross-account backup. Supported values: SELF_ACCOUNT: backup within the same account; CROSS_ACCOUNT: cross-account backup. Example: CROSS_ACCOUNT
     */
    crossAccountType: string | ros.IResolvable | undefined;
    /**
     * @Property crossAccountUserId: The user ID of the original account for cross-account backup operations.
     */
    crossAccountUserId: number | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDbAgentProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosDbAgent {
    /**
     * @stability external
     */
    interface InstanceInfoProperty {
        /**
         * @Property userName: Database backup account username
         */
        readonly userName?: string | ros.IResolvable;
        /**
         * @Property instanceId: ECS instance id
         */
        readonly instanceId: string | ros.IResolvable;
        /**
         * @Property sourceType: Data source type, valid value: MYSQL, ORACLE, MSSQL
         */
        readonly sourceType: string | ros.IResolvable;
        /**
         * @Property password: Database backup account password
         */
        readonly password?: string | ros.IResolvable;
        /**
         * @Property authenticationType: verification method, valid value: INSTANCE, ACCESS_KEY
         */
        readonly authenticationType?: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosDbPlan`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-dbplan
 */
export interface RosDbPlanProps {
    /**
     * @Property dbPlanName: Display name of the backup plan.
     */
    readonly dbPlanName: string | ros.IResolvable;
    /**
     * @Property hostUuid: Uuid of the host of the database instance.
     */
    readonly hostUuid: string | ros.IResolvable;
    /**
     * @Property sourceType: Database type, allowed value: MYSQL, ORACLE, MSSQL
     */
    readonly sourceType: string | ros.IResolvable;
    /**
     * @Property vaultId: Vault ID to create backup plan, the backup data will be stored to the vault.
     */
    readonly vaultId: string | ros.IResolvable;
    /**
     * @Property continuousPlan: Continuous backup plan schedule. Use {   "type": "continuous" }.
     */
    readonly continuousPlan?: string | ros.IResolvable;
    /**
     * @Property cumulativePlan: Cumulative plan schedule, only for mssql. More details see FullPlan.
     */
    readonly cumulativePlan?: string | ros.IResolvable;
    /**
     * @Property fullPlan: Full backup plan schedule. daily: {"type": "daily", "start": "00:00:00", "interval": 3}, weekly {"type":"weekly","start": "03:00:00","days": [1,2,3,4,5],"interval": 1}, days can be 0 - 6, 0 means Sunday, and interval can be 1 - 52.
     */
    readonly fullPlan?: string | ros.IResolvable;
    /**
     * @Property incPlan: Incremental backup plan schedule. Only for mysql and oracle. More details see FullPlan.
     */
    readonly incPlan?: string | ros.IResolvable;
    /**
     * @Property instanceUuid: Uuid of database instance.
     */
    readonly instanceUuid?: string | ros.IResolvable;
    /**
     * @Property logPlan: Log backup plan schedule.More details see FullPlan.
     */
    readonly logPlan?: string | ros.IResolvable;
    /**
     * @Property maxRateLimit: Max rate limit for backup job,
     */
    readonly maxRateLimit?: number | ros.IResolvable;
    /**
     * @Property maxRetrySeconds: Max retry seconds on network failure.
     */
    readonly maxRetrySeconds?: number | ros.IResolvable;
    /**
     * @Property options: Backup options in json format, different for each type of database. For Oracle, use {"channels":4,"compression":"lzop","offline_backup":false,"archivelog_reserve_hours":24,"custom_commands":""}, "channels" means numbers of concurrent theads, "archivelog_reserve_hours" means how long before the archive log will be deleted after backup job completed, other paramters should use the default vaule. For Mysql, use {"channels":4,"compression":"lzop","del_binlog":false}, "del_binlog" means whether the binlog will be deleted after backup completed, only take effect for log or continuous backup. For SQL Server, use {\"channels\":4,\"verify\":false,\"compression\":\"lzop\",\"backup_new_databases\":false}.
     */
    readonly options?: string | ros.IResolvable;
    /**
     * @Property source: Which database instance or database will be backup.
     */
    readonly source?: RosDbPlan.SourceProperty | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::HBR::DbPlan`, which is used to create a backup plan.
 * @Note This class does not contain additional functions, so it is recommended to use the `DbPlan` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-dbplan
 */
export declare class RosDbPlan extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::HBR::DbPlan";
    /**
     * @Attribute ContinuousPlan: Continuous backup plan schedule. Use {   "type": "continuous" }.
     */
    readonly attrContinuousPlan: ros.IResolvable;
    /**
     * @Attribute ContinuousUuid: Uuid of continuous backup plan.
     */
    readonly attrContinuousUuid: ros.IResolvable;
    /**
     * @Attribute CumulativePlan: Cumulative plan schedule, only for mssql. More details see FullPlan.
     */
    readonly attrCumulativePlan: ros.IResolvable;
    /**
     * @Attribute CumulativeUuid: Uuid of cumulative plan.
     */
    readonly attrCumulativeUuid: ros.IResolvable;
    /**
     * @Attribute DbPlanName: Display name of the backup plan.
     */
    readonly attrDbPlanName: ros.IResolvable;
    /**
     * @Attribute FullPlan: Full backup plan schedule. daily: {"type": "daily", "start": "00:00:00", "interval": 3}, weekly {"type":"weekly","start": "03:00:00","days": [1,2,3,4,5],"interval": 1}, days can be 0 - 6, 0 means Sunday, and interval can be 1 - 52.
     */
    readonly attrFullPlan: ros.IResolvable;
    /**
     * @Attribute FullUuid: Uuid of full backup plan.
     */
    readonly attrFullUuid: ros.IResolvable;
    /**
     * @Attribute HostUuid: Uuid of the host of the database instance.
     */
    readonly attrHostUuid: ros.IResolvable;
    /**
     * @Attribute IncPlan: Incremental backup plan schedule. Only for mysql and oracle. More details see FullPlan.
     */
    readonly attrIncPlan: ros.IResolvable;
    /**
     * @Attribute IncUuid: Uuid of the incremental bakcup plan.
     */
    readonly attrIncUuid: ros.IResolvable;
    /**
     * @Attribute InstanceUuid: Uuid of database instance.
     */
    readonly attrInstanceUuid: ros.IResolvable;
    /**
     * @Attribute LogPlan: Log backup plan schedule.More details see FullPlan.
     */
    readonly attrLogPlan: ros.IResolvable;
    /**
     * @Attribute LogUuid: Uuid of the log backup plan.
     */
    readonly attrLogUuid: ros.IResolvable;
    /**
     * @Attribute MaxRateLimit: Max rate limit for backup job,
     */
    readonly attrMaxRateLimit: ros.IResolvable;
    /**
     * @Attribute MaxRetrySeconds: Max retry seconds on network failure.
     */
    readonly attrMaxRetrySeconds: ros.IResolvable;
    /**
     * @Attribute Options: Backup options in json format, different for each type of database. For Oracle, use {"channels":4,"compression":"lzop","offline_backup":false,"archivelog_reserve_hours":24,"custom_commands":""}, "channels" means numbers of concurrent theads, "archivelog_reserve_hours" means how long before the archive log will be deleted after backup job completed, other paramters should use the default vaule. For Mysql, use {"channels":4,"compression":"lzop","del_binlog":false}, "del_binlog" means whether the binlog will be deleted after backup completed, only take effect for log or continuous backup. For SQL Server, use {\"channels\":4,\"verify\":false,\"compression\":\"lzop\",\"backup_new_databases\":false}.
     */
    readonly attrOptions: ros.IResolvable;
    /**
     * @Attribute PlanId: Id of the backup plan.
     */
    readonly attrPlanId: ros.IResolvable;
    /**
     * @Attribute SourceType: Database type, allowed value: MYSQL, ORACLE, MSSQL
     */
    readonly attrSourceType: ros.IResolvable;
    /**
     * @Attribute Target: Target vault to backup.
     */
    readonly attrTarget: ros.IResolvable;
    /**
     * @Attribute VaultId: Vault ID to create backup plan, the backup data will be stored to the vault.
     */
    readonly attrVaultId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dbPlanName: Display name of the backup plan.
     */
    dbPlanName: string | ros.IResolvable;
    /**
     * @Property hostUuid: Uuid of the host of the database instance.
     */
    hostUuid: string | ros.IResolvable;
    /**
     * @Property sourceType: Database type, allowed value: MYSQL, ORACLE, MSSQL
     */
    sourceType: string | ros.IResolvable;
    /**
     * @Property vaultId: Vault ID to create backup plan, the backup data will be stored to the vault.
     */
    vaultId: string | ros.IResolvable;
    /**
     * @Property continuousPlan: Continuous backup plan schedule. Use {   "type": "continuous" }.
     */
    continuousPlan: string | ros.IResolvable | undefined;
    /**
     * @Property cumulativePlan: Cumulative plan schedule, only for mssql. More details see FullPlan.
     */
    cumulativePlan: string | ros.IResolvable | undefined;
    /**
     * @Property fullPlan: Full backup plan schedule. daily: {"type": "daily", "start": "00:00:00", "interval": 3}, weekly {"type":"weekly","start": "03:00:00","days": [1,2,3,4,5],"interval": 1}, days can be 0 - 6, 0 means Sunday, and interval can be 1 - 52.
     */
    fullPlan: string | ros.IResolvable | undefined;
    /**
     * @Property incPlan: Incremental backup plan schedule. Only for mysql and oracle. More details see FullPlan.
     */
    incPlan: string | ros.IResolvable | undefined;
    /**
     * @Property instanceUuid: Uuid of database instance.
     */
    instanceUuid: string | ros.IResolvable | undefined;
    /**
     * @Property logPlan: Log backup plan schedule.More details see FullPlan.
     */
    logPlan: string | ros.IResolvable | undefined;
    /**
     * @Property maxRateLimit: Max rate limit for backup job,
     */
    maxRateLimit: number | ros.IResolvable | undefined;
    /**
     * @Property maxRetrySeconds: Max retry seconds on network failure.
     */
    maxRetrySeconds: number | ros.IResolvable | undefined;
    /**
     * @Property options: Backup options in json format, different for each type of database. For Oracle, use {"channels":4,"compression":"lzop","offline_backup":false,"archivelog_reserve_hours":24,"custom_commands":""}, "channels" means numbers of concurrent theads, "archivelog_reserve_hours" means how long before the archive log will be deleted after backup job completed, other paramters should use the default vaule. For Mysql, use {"channels":4,"compression":"lzop","del_binlog":false}, "del_binlog" means whether the binlog will be deleted after backup completed, only take effect for log or continuous backup. For SQL Server, use {\"channels\":4,\"verify\":false,\"compression\":\"lzop\",\"backup_new_databases\":false}.
     */
    options: string | ros.IResolvable | undefined;
    /**
     * @Property source: Which database instance or database will be backup.
     */
    source: RosDbPlan.SourceProperty | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDbPlanProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosDbPlan {
    /**
     * @stability external
     */
    interface SourceProperty {
        /**
         * @Property entries: Backup database instance or databases or tables. For Oracle, use ["oracle:\/\/${instanceName}", "oracle:\/\/${instanceName}\/archivelog"], ${instanceName} is the name of the oracle database instance, which can be get from dbAgent resource. For Mysql, use "mysql:\/\/${instanceName}". For SQL Server,  use ["mssql:\/\/${instanceName}\/${databse1}", "mssql:\/\/${instanceName}\/${databse2}"], ${databse} can be get from dbAgent resource(MSSQL)
         */
        readonly entries?: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosDbVault`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-dbvault
 */
export interface RosDbVaultProps {
    /**
     * @Property retentionDays: Data retention days of the vault. Data will be deleted when it's older than this time.
     */
    readonly retentionDays: number | ros.IResolvable;
    /**
     * @Property vaultName: Display name of the vault.
     */
    readonly vaultName: string | ros.IResolvable;
    /**
     * @Property vaultRegionId: The region ID to create the vault.
     */
    readonly vaultRegionId: string | ros.IResolvable;
    /**
     * @Property description: Description of the vault.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosDbVault.TagsProperty[];
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::HBR::DbVault`, which is used to create a mirror vault.
 * @Note This class does not contain additional functions, so it is recommended to use the `DbVault` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-dbvault
 */
export declare class RosDbVault extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::HBR::DbVault";
    /**
     * @Attribute Description: Description of the vault.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute RetentionDays: Data retention days of the vault. Data will be deleted when it's older than this time.
     */
    readonly attrRetentionDays: ros.IResolvable;
    /**
     * @Attribute VaultId: Vault ID.
     */
    readonly attrVaultId: ros.IResolvable;
    /**
     * @Attribute VaultName: Display name of the vault.
     */
    readonly attrVaultName: ros.IResolvable;
    /**
     * @Attribute VaultRegionId: The region ID to create the vault.
     */
    readonly attrVaultRegionId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property retentionDays: Data retention days of the vault. Data will be deleted when it's older than this time.
     */
    retentionDays: number | ros.IResolvable;
    /**
     * @Property vaultName: Display name of the vault.
     */
    vaultName: string | ros.IResolvable;
    /**
     * @Property vaultRegionId: The region ID to create the vault.
     */
    vaultRegionId: string | ros.IResolvable;
    /**
     * @Property description: Description of the vault.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosDbVault.TagsProperty[] | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDbVaultProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosDbVault {
    /**
     * @stability external
     */
    interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosRestoreJob`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-restorejob
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
     * @Property targetPath: Target path. For instance, "\/".
     */
    readonly targetPath: string | ros.IResolvable;
    /**
     * @Property vaultId: Vault ID
     */
    readonly vaultId: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::HBR::RestoreJob`.
 * @Note This class does not contain additional functions, so it is recommended to use the `RestoreJob` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-restorejob
 */
export declare class RosRestoreJob extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::HBR::RestoreJob";
    /**
     * @Attribute ErrorMessage: Error message of restore job
     */
    readonly attrErrorMessage: ros.IResolvable;
    /**
     * @Attribute RestoreId: Restore job ID
     */
    readonly attrRestoreId: ros.IResolvable;
    /**
     * @Attribute RestoreType: Restore type
     */
    readonly attrRestoreType: ros.IResolvable;
    /**
     * @Attribute SourceType: Source type
     */
    readonly attrSourceType: ros.IResolvable;
    /**
     * @Attribute Status: Restore job status
     */
    readonly attrStatus: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property restoreType: Restore type
     */
    restoreType: string | ros.IResolvable;
    /**
     * @Property snapshotId: Snapshot ID
     */
    snapshotId: string | ros.IResolvable;
    /**
     * @Property sourceClientId: Source client ID. It should be provided when SourceType=FILE.
     */
    sourceClientId: string | ros.IResolvable;
    /**
     * @Property sourceInstanceId: Source instance ID. It should be provided when SourceType=ECS_FILE.
     */
    sourceInstanceId: string | ros.IResolvable;
    /**
     * @Property sourceType: Source type
     */
    sourceType: string | ros.IResolvable;
    /**
     * @Property targetClientId: Target client ID. It should be provided when RestoreType=FILE.
     */
    targetClientId: string | ros.IResolvable;
    /**
     * @Property targetInstanceId: Target instance ID. It should be provided when RestoreType=ECS_FILE.
     */
    targetInstanceId: string | ros.IResolvable;
    /**
     * @Property targetPath: Target path. For instance, "\/".
     */
    targetPath: string | ros.IResolvable;
    /**
     * @Property vaultId: Vault ID
     */
    vaultId: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRestoreJobProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosVault`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-vault
 */
export interface RosVaultProps {
    /**
     * @Property vaultName: The name of the backup vault. The name must be 1 to 64 characters in length.
     */
    readonly vaultName: string | ros.IResolvable;
    /**
     * @Property vaultType: The type of the backup vault. Valid values:
     * - **STANDARD**: standard backup vault.
     * - **OTS_BACKUP**: backup vault for Tablestore.
     */
    readonly vaultType: string | ros.IResolvable;
    /**
     * @Property description: The description of the backup vault. The description must be 0 to 255 characters in length.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property encryptType: The method that is used to encrypt the source data. This parameter is valid only if you set the VaultType parameter to STANDARD or OTS_BACKUP.
     * Valid values:- **HBR_PRIVATE**: The source data is encrypted by using the built-in encryption method of Hybrid Backup Recovery (HBR).
     * - **KMS**: The source data is encrypted by using Key Management Service (KMS).
     */
    readonly encryptType?: string | ros.IResolvable;
    /**
     * @Property kmsKeyId: The customer master key (CMK) created in KMS or the alias of the key. This parameter is required only if you set the EncryptType parameter to KMS.
     */
    readonly kmsKeyId?: string | ros.IResolvable;
    /**
     * @Property redundancyType: The data redundancy type of the backup vault. Valid values:
     * - **LRS**: Locally redundant storage (LRS) is enabled for the backup vault. HBR stores the copies of each object on multiple devices of different facilities in the same zone. This way, HBR ensures data durability and availability even if hardware failures occur.
     * - **ZRS**: Zone-redundant storage (ZRS) is enabled for the backup vault. HBR uses the multi-zone mechanism to distribute data across three zones within the same region. If a zone fails, the data that is stored in the other two zones is still accessible.
     */
    readonly redundancyType?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property tags: Tags of The resource attribute field representing the resource tag..
     */
    readonly tags?: RosVault.TagsProperty[];
    /**
     * @Property vaultStorageClass: The storage type of the backup vault. The value is only **STANDARD**, which indicates STANDARD storage.
     */
    readonly vaultStorageClass?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::HBR::Vault`, which is used to create a backup vault.
 * @Note This class does not contain additional functions, so it is recommended to use the `Vault` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-vault
 */
export declare class RosVault extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::HBR::Vault";
    /**
     * @Attribute BackupPlanStatistics: The statistics of backup plans that use the backup vault.
     */
    readonly attrBackupPlanStatistics: ros.IResolvable;
    /**
     * @Attribute BytesDone: The amount of data that is backed up. Unit: bytes.
     */
    readonly attrBytesDone: ros.IResolvable;
    /**
     * @Attribute CreateTime: The time when the backup vault was created. This value is a UNIX timestamp. Unit: seconds.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute Dedup: Indicates whether the deduplication feature is enabled.
     */
    readonly attrDedup: ros.IResolvable;
    /**
     * @Attribute Description: The description of the backup vault.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute IndexAvailable: Indicates whether indexes are available. Indexes are available when they are not being updated.
     */
    readonly attrIndexAvailable: ros.IResolvable;
    /**
     * @Attribute IndexLevel: The index level.
- **OFF**: No indexes are created.
- **META**: Metadata indexes are created.
- **ALL**: Full-text indexes are created.
     */
    readonly attrIndexLevel: ros.IResolvable;
    /**
     * @Attribute IndexUpdateTime: The time when the index was updated.
     */
    readonly attrIndexUpdateTime: ros.IResolvable;
    /**
     * @Attribute LatestReplicationTime: The time when the last remote backup was synchronized. This value is a UNIX timestamp. Unit: seconds.
     */
    readonly attrLatestReplicationTime: ros.IResolvable;
    /**
     * @Attribute PaymentType: PaymentType.
     */
    readonly attrPaymentType: ros.IResolvable;
    /**
     * @Attribute RedundancyType: The data redundancy type of the backup vault. Valid values:
- **LRS**: Locally redundant storage (LRS) is enabled for the backup vault. HBR stores the copies of each object on multiple devices of different facilities in the same zone. This way, HBR ensures data durability and availability even if hardware failures occur.
- **ZRS**: Zone-redundant storage (ZRS) is enabled for the backup vault. HBR uses the multi-zone mechanism to distribute data across three zones within the same region. If a zone fails, the data that is stored in the other two zones is still accessible.
     */
    readonly attrRedundancyType: ros.IResolvable;
    /**
     * @Attribute Replication: Indicates whether the backup vault is a remote backup vault. Valid values:
- **true**: The backup vault is a remote backup vault.
- **false**: The backup vault is an on-premises backup vault.
     */
    readonly attrReplication: ros.IResolvable;
    /**
     * @Attribute ReplicationProgress: The progress of data synchronization from the backup vault to the mirror vault.
     */
    readonly attrReplicationProgress: ros.IResolvable;
    /**
     * @Attribute ReplicationSourceRegionId: The ID of the region where the remote backup vault resides.
     */
    readonly attrReplicationSourceRegionId: ros.IResolvable;
    /**
     * @Attribute ReplicationSourceVaultId: The ID of the source vault that corresponds to the remote backup vault.
     */
    readonly attrReplicationSourceVaultId: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * @Attribute Retention: The retention period of the backup vault. Unit: days.
     */
    readonly attrRetention: ros.IResolvable;
    /**
     * @Attribute SearchEnabled: Indicates whether the backup search feature is enabled.
     */
    readonly attrSearchEnabled: ros.IResolvable;
    /**
     * @Attribute SourceTypes: The information about the data source.
     */
    readonly attrSourceTypes: ros.IResolvable;
    /**
     * @Attribute StorageSize: The usage of the backup vault. Unit: bytes.
     */
    readonly attrStorageSize: ros.IResolvable;
    /**
     * @Attribute Tags: The tags of the backup vault.
     */
    readonly attrTags: ros.IResolvable;
    /**
     * @Attribute TrialInfo: The free trial information.
     */
    readonly attrTrialInfo: ros.IResolvable;
    /**
     * @Attribute UpdatedTime: The time when the backup vault was updated. This value is a UNIX timestamp. Unit: seconds.
     */
    readonly attrUpdatedTime: ros.IResolvable;
    /**
     * @Attribute VaultId: The ID of the backup vault.
     */
    readonly attrVaultId: ros.IResolvable;
    /**
     * @Attribute VaultName: The name of the backup vault.
     */
    readonly attrVaultName: ros.IResolvable;
    /**
     * @Attribute VaultStatusMessage: The status message that is returned when the backup vault is in the ERROR state. This parameter is available only for remote backup vaults. Valid values:
- **UNKNOWN_ERROR*: An unknown error occurs.
- **SOURCE_VAULT_ALREADY_HAS_REPLICATION**: A mirror vault is configured for the source vault.
     */
    readonly attrVaultStatusMessage: ros.IResolvable;
    /**
     * @Attribute VaultStorageClass: The storage type of the backup vault. Valid value: **STANDARD**, which indicates standard storage.
     */
    readonly attrVaultStorageClass: ros.IResolvable;
    /**
     * @Attribute VaultType: The type of the backup vault. Valid value: **STANDARD**, which indicates a standard backup vault.
     */
    readonly attrVaultType: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property vaultName: The name of the backup vault. The name must be 1 to 64 characters in length.
     */
    vaultName: string | ros.IResolvable;
    /**
     * @Property vaultType: The type of the backup vault. Valid values:
     * - **STANDARD**: standard backup vault.
     * - **OTS_BACKUP**: backup vault for Tablestore.
     */
    vaultType: string | ros.IResolvable;
    /**
     * @Property description: The description of the backup vault. The description must be 0 to 255 characters in length.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property encryptType: The method that is used to encrypt the source data. This parameter is valid only if you set the VaultType parameter to STANDARD or OTS_BACKUP.
     * Valid values:- **HBR_PRIVATE**: The source data is encrypted by using the built-in encryption method of Hybrid Backup Recovery (HBR).
     * - **KMS**: The source data is encrypted by using Key Management Service (KMS).
     */
    encryptType: string | ros.IResolvable | undefined;
    /**
     * @Property kmsKeyId: The customer master key (CMK) created in KMS or the alias of the key. This parameter is required only if you set the EncryptType parameter to KMS.
     */
    kmsKeyId: string | ros.IResolvable | undefined;
    /**
     * @Property redundancyType: The data redundancy type of the backup vault. Valid values:
     * - **LRS**: Locally redundant storage (LRS) is enabled for the backup vault. HBR stores the copies of each object on multiple devices of different facilities in the same zone. This way, HBR ensures data durability and availability even if hardware failures occur.
     * - **ZRS**: Zone-redundant storage (ZRS) is enabled for the backup vault. HBR uses the multi-zone mechanism to distribute data across three zones within the same region. If a zone fails, the data that is stored in the other two zones is still accessible.
     */
    redundancyType: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags of The resource attribute field representing the resource tag..
     */
    tags: RosVault.TagsProperty[] | undefined;
    /**
     * @Property vaultStorageClass: The storage type of the backup vault. The value is only **STANDARD**, which indicates STANDARD storage.
     */
    vaultStorageClass: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosVaultProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosVault {
    /**
     * @stability external
     */
    interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
