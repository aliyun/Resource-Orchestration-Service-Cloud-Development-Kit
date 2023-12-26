import * as ros from '@alicloud/ros-cdk-core';
import { RosHpcClusters } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
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
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ECS::HpcClusters`, which is used to query available High Performance Computing (HPC) clusters.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosHpcClusters`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-hpcclusters
 */
export class HpcClusters extends ros.Resource {

    /**
     * Attribute HpcClusterIds: the list of hpc cluster ids
     */
    public readonly attrHpcClusterIds: ros.IResolvable;

    /**
     * Attribute HpcClusters: The list of hpc clusters.
     */
    public readonly attrHpcClusters: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: HpcClustersProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosHpcClusters = new RosHpcClusters(this, id,  {
            hpcClusterIds: props.hpcClusterIds,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosHpcClusters;
        this.attrHpcClusterIds = rosHpcClusters.attrHpcClusterIds;
        this.attrHpcClusters = rosHpcClusters.attrHpcClusters;
    }
}
