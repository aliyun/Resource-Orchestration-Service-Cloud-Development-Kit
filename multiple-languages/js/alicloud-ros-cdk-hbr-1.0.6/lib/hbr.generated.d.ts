import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::HBR::BackupClients`
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
 * A ROS template type:  `ALIYUN::HBR::BackupClients`
 */
export declare class RosBackupClients extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::HBR::BackupClients";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `ALIYUN::HBR::BackupClients`.
     *
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
 * Properties for defining a `ALIYUN::HBR::DbAgent`
 */
export interface RosDbAgentProps {
    /**
     * @Property instanceInfo: Instance infos
     */
    readonly instanceInfo: Array<RosDbAgent.InstanceInfoProperty | ros.IResolvable> | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::HBR::DbAgent`
 */
export declare class RosDbAgent extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::HBR::DbAgent";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `ALIYUN::HBR::DbAgent`.
     *
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
 * Properties for defining a `ALIYUN::HBR::DbPlan`
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
 * A ROS template type:  `ALIYUN::HBR::DbPlan`
 */
export declare class RosDbPlan extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::HBR::DbPlan";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `ALIYUN::HBR::DbPlan`.
     *
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
         * @Property entries: Backup database instance or databases or tables. For Oracle, use ["oracle://${instanceName}", "oracle://${instanceName}/archivelog"], ${instanceName} is the name of the oracle database instance, which can be get from dbAgent resource. For Mysql, use "mysql://${instanceName}". For SQL Server,  use ["mssql://${instanceName}/${databse1}", "mssql://${instanceName}/${databse2}"], ${databse} can be get from dbAgent resource(MSSQL)
         */
        readonly entries?: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Properties for defining a `ALIYUN::HBR::DbVault`
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
 * A ROS template type:  `ALIYUN::HBR::DbVault`
 */
export declare class RosDbVault extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::HBR::DbVault";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `ALIYUN::HBR::DbVault`.
     *
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
 * A ROS template type:  `ALIYUN::HBR::RestoreJob`
 */
export declare class RosRestoreJob extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::HBR::RestoreJob";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * @Property targetPath: Target path. For instance, "/".
     */
    targetPath: string | ros.IResolvable;
    /**
     * @Property vaultId: Vault ID
     */
    vaultId: string | ros.IResolvable;
    /**
     * Create a new `ALIYUN::HBR::RestoreJob`.
     *
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
//# sourceMappingURL=hbr.generated.d.ts.map