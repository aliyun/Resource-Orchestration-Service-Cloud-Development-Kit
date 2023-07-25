import * as ros from '@alicloud/ros-cdk-core';
import { RosHpcClusters } from './ecs.generated';
export { RosHpcClusters as HpcClustersProperty };
/**
 * Properties for defining a `DATASOURCE::ECS::HpcClusters`
 */
export interface HpcClustersProps {
    /**
     * Property hpcClusterIds: The IDs of the HPC clusters. You can specify up to 100 HPC cluster IDs.
     */
    readonly hpcClusterIds?: Array<string | ros.IResolvable> | ros.IResolvable;
}
/**
 * A ROS resource type:  `DATASOURCE::ECS::HpcClusters`
 */
export declare class HpcClusters extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute HpcClusterIds: the list of hpc cluster ids
     */
    readonly attrHpcClusterIds: ros.IResolvable;
    /**
     * Attribute HpcClusters: The list of hpc clusters.
     */
    readonly attrHpcClusters: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::ECS::HpcClusters`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: HpcClustersProps, enableResourcePropertyConstraint?: boolean);
}
