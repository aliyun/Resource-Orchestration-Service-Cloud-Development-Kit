import * as ros from '@alicloud/ros-cdk-core';
import { RosInstance } from './swas.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosInstance as InstanceProperty };

/**
 * Properties for defining a `Instance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-swas-instance
 */
export interface InstanceProps {

    /**
     * Property instanceId: The ID of the instance.
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
     * Attribute BusinessStatus: The business status of the instance.
     */
    readonly attrBusinessStatus: ros.IResolvable | string;

    /**
     * Attribute ChargeType: The billing method of the instance.
     */
    readonly attrChargeType: ros.IResolvable | string;

    /**
     * Attribute Combination: Indicates whether the instance is a combination instance.
     */
    readonly attrCombination: ros.IResolvable | string;

    /**
     * Attribute CreationTime: The creation time of the instance.
     */
    readonly attrCreationTime: ros.IResolvable | string;

    /**
     * Attribute DdosStatus: The anti-DDoS status of the instance.
     */
    readonly attrDdosStatus: ros.IResolvable | string;

    /**
     * Attribute DisableReason: The reason why the instance is disabled.
     */
    readonly attrDisableReason: ros.IResolvable | string;

    /**
     * Attribute Disks: The disks of the instance.
     */
    readonly attrDisks: ros.IResolvable | string;

    /**
     * Attribute ExpiredTime: The expiration time of the instance.
     */
    readonly attrExpiredTime: ros.IResolvable | string;

    /**
     * Attribute Image: The image information of the instance.
     */
    readonly attrImage: ros.IResolvable | string;

    /**
     * Attribute ImageId: The ID of the image used by the instance.
     */
    readonly attrImageId: ros.IResolvable | string;

    /**
     * Attribute InnerIpAddress: The private IP address of the instance.
     */
    readonly attrInnerIpAddress: ros.IResolvable | string;

    /**
     * Attribute InstanceId: The ID of the instance.
     */
    readonly attrInstanceId: ros.IResolvable | string;

    /**
     * Attribute InstanceName: The name of the instance.
     */
    readonly attrInstanceName: ros.IResolvable | string;

    /**
     * Attribute NetworkAttributes: The network attributes of the instance.
     */
    readonly attrNetworkAttributes: ros.IResolvable | string;

    /**
     * Attribute PlanId: The plan ID of the instance.
     */
    readonly attrPlanId: ros.IResolvable | string;

    /**
     * Attribute PlanType: The plan type of the instance.
     */
    readonly attrPlanType: ros.IResolvable | string;

    /**
     * Attribute PublicIpAddress: The public IP address of the instance.
     */
    readonly attrPublicIpAddress: ros.IResolvable | string;

    /**
     * Attribute RegionId: The ID of the region where the instance is deployed.
     */
    readonly attrRegionId: ros.IResolvable | string;

    /**
     * Attribute ResourceGroupId: The ID of the resource group to which the instance belongs.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;

    /**
     * Attribute ResourceSpec: The resource specification of the instance.
     */
    readonly attrResourceSpec: ros.IResolvable | string;

    /**
     * Attribute Status: The status of the instance.
     */
    readonly attrStatus: ros.IResolvable | string;

    /**
     * Attribute Tags: The tags of the instance.
     */
    readonly attrTags: ros.IResolvable | string;

