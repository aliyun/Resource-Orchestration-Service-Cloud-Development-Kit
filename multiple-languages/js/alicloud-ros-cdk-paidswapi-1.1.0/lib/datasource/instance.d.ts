import * as ros from '@alicloud/ros-cdk-core';
import { RosInstance } from './paidswapi.generated';
export { RosInstance as InstanceProperty };
/**
 * Properties for defining a `Instance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-paidswapi-instance
 */
export interface InstanceProps {
    /**
     * Property instanceId: The first ID of the resource.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::PaiDswApi::Instance`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-paidswapi-instance
 */
export declare class Instance extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: InstanceProps;
    protected enableResourcePropertyConstraint: boolean;
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
     * Attribute ImageUrl: The mirror address.
     */
    readonly attrImageUrl: ros.IResolvable;
    /**
     * Attribute InstanceId: The ID of the resource.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * Attribute InstanceName: The instance name.
     */
    readonly attrInstanceName: ros.IResolvable;
    /**
     * Attribute Labels: User-defined labels.
     */
    readonly attrLabels: ros.IResolvable;
    /**
     * Attribute PaymentType: The payment type of the resource.
     */
    readonly attrPaymentType: ros.IResolvable;
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
