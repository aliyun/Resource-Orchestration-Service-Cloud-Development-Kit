import * as ros from '@alicloud/ros-cdk-core';
import { RosHpcCluster } from './ecs.generated';
export { RosHpcCluster as HpcClusterProperty };
/**
 * Properties for defining a `HpcCluster`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-hpccluster
 */
export interface HpcClusterProps {
    /**
     * Property hpcClusterId: The ID of cluster.
     */
    readonly hpcClusterId: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * Represents a `HpcCluster`.
 */
export interface IHpcCluster extends ros.IResource {
    readonly props: HpcClusterProps;
    /**
     * Attribute Description: The description of the HPC cluster.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute HpcClusterId: The ID of cluster.
     */
    readonly attrHpcClusterId: ros.IResolvable | string;
    /**
     * Attribute HpcClusterName: The name of the HPC cluster.
     */
    readonly attrHpcClusterName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ECS::HpcCluster`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosHpcCluster`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-hpccluster
 */
export declare class HpcCluster extends ros.Resource implements IHpcCluster {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: HpcClusterProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Description: The description of the HPC cluster.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute HpcClusterId: The ID of cluster.
     */
    readonly attrHpcClusterId: ros.IResolvable | string;
    /**
     * Attribute HpcClusterName: The name of the HPC cluster.
     */
    readonly attrHpcClusterName: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: HpcClusterProps, enableResourcePropertyConstraint?: boolean);
}
