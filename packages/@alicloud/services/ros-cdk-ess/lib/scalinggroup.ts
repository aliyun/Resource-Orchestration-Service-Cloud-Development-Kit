import * as ros from '@alicloud/ros-cdk-core';
import { RosScalingGroup } from './ess.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosScalingGroup as ScalingGroupProperty };

/**
 * Properties for defining a `ALIYUN::ESS::ScalingGroup`
 */
export interface ScalingGroupProps {

    /**
     * Property maxSize: Maximum number of ECS instances in the scaling group. Value range: [0, 1000].
     */
    readonly maxSize: number | ros.IResolvable;

    /**
     * Property minSize: Minimum number of ECS instances in the scaling group. Value range: [0, 1000].
     */
    readonly minSize: number | ros.IResolvable;

    /**
     * Property allocationStrategy: The allocation policy of instances. Auto Scaling selects instance types based on the allocation policy to create the required number of instances. The policy can be applied to pay-as-you-go instances and preemptible instances. This parameter takes effect only if you set MultiAZPolicy to COMPOSABLE. Valid values:
     * - priority: Auto Scaling selects instance types based on the specified order to create the required number of instances.
     * - lowestPrice: Auto Scaling selects instance types that have the lowest unit price of vCPUs to create the required number of instances.
     * Default value: priority.
     */
    readonly allocationStrategy?: string | ros.IResolvable;

    /**
     * Property azBalance: Specifies whether to evenly distribute instances in the scaling group across multiple zones. This parameter takes effect only if you set MultiAZPolicy to COMPOSABLE. Valid values:
     * - true
     * - false
     * Default value: false.
     */
    readonly azBalance?: boolean | ros.IResolvable;

    /**
     * Property compensateWithOnDemand: Specifies whether to automatically create pay-as-you-go instances to meet the requirements on the number of instances when the expected capacity of preemptible instances cannot be fulfilled due to reasons such as high prices or insufficient resources. This parameter takes effect only when MultiAZPolicy is set to COST_OPTIMIZED.
     * Default value: true.
     */
    readonly compensateWithOnDemand?: boolean | ros.IResolvable;

    /**
     * Property containerGroupId: The ID of the elastic container instance.
     */
    readonly containerGroupId?: string | ros.IResolvable;

    /**
     * Property customPolicyArn: The Alibaba Cloud Resource Name (ARN) of the custom scale-in policy (Function). This parameter takes effect only if you specify CustomPolicy as the value of first item of RemovalPolicys.
     */
    readonly customPolicyArn?: string | ros.IResolvable;

    /**
     * Property dbInstanceIds: ID list of an RDS instance. A Json Array with format: [ "rm-id0", "rm-id1", ... "rm-idz" ], support up to 100 RDS instance.
     */
    readonly dbInstanceIds?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * Property defaultCooldown: Default cool-down time (in seconds) of the scaling group. Value range: [0, 86400].
     * The default value is 300s.
     */
    readonly defaultCooldown?: number | ros.IResolvable;

    /**
     * Property desiredCapacity: The expected number of ECS instances in a scaling group. The scaling group automatically keeps the number of ECS instances as expected. The number of ECS instances cannot be greater than the value of MaxSize and cannot be less than the value of MinSize.
     */
    readonly desiredCapacity?: number | ros.IResolvable;

    /**
     * Property groupDeletionProtection: Whether to enable deletion protection for scaling group.
     * Default to False.
     */
    readonly groupDeletionProtection?: boolean | ros.IResolvable;

    /**
     * Property groupType: The type of instances that are managed by the scaling group. Valid values:
     * ECS
     * ECI
     * Default value: ECS.
     */
    readonly groupType?: string | ros.IResolvable;

    /**
     * Property healthCheckType: The health check type. Allow values is "ECS" and "NONE", default to "ECS".
     */
    readonly healthCheckType?: string | ros.IResolvable;

    /**
     * Property instanceId: The ID of the ECS instance from which the scaling group obtains configuration information of the specified instance.
     */
    readonly instanceId?: string | ros.IResolvable;

    /**
     * Property launchTemplateId: The ID of the instance launch template from which the scaling group obtains launch configurations.
     */
    readonly launchTemplateId?: string | ros.IResolvable;

    /**
     * Property launchTemplateOverrides: You can specify up to 10 overrides.
     * Note: This parameter takes effect only if you specify LaunchTemplateId.
     */
    readonly launchTemplateOverrides?: Array<RosScalingGroup.LaunchTemplateOverridesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property launchTemplateVersion: The version of the instance launch template. Valid values:
     * A fixed template version numbe.
     * Default: The default template version is always used.
     * Latest: The latest template version is always used.
     */
    readonly launchTemplateVersion?: string | ros.IResolvable;

