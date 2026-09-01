import * as ros from '@alicloud/ros-cdk-core';
import { RosDBCluster } from './polardb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDBCluster as DBClusterProperty };

/**
 * Properties for defining a `DBCluster`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbcluster
 */
export interface DBClusterProps {

    /**
     * Property dbNodeClass: The node specification. For more information, see the following topics:
     * - PolarDB for MySQL: Compute node specifications
     * - PolarDB for PostgreSQL (compatible with Oracle): Compute node
     * specifications
     * - PolarDB for PostgreSQL: Compute node specifications
     * > * To create a PolarDB for MySQL Cluster Edition serverless cluster, set this
     * parameter to polar.mysql.sl.small.
     * >
     * > * To create a PolarDB for MySQL Standard Edition serverless cluster, set this
     * parameter to polar.mysql.sl.small.c.
     * >
     * > * To create a PolarDB for PostgreSQL Cluster Edition serverless cluster, set
     * this parameter to polar.pg.sl.small.
     * >
     * > * To create a PolarDB for PostgreSQL Standard Edition serverless cluster, set
     * this parameter to polar.pg.sl.small.c.
     * >
     * > * To create a PolarDB for PostgreSQL (compatible with Oracle) serverless
     * cluster, set this parameter to polar.o.sl.small.
     */
    readonly dbNodeClass: string | ros.IResolvable;

    /**
     * Property dbType: Database type, value:
     * MySQL
     * PostgreSQL
     * Oracle
     */
    readonly dbType: string | ros.IResolvable;

    /**
     * Property dbVersion: The version of the database engine.
     * - Valid values for MySQL:
     * - 5.6
     * - 5.7
     * - 8.0
     * - Valid values for PostgreSQL:
     * - 11
     * - 14
     * - 15
     * > If you create a serverless cluster for PolarDB for PostgreSQL, you must set
     * this parameter to `14`.
     * \* Valid values for Oracle:
     * \* 11
     * \* 14
     */
    readonly dbVersion: string | ros.IResolvable;

    /**
     * Property payType: The billing method of the cluster. Valid values:
     * Postpaid: pay-as-you-go
     * Prepaid: subscription
     */
    readonly payType: string | ros.IResolvable;

    /**
     * Property allowShutDown: Specifies whether to enable pause on inactivity. Valid values:
     * - true: enables pause on inactivity.
     * - false (default): disables pause on inactivity.
     * > This parameter is supported only for serverless clusters.
     */
    readonly allowShutDown?: boolean | ros.IResolvable;

    /**
     * Property architecture: The architecture of CPU. Valid values:
     * X86
     * ARM
     */
    readonly architecture?: string | ros.IResolvable;

    /**
     * Property autoRenewPeriod: Set the cluster auto renewal time. Valid values: 1, 2, 3, 6, 12, 24, 36. Default to 1.
     */
    readonly autoRenewPeriod?: number | ros.IResolvable;

    /**
     * Property backupRetentionPolicyOnClusterDeletion: The backup retention policy to apply when the cluster is deleted. Valid values:
     * - ALL: retains all backup sets.
     * - LATEST: retains only the last backup set. An automatic backup is performed
     * before the cluster is deleted.
     * - NONE: does not retain backup sets.
     * Default value: NONE.
     * > - This parameter is valid only if DBType is set to MySQL.
     * >
     * > - Serverless clusters do not support this parameter.
     */
    readonly backupRetentionPolicyOnClusterDeletion?: string | ros.IResolvable;

    /**
     * Property cloneDataPoint: The point in time for the clone. Valid values:
     * - LATEST: The latest point in time.
     * - BackupID: The ID of a historical backup set.
     * - Timestamp: A specific point in time in the `YYYY-MM-DDThh:mm:ssZ` format. The
     * time must be in UTC.
     * Default value: LATEST.
     * > If you set CreationOption to CloneFromRDS, you can set this parameter only to
     * LATEST.
     */
    readonly cloneDataPoint?: string | ros.IResolvable;

