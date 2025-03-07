import * as ros from '@alicloud/ros-cdk-core';
import { RosHpcClusters } from './ecs.generated';
export { RosHpcClusters as HpcClustersProperty };
/**
 * Properties for defining a `HpcClusters`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-hpcclusters
 */
export interface HpcClustersProps {
    /**
     * Property hpcClusterIds: The IDs of the HPC clusters. You can specify up to 100 HPC cluster IDs.
     */
    readonly hpcClusterIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * Represents a `HpcClusters`.
 */
export interface IHpcClusters extends ros.IResource {
    readonly props: HpcClustersProps;
    /**
     * Attribute HpcClusterIds: the list of hpc cluster ids
     */
    readonly attrHpcClusterIds: ros.IResolvable | string;
    /**
     * Attribute HpcClusters: The list of hpc clusters.
     */
    readonly attrHpcClusters: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ECS::HpcClusters`, which is used to query available High Performance Computing (HPC) clusters.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosHpcClusters`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-hpcclusters
 */
export declare class HpcClusters extends ros.Resource implements IHpcClusters {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: HpcClustersProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute HpcClusterIds: the list of hpc cluster ids
     */
    readonly attrHpcClusterIds: ros.IResolvable | string;
    /**
     * Attribute HpcClusters: The list of hpc clusters.
     */
    readonly attrHpcClusters: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: HpcClustersProps, enableResourcePropertyConstraint?: boolean);
}
