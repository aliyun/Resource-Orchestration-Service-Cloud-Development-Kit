import * as ros from '@alicloud/ros-cdk-core';
import { RosClusterAddons } from './cs.generated';
export { RosClusterAddons as ClusterAddonsProperty };
/**
 * Properties for defining a `ClusterAddons`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-clusteraddons
 */
export interface ClusterAddonsProps {
    /**
     * Property addons: A combination of addon plugins for Kubernetes clusters.
     * Network plug-in: including Flannel and Terway network plug-ins
     * Log service: Optional. If the log service is not enabled, the cluster audit function cannot be used.
     * Ingress: The installation of the Ingress component is enabled by default.
     */
    readonly addons: Array<RosClusterAddons.AddonsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property clusterId: Cluster ID.
     */
    readonly clusterId: string | ros.IResolvable;
    /**
     * Property installedIgnore: Whether to ignore already installed addons when creating. If true, when creating, only install addons that are not yet installed. When deleting, only uninstall addons that are installed during the creation stage.
     * Default false.
     */
    readonly installedIgnore?: boolean | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CS::ClusterAddons`, which is used to install components in a cluster.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosClusterAddons`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-clusteraddons
 */
export declare class ClusterAddons extends ros.Resource {
    /**
     * Attribute ClusterId: Cluster ID.
     */
    readonly attrClusterId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ClusterAddonsProps, enableResourcePropertyConstraint?: boolean);
}
