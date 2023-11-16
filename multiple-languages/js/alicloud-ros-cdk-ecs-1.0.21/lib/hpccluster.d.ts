import * as ros from '@alicloud/ros-cdk-core';
import { RosHpcCluster } from './ecs.generated';
export { RosHpcCluster as HpcClusterProperty };
/**
 * Properties for defining a `ALIYUN::ECS::HpcCluster`
 */
export interface HpcClusterProps {
    /**
     * Property name: The name of the HPC cluster. The name must be 2 to 128 characters in length. It must
     * start with a letter but cannot start with http:// or https://. It can contain letters,
     * digits, colons (:), underscores (_), and hyphens (-).
     */
    readonly name: string | ros.IResolvable;
    /**
     * Property description: The description of the HPC cluster. The description must be 2 to 256 characters in
     * length. It cannot start with http:// or https://. Default value: empty string.
     */
    readonly description?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::ECS::HpcCluster`
 */
export declare class HpcCluster extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute HpcClusterId: The ID of the HPC cluster.
     */
    readonly attrHpcClusterId: ros.IResolvable;
    /**
     * Attribute Name: The name of the HPC cluster.
     */
    readonly attrName: ros.IResolvable;
    /**
     * Create a new `ALIYUN::ECS::HpcCluster`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: HpcClusterProps, enableResourcePropertyConstraint?: boolean);
}
