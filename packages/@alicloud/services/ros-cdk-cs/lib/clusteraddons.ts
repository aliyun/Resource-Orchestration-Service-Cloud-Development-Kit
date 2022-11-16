import * as ros from '@alicloud/ros-cdk-core';
import { RosClusterAddons } from './cs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosClusterAddons as ClusterAddonsProperty };

/**
 * Properties for defining a `ALIYUN::CS::ClusterAddons`
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
 * A ROS resource type:  `ALIYUN::CS::ClusterAddons`
 */
export class ClusterAddons extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute ClusterId: Cluster ID.
     */
    public readonly attrClusterId: ros.IResolvable;

    /**
     * Create a new `ALIYUN::CS::ClusterAddons`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ClusterAddonsProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosClusterAddons = new RosClusterAddons(this, id,  {
            clusterId: props.clusterId,
            addons: props.addons,
            installedIgnore: props.installedIgnore === undefined || props.installedIgnore === null ? false : props.installedIgnore,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosClusterAddons;
        this.attrClusterId = rosClusterAddons.attrClusterId;
    }
}
