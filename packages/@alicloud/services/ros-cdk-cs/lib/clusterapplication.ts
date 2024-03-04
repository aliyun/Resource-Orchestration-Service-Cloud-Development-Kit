import * as ros from '@alicloud/ros-cdk-core';
import { RosClusterApplication } from './cs.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::CS::ClusterApplication`, which is used to deploy a container application.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosClusterApplication`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-clusterapplication
 */
export class ClusterApplication extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ClusterApplicationProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ClusterId: The ID of the cluster.
     */
    public readonly attrClusterId: ros.IResolvable;

    /**
     * Attribute WaitUntilData: A list of values for each JsonPath in WaitUntil.
     */
    public readonly attrWaitUntilData: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ClusterApplicationProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosClusterApplication = new RosClusterApplication(this, id,  {
            rolePolicy: props.rolePolicy === undefined || props.rolePolicy === null ? 'EnsureAdminRoleAndBinding' : props.rolePolicy,
            yamlContent: props.yamlContent,
            clusterId: props.clusterId,
            defaultNamespace: props.defaultNamespace === undefined || props.defaultNamespace === null ? 'default' : props.defaultNamespace,
            stage: props.stage === undefined || props.stage === null ? 'All' : props.stage,
            validationMode: props.validationMode === undefined || props.validationMode === null ? 'Strict' : props.validationMode,
            waitUntil: props.waitUntil,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosClusterApplication;
        this.attrClusterId = rosClusterApplication.attrClusterId;
        this.attrWaitUntilData = rosClusterApplication.attrWaitUntilData;
    }
}
