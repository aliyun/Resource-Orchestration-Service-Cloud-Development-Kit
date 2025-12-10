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
    /**
     * Property rolePolicy: Before deploying the application, check the policies associated with the roles of the current user. Valid values:
     * - EnsureAdminRoleAndBinding: Automatically create a role named "ros:application-admin:${user-id}" with administrator permissions and bind it to the current user.
     * - None: Do nothing.
     * The default value is EnsureAdminRoleAndBinding.
     */
    readonly rolePolicy?: string | ros.IResolvable;
    /**
     * Property validationMode: Validation modes include:
     * - Basic: basic validation, such as verifying the existence of a cluster.
     * - Strict: in addition to basic validation, also validate the legality of WaitUntil.
     */
    readonly validationMode?: string | ros.IResolvable;
    /**
     * Property waitUntil: After starting a creation or update, wait until all conditions are met.
     */
    readonly waitUntil?: Array<RosClusterAddons.WaitUntilProperty | ros.IResolvable> | ros.IResolvable;
}
/**
 * Represents a `ClusterAddons`.
 */
export interface IClusterAddons extends ros.IResource {
    readonly props: ClusterAddonsProps;
    /**
     * Attribute ClusterId: The ID of the cluster.
     */
    readonly attrClusterId: ros.IResolvable | string;
    /**
     * Attribute WaitUntilData: A list of values for each JsonPath in WaitUntil.
     */
    readonly attrWaitUntilData: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CS::ClusterAddons`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosClusterAddons`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-clusteraddons
 */
export declare class ClusterAddons extends ros.Resource implements IClusterAddons {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ClusterAddonsProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ClusterId: The ID of the cluster.
     */
    readonly attrClusterId: ros.IResolvable | string;
    /**
     * Attribute WaitUntilData: A list of values for each JsonPath in WaitUntil.
     */
    readonly attrWaitUntilData: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ClusterAddonsProps, enableResourcePropertyConstraint?: boolean);
}