    /**
     * Property clusterNetworkType: The network type of the cluster. Currently, only VPC is supported. Default value: VPC.
     */
    readonly clusterNetworkType?: string | ros.IResolvable;

    /**
     * Property coldStorageOption: The option of cold storage.
     */
    readonly coldStorageOption?: RosDBCluster.ColdStorageOptionProperty | ros.IResolvable;

    /**
     * Property creationCategory: The edition of the cluster. Valid values:
     * - Normal: Cluster Edition (default)
     * - Basic: Single-node Edition
     * - ArchiveNormal: X-Engine Edition
     * - NormalMultimaster: Multi-master Cluster Edition
     * - SENormal: Standard Edition
     * > * The Basic edition is supported for PolarDB for MySQL 5.6, 5.7, and 8.0;
     * PolarDB for PostgreSQL 14; and PolarDB for PostgreSQL (compatible with Oracle)
     * 2.0.
     * >
     * > * The ArchiveNormal and NormalMultimaster editions are supported for PolarDB
     * for MySQL 8.0.
     * >
     * > * The SENormal edition is supported for PolarDB for MySQL 5.6, 5.7, and 8.0 and
     * PolarDB for PostgreSQL 14.
     */
    readonly creationCategory?: string | ros.IResolvable;

    /**
     * Property creationOption: The method for creating an ApsaraDB for POLARDB cluster. Valid values:
     * Normal: creates an ApsaraDB for POLARDB cluster.
     * CloneFromPolarDB: clones data from an existing ApsaraDB for POLARDB cluster to a new ApsaraDB for POLARDB cluster.
     * CloneFromRDS: clones data from an existing ApsaraDB for RDS instance to a new ApsaraDB
     * for POLARDB cluster.
     * MigrationFromRDS: migrates data from an existing ApsaraDB for RDS instance to a new ApsaraDB for POLARDB cluster. The created ApsaraDB for POLARDB cluster is in read-only mode and has binary logs enabled by default.
     * CreateGdnStandby: Create a secondary cluster.
     * RecoverFromRecyclebin: Recovers data from the freed PolarDB cluster to the new PolarDB cluster.
     * UpgradeFromPolarDB: Upgrade migration from PolarDB.
     * Default value: Normal.
     * Note:
     * When DBType is MySQL and DBVersion is 5.6, this parameter can be specified as CloneFromRDS or MigrationFromRDS.
     * When DBType is MySQL and DBVersion is 8.0, this parameter can be specified as CreateGdnStandby.
     */
    readonly creationOption?: string | ros.IResolvable;

    /**
     * Property dbClusterDescription: The description of the cluster. The description must comply with the following rules:
     * It must start with a Chinese character or an English letter.
     * It can contain Chinese and English characters, digits, underscores (_), and hyphens (-).
     * It cannot start with http:\/\/ or https:\/\/.
     * It must be 2 to 256 characters in length.
     */
    readonly dbClusterDescription?: string | ros.IResolvable;

    /**
     * Property dbClusterParameters: Modifies the parameters of a the PolarDB cluster.
     */
    readonly dbClusterParameters?: RosDBCluster.DBClusterParametersProperty | ros.IResolvable;

    /**
     * Property dbMinorVersion: The minor version of the cluster. Valid values:
     * 8.0.2
     * 8.0.1
     * This parameter is valid only when the DBType parameter is set to MySQL and the DBVersion parameter is set to 8.0.
     */
    readonly dbMinorVersion?: string | ros.IResolvable;

    /**
     * Property dbNodeNum: The number of nodes for a Standard Edition or Enterprise Edition cluster. Valid
     * values:
     * - Standard Edition: 1 to 8. A cluster of this edition includes one read\/write
     * node and up to seven read-only nodes.
     * - Enterprise Edition: 1 to 16. A cluster of this edition includes one read\/write
     * node and up to 15 read-only nodes.
     * > * By default, an Enterprise Edition cluster has two nodes and a Standard
     * Edition cluster has one node.
     * >
     * > * This parameter is supported only for PolarDB for MySQL.
     * >
     * > * You cannot change the number of nodes in a Multi-master Cluster Edition
     * cluster.
     */
    readonly dbNodeNum?: number | ros.IResolvable;

