import * as ros from '@alicloud/ros-cdk-core';
import { RosCluster2 } from './emr.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosCluster2 as Cluster2Property };

/**
 * Properties for defining a `DATASOURCE::EMR::Cluster2`
 */
export interface Cluster2Props {

    /**
     * Property clusterIds: The list of emr cluster id.
     */
    readonly clusterIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property clusterName: The name of cluster.
     */
    readonly clusterName?: string | ros.IResolvable;

    /**
     * Property clusterStates: The list of emr cluster state.
     */
    readonly clusterStates?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property clusterType: The list of emr cluster type.
     */
    readonly clusterType?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property paymentTypes: The payment type of emr cluster.
     */
    readonly paymentTypes?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property resourceGroupId: The resource group id of emr cluster.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property tags: Tags of emr cluster.
     */
    readonly tags?: RosCluster2.TagsProperty[];
}

/**
 * A ROS resource type:  `DATASOURCE::EMR::Cluster2`
 */
export class Cluster2 extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute ClusterIds: The list of the cluster id.
     */
    public readonly attrClusterIds: ros.IResolvable;

    /**
     * Attribute Clusters: The detail of the cluster.
     */
    public readonly attrClusters: ros.IResolvable;

    /**
     * Create a new `DATASOURCE::EMR::Cluster2`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: Cluster2Props = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosCluster2 = new RosCluster2(this, id,  {
            paymentTypes: props.paymentTypes,
            resourceGroupId: props.resourceGroupId,
            clusterName: props.clusterName,
            clusterType: props.clusterType,
            clusterIds: props.clusterIds,
            tags: props.tags,
            clusterStates: props.clusterStates,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCluster2;
        this.attrClusterIds = rosCluster2.attrClusterIds;
        this.attrClusters = rosCluster2.attrClusters;
    }
}
