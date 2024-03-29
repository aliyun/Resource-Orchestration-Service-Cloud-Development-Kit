import * as ros from '@alicloud/ros-cdk-core';
import { RosClusterNodePools } from './cs.generated';
// Generated from the AliCloud ROS Resource Specification
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
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::CS::ClusterNodePools`, which is used to query the details of all node pools in a cluster.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosClusterNodePools`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cs-clusternodepools
 */
export class ClusterNodePools extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ClusterNodePoolsProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute NodePoolIds: The list of node_pool IDs.
     */
    public readonly attrNodePoolIds: ros.IResolvable;

    /**
     * Attribute NodePools: The list of node_pools.
     */
    public readonly attrNodePools: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ClusterNodePoolsProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosClusterNodePools = new RosClusterNodePools(this, id,  {
            clusterId: props.clusterId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosClusterNodePools;
        this.attrNodePoolIds = rosClusterNodePools.attrNodePoolIds;
        this.attrNodePools = rosClusterNodePools.attrNodePools;
    }
}
