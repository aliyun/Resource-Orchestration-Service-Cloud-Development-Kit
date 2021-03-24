import * as ros from '@alicloud/ros-cdk-core';
import { RosAutoProvisioningGroup } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAutoProvisioningGroup as AutoProvisioningGroupProperty };

/**
 * Properties for defining a `ALIYUN::ECS::AutoProvisioningGroup`
 */
export interface AutoProvisioningGroupProps {

    /**
     * Property launchTemplateId: The ID of the instance launch template associated with the auto provisioning group.
     * You can call the DescribeLaunchTemplates operation to query available instance launch templates.
     * An auto provisioning group can be associated with only one instance launch template.
     * But you can configure multiple extended configurations for the launch template through
     * the LaunchTemplateConfig parameter.
     */
    readonly launchTemplateId: string;

    /**
     * Property totalTargetCapacity: The total target capacity of the auto provisioning group. The target capacity consists
     * of the following three parts:
     * The target capacity of pay-as-you-go instances specified by the PayAsYouGoTargetCapacity parameter
     * The target capacity of preemptible instances specified by the SpotTargetCapacity parameter
     * The supplemental capacity besides PayAsYouGoTargetCapacity and SpotTargetCapacity
     */
    readonly totalTargetCapacity: string;

    /**
     * Property autoProvisioningGroupName: The name of the auto provisioning group to be created. It must be 2 to 128 characters
     * in length. It must start with a letter but cannot start with http:// or https://.
     * It can contain letters, digits, colons (:), underscores (_), and hyphens (-).
     */
    readonly autoProvisioningGroupName?: string;

    /**
     * Property autoProvisioningGroupType: The type of the auto provisioning group. Valid values:
     * request: One-time delivery. After the auto provisioning group is started, it only attempts
     * to create an instance cluster once. If the cluster fails to be created, the group
     * does not try again.
     * maintain: The continuous delivery and maintain capacity type. After the auto provisioning group
     * is started, it continuously attempts to create and maintain the instance cluster.
     * The auto provisioning group compares the real-time and target capacity of the cluster.
     * If the cluster does not meet the target capacity, the group will create instances
     * until the cluster meets the target capacity.
     * Default value: maintain
     */
    readonly autoProvisioningGroupType?: string;

    /**
     * Property defaultTargetCapacityType: The type of supplemental instances. When the total value of PayAsYouGoTargetCapacity and SpotTargetCapacity is smaller than the value of TotalTargetCapacity, the auto provisioning group will create instances of the specified type to meet
     * the capacity requirements. Valid values:
     * PayAsYouGo: Pay-as-you-go instances.
     * Spot: Preemptible instances.
     * Default value: Spot
     */
    readonly defaultTargetCapacityType?: string;

    /**
     * Property description: The description of the auto provisioning group.
     */
    readonly description?: string;

    /**
     * Property excessCapacityTerminationPolicy: The shutdown policy for excess preemptible instances followed when the capacity of
     * the auto provisioning group exceeds the target capacity. Valid values:
     * no-termination: Excess preemptible instances are not shut down.
     * termination: Excess preemptible instances are to be shut down. The action to be performed on these
     * shutdown instances is specified by the SpotInstanceInterruptionBehavior parameter.
     * Default value: no-termination
     */
    readonly excessCapacityTerminationPolicy?: string;

    /**
     * Property launchTemplateConfig:
     */
    readonly launchTemplateConfig?: Array<RosAutoProvisioningGroup.LaunchTemplateConfigProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property launchTemplateVersion: The version of the instance launch template associated with the auto provisioning
     * group. You can call the DescribeLaunchTemplateVersions operation to query the versions of available instance launch templates.
     */
    readonly launchTemplateVersion?: string;

    /**
     * Property maxSpotPrice: The global maximum price for preemptible instances in the auto provisioning group.
     * If both the MaxSpotPrice and LaunchTemplateConfig.N.MaxPrice parameters are specified, the maximum price is the lower value of the two.
     */
    readonly maxSpotPrice?: number;

    /**
     * Property payAsYouGoAllocationStrategy: The scale-out policy for pay-as-you-go instances. Valid values:
     * lowest-price: The cost optimization policy the auto provisioning group follows to select instance
     * types of the lowest cost to create instances.
     * prioritized: The priority-based policy the auto provisioning group follows to create instances.
     * The priority of an instance type is specified by the LaunchTemplateConfig.N.Priority parameter.
     * Default value: lowest-price
     */
    readonly payAsYouGoAllocationStrategy?: string;

