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
     * Property multiAzPolicy: ECS scaling strategy for multi availability zone. Allow value:
     * 1. PRIORITY: scaling the capacity according to the virtual switch (VSwitchIds.N) you define. ECS instances are automatically created using the next priority virtual switch when the higher priority virtual switch cannot be created in the available zone.
     * 2. BALANCE: evenly allocate ECS instances between the multiple available zone specified by the scaling group.
     */
    readonly multiAzPolicy?: string | ros.IResolvable;

    /**
     * Property notificationConfigurations: When a scaling event occurs in a scaling group, ESS will send a notification to Cloud Monitor or MNS.
     */
    readonly notificationConfigurations?: Array<RosScalingGroup.NotificationConfigurationsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property protectedInstances: ECS instances of protected mode in the scaling group.
     */
    readonly protectedInstances?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * Property removalPolicys: Policy for removing ECS instances from the scaling group.
     * Optional values:
     * OldestInstance: removes the first ECS instance attached to the scaling group.
     * NewestInstance: removes the first ECS instance attached to the scaling group.
     * OldestScalingConfiguration: removes the ECS instance with the oldest scaling configuration.
     * Default values: OldestScalingConfiguration and OldestInstance. You can enter up to two removal policies.
     */
    readonly removalPolicys?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * Property scalingGroupName: Name shown for the scaling group, which must contain 2-40 characters (English or Chinese). The name must begin with a number, an upper/lower-case letter or a Chinese character and may contain numbers, "_", "-" or ".". The account name is unique in the same region.
     * If this parameter is not specified, the default value is ScalingGroupId.
     */
    readonly scalingGroupName?: string | ros.IResolvable;

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
            vSwitchIds: props.vSwitchIds,
            instanceId: props.instanceId,
            notificationConfigurations: props.notificationConfigurations,
            vSwitchId: props.vSwitchId,
            loadBalancerIds: props.loadBalancerIds,
            desiredCapacity: props.desiredCapacity,
            groupDeletionProtection: props.groupDeletionProtection === undefined || props.groupDeletionProtection === null ? false : props.groupDeletionProtection,
            launchTemplateId: props.launchTemplateId,
            maxSize: props.maxSize,
            scalingGroupName: props.scalingGroupName,
            minSize: props.minSize,
            defaultCooldown: props.defaultCooldown,
            standbyInstances: props.standbyInstances,
            launchTemplateVersion: props.launchTemplateVersion,
            multiAzPolicy: props.multiAzPolicy,
            protectedInstances: props.protectedInstances,
            removalPolicys: props.removalPolicys,
            dbInstanceIds: props.dbInstanceIds,
            tags: props.tags,
            healthCheckType: props.healthCheckType,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosScalingGroup;
        this.attrScalingGroupId = rosScalingGroup.attrScalingGroupId;
        this.attrScalingGroupName = rosScalingGroup.attrScalingGroupName;
    }
}
