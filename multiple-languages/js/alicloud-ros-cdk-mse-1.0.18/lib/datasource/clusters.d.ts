import * as ros from '@alicloud/ros-cdk-core';
import { RosClusters } from './mse.generated';
export { RosClusters as ClustersProperty };
/**
 * Properties for defining a `DATASOURCE::MSE::Clusters`
 */
export interface ClustersProps {
    /**
     * Property clusterAliasName: The alias name of cluster.
     */
    readonly clusterAliasName?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `DATASOURCE::MSE::Clusters`
 */
export declare class Clusters extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute ClusterIds: The list of cluster IDs.
     */
    readonly attrClusterIds: ros.IResolvable;
    /**
     * Attribute Clusters: The list of clusters.
     */
    readonly attrClusters: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::MSE::Clusters`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: ClustersProps, enableResourcePropertyConstraint?: boolean);
}
