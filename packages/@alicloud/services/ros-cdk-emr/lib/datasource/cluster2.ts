import * as ros from '@alicloud/ros-cdk-core';
import { RosCluster2 } from './emr.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosCluster2 as Cluster2Property };

/**
 * Properties for defining a `Cluster2`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-emr-cluster2
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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::EMR::Cluster2`, which is used to query E-MapReduce (EMR) clusters.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCluster2`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-emr-cluster2
 */
export class Cluster2 extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: Cluster2Props;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ClusterIds: The list of the cluster id.
     */
    public readonly attrClusterIds: ros.IResolvable;

    /**
     * Attribute Clusters: The detail of the cluster.
     */
    public readonly attrClusters: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: Cluster2Props = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

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
