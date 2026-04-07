import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosDBCluster`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-clickhouse-dbcluster
 */
export interface RosDBClusterProps {
    /**
     * @Property dbClusterId: Instance ID.
     */
    readonly dbClusterId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ClickHouse::DBCluster`, which is used to query the information about an ApsaraDB for ClickHouse cluster.
 * @Note This class does not contain additional functions, so it is recommended to use the `DBCluster` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-clickhouse-dbcluster
 */
export declare class RosDBCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ClickHouse::DBCluster";
    /**
     * @Attribute AliUid: Alibaba Cloud account.
     */
    readonly attrAliUid: ros.IResolvable;
    /**
     * @Attribute Bid: The ID of the business process flow.
     */
    readonly attrBid: ros.IResolvable;
    /**
     * @Attribute Category: Copy configuration, value description:.
     */
    readonly attrCategory: ros.IResolvable;
    /**
     * @Attribute CommodityCode: Buy Product Code.
     */
    readonly attrCommodityCode: ros.IResolvable;
    /**
     * @Attribute ConnectionString: Connection string.
     */
    readonly attrConnectionString: ros.IResolvable;
    /**
     * @Attribute CreateTime: The creation time of the resource.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute DBClusterIPArrayName: The name of the whitelist group to be modified.
     */
    readonly attrDbClusterIpArrayName: ros.IResolvable;
    /**
     * @Attribute DBClusterId: Instance ID.
     */
    readonly attrDbClusterId: ros.IResolvable;
    /**
     * @Attribute DBClusterName: The cluster description information.
     */
    readonly attrDbClusterName: ros.IResolvable;
    /**
     * @Attribute DBClusterType: Instance type.
     */
    readonly attrDbClusterType: ros.IResolvable;
    /**
     * @Attribute DbClusterNetworkType: Network type. Currently, only VPC is supported.
     */
    readonly attrDbClusterNetworkType: ros.IResolvable;
    /**
     * @Attribute DbNodeClass: Set the node type.
     */
    readonly attrDbNodeClass: ros.IResolvable;
    /**
     * @Attribute DbNodeCount: Value range: S-Series: 1 to 48 C Series: 1-24 units:.
     */
    readonly attrDbNodeCount: ros.IResolvable;
    /**
     * @Attribute DbNodeStorage: Single-node storage space. Value range: 100 GB to 32000GB.
     */
    readonly attrDbNodeStorage: ros.IResolvable;
    /**
     * @Attribute EncryptionKey: Key management service KMS key ID.
     */
    readonly attrEncryptionKey: ros.IResolvable;
    /**
     * @Attribute EncryptionType: Currently only supports ECS disk encryption, with a value of CloudDisk, not encrypted when empty.
     */
    readonly attrEncryptionType: ros.IResolvable;
    /**
     * @Attribute Engine: Engine.
     */
    readonly attrEngine: ros.IResolvable;
    /**
     * @Attribute EngineVersion: The engine version.
     */
    readonly attrEngineVersion: ros.IResolvable;
    /**
     * @Attribute ExpireTime: The expiration time.
     */
    readonly attrExpireTime: ros.IResolvable;
    /**
     * @Attribute IsExpired: If the instance has expired.
     */
    readonly attrIsExpired: ros.IResolvable;
    /**
     * @Attribute LockMode: The lock mode.
     */
    readonly attrLockMode: ros.IResolvable;
    /**
     * @Attribute LockReason: Lock reason.
     */
    readonly attrLockReason: ros.IResolvable;
    /**
     * @Attribute MaintainTime: Examples of the maintenance window, in the format of hh:mmZ-hh:mm Z.
     */
    readonly attrMaintainTime: ros.IResolvable;
    /**
     * @Attribute PaymentType: The paymen type of the resource.
     */
    readonly attrPaymentType: ros.IResolvable;
    /**
     * @Attribute Port: Connection port.
     */
    readonly attrPort: ros.IResolvable;
    /**
     * @Attribute PublicConnectionString: A public IP address for the connection.
     */
    readonly attrPublicConnectionString: ros.IResolvable;
    /**
     * @Attribute PublicIpAddr: Public IP address.
     */
    readonly attrPublicIpAddr: ros.IResolvable;
    /**
     * @Attribute PublicPort: Public network port.
     */
    readonly attrPublicPort: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * @Attribute ScaleOutStatus: Scale state.
     */
    readonly attrScaleOutStatus: ros.IResolvable;
    /**
     * @Attribute SecurityIps: The whitelist supports the following two formats:.
     */
    readonly attrSecurityIps: ros.IResolvable;
    /**
     * @Attribute StorageType: Storage type CloudSSD:SSD cloud disk CloudEfficiency: Ultra cloud disk.
     */
    readonly attrStorageType: ros.IResolvable;
    /**
     * @Attribute SupportBackup: Support fallback scheme.
     */
    readonly attrSupportBackup: ros.IResolvable;
    /**
     * @Attribute SupportHttpsPort: The system supports http port number.
     */
    readonly attrSupportHttpsPort: ros.IResolvable;
    /**
     * @Attribute SupportMysqlPort: Supports Mysql, and those of the ports.
     */
    readonly attrSupportMysqlPort: ros.IResolvable;
    /**
     * @Attribute SupportOss: Whether hot and cold stratification is supported, 0 means not, and 1st generation table supports it.
     */
    readonly attrSupportOss: ros.IResolvable;
    /**
     * @Attribute VSwitchId: Switch ID.
     */
    readonly attrVSwitchId: ros.IResolvable;
    /**
     * @Attribute VpcCloudInstanceId: Virtual Private Cloud (VPC cloud instance ID.
     */
    readonly attrVpcCloudInstanceId: ros.IResolvable;
    /**
     * @Attribute VpcId: VPC ID.
     */
    readonly attrVpcId: ros.IResolvable;
    /**
     * @Attribute VpcIpAddr: VPC IP address.
     */
    readonly attrVpcIpAddr: ros.IResolvable;
    /**
     * @Attribute ZoneId: On behalf of the zone resource attribute field.
     */
    readonly attrZoneId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dbClusterId: Instance ID.
     */
    dbClusterId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
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
 * Properties for defining a `RosDBClusters`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-clickhouse-dbclusters
 */
