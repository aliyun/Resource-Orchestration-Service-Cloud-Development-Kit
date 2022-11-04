import * as ros from '@alicloud/ros-cdk-core';
import { RosClusterAddons } from './cs.generated';
export { RosClusterAddons as ClusterAddonsProperty };
/**
 * Properties for defining a `ALIYUN::CS::ClusterAddons`
 */
export interface ClusterAddonsProps {
    /**
     * Property clusterId: Cluster ID.
     */
    readonly clusterId: string | ros.IResolvable;
    /**
     * Property addons: A combination of addon plugins for Kubernetes clusters.
     * Network plug-in: including Flannel and Terway network plug-ins
     * Log service: Optional. If the log service is not enabled, the cluster audit function cannot be used.
     * Ingress: The installation of the Ingress component is enabled by default.
     */
    readonly addons?: Array<RosClusterAddons.AddonsProperty | ros.IResolvable> | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::CS::ClusterAddons`
 */
export declare class ClusterAddons extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute ClusterId: Cluster ID.
     */
    readonly attrClusterId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::CS::ClusterAddons`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ClusterAddonsProps, enableResourcePropertyConstraint?: boolean);
}
