import * as ros from '@alicloud/ros-cdk-core';
import { RosHpcCluster } from './ecs.generated';
export { RosHpcCluster as HpcClusterProperty };
/**
 * Properties for defining a `HpcCluster`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-hpccluster
 */
export interface HpcClusterProps {
    /**
     * Property name: The name of the HPC cluster. The name must be 2 to 128 characters in length. It must
     * start with a letter but cannot start with http:\/\/ or https:\/\/. It can contain letters,
     * digits, colons (:), underscores (_), and hyphens (-).
     */
    readonly name: string | ros.IResolvable;
    /**
     * Property description: The description of the HPC cluster. The description must be 2 to 256 characters in
     * length. It cannot start with http:\/\/ or https:\/\/. Default value: empty string.
     */
    readonly description?: string | ros.IResolvable;
}
/**
 * Represents a `HpcCluster`.
 */
export interface IHpcCluster extends ros.IResource {
    readonly props: HpcClusterProps;
    /**
     * Attribute HpcClusterId: The ID of the HPC cluster.
     */
    readonly attrHpcClusterId: ros.IResolvable | string;
    /**
     * Attribute Name: The name of the HPC cluster.
     */
    readonly attrName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ECS::HpcCluster`, which is used to create a High Performance Computing (HPC) cluster.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosHpcCluster`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-hpccluster
 */
export declare class HpcCluster extends ros.Resource implements IHpcCluster {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: HpcClusterProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute HpcClusterId: The ID of the HPC cluster.
     */
    readonly attrHpcClusterId: ros.IResolvable | string;
    /**
     * Attribute Name: The name of the HPC cluster.
     */
    readonly attrName: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: HpcClusterProps, enableResourcePropertyConstraint?: boolean);
}
