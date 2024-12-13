import * as ros from '@alicloud/ros-cdk-core';
import { RosDedicatedHostCluster } from './ecs.generated';
export { RosDedicatedHostCluster as DedicatedHostClusterProperty };
/**
 * Properties for defining a `DedicatedHostCluster`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-dedicatedhostcluster
 */
export interface DedicatedHostClusterProps {
    /**
     * Property dedicatedHostClusterId: Dedicated host cluster id.
     */
    readonly dedicatedHostClusterId: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ECS::DedicatedHostCluster`, which is used to query the information about a dedicated host cluster.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDedicatedHostCluster`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-dedicatedhostcluster
 */
export declare class DedicatedHostCluster extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: DedicatedHostClusterProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute DedicatedHostClusterId: Dedicated host cluster id.
     */
    readonly attrDedicatedHostClusterId: ros.IResolvable;
    /**
     * Attribute DedicatedHostClusterName: The name of the dedicated host cluster.
     */
    readonly attrDedicatedHostClusterName: ros.IResolvable;
    /**
     * Attribute Description: The description of the dedicated host cluster.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * Attribute ResourceGroupId: The ID of the resource group to which the dedicated host cluster belongs.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * Attribute Tags: The tags of the dedicated host cluster.
     */
    readonly attrTags: ros.IResolvable;
    /**
     * Attribute ZoneId: The zone ID of the dedicated host cluster.
     */
    readonly attrZoneId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DedicatedHostClusterProps, enableResourcePropertyConstraint?: boolean);
}
