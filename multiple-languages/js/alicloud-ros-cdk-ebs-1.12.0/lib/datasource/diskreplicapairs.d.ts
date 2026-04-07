import * as ros from '@alicloud/ros-cdk-core';
import { RosDiskReplicaPairs } from './ebs.generated';
export { RosDiskReplicaPairs as DiskReplicaPairsProperty };
/**
 * Properties for defining a `DiskReplicaPairs`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ebs-diskreplicapairs
 */
export interface DiskReplicaPairsProps {
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
 * Represents a `DiskReplicaPairs`.
 */
export interface IDiskReplicaPairs extends ros.IResource {
    readonly props: DiskReplicaPairsProps;
    /**
     * Attribute DiskReplicaPairs: The list of disk replica pairs.
     */
    readonly attrDiskReplicaPairs: ros.IResolvable | string;
    /**
     * Attribute ReplicaPairIds: The list of replica pair IDs.
     */
    readonly attrReplicaPairIds: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::EBS::DiskReplicaPairs`, which is used to query the information about replication pairs.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDiskReplicaPairs`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ebs-diskreplicapairs
 */
export declare class DiskReplicaPairs extends ros.Resource implements IDiskReplicaPairs {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: DiskReplicaPairsProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute DiskReplicaPairs: The list of disk replica pairs.
     */
    readonly attrDiskReplicaPairs: ros.IResolvable | string;
    /**
     * Attribute ReplicaPairIds: The list of replica pair IDs.
     */
    readonly attrReplicaPairIds: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: DiskReplicaPairsProps, enableResourcePropertyConstraint?: boolean);
}
