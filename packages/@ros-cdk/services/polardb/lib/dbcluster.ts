import * as ros from '@ros-cdk/core';
import { RosDBCluster } from './polardb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDBCluster as DBClusterProperty };

/**
 * Properties for defining a `ALIYUN::POLARDB::DBCluster`
 */
export interface DBClusterProps {

    /**
     * @Property dbNodeClass: The node specifications of the cluster. For more information, see Specifications and pricing.
     */
    readonly dbNodeClass: string;

    /**
     * @Property dbType: Database type, value:
     * MySQL
     * PostgreSQL
     * Oracle
     */
    readonly dbType: string;

    /**
     * @Property dbVersion: The version of the database. Valid values:
     * MySQL: 5.6 or 8.0
     * PostgreSQL: 11
     * Oracle: 11
     */
    readonly dbVersion: string;

    /**
     * @Property payType: The billing method of the cluster. Valid values:
     * Postpaid: pay-as-you-go
     * Prepaid: subscription
     */
    readonly payType: string;

    /**
     * @Property autoRenewPeriod: Set the cluster auto renewal time. Valid values: 1, 2, 3, 6, 12, 24, 36. Default to 1.
     */
    readonly autoRenewPeriod?: number;

    /**
     * @Property backupRetentionPolicyOnClusterDeletion: The backup set retention policy when deleting a cluster, the value range is as follows:
     * ALL: Keep all backups permanently.
     * LATEST: Permanently keep the last backup (automatic backup before deletion).
     * NONE: The backup set is not retained when the cluster is deleted.
     * When creating a cluster, the default value is NONE, that is, the backup set is not retained when the cluster is deleted.
     * Note: This parameter takes effect only when the value of DBType is MySQL.
     */
    readonly backupRetentionPolicyOnClusterDeletion?: string;

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
    readonly cloneDataPoint?: string;

    /**
     * @Property clusterNetworkType: The network type of the cluster. Currently, only VPC is supported. Default value: VPC.
     */
    readonly clusterNetworkType?: string;

    /**
     * @Property creationCategory: Cluster series. The value could be Normal (standard version).
     */
    readonly creationCategory?: string;

    /**
     * @Property creationOption: The method for creating an ApsaraDB for POLARDB cluster. Valid values:
     * Normal: creates an ApsaraDB for POLARDB cluster.
     * CloneFromPolarDB: clones data from an existing ApsaraDB for POLARDB cluster to a new
     * ApsaraDB for POLARDB cluster.
     * CloneFromRDS: clones data from an existing ApsaraDB for RDS instance to a new ApsaraDB
     * for POLARDB cluster.
     * MigrationFromRDS: migrates data from an existing ApsaraDB for RDS instance to a new
     * ApsaraDB for POLARDB cluster. The created ApsaraDB for POLARDB cluster is in read-only
     * mode and has binary logs enabled by default.
     * Default value: Normal.
     * Note This parameter takes effect only when the DBType parameter is set to MySQL and the DBVersion parameter is set to 5.6.
     */
    readonly creationOption?: string;

    /**
     * @Property dbClusterDescription: The description of the cluster. The description must comply with the following rules:
     * It must start with a Chinese character or an English letter.
     * It can contain Chinese and English characters, digits, underscores (_), and hyphens (-).
     * It cannot start with http:// or https://.
     * It must be 2 to 256 characters in length.
     */
    readonly dbClusterDescription?: string;

    /**
     * @Property defaultTimeZone: Set up a time zone (UTC), the value range is as follows:
     * System:  The default time zone is the same as the time zone where the region is located. This is default value.
     * Other pickable value range is from -12:00 to +13:00, for example, 00:00.
     * Note: This parameter takes effect only when DBType is MySQL.
     */
    readonly defaultTimeZone?: string;

    /**
     * @Property gdnId: The ID of the Global Database Network (GDN).
     * Note: This parameter is required when the CreationOption is CreateGdnStandby.
     */
    readonly gdnId?: string;

    /**
     * @Property lowerCaseTableNames: Whether the table name is case sensitive, the value range is as follows:
     * 1: Not case sensitive0: case sensitive
     * The default value is 1.
     * Note: This parameter takes effect only when the value of DBType is MySQL.
     */
    readonly lowerCaseTableNames?: number;

    /**
     * @Property maintainTime: The maintainable time of the cluster:
     * Format: HH: mmZ- HH: mmZ.
     * Example: 16:00Z-17:00Z, which means 0 to 1 (UTC+08:00) for routine maintenance.
     */
    readonly maintainTime?: string;

