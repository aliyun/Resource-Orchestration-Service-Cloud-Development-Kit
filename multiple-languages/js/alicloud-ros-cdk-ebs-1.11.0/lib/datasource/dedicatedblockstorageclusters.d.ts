import * as ros from '@alicloud/ros-cdk-core';
import { RosDedicatedBlockStorageClusters } from './ebs.generated';
export { RosDedicatedBlockStorageClusters as DedicatedBlockStorageClustersProperty };
/**
 * Properties for defining a `DedicatedBlockStorageClusters`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ebs-dedicatedblockstorageclusters
 */
export interface DedicatedBlockStorageClustersProps {
    /**
     * Property dedicatedBlockStorageClusterId: The ID of the dedicated block storage cluster.
     */
    readonly dedicatedBlockStorageClusterId?: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * Represents a `DedicatedBlockStorageClusters`.
 */
export interface IDedicatedBlockStorageClusters extends ros.IResource {
    readonly props: DedicatedBlockStorageClustersProps;
    /**
     * Attribute DedicatedBlockStorageClusterIds: The list of dedicated block storage cluster IDs.
     */
    readonly attrDedicatedBlockStorageClusterIds: ros.IResolvable | string;
    /**
     * Attribute DedicatedBlockStorageClusters: The list of dedicated block storage clusters.
     */
    readonly attrDedicatedBlockStorageClusters: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::EBS::DedicatedBlockStorageClusters`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDedicatedBlockStorageClusters`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ebs-dedicatedblockstorageclusters
 */
export declare class DedicatedBlockStorageClusters extends ros.Resource implements IDedicatedBlockStorageClusters {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: DedicatedBlockStorageClustersProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute DedicatedBlockStorageClusterIds: The list of dedicated block storage cluster IDs.
     */
    readonly attrDedicatedBlockStorageClusterIds: ros.IResolvable | string;
    /**
     * Attribute DedicatedBlockStorageClusters: The list of dedicated block storage clusters.
     */
    readonly attrDedicatedBlockStorageClusters: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: DedicatedBlockStorageClustersProps, enableResourcePropertyConstraint?: boolean);
}