    /**
     * Property payAsYouGoTargetCapacity: The target capacity of pay-as-you-go instances in the auto provisioning group.
     */
    readonly payAsYouGoTargetCapacity?: string;

    /**
     * Property spotAllocationStrategy: The scale-out policy for preemptible instances. Valid values:
     * lowest-price: The cost optimization policy the auto provisioning group follows to select instance
     * types of the lowest cost to create instances.
     * diversified: The distribution balancing policy the auto provisioning group follows to evenly create
     * instances across zones specified in multiple extended template configurations.
     * Default value: lowest-price
     */
    readonly spotAllocationStrategy?: string;

    /**
     * Property spotInstanceInterruptionBehavior: The default behavior after preemptible instances are shut down. Value values:
     * stop: stops preemptible instances.
     * terminate: releases preemptible instances.
     * Default value: stop
     */
    readonly spotInstanceInterruptionBehavior?: string;

    /**
     * Property spotInstancePoolsToUseCount: This parameter takes effect when the SpotAllocationStrategy parameter is set to lowest-price. The auto provisioning group selects instance types of the lowest cost to create
     * instances.
     */
    readonly spotInstancePoolsToUseCount?: number;

    /**
     * Property spotTargetCapacity: The target capacity of preemptible instances in the auto provisioning group.
     */
    readonly spotTargetCapacity?: string;

    /**
     * Property terminateInstances: Specifies whether to release instances of the auto provisioning group. Valid values:
     * true
     * false
     * Default: false
     */
    readonly terminateInstances?: boolean | ros.IResolvable;

    /**
     * Property terminateInstancesWithExpiration: The shutdown policy for preemptible instances when the auto provisioning group expires.
     * Valid values:
     * true: shuts down preemptible instances. The action to be performed on these shutdown instances
     * is specified by the SpotInstanceInterruptionBehavior parameter.
     * false: does not shut down preemptible instances.
     * Default: false
     */
    readonly terminateInstancesWithExpiration?: boolean | ros.IResolvable;

    /**
     * Property validFrom: The time when the auto provisioning group is started. The period of time between this
     * point in time and the point in time specified by the ValidUntil parameter is the effective time period of the auto provisioning group.
     * By default, an auto provisioning group is immediately started after creation.
     */
    readonly validFrom?: string;

    /**
     * Property validUntil: The time when the auto provisioning group expires. The period of time between this
     * point in time and the point in time specified by the ValidFrom parameter is the effective time period of the auto provisioning group.
     * By default, an auto provisioning group never expires.
     */
    readonly validUntil?: string;
}

/**
 * A ROS resource type:  `ALIYUN::ECS::AutoProvisioningGroup`
 */
export class AutoProvisioningGroup extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute AutoProvisioningGroupId: The ID of the auto provisioning group.
     */
    public readonly attrAutoProvisioningGroupId: any;

    /**
     * Create a new `ALIYUN::ECS::AutoProvisioningGroup`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AutoProvisioningGroupProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosAutoProvisioningGroup = new RosAutoProvisioningGroup(this, id,  {
            totalTargetCapacity: props.totalTargetCapacity,
            autoProvisioningGroupName: props.autoProvisioningGroupName,
            description: props.description,
            excessCapacityTerminationPolicy: props.excessCapacityTerminationPolicy,
            launchTemplateId: props.launchTemplateId,
            launchTemplateConfig: props.launchTemplateConfig,
            payAsYouGoTargetCapacity: props.payAsYouGoTargetCapacity,
            spotInstanceInterruptionBehavior: props.spotInstanceInterruptionBehavior,
            autoProvisioningGroupType: props.autoProvisioningGroupType,
            validUntil: props.validUntil,
            terminateInstancesWithExpiration: props.terminateInstancesWithExpiration,
            defaultTargetCapacityType: props.defaultTargetCapacityType,
            spotInstancePoolsToUseCount: props.spotInstancePoolsToUseCount,
            spotTargetCapacity: props.spotTargetCapacity,
            launchTemplateVersion: props.launchTemplateVersion,
            validFrom: props.validFrom,
            maxSpotPrice: props.maxSpotPrice,
            spotAllocationStrategy: props.spotAllocationStrategy,
            terminateInstances: props.terminateInstances,
            payAsYouGoAllocationStrategy: props.payAsYouGoAllocationStrategy,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAutoProvisioningGroup;
        this.attrAutoProvisioningGroupId = rosAutoProvisioningGroup.attrAutoProvisioningGroupId;
    }
}
