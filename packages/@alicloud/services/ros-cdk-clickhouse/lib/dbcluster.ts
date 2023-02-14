import * as ros from '@alicloud/ros-cdk-core';
import { RosDBCluster } from './clickhouse.generated';
// Generated from the AliCloud ROS Resource Specification
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
     * Property paymentType: The billing method of the cluster. Valid values:
     * Postpaid: pay-as-you-go
     * Prepaid: subscription
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
export class DBCluster extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute AliUid: AliUid
     */
    public readonly attrAliUid: ros.IResolvable;

    /**
     * Attribute Bid: BusinessID
     */
    public readonly attrBid: ros.IResolvable;

    /**
     * Attribute Category: Series, value: Basic: Basic version
     */
    public readonly attrCategory: ros.IResolvable;

    /**
     * Attribute CommodityCode: Product Code
     */
    public readonly attrCommodityCode: ros.IResolvable;

    /**
     * Attribute ConnectionString: ConnectionString
     */
    public readonly attrConnectionString: ros.IResolvable;

    /**
     * Attribute DBClusterDescription: DBClusterDescription
     */
    public readonly attrDbClusterDescription: ros.IResolvable;

    /**
     * Attribute DBClusterId: The id of DBCluster
     */
    public readonly attrDbClusterId: ros.IResolvable;

    /**
     * Attribute DBClusterNetworkType: Network type of the cluster instance, value: VPC
     */
    public readonly attrDbClusterNetworkType: ros.IResolvable;

    /**
     * Attribute DBClusterType: Cluster instance type, value:  Common: normal instance;  Readonly: read-only instance; Guard: disaster recovery instance
     */
    public readonly attrDbClusterType: ros.IResolvable;

    /**
     * Attribute DBClusterVersion: Version, value:  19.15.2.2
     */
    public readonly attrDbClusterVersion: ros.IResolvable;

    /**
     * Attribute DBNodeClass: DBNodeClass
     */
    public readonly attrDbNodeClass: ros.IResolvable;

    /**
     * Attribute DBNodeCount: Number of node groups
     */
    public readonly attrDbNodeCount: ros.IResolvable;

    /**
     * Attribute DBNodeStorage: DBNodeStorage
     */
    public readonly attrDbNodeStorage: ros.IResolvable;

    /**
     * Attribute DbNodeStorageType: Instance node storage type. Valid values:  cloud_essd, cloud_efficiency.
     */
    public readonly attrDbNodeStorageType: ros.IResolvable;

    /**
     * Attribute EncryptionKey: KMS key ID
     */
    public readonly attrEncryptionKey: ros.IResolvable;

    /**
     * Attribute EncryptionType: Kms key type, only cloud disk encryption is supported and the value is CloudDisk.
     */
    public readonly attrEncryptionType: ros.IResolvable;

    /**
     * Attribute Engine: Engine
     */
    public readonly attrEngine: ros.IResolvable;

    /**
     * Attribute EngineVersion: EngineVersion
     */
    public readonly attrEngineVersion: ros.IResolvable;

    /**
     * Attribute IsExpired: IsExpired
     */
    public readonly attrIsExpired: ros.IResolvable;

    /**
     * Attribute LockMode: LockMode
     */
    public readonly attrLockMode: ros.IResolvable;

    /**
     * Attribute LockReason: Reason for lock
     */
    public readonly attrLockReason: ros.IResolvable;

    /**
     * Attribute PaymentType: PayType
     */
    public readonly attrPaymentType: ros.IResolvable;

    /**
     * Attribute Period: Prepaid time period.If the payment type is Prepaid, this parameter is mandatory. Specify the prepaid cluster as a yearly or monthly type. Valid values:  Year, Month.
     */
    public readonly attrPeriod: ros.IResolvable;

    /**
     * Attribute Port: Connection port
     */
    public readonly attrPort: ros.IResolvable;

    /**
     * Attribute PublicConnectionString: Internet connection address
     */
    public readonly attrPublicConnectionString: ros.IResolvable;

    /**
     * Attribute PublicPort: PublicPort
     */
    public readonly attrPublicPort: ros.IResolvable;

    /**
     * Attribute StorageType: StorageType
     */
    public readonly attrStorageType: ros.IResolvable;

    /**
     * Attribute VSwitchId: VSwitchId
     */
    public readonly attrVSwitchId: ros.IResolvable;

    /**
     * Attribute VpcCloudInstanceId: VpcCloudInstanceId
     */
    public readonly attrVpcCloudInstanceId: ros.IResolvable;

    /**
     * Attribute VpcId: VpcId
     */
    public readonly attrVpcId: ros.IResolvable;

    /**
     * Attribute ZoneId: ZoneId
     */
    public readonly attrZoneId: ros.IResolvable;

    /**
     * Create a new `ALIYUN::ClickHouse::DBCluster`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DBClusterProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosDBCluster = new RosDBCluster(this, id,  {
            dbNodeStorageType: props.dbNodeStorageType,
            dbNodeStorage: props.dbNodeStorage,
            encryptionType: props.encryptionType,
            category: props.category,
            zoneId: props.zoneId,
            vSwitchId: props.vSwitchId,
            dbClusterDescription: props.dbClusterDescription,
            period: props.period,
            encryptionKey: props.encryptionKey,
            dbClusterNetworkType: props.dbClusterNetworkType,
            dbClusterType: props.dbClusterType,
            vpcId: props.vpcId,
            dbClusterVersion: props.dbClusterVersion,
            dbNodeCount: props.dbNodeCount,
            usedTime: props.usedTime,
            paymentType: props.paymentType,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDBCluster;
        this.attrAliUid = rosDBCluster.attrAliUid;
        this.attrBid = rosDBCluster.attrBid;
        this.attrCategory = rosDBCluster.attrCategory;
        this.attrCommodityCode = rosDBCluster.attrCommodityCode;
        this.attrConnectionString = rosDBCluster.attrConnectionString;
        this.attrDbClusterDescription = rosDBCluster.attrDbClusterDescription;
        this.attrDbClusterId = rosDBCluster.attrDbClusterId;
        this.attrDbClusterNetworkType = rosDBCluster.attrDbClusterNetworkType;
        this.attrDbClusterType = rosDBCluster.attrDbClusterType;
        this.attrDbClusterVersion = rosDBCluster.attrDbClusterVersion;
        this.attrDbNodeClass = rosDBCluster.attrDbNodeClass;
        this.attrDbNodeCount = rosDBCluster.attrDbNodeCount;
        this.attrDbNodeStorage = rosDBCluster.attrDbNodeStorage;
        this.attrDbNodeStorageType = rosDBCluster.attrDbNodeStorageType;
        this.attrEncryptionKey = rosDBCluster.attrEncryptionKey;
        this.attrEncryptionType = rosDBCluster.attrEncryptionType;
        this.attrEngine = rosDBCluster.attrEngine;
        this.attrEngineVersion = rosDBCluster.attrEngineVersion;
        this.attrIsExpired = rosDBCluster.attrIsExpired;
        this.attrLockMode = rosDBCluster.attrLockMode;
        this.attrLockReason = rosDBCluster.attrLockReason;
        this.attrPaymentType = rosDBCluster.attrPaymentType;
        this.attrPeriod = rosDBCluster.attrPeriod;
        this.attrPort = rosDBCluster.attrPort;
        this.attrPublicConnectionString = rosDBCluster.attrPublicConnectionString;
        this.attrPublicPort = rosDBCluster.attrPublicPort;
        this.attrStorageType = rosDBCluster.attrStorageType;
        this.attrVSwitchId = rosDBCluster.attrVSwitchId;
        this.attrVpcCloudInstanceId = rosDBCluster.attrVpcCloudInstanceId;
        this.attrVpcId = rosDBCluster.attrVpcId;
        this.attrZoneId = rosDBCluster.attrZoneId;
    }
}
