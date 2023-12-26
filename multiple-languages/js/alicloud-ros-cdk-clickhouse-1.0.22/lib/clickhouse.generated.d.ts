import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosDBCluster`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-dbcluster
 */
export interface RosDBClusterProps {
    /**
     * @Property category: The edition of the cluster. Valid values:
     * Basic: Single-replica Edition
     * HighAvailability: Double-replica Edition
     */
    readonly category: string | ros.IResolvable;
    /**
     * @Property dbClusterNetworkType: Network type of the cluster instance, value: VPC
     */
    readonly dbClusterNetworkType: string | ros.IResolvable;
    /**
     * @Property dbClusterType: The specification of the cluster.
     * If the cluster is of the Single-replica Edition, the following values are valid:
     * S4: 4 cores, 16 GB.
     * S8: 8 cores, 32 GB.
     * S16: 16 cores, 64 GB.
     * S32: 32 cores, 128 GB.
     * S64: 64 cores, 256 GB.
     * S104: 104 cores, 384 GB.
     * If the cluster is of the Double-replica Edition, the following values are valid:
     * C4: 4 cores, 16 GB.
     * C8: 8 cores, 32 GB.
     * C16: 16 cores, 64 GB.
     * C32: 32 cores, 128 GB.
     * C64: 64 cores, 256 GB.
     * C104: 104 cores, 384 GB.
     */
    readonly dbClusterType: string | ros.IResolvable;
    /**
     * @Property dbClusterVersion: Version, value:  19.15.2.2
     */
    readonly dbClusterVersion: string | ros.IResolvable;
    /**
     * @Property dbNodeCount: The number of nodes.
     * If the cluster is of the Single-replica Edition, the value ranges from 1 to 48.
     * If the cluster is of the Double-replica Edition, the value ranges from 1 to 24.
     */
    readonly dbNodeCount: number | ros.IResolvable;
    /**
     * @Property dbNodeStorage: The storage capacity of a single node. Valid values: 100 to 32000. Unit: GB.
     * Note self value is a multiple of 100.
     */
    readonly dbNodeStorage: number | ros.IResolvable;
    /**
     * @Property dbNodeStorageType: Instance node storage type. Valid values:  cloud_essd, cloud_efficiency.
     */
    readonly dbNodeStorageType: string | ros.IResolvable;
    /**
     * @Property paymentType: The billing method of the cluster. Valid values:
     * Postpaid: pay-as-you-go
     * Prepaid: subscription
     */
    readonly paymentType: string | ros.IResolvable;
    /**
     * @Property dbClusterDescription: The description of the cluster.
     */
    readonly dbClusterDescription?: string | ros.IResolvable;
    /**
     * @Property encryptionKey: KMS key ID
     */
    readonly encryptionKey?: string | ros.IResolvable;
    /**
     * @Property encryptionType: Kms key type, only cloud disk encryption is supported and the value is CloudDisk.
     */
    readonly encryptionType?: string | ros.IResolvable;
    /**
     * @Property period: Prepaid time period.If the payment type is Prepaid, this parameter is mandatory. Specify the prepaid cluster as a yearly or monthly type. Valid values:  Year, Month.
     */
    readonly period?: string | ros.IResolvable;
    /**
     * @Property usedTime: The subscription duration. Valid values:
     * When Period is Month, it could be from 1 to 9, 12, 24, 36.
     *  When Period is Year, it could be from 1 to 3.
     */
    readonly usedTime?: number | ros.IResolvable;
    /**
     * @Property vpcId: VpcId
     */
    readonly vpcId?: string | ros.IResolvable;
    /**
     * @Property vSwitchId: VSwitchId
     */
    readonly vSwitchId?: string | ros.IResolvable;
    /**
     * @Property zoneId: ZoneId
     */
    readonly zoneId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ClickHouse::DBCluster`, which is used to create an ApsaraDB for ClickHouse cluster.
 * @Note This class does not contain additional functions, so it is recommended to use the `DBCluster` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-dbcluster
 */
