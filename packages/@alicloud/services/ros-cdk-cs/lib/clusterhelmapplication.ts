import * as ros from '@alicloud/ros-cdk-core';
import { RosClusterHelmApplication } from './cs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosClusterHelmApplication as ClusterHelmApplicationProperty };

/**
 * Properties for defining a `ClusterHelmApplication`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-clusterhelmapplication
 */
export interface ClusterHelmApplicationProps {

    /**
     * Property chartUrl: The URL of chart. Supports HTTP or HTTPS.
     */
    readonly chartUrl: string | ros.IResolvable;

    /**
     * Property clusterId: The ID of the kubernetes cluster.
     */
    readonly clusterId: string | ros.IResolvable;

    /**
     * Property name: The name for helm release.
     */
    readonly name: string | ros.IResolvable;

    /**
     * Property chartValues: Chart custom values.
     */
    readonly chartValues?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * Property credential: The credential of ACR repo. Only take effects when ChartUrl is the address of ACR repo.
     */
    readonly credential?: RosClusterHelmApplication.CredentialProperty | ros.IResolvable;

    /**
     * Property namespace: Namespace to use with helm. Default is default.
     * If the Namespace does not exist, ROS will automatically create it and delete it during the deletion phase.
     */
    readonly namespace?: string | ros.IResolvable;

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
    readonly waitUntil?: Array<RosClusterHelmApplication.WaitUntilProperty | ros.IResolvable> | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CS::ClusterHelmApplication`, which is used to deploy an application by using Helm.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosClusterHelmApplication`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-clusterhelmapplication
 */
export class ClusterHelmApplication extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ClusterHelmApplicationProps;
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
    constructor(scope: ros.Construct, id: string, props: ClusterHelmApplicationProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosClusterHelmApplication = new RosClusterHelmApplication(this, id,  {
            rolePolicy: props.rolePolicy === undefined || props.rolePolicy === null ? 'EnsureAdminRoleAndBinding' : props.rolePolicy,
            chartValues: props.chartValues,
            credential: props.credential,
            clusterId: props.clusterId,
            chartUrl: props.chartUrl,
            validationMode: props.validationMode === undefined || props.validationMode === null ? 'Strict' : props.validationMode,
            waitUntil: props.waitUntil,
            namespace: props.namespace === undefined || props.namespace === null ? 'default' : props.namespace,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosClusterHelmApplication;
        this.attrClusterId = rosClusterHelmApplication.attrClusterId;
        this.attrWaitUntilData = rosClusterHelmApplication.attrWaitUntilData;
    }
}
