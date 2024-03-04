import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosAITask`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-aitask
 */
export interface RosAITaskProps {
    /**
     * @Property dbClusterId: The ID of the DB cluster.
     */
    readonly dbClusterId: string | ros.IResolvable;
    /**
     * @Property password: The password of the database account that enables the PolarDB for AI function is required.
     */
    readonly password: string | ros.IResolvable;
    /**
     * @Property username: The database account that enables the PolarDB for AI function is required.
     */
    readonly username: string | ros.IResolvable;
    /**
     * @Property nodeType: The type of the node. Valid values:
     * DLNode: AI node(default).
     * SearchNode: Search ai node.
     */
    readonly nodeType?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::POLARDB::AITask`, which is used to enable the PolarDB for AI feature.
 * @Note This class does not contain additional functions, so it is recommended to use the `AITask` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-aitask
 */
export declare class RosAITask extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::POLARDB::AITask";
    /**
     * @Attribute DBClusterId: The ID of the DB cluster.
     */
    readonly attrDbClusterId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dbClusterId: The ID of the DB cluster.
     */
    dbClusterId: string | ros.IResolvable;
    /**
     * @Property password: The password of the database account that enables the PolarDB for AI function is required.
     */
    password: string | ros.IResolvable;
    /**
     * @Property username: The database account that enables the PolarDB for AI function is required.
     */
    username: string | ros.IResolvable;
    /**
     * @Property nodeType: The type of the node. Valid values:
     * DLNode: AI node(default).
     * SearchNode: Search ai node.
     */
    nodeType: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAITaskProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosAccount`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-account
 */
export interface RosAccountProps {
    /**
     * @Property accountName: The name of the database account. The name must comply with the following rules:
     * - It must start with a lowercase letter and consist of lowercase letters, digits, and underscores (_).
     * - It can be up to 16 characters in length.
     */
    readonly accountName: string | ros.IResolvable;
    /**
     * @Property accountPassword: The password of the database account. The password must comply with the following rules:
     * - It must consist of uppercase letters, lowercase letters, digits, and special characters.
     * - Special characters include exclamation points (!), number signs (#), dollar signs ($), percent signs (%), carets (^), ampersands (&), asterisks (*), parentheses (()), underscores (_), plus signs (+), hyphens (-), and equal signs (=).
     * - It must be 8 to 32 characters in length.
     */
    readonly accountPassword: string | ros.IResolvable;
    /**
     * @Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a database account is to be created.
     */
    readonly dbClusterId: string | ros.IResolvable;
    /**
     * @Property accountDescription: The description of the database account. The description must comply with the following rules:
     * - It cannot start with http:\/\/ or https:\/\/.
     * - It must be 2 to 256 characters in length.
     */
    readonly accountDescription?: string | ros.IResolvable;
    /**
     * @Property accountPrivilege: The permissions of the database account on the database. Valid values:
     * ReadWrite: has read and write permissions on the database.
     * ReadOnly: has the read-only permission on the database.
     * DMLOnly: runs only data manipulation language (DML) statements.
     * DDLOnly: runs only data definition language (DDL) statements.
     * Default value: ReadWrite.
     * Separate multiple permissions with a comma (,).
     */
    readonly accountPrivilege?: string | ros.IResolvable;
    /**
     * @Property accountType: The type of the database account. Valid values:
     * - Normal: standard account
     * - Super: privileged account
     * Default value: Super.
     * Currently, POLARDB for PostgreSQL and POLARDB compatible with Oracle do not support standard accounts.
     * You can create only one privileged account for an ApsaraDB for POLARDB cluster.
     */
    readonly accountType?: string | ros.IResolvable;
    /**
     * @Property dbName: The name of the database whose access permissions are to be granted to the database account. Separate multiple databases with a comma (,).
     */
    readonly dbName?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::POLARDB::Account`, which is used to create a database account for a specified PolarDB cluster.
 * @Note This class does not contain additional functions, so it is recommended to use the `Account` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-account
 */
export declare class RosAccount extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::POLARDB::Account";
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property accountName: The name of the database account. The name must comply with the following rules:
     * - It must start with a lowercase letter and consist of lowercase letters, digits, and underscores (_).
     * - It can be up to 16 characters in length.
     */
    accountName: string | ros.IResolvable;
    /**
     * @Property accountPassword: The password of the database account. The password must comply with the following rules:
     * - It must consist of uppercase letters, lowercase letters, digits, and special characters.
     * - Special characters include exclamation points (!), number signs (#), dollar signs ($), percent signs (%), carets (^), ampersands (&), asterisks (*), parentheses (()), underscores (_), plus signs (+), hyphens (-), and equal signs (=).
     * - It must be 8 to 32 characters in length.
     */
    accountPassword: string | ros.IResolvable;
    /**
     * @Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a database account is to be created.
     */
    dbClusterId: string | ros.IResolvable;
    /**
     * @Property accountDescription: The description of the database account. The description must comply with the following rules:
     * - It cannot start with http:\/\/ or https:\/\/.
     * - It must be 2 to 256 characters in length.
     */
    accountDescription: string | ros.IResolvable | undefined;
    /**
     * @Property accountPrivilege: The permissions of the database account on the database. Valid values:
     * ReadWrite: has read and write permissions on the database.
     * ReadOnly: has the read-only permission on the database.
     * DMLOnly: runs only data manipulation language (DML) statements.
     * DDLOnly: runs only data definition language (DDL) statements.
     * Default value: ReadWrite.
     * Separate multiple permissions with a comma (,).
     */
    accountPrivilege: string | ros.IResolvable | undefined;
    /**
     * @Property accountType: The type of the database account. Valid values:
     * - Normal: standard account
     * - Super: privileged account
     * Default value: Super.
     * Currently, POLARDB for PostgreSQL and POLARDB compatible with Oracle do not support standard accounts.
     * You can create only one privileged account for an ApsaraDB for POLARDB cluster.
     */
    accountType: string | ros.IResolvable | undefined;
    /**
     * @Property dbName: The name of the database whose access permissions are to be granted to the database account. Separate multiple databases with a comma (,).
     */
    dbName: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAccountProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosAccountPrivilege`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-accountprivilege
 */
export interface RosAccountPrivilegeProps {
    /**
     * @Property accountName: The name of the database account to be granted access permissions.
     */
    readonly accountName: string | ros.IResolvable;
    /**
     * @Property accountPrivilege: The permissions of the database account on the database. Valid values:
     * - ReadWrite: has read and write permissions on the database.
     * - ReadOnly: has the read-only permission on the database.
     * - DMLOnly: runs only data manipulation language (DML) statements.
     * - DDLOnly: runs only data definition language (DDL) statements.
     * The number of account permissions specified by the AccountPrivilege parameter must be the same as that of database names specified by the DBName parameter. Each account permission must correspond to a database name in sequence.
     * Separate multiple permissions with a comma (,).
     */
    readonly accountPrivilege: string | ros.IResolvable;
    /**
     * @Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster to which a database account belongs.
     */
    readonly dbClusterId: string | ros.IResolvable;
    /**
     * @Property dbName: The name of the database whose access permissions are to be granted to the database account.
     * You can grant access permissions on one or more databases to the database account.
     * Separate multiple databases with a comma (,).
     */
    readonly dbName: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::POLARDB::AccountPrivilege`, which is used to grant access permissions on one or more databases in a specified ApsaraDB for POLARDB cluster to a standard account.
 * @Note This class does not contain additional functions, so it is recommended to use the `AccountPrivilege` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-accountprivilege
 */
