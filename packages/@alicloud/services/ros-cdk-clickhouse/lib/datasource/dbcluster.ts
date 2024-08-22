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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ClickHouse::DBCluster`, which is used to query the information about an ApsaraDB for ClickHouse cluster.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDBCluster`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-clickhouse-dbcluster
 */
export class DBCluster extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: DBClusterProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AliUid: Alibaba Cloud account.
     */
    public readonly attrAliUid: ros.IResolvable;

    /**
     * Attribute Bid: The ID of the business process flow.
     */
    public readonly attrBid: ros.IResolvable;

    /**
     * Attribute Category: Copy configuration, value description:.
     */
    public readonly attrCategory: ros.IResolvable;

    /**
     * Attribute CommodityCode: Buy Product Code.
     */
    public readonly attrCommodityCode: ros.IResolvable;

    /**
     * Attribute ConnectionString: Connection string.
     */
    public readonly attrConnectionString: ros.IResolvable;

    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * Attribute DBClusterIPArrayName: The name of the whitelist group to be modified.
     */
    public readonly attrDbClusterIpArrayName: ros.IResolvable;

    /**
     * Attribute DBClusterId: Instance ID.
     */
    public readonly attrDbClusterId: ros.IResolvable;

    /**
     * Attribute DBClusterName: The cluster description information.
     */
    public readonly attrDbClusterName: ros.IResolvable;

    /**
     * Attribute DBClusterType: Instance type.
     */
    public readonly attrDbClusterType: ros.IResolvable;

    /**
     * Attribute DbClusterNetworkType: Network type. Currently, only VPC is supported.
     */
    public readonly attrDbClusterNetworkType: ros.IResolvable;

    /**
     * Attribute DbNodeClass: Set the node type.
     */
    public readonly attrDbNodeClass: ros.IResolvable;

    /**
     * Attribute DbNodeCount: Value range: S-Series: 1 to 48 C Series: 1-24 units:.
     */
    public readonly attrDbNodeCount: ros.IResolvable;

    /**
     * Attribute DbNodeStorage: Single-node storage space. Value range: 100 GB to 32000GB.
     */
    public readonly attrDbNodeStorage: ros.IResolvable;

    /**
     * Attribute EncryptionKey: Key management service KMS key ID.
     */
    public readonly attrEncryptionKey: ros.IResolvable;

    /**
     * Attribute EncryptionType: Currently only supports ECS disk encryption, with a value of CloudDisk, not encrypted when empty.
     */
    public readonly attrEncryptionType: ros.IResolvable;

    /**
     * Attribute Engine: Engine.
     */
    public readonly attrEngine: ros.IResolvable;

    /**
     * Attribute EngineVersion: The engine version.
     */
    public readonly attrEngineVersion: ros.IResolvable;

    /**
     * Attribute ExpireTime: The expiration time.
     */
    public readonly attrExpireTime: ros.IResolvable;

    /**
     * Attribute IsExpired: If the instance has expired.
     */
    public readonly attrIsExpired: ros.IResolvable;

    /**
     * Attribute LockMode: The lock mode.
     */
    public readonly attrLockMode: ros.IResolvable;

    /**
     * Attribute LockReason: Lock reason.
     */
    public readonly attrLockReason: ros.IResolvable;

    /**
     * Attribute MaintainTime: Examples of the maintenance window, in the format of hh:mmZ-hh:mm Z.
     */
    public readonly attrMaintainTime: ros.IResolvable;

    /**
     * Attribute PaymentType: The paymen type of the resource.
     */
    public readonly attrPaymentType: ros.IResolvable;

    /**
     * Attribute Port: Connection port.
     */
    public readonly attrPort: ros.IResolvable;

    /**
     * Attribute PublicConnectionString: A public IP address for the connection.
     */
    public readonly attrPublicConnectionString: ros.IResolvable;

    /**
     * Attribute PublicIpAddr: Public IP address.
     */
    public readonly attrPublicIpAddr: ros.IResolvable;

    /**
     * Attribute PublicPort: Public network port.
     */
    public readonly attrPublicPort: ros.IResolvable;

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * Attribute ScaleOutStatus: Scale state.
     */
    public readonly attrScaleOutStatus: ros.IResolvable;

    /**
     * Attribute SecurityIps: The whitelist supports the following two formats:.
     */
    public readonly attrSecurityIps: ros.IResolvable;

    /**
     * Attribute StorageType: Storage type CloudSSD:SSD cloud disk CloudEfficiency: Ultra cloud disk.
     */
    public readonly attrStorageType: ros.IResolvable;

    /**
     * Attribute SupportBackup: Support fallback scheme.
     */
    public readonly attrSupportBackup: ros.IResolvable;

    /**
     * Attribute SupportHttpsPort: The system supports http port number.
     */
    public readonly attrSupportHttpsPort: ros.IResolvable;

    /**
     * Attribute SupportMysqlPort: Supports Mysql, and those of the ports.
     */
    public readonly attrSupportMysqlPort: ros.IResolvable;

    /**
     * Attribute SupportOss: Whether hot and cold stratification is supported, 0 means not, and 1st generation table supports it.
     */
    public readonly attrSupportOss: ros.IResolvable;

    /**
     * Attribute VSwitchId: Switch ID.
     */
    public readonly attrVSwitchId: ros.IResolvable;

    /**
     * Attribute VpcCloudInstanceId: Virtual Private Cloud (VPC cloud instance ID.
     */
    public readonly attrVpcCloudInstanceId: ros.IResolvable;

    /**
     * Attribute VpcId: VPC ID.
     */
    public readonly attrVpcId: ros.IResolvable;

    /**
     * Attribute VpcIpAddr: VPC IP address.
     */
    public readonly attrVpcIpAddr: ros.IResolvable;

    /**
     * Attribute ZoneId: On behalf of the zone resource attribute field.
     */
    public readonly attrZoneId: ros.IResolvable;

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
