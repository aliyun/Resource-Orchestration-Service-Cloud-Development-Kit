import * as ros from '@alicloud/ros-cdk-core';
import { RosClusterNodePools } from './cs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosClusterNodePools as ClusterNodePoolsProperty };

/**
 * Properties for defining a `DATASOURCE::CS::ClusterNodePools`
 */
export interface ClusterNodePoolsProps {

    /**
     * Property clusterId: Cluster ID.
     */
    readonly clusterId: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `DATASOURCE::CS::ClusterNodePools`
 */
export class ClusterNodePools extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute NodePoolIds: The list of node_pool IDs.
     */
    public readonly attrNodePoolIds: ros.IResolvable;

    /**
     * Attribute NodePools: The list of node_pools.
     */
    public readonly attrNodePools: ros.IResolvable;

    /**
     * Create a new `DATASOURCE::CS::ClusterNodePools`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ClusterNodePoolsProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosClusterNodePools = new RosClusterNodePools(this, id,  {
            clusterId: props.clusterId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosClusterNodePools;
        this.attrNodePoolIds = rosClusterNodePools.attrNodePoolIds;
        this.attrNodePools = rosClusterNodePools.attrNodePools;
    }
}
