import * as ros from '@alicloud/ros-cdk-core';
import { RosClusters } from './edas.generated';
export { RosClusters as ClustersProperty };
/**
 * Properties for defining a `Clusters`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-edas-clusters
 */
export interface ClustersProps {
    /**
     * Property logicalRegionId: The ID of the namespace.
     */
    readonly logicalRegionId?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::EDAS::Clusters`, which is used to query clusters.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosClusters`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-edas-clusters
 */
export declare class Clusters extends ros.Resource {
    /**
     * Attribute ClusterIds: The list of cluster IDs.
     */
    readonly attrClusterIds: ros.IResolvable;
    /**
     * Attribute Clusters: The list of clusters.
     */
    readonly attrClusters: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: ClustersProps, enableResourcePropertyConstraint?: boolean);
}
