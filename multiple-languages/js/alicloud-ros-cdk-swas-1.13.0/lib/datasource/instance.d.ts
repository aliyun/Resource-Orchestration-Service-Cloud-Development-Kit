import * as ros from '@alicloud/ros-cdk-core';
import { RosInstance } from './swas.generated';
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
export declare class Instance extends ros.Resource implements IInstance {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: InstanceProps;
    protected enableResourcePropertyConstraint: boolean;
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
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceProps, enableResourcePropertyConstraint?: boolean);
}
