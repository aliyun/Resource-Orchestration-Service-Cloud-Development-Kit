import * as ros from '@alicloud/ros-cdk-core';
import { RosClusterApplication } from './cs.generated';
export { RosClusterApplication as ClusterApplicationProperty };
/**
 * Properties for defining a `ClusterApplication`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-clusterapplication
 */
export interface ClusterApplicationProps {
    /**
     * Property clusterId: The ID of the kubernetes cluster.
     */
    readonly clusterId: string | ros.IResolvable;
    /**
     * Property yamlContent: The yaml content of application.
     */
    readonly yamlContent: string | ros.IResolvable;
    /**
     * Property defaultNamespace: The default namespace for the application, default value is default.
     * If a namespace is defined in yaml metadata, its priority is higher than DefaultNamespace.
     * If the DefaultNamespace does not exist, ROS will automatically create it and delete it during the deletion phase.
     */
    readonly defaultNamespace?: string | ros.IResolvable;
    /**
     * Property rolePolicy: Before deploying the application, check the policies associated with the roles of the current user. Valid values:
     * - EnsureAdminRoleAndBinding: Automatically create a role named "ros:application-admin:${user-id}" with administrator permissions and bind it to the current user.
     * - None: Do nothing.
     * The default value is EnsureAdminRoleAndBinding.
     */
    readonly rolePolicy?: string | ros.IResolvable;
    /**
     * Property stage: At what stage to run. Valid values:
     * - All: all stages, including create, update, and delete.
     * - Delete: the delete stage. This means that only in the deletion stage of this resource will apply yaml to the cluster.
     * The default is All.
     */
    readonly stage?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CS::ClusterApplication`, which is used to deploy a container application.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosClusterApplication`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-clusterapplication
 */
export declare class ClusterApplication extends ros.Resource {
    /**
     * Attribute ClusterId: The ID of the cluster.
     */
    readonly attrClusterId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ClusterApplicationProps, enableResourcePropertyConstraint?: boolean);
}
