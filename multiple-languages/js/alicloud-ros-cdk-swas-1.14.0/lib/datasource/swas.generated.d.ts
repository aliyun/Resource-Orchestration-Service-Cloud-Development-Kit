import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-swas-instance
 */
export interface RosInstanceProps {
    /**
     * @Property instanceId: The ID of the instance.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::SWAS::Instance`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-swas-instance
 */
export declare class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::SWAS::Instance";
    /**
     * @Attribute BusinessStatus: The business status of the instance.
     */
    readonly attrBusinessStatus: ros.IResolvable;
    /**
     * @Attribute ChargeType: The billing method of the instance.
     */
    readonly attrChargeType: ros.IResolvable;
    /**
     * @Attribute Combination: Indicates whether the instance is a combination instance.
     */
    readonly attrCombination: ros.IResolvable;
    /**
     * @Attribute CreationTime: The creation time of the instance.
     */
    readonly attrCreationTime: ros.IResolvable;
    /**
     * @Attribute DdosStatus: The anti-DDoS status of the instance.
     */
    readonly attrDdosStatus: ros.IResolvable;
    /**
     * @Attribute DisableReason: The reason why the instance is disabled.
     */
    readonly attrDisableReason: ros.IResolvable;
    /**
     * @Attribute Disks: The disks of the instance.
     */
    readonly attrDisks: ros.IResolvable;
    /**
     * @Attribute ExpiredTime: The expiration time of the instance.
     */
    readonly attrExpiredTime: ros.IResolvable;
    /**
     * @Attribute Image: The image information of the instance.
     */
    readonly attrImage: ros.IResolvable;
    /**
     * @Attribute ImageId: The ID of the image used by the instance.
     */
    readonly attrImageId: ros.IResolvable;
    /**
     * @Attribute InnerIpAddress: The private IP address of the instance.
     */
    readonly attrInnerIpAddress: ros.IResolvable;
    /**
     * @Attribute InstanceId: The ID of the instance.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * @Attribute InstanceName: The name of the instance.
     */
    readonly attrInstanceName: ros.IResolvable;
    /**
     * @Attribute NetworkAttributes: The network attributes of the instance.
     */
    readonly attrNetworkAttributes: ros.IResolvable;
    /**
     * @Attribute PlanId: The plan ID of the instance.
     */
    readonly attrPlanId: ros.IResolvable;
    /**
     * @Attribute PlanType: The plan type of the instance.
     */
    readonly attrPlanType: ros.IResolvable;
    /**
     * @Attribute PublicIpAddress: The public IP address of the instance.
     */
    readonly attrPublicIpAddress: ros.IResolvable;
    /**
     * @Attribute RegionId: The ID of the region where the instance is deployed.
     */
    readonly attrRegionId: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: The ID of the resource group to which the instance belongs.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * @Attribute ResourceSpec: The resource specification of the instance.
     */
    readonly attrResourceSpec: ros.IResolvable;
    /**
     * @Attribute Status: The status of the instance.
     */
    readonly attrStatus: ros.IResolvable;
    /**
     * @Attribute Tags: The tags of the instance.
     */
    readonly attrTags: ros.IResolvable;
    /**
     * @Attribute Uuid: The unique identifier of the instance.
     */
    readonly attrUuid: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceId: The ID of the instance.
     */
    instanceId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
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
/**
 * Properties for defining a `RosInstances`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-swas-instances
 */
export interface RosInstancesProps {
    /**
     * @Property instanceIds: The IDs of instances.
     */
    readonly instanceIds?: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property instanceName: The names of instances.
     */
    readonly instanceName?: string | ros.IResolvable;
    /**
     * @Property planType: The type of plan.
     */
    readonly planType?: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property status: The status of the instance.
     */
    readonly status?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::SWAS::Instances`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instances` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-swas-instances
 */
export declare class RosInstances extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::SWAS::Instances";
    /**
     * @Attribute InstanceIds: The list of instance IDs.
     */
    readonly attrInstanceIds: ros.IResolvable;
    /**
     * @Attribute Instances: The list of instances.
     */
    readonly attrInstances: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceIds: The IDs of instances.
     */
    instanceIds: Array<any | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property instanceName: The names of instances.
     */
    instanceName: string | ros.IResolvable | undefined;
    /**
     * @Property planType: The type of plan.
     */
    planType: string | ros.IResolvable | undefined;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property status: The status of the instance.
     */
    status: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstancesProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
