import * as ros from '@alicloud/ros-cdk-core';
import { RosDedicatedHostClusters } from './ecs.generated';
export { RosDedicatedHostClusters as DedicatedHostClustersProperty };
/**
 * Properties for defining a `DATASOURCE::ECS::DedicatedHostClusters`
 */
export interface DedicatedHostClustersProps {
    /**
     * Property dedicatedHostClusterName: The name of the dedicated host cluster.
     */
    readonly dedicatedHostClusterName?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group to which the dedicated host cluster belongs.
     * If this parameter is specified to query resources,
     * up to 1,000 resources that belong to the specified resource group can be displayed in the response.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property zoneId: The zone ID of the dedicated host cluster.
     * You can call the DescribeZones operation to query the most recent zone list.
     */
    readonly zoneId?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `DATASOURCE::ECS::DedicatedHostClusters`
 */
export declare class DedicatedHostClusters extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute DedicatedHostClusterIds: The list of dedicated host cluster IDs.
     */
    readonly attrDedicatedHostClusterIds: ros.IResolvable;
    /**
     * Attribute DedicatedHostClusters: The list of dedicated host clusters.
     */
    readonly attrDedicatedHostClusters: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::ECS::DedicatedHostClusters`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: DedicatedHostClustersProps, enableResourcePropertyConstraint?: boolean);
}
