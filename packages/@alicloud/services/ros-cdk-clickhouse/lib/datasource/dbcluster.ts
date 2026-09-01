import * as ros from '@alicloud/ros-cdk-core';
import { RosDBCluster } from './clickhouse.generated';
// Generated from the AliCloud ROS Resource Specification
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

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Represents a `DBCluster`.
 */
export interface IDBCluster extends ros.IResource {
    readonly props: DBClusterProps;

    /**
     * Attribute AliUid: Alibaba Cloud account.
     */
    readonly attrAliUid: ros.IResolvable | string;

    /**
     * Attribute Bid: The ID of the business process flow.
     */
    readonly attrBid: ros.IResolvable | string;

    /**
     * Attribute Category: Copy configuration, value description:.
     */
    readonly attrCategory: ros.IResolvable | string;

    /**
     * Attribute CommodityCode: Buy Product Code.
     */
    readonly attrCommodityCode: ros.IResolvable | string;

    /**
     * Attribute ConnectionString: Connection string.
     */
    readonly attrConnectionString: ros.IResolvable | string;

    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute DBClusterIPArrayName: The name of the whitelist group to be modified.
     */
    readonly attrDbClusterIpArrayName: ros.IResolvable | string;

    /**
     * Attribute DBClusterId: Instance ID.
     */
    readonly attrDbClusterId: ros.IResolvable | string;

    /**
     * Attribute DBClusterName: The cluster description information.
     */
    readonly attrDbClusterName: ros.IResolvable | string;

    /**
     * Attribute DBClusterType: Instance type.
     */
    readonly attrDbClusterType: ros.IResolvable | string;

    /**
     * Attribute DbClusterNetworkType: Network type. Currently, only VPC is supported.
     */
    readonly attrDbClusterNetworkType: ros.IResolvable | string;

    /**
     * Attribute DbNodeClass: Set the node type.
     */
    readonly attrDbNodeClass: ros.IResolvable | string;

    /**
     * Attribute DbNodeCount: Value range: S-Series: 1 to 48 C Series: 1-24 units:.
     */
    readonly attrDbNodeCount: ros.IResolvable | string;

    /**
     * Attribute DbNodeStorage: Single-node storage space. Value range: 100 GB to 32000GB.
     */
    readonly attrDbNodeStorage: ros.IResolvable | string;

    /**
     * Attribute EncryptionKey: Key management service KMS key ID.
     */
    readonly attrEncryptionKey: ros.IResolvable | string;

    /**
     * Attribute EncryptionType: Currently only supports ECS disk encryption, with a value of CloudDisk, not encrypted when empty.
     */
    readonly attrEncryptionType: ros.IResolvable | string;

    /**
     * Attribute Engine: Engine.
     */
    readonly attrEngine: ros.IResolvable | string;

    /**
     * Attribute EngineVersion: The engine version.
     */
    readonly attrEngineVersion: ros.IResolvable | string;

    /**
     * Attribute ExpireTime: The expiration time.
     */
    readonly attrExpireTime: ros.IResolvable | string;

    /**
     * Attribute IsExpired: If the instance has expired.
     */
    readonly attrIsExpired: ros.IResolvable | string;

    /**
     * Attribute LockMode: The lock mode.
     */
    readonly attrLockMode: ros.IResolvable | string;

    /**
     * Attribute LockReason: Lock reason.
     */
    readonly attrLockReason: ros.IResolvable | string;

    /**
     * Attribute MaintainTime: Examples of the maintenance window, in the format of hh:mmZ-hh:mm Z.
     */
    readonly attrMaintainTime: ros.IResolvable | string;

    /**
     * Attribute PaymentType: The paymen type of the resource.
     */
    readonly attrPaymentType: ros.IResolvable | string;

    /**
     * Attribute Port: Connection port.
     */
    readonly attrPort: ros.IResolvable | string;

    /**
     * Attribute PublicConnectionString: A public IP address for the connection.
     */
    readonly attrPublicConnectionString: ros.IResolvable | string;

    /**
     * Attribute PublicIpAddr: Public IP address.
     */
    readonly attrPublicIpAddr: ros.IResolvable | string;

    /**
     * Attribute PublicPort: Public network port.
     */
    readonly attrPublicPort: ros.IResolvable | string;

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;

    /**
     * Attribute ScaleOutStatus: Scale state.
     */
    readonly attrScaleOutStatus: ros.IResolvable | string;

    /**
     * Attribute SecurityIps: The whitelist supports the following two formats:.
     */
    readonly attrSecurityIps: ros.IResolvable | string;

    /**
     * Attribute StorageType: Storage type CloudSSD:SSD cloud disk CloudEfficiency: Ultra cloud disk.
     */
    readonly attrStorageType: ros.IResolvable | string;

    /**
     * Attribute SupportBackup: Support fallback scheme.
     */
    readonly attrSupportBackup: ros.IResolvable | string;

    /**
     * Attribute SupportHttpsPort: The system supports http port number.
     */
    readonly attrSupportHttpsPort: ros.IResolvable | string;

