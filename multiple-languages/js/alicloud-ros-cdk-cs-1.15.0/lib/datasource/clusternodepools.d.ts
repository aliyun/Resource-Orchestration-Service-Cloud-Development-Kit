import * as ros from '@alicloud/ros-cdk-core';
import { RosClusterNodePools } from './cs.generated';
export { RosClusterNodePools as ClusterNodePoolsProperty };
/**
 * Properties for defining a `ClusterNodePools`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cs-clusternodepools
 */
export interface ClusterNodePoolsProps {
    /**
     * Property clusterId: Cluster ID.
     */
    readonly clusterId: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * Represents a `ClusterNodePools`.
 */
export interface IClusterNodePools extends ros.IResource {
    readonly props: ClusterNodePoolsProps;
    /**
     * Attribute NodePoolIds: The list of node_pool IDs.
     */
    readonly attrNodePoolIds: ros.IResolvable | string;
    /**
     * Attribute NodePools: The list of node_pools.
     */
    readonly attrNodePools: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::CS::ClusterNodePools`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosClusterNodePools`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cs-clusternodepools
 */
export declare class ClusterNodePools extends ros.Resource implements IClusterNodePools {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ClusterNodePoolsProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute NodePoolIds: The list of node_pool IDs.
     */
    readonly attrNodePoolIds: ros.IResolvable | string;
    /**
     * Attribute NodePools: The list of node_pools.
     */
    readonly attrNodePools: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ClusterNodePoolsProps, enableResourcePropertyConstraint?: boolean);
}
