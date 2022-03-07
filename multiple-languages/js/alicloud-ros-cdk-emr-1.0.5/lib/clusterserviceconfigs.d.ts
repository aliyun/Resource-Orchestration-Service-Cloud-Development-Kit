import * as ros from '@alicloud/ros-cdk-core';
import { RosClusterServiceConfigs } from './emr.generated';
export { RosClusterServiceConfigs as ClusterServiceConfigsProperty };
/**
 * Properties for defining a `ALIYUN::EMR::ClusterServiceConfigs`
 */
export interface ClusterServiceConfigsProps {
    /**
     * Property clusterId: The ID of the cluster.
     */
    readonly clusterId: string | ros.IResolvable;
    /**
     * Property serviceConfigs: Server configs
     */
    readonly serviceConfigs: Array<RosClusterServiceConfigs.ServiceConfigsProperty | ros.IResolvable> | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::EMR::ClusterServiceConfigs`
 */
export declare class ClusterServiceConfigs extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute ClusterId: The ID of the cluster.
     */
    readonly attrClusterId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::EMR::ClusterServiceConfigs`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ClusterServiceConfigsProps, enableResourcePropertyConstraint?: boolean);
}