    /**
     * Attribute SupportMysqlPort: Supports Mysql, and those of the ports.
     */
    readonly attrSupportMysqlPort: ros.IResolvable | string;

    /**
     * Attribute SupportOss: Whether hot and cold stratification is supported, 0 means not, and 1st generation table supports it.
     */
    readonly attrSupportOss: ros.IResolvable | string;

    /**
     * Attribute VSwitchId: Switch ID.
     */
    readonly attrVSwitchId: ros.IResolvable | string;

    /**
     * Attribute VpcCloudInstanceId: Virtual Private Cloud (VPC cloud instance ID.
     */
    readonly attrVpcCloudInstanceId: ros.IResolvable | string;

    /**
     * Attribute VpcId: VPC ID.
     */
    readonly attrVpcId: ros.IResolvable | string;

    /**
     * Attribute VpcIpAddr: VPC IP address.
     */
    readonly attrVpcIpAddr: ros.IResolvable | string;

    /**
     * Attribute ZoneId: On behalf of the zone resource attribute field.
     */
    readonly attrZoneId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ClickHouse::DBCluster`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDBCluster`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-clickhouse-dbcluster
 */
export class DBCluster extends ros.Resource implements IDBCluster {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: DBClusterProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AliUid: Alibaba Cloud account.
     */
    public readonly attrAliUid: ros.IResolvable | string;

    /**
     * Attribute Bid: The ID of the business process flow.
     */
    public readonly attrBid: ros.IResolvable | string;

    /**
     * Attribute Category: Copy configuration, value description:.
     */
    public readonly attrCategory: ros.IResolvable | string;

    /**
     * Attribute CommodityCode: Buy Product Code.
     */
    public readonly attrCommodityCode: ros.IResolvable | string;

    /**
     * Attribute ConnectionString: Connection string.
     */
    public readonly attrConnectionString: ros.IResolvable | string;

    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    public readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute DBClusterIPArrayName: The name of the whitelist group to be modified.
     */
    public readonly attrDbClusterIpArrayName: ros.IResolvable | string;

    /**
     * Attribute DBClusterId: Instance ID.
     */
    public readonly attrDbClusterId: ros.IResolvable | string;

    /**
     * Attribute DBClusterName: The cluster description information.
     */
    public readonly attrDbClusterName: ros.IResolvable | string;

    /**
     * Attribute DBClusterType: Instance type.
     */
    public readonly attrDbClusterType: ros.IResolvable | string;

    /**
     * Attribute DbClusterNetworkType: Network type. Currently, only VPC is supported.
     */
    public readonly attrDbClusterNetworkType: ros.IResolvable | string;

    /**
     * Attribute DbNodeClass: Set the node type.
     */
    public readonly attrDbNodeClass: ros.IResolvable | string;

    /**
     * Attribute DbNodeCount: Value range: S-Series: 1 to 48 C Series: 1-24 units:.
     */
    public readonly attrDbNodeCount: ros.IResolvable | string;

    /**
     * Attribute DbNodeStorage: Single-node storage space. Value range: 100 GB to 32000GB.
     */
    public readonly attrDbNodeStorage: ros.IResolvable | string;

    /**
     * Attribute EncryptionKey: Key management service KMS key ID.
     */
    public readonly attrEncryptionKey: ros.IResolvable | string;

    /**
     * Attribute EncryptionType: Currently only supports ECS disk encryption, with a value of CloudDisk, not encrypted when empty.
     */
    public readonly attrEncryptionType: ros.IResolvable | string;

    /**
     * Attribute Engine: Engine.
     */
    public readonly attrEngine: ros.IResolvable | string;

    /**
     * Attribute EngineVersion: The engine version.
     */
    public readonly attrEngineVersion: ros.IResolvable | string;

    /**
     * Attribute ExpireTime: The expiration time.
     */
    public readonly attrExpireTime: ros.IResolvable | string;

    /**
     * Attribute IsExpired: If the instance has expired.
     */
    public readonly attrIsExpired: ros.IResolvable | string;

    /**
     * Attribute LockMode: The lock mode.
     */
    public readonly attrLockMode: ros.IResolvable | string;

    /**
     * Attribute LockReason: Lock reason.
     */
    public readonly attrLockReason: ros.IResolvable | string;

    /**
     * Attribute MaintainTime: Examples of the maintenance window, in the format of hh:mmZ-hh:mm Z.
     */
    public readonly attrMaintainTime: ros.IResolvable | string;

    /**
     * Attribute PaymentType: The paymen type of the resource.
     */
    public readonly attrPaymentType: ros.IResolvable | string;

    /**
     * Attribute Port: Connection port.
     */
    public readonly attrPort: ros.IResolvable | string;

    /**
     * Attribute PublicConnectionString: A public IP address for the connection.
     */
    public readonly attrPublicConnectionString: ros.IResolvable | string;

    /**
     * Attribute PublicIpAddr: Public IP address.
     */
    public readonly attrPublicIpAddr: ros.IResolvable | string;

    /**
     * Attribute PublicPort: Public network port.
     */
    public readonly attrPublicPort: ros.IResolvable | string;

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable | string;