export declare class RosAccountPrivilege extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::POLARDB::AccountPrivilege";
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property accountName: The name of the database account to be granted access permissions.
     */
    accountName: string | ros.IResolvable;
    /**
     * @Property accountPrivilege: The permissions of the database account on the database. Valid values:
     * - ReadWrite: has read and write permissions on the database.
     * - ReadOnly: has the read-only permission on the database.
     * - DMLOnly: runs only data manipulation language (DML) statements.
     * - DDLOnly: runs only data definition language (DDL) statements.
     * The number of account permissions specified by the AccountPrivilege parameter must be the same as that of database names specified by the DBName parameter. Each account permission must correspond to a database name in sequence.
     * Separate multiple permissions with a comma (,).
     */
    accountPrivilege: string | ros.IResolvable;
    /**
     * @Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster to which a database account belongs.
     */
    dbClusterId: string | ros.IResolvable;
    /**
     * @Property dbName: The name of the database whose access permissions are to be granted to the database account.
     * You can grant access permissions on one or more databases to the database account.
     * Separate multiple databases with a comma (,).
     */
    dbName: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAccountPrivilegeProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosDBCluster`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbcluster
 */
export interface RosDBClusterProps {
    /**
     * @Property dbNodeClass: The node specifications of the cluster. For more information, see Specifications and pricing.
     */
    readonly dbNodeClass: string | ros.IResolvable;
    /**
     * @Property dbType: Database type, value:
     * MySQL
     * PostgreSQL
     * Oracle
     */
    readonly dbType: string | ros.IResolvable;
    /**
     * @Property dbVersion: The version of the database. Valid values:
     * MySQL: 5.6, 5.7 or 8.0
     * PostgreSQL: 11, 14
     * Oracle: 11, 14
     */
    readonly dbVersion: string | ros.IResolvable;
    /**
     * @Property payType: The billing method of the cluster. Valid values:
     * Postpaid: pay-as-you-go
     * Prepaid: subscription
     */
    readonly payType: string | ros.IResolvable;
    /**
     * @Property allowShutDown: Whether to turn on No activity pause. The default is false.
     */
    readonly allowShutDown?: boolean | ros.IResolvable;
    /**
     * @Property architecture: The architecture of CPU. Valid values:
     * X86
     * ARM
     */
    readonly architecture?: string | ros.IResolvable;
    /**
     * @Property autoRenewPeriod: Set the cluster auto renewal time. Valid values: 1, 2, 3, 6, 12, 24, 36. Default to 1.
     */
    readonly autoRenewPeriod?: number | ros.IResolvable;
    /**
     * @Property backupRetentionPolicyOnClusterDeletion: The backup set retention policy when deleting a cluster, the value range is as follows:
     * ALL: Keep all backups permanently.
     * LATEST: Permanently keep the last backup (automatic backup before deletion).
     * NONE: The backup set is not retained when the cluster is deleted.
     * When creating a cluster, the default value is NONE, that is, the backup set is not retained when the cluster is deleted.
     * Note: This parameter takes effect only when the value of DBType is MySQL.
     */
    readonly backupRetentionPolicyOnClusterDeletion?: string | ros.IResolvable;
    /**
     * @Property cloneDataPoint: The time point of data to be cloned. Valid values:
     * LATEST: clones data of the latest time point.
     * <BackupID>: clones historical backup data. Specify the ID of the specific backup set.
     * <Timestamp>: clones data of a historical time point. Specify the specific time in
     * the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
     * Default value: LATEST.
     * Note
     * This parameter takes effect only when the DBType parameter is set to MySQL, the DBVersion parameter is set to 5.6, and the CreationOption parameter is set to CloneFromRDS or CloneFromPolarDB.
     * If the CreationOption parameter is set to CloneFromRDS, the value of this parameter must be LATEST.
     */
    readonly cloneDataPoint?: string | ros.IResolvable;
    /**
     * @Property clusterNetworkType: The network type of the cluster. Currently, only VPC is supported. Default value: VPC.
     */
    readonly clusterNetworkType?: string | ros.IResolvable;
    /**
     * @Property coldStorageOption: The option of cold storage.
     */
    readonly coldStorageOption?: RosDBCluster.ColdStorageOptionProperty | ros.IResolvable;
    /**
     * @Property creationCategory: Cluster series. The value could be Normal (standard version), Basic and ArchiveNormal.
     */
    readonly creationCategory?: string | ros.IResolvable;
    /**
     * @Property creationOption: The method for creating an ApsaraDB for POLARDB cluster. Valid values:
     * Normal: creates an ApsaraDB for POLARDB cluster.
     * CloneFromPolarDB: clones data from an existing ApsaraDB for POLARDB cluster to a new ApsaraDB for POLARDB cluster.
     * CloneFromRDS: clones data from an existing ApsaraDB for RDS instance to a new ApsaraDB
     * for POLARDB cluster.
     * MigrationFromRDS: migrates data from an existing ApsaraDB for RDS instance to a new ApsaraDB for POLARDB cluster. The created ApsaraDB for POLARDB cluster is in read-only mode and has binary logs enabled by default.
     * CreateGdnStandby: Create a secondary cluster.
     * Default value: Normal.
     * Note:
     * When DBType is MySQL and DBVersion is 5.6, this parameter can be specified as CloneFromRDS or MigrationFromRDS.
     * When DBType is MySQL and DBVersion is 8.0, this parameter can be specified as CreateGdnStandby.
     */
    readonly creationOption?: string | ros.IResolvable;
    /**
     * @Property dbClusterDescription: The description of the cluster. The description must comply with the following rules:
     * It must start with a Chinese character or an English letter.
     * It can contain Chinese and English characters, digits, underscores (_), and hyphens (-).
     * It cannot start with http:\/\/ or https:\/\/.
     * It must be 2 to 256 characters in length.
     */
    readonly dbClusterDescription?: string | ros.IResolvable;
    /**
     * @Property dbClusterParameters: Modifies the parameters of a the PolarDB cluster.
     */
    readonly dbClusterParameters?: RosDBCluster.DBClusterParametersProperty | ros.IResolvable;
    /**
     * @Property dbMinorVersion: The minor version of the cluster. Valid values:
     * 8.0.2
     * 8.0.1
     * This parameter is valid only when the DBType parameter is set to MySQL and the DBVersion parameter is set to 8.0.
     */
    readonly dbMinorVersion?: string | ros.IResolvable;
    /**
     * @Property dbNodeNum: The number of Standard Edition nodes. Default value: 1. Valid values:
     * 1: only one primary node.
     * 2: one read-only node and one primary node.
     */
    readonly dbNodeNum?: number | ros.IResolvable;
    /**
     * @Property defaultTimeZone: Set up a time zone (UTC), the value range is as follows:
     * System:  The default time zone is the same as the time zone where the region is located. This is default value.
     * Other pickable value range is from -12:00 to +13:00, for example, 00:00.
     * Note: This parameter takes effect only when DBType is MySQL.
     */
    readonly defaultTimeZone?: string | ros.IResolvable;
    /**
     * @Property gdnId: The ID of the Global Database Network (GDN).
     * Note: This parameter is required when the CreationOption is CreateGdnStandby.
     */
    readonly gdnId?: string | ros.IResolvable;
    /**
     * @Property hotStandbyCluster: Specifies whether to enable the hot standby storage cluster feature. Default value: ON. Valid values:
     * ON: enables the hot standby storage cluster feature.
     * OFF: disables the hot standby storage cluster feature
     * STANDBY: enables the hot standby storage cluster feature only for Standard Edition clusters.
     * The default value for Standard Edition clusters is STANDBY.
     */
    readonly hotStandbyCluster?: string | ros.IResolvable;
    /**
     * @Property loosePolarLogBin: Enable the Binlog function, the value range is as follows:
     * ON: The cluster enables the Binlog function
     * OFF: The cluster disables the Binlog function
     * This parameter takes effect only when the parameter DBType is MySQL.
     */
    readonly loosePolarLogBin?: string | ros.IResolvable;
    /**
     * @Property looseXEngine: Enable the X-Engine storage engine function, the value range is as follows:
     * ON: The cluster starts the X-Engine enginen
     * OFF: The cluster shuts down the X-Engine engine
     * This parameter takes effect only when the parameter CreationOption is not equal to CreateGdnStandby, DBType is MySQL and DBVersion is 8.0. The memory specification of the node with X-Engine enabled must be greater than or equal to 16 GB.
     */
    readonly looseXEngine?: string | ros.IResolvable;
    /**
     * @Property looseXEngineUseMemoryPct: Set the ratio of enabling the X-Engine storage engine, an integer ranging from 10 to 90.
     * This parameter takes effect only when the parameter LooseXEngine is ON.
     */
    readonly looseXEngineUseMemoryPct?: number | ros.IResolvable;
    /**
     * @Property lowerCaseTableNames: Whether the table name is case sensitive, the value range is as follows:
     * 1: Not case sensitive0: case sensitive
     * The default value is 1.
     * Note: This parameter takes effect only when the value of DBType is MySQL.
     */
    readonly lowerCaseTableNames?: number | ros.IResolvable;
    /**
     * @Property maintainTime: The maintainable time of the cluster:
     * Format: HH: mmZ- HH: mmZ.
     * Example: 16:00Z-17:00Z, which means 0 to 1 (UTC+08:00) for routine maintenance.
     */
    readonly maintainTime?: string | ros.IResolvable;
    /**
     * @Property parameterGroupId: The ID of the parameter template.
     * You can call the DescribeParameterGroups operation to query the details of all parameter templates of a specified region, such as the ID of a parameter template.
     */
    readonly parameterGroupId?: string | ros.IResolvable;
    /**
     * @Property period: The subscription period of the clusterIf PeriodUnit is month, the valid range is 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36
     * If periodUnit is year, the valid range is 1, 2, 3
     */
    readonly period?: number | ros.IResolvable;
    /**
     * @Property periodUnit: The unit of the subscription duration. Valid values:
     * Month
     * Year
     * Default value: Month.
     */
    readonly periodUnit?: string | ros.IResolvable;
    /**
     * @Property proxyClass: The specifications of the Standard Edition PolarProxy. Valid values:
     * polar.maxscale.g2.medium.c: 2 cores
     * polar.maxscale.g2.large.c: 4 cores
     * polar.maxscale.g2.xlarge.c: 8 cores
     * polar.maxscale.g2.2xlarge.c: 16 cores
     * polar.maxscale.g2.3xlarge.c: 24 cores
     * polar.maxscale.g2.4xlarge.c: 32 cores
     * polar.maxscale.g2.8xlarge.c: 64 cores
     */
    readonly proxyClass?: string | ros.IResolvable;
    /**
     * @Property proxyType: The type of PolarProxy. Default value: OFF. Valid values:
     * OFF: disables PolarProxy.
     * EXCLUSIVE: Dedicated Enterprise Edition
     * GENERAL: Standard Enterprise Edition
     */
    readonly proxyType?: string | ros.IResolvable;
    /**
     * @Property renewalStatus: The auto renewal status of the cluster Valid values:
     * AutoRenewal: automatically renews the cluster.
     * Normal: manually renews the cluster.
     * NotRenewal: does not renew the cluster.
     * Default value: Normal.
     * Note If this parameter is set to NotRenewal, the system does not send a reminder for expiration,
     * but only sends an SMS message three days before the cluster expires to remind you
     * that the cluster is not renewed.
     */
    readonly renewalStatus?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property restartMasterNode: Whether to restart the master node.
     */
    readonly restartMasterNode?: boolean | ros.IResolvable;
    /**
     * @Property scaleMax: Maximum limit of single-node scaling.
     */
    readonly scaleMax?: number | ros.IResolvable;
    /**
     * @Property scaleMin: Minimum limit of single-node scaling.
     */
    readonly scaleMin?: number | ros.IResolvable;
    /**
     * @Property scaleRoNumMax: The maximum scaling limit for the number of read-only nodes.
     */
    readonly scaleRoNumMax?: number | ros.IResolvable;
    /**
     * @Property scaleRoNumMin: The minimum scaling limit for the number of read-only nodes.
     */
    readonly scaleRoNumMin?: number | ros.IResolvable;
    /**
     * @Property securityGroupIds: The ID of the security group.
     * You can add up to three security groups to a cluster.
     *
     */
    readonly securityGroupIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property securityIpList: The whitelist of the Apsara PolarDB cluster.
     */
    readonly securityIpList?: string | ros.IResolvable;
    /**
     * @Property serverlessType: Serverless type.
     */
    readonly serverlessType?: string | ros.IResolvable;
    /**
     * @Property sourceResourceId: The ID of the source RDS instance or source POLARDB cluster.
     * Note
     * This parameter takes effect only when the DBType parameter is set to MySQL and the DBVersion parameter is set to 5.6.
     * This parameter is required if the CreationOption parameter is not set to Normal.
     */
    readonly sourceResourceId?: string | ros.IResolvable;
    /**
     * @Property standbyAz: The zone where the hot standby storage cluster is stored. This is valid for Standard Edition clusters of Multi-zone Edition.
     * This parameter takes effect only when the multi-zone data consistency feature is enabled.
     */
    readonly standbyAz?: string | ros.IResolvable;
    /**
     * @Property storageAutoScale: Whether to enable automatic storage scale for standard version clusters. The value range is as follows:
     * Enable: Enable automatic storage scale.
     * Disable: Disable automatic storage scale.
     */
    readonly storageAutoScale?: string | ros.IResolvable;
    /**
     * @Property storagePayType: The storage pay type.
     */
    readonly storagePayType?: string | ros.IResolvable;
    /**
     * @Property storageSpace: The storage space that uses the subscription billing method. Unit: GB.
     * Valid values for PolarDB for MySQL Standard Edition: 20 to 32000.
     */
    readonly storageSpace?: number | ros.IResolvable;
    /**
     * @Property storageType: The storage type. Valid values for Enterprise Edition:
     * PSL5
     * PSL4
     * Valid values for Standard Edition:
     * ESSDPL1
     * ESSDPL2
     * ESSDPL3
     * This parameter is invalid for serverless clusters.
     */
    readonly storageType?: string | ros.IResolvable;
    /**
     * @Property storageUpperBound: Set the upper limit of automatic scale of standard cluster storage, unit: GB.
     * The maximum value is 32000.
     */
    readonly storageUpperBound?: number | ros.IResolvable;
    /**
     * @Property strictConsistency: Specifies whether to enable the multi-zone data consistency feature. Valid values:
     * ON: enables the multi-zone data consistency feature, which is valid for Standard Edition clusters of Multi-zone Edition.
     * OFF: disables the multi-zone data consistency feature.
     */
    readonly strictConsistency?: string | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosDBCluster.TagsProperty[];
    /**
     * @Property tdeStatus: Specifies whether to enable Transparent Data Encryption (TDE). Valid values:
     * true: enable TDE
     * false: disable TDE (default)
     * Note: The parameter takes effect only when DBType is PostgreSQL or Oracle. You cannot disable TDE after it is enabled.
     */
    readonly tdeStatus?: boolean | ros.IResolvable;
    /**
     * @Property vpcId: The ID of the VPC to connect to.
     */
    readonly vpcId?: string | ros.IResolvable;
    /**
     * @Property vSwitchId: The ID of the VSwitch to connect to.
     */
    readonly vSwitchId?: string | ros.IResolvable;
    /**
     * @Property zoneId: The zone ID of the cluster. You can call the DescribeRegions operation to query available zones.
     */
    readonly zoneId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::POLARDB::DBCluster`, which is used to create a PolarDB cluster.
 * @Note This class does not contain additional functions, so it is recommended to use the `DBCluster` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbcluster
 */
