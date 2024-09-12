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
     * Property dbNodeClass: The node specifications of the cluster. For more information, see Specifications and pricing.
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
     * Property dbVersion: The version of the database. Valid values:
     * MySQL: 5.6, 5.7 or 8.0
     * PostgreSQL: 11, 14, 15
     * Oracle: 11, 14
     */
    readonly dbVersion: string | ros.IResolvable;

    /**
     * Property payType: The billing method of the cluster. Valid values:
     * Postpaid: pay-as-you-go
     * Prepaid: subscription
     */
    readonly payType: string | ros.IResolvable;

    /**
     * Property allowShutDown: Whether to turn on No activity pause. The default is false.
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
     * Property backupRetentionPolicyOnClusterDeletion: The backup set retention policy when deleting a cluster, the value range is as follows:
     * ALL: Keep all backups permanently.
     * LATEST: Permanently keep the last backup (automatic backup before deletion).
     * NONE: The backup set is not retained when the cluster is deleted.
     * When creating a cluster, the default value is NONE, that is, the backup set is not retained when the cluster is deleted.
     * Note: This parameter takes effect only when the value of DBType is MySQL.
     */
    readonly backupRetentionPolicyOnClusterDeletion?: string | ros.IResolvable;

    /**
     * Property cloneDataPoint: The time point of data to be cloned. Valid values:
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
     * Property clusterNetworkType: The network type of the cluster. Currently, only VPC is supported. Default value: VPC.
     */
    readonly clusterNetworkType?: string | ros.IResolvable;

    /**
     * Property coldStorageOption: The option of cold storage.
     */
    readonly coldStorageOption?: RosDBCluster.ColdStorageOptionProperty | ros.IResolvable;

    /**
     * Property creationCategory: Cluster series. The value could be Normal (standard version), Basic, ArchiveNormal, NormalMultimaster and SENormal.
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
     * Property dbNodeNum: The number of Standard Edition nodes. Default value: 1. Valid values:
     * 1: only one primary node.
     * 2: one read-only node and one primary node.
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
     * Property gdnId: The ID of the Global Database Network (GDN).
     * Note: This parameter is required when the CreationOption is CreateGdnStandby.
     */
    readonly gdnId?: string | ros.IResolvable;

    /**
     * Property hotStandbyCluster: Specifies whether to enable the hot standby storage cluster feature. Default value: ON. Valid values:
     * ON: enables the hot standby storage cluster feature.
     * OFF: disables the hot standby storage cluster feature
     * STANDBY: enables the hot standby storage cluster feature only for Standard Edition clusters.
     * The default value for Standard Edition clusters is STANDBY.
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
     * Property looseXEngine: Enable the X-Engine storage engine function, the value range is as follows:
     * ON: The cluster starts the X-Engine enginen
     * OFF: The cluster shuts down the X-Engine engine
     * This parameter takes effect only when the parameter CreationOption is not equal to CreateGdnStandby, DBType is MySQL and DBVersion is 8.0. The memory specification of the node with X-Engine enabled must be greater than or equal to 16 GB.
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
     * Property provisionedIops: ESSD AutoPL preconfigured read and write IOPS for cloud disk. Possible values: 0-min {50,000, 1000* capacity - baseline performance}.
     * Baseline performance =min{1,800+50* capacity, 50000}.
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
     * Property proxyType: The type of PolarProxy. Default value: OFF. Valid values:
     * OFF: disables PolarProxy.
     * EXCLUSIVE: Dedicated Enterprise Edition
     * GENERAL: Standard Enterprise Edition
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
     * Property scaleMax: Maximum limit of single-node scaling.
     */
    readonly scaleMax?: number | ros.IResolvable;

    /**
     * Property scaleMin: Minimum limit of single-node scaling.
     */
    readonly scaleMin?: number | ros.IResolvable;

    /**
     * Property scaleRoNumMax: The maximum scaling limit for the number of read-only nodes.
     */
    readonly scaleRoNumMax?: number | ros.IResolvable;

    /**
     * Property scaleRoNumMin: The minimum scaling limit for the number of read-only nodes.
     */
    readonly scaleRoNumMin?: number | ros.IResolvable;

    /**
     * Property securityGroupIds: The ID of the security group. 
     * You can add up to three security groups to a cluster.
     *
     */
    readonly securityGroupIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property securityIpList: The whitelist of the Apsara PolarDB cluster.
     */
    readonly securityIpList?: string | ros.IResolvable;

    /**
     * Property serverlessType: Serverless type.
     */
    readonly serverlessType?: string | ros.IResolvable;

    /**
     * Property sourceResourceId: The ID of the source RDS instance or source POLARDB cluster.
     * Note
     * This parameter takes effect only when the DBType parameter is set to MySQL and the DBVersion parameter is set to 5.6.
     * This parameter is required if the CreationOption parameter is not set to Normal.
     */
    readonly sourceResourceId?: string | ros.IResolvable;

    /**
     * Property standbyAz: The zone where the hot standby storage cluster is stored. This is valid for Standard Edition clusters of Multi-zone Edition.
     * This parameter takes effect only when the multi-zone data consistency feature is enabled.
     */
    readonly standbyAz?: string | ros.IResolvable;

    /**
     * Property storageAutoScale: Whether to enable automatic storage scale for standard version clusters. The value range is as follows:
     * Enable: Enable automatic storage scale.
     * Disable: Disable automatic storage scale.
     */
    readonly storageAutoScale?: string | ros.IResolvable;

    /**
     * Property storagePayType: The storage pay type.
     */
    readonly storagePayType?: string | ros.IResolvable;

    /**
     * Property storageSpace: The storage space that uses the subscription billing method. Unit: GB.
     * Valid values for PolarDB for MySQL Standard Edition: 20 to 32000.
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
     * Property vSwitchId: The ID of the VSwitch to connect to.
     */
    readonly vSwitchId?: string | ros.IResolvable;

    /**
     * Property zoneId: The zone ID of the cluster. You can call the DescribeRegions operation to query available zones.
     */
    readonly zoneId?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::POLARDB::DBCluster`, which is used to create a PolarDB cluster.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDBCluster`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbcluster
 */
