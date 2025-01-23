import * as ros from '@alicloud/ros-cdk-core';
import { RosDedicatedBlockStorageCluster } from './ebs.generated';
export { RosDedicatedBlockStorageCluster as DedicatedBlockStorageClusterProperty };
/**
 * Properties for defining a `DedicatedBlockStorageCluster`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ebs-dedicatedblockstoragecluster
 */
export interface DedicatedBlockStorageClusterProps {
    /**
     * Property dedicatedBlockStorageClusterId: The ID of the dedicated block storage cluster.
     */
    readonly dedicatedBlockStorageClusterId: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * Represents a `DedicatedBlockStorageCluster`.
 */
export interface IDedicatedBlockStorageCluster extends ros.IResource {
    readonly props: DedicatedBlockStorageClusterProps;
    /**
     * Attribute AvailableCapacity: The available capacity of the dedicated block storage cluster. Unit: GiB.
     */
    readonly attrAvailableCapacity: ros.IResolvable | string;
    /**
     * Attribute Category: The category of disks that can be created in the dedicated block storage cluster.
     */
    readonly attrCategory: ros.IResolvable | string;
    /**
     * Attribute CreateTime: The time when the dedicated block storage cluster was created. The value is a UNIX timestamp. Unit: seconds.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute DedicatedBlockStorageClusterId: The ID of the dedicated block storage cluster.
     */
    readonly attrDedicatedBlockStorageClusterId: ros.IResolvable | string;
    /**
     * Attribute DedicatedBlockStorageClusterName: The name of the dedicated block storage cluster.
     */
    readonly attrDedicatedBlockStorageClusterName: ros.IResolvable | string;
    /**
     * Attribute DeliveryCapacity: The capacity to be delivered for the dedicated block storage cluster. Unit: GiB.
     */
    readonly attrDeliveryCapacity: ros.IResolvable | string;
    /**
     * Attribute Description: The description of the dedicated block storage cluster.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute ExpiredTime: The expiration time of the dedicated block storage cluster, in the Unix timestamp format, in seconds.
     */
    readonly attrExpiredTime: ros.IResolvable | string;
    /**
     * Attribute PerformanceLevel: The performance level of disks.
     */
    readonly attrPerformanceLevel: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute SupportedCategory: This parameter is not supported.
     */
    readonly attrSupportedCategory: ros.IResolvable | string;
    /**
     * Attribute Tags: The tags of the dedicated block storage cluster.
     */
    readonly attrTags: ros.IResolvable | string;
    /**
     * Attribute TotalCapacity: The total capacity of the dedicated block storage cluster. Unit: GiB.
     */
    readonly attrTotalCapacity: ros.IResolvable | string;
    /**
     * Attribute Type: The dedicated block storage cluster performance type.
     */
    readonly attrType: ros.IResolvable | string;
    /**
     * Attribute UsedCapacity: The used (created disk) capacity of the current cluster, in GB.
     */
    readonly attrUsedCapacity: ros.IResolvable | string;
    /**
     * Attribute ZoneId: The zone ID of the dedicated block storage cluster.
     */
    readonly attrZoneId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::EBS::DedicatedBlockStorageCluster`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDedicatedBlockStorageCluster`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ebs-dedicatedblockstoragecluster
 */
export declare class DedicatedBlockStorageCluster extends ros.Resource implements IDedicatedBlockStorageCluster {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: DedicatedBlockStorageClusterProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AvailableCapacity: The available capacity of the dedicated block storage cluster. Unit: GiB.
     */
    readonly attrAvailableCapacity: ros.IResolvable | string;
    /**
     * Attribute Category: The category of disks that can be created in the dedicated block storage cluster.
     */
    readonly attrCategory: ros.IResolvable | string;
    /**
     * Attribute CreateTime: The time when the dedicated block storage cluster was created. The value is a UNIX timestamp. Unit: seconds.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute DedicatedBlockStorageClusterId: The ID of the dedicated block storage cluster.
     */
    readonly attrDedicatedBlockStorageClusterId: ros.IResolvable | string;
    /**
     * Attribute DedicatedBlockStorageClusterName: The name of the dedicated block storage cluster.
     */
    readonly attrDedicatedBlockStorageClusterName: ros.IResolvable | string;
    /**
     * Attribute DeliveryCapacity: The capacity to be delivered for the dedicated block storage cluster. Unit: GiB.
     */
    readonly attrDeliveryCapacity: ros.IResolvable | string;
    /**
     * Attribute Description: The description of the dedicated block storage cluster.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute ExpiredTime: The expiration time of the dedicated block storage cluster, in the Unix timestamp format, in seconds.
     */
    readonly attrExpiredTime: ros.IResolvable | string;
    /**
     * Attribute PerformanceLevel: The performance level of disks.
     */
    readonly attrPerformanceLevel: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute SupportedCategory: This parameter is not supported.
     */
    readonly attrSupportedCategory: ros.IResolvable | string;
    /**
     * Attribute Tags: The tags of the dedicated block storage cluster.
     */
    readonly attrTags: ros.IResolvable | string;
    /**
     * Attribute TotalCapacity: The total capacity of the dedicated block storage cluster. Unit: GiB.
     */
    readonly attrTotalCapacity: ros.IResolvable | string;
    /**
     * Attribute Type: The dedicated block storage cluster performance type.
     */
    readonly attrType: ros.IResolvable | string;
    /**
     * Attribute UsedCapacity: The used (created disk) capacity of the current cluster, in GB.
     */
    readonly attrUsedCapacity: ros.IResolvable | string;
    /**
     * Attribute ZoneId: The zone ID of the dedicated block storage cluster.
     */
    readonly attrZoneId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DedicatedBlockStorageClusterProps, enableResourcePropertyConstraint?: boolean);
}