    /**
     * Property defaultTimeZone: Set up a time zone (UTC), the value range is as follows:
     * System:  The default time zone is the same as the time zone where the region is located. This is default value.
     * Other pickable value range is from -12:00 to +13:00, for example, 00:00.
     * Note: This parameter takes effect only when DBType is MySQL.
     */
    readonly defaultTimeZone?: string | ros.IResolvable;

    /**
     * Property deletionProtection: Specifies whether to enable the release protection feature for the cluster. Default is false.
     */
    readonly deletionProtection?: boolean | ros.IResolvable;

    /**
     * Property gdnId: The ID of the Global Database Network (GDN).
     * Note: This parameter is required when the CreationOption is CreateGdnStandby.
     */
    readonly gdnId?: string | ros.IResolvable;

    /**
     * Property hotStandbyCluster: Specifies whether to enable the hot standby cluster feature. Valid values:
     * - ON (default): enables a hot standby storage cluster.
     * - OFF: disables the hot standby cluster feature.
     * - STANDBY: enables a hot standby cluster.
     * - EQUAL: enables hot standby for both storage and computing resources.
     * - 3AZ: enables multi-AZ strong consistency.
     * > The value STANDBY is valid only for PolarDB for PostgreSQL.
     */
    readonly hotStandbyCluster?: string | ros.IResolvable;

    /**
     * Property loosePolarLogBin: Enable the Binlog function, the value range is as follows:
     * ON: The cluster enables the Binlog function
     * OFF: The cluster disables the Binlog function
     * This parameter takes effect only when the parameter DBType is MySQL.
     */
    readonly loosePolarLogBin?: string | ros.IResolvable;

    /**
     * Property looseXEngine: Specifies whether to enable the X-Engine storage engine. Valid values:
     * - ON: enables the X-Engine storage engine.
     * - OFF: disables the X-Engine storage engine.
     * > This parameter is valid only if the CreationOption parameter is not set to
     * CreateGdnStandby, DBType is set to MySQL, and DBVersion is set to 8.0. To enable
     * the X-Engine storage engine, the node must have at least 8 GB of memory.
     */
    readonly looseXEngine?: string | ros.IResolvable;

    /**
     * Property looseXEngineUseMemoryPct: Set the ratio of enabling the X-Engine storage engine, an integer ranging from 10 to 90.
     * This parameter takes effect only when the parameter LooseXEngine is ON.
     */
    readonly looseXEngineUseMemoryPct?: number | ros.IResolvable;

    /**
     * Property lowerCaseTableNames: Whether the table name is case sensitive, the value range is as follows:
     * 1: Not case sensitive0: case sensitive
     * The default value is 1.
     * Note: This parameter takes effect only when the value of DBType is MySQL.
     */
    readonly lowerCaseTableNames?: number | ros.IResolvable;

    /**
     * Property maintainTime: The maintainable time of the cluster:
     * Format: HH: mmZ- HH: mmZ.
     * Example: 16:00Z-17:00Z, which means 0 to 1 (UTC+08:00) for routine maintenance.
     */
    readonly maintainTime?: string | ros.IResolvable;

    /**
     * Property parameterGroupId: The ID of the parameter template.
     * You can call the DescribeParameterGroups operation to query the details of all parameter templates of a specified region, such as the ID of a parameter template.
     */
    readonly parameterGroupId?: string | ros.IResolvable;

    /**
     * Property period: The subscription period of the clusterIf PeriodUnit is month, the valid range is 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36
     * If periodUnit is year, the valid range is 1, 2, 3
     */
    readonly period?: number | ros.IResolvable;

    /**
     * Property periodUnit: The unit of the subscription duration. Valid values:
     * Month
     * Year
     * Default value: Month.
     */
    readonly periodUnit?: string | ros.IResolvable;

    /**
     * Property provisionedIops: The provisioned read\/write IOPS of the ESSD AutoPL cloud disk. Valid values: 0 to
     * min{50,000, 1,000 × Capacity - Baseline IOPS}.
     */
    readonly provisionedIops?: number | ros.IResolvable;