export class DBCluster extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: DBClusterProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ClusterConnectionString: The cluster connection string of the db cluster.
     */
    public readonly attrClusterConnectionString: ros.IResolvable;

    /**
     * Attribute ClusterEndpointId: The cluster endpoint ID of the db cluster.
     */
    public readonly attrClusterEndpointId: ros.IResolvable;

    /**
     * Attribute ColdStorageInstanceId: The ID of the cold storage instance.
     */
    public readonly attrColdStorageInstanceId: ros.IResolvable;

    /**
     * Attribute CustomConnectionStrings: The custom connection strings of the db cluster.
     */
    public readonly attrCustomConnectionStrings: ros.IResolvable;

    /**
     * Attribute CustomEndpointIds: The custom endpoint IDs of the db cluster.
     */
    public readonly attrCustomEndpointIds: ros.IResolvable;

    /**
     * Attribute DBClusterDescription: The description of the db cluster.
     */
    public readonly attrDbClusterDescription: ros.IResolvable;

    /**
     * Attribute DBClusterId: The ID of the ApsaraDB for POLARDB cluster.
     */
    public readonly attrDbClusterId: ros.IResolvable;

    /**
     * Attribute DBNodeIds: The ID list of cluster nodes.
     */
    public readonly attrDbNodeIds: ros.IResolvable;

    /**
     * Attribute OrderId: The Order ID.
     */
    public readonly attrOrderId: ros.IResolvable;

    /**
     * Attribute PrimaryConnectionString: The primary connection string of the db cluster.
     */
    public readonly attrPrimaryConnectionString: ros.IResolvable;

    /**
     * Attribute PrimaryConnectionStrings: The primary connection strings of the db cluster.
     */
    public readonly attrPrimaryConnectionStrings: ros.IResolvable;

    /**
     * Attribute PrimaryEndpointId: The primary endpoint ID of the db cluster.
     */
    public readonly attrPrimaryEndpointId: ros.IResolvable;

    /**
     * Attribute PrimaryEndpointIds: The primary endpoint IDs of the db cluster.
     */
    public readonly attrPrimaryEndpointIds: ros.IResolvable;

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
            gdnId: props.gdnId,
            resourceGroupId: props.resourceGroupId,
            storagePayType: props.storagePayType,
            backupRetentionPolicyOnClusterDeletion: props.backupRetentionPolicyOnClusterDeletion,
            looseXEngine: props.looseXEngine,
            dbType: props.dbType,
            storageAutoScale: props.storageAutoScale,
            proxyClass: props.proxyClass,
            dbVersion: props.dbVersion,
            dbMinorVersion: props.dbMinorVersion,
            dbClusterParameters: props.dbClusterParameters,
            tags: props.tags,
            tdeStatus: props.tdeStatus,
            storageType: props.storageType,
            architecture: props.architecture,
            vSwitchId: props.vSwitchId,
            renewalStatus: props.renewalStatus === undefined || props.renewalStatus === null ? 'Normal' : props.renewalStatus,
            dbClusterDescription: props.dbClusterDescription,
            period: props.period,
            payType: props.payType,
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
            standbyAz: props.standbyAz,
            lowerCaseTableNames: props.lowerCaseTableNames,
            autoRenewPeriod: props.autoRenewPeriod === undefined || props.autoRenewPeriod === null ? 1 : props.autoRenewPeriod,
            zoneId: props.zoneId,
            coldStorageOption: props.coldStorageOption,
            scaleRoNumMax: props.scaleRoNumMax,
            looseXEngineUseMemoryPct: props.looseXEngineUseMemoryPct,
            scaleMax: props.scaleMax,
            creationCategory: props.creationCategory,
            strictConsistency: props.strictConsistency,
            dbNodeClass: props.dbNodeClass,
            creationOption: props.creationOption === undefined || props.creationOption === null ? 'Normal' : props.creationOption,
            parameterGroupId: props.parameterGroupId,
            storageSpace: props.storageSpace,
            serverlessType: props.serverlessType,
            restartMasterNode: props.restartMasterNode,
            scaleMin: props.scaleMin,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDBCluster;
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
