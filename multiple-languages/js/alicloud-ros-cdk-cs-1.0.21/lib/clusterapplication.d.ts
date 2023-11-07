import * as ros from '@alicloud/ros-cdk-core';
import { RosClusterApplication } from './cs.generated';
export { RosClusterApplication as ClusterApplicationProperty };
/**
 * Properties for defining a `ALIYUN::CS::ClusterApplication`
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
}
/**
 * A ROS resource type:  `ALIYUN::CS::ClusterApplication`
 */
export declare class ClusterApplication extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute ClusterId: The ID of the cluster.
     */
    readonly attrClusterId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::CS::ClusterApplication`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ClusterApplicationProps, enableResourcePropertyConstraint?: boolean);
}
