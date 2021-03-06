import * as ros from '@alicloud/ros-cdk-core';
import { RosDBCluster } from './clickhouse.generated';
export { RosDBCluster as DBClusterProperty };
/**
 * Properties for defining a `ALIYUN::ClickHouse::DBCluster`
 */
export interface DBClusterProps {
    /**
     * Property category: Series, value: Basic: Basic version
     */
    readonly category: string | ros.IResolvable;
    /**
     * Property dbClusterNetworkType: Network type of the cluster instance, value: VPC
     */
    readonly dbClusterNetworkType: string | ros.IResolvable;
    /**
     * Property dbClusterType: Cluster instance type, value:  Common: normal instance;  Readonly: read-only instance; Guard: disaster recovery instance
     */
    readonly dbClusterType: string | ros.IResolvable;
    /**
     * Property dbClusterVersion: Version, value:  19.15.2.2
     */
    readonly dbClusterVersion: string | ros.IResolvable;
    /**
     * Property dbNodeCount: Number of node groups
     */
    readonly dbNodeCount: number | ros.IResolvable;
    /**
     * Property dbNodeStorage: DBNodeStorage
     */
    readonly dbNodeStorage: number | ros.IResolvable;
    /**
     * Property dbNodeStorageType: Instance node storage type. Valid values:  cloud_essd, cloud_efficiency.
     */
    readonly dbNodeStorageType: string | ros.IResolvable;
    /**
     * Property paymentType: PayType
     */
    readonly paymentType: string | ros.IResolvable;
    /**
     * Property dbClusterDescription: DBClusterDescription
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
     * Property usedTime: When Period is Month, the value of UsedTime is [1-9].  When Period is Year, the value of UsedTime is [1-3]
     */
    readonly usedTime?: string | ros.IResolvable;
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
     * Attribute Category: Series, value: Basic: Basic version
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
     * Attribute DBClusterDescription: DBClusterDescription
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
     * Attribute DBClusterType: Cluster instance type, value:  Common: normal instance;  Readonly: read-only instance; Guard: disaster recovery instance
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
     * Attribute DBNodeCount: Number of node groups
     */
    readonly attrDbNodeCount: ros.IResolvable;
    /**
     * Attribute DBNodeStorage: DBNodeStorage
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
