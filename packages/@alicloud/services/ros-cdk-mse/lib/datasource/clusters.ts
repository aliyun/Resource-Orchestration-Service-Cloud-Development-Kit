import * as ros from '@alicloud/ros-cdk-core';
import { RosClusters } from './mse.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosClusters as ClustersProperty };

/**
 * Properties for defining a `Clusters`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mse-clusters
 */
export interface ClustersProps {

    /**
     * Property clusterAliasName: The alias name of cluster.
     */
    readonly clusterAliasName?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::MSE::Clusters`, which is used to query the clusters of Microservices Registry.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosClusters`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mse-clusters
 */
export class Clusters extends ros.Resource {

    /**
     * Attribute ClusterIds: The list of cluster IDs.
     */
    public readonly attrClusterIds: ros.IResolvable;

    /**
     * Attribute Clusters: The list of clusters.
     */
    public readonly attrClusters: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ClustersProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosClusters = new RosClusters(this, id,  {
            clusterAliasName: props.clusterAliasName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosClusters;
        this.attrClusterIds = rosClusters.attrClusterIds;
        this.attrClusters = rosClusters.attrClusters;
    }
}