    /**
     * @Property period: The subscription period of the cluster in month. Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36.
     */
    readonly period?: number;

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
    readonly renewalStatus?: string;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string;

    /**
     * @Property sourceResourceId: The ID of the source RDS instance or source POLARDB cluster.
     * Note
     * This parameter takes effect only when the DBType parameter is set to MySQL and the DBVersion parameter is set to 5.6.
     * This parameter is required if the CreationOption parameter is not set to Normal.
     */
    readonly sourceResourceId?: string;

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
    readonly vpcId?: string;

    /**
     * @Property vSwitchId: The ID of the VSwitch to connect to.
     */
    readonly vSwitchId?: string;

    /**
     * @Property zoneId: The zone ID of the cluster. You can call the DescribeRegions operation to query available zones.
     */
    readonly zoneId?: string;
}

/**
 * A ROS resource type:  `ALIYUN::POLARDB::DBCluster`
 */
export class DBCluster extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * @Attribute ClusterConnectionString: The cluster connection string of the db cluster.
     */
    public readonly attrClusterConnectionString: any;

    /**
     * @Attribute ClusterEndpointId: The cluster endpoint ID of the db cluster.
     */
    public readonly attrClusterEndpointId: any;

    /**
     * @Attribute CustomConnectionStrings: The custom connection strings of the db cluster.
     */
    public readonly attrCustomConnectionStrings: any;

    /**
     * @Attribute CustomEndpointIds: The custom endpoint IDs of the db cluster.
     */
    public readonly attrCustomEndpointIds: any;

    /**
     * @Attribute DBClusterId: The ID of the ApsaraDB for POLARDB cluster.
     */
    public readonly attrDbClusterId: any;

    /**
     * @Attribute DBNodeIds: The ID list of cluster nodes.
     */
    public readonly attrDbNodeIds: any;

    /**
     * @Attribute OrderId: The Order ID.
     */
    public readonly attrOrderId: any;

    /**
     * @Attribute PrimaryConnectionString: The primary connection string of the db cluster.
     */
    public readonly attrPrimaryConnectionString: any;

    /**
     * @Attribute PrimaryEndpointId: The primary endpoint ID of the db cluster.
     */
    public readonly attrPrimaryEndpointId: any;

    /**
     * Create a new `ALIYUN::POLARDB::DBCluster`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DBClusterProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosDBCluster = new RosDBCluster(this, id,  {
            autoRenewPeriod: props.autoRenewPeriod ? props.autoRenewPeriod : 1,
            defaultTimeZone: props.defaultTimeZone,
            tdeStatus: props.tdeStatus,
            cloneDataPoint: props.cloneDataPoint ? props.cloneDataPoint : 'LATEST',
            gdnId: props.gdnId,
            resourceGroupId: props.resourceGroupId,
            zoneId: props.zoneId,
            vSwitchId: props.vSwitchId,
            backupRetentionPolicyOnClusterDeletion: props.backupRetentionPolicyOnClusterDeletion,
            renewalStatus: props.renewalStatus ? props.renewalStatus : 'Normal',
            dbClusterDescription: props.dbClusterDescription,
            period: props.period,
            sourceResourceId: props.sourceResourceId,
            dbType: props.dbType,
            payType: props.payType,
            creationCategory: props.creationCategory,
            dbNodeClass: props.dbNodeClass,
            creationOption: props.creationOption ? props.creationOption : 'Normal',
            dbVersion: props.dbVersion,
            clusterNetworkType: props.clusterNetworkType ? props.clusterNetworkType : 'VPC',
            vpcId: props.vpcId,
            maintainTime: props.maintainTime,
            lowerCaseTableNames: props.lowerCaseTableNames,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDBCluster;
        this.attrClusterConnectionString = rosDBCluster.attrClusterConnectionString;
        this.attrClusterEndpointId = rosDBCluster.attrClusterEndpointId;
        this.attrCustomConnectionStrings = rosDBCluster.attrCustomConnectionStrings;
        this.attrCustomEndpointIds = rosDBCluster.attrCustomEndpointIds;
        this.attrDbClusterId = rosDBCluster.attrDbClusterId;
        this.attrDbNodeIds = rosDBCluster.attrDbNodeIds;
        this.attrOrderId = rosDBCluster.attrOrderId;
        this.attrPrimaryConnectionString = rosDBCluster.attrPrimaryConnectionString;
        this.attrPrimaryEndpointId = rosDBCluster.attrPrimaryEndpointId;
    }
}