    /**
     * Attribute ScaleOutStatus: Scale state.
     */
    public readonly attrScaleOutStatus: ros.IResolvable | string;

    /**
     * Attribute SecurityIps: The whitelist supports the following two formats:.
     */
    public readonly attrSecurityIps: ros.IResolvable | string;

    /**
     * Attribute StorageType: Storage type CloudSSD:SSD cloud disk CloudEfficiency: Ultra cloud disk.
     */
    public readonly attrStorageType: ros.IResolvable | string;

    /**
     * Attribute SupportBackup: Support fallback scheme.
     */
    public readonly attrSupportBackup: ros.IResolvable | string;

    /**
     * Attribute SupportHttpsPort: The system supports http port number.
     */
    public readonly attrSupportHttpsPort: ros.IResolvable | string;

    /**
     * Attribute SupportMysqlPort: Supports Mysql, and those of the ports.
     */
    public readonly attrSupportMysqlPort: ros.IResolvable | string;

    /**
     * Attribute SupportOss: Whether hot and cold stratification is supported, 0 means not, and 1st generation table supports it.
     */
    public readonly attrSupportOss: ros.IResolvable | string;

    /**
     * Attribute VSwitchId: Switch ID.
     */
    public readonly attrVSwitchId: ros.IResolvable | string;

    /**
     * Attribute VpcCloudInstanceId: Virtual Private Cloud (VPC cloud instance ID.
     */
    public readonly attrVpcCloudInstanceId: ros.IResolvable | string;

    /**
     * Attribute VpcId: VPC ID.
     */
    public readonly attrVpcId: ros.IResolvable | string;

    /**
     * Attribute VpcIpAddr: VPC IP address.
     */
    public readonly attrVpcIpAddr: ros.IResolvable | string;

    /**
     * Attribute ZoneId: On behalf of the zone resource attribute field.
     */
    public readonly attrZoneId: ros.IResolvable | string;

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
            dbClusterId: props.dbClusterId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDBCluster;
        this.attrAliUid = rosDBCluster.attrAliUid;
        this.attrBid = rosDBCluster.attrBid;
        this.attrCategory = rosDBCluster.attrCategory;
        this.attrCommodityCode = rosDBCluster.attrCommodityCode;
        this.attrConnectionString = rosDBCluster.attrConnectionString;
        this.attrCreateTime = rosDBCluster.attrCreateTime;
        this.attrDbClusterIpArrayName = rosDBCluster.attrDbClusterIpArrayName;
        this.attrDbClusterId = rosDBCluster.attrDbClusterId;
        this.attrDbClusterName = rosDBCluster.attrDbClusterName;
        this.attrDbClusterType = rosDBCluster.attrDbClusterType;
        this.attrDbClusterNetworkType = rosDBCluster.attrDbClusterNetworkType;
        this.attrDbNodeClass = rosDBCluster.attrDbNodeClass;
        this.attrDbNodeCount = rosDBCluster.attrDbNodeCount;
        this.attrDbNodeStorage = rosDBCluster.attrDbNodeStorage;
        this.attrEncryptionKey = rosDBCluster.attrEncryptionKey;
        this.attrEncryptionType = rosDBCluster.attrEncryptionType;
        this.attrEngine = rosDBCluster.attrEngine;
        this.attrEngineVersion = rosDBCluster.attrEngineVersion;
        this.attrExpireTime = rosDBCluster.attrExpireTime;
        this.attrIsExpired = rosDBCluster.attrIsExpired;
        this.attrLockMode = rosDBCluster.attrLockMode;
        this.attrLockReason = rosDBCluster.attrLockReason;
        this.attrMaintainTime = rosDBCluster.attrMaintainTime;
        this.attrPaymentType = rosDBCluster.attrPaymentType;
        this.attrPort = rosDBCluster.attrPort;
        this.attrPublicConnectionString = rosDBCluster.attrPublicConnectionString;
        this.attrPublicIpAddr = rosDBCluster.attrPublicIpAddr;
        this.attrPublicPort = rosDBCluster.attrPublicPort;
        this.attrResourceGroupId = rosDBCluster.attrResourceGroupId;
        this.attrScaleOutStatus = rosDBCluster.attrScaleOutStatus;
        this.attrSecurityIps = rosDBCluster.attrSecurityIps;
        this.attrStorageType = rosDBCluster.attrStorageType;
        this.attrSupportBackup = rosDBCluster.attrSupportBackup;
        this.attrSupportHttpsPort = rosDBCluster.attrSupportHttpsPort;
        this.attrSupportMysqlPort = rosDBCluster.attrSupportMysqlPort;
        this.attrSupportOss = rosDBCluster.attrSupportOss;
        this.attrVSwitchId = rosDBCluster.attrVSwitchId;
        this.attrVpcCloudInstanceId = rosDBCluster.attrVpcCloudInstanceId;
        this.attrVpcId = rosDBCluster.attrVpcId;
        this.attrVpcIpAddr = rosDBCluster.attrVpcIpAddr;
        this.attrZoneId = rosDBCluster.attrZoneId;
    }
}