export declare class RosDBCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ClickHouse::DBCluster";
    /**
     * @Attribute AliUid: AliUid
     */
    readonly attrAliUid: ros.IResolvable;
    /**
     * @Attribute Bid: BusinessID
     */
    readonly attrBid: ros.IResolvable;
    /**
     * @Attribute Category: The edition of the cluster.
     */
    readonly attrCategory: ros.IResolvable;
    /**
     * @Attribute CommodityCode: Product Code
     */
    readonly attrCommodityCode: ros.IResolvable;
    /**
     * @Attribute ConnectionString: ConnectionString
     */
    readonly attrConnectionString: ros.IResolvable;
    /**
     * @Attribute DBClusterDescription: The description of the cluster.
     */
    readonly attrDbClusterDescription: ros.IResolvable;
    /**
     * @Attribute DBClusterId: The id of DBCluster
     */
    readonly attrDbClusterId: ros.IResolvable;
    /**
     * @Attribute DBClusterNetworkType: Network type of the cluster instance, value: VPC
     */
    readonly attrDbClusterNetworkType: ros.IResolvable;
    /**
     * @Attribute DBClusterType: The specification of the cluster.
     */
    readonly attrDbClusterType: ros.IResolvable;
    /**
     * @Attribute DBClusterVersion: Version, value:  19.15.2.2
     */
    readonly attrDbClusterVersion: ros.IResolvable;
    /**
     * @Attribute DBNodeClass: DBNodeClass
     */
    readonly attrDbNodeClass: ros.IResolvable;
    /**
     * @Attribute DBNodeCount: The number of nodes.
     */
    readonly attrDbNodeCount: ros.IResolvable;
    /**
     * @Attribute DBNodeStorage: The storage capacity of a single node.
     */
    readonly attrDbNodeStorage: ros.IResolvable;
    /**
     * @Attribute DbNodeStorageType: Instance node storage type. Valid values:  cloud_essd, cloud_efficiency.
     */
    readonly attrDbNodeStorageType: ros.IResolvable;
    /**
     * @Attribute EncryptionKey: KMS key ID
     */
    readonly attrEncryptionKey: ros.IResolvable;
    /**
     * @Attribute EncryptionType: Kms key type, only cloud disk encryption is supported and the value is CloudDisk.
     */
    readonly attrEncryptionType: ros.IResolvable;
    /**
     * @Attribute Engine: Engine
     */
    readonly attrEngine: ros.IResolvable;
    /**
     * @Attribute EngineVersion: EngineVersion
     */
    readonly attrEngineVersion: ros.IResolvable;
    /**
     * @Attribute IsExpired: IsExpired
     */
    readonly attrIsExpired: ros.IResolvable;
    /**
     * @Attribute LockMode: LockMode
     */
    readonly attrLockMode: ros.IResolvable;
    /**
     * @Attribute LockReason: Reason for lock
     */
    readonly attrLockReason: ros.IResolvable;
    /**
     * @Attribute PaymentType: PayType
     */
    readonly attrPaymentType: ros.IResolvable;
    /**
     * @Attribute Period: Prepaid time period.If the payment type is Prepaid, this parameter is mandatory. Specify the prepaid cluster as a yearly or monthly type. Valid values:  Year, Month.
     */
    readonly attrPeriod: ros.IResolvable;
    /**
     * @Attribute Port: Connection port
     */
    readonly attrPort: ros.IResolvable;
    /**
     * @Attribute PublicConnectionString: Internet connection address
     */
    readonly attrPublicConnectionString: ros.IResolvable;
    /**
     * @Attribute PublicPort: PublicPort
     */
    readonly attrPublicPort: ros.IResolvable;
    /**
     * @Attribute StorageType: StorageType
     */
    readonly attrStorageType: ros.IResolvable;
    /**
     * @Attribute VSwitchId: VSwitchId
     */
    readonly attrVSwitchId: ros.IResolvable;
    /**
     * @Attribute VpcCloudInstanceId: VpcCloudInstanceId
     */
    readonly attrVpcCloudInstanceId: ros.IResolvable;
    /**
     * @Attribute VpcId: VpcId
     */
    readonly attrVpcId: ros.IResolvable;
    /**
     * @Attribute ZoneId: ZoneId
     */
    readonly attrZoneId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property category: The edition of the cluster. Valid values:
     * Basic: Single-replica Edition
     * HighAvailability: Double-replica Edition
     */
    category: string | ros.IResolvable;
    /**
     * @Property dbClusterNetworkType: Network type of the cluster instance, value: VPC
     */
    dbClusterNetworkType: string | ros.IResolvable;
    /**
     * @Property dbClusterType: The specification of the cluster.
     * If the cluster is of the Single-replica Edition, the following values are valid:
     * S4: 4 cores, 16 GB.
     * S8: 8 cores, 32 GB.
     * S16: 16 cores, 64 GB.
     * S32: 32 cores, 128 GB.
     * S64: 64 cores, 256 GB.
     * S104: 104 cores, 384 GB.
     * If the cluster is of the Double-replica Edition, the following values are valid:
     * C4: 4 cores, 16 GB.
     * C8: 8 cores, 32 GB.
     * C16: 16 cores, 64 GB.
     * C32: 32 cores, 128 GB.
     * C64: 64 cores, 256 GB.
     * C104: 104 cores, 384 GB.
     */
    dbClusterType: string | ros.IResolvable;
    /**
     * @Property dbClusterVersion: Version, value:  19.15.2.2
     */
    dbClusterVersion: string | ros.IResolvable;
    /**
     * @Property dbNodeCount: The number of nodes.
     * If the cluster is of the Single-replica Edition, the value ranges from 1 to 48.
     * If the cluster is of the Double-replica Edition, the value ranges from 1 to 24.
     */
    dbNodeCount: number | ros.IResolvable;
    /**
     * @Property dbNodeStorage: The storage capacity of a single node. Valid values: 100 to 32000. Unit: GB.
     * Note self value is a multiple of 100.
     */
    dbNodeStorage: number | ros.IResolvable;
    /**
     * @Property dbNodeStorageType: Instance node storage type. Valid values:  cloud_essd, cloud_efficiency.
     */
    dbNodeStorageType: string | ros.IResolvable;
    /**
     * @Property paymentType: The billing method of the cluster. Valid values:
     * Postpaid: pay-as-you-go
     * Prepaid: subscription
     */
    paymentType: string | ros.IResolvable;
    /**
     * @Property dbClusterDescription: The description of the cluster.
     */
    dbClusterDescription: string | ros.IResolvable | undefined;
    /**
     * @Property encryptionKey: KMS key ID
     */
    encryptionKey: string | ros.IResolvable | undefined;
    /**
     * @Property encryptionType: Kms key type, only cloud disk encryption is supported and the value is CloudDisk.
     */
    encryptionType: string | ros.IResolvable | undefined;
    /**
     * @Property period: Prepaid time period.If the payment type is Prepaid, this parameter is mandatory. Specify the prepaid cluster as a yearly or monthly type. Valid values:  Year, Month.
     */
    period: string | ros.IResolvable | undefined;
    /**
     * @Property usedTime: The subscription duration. Valid values:
     * When Period is Month, it could be from 1 to 9, 12, 24, 36.
     *  When Period is Year, it could be from 1 to 3.
     */
    usedTime: number | ros.IResolvable | undefined;
    /**
     * @Property vpcId: VpcId
     */
    vpcId: string | ros.IResolvable | undefined;
    /**
     * @Property vSwitchId: VSwitchId
     */
    vSwitchId: string | ros.IResolvable | undefined;
    /**
     * @Property zoneId: ZoneId
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
/**
 * Properties for defining a `RosSynDb`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-syndb
 */