    /**
     * Attribute Uuid: The unique identifier of the instance.
     */
    readonly attrUuid: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::SWAS::Instance`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-swas-instance
 */
export class Instance extends ros.Resource implements IInstance {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: InstanceProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute BusinessStatus: The business status of the instance.
     */
    public readonly attrBusinessStatus: ros.IResolvable | string;

    /**
     * Attribute ChargeType: The billing method of the instance.
     */
    public readonly attrChargeType: ros.IResolvable | string;

    /**
     * Attribute Combination: Indicates whether the instance is a combination instance.
     */
    public readonly attrCombination: ros.IResolvable | string;

    /**
     * Attribute CreationTime: The creation time of the instance.
     */
    public readonly attrCreationTime: ros.IResolvable | string;

    /**
     * Attribute DdosStatus: The anti-DDoS status of the instance.
     */
    public readonly attrDdosStatus: ros.IResolvable | string;

    /**
     * Attribute DisableReason: The reason why the instance is disabled.
     */
    public readonly attrDisableReason: ros.IResolvable | string;

    /**
     * Attribute Disks: The disks of the instance.
     */
    public readonly attrDisks: ros.IResolvable | string;

    /**
     * Attribute ExpiredTime: The expiration time of the instance.
     */
    public readonly attrExpiredTime: ros.IResolvable | string;

    /**
     * Attribute Image: The image information of the instance.
     */
    public readonly attrImage: ros.IResolvable | string;

    /**
     * Attribute ImageId: The ID of the image used by the instance.
     */
    public readonly attrImageId: ros.IResolvable | string;

    /**
     * Attribute InnerIpAddress: The private IP address of the instance.
     */
    public readonly attrInnerIpAddress: ros.IResolvable | string;

    /**
     * Attribute InstanceId: The ID of the instance.
     */
    public readonly attrInstanceId: ros.IResolvable | string;

    /**
     * Attribute InstanceName: The name of the instance.
     */
    public readonly attrInstanceName: ros.IResolvable | string;

    /**
     * Attribute NetworkAttributes: The network attributes of the instance.
     */
    public readonly attrNetworkAttributes: ros.IResolvable | string;

    /**
     * Attribute PlanId: The plan ID of the instance.
     */
    public readonly attrPlanId: ros.IResolvable | string;

    /**
     * Attribute PlanType: The plan type of the instance.
     */
    public readonly attrPlanType: ros.IResolvable | string;

    /**
     * Attribute PublicIpAddress: The public IP address of the instance.
     */
    public readonly attrPublicIpAddress: ros.IResolvable | string;

    /**
     * Attribute RegionId: The ID of the region where the instance is deployed.
     */
    public readonly attrRegionId: ros.IResolvable | string;

    /**
     * Attribute ResourceGroupId: The ID of the resource group to which the instance belongs.
     */
    public readonly attrResourceGroupId: ros.IResolvable | string;

    /**
     * Attribute ResourceSpec: The resource specification of the instance.
     */
    public readonly attrResourceSpec: ros.IResolvable | string;

    /**
     * Attribute Status: The status of the instance.
     */
    public readonly attrStatus: ros.IResolvable | string;

    /**
     * Attribute Tags: The tags of the instance.
     */
    public readonly attrTags: ros.IResolvable | string;

    /**
     * Attribute Uuid: The unique identifier of the instance.
     */
    public readonly attrUuid: ros.IResolvable | string;

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
        this.attrBusinessStatus = rosInstance.attrBusinessStatus;
        this.attrChargeType = rosInstance.attrChargeType;
        this.attrCombination = rosInstance.attrCombination;
        this.attrCreationTime = rosInstance.attrCreationTime;
        this.attrDdosStatus = rosInstance.attrDdosStatus;
        this.attrDisableReason = rosInstance.attrDisableReason;
        this.attrDisks = rosInstance.attrDisks;
        this.attrExpiredTime = rosInstance.attrExpiredTime;
        this.attrImage = rosInstance.attrImage;
        this.attrImageId = rosInstance.attrImageId;
        this.attrInnerIpAddress = rosInstance.attrInnerIpAddress;
        this.attrInstanceId = rosInstance.attrInstanceId;
        this.attrInstanceName = rosInstance.attrInstanceName;
        this.attrNetworkAttributes = rosInstance.attrNetworkAttributes;
        this.attrPlanId = rosInstance.attrPlanId;
        this.attrPlanType = rosInstance.attrPlanType;
        this.attrPublicIpAddress = rosInstance.attrPublicIpAddress;
        this.attrRegionId = rosInstance.attrRegionId;
        this.attrResourceGroupId = rosInstance.attrResourceGroupId;
        this.attrResourceSpec = rosInstance.attrResourceSpec;
        this.attrStatus = rosInstance.attrStatus;
        this.attrTags = rosInstance.attrTags;
        this.attrUuid = rosInstance.attrUuid;
    }
}