    /**
     * Property proxyClass: The specifications of the Standard Edition PolarProxy. Valid values:
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
     * Property proxyType: The type of the database proxy. Valid values:
     * - EXCLUSIVE: Enterprise Dedicated
     * - GENERAL: Enterprise General-purpose
     * > The proxy type must be consistent with the type that corresponds to the node
     * specification of the cluster:
     * >
     * > - If the node specification is general-purpose, the proxy type must be
     * Enterprise General-purpose.
     * >
     * > - If the node specification is dedicated, the proxy type must be Enterprise
     * Dedicated.
     */
    readonly proxyType?: string | ros.IResolvable;

    /**
     * Property renewalStatus: The auto renewal status of the cluster Valid values:
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
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property restartMasterNode: Whether to restart the master node.
     */
    readonly restartMasterNode?: boolean | ros.IResolvable;

    /**
     * Property scaleMax: The maximum number of PCUs for a single-node serverless cluster to scale up to.
     * Valid values: 1 to 32.
     * > This parameter is supported only for serverless clusters.
     */
    readonly scaleMax?: number | ros.IResolvable;

    /**
     * Property scaleMin: The minimum number of PolarDB compute units (PCUs) for a single-node serverless
     * cluster to scale down to. Valid values: 1 to 31.
     * > This parameter is supported only for serverless clusters.
     */
    readonly scaleMin?: number | ros.IResolvable;

    /**
     * Property scaleRoNumMax: The maximum number of read-only nodes that the serverless cluster scales up to.
     * Valid values: 0 to 15.
     * > This parameter is supported only for serverless clusters.
     */
    readonly scaleRoNumMax?: number | ros.IResolvable;

    /**
     * Property scaleRoNumMin: The minimum number of read-only nodes that the serverless cluster scales down to.
     * Valid values: 0 to 15.
     * > This parameter is supported only for serverless clusters.
     */
    readonly scaleRoNumMin?: number | ros.IResolvable;

    /**
     * Property securityGroupIds: The ID of the security group. 
     * You can add up to three security groups to a cluster.
     *
     */
    readonly securityGroupIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property securityIpList: The IP whitelist of the PolarDB cluster.
     * > You can specify multiple IP addresses in the IP whitelist. Separate the IP
     * addresses with commas (,).
     */
    readonly securityIpList?: string | ros.IResolvable;

    /**
     * Property serverlessType: Serverless type.
     */
    readonly serverlessType?: string | ros.IResolvable;

    /**
     * Property sourceResourceId: The ID of the source ApsaraDB RDS instance or source PolarDB cluster. This
     * parameter is required only if CreationOption is set to MigrationFromRDS,
     * CloneFromRDS, CloneFromPolarDB, or RecoverFromRecyclebin.
     * - If CreationOption is set to MigrationFromRDS or CloneFromRDS, specify the ID of
     * the source ApsaraDB RDS instance. The source ApsaraDB RDS instance must be
     * ApsaraDB RDS for MySQL 5.6, 5.7, or 8.0 High-availability Edition.
     * - If CreationOption is set to CloneFromPolarDB, specify the ID of the source
     * PolarDB cluster. The new cluster must use the same database engine as the source
     * cluster. For example, if the source cluster runs MySQL 8.0, you must set DBType
     * to MySQL and DBVersion to 8.0 for the new cluster.
     * - If CreationOption is set to RecoverFromRecyclebin, specify the ID of the
     * released source PolarDB cluster. The restored cluster must use the same database
     * engine as the source cluster.
     */
    readonly sourceResourceId?: string | ros.IResolvable;

    /**
     * Property sslEnabled: Modifies the SSL status. Valid values:
     * Disable: disables SSL encryption.
     * Enable: enables SSL encryption.
     * Update: updates the SSL certificate.
     */
    readonly sslEnabled?: string | ros.IResolvable;

