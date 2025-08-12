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
     * If the DefaultNamespace does not exist, ROS will create it automatically and keep it by default during the delete phase.
     */
    readonly defaultNamespace?: string | ros.IResolvable;
    /**
     * Property defaultNamespaceDeletion: Whether to delete the namespace specified by DefaultNamespace. If DefaultNamespace is in ('default', 'kube-node-lease', 'kube-public', 'kube-system', 'arms-prom'), no matter whether DefaultNamespaceDeletion is true or not, it will not be deleted.
     */
    readonly defaultNamespaceDeletion?: boolean | ros.IResolvable;
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
    /**
     * Property validationMode: Validation modes include:
     * - Basic: basic validation, such as verifying the existence of a cluster.
     * - Strict: in addition to basic validation, also validate the legality of YamlContent and WaitUntil.
     */
    readonly validationMode?: string | ros.IResolvable;
    /**
     * Property waitUntil: After starting a creation or update, wait until all conditions are met.
     */
    readonly waitUntil?: Array<RosClusterApplication.WaitUntilProperty | ros.IResolvable> | ros.IResolvable;
}
/**
 * Represents a `ClusterApplication`.
 */
export interface IClusterApplication extends ros.IResource {
    readonly props: ClusterApplicationProps;
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::CS::ClusterApplication`, which is used to deploy an application in a Container Service for Kubernetes (ACK) cluster.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosClusterApplication`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-clusterapplication
 */
export declare class ClusterApplication extends ros.Resource implements IClusterApplication {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ClusterApplicationProps;
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
    constructor(scope: ros.Construct, id: string, props: ClusterApplicationProps, enableResourcePropertyConstraint?: boolean);
}