export interface RosSynDbProps {
    /**
     * @Property ckPassword: The password of the database account
     */
    readonly ckPassword: string | ros.IResolvable;
    /**
     * @Property ckUserName: The account of the clickhouse database.
     */
    readonly ckUserName: string | ros.IResolvable;
    /**
     * @Property dbClusterId: Clickhouse cluster id.
     */
    readonly dbClusterId: string | ros.IResolvable;
    /**
     * @Property rdsId: The instance id of RDS.
     */
    readonly rdsId: string | ros.IResolvable;
    /**
     * @Property rdsPassword: The password of the RDS database account.
     */
    readonly rdsPassword: string | ros.IResolvable;
    /**
     * @Property rdsUserName: The account of the RDS database.
     */
    readonly rdsUserName: string | ros.IResolvable;
    /**
     * @Property skipUnsupported: Skip unsupported table or not.
     */
    readonly skipUnsupported: boolean | ros.IResolvable;
    /**
     * @Property synDbTables: The tables to syn.
     */
    readonly synDbTables: Array<RosSynDb.SynDbTablesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property clickhousePort: The port of clickhouse id.
     */
    readonly clickhousePort?: number | ros.IResolvable;
    /**
     * @Property limitUpper: The maximum number of rows to sync per second.
     */
    readonly limitUpper?: number | ros.IResolvable;
    /**
     * @Property rdsPort: The port of rds.
     */
    readonly rdsPort?: number | ros.IResolvable;
    /**
     * @Property rdsVpcId: The vpc of rds.
     */
    readonly rdsVpcId?: string | ros.IResolvable;
    /**
     * @Property rdsVpcUrl: Intranet address of ApsaraDB for RDS.
     */
    readonly rdsVpcUrl?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ClickHouse::SynDb`, which is used to create a synchronization task for an ApsaraDB for ClickHouse Community-compatible Edition cluster.
 * @Note This class does not contain additional functions, so it is recommended to use the `SynDb` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-syndb
 */
export declare class RosSynDb extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ClickHouse::SynDb";
    /**
     * @Attribute DbClusterId: The id of clickhouse.
     */
    readonly attrDbClusterId: ros.IResolvable;
    /**
     * @Attribute RdsId: The id of RDS
     */
    readonly attrRdsId: ros.IResolvable;
    /**
     * @Attribute SynDbs: Sync Dbs
     */
    readonly attrSynDbs: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property ckPassword: The password of the database account
     */
    ckPassword: string | ros.IResolvable;
    /**
     * @Property ckUserName: The account of the clickhouse database.
     */
    ckUserName: string | ros.IResolvable;
    /**
     * @Property dbClusterId: Clickhouse cluster id.
     */
    dbClusterId: string | ros.IResolvable;
    /**
     * @Property rdsId: The instance id of RDS.
     */
    rdsId: string | ros.IResolvable;
    /**
     * @Property rdsPassword: The password of the RDS database account.
     */
    rdsPassword: string | ros.IResolvable;
    /**
     * @Property rdsUserName: The account of the RDS database.
     */
    rdsUserName: string | ros.IResolvable;
    /**
     * @Property skipUnsupported: Skip unsupported table or not.
     */
    skipUnsupported: boolean | ros.IResolvable;
    /**
     * @Property synDbTables: The tables to syn.
     */
    synDbTables: Array<RosSynDb.SynDbTablesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property clickhousePort: The port of clickhouse id.
     */
    clickhousePort: number | ros.IResolvable | undefined;
    /**
     * @Property limitUpper: The maximum number of rows to sync per second.
     */
    limitUpper: number | ros.IResolvable | undefined;
    /**
     * @Property rdsPort: The port of rds.
     */
    rdsPort: number | ros.IResolvable | undefined;
    /**
     * @Property rdsVpcId: The vpc of rds.
     */
    rdsVpcId: string | ros.IResolvable | undefined;
    /**
     * @Property rdsVpcUrl: Intranet address of ApsaraDB for RDS.
     */
    rdsVpcUrl: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSynDbProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosSynDb {
    /**
     * @stability external
     */
    interface SynDbTablesProperty {
        /**
         * @Property schema: Database name.
         */
        readonly schema: string | ros.IResolvable;
        /**
         * @Property tables: Table names
         */
        readonly tables: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