export declare class RosDBCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::POLARDB::DBCluster";
    /**
     * @Attribute ClusterConnectionString: The cluster connection string of the db cluster.
     */
    readonly attrClusterConnectionString: ros.IResolvable;
    /**
     * @Attribute ClusterEndpointId: The cluster endpoint ID of the db cluster.
     */
    readonly attrClusterEndpointId: ros.IResolvable;
    /**
     * @Attribute ColdStorageInstanceId: The ID of the cold storage instance.
     */
    readonly attrColdStorageInstanceId: ros.IResolvable;
    /**
     * @Attribute CustomConnectionStrings: The custom connection strings of the db cluster.
     */
    readonly attrCustomConnectionStrings: ros.IResolvable;
    /**
     * @Attribute CustomEndpointIds: The custom endpoint IDs of the db cluster.
     */
    readonly attrCustomEndpointIds: ros.IResolvable;
    /**
     * @Attribute DBClusterId: The ID of the ApsaraDB for POLARDB cluster.
     */
    readonly attrDbClusterId: ros.IResolvable;
    /**
     * @Attribute DBNodeIds: The ID list of cluster nodes.
     */
    readonly attrDbNodeIds: ros.IResolvable;
    /**
     * @Attribute OrderId: The Order ID.
     */
    readonly attrOrderId: ros.IResolvable;
    /**
     * @Attribute PrimaryConnectionString: The primary connection string of the db cluster.
     */
    readonly attrPrimaryConnectionString: ros.IResolvable;
    /**
     * @Attribute PrimaryConnectionStrings: The primary connection strings of the db cluster.
     */
    readonly attrPrimaryConnectionStrings: ros.IResolvable;
    /**
     * @Attribute PrimaryEndpointId: The primary endpoint ID of the db cluster.
     */
    readonly attrPrimaryEndpointId: ros.IResolvable;
    /**
     * @Attribute PrimaryEndpointIds: The primary endpoint IDs of the db cluster.
     */
    readonly attrPrimaryEndpointIds: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dbNodeClass: The node specifications of the cluster. For more information, see Specifications and pricing.
     */
    dbNodeClass: string | ros.IResolvable;
    /**
     * @Property dbType: Database type, value:
     * MySQL
     * PostgreSQL
     * Oracle
     */
    dbType: string | ros.IResolvable;
    /**
     * @Property dbVersion: The version of the database. Valid values:
     * MySQL: 5.6, 5.7 or 8.0
     * PostgreSQL: 11, 14
     * Oracle: 11, 14
     */
    dbVersion: string | ros.IResolvable;
    /**
     * @Property payType: The billing method of the cluster. Valid values:
     * Postpaid: pay-as-you-go
     * Prepaid: subscription
     */
    payType: string | ros.IResolvable;
    /**
     * @Property allowShutDown: Whether to turn on No activity pause. The default is false.
     */
    allowShutDown: boolean | ros.IResolvable | undefined;
    /**
     * @Property architecture: The architecture of CPU. Valid values:
     * X86
     * ARM
     */
    architecture: string | ros.IResolvable | undefined;
    /**
     * @Property autoRenewPeriod: Set the cluster auto renewal time. Valid values: 1, 2, 3, 6, 12, 24, 36. Default to 1.
     */
    autoRenewPeriod: number | ros.IResolvable | undefined;
    /**
     * @Property backupRetentionPolicyOnClusterDeletion: The backup set retention policy when deleting a cluster, the value range is as follows:
     * ALL: Keep all backups permanently.
     * LATEST: Permanently keep the last backup (automatic backup before deletion).
     * NONE: The backup set is not retained when the cluster is deleted.
     * When creating a cluster, the default value is NONE, that is, the backup set is not retained when the cluster is deleted.
     * Note: This parameter takes effect only when the value of DBType is MySQL.
     */
    backupRetentionPolicyOnClusterDeletion: string | ros.IResolvable | undefined;
    /**
     * @Property cloneDataPoint: The time point of data to be cloned. Valid values:
     * LATEST: clones data of the latest time point.
     * <BackupID>: clones historical backup data. Specify the ID of the specific backup set.
     * <Timestamp>: clones data of a historical time point. Specify the specific time in
     * the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
     * Default value: LATEST.
     * Note
     * This parameter takes effect only when the DBType parameter is set to MySQL, the DBVersion parameter is set to 5.6, and the CreationOption parameter is set to CloneFromRDS or CloneFromPolarDB.
     * If the CreationOption parameter is set to CloneFromRDS, the value of this parameter must be LATEST.
     */
    cloneDataPoint: string | ros.IResolvable | undefined;
    /**
     * @Property clusterNetworkType: The network type of the cluster. Currently, only VPC is supported. Default value: VPC.
     */
    clusterNetworkType: string | ros.IResolvable | undefined;
    /**
     * @Property coldStorageOption: The option of cold storage.
     */
    coldStorageOption: RosDBCluster.ColdStorageOptionProperty | ros.IResolvable | undefined;
    /**
     * @Property creationCategory: Cluster series. The value could be Normal (standard version), Basic and ArchiveNormal.
     */
    creationCategory: string | ros.IResolvable | undefined;
    /**
     * @Property creationOption: The method for creating an ApsaraDB for POLARDB cluster. Valid values:
     * Normal: creates an ApsaraDB for POLARDB cluster.
     * CloneFromPolarDB: clones data from an existing ApsaraDB for POLARDB cluster to a new ApsaraDB for POLARDB cluster.
     * CloneFromRDS: clones data from an existing ApsaraDB for RDS instance to a new ApsaraDB
     * for POLARDB cluster.
     * MigrationFromRDS: migrates data from an existing ApsaraDB for RDS instance to a new ApsaraDB for POLARDB cluster. The created ApsaraDB for POLARDB cluster is in read-only mode and has binary logs enabled by default.
     * CreateGdnStandby: Create a secondary cluster.
     * Default value: Normal.
     * Note:
     * When DBType is MySQL and DBVersion is 5.6, this parameter can be specified as CloneFromRDS or MigrationFromRDS.
     * When DBType is MySQL and DBVersion is 8.0, this parameter can be specified as CreateGdnStandby.
     */
    creationOption: string | ros.IResolvable | undefined;
    /**
     * @Property dbClusterDescription: The description of the cluster. The description must comply with the following rules:
     * It must start with a Chinese character or an English letter.
     * It can contain Chinese and English characters, digits, underscores (_), and hyphens (-).
     * It cannot start with http:\/\/ or https:\/\/.
     * It must be 2 to 256 characters in length.
     */
    dbClusterDescription: string | ros.IResolvable | undefined;
    /**
     * @Property dbClusterParameters: Modifies the parameters of a the PolarDB cluster.
     */
    dbClusterParameters: RosDBCluster.DBClusterParametersProperty | ros.IResolvable | undefined;
    /**
     * @Property dbMinorVersion: The minor version of the cluster. Valid values:
     * 8.0.2
     * 8.0.1
     * This parameter is valid only when the DBType parameter is set to MySQL and the DBVersion parameter is set to 8.0.
     */
    dbMinorVersion: string | ros.IResolvable | undefined;
    /**
     * @Property dbNodeNum: The number of Standard Edition nodes. Default value: 1. Valid values:
     * 1: only one primary node.
     * 2: one read-only node and one primary node.
     */
    dbNodeNum: number | ros.IResolvable | undefined;
    /**
     * @Property defaultTimeZone: Set up a time zone (UTC), the value range is as follows:
     * System:  The default time zone is the same as the time zone where the region is located. This is default value.
     * Other pickable value range is from -12:00 to +13:00, for example, 00:00.
     * Note: This parameter takes effect only when DBType is MySQL.
     */
    defaultTimeZone: string | ros.IResolvable | undefined;
    /**
     * @Property gdnId: The ID of the Global Database Network (GDN).
     * Note: This parameter is required when the CreationOption is CreateGdnStandby.
     */
    gdnId: string | ros.IResolvable | undefined;
    /**
     * @Property hotStandbyCluster: Specifies whether to enable the hot standby storage cluster feature. Default value: ON. Valid values:
     * ON: enables the hot standby storage cluster feature.
     * OFF: disables the hot standby storage cluster feature
     * STANDBY: enables the hot standby storage cluster feature only for Standard Edition clusters.
     * The default value for Standard Edition clusters is STANDBY.
     */
    hotStandbyCluster: string | ros.IResolvable | undefined;
    /**
     * @Property loosePolarLogBin: Enable the Binlog function, the value range is as follows:
     * ON: The cluster enables the Binlog function
     * OFF: The cluster disables the Binlog function
     * This parameter takes effect only when the parameter DBType is MySQL.
     */
    loosePolarLogBin: string | ros.IResolvable | undefined;
    /**
     * @Property looseXEngine: Enable the X-Engine storage engine function, the value range is as follows:
     * ON: The cluster starts the X-Engine enginen
     * OFF: The cluster shuts down the X-Engine engine
     * This parameter takes effect only when the parameter CreationOption is not equal to CreateGdnStandby, DBType is MySQL and DBVersion is 8.0. The memory specification of the node with X-Engine enabled must be greater than or equal to 16 GB.
     */
    looseXEngine: string | ros.IResolvable | undefined;
    /**
     * @Property looseXEngineUseMemoryPct: Set the ratio of enabling the X-Engine storage engine, an integer ranging from 10 to 90.
     * This parameter takes effect only when the parameter LooseXEngine is ON.
     */
    looseXEngineUseMemoryPct: number | ros.IResolvable | undefined;
    /**
     * @Property lowerCaseTableNames: Whether the table name is case sensitive, the value range is as follows:
     * 1: Not case sensitive0: case sensitive
     * The default value is 1.
     * Note: This parameter takes effect only when the value of DBType is MySQL.
     */
    lowerCaseTableNames: number | ros.IResolvable | undefined;
    /**
     * @Property maintainTime: The maintainable time of the cluster:
     * Format: HH: mmZ- HH: mmZ.
     * Example: 16:00Z-17:00Z, which means 0 to 1 (UTC+08:00) for routine maintenance.
     */
    maintainTime: string | ros.IResolvable | undefined;
    /**
     * @Property parameterGroupId: The ID of the parameter template.
     * You can call the DescribeParameterGroups operation to query the details of all parameter templates of a specified region, such as the ID of a parameter template.
     */
    parameterGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property period: The subscription period of the clusterIf PeriodUnit is month, the valid range is 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36
     * If periodUnit is year, the valid range is 1, 2, 3
     */
    period: number | ros.IResolvable | undefined;
    /**
     * @Property periodUnit: The unit of the subscription duration. Valid values:
     * Month
     * Year
     * Default value: Month.
     */
    periodUnit: string | ros.IResolvable | undefined;
    /**
     * @Property proxyClass: The specifications of the Standard Edition PolarProxy. Valid values:
     * polar.maxscale.g2.medium.c: 2 cores
     * polar.maxscale.g2.large.c: 4 cores
     * polar.maxscale.g2.xlarge.c: 8 cores
     * polar.maxscale.g2.2xlarge.c: 16 cores
     * polar.maxscale.g2.3xlarge.c: 24 cores
     * polar.maxscale.g2.4xlarge.c: 32 cores
     * polar.maxscale.g2.8xlarge.c: 64 cores
     */
    proxyClass: string | ros.IResolvable | undefined;
    /**
     * @Property proxyType: The type of PolarProxy. Default value: OFF. Valid values:
     * OFF: disables PolarProxy.
     * EXCLUSIVE: Dedicated Enterprise Edition
     * GENERAL: Standard Enterprise Edition
     */
    proxyType: string | ros.IResolvable | undefined;
    /**
     * @Property renewalStatus: The auto renewal status of the cluster Valid values:
     * AutoRenewal: automatically renews the cluster.
     * Normal: manually renews the cluster.
     * NotRenewal: does not renew the cluster.
     * Default value: Normal.
     * Note If this parameter is set to NotRenewal, the system does not send a reminder for expiration,
     * but only sends an SMS message three days before the cluster expires to remind you
     * that the cluster is not renewed.
     */
    renewalStatus: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property restartMasterNode: Whether to restart the master node.
     */
    restartMasterNode: boolean | ros.IResolvable | undefined;
    /**
     * @Property scaleMax: Maximum limit of single-node scaling.
     */
    scaleMax: number | ros.IResolvable | undefined;
    /**
     * @Property scaleMin: Minimum limit of single-node scaling.
     */
    scaleMin: number | ros.IResolvable | undefined;
    /**
     * @Property scaleRoNumMax: The maximum scaling limit for the number of read-only nodes.
     */
    scaleRoNumMax: number | ros.IResolvable | undefined;
    /**
     * @Property scaleRoNumMin: The minimum scaling limit for the number of read-only nodes.
     */
    scaleRoNumMin: number | ros.IResolvable | undefined;
    /**
     * @Property securityGroupIds: The ID of the security group.
     * You can add up to three security groups to a cluster.
     *
     */
    securityGroupIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property securityIpList: The whitelist of the Apsara PolarDB cluster.
     */
    securityIpList: string | ros.IResolvable | undefined;
    /**
     * @Property serverlessType: Serverless type.
     */
    serverlessType: string | ros.IResolvable | undefined;
    /**
     * @Property sourceResourceId: The ID of the source RDS instance or source POLARDB cluster.
     * Note
     * This parameter takes effect only when the DBType parameter is set to MySQL and the DBVersion parameter is set to 5.6.
     * This parameter is required if the CreationOption parameter is not set to Normal.
     */
    sourceResourceId: string | ros.IResolvable | undefined;
    /**
     * @Property standbyAz: The zone where the hot standby storage cluster is stored. This is valid for Standard Edition clusters of Multi-zone Edition.
     * This parameter takes effect only when the multi-zone data consistency feature is enabled.
     */
    standbyAz: string | ros.IResolvable | undefined;
    /**
     * @Property storageAutoScale: Whether to enable automatic storage scale for standard version clusters. The value range is as follows:
     * Enable: Enable automatic storage scale.
     * Disable: Disable automatic storage scale.
     */
    storageAutoScale: string | ros.IResolvable | undefined;
    /**
     * @Property storagePayType: The storage pay type.
     */
    storagePayType: string | ros.IResolvable | undefined;
    /**
     * @Property storageSpace: The storage space that uses the subscription billing method. Unit: GB.
     * Valid values for PolarDB for MySQL Standard Edition: 20 to 32000.
     */
    storageSpace: number | ros.IResolvable | undefined;
    /**
     * @Property storageType: The storage type. Valid values for Enterprise Edition:
     * PSL5
     * PSL4
     * Valid values for Standard Edition:
     * ESSDPL1
     * ESSDPL2
     * ESSDPL3
     * This parameter is invalid for serverless clusters.
     */
    storageType: string | ros.IResolvable | undefined;
    /**
     * @Property storageUpperBound: Set the upper limit of automatic scale of standard cluster storage, unit: GB.
     * The maximum value is 32000.
     */
    storageUpperBound: number | ros.IResolvable | undefined;
    /**
     * @Property strictConsistency: Specifies whether to enable the multi-zone data consistency feature. Valid values:
     * ON: enables the multi-zone data consistency feature, which is valid for Standard Edition clusters of Multi-zone Edition.
     * OFF: disables the multi-zone data consistency feature.
     */
    strictConsistency: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosDBCluster.TagsProperty[] | undefined;
    /**
     * @Property tdeStatus: Specifies whether to enable Transparent Data Encryption (TDE). Valid values:
     * true: enable TDE
     * false: disable TDE (default)
     * Note: The parameter takes effect only when DBType is PostgreSQL or Oracle. You cannot disable TDE after it is enabled.
     */
    tdeStatus: boolean | ros.IResolvable | undefined;
    /**
     * @Property vpcId: The ID of the VPC to connect to.
     */
    vpcId: string | ros.IResolvable | undefined;
    /**
     * @Property vSwitchId: The ID of the VSwitch to connect to.
     */
    vSwitchId: string | ros.IResolvable | undefined;
    /**
     * @Property zoneId: The zone ID of the cluster. You can call the DescribeRegions operation to query available zones.
     */
    zoneId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDBClusterProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosDBCluster {
    /**
     * @stability external
     */
    interface ColdStorageOptionProperty {
        /**
         * @Property description: The description of the cold storage instance. If the description is set, it means a cold storage instance is created.
     * The length is no more than 256 characters.
         */
        readonly description?: string | ros.IResolvable;
        /**
         * @Property enable: Whether to create the cold storage instance.
         */
        readonly enable?: boolean | ros.IResolvable;
    }
}
export declare namespace RosDBCluster {
    /**
     * @stability external
     */
    interface DBClusterParametersProperty {
        /**
         * @Property parameters: The JSON string that consists of parameters and values.
     * The parameter values are strings, for example,
     * {"auto_increment_increment":"1","character_set_filesystem":"utf8"}.
     * You can call the DescribeDBClusterParameters operation to
     * view the parameters of the PolarDB cluster.
         */
        readonly parameters?: string | ros.IResolvable;
        /**
         * @Property effectiveTime: The time when the modified values of parameters take effect. Valid values:
     * - Auto: The system automatically determines how the modified values of parameters take effect.
     * If all the modified values of parameters can take effect without a cluster restart,
     * they immediately take effect. If a cluster restart is required to make the modified values
     * of some parameters take effect, all of them take effect after a cluster restart
     * is performed within the maintenance window.
     * - Immediately: If all the modified values of parameters can take effect without a
     * cluster restart, the modifications immediately take effect. If a cluster restart is
     * required to make the modified values of some parameters take effect,
     * the cluster is immediately restarted for the modifications to take effect.
     * - MaintainTime: The modified values of parameters take effect within the maintenance window.
     * All the modified values of parameters take effect within the maintenance window.
     * Default value: Auto.
         */
        readonly effectiveTime?: string | ros.IResolvable;
    }
}
export declare namespace RosDBCluster {
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
 * Properties for defining a `RosDBClusterAccessWhiteList`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbclusteraccesswhitelist
 */
export interface RosDBClusterAccessWhiteListProps {
    /**
     * @Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster whose IP address whitelist is to be modified.
     */
    readonly dbClusterId: string | ros.IResolvable;
    /**
     * @Property securityIps: The IP addresses to be added to the IP address whitelist group to be modified. Each
     * whitelist group can contain a maximum of 1,000 IP addresses. Separate multiple IP
     * addresses with a comma (,). The following two formats are supported:
     * IP address: for example, 10.23.12.24.
     * Classless inter-domain routing (CIDR) block: for example, 10.23.12.24\/24, where the
     * suffix \/24 indicates the number of bits for the prefix of the IP address. The suffix
     * ranges from 1 to 32.
     */
    readonly securityIps: string | ros.IResolvable;
    /**
     * @Property dbClusterIpArrayName: The name of the IP address whitelist group. If you do not specify this parameter,
     * the Default whitelist group is modified by default.
     * Note You can create up to 50 whitelist groups for an ApsaraDB for POLARDB cluster.
     */
    readonly dbClusterIpArrayName?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::POLARDB::DBClusterAccessWhiteList`.
 * @Note This class does not contain additional functions, so it is recommended to use the `DBClusterAccessWhiteList` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbclusteraccesswhitelist
 */
export declare class RosDBClusterAccessWhiteList extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::POLARDB::DBClusterAccessWhiteList";
    /**
     * @Attribute DBClusterId: The ID of the ApsaraDB for POLARDB cluster whose IP address whitelist is to be modified.
     */
    readonly attrDbClusterId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster whose IP address whitelist is to be modified.
     */
    dbClusterId: string | ros.IResolvable;
    /**
     * @Property securityIps: The IP addresses to be added to the IP address whitelist group to be modified. Each
     * whitelist group can contain a maximum of 1,000 IP addresses. Separate multiple IP
     * addresses with a comma (,). The following two formats are supported:
     * IP address: for example, 10.23.12.24.
     * Classless inter-domain routing (CIDR) block: for example, 10.23.12.24\/24, where the
     * suffix \/24 indicates the number of bits for the prefix of the IP address. The suffix
     * ranges from 1 to 32.
     */
    securityIps: string | ros.IResolvable;
    /**
     * @Property dbClusterIpArrayName: The name of the IP address whitelist group. If you do not specify this parameter,
     * the Default whitelist group is modified by default.
     * Note You can create up to 50 whitelist groups for an ApsaraDB for POLARDB cluster.
     */
    dbClusterIpArrayName: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDBClusterAccessWhiteListProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosDBClusterEndpoint`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbclusterendpoint
 */
export interface RosDBClusterEndpointProps {
    /**
     * @Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a custom connection point is to be created.
     */
    readonly dbClusterId: string | ros.IResolvable;
    /**
     * @Property autoAddNewNodes: Specifies whether a newly added node is automatically added to this connection point.
     * Valid values: Enable, Disable.
     * Default value: Disable.
     */
    readonly autoAddNewNodes?: string | ros.IResolvable;
    /**
     * @Property endpointConfig:
     */
    readonly endpointConfig?: RosDBClusterEndpoint.EndpointConfigProperty | ros.IResolvable;
    /**
     * @Property endpointType: The type of the cluster connection point. Set this parameter to Custom.
     */
    readonly endpointType?: string | ros.IResolvable;
    /**
     * @Property nodes: The nodes to be added to this connection point to process read requests from this connection point. Add at least two nodes.
     * If you do not specify this parameter, all nodes of the cluster are added to this connection point by default.
     */
    readonly nodes?: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property readWriteMode: The read\/write mode of the cluster connection point. Valid values:
     * ReadWrite: receives and forwards read and write requests (automatic read-write splitting).
     * ReadOnly: receives and forwards only read requests.
     * Default value: ReadOnly.
     */
    readonly readWriteMode?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::POLARDB::DBClusterEndpoint`, which is used to create a custom endpoint for a PolarDB cluster.
 * @Note This class does not contain additional functions, so it is recommended to use the `DBClusterEndpoint` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbclusterendpoint
 */
export declare class RosDBClusterEndpoint extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::POLARDB::DBClusterEndpoint";
    /**
     * @Attribute Addresses: The address items of the db cluster endpoint.
     */
    readonly attrAddresses: ros.IResolvable;
    /**
     * @Attribute ConnectionString: The first connection string of the db cluster endpoint.
     */
    readonly attrConnectionString: ros.IResolvable;
    /**
     * @Attribute DBEndpointId: DB cluster endpoint ID. E.g. pe-xxxxxxxx.
     */
    readonly attrDbEndpointId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a custom connection point is to be created.
     */
    dbClusterId: string | ros.IResolvable;
    /**
     * @Property autoAddNewNodes: Specifies whether a newly added node is automatically added to this connection point.
     * Valid values: Enable, Disable.
     * Default value: Disable.
     */
    autoAddNewNodes: string | ros.IResolvable | undefined;
    /**
     * @Property endpointConfig:
     */
    endpointConfig: RosDBClusterEndpoint.EndpointConfigProperty | ros.IResolvable | undefined;
    /**
     * @Property endpointType: The type of the cluster connection point. Set this parameter to Custom.
     */
    endpointType: string | ros.IResolvable | undefined;
    /**
     * @Property nodes: The nodes to be added to this connection point to process read requests from this connection point. Add at least two nodes.
     * If you do not specify this parameter, all nodes of the cluster are added to this connection point by default.
     */
    nodes: Array<any | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property readWriteMode: The read\/write mode of the cluster connection point. Valid values:
     * ReadWrite: receives and forwards read and write requests (automatic read-write splitting).
     * ReadOnly: receives and forwards only read requests.
     * Default value: ReadOnly.
     */
    readWriteMode: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDBClusterEndpointProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosDBClusterEndpoint {
    /**
     * @stability external
     */
    interface EndpointConfigProperty {
        /**
         * @Property distributedTransaction: Set up transaction splitting. Valid values:
     * on: Turn on transaction splitting (default value)
     * off: Turn off transaction splitting
         */
        readonly distributedTransaction?: string | ros.IResolvable;
        /**
         * @Property consistTimeoutAction: Global consistency read timeout policy. Valid values:
     * 0: This request occurs to the master node (default).
     * 1: Sql error report.
         */
        readonly consistTimeoutAction?: string | ros.IResolvable;
        /**
         * @Property consistTimeout: Global consistency read timeout.
         */
        readonly consistTimeout?: string | ros.IResolvable;
        /**
         * @Property connectionPersist: Set up a connection pool. Valid values:
     * off: Turn off the connection pool (default value)
     * Session: Enable session-level connection pooling
     * Transaction: Enable transaction-level connection pooling.
         */
        readonly connectionPersist?: string | ros.IResolvable;
        /**
         * @Property loadBalancePolicy: Set load balancing policy. Valid values:
     * 0: Load balancing based on the number of connections (default)
     * 1: Load balancing based on the number of active requests
         */
        readonly loadBalancePolicy?: string | ros.IResolvable;
        /**
         * @Property consistLevel: The consistency level of the cluster connection point. Valid values:
     * 0: eventual consistency
     * 1: session consistency2: Global consistency (strong)
     * For example, {"ConsistLevel": "0"}.
     * Note If the ReadWriteMode parameter is set to ReadOnly, the value of this parameter must be 0.
         */
        readonly consistLevel?: string | ros.IResolvable;
        /**
         * @Property enableOverloadThrottle: Set whether to enable overload protection. Valid values:
     * on: Turn on overload protection.
     * off: Turn off overload protection (default).
         */
        readonly enableOverloadThrottle?: string | ros.IResolvable;
        /**
         * @Property masterAcceptReads: Set whether the main library accepts reading. Valid values:
     * on: Indicates that the main library accepts reading.
     * off: Indicates that the main library does not accept reading (default value)
         */
        readonly masterAcceptReads?: string | ros.IResolvable;
        /**
         * @Property maxParallelDegree: Set up parallel queries. Valid values:
     * on: Enable parallel query.
     * off: Turn off parallel query (default).
         */
        readonly maxParallelDegree?: string | ros.IResolvable;
        /**
         * @Property enableHtapImci: Set up row\/column storage to automatically divert traffic. Valid values:
     * on: Turn on the automatic traffic diversion function of row storage\/column storage
     * off: Turn off the automatic drainage function of row storage\/column storage (default)
         */
        readonly enableHtapImci?: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosDBClusterEndpointAddress`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbclusterendpointaddress
 */
export interface RosDBClusterEndpointAddressProps {
    /**
     * @Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a public connection point is to be created.
     */
    readonly dbClusterId: string | ros.IResolvable;
    /**
     * @Property dbEndpointId: The ID of the cluster connection point.
     */
    readonly dbEndpointId: string | ros.IResolvable;
    /**
     * @Property connectionStringPrefix: The prefix of the connection string. The prefix must comply with the following rules:
     * It must start with a letter and consist of lowercase letters, digits, and hyphens(-), cannot end with a dash.
     * The length is 6~30 characters.
     */
    readonly connectionStringPrefix?: string | ros.IResolvable;
    /**
     * @Property netType: The network type of the connection string.
     * If set to Public, ROS will create, modify and delete Public address for you.
     * If set to Private, ROS will only modify Private address for you.
     * Default to Public.
     */
    readonly netType?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::POLARDB::DBClusterEndpointAddress`, which is used to create a public endpoint for an Apsara PolarDB cluster. The public endpoint can be a primary endpoint, the default cluster endpoint, or a custom cluster endpoint.
 * @Note This class does not contain additional functions, so it is recommended to use the `DBClusterEndpointAddress` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbclusterendpointaddress
 */
export declare class RosDBClusterEndpointAddress extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::POLARDB::DBClusterEndpointAddress";
    /**
     * @Attribute Address: The details of the endpoint address.
     */
    readonly attrAddress: ros.IResolvable;
    /**
     * @Attribute ConnectionString: The connection string of the endpoint address.
     */
    readonly attrConnectionString: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a public connection point is to be created.
     */
    dbClusterId: string | ros.IResolvable;
    /**
     * @Property dbEndpointId: The ID of the cluster connection point.
     */
    dbEndpointId: string | ros.IResolvable;
    /**
     * @Property connectionStringPrefix: The prefix of the connection string. The prefix must comply with the following rules:
     * It must start with a letter and consist of lowercase letters, digits, and hyphens(-), cannot end with a dash.
     * The length is 6~30 characters.
     */
    connectionStringPrefix: string | ros.IResolvable | undefined;
    /**
     * @Property netType: The network type of the connection string.
     * If set to Public, ROS will create, modify and delete Public address for you.
     * If set to Private, ROS will only modify Private address for you.
     * Default to Public.
     */
    netType: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDBClusterEndpointAddressProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosDBInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbinstance
 */
export interface RosDBInstanceProps {
    /**
     * @Property characterSetName: The character set of the database. For more information, see Character sets.
     */
    readonly characterSetName: string | ros.IResolvable;
    /**
     * @Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a database is to be created.
     */
    readonly dbClusterId: string | ros.IResolvable;
    /**
     * @Property dbName: The name of the database to be created. The name must comply with the following rules:
     * It must start with a lowercase letter and consist of lowercase letters, digits, hyphens
     * (-), and underscores (_).
     * It must end with a letter or a digit. It can be up to 64 characters in length.
     */
    readonly dbName: string | ros.IResolvable;
    /**
     * @Property accountName: The name of the database account to be used.
     */
    readonly accountName?: string | ros.IResolvable;
    /**
     * @Property accountPrivilege: The permissions of the database account on the database. Valid values:
     * ReadWrite: has read and write permissions on the database.
     * ReadOnly: has the read-only permission on the database.
     * DMLOnly: runs only data manipulation language (DML) statements.
     * DDLOnly: runs only data definition language (DDL) statements.
     * Default value: ReadWrite.
     */
    readonly accountPrivilege?: string | ros.IResolvable;
    /**
     * @Property collate: A locale setting that specifies the collation for newly created databases.
     * The locale must be compatible with the character set set by the CharacterSetName parameter.When the cluster is PolarDB PostgreSQL (compatible with Oracle) or PolarDB PostgreSQL, this parameter is required;
     * when the cluster is PolarDB MySQL, this parameter is not supported.
     */
    readonly collate?: string | ros.IResolvable;
    /**
     * @Property ctype: A locale setting that specifies the character classification of the database.
     * The locale must be compatible with the character set set by the CharacterSetName parameter.
     * It is consistent with the incoming information of Collate.
     * When the cluster is PolarDB PostgreSQL (compatible with Oracle) or PolarDB PostgreSQL, this parameter is required;
     *  when the cluster is PolarDB MySQL, this parameter is optional.
     */
    readonly ctype?: string | ros.IResolvable;
    /**
     * @Property dbDescription: The description of the database. Valid values:
     * It cannot start with http:\/\/ or https:\/\/.
     * It must be 2 to 256 characters in length.
     */
    readonly dbDescription?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::POLARDB::DBInstance`, which is used to create a database in a PolarDB cluster.
 * @Note This class does not contain additional functions, so it is recommended to use the `DBInstance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbinstance
 */
export declare class RosDBInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::POLARDB::DBInstance";
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property characterSetName: The character set of the database. For more information, see Character sets.
     */
    characterSetName: string | ros.IResolvable;
    /**
     * @Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a database is to be created.
     */
    dbClusterId: string | ros.IResolvable;
    /**
     * @Property dbName: The name of the database to be created. The name must comply with the following rules:
     * It must start with a lowercase letter and consist of lowercase letters, digits, hyphens
     * (-), and underscores (_).
     * It must end with a letter or a digit. It can be up to 64 characters in length.
     */
    dbName: string | ros.IResolvable;
    /**
     * @Property accountName: The name of the database account to be used.
     */
    accountName: string | ros.IResolvable | undefined;
    /**
     * @Property accountPrivilege: The permissions of the database account on the database. Valid values:
     * ReadWrite: has read and write permissions on the database.
     * ReadOnly: has the read-only permission on the database.
     * DMLOnly: runs only data manipulation language (DML) statements.
     * DDLOnly: runs only data definition language (DDL) statements.
     * Default value: ReadWrite.
     */
    accountPrivilege: string | ros.IResolvable | undefined;
    /**
     * @Property collate: A locale setting that specifies the collation for newly created databases.
     * The locale must be compatible with the character set set by the CharacterSetName parameter.When the cluster is PolarDB PostgreSQL (compatible with Oracle) or PolarDB PostgreSQL, this parameter is required;
     * when the cluster is PolarDB MySQL, this parameter is not supported.
     */
    collate: string | ros.IResolvable | undefined;
    /**
     * @Property ctype: A locale setting that specifies the character classification of the database.
     * The locale must be compatible with the character set set by the CharacterSetName parameter.
     * It is consistent with the incoming information of Collate.
     * When the cluster is PolarDB PostgreSQL (compatible with Oracle) or PolarDB PostgreSQL, this parameter is required;
     *  when the cluster is PolarDB MySQL, this parameter is optional.
     */
    ctype: string | ros.IResolvable | undefined;
    /**
     * @Property dbDescription: The description of the database. Valid values:
     * It cannot start with http:\/\/ or https:\/\/.
     * It must be 2 to 256 characters in length.
     */
    dbDescription: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDBInstanceProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosDBNodes`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbnodes
 */
export interface RosDBNodesProps {
    /**
     * @Property amount: Number of nodes to be added to cluster.
     */
    readonly amount: number | ros.IResolvable;
    /**
     * @Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster to be added nodes to.
     */
    readonly dbClusterId: string | ros.IResolvable;
    /**
     * @Property dbNodeType: Node type. Ranges: RO|STANDBY|DLNode
     */
    readonly dbNodeType?: string | ros.IResolvable;
    /**
     * @Property imciSwitch: Specifies whether to enable the In-Memory Column Index (IMCI) feature.
     */
    readonly imciSwitch?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::POLARDB::DBNodes`, which is used to add nodes to a PolarDB cluster.
 * @Note This class does not contain additional functions, so it is recommended to use the `DBNodes` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbnodes
 */
export declare class RosDBNodes extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::POLARDB::DBNodes";
    /**
     * @Attribute DBNodeIds: The ID list of added cluster nodes.
     */
    readonly attrDbNodeIds: ros.IResolvable;
    /**
     * @Attribute OrderIds: The order ID list of added cluster nodes.
     */
    readonly attrOrderIds: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property amount: Number of nodes to be added to cluster.
     */
    amount: number | ros.IResolvable;
    /**
     * @Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster to be added nodes to.
     */
    dbClusterId: string | ros.IResolvable;
    /**
     * @Property dbNodeType: Node type. Ranges: RO|STANDBY|DLNode
     */
    dbNodeType: string | ros.IResolvable | undefined;
    /**
     * @Property imciSwitch: Specifies whether to enable the In-Memory Column Index (IMCI) feature.
     */
    imciSwitch: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDBNodesProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosGlobalDatabaseNetwork`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-globaldatabasenetwork
 */
export interface RosGlobalDatabaseNetworkProps {
    /**
     * @Property dbClusterId: The ID of the primary cluster.
     */
    readonly dbClusterId: string | ros.IResolvable;
    /**
     * @Property gdnDescription: The description of the GDN.
     */
    readonly gdnDescription?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::POLARDB::GlobalDatabaseNetwork`, which is used to create a global database network (GDN).
 * @Note This class does not contain additional functions, so it is recommended to use the `GlobalDatabaseNetwork` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-globaldatabasenetwork
 */
export declare class RosGlobalDatabaseNetwork extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::POLARDB::GlobalDatabaseNetwork";
    /**
     * @Attribute Connections: The information about the connection to the cluster.
     */
    readonly attrConnections: ros.IResolvable;
    /**
     * @Attribute CreateTime: The time at which the GDN was created.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute DbClusters: The clusters that are included in the GDN.
     */
    readonly attrDbClusters: ros.IResolvable;
    /**
     * @Attribute DbType: The type of the database engine.
     */
    readonly attrDbType: ros.IResolvable;
    /**
     * @Attribute DbVersion: The version of the database engine.
     */
    readonly attrDbVersion: ros.IResolvable;
    /**
     * @Attribute GdnDescription: The description of the GDN.
     */
    readonly attrGdnDescription: ros.IResolvable;
    /**
     * @Attribute GdnId: The ID of the GDN.
     */
    readonly attrGdnId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dbClusterId: The ID of the primary cluster.
     */
    dbClusterId: string | ros.IResolvable;
    /**
     * @Property gdnDescription: The description of the GDN.
     */
    gdnDescription: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosGlobalDatabaseNetworkProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosParameterGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-parametergroup
 */
export interface RosParameterGroupProps {
    /**
     * @Property dbType: The type of the database engine.
     */
    readonly dbType: string | ros.IResolvable;
    /**
     * @Property dbVersion: The version of the database engine.
     */
    readonly dbVersion: string | ros.IResolvable;
    /**
     * @Property parameterGroupName: The name of the parameter template.
     */
    readonly parameterGroupName: string | ros.IResolvable;
    /**
     * @Property parameters: The list of the parameters.
     */
    readonly parameters: Array<RosParameterGroup.ParametersProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property parameterGroupDesc: The description of the parameter template.
     */
    readonly parameterGroupDesc?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::POLARDB::ParameterGroup`, which is used to create a parameter template of PolarDB.
 * @Note This class does not contain additional functions, so it is recommended to use the `ParameterGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-parametergroup
 */
export declare class RosParameterGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::POLARDB::ParameterGroup";
    /**
     * @Attribute CreateTime: The time when the parameter template was created.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute DbType: The type of the database engine.
     */
    readonly attrDbType: ros.IResolvable;
    /**
     * @Attribute DbVersion: The version of the database engine.
     */
    readonly attrDbVersion: ros.IResolvable;
    /**
     * @Attribute ForceRestart: Indicates whether to restart the cluster when this parameter template is applied.
     */
    readonly attrForceRestart: ros.IResolvable;
    /**
     * @Attribute ParameterCounts: The number of parameters in the parameter template.
     */
    readonly attrParameterCounts: ros.IResolvable;
    /**
     * @Attribute ParameterGroupDesc: The description of the parameter template.
     */
    readonly attrParameterGroupDesc: ros.IResolvable;
    /**
     * @Attribute ParameterGroupId: The ID of the parameter group.
     */
    readonly attrParameterGroupId: ros.IResolvable;
    /**
     * @Attribute ParameterGroupName: The name of the parameter template.
     */
    readonly attrParameterGroupName: ros.IResolvable;
    /**
     * @Attribute ParameterGroupType: The type of the parameter template.
     */
    readonly attrParameterGroupType: ros.IResolvable;
    /**
     * @Attribute Parameters: The list of the parameters.
     */
    readonly attrParameters: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dbType: The type of the database engine.
     */
    dbType: string | ros.IResolvable;
    /**
     * @Property dbVersion: The version of the database engine.
     */
    dbVersion: string | ros.IResolvable;
    /**
     * @Property parameterGroupName: The name of the parameter template.
     */
    parameterGroupName: string | ros.IResolvable;
    /**
     * @Property parameters: The list of the parameters.
     */
    parameters: Array<RosParameterGroup.ParametersProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property parameterGroupDesc: The description of the parameter template.
     */
    parameterGroupDesc: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosParameterGroupProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosParameterGroup {
    /**
     * @stability external
     */
    interface ParametersProperty {
        /**
         * @Property paramValue: Parameter value.
         */
        readonly paramValue: string | ros.IResolvable;
        /**
         * @Property paramName: Parameter name.
         */
        readonly paramName: string | ros.IResolvable;
    }
}