    /**
     * Property standbyAz: The zone for the hot standby cluster.
     * > This parameter is valid only when the hot standby cluster feature or multi-AZ
     * strong consistency is enabled.
     */
    readonly standbyAz?: string | ros.IResolvable;

    /**
     * Property storageAutoScale: Whether to enable automatic storage scale for standard version clusters. The value range is as follows:
     * Enable: Enable automatic storage scale.
     * Disable: Disable automatic storage scale.
     */
    readonly storageAutoScale?: string | ros.IResolvable;

    /**
     * Property storagePayType: The billing method for storage. Valid values:
     * - Postpaid: pay-by-capacity (a pay-as-you-go method).
     * - Prepaid: pay-by-space (a subscription method).
     */
    readonly storagePayType?: string | ros.IResolvable;

    /**
     * Property storageSpace: The storage space for a pay-by-space (subscription) cluster. Unit: GB.
     * > - Valid values for a PolarDB for MySQL Enterprise Edition cluster: 10 to 50000.
     * >
     * > - Valid values for a PolarDB for MySQL Standard Edition cluster: 20 to 64000.
     * >
     * > - If the storage type of a Standard Edition cluster is ESSD AutoPL, the storage
     * space must be a multiple of 10 between 40 and 64000.
     */
    readonly storageSpace?: number | ros.IResolvable;

    /**
     * Property storageType: The storage type. Valid values for Enterprise Edition:
     * PSL5
     * PSL4
     * Valid values for Standard Edition:
     * ESSDPL0
     * ESSDPL1
     * ESSDPL2
     * ESSDPL3
     * ESSDAUTOPL
     * This parameter is invalid for serverless clusters.
     */
    readonly storageType?: string | ros.IResolvable;

    /**
     * Property storageUpperBound: Set the upper limit of automatic scale of standard cluster storage, unit: GB.
     * The maximum value is 32000.
     */
    readonly storageUpperBound?: number | ros.IResolvable;

    /**
     * Property strictConsistency: Specifies whether to enable the multi-zone data consistency feature. Valid values:
     * ON: enables the multi-zone data consistency feature, which is valid for Standard Edition clusters of Multi-zone Edition.
     * OFF: disables the multi-zone data consistency feature.
     */
    readonly strictConsistency?: string | ros.IResolvable;

    /**
     * Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosDBCluster.TagsProperty[];

    /**
     * Property tdeStatus: Specifies whether to enable Transparent Data Encryption (TDE). Valid values:
     * true: enable TDE
     * false: disable TDE (default)
     * Note: The parameter takes effect only when DBType is PostgreSQL or Oracle. You cannot disable TDE after it is enabled.
     */
    readonly tdeStatus?: boolean | ros.IResolvable;

    /**
     * Property vpcId: The ID of the VPC to connect to.
     */
    readonly vpcId?: string | ros.IResolvable;

    /**
     * Property vSwitchId: The ID of the VSwitch.
     * > If you specify the VPCId parameter, you must also specify this parameter.
     */
    readonly vSwitchId?: string | ros.IResolvable;

    /**
     * Property zoneId: The zone ID of the cluster. You can call the DescribeRegions operation to query available zones.
     */
    readonly zoneId?: string | ros.IResolvable;
}

/**
 * Represents a `DBCluster`.
 */
export interface IDBCluster extends ros.IResource {
    readonly props: DBClusterProps;

    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    readonly attrArn: ros.IResolvable | string;

    /**
     * Attribute ClusterConnectionString: The cluster connection string of the db cluster.
     */
    readonly attrClusterConnectionString: ros.IResolvable | string;

    /**
     * Attribute ClusterEndpointId: The cluster endpoint ID of the db cluster.
     */
    readonly attrClusterEndpointId: ros.IResolvable | string;

    /**
     * Attribute ColdStorageInstanceId: The ID of the cold storage instance.
     */
    readonly attrColdStorageInstanceId: ros.IResolvable | string;

    /**
     * Attribute CustomConnectionStrings: The custom connection strings of the db cluster.
     */
    readonly attrCustomConnectionStrings: ros.IResolvable | string;

