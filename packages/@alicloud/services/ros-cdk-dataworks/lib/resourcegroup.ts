import * as ros from '@alicloud/ros-cdk-core';
import { RosResourceGroup } from './dataworks.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosResourceGroup as ResourceGroupProperty };

/**
 * Properties for defining a `ResourceGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dataworks-resourcegroup
 */
export interface ResourceGroupProps {

    /**
     * Property name: The name of a common resource group that creates a common resource group must start with a letter and can contain letters, numbers, underscores (_), up to 128 characters.
     */
    readonly name: string | ros.IResolvable;

    /**
     * Property paymentType: The type of payment for resource groups, PrePaid represents annual and monthly payments, and PostPaid represents payment by volume.
     */
    readonly paymentType: string | ros.IResolvable;

    /**
     * Property vpcId: The default bound VPC ID.
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * Property vSwitchId: The default bound switch ID.
     */
    readonly vSwitchId: string | ros.IResolvable;

    /**
     * Property autoRenewEnabled: Whether to renew automatically.
     */
    readonly autoRenewEnabled?: boolean | ros.IResolvable;

    /**
     * Property paymentDuration: Paid time. Default is 1.
     */
    readonly paymentDuration?: number | ros.IResolvable;

    /**
     * Property paymentDurationUnit: Paid time unit. Valid values:
     * Month: represents monthly subscription
     * Year: represents annual subscription.
     * Default is Month.
     */
    readonly paymentDurationUnit?: string | ros.IResolvable;

    /**
     * Property remark: Remarks for creating a common resource group can contain letters, Chinese, numbers, underscores (_), up to 128 characters.
     */
    readonly remark?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: Alibaba Cloud Resource Group ID.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property spec: Resource group specifications, unit CU, required when the resource group payment mode is PrePaid.
     */
    readonly spec?: number | ros.IResolvable;

    /**
     * Property tags: Tags to attach to ResourceGroup. Max support 20 tags to add during create ResourceGroup. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosResourceGroup.TagsProperty[];
}

/**
 * Represents a `ResourceGroup`.
 */
export interface IResourceGroup extends ros.IResource {
    readonly props: ResourceGroupProps;

    /**
     * Attribute Id: Creates a unique identifier for a common resource group.
     */
    readonly attrId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::DataWorks::ResourceGroup`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosResourceGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dataworks-resourcegroup
 */
export class ResourceGroup extends ros.Resource implements IResourceGroup {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: ResourceGroupProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Id: Creates a unique identifier for a common resource group.
     */
    public readonly attrId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ResourceGroupProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosResourceGroup = new RosResourceGroup(this, id,  {
            autoRenewEnabled: props.autoRenewEnabled,
            vpcId: props.vpcId,
            resourceGroupId: props.resourceGroupId,
            vSwitchId: props.vSwitchId,
            paymentDurationUnit: props.paymentDurationUnit === undefined || props.paymentDurationUnit === null ? 'Month' : props.paymentDurationUnit,
            paymentType: props.paymentType,
            paymentDuration: props.paymentDuration === undefined || props.paymentDuration === null ? 1 : props.paymentDuration,
            spec: props.spec,
            tags: props.tags,
            remark: props.remark,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosResourceGroup;
        this.attrId = rosResourceGroup.attrId;
    }
}