    /**
     * Property loadBalancerIds: ID list of a Server Load Balancer instance. A Json Array with format: [ "lb-id0", "lb-id1", ... "lb-idz" ], support up to 100 Load Balancer instance.
     */
    readonly loadBalancerIds?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * Property maxInstanceLifetime: The maximum life span of an ECS instance in the scaling group. Unit: seconds.
     * Valid values: 86400 to the value of Integer.maxValue.
     * Default value: null.
     * Note: This parameter is unavailable for scaling groups of the ECI type or scaling groups whose ScalingPolicy is set to recycle.
     */
    readonly maxInstanceLifetime?: number | ros.IResolvable;

    /**
     * Property multiAzPolicy: ECS scaling strategy for multi availability zone. Allow value:
     * 1. PRIORITY: scaling the capacity according to the virtual switch (VSwitchIds.N) you define. ECS instances are automatically created using the next priority virtual switch when the higher priority virtual switch cannot be created in the available zone.
     * 2. BALANCE: evenly allocate ECS instances between the multiple available zone specified by the scaling group.
     * 3. COST_OPTIMIZED: During a scale-out activity, Auto Scaling attempts to create ECS instances that have vCPUs provided at the lowest price. During a scale-in activity, Auto Scaling attempts to remove ECS instances that have vCPUs provided at the highest price. Preemptible instances are preferentially created when preemptible instance types are specified in the active scaling configuration. You can configure the CompensateWithOnDemand parameter to specify whether to automatically create pay-as-you-go instances when preemptible instances cannot be created due to insufficient resources.
     * Note COST_OPTIMIZED is valid when multiple instance types are specified or at least one preemptible instance type is specified.
     * 4. COMPOSABLE: You can flexibly combine the preceding policies based on your business requirements.
     */
    readonly multiAzPolicy?: string | ros.IResolvable;

    /**
     * Property notificationConfigurations: When a scaling event occurs in a scaling group, ESS will send a notification to Cloud Monitor or MNS.
     */
    readonly notificationConfigurations?: Array<RosScalingGroup.NotificationConfigurationsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property onDemandBaseCapacity: The minimum number of pay-as-you-go instances required in the scaling group. Valid values: 0 to 1000. If the number of pay-as-you-go instances is less than the value of this parameter, Auto Scaling preferentially creates pay-as-you-go instances.
     * If you set MultiAZPolicy to COMPOSABLE Policy, the default value of this parameter is 0.
     */
    readonly onDemandBaseCapacity?: number | ros.IResolvable;

    /**
     * Property onDemandPercentageAboveBaseCapacity: The percentage of pay-as-you-go instances that can be created when instances are added to the scaling group. This parameter takes effect when the number of pay-as-you-go instances reaches the value for the OnDemandBaseCapacity parameter. Valid values: 0 to 100.
     * If you set MultiAZPolicy to COMPOSABLE, the default value of this parameter is 100.
     */
    readonly onDemandPercentageAboveBaseCapacity?: number | ros.IResolvable;

    /**
     * Property protectedInstances: ECS instances of protected mode in the scaling group.
     */
    readonly protectedInstances?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * Property removalPolicys: Policy for removing ECS instances from the scaling group.
     * Optional values:
     * - OldestInstance: removes the first ECS instance attached to the scaling group.
     * - NewestInstance: removes the first ECS instance attached to the scaling group.
     * - OldestScalingConfiguration: removes the ECS instance with the oldest scaling configuration.
     * - CustomPolicy: removes ECS instances based on the custom scale-in policy (Function).
     * You can enter up to three removal policies.
     * You cannot set any item of RemovalPolicys to the same value.
     * The scaling configuration source specified by the OldestScalingConfiguration setting can be a scaling configuration or a launch template. You can specify CustomPolicy only as the value of first item of RemovalPolicys. If you set first item of RemovalPolicys to CustomPolicy, you must also specify CustomPolicyARN.
     * Note: The removal of ECS instances from a scaling group is also affected by the value of MultiAZPolicy.
     */
    readonly removalPolicys?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * Property scalingGroupName: Name shown for the scaling group, which must contain 2-40 characters (English or Chinese). The name must begin with a number, an upper/lower-case letter or a Chinese character and may contain numbers, "_", "-" or ".". The account name is unique in the same region.
     * If this parameter is not specified, the default value is ScalingGroupId.
     */
    readonly scalingGroupName?: string | ros.IResolvable;

    /**
     * Property scalingPolicy: The reclaim mode of the scaling group. Valid values:
     * recycle
     * release
     * ScalingPolicy specifies the reclaim modes of scaling groups, but the policy that is used to remove ECS instances from scaling groups is determined by the RemovePolicy parameter of the RemoveInstances operation.
     */
    readonly scalingPolicy?: string | ros.IResolvable;