    /**
     * Attribute CustomEndpointIds: The custom endpoint IDs of the db cluster.
     */
    readonly attrCustomEndpointIds: ros.IResolvable | string;

    /**
     * Attribute DBClusterDescription: The description of the db cluster.
     */
    readonly attrDbClusterDescription: ros.IResolvable | string;

    /**
     * Attribute DBClusterId: The ID of the ApsaraDB for POLARDB cluster.
     */
    readonly attrDbClusterId: ros.IResolvable | string;

    /**
     * Attribute DBNodeIds: The ID list of cluster nodes.
     */
    readonly attrDbNodeIds: ros.IResolvable | string;

    /**
     * Attribute OrderId: The Order ID.
     */
    readonly attrOrderId: ros.IResolvable | string;

    /**
     * Attribute PrimaryConnectionString: The primary connection string of the db cluster.
     */
    readonly attrPrimaryConnectionString: ros.IResolvable | string;

    /**
     * Attribute PrimaryConnectionStrings: The primary connection strings of the db cluster.
     */
    readonly attrPrimaryConnectionStrings: ros.IResolvable | string;

    /**
     * Attribute PrimaryEndpointId: The primary endpoint ID of the db cluster.
     */
    readonly attrPrimaryEndpointId: ros.IResolvable | string;

    /**
     * Attribute PrimaryEndpointIds: The primary endpoint IDs of the db cluster.
     */
    readonly attrPrimaryEndpointIds: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::POLARDB::DBCluster`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDBCluster`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbcluster
 */
export class DBCluster extends ros.Resource implements IDBCluster {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: DBClusterProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    public readonly attrArn: ros.IResolvable | string;

    /**
     * Attribute ClusterConnectionString: The cluster connection string of the db cluster.
     */
    public readonly attrClusterConnectionString: ros.IResolvable | string;

    /**
     * Attribute ClusterEndpointId: The cluster endpoint ID of the db cluster.
     */
    public readonly attrClusterEndpointId: ros.IResolvable | string;

    /**
     * Attribute ColdStorageInstanceId: The ID of the cold storage instance.
     */
    public readonly attrColdStorageInstanceId: ros.IResolvable | string;

    /**
     * Attribute CustomConnectionStrings: The custom connection strings of the db cluster.
     */
    public readonly attrCustomConnectionStrings: ros.IResolvable | string;

    /**
     * Attribute CustomEndpointIds: The custom endpoint IDs of the db cluster.
     */
    public readonly attrCustomEndpointIds: ros.IResolvable | string;

    /**
     * Attribute DBClusterDescription: The description of the db cluster.
     */
    public readonly attrDbClusterDescription: ros.IResolvable | string;

    /**
     * Attribute DBClusterId: The ID of the ApsaraDB for POLARDB cluster.
     */
    public readonly attrDbClusterId: ros.IResolvable | string;

    /**
     * Attribute DBNodeIds: The ID list of cluster nodes.
     */
    public readonly attrDbNodeIds: ros.IResolvable | string;

    /**
     * Attribute OrderId: The Order ID.
     */
    public readonly attrOrderId: ros.IResolvable | string;

    /**
     * Attribute PrimaryConnectionString: The primary connection string of the db cluster.
     */
    public readonly attrPrimaryConnectionString: ros.IResolvable | string;

    /**
     * Attribute PrimaryConnectionStrings: The primary connection strings of the db cluster.
     */
    public readonly attrPrimaryConnectionStrings: ros.IResolvable | string;

    /**
     * Attribute PrimaryEndpointId: The primary endpoint ID of the db cluster.
     */
    public readonly attrPrimaryEndpointId: ros.IResolvable | string;

