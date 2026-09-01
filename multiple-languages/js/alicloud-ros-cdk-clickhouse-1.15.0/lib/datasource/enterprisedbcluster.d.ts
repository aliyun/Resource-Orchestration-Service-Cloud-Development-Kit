import * as ros from '@alicloud/ros-cdk-core';
import { RosEnterpriseDBCluster } from './clickhouse.generated';
export { RosEnterpriseDBCluster as EnterpriseDBClusterProperty };
/**
 * Properties for defining a `EnterpriseDBCluster`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-clickhouse-enterprisedbcluster
 */
export interface EnterpriseDBClusterProps {
    /**
     * Property dbInstanceId: The cluster ID.
     */
    readonly dbInstanceId: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * Represents a `EnterpriseDBCluster`.
 */
export interface IEnterpriseDBCluster extends ros.IResource {
    readonly props: EnterpriseDBClusterProps;
    /**
     * Attribute Category: Type, value description: enterprise: Enterprise Edition.
     */
    readonly attrCategory: ros.IResolvable | string;
    /**
     * Attribute ChargeType: The billing method. Enterprise Edition clusters use the pay-as-you-go billing method.
     */
    readonly attrChargeType: ros.IResolvable | string;
    /**
     * Attribute ComputingGroupIds: The list of computing group IDs.
     */
    readonly attrComputingGroupIds: ros.IResolvable | string;
    /**
     * Attribute CreateTime: The creation time of the cluster.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute DBInstanceId: The cluster ID.
     */
    readonly attrDbInstanceId: ros.IResolvable | string;
    /**
     * Attribute Description: The cluster description.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute DisabledPorts: The specified database port is disabled. Multiple ports separated by commas (,) are supported.
     */
    readonly attrDisabledPorts: ros.IResolvable | string;
    /**
     * Attribute Endpoints: List of Endpoint details.
     */
    readonly attrEndpoints: ros.IResolvable | string;
    /**
     * Attribute Engine: The engine type.
     */
    readonly attrEngine: ros.IResolvable | string;
    /**
     * Attribute EngineMinorVersion: The minor version number of the cluster engine.
     */
    readonly attrEngineMinorVersion: ros.IResolvable | string;
    /**
     * Attribute EngineVersion: The engine version.
     */
    readonly attrEngineVersion: ros.IResolvable | string;
    /**
     * Attribute InstanceNetworkType: The network type of the instance.
     */
    readonly attrInstanceNetworkType: ros.IResolvable | string;
    /**
     * Attribute MaintainEndTime: The end time of the maintenance window.
     */
    readonly attrMaintainEndTime: ros.IResolvable | string;
    /**
     * Attribute MaintainStartTime: The maintainable time start time.
     */
    readonly attrMaintainStartTime: ros.IResolvable | string;
    /**
     * Attribute MultiZones: The information about the zones.
     */
    readonly attrMultiZones: ros.IResolvable | string;
    /**
     * Attribute NodeCount: The number of nodes. The value range is 2-16. Required when you use NodeScaleMin and NodeScaleMax to configure an elastic interval.
     */
    readonly attrNodeCount: ros.IResolvable | string;
    /**
     * Attribute NodeScaleMax: The maximum value of serverless node auto scaling.
     */
    readonly attrNodeScaleMax: ros.IResolvable | string;
    /**
     * Attribute NodeScaleMin: Minimum number of Serverless nodes for auto-scaling.
     */
    readonly attrNodeScaleMin: ros.IResolvable | string;
    /**
     * Attribute Nodes: The Node information.
     */
    readonly attrNodes: ros.IResolvable | string;
    /**
     * Attribute ObjectStoreSize: The size of the object storage space.
     */
    readonly attrObjectStoreSize: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute ScaleMax: The maximum capacity for elastic scaling.
     */
    readonly attrScaleMax: ros.IResolvable | string;
    /**
     * Attribute ScaleMin: The minimum capacity for elastic scaling.
     */
    readonly attrScaleMin: ros.IResolvable | string;
    /**
     * Attribute StorageQuota: Storage Pre-purchased Capacity (GB).
     */
    readonly attrStorageQuota: ros.IResolvable | string;
    /**
     * Attribute StorageSize: The size of the storage space. Unit: GB.
     */
    readonly attrStorageSize: ros.IResolvable | string;
    /**
     * Attribute StorageType: The storage type.
     */
    readonly attrStorageType: ros.IResolvable | string;
    /**
     * Attribute Tags: The details of the tags.
     */
    readonly attrTags: ros.IResolvable | string;
    /**
     * Attribute VpcId: The VPC ID.
     */
    readonly attrVpcId: ros.IResolvable | string;
    /**
     * Attribute VswitchId: The VSwitch ID.
     */
    readonly attrVswitchId: ros.IResolvable | string;
    /**
     * Attribute ZoneId: The zone ID.
     */
    readonly attrZoneId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ClickHouse::EnterpriseDBCluster`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosEnterpriseDBCluster`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-clickhouse-enterprisedbcluster
 */
export declare class EnterpriseDBCluster extends ros.Resource implements IEnterpriseDBCluster {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: EnterpriseDBClusterProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Category: Type, value description: enterprise: Enterprise Edition.
     */
    readonly attrCategory: ros.IResolvable | string;
    /**
     * Attribute ChargeType: The billing method. Enterprise Edition clusters use the pay-as-you-go billing method.
     */
    readonly attrChargeType: ros.IResolvable | string;
    /**
     * Attribute ComputingGroupIds: The list of computing group IDs.
     */
    readonly attrComputingGroupIds: ros.IResolvable | string;
    /**
     * Attribute CreateTime: The creation time of the cluster.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute DBInstanceId: The cluster ID.
     */
    readonly attrDbInstanceId: ros.IResolvable | string;
    /**
     * Attribute Description: The cluster description.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute DisabledPorts: The specified database port is disabled. Multiple ports separated by commas (,) are supported.
     */
    readonly attrDisabledPorts: ros.IResolvable | string;
    /**
     * Attribute Endpoints: List of Endpoint details.
     */
    readonly attrEndpoints: ros.IResolvable | string;
    /**
     * Attribute Engine: The engine type.
     */
    readonly attrEngine: ros.IResolvable | string;
    /**
     * Attribute EngineMinorVersion: The minor version number of the cluster engine.
     */
    readonly attrEngineMinorVersion: ros.IResolvable | string;
    /**
     * Attribute EngineVersion: The engine version.
     */
    readonly attrEngineVersion: ros.IResolvable | string;
    /**
     * Attribute InstanceNetworkType: The network type of the instance.
     */
    readonly attrInstanceNetworkType: ros.IResolvable | string;
    /**
     * Attribute MaintainEndTime: The end time of the maintenance window.
     */
    readonly attrMaintainEndTime: ros.IResolvable | string;
    /**
     * Attribute MaintainStartTime: The maintainable time start time.
     */
    readonly attrMaintainStartTime: ros.IResolvable | string;
    /**
     * Attribute MultiZones: The information about the zones.
     */
    readonly attrMultiZones: ros.IResolvable | string;
    /**
     * Attribute NodeCount: The number of nodes. The value range is 2-16. Required when you use NodeScaleMin and NodeScaleMax to configure an elastic interval.
     */
    readonly attrNodeCount: ros.IResolvable | string;
    /**
     * Attribute NodeScaleMax: The maximum value of serverless node auto scaling.
     */
    readonly attrNodeScaleMax: ros.IResolvable | string;
    /**
     * Attribute NodeScaleMin: Minimum number of Serverless nodes for auto-scaling.
     */
    readonly attrNodeScaleMin: ros.IResolvable | string;
    /**
     * Attribute Nodes: The Node information.
     */
    readonly attrNodes: ros.IResolvable | string;
    /**
     * Attribute ObjectStoreSize: The size of the object storage space.
     */
    readonly attrObjectStoreSize: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute ScaleMax: The maximum capacity for elastic scaling.
     */
    readonly attrScaleMax: ros.IResolvable | string;
    /**
     * Attribute ScaleMin: The minimum capacity for elastic scaling.
     */
    readonly attrScaleMin: ros.IResolvable | string;
    /**
     * Attribute StorageQuota: Storage Pre-purchased Capacity (GB).
     */
    readonly attrStorageQuota: ros.IResolvable | string;
    /**
     * Attribute StorageSize: The size of the storage space. Unit: GB.
     */
    readonly attrStorageSize: ros.IResolvable | string;
    /**
     * Attribute StorageType: The storage type.
     */
    readonly attrStorageType: ros.IResolvable | string;
    /**
     * Attribute Tags: The details of the tags.
     */
    readonly attrTags: ros.IResolvable | string;
    /**
     * Attribute VpcId: The VPC ID.
     */
    readonly attrVpcId: ros.IResolvable | string;
    /**
     * Attribute VswitchId: The VSwitch ID.
     */
    readonly attrVswitchId: ros.IResolvable | string;
    /**
     * Attribute ZoneId: The zone ID.
     */
    readonly attrZoneId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: EnterpriseDBClusterProps, enableResourcePropertyConstraint?: boolean);
}
