import * as ros from '@alicloud/ros-cdk-core';
import { RosDBCluster } from './clickhouse.generated';
export { RosDBCluster as DBClusterProperty };
/**
 * Properties for defining a `DBCluster`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-clickhouse-dbcluster
 */
export interface DBClusterProps {
    /**
     * Property dbClusterId: Instance ID.
     */
    readonly dbClusterId: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ClickHouse::DBCluster`, which is used to query the information about an ApsaraDB for ClickHouse cluster.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDBCluster`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-clickhouse-dbcluster
 */
export declare class DBCluster extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: DBClusterProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AliUid: Alibaba Cloud account.
     */
    readonly attrAliUid: ros.IResolvable;
    /**
     * Attribute Bid: The ID of the business process flow.
     */
    readonly attrBid: ros.IResolvable;
    /**
     * Attribute Category: Copy configuration, value description:.
     */
    readonly attrCategory: ros.IResolvable;
    /**
     * Attribute CommodityCode: Buy Product Code.
     */
    readonly attrCommodityCode: ros.IResolvable;
    /**
     * Attribute ConnectionString: Connection string.
     */
    readonly attrConnectionString: ros.IResolvable;
    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * Attribute DBClusterIPArrayName: The name of the whitelist group to be modified.
     */
    readonly attrDbClusterIpArrayName: ros.IResolvable;
    /**
     * Attribute DBClusterId: Instance ID.
     */
    readonly attrDbClusterId: ros.IResolvable;
    /**
     * Attribute DBClusterName: The cluster description information.
     */
    readonly attrDbClusterName: ros.IResolvable;
    /**
     * Attribute DBClusterType: Instance type.
     */
    readonly attrDbClusterType: ros.IResolvable;
    /**
     * Attribute DbClusterNetworkType: Network type. Currently, only VPC is supported.
     */
    readonly attrDbClusterNetworkType: ros.IResolvable;
    /**
     * Attribute DbNodeClass: Set the node type.
     */
    readonly attrDbNodeClass: ros.IResolvable;
    /**
     * Attribute DbNodeCount: Value range: S-Series: 1 to 48 C Series: 1-24 units:.
     */
    readonly attrDbNodeCount: ros.IResolvable;
    /**
     * Attribute DbNodeStorage: Single-node storage space. Value range: 100 GB to 32000GB.
     */
    readonly attrDbNodeStorage: ros.IResolvable;
    /**
     * Attribute EncryptionKey: Key management service KMS key ID.
     */
    readonly attrEncryptionKey: ros.IResolvable;
    /**
     * Attribute EncryptionType: Currently only supports ECS disk encryption, with a value of CloudDisk, not encrypted when empty.
     */
    readonly attrEncryptionType: ros.IResolvable;
    /**
     * Attribute Engine: Engine.
     */
    readonly attrEngine: ros.IResolvable;
    /**
     * Attribute EngineVersion: The engine version.
     */
    readonly attrEngineVersion: ros.IResolvable;
    /**
     * Attribute ExpireTime: The expiration time.
     */
    readonly attrExpireTime: ros.IResolvable;
    /**
     * Attribute IsExpired: If the instance has expired.
     */
    readonly attrIsExpired: ros.IResolvable;
    /**
     * Attribute LockMode: The lock mode.
     */
    readonly attrLockMode: ros.IResolvable;
    /**
     * Attribute LockReason: Lock reason.
     */
    readonly attrLockReason: ros.IResolvable;
    /**
     * Attribute MaintainTime: Examples of the maintenance window, in the format of hh:mmZ-hh:mm Z.
     */
    readonly attrMaintainTime: ros.IResolvable;
    /**
     * Attribute PaymentType: The paymen type of the resource.
     */
    readonly attrPaymentType: ros.IResolvable;
    /**
     * Attribute Port: Connection port.
     */
    readonly attrPort: ros.IResolvable;
    /**
     * Attribute PublicConnectionString: A public IP address for the connection.
     */
    readonly attrPublicConnectionString: ros.IResolvable;
    /**
     * Attribute PublicIpAddr: Public IP address.
     */
    readonly attrPublicIpAddr: ros.IResolvable;
    /**
     * Attribute PublicPort: Public network port.
     */
    readonly attrPublicPort: ros.IResolvable;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * Attribute ScaleOutStatus: Scale state.
     */
    readonly attrScaleOutStatus: ros.IResolvable;
    /**
     * Attribute SecurityIps: The whitelist supports the following two formats:.
     */
    readonly attrSecurityIps: ros.IResolvable;
    /**
     * Attribute StorageType: Storage type CloudSSD:SSD cloud disk CloudEfficiency: Ultra cloud disk.
     */
    readonly attrStorageType: ros.IResolvable;
    /**
     * Attribute SupportBackup: Support fallback scheme.
     */
    readonly attrSupportBackup: ros.IResolvable;
    /**
     * Attribute SupportHttpsPort: The system supports http port number.
     */
    readonly attrSupportHttpsPort: ros.IResolvable;
    /**
     * Attribute SupportMysqlPort: Supports Mysql, and those of the ports.
     */
    readonly attrSupportMysqlPort: ros.IResolvable;
    /**
     * Attribute SupportOss: Whether hot and cold stratification is supported, 0 means not, and 1st generation table supports it.
     */
    readonly attrSupportOss: ros.IResolvable;
    /**
     * Attribute VSwitchId: Switch ID.
     */
    readonly attrVSwitchId: ros.IResolvable;
    /**
     * Attribute VpcCloudInstanceId: Virtual Private Cloud (VPC cloud instance ID.
     */
    readonly attrVpcCloudInstanceId: ros.IResolvable;
    /**
     * Attribute VpcId: VPC ID.
     */
    readonly attrVpcId: ros.IResolvable;
    /**
     * Attribute VpcIpAddr: VPC IP address.
     */
    readonly attrVpcIpAddr: ros.IResolvable;
    /**
     * Attribute ZoneId: On behalf of the zone resource attribute field.
     */
    readonly attrZoneId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DBClusterProps, enableResourcePropertyConstraint?: boolean);
}