    /**
     * Attribute PrimaryEndpointIds: The primary endpoint IDs of the db cluster.
     */
    public readonly attrPrimaryEndpointIds: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DBClusterProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosDBCluster = new RosDBCluster(this, id,  {
            defaultTimeZone: props.defaultTimeZone,
            resourceGroupId: props.resourceGroupId,
            gdnId: props.gdnId,
            storagePayType: props.storagePayType,
            backupRetentionPolicyOnClusterDeletion: props.backupRetentionPolicyOnClusterDeletion,
            looseXEngine: props.looseXEngine,
            dbType: props.dbType,
            storageAutoScale: props.storageAutoScale,
            dbVersion: props.dbVersion,
            proxyClass: props.proxyClass,
            sslEnabled: props.sslEnabled,
            dbMinorVersion: props.dbMinorVersion,
            dbClusterParameters: props.dbClusterParameters,
            tags: props.tags,
            tdeStatus: props.tdeStatus,
            storageType: props.storageType,
            architecture: props.architecture,
            vSwitchId: props.vSwitchId,
            dbClusterDescription: props.dbClusterDescription,
            renewalStatus: props.renewalStatus === undefined || props.renewalStatus === null ? 'Normal' : props.renewalStatus,
            period: props.period,
            payType: props.payType,
            deletionProtection: props.deletionProtection,
            provisionedIops: props.provisionedIops,
            securityGroupIds: props.securityGroupIds,
            allowShutDown: props.allowShutDown,
            loosePolarLogBin: props.loosePolarLogBin,
            vpcId: props.vpcId,
            proxyType: props.proxyType,
            dbNodeNum: props.dbNodeNum,
            periodUnit: props.periodUnit,
            storageUpperBound: props.storageUpperBound,
            cloneDataPoint: props.cloneDataPoint === undefined || props.cloneDataPoint === null ? 'LATEST' : props.cloneDataPoint,
            hotStandbyCluster: props.hotStandbyCluster,
            sourceResourceId: props.sourceResourceId,
            scaleRoNumMin: props.scaleRoNumMin,
            clusterNetworkType: props.clusterNetworkType === undefined || props.clusterNetworkType === null ? 'VPC' : props.clusterNetworkType,
            securityIpList: props.securityIpList,
            maintainTime: props.maintainTime,
            lowerCaseTableNames: props.lowerCaseTableNames,
            standbyAz: props.standbyAz,
            autoRenewPeriod: props.autoRenewPeriod === undefined || props.autoRenewPeriod === null ? 1 : props.autoRenewPeriod,
            zoneId: props.zoneId,
            scaleRoNumMax: props.scaleRoNumMax,
            coldStorageOption: props.coldStorageOption,
            looseXEngineUseMemoryPct: props.looseXEngineUseMemoryPct,
            scaleMax: props.scaleMax,
            creationCategory: props.creationCategory,
            strictConsistency: props.strictConsistency,
            creationOption: props.creationOption === undefined || props.creationOption === null ? 'Normal' : props.creationOption,
            dbNodeClass: props.dbNodeClass,
            parameterGroupId: props.parameterGroupId,
            storageSpace: props.storageSpace,
            serverlessType: props.serverlessType,
            restartMasterNode: props.restartMasterNode,
            scaleMin: props.scaleMin,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDBCluster;
        this.attrArn = rosDBCluster.attrArn;
        this.attrClusterConnectionString = rosDBCluster.attrClusterConnectionString;
        this.attrClusterEndpointId = rosDBCluster.attrClusterEndpointId;
        this.attrColdStorageInstanceId = rosDBCluster.attrColdStorageInstanceId;
        this.attrCustomConnectionStrings = rosDBCluster.attrCustomConnectionStrings;
        this.attrCustomEndpointIds = rosDBCluster.attrCustomEndpointIds;
        this.attrDbClusterDescription = rosDBCluster.attrDbClusterDescription;
        this.attrDbClusterId = rosDBCluster.attrDbClusterId;
        this.attrDbNodeIds = rosDBCluster.attrDbNodeIds;
        this.attrOrderId = rosDBCluster.attrOrderId;
        this.attrPrimaryConnectionString = rosDBCluster.attrPrimaryConnectionString;
        this.attrPrimaryConnectionStrings = rosDBCluster.attrPrimaryConnectionStrings;
        this.attrPrimaryEndpointId = rosDBCluster.attrPrimaryEndpointId;
        this.attrPrimaryEndpointIds = rosDBCluster.attrPrimaryEndpointIds;
    }
}