    /**
     * Property spotAllocationStrategy: The allocation policy of preemptible instances. You can use this parameter to individually specify the allocation policy of preemptible instances. This parameter takes effect only if you set MultiAZPolicy to COMPOSABLE. Valid values:
     * - priority: Auto Scaling selects instance types based on the specified order to create the required number of preemptible instances.
     * - lowestPrice: Auto Scaling selects instance types that have the lowest unit price of vCPUs to create the required number of preemptible instances.
     * Default value: priority.
     */
    readonly spotAllocationStrategy?: string | ros.IResolvable;

    /**
     * Property spotInstancePools: The number of instance types that are available. The system creates preemptible instances of multiple instance types that are available at the lowest cost in the scaling group. Valid values: 1 to 10.
     * If you set MultiAZPolicy to COMPOSABLE, the default value of this parameter is 2.
     */
    readonly spotInstancePools?: number | ros.IResolvable;

    /**
     * Property spotInstanceRemedy: Specifies whether to supplement preemptible instances. If this parameter is set to true, Auto Scaling attempts to create an instance to replace a preemptible instance when Auto Scaling receives a system message which indicates that the preemptible instance is to be reclaimed.
     */
    readonly spotInstanceRemedy?: boolean | ros.IResolvable;

    /**
     * Property standbyInstances: ECS instances of standby mode in the scaling group.
     */
    readonly standbyInstances?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosScalingGroup.TagsProperty[];

    /**
     * Property vSwitchId: If you create a VPC scaling group, you must specify the ID of a VSwitch.
     */
    readonly vSwitchId?: string | ros.IResolvable;

    /**
     * Property vSwitchIds: Parameter VSwitchIds.N is used to create instance in multiple zones. Parameter VSwitchIds.N has a priority over parameter VSwitchId.
     * The valid range of N is [1, 8], and you can specify at most 5 VSwitches in a VPC.
     * The priority of VSwitches descends from 1 to 8, and 1 indicates the highest priority.
     * When you fail to create an instance in the zone to which a specified VSwitch belongs, another VSwitch with less priority replaces the specified one automatically.
     */
    readonly vSwitchIds?: Array<any | ros.IResolvable> | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::ESS::ScalingGroup`
 */
export class ScalingGroup extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute ScalingGroupId: Scaling group Id
     */
    public readonly attrScalingGroupId: ros.IResolvable;

    /**
     * Attribute ScalingGroupName: Scaling group name
     */
    public readonly attrScalingGroupName: ros.IResolvable;

    /**
     * Create a new `ALIYUN::ESS::ScalingGroup`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ScalingGroupProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosScalingGroup = new RosScalingGroup(this, id,  {
            spotInstanceRemedy: props.spotInstanceRemedy,
            compensateWithOnDemand: props.compensateWithOnDemand,
            notificationConfigurations: props.notificationConfigurations,
            onDemandPercentageAboveBaseCapacity: props.onDemandPercentageAboveBaseCapacity,
            desiredCapacity: props.desiredCapacity,
            allocationStrategy: props.allocationStrategy,
            onDemandBaseCapacity: props.onDemandBaseCapacity,
            standbyInstances: props.standbyInstances,
            launchTemplateOverrides: props.launchTemplateOverrides,
            removalPolicys: props.removalPolicys,
            spotAllocationStrategy: props.spotAllocationStrategy,
            tags: props.tags,
            scalingPolicy: props.scalingPolicy,
            vSwitchIds: props.vSwitchIds,
            instanceId: props.instanceId,
            vSwitchId: props.vSwitchId,
            loadBalancerIds: props.loadBalancerIds,
            spotInstancePools: props.spotInstancePools,
            groupDeletionProtection: props.groupDeletionProtection === undefined || props.groupDeletionProtection === null ? false : props.groupDeletionProtection,
            launchTemplateId: props.launchTemplateId,
            customPolicyArn: props.customPolicyArn,
            maxSize: props.maxSize,
            scalingGroupName: props.scalingGroupName,
            minSize: props.minSize,
            defaultCooldown: props.defaultCooldown,
            azBalance: props.azBalance,
            groupType: props.groupType,
            launchTemplateVersion: props.launchTemplateVersion,
            multiAzPolicy: props.multiAzPolicy,
            protectedInstances: props.protectedInstances,
            containerGroupId: props.containerGroupId,
            dbInstanceIds: props.dbInstanceIds,
            healthCheckType: props.healthCheckType,
            maxInstanceLifetime: props.maxInstanceLifetime,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosScalingGroup;
        this.attrScalingGroupId = rosScalingGroup.attrScalingGroupId;
        this.attrScalingGroupName = rosScalingGroup.attrScalingGroupName;
    }
}
