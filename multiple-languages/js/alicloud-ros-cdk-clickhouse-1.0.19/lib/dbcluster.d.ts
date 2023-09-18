import * as ros from '@alicloud/ros-cdk-core';
import { RosDBCluster } from './clickhouse.generated';
export { RosDBCluster as DBClusterProperty };
/**
 * Properties for defining a `ALIYUN::ClickHouse::DBCluster`
 */
export interface DBClusterProps {
    /**
     * Property category: The edition of the cluster. Valid values:
     * Basic: Single-replica Edition
     * HighAvailability: Double-replica Edition
     */
    readonly category: string | ros.IResolvable;
    /**
     * Property dbClusterNetworkType: Network type of the cluster instance, value: VPC
     */
    readonly dbClusterNetworkType: string | ros.IResolvable;
    /**
     * Property dbClusterType: The specification of the cluster.
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
     * Property dbClusterVersion: Version, value:  19.15.2.2
     */
    readonly dbClusterVersion: string | ros.IResolvable;
    /**
     * Property dbNodeCount: The number of nodes.
     * If the cluster is of the Single-replica Edition, the value ranges from 1 to 48.
     * If the cluster is of the Double-replica Edition, the value ranges from 1 to 24.
     */
    readonly dbNodeCount: number | ros.IResolvable;
    /**
     * Property dbNodeStorage: The storage capacity of a single node. Valid values: 100 to 32000. Unit: GB.
     * Note self value is a multiple of 100.
     */
    readonly dbNodeStorage: number | ros.IResolvable;
    /**
     * Property dbNodeStorageType: Instance node storage type. Valid values:  cloud_essd, cloud_efficiency.
     */
    readonly dbNodeStorageType: string | ros.IResolvable;
    /**
     * Property paymentType: The billing method of the cluster. Valid values:
     * Postpaid: pay-as-you-go
     * Prepaid: subscription
     */
    readonly paymentType: string | ros.IResolvable;
    /**
     * Property dbClusterDescription: The description of the cluster.
     */
    readonly dbClusterDescription?: string | ros.IResolvable;
    /**
     * Property encryptionKey: KMS key ID
     */
    readonly encryptionKey?: string | ros.IResolvable;
    /**
     * Property encryptionType: Kms key type, only cloud disk encryption is supported and the value is CloudDisk.
     */
    readonly encryptionType?: string | ros.IResolvable;
    /**
     * Property period: Prepaid time period.If the payment type is Prepaid, this parameter is mandatory. Specify the prepaid cluster as a yearly or monthly type. Valid values:  Year, Month.
     */
    readonly period?: string | ros.IResolvable;
    /**
     * Property usedTime: The subscription duration. Valid values:
     * When Period is Month, it could be from 1 to 9, 12, 24, 36.
     *  When Period is Year, it could be from 1 to 3.
     */
    readonly usedTime?: number | ros.IResolvable;
    /**
     * Property vpcId: VpcId
     */
    readonly vpcId?: string | ros.IResolvable;
    /**
     * Property vSwitchId: VSwitchId
     */
    readonly vSwitchId?: string | ros.IResolvable;
    /**
     * Property zoneId: ZoneId
     */
    readonly zoneId?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::ClickHouse::DBCluster`
 */
export declare class DBCluster extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute AliUid: AliUid
     */
    readonly attrAliUid: ros.IResolvable;
    /**
     * Attribute Bid: BusinessID
     */
    readonly attrBid: ros.IResolvable;
    /**
     * Attribute Category: The edition of the cluster.
     */
    readonly attrCategory: ros.IResolvable;
    /**
     * Attribute CommodityCode: Product Code
     */
    readonly attrCommodityCode: ros.IResolvable;
    /**
     * Attribute ConnectionString: ConnectionString
     */
    readonly attrConnectionString: ros.IResolvable;
    /**
     * Attribute DBClusterDescription: The description of the cluster.
     */
    readonly attrDbClusterDescription: ros.IResolvable;
    /**
     * Attribute DBClusterId: The id of DBCluster
     */
    readonly attrDbClusterId: ros.IResolvable;
    /**
     * Attribute DBClusterNetworkType: Network type of the cluster instance, value: VPC
     */
    readonly attrDbClusterNetworkType: ros.IResolvable;
    /**
     * Attribute DBClusterType: The specification of the cluster.
     */
    readonly attrDbClusterType: ros.IResolvable;
    /**
     * Attribute DBClusterVersion: Version, value:  19.15.2.2
     */
    readonly attrDbClusterVersion: ros.IResolvable;
    /**
     * Attribute DBNodeClass: DBNodeClass
     */
    readonly attrDbNodeClass: ros.IResolvable;
    /**
     * Attribute DBNodeCount: The number of nodes.
     */
    readonly attrDbNodeCount: ros.IResolvable;
    /**
     * Attribute DBNodeStorage: The storage capacity of a single node.
     */
    readonly attrDbNodeStorage: ros.IResolvable;
    /**
     * Attribute DbNodeStorageType: Instance node storage type. Valid values:  cloud_essd, cloud_efficiency.
     */
    readonly attrDbNodeStorageType: ros.IResolvable;
    /**
     * Attribute EncryptionKey: KMS key ID
     */
    readonly attrEncryptionKey: ros.IResolvable;
    /**
     * Attribute EncryptionType: Kms key type, only cloud disk encryption is supported and the value is CloudDisk.
     */
    readonly attrEncryptionType: ros.IResolvable;
    /**
     * Attribute Engine: Engine
     */
    readonly attrEngine: ros.IResolvable;
    /**
     * Attribute EngineVersion: EngineVersion
     */
    readonly attrEngineVersion: ros.IResolvable;
    /**
     * Attribute IsExpired: IsExpired
     */
    readonly attrIsExpired: ros.IResolvable;
    /**
     * Attribute LockMode: LockMode
     */
    readonly attrLockMode: ros.IResolvable;
    /**
     * Attribute LockReason: Reason for lock
     */
    readonly attrLockReason: ros.IResolvable;
    /**
     * Attribute PaymentType: PayType
     */
    readonly attrPaymentType: ros.IResolvable;
    /**
     * Attribute Period: Prepaid time period.If the payment type is Prepaid, this parameter is mandatory. Specify the prepaid cluster as a yearly or monthly type. Valid values:  Year, Month.
     */
    readonly attrPeriod: ros.IResolvable;
    /**
     * Attribute Port: Connection port
     */
    readonly attrPort: ros.IResolvable;
    /**
     * Attribute PublicConnectionString: Internet connection address
     */
    readonly attrPublicConnectionString: ros.IResolvable;
    /**
     * Attribute PublicPort: PublicPort
     */
    readonly attrPublicPort: ros.IResolvable;
    /**
     * Attribute StorageType: StorageType
     */
    readonly attrStorageType: ros.IResolvable;
    /**
     * Attribute VSwitchId: VSwitchId
     */
    readonly attrVSwitchId: ros.IResolvable;
    /**
     * Attribute VpcCloudInstanceId: VpcCloudInstanceId
     */
    readonly attrVpcCloudInstanceId: ros.IResolvable;
    /**
     * Attribute VpcId: VpcId
     */
    readonly attrVpcId: ros.IResolvable;
    /**
     * Attribute ZoneId: ZoneId
     */
    readonly attrZoneId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::ClickHouse::DBCluster`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DBClusterProps, enableResourcePropertyConstraint?: boolean);
}
