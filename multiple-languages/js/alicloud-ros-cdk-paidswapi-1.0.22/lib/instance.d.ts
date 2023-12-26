import * as ros from '@alicloud/ros-cdk-core';
import { RosInstance } from './paidswapi.generated';
export { RosInstance as InstanceProperty };
/**
 * Properties for defining a `Instance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paidswapi-instance
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
    readonly environmentVariables?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::PaiDswApi::Instance`, which is used to create a Data Science Workshop (DSW) instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paidswapi-instance
 */
export declare class Instance extends ros.Resource {
    /**
     * Attribute Accessibility: Whether the workspace is visible to others.
     */
    readonly attrAccessibility: ros.IResolvable;
    /**
     * Attribute Datasets: A collection of datasets.
     */
    readonly attrDatasets: ros.IResolvable;
    /**
     * Attribute EcsSpec: The ECS specification of the instance.
     */
    readonly attrEcsSpec: ros.IResolvable;
    /**
     * Attribute EnvironmentVariables: Environment variable.
     */
    readonly attrEnvironmentVariables: ros.IResolvable;
    /**
     * Attribute ImageUrl: The mirror address.
     */
    readonly attrImageUrl: ros.IResolvable;
    /**
     * Attribute InstanceId: The first ID of the resource.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * Attribute InstanceName: The instance name.
     */
    readonly attrInstanceName: ros.IResolvable;
    /**
     * Attribute InstanceUrl: The instance address.
     */
    readonly attrInstanceUrl: ros.IResolvable;
    /**
     * Attribute JupyterlabUrl: The jupyterlab address.
     */
    readonly attrJupyterlabUrl: ros.IResolvable;
    /**
     * Attribute Labels: User-defined labels.
     */
    readonly attrLabels: ros.IResolvable;
    /**
     * Attribute PaymentType: The payment type of the resource.
     */
    readonly attrPaymentType: ros.IResolvable;
    /**
     * Attribute TerminalUrl: The terminal address.
     */
    readonly attrTerminalUrl: ros.IResolvable;
    /**
     * Attribute UserVpc: User vpc configuration.
     */
    readonly attrUserVpc: ros.IResolvable;
    /**
     * Attribute WebIDEUrl: The web IDE address.
     */
    readonly attrWebIdeUrl: ros.IResolvable;
    /**
     * Attribute WorkspaceId: The Id of the workspace.
     */
    readonly attrWorkspaceId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceProps, enableResourcePropertyConstraint?: boolean);
}
