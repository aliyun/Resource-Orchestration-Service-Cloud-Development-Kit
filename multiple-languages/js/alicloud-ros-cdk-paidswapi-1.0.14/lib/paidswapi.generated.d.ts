import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::PaiDswApi::Instance`
 */
export interface RosInstanceProps {
    /**
     * @Property ecsSpec: The ECS specification of the instance.
     */
    readonly ecsSpec: string | ros.IResolvable;
    /**
     * @Property imageUrl: The mirror address.
     */
    readonly imageUrl: string | ros.IResolvable;
    /**
     * @Property instanceName: The instance name. Format requirements:
     * - Can only contain letters, numbers and underscores (_).
     * - It cannot exceed 27 characters.
     */
    readonly instanceName: string | ros.IResolvable;
    /**
     * @Property accessibility: Whether the workspace is visible to others. Valid values:
     * - **PUBLIC**: Visible to all users of the workspace.
     * - **PRIVATE**: Only visible to yourself and the administrator of the workspace.
     */
    readonly accessibility?: string | ros.IResolvable;
    /**
     * @Property datasets: A collection of datasets.
     */
    readonly datasets?: Array<RosInstance.DatasetsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property environmentVariables: Environment variable.
     */
    readonly environmentVariables?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property labels: User-defined labels.
     */
    readonly labels?: Array<RosInstance.LabelsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property saveImage: Whether to close the instance after saving the environment.
     */
    readonly saveImage?: boolean | ros.IResolvable;
    /**
     * @Property userVpc: User vpc configuration.
     */
    readonly userVpc?: RosInstance.UserVpcProperty | ros.IResolvable;
    /**
     * @Property workspaceId: The Id of the workspace.
     */
    readonly workspaceId?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::PaiDswApi::Instance`
 */
export declare class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PaiDswApi::Instance";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute Accessibility: Whether the workspace is visible to others.
     */
    readonly attrAccessibility: ros.IResolvable;
    /**
     * @Attribute Datasets: A collection of datasets.
     */
    readonly attrDatasets: ros.IResolvable;
    /**
     * @Attribute EcsSpec: The ECS specification of the instance.
     */
    readonly attrEcsSpec: ros.IResolvable;
    /**
     * @Attribute EnvironmentVariables: Environment variable.
     */
    readonly attrEnvironmentVariables: ros.IResolvable;
    /**
     * @Attribute ImageUrl: The mirror address.
     */
    readonly attrImageUrl: ros.IResolvable;
    /**
     * @Attribute InstanceId: The first ID of the resource.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * @Attribute InstanceName: The instance name.
     */
    readonly attrInstanceName: ros.IResolvable;
    /**
     * @Attribute InstanceUrl: The instance address.
     */
    readonly attrInstanceUrl: ros.IResolvable;
    /**
     * @Attribute JupyterlabUrl: The jupyterlab address.
     */
    readonly attrJupyterlabUrl: ros.IResolvable;
    /**
     * @Attribute Labels: User-defined labels.
     */
    readonly attrLabels: ros.IResolvable;
    /**
     * @Attribute PaymentType: The payment type of the resource.
     */
    readonly attrPaymentType: ros.IResolvable;
    /**
     * @Attribute TerminalUrl: The terminal address.
     */
    readonly attrTerminalUrl: ros.IResolvable;
    /**
     * @Attribute UserVpc: User vpc configuration.
     */
    readonly attrUserVpc: ros.IResolvable;
    /**
     * @Attribute WebIDEUrl: The web IDE address.
     */
    readonly attrWebIdeUrl: ros.IResolvable;
    /**
     * @Attribute WorkspaceId: The Id of the workspace.
     */
    readonly attrWorkspaceId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property ecsSpec: The ECS specification of the instance.
     */
    ecsSpec: string | ros.IResolvable;
    /**
     * @Property imageUrl: The mirror address.
     */
    imageUrl: string | ros.IResolvable;
    /**
     * @Property instanceName: The instance name. Format requirements:
     * - Can only contain letters, numbers and underscores (_).
     * - It cannot exceed 27 characters.
     */
    instanceName: string | ros.IResolvable;
    /**
     * @Property accessibility: Whether the workspace is visible to others. Valid values:
     * - **PUBLIC**: Visible to all users of the workspace.
     * - **PRIVATE**: Only visible to yourself and the administrator of the workspace.
     */
    accessibility: string | ros.IResolvable | undefined;
    /**
     * @Property datasets: A collection of datasets.
     */
    datasets: Array<RosInstance.DatasetsProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property environmentVariables: Environment variable.
     */
    environmentVariables: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @Property labels: User-defined labels.
     */
    labels: Array<RosInstance.LabelsProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property saveImage: Whether to close the instance after saving the environment.
     */
    saveImage: boolean | ros.IResolvable | undefined;
    /**
     * @Property userVpc: User vpc configuration.
     */
    userVpc: RosInstance.UserVpcProperty | ros.IResolvable | undefined;
    /**
     * @Property workspaceId: The Id of the workspace.
     */
    workspaceId: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::PaiDswApi::Instance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosInstance {
    /**
     * @stability external
     */
    interface DatasetsProperty {
        /**
         * @Property mountPath: The Mount path inside the container.
         */
        readonly mountPath?: string | ros.IResolvable;
        /**
         * @Property datasetId: The data set Id.
         */
        readonly datasetId?: string | ros.IResolvable;
    }
}
export declare namespace RosInstance {
    /**
     * @stability external
     */
    interface LabelsProperty {
        /**
         * @Property value: User-defined label values.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: User-defined tag key.
         */
        readonly key?: string | ros.IResolvable;
    }
}
export declare namespace RosInstance {
    /**
     * @stability external
     */
    interface UserVpcProperty {
        /**
         * @Property vpcId: Vpc identity ID.
         */
        readonly vpcId?: string | ros.IResolvable;
        /**
         * @Property securityGroupId: The Id of the security group.
         */
        readonly securityGroupId?: string | ros.IResolvable;
    }
}