export interface RosDBClustersProps {
    /**
     * @Property dbClusterId: Instance ID.
     */
    readonly dbClusterId?: string | ros.IResolvable;
    /**
     * @Property dbClusterName: The cluster description information.
     */
    readonly dbClusterName?: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ClickHouse::DBClusters`, which is used to query the information about ApsaraDB for ClickHouse clusters.
 * @Note This class does not contain additional functions, so it is recommended to use the `DBClusters` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-clickhouse-dbclusters
 */
export declare class RosDBClusters extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ClickHouse::DBClusters";
    /**
     * @Attribute DBClusterIds: The list of db cluster IDs.
     */
    readonly attrDbClusterIds: ros.IResolvable;
    /**
     * @Attribute DBClusters: The list of db clusters.
     */
    readonly attrDbClusters: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dbClusterId: Instance ID.
     */
    dbClusterId: string | ros.IResolvable | undefined;
    /**
     * @Property dbClusterName: The cluster description information.
     */
    dbClusterName: string | ros.IResolvable | undefined;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDBClustersProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosEnterpriseDBCluster`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-clickhouse-enterprisedbcluster
 */
export interface RosEnterpriseDBClusterProps {
    /**
     * @Property dbInstanceId: The cluster ID.
     */
    readonly dbInstanceId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ClickHouse::EnterpriseDBCluster`.
 * @Note This class does not contain additional functions, so it is recommended to use the `EnterpriseDBCluster` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-clickhouse-enterprisedbcluster
 */
export declare class RosEnterpriseDBCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ClickHouse::EnterpriseDBCluster";
    /**
     * @Attribute Category: Type, value description: enterprise: Enterprise Edition.
     */
    readonly attrCategory: ros.IResolvable;
    /**
     * @Attribute ChargeType: The billing method. Enterprise Edition clusters use the pay-as-you-go billing method.
     */
    readonly attrChargeType: ros.IResolvable;
    /**
     * @Attribute ComputingGroupIds: The list of computing group IDs.
     */
    readonly attrComputingGroupIds: ros.IResolvable;
    /**
     * @Attribute CreateTime: The creation time of the cluster.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute DBInstanceId: The cluster ID.
     */
    readonly attrDbInstanceId: ros.IResolvable;
    /**
     * @Attribute Description: The cluster description.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute DisabledPorts: The specified database port is disabled. Multiple ports separated by commas (,) are supported.
     */
    readonly attrDisabledPorts: ros.IResolvable;
    /**
     * @Attribute Endpoints: List of Endpoint details.
     */
    readonly attrEndpoints: ros.IResolvable;
    /**
     * @Attribute Engine: The engine type.
     */
    readonly attrEngine: ros.IResolvable;
    /**
     * @Attribute EngineMinorVersion: The minor version number of the cluster engine.
     */
    readonly attrEngineMinorVersion: ros.IResolvable;
    /**
     * @Attribute EngineVersion: The engine version.
     */
    readonly attrEngineVersion: ros.IResolvable;
    /**
     * @Attribute InstanceNetworkType: The network type of the instance.
     */
    readonly attrInstanceNetworkType: ros.IResolvable;
    /**
     * @Attribute MaintainEndTime: The end time of the maintenance window.
     */
    readonly attrMaintainEndTime: ros.IResolvable;
    /**
     * @Attribute MaintainStartTime: The maintainable time start time.
     */
    readonly attrMaintainStartTime: ros.IResolvable;
    /**
     * @Attribute MultiZones: The information about the zones.
     */
    readonly attrMultiZones: ros.IResolvable;
    /**
     * @Attribute NodeCount: The number of nodes. The value range is 2-16. Required when you use NodeScaleMin and NodeScaleMax to configure an elastic interval.
     */
    readonly attrNodeCount: ros.IResolvable;
    /**
     * @Attribute NodeScaleMax: The maximum value of serverless node auto scaling.
     */
    readonly attrNodeScaleMax: ros.IResolvable;
    /**
     * @Attribute NodeScaleMin: Minimum number of Serverless nodes for auto-scaling.
     */
    readonly attrNodeScaleMin: ros.IResolvable;
    /**
     * @Attribute Nodes: The Node information.
     */
    readonly attrNodes: ros.IResolvable;
    /**
     * @Attribute ObjectStoreSize: The size of the object storage space.
     */
    readonly attrObjectStoreSize: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * @Attribute ScaleMax: The maximum capacity for elastic scaling.
     */
    readonly attrScaleMax: ros.IResolvable;
    /**
     * @Attribute ScaleMin: The minimum capacity for elastic scaling.
     */
    readonly attrScaleMin: ros.IResolvable;
    /**
     * @Attribute StorageQuota: Storage Pre-purchased Capacity (GB).
     */
    readonly attrStorageQuota: ros.IResolvable;
    /**
     * @Attribute StorageSize: The size of the storage space. Unit: GB.
     */
    readonly attrStorageSize: ros.IResolvable;
    /**
     * @Attribute StorageType: The storage type.
     */
    readonly attrStorageType: ros.IResolvable;
    /**
     * @Attribute Tags: The details of the tags.
     */
    readonly attrTags: ros.IResolvable;
    /**
     * @Attribute VpcId: The VPC ID.
     */
    readonly attrVpcId: ros.IResolvable;
    /**
     * @Attribute VswitchId: The VSwitch ID.
     */
    readonly attrVswitchId: ros.IResolvable;
    /**
     * @Attribute ZoneId: The zone ID.
     */
    readonly attrZoneId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dbInstanceId: The cluster ID.
     */
    dbInstanceId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosEnterpriseDBClusterProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosEnterpriseDBClusters`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-clickhouse-enterprisedbclusters
 */
export interface RosEnterpriseDBClustersProps {
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ClickHouse::EnterpriseDBClusters`.
 * @Note This class does not contain additional functions, so it is recommended to use the `EnterpriseDBClusters` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-clickhouse-enterprisedbclusters
 */
export declare class RosEnterpriseDBClusters extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ClickHouse::EnterpriseDBClusters";
    /**
     * @Attribute DBInstanceIds: The list of DB instance IDs.
     */
    readonly attrDbInstanceIds: ros.IResolvable;
    /**
     * @Attribute EnterpriseDBClusters: The list of enterprise DB clusters.
     */
    readonly attrEnterpriseDbClusters: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosEnterpriseDBClustersProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
