import * as ros from '@alicloud/ros-cdk-core';
import { RosInstance } from './paidswapi.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosInstance as InstanceProperty };

/**
 * Properties for defining a `ALIYUN::PaiDswApi::Instance`
 */
export interface InstanceProps {

    /**
     * Property ecsSpec: The ECS specification of the instance.
     */
    readonly ecsSpec: string | ros.IResolvable;

    /**
     * Property imageUrl: The mirror address.
     */
    readonly imageUrl: string | ros.IResolvable;

    /**
     * Property instanceName: The instance name. Format requirements:
     * - Can only contain letters, numbers and underscores (_).
     * - It cannot exceed 27 characters.
     */
    readonly instanceName: string | ros.IResolvable;

    /**
     * Property accessibility: Whether the workspace is visible to others. Valid values:
     * - **PUBLIC**: Visible to all users of the workspace.
     * - **PRIVATE**: Only visible to yourself and the administrator of the workspace.
     */
    readonly accessibility?: string | ros.IResolvable;

    /**
     * Property datasets: A collection of datasets.
     */
    readonly datasets?: Array<RosInstance.DatasetsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property environmentVariables: Environment variable.
     */
    readonly environmentVariables?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * Property labels: User-defined labels.
     */
    readonly labels?: Array<RosInstance.LabelsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property saveImage: Whether to close the instance after saving the environment.
     */
    readonly saveImage?: boolean | ros.IResolvable;

    /**
     * Property userVpc: User vpc configuration.
     */
    readonly userVpc?: RosInstance.UserVpcProperty | ros.IResolvable;

    /**
     * Property workspaceId: The Id of the workspace.
     */
    readonly workspaceId?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::PaiDswApi::Instance`
 */
export class Instance extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute Accessibility: Whether the workspace is visible to others.
     */
    public readonly attrAccessibility: ros.IResolvable;

    /**
     * Attribute Datasets: A collection of datasets.
     */
    public readonly attrDatasets: ros.IResolvable;

    /**
     * Attribute EcsSpec: The ECS specification of the instance.
     */
    public readonly attrEcsSpec: ros.IResolvable;

    /**
     * Attribute EnvironmentVariables: Environment variable.
     */
    public readonly attrEnvironmentVariables: ros.IResolvable;

    /**
     * Attribute ImageUrl: The mirror address.
     */
    public readonly attrImageUrl: ros.IResolvable;

    /**
     * Attribute InstanceId: The first ID of the resource.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * Attribute InstanceName: The instance name.
     */
    public readonly attrInstanceName: ros.IResolvable;

    /**
     * Attribute InstanceUrl: The instance address.
     */
    public readonly attrInstanceUrl: ros.IResolvable;

    /**
     * Attribute JupyterlabUrl: The jupyterlab address.
     */
    public readonly attrJupyterlabUrl: ros.IResolvable;

    /**
     * Attribute Labels: User-defined labels.
     */
    public readonly attrLabels: ros.IResolvable;

    /**
     * Attribute PaymentType: The payment type of the resource.
     */
    public readonly attrPaymentType: ros.IResolvable;

    /**
     * Attribute TerminalUrl: The terminal address.
     */
    public readonly attrTerminalUrl: ros.IResolvable;

    /**
     * Attribute UserVpc: User vpc configuration.
     */
    public readonly attrUserVpc: ros.IResolvable;

    /**
     * Attribute WebIDEUrl: The web IDE address.
     */
    public readonly attrWebIdeUrl: ros.IResolvable;

    /**
     * Attribute WorkspaceId: The Id of the workspace.
     */
    public readonly attrWorkspaceId: ros.IResolvable;

    /**
     * Create a new `ALIYUN::PaiDswApi::Instance`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosInstance = new RosInstance(this, id,  {
            datasets: props.datasets,
            instanceName: props.instanceName,
            environmentVariables: props.environmentVariables,
            accessibility: props.accessibility,
            workspaceId: props.workspaceId,
            imageUrl: props.imageUrl,
            ecsSpec: props.ecsSpec,
            labels: props.labels,
            saveImage: props.saveImage,
            userVpc: props.userVpc,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstance;
        this.attrAccessibility = rosInstance.attrAccessibility;
        this.attrDatasets = rosInstance.attrDatasets;
        this.attrEcsSpec = rosInstance.attrEcsSpec;
        this.attrEnvironmentVariables = rosInstance.attrEnvironmentVariables;
        this.attrImageUrl = rosInstance.attrImageUrl;
        this.attrInstanceId = rosInstance.attrInstanceId;
        this.attrInstanceName = rosInstance.attrInstanceName;
        this.attrInstanceUrl = rosInstance.attrInstanceUrl;
        this.attrJupyterlabUrl = rosInstance.attrJupyterlabUrl;
        this.attrLabels = rosInstance.attrLabels;
        this.attrPaymentType = rosInstance.attrPaymentType;
        this.attrTerminalUrl = rosInstance.attrTerminalUrl;
        this.attrUserVpc = rosInstance.attrUserVpc;
        this.attrWebIdeUrl = rosInstance.attrWebIdeUrl;
        this.attrWorkspaceId = rosInstance.attrWorkspaceId;
    }
}
