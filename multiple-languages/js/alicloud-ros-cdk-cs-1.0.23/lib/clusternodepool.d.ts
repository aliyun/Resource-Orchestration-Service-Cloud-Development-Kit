import * as ros from '@alicloud/ros-cdk-core';
import { RosClusterNodePool } from './cs.generated';
export { RosClusterNodePool as ClusterNodePoolProperty };
/**
 * Properties for defining a `ClusterNodePool`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-clusternodepool
 */
export interface ClusterNodePoolProps {
    /**
     * Property clusterId: Cluster ID.
     */
    readonly clusterId: string | ros.IResolvable;
    /**
     * Property scalingGroup: The configurations of the scaling group used by the node pool.
     */
    readonly scalingGroup: RosClusterNodePool.ScalingGroupProperty | ros.IResolvable;
    /**
     * Property autoScaling: The configurations of auto scaling.
     */
    readonly autoScaling?: RosClusterNodePool.AutoScalingProperty | ros.IResolvable;
    /**
     * Property count: The number of nodes in the node pool.
     */
    readonly count?: number | ros.IResolvable;
    /**
     * Property kubernetesConfig: The configurations of the ACK cluster.
     */
    readonly kubernetesConfig?: RosClusterNodePool.KubernetesConfigProperty | ros.IResolvable;
    /**
     * Property management: The configurations of the managed node pool.
     */
    readonly management?: RosClusterNodePool.ManagementProperty | ros.IResolvable;
    /**
     * Property nodePoolInfo: The configurations of the node pool.
     */
    readonly nodePoolInfo?: RosClusterNodePool.NodePoolInfoProperty | ros.IResolvable;
    /**
     * Property teeConfig: The configurations of confidential computing.
     */
    readonly teeConfig?: RosClusterNodePool.TeeConfigProperty | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CS::ClusterNodePool`, which is used to create a node pool for a Container Service for Kubernetes (ACK) cluster.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosClusterNodePool`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-clusternodepool
 */
export declare class ClusterNodePool extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ClusterNodePoolProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute NodePoolId: Cluster node pool ID.
     */
    readonly attrNodePoolId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ClusterNodePoolProps, enableResourcePropertyConstraint?: boolean);
}
