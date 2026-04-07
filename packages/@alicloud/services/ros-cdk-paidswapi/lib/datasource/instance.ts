import * as ros from '@alicloud/ros-cdk-core';
import { RosInstance } from './paidswapi.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * Represents a `Instance`.
 */
export interface IInstance extends ros.IResource {
    readonly props: InstanceProps;

    /**
     * Attribute Accessibility: Whether the workspace is visible to others.
     */
    readonly attrAccessibility: ros.IResolvable | string;

    /**
     * Attribute Datasets: A collection of datasets.
     */
    readonly attrDatasets: ros.IResolvable | string;

    /**
     * Attribute EcsSpec: The ECS specification of the instance.
     */
    readonly attrEcsSpec: ros.IResolvable | string;

    /**
     * Attribute ImageUrl: The mirror address.
     */
    readonly attrImageUrl: ros.IResolvable | string;

    /**
     * Attribute InstanceId: The ID of the resource.
     */
    readonly attrInstanceId: ros.IResolvable | string;

    /**
     * Attribute InstanceName: The instance name.
     */
    readonly attrInstanceName: ros.IResolvable | string;

    /**
     * Attribute Labels: User-defined labels.
     */
    readonly attrLabels: ros.IResolvable | string;

    /**
     * Attribute PaymentType: The payment type of the resource.
     */
    readonly attrPaymentType: ros.IResolvable | string;

    /**
     * Attribute WorkspaceId: The Id of the workspace.
     */
    readonly attrWorkspaceId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::PaiDswApi::Instance`, which is used to query the basic information about a Data Science Workshop (DSW) instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-paidswapi-instance
 */
export class Instance extends ros.Resource implements IInstance {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: InstanceProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Accessibility: Whether the workspace is visible to others.
     */
    public readonly attrAccessibility: ros.IResolvable | string;

    /**
     * Attribute Datasets: A collection of datasets.
     */
    public readonly attrDatasets: ros.IResolvable | string;

    /**
     * Attribute EcsSpec: The ECS specification of the instance.
     */
    public readonly attrEcsSpec: ros.IResolvable | string;

    /**
     * Attribute ImageUrl: The mirror address.
     */
    public readonly attrImageUrl: ros.IResolvable | string;

    /**
     * Attribute InstanceId: The ID of the resource.
     */
    public readonly attrInstanceId: ros.IResolvable | string;

    /**
     * Attribute InstanceName: The instance name.
     */
    public readonly attrInstanceName: ros.IResolvable | string;

    /**
     * Attribute Labels: User-defined labels.
     */
    public readonly attrLabels: ros.IResolvable | string;

    /**
     * Attribute PaymentType: The payment type of the resource.
     */
    public readonly attrPaymentType: ros.IResolvable | string;

    /**
     * Attribute WorkspaceId: The Id of the workspace.
     */
    public readonly attrWorkspaceId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosInstance = new RosInstance(this, id,  {
            instanceId: props.instanceId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstance;
        this.attrAccessibility = rosInstance.attrAccessibility;
        this.attrDatasets = rosInstance.attrDatasets;
        this.attrEcsSpec = rosInstance.attrEcsSpec;
        this.attrImageUrl = rosInstance.attrImageUrl;
        this.attrInstanceId = rosInstance.attrInstanceId;
        this.attrInstanceName = rosInstance.attrInstanceName;
        this.attrLabels = rosInstance.attrLabels;
        this.attrPaymentType = rosInstance.attrPaymentType;
        this.attrWorkspaceId = rosInstance.attrWorkspaceId;
    }
}
