import * as ros from '@alicloud/ros-cdk-core';
import { RosAutoProvisioningGroup } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAutoProvisioningGroup as AutoProvisioningGroupProperty };

/**
 * Properties for defining a `AutoProvisioningGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-autoprovisioninggroup
 */
export interface AutoProvisioningGroupProps {

    /**
     * Property totalTargetCapacity: The total target capacity of the auto provisioning group. Valid values: Positive
     * integers.
     * The total capacity must be greater than or equal to the sum of
     * `PayAsYouGoTargetCapacity` (target capacity for pay-as-you-go instances) and
     * `SpotTargetCapacity` (target capacity for spot instances).
     */
    readonly totalTargetCapacity: string | ros.IResolvable;

    /**
     * Property autoProvisioningGroupName: The name of the auto provisioning group to be created. It must be 2 to 128 characters
     * in length. It must start with a letter but cannot start with http:\/\/ or https:\/\/.
     * It can contain letters, digits, colons (:), underscores (_), and hyphens (-).
     */
    readonly autoProvisioningGroupName?: string | ros.IResolvable;

    /**
     * Property autoProvisioningGroupType: The delivery type of the auto provisioning group. Valid values:
     * - request: One-time asynchronous delivery. The group delivers the instance
     * cluster only at startup. If scheduling fails, no retry occurs.
     * - instant: One-time synchronous delivery. The group creates instances
     * synchronously at startup and returns the list of successfully created instances
     * and reasons for failures in the response.
     * - maintain: Continuous provisioning. The group attempts to deliver the instance
     * cluster at startup and monitors real-time capacity. If the target capacity is not
     * met, it continues creating ECS instances.
     * Default value: maintain.
     */
    readonly autoProvisioningGroupType?: string | ros.IResolvable;

    /**
     * Property checkExecutionStatus: Whether check execution status. If set true, ROS will check the state of AutoProvisioningGroup to be fulfilled. Otherwise ROS will regard AutoProvisioningGroup create failed.
     */
    readonly checkExecutionStatus?: boolean | ros.IResolvable;

    /**
     * Property dataDiskConfig: List of instance data disk information.
     */
    readonly dataDiskConfig?: Array<RosAutoProvisioningGroup.DataDiskConfigProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property defaultTargetCapacityType: Specifies the billing method for the capacity difference when the sum of
     * `PayAsYouGoTargetCapacity` and `SpotTargetCapacity` is less than
     * `TotalTargetCapacity`. Valid values:
     * - PayAsYouGo: Pay-as-you-go instances.
     * - Spot: Spot instances.
     * Default value: Spot.
     */
    readonly defaultTargetCapacityType?: string | ros.IResolvable;

    /**
     * Property description: The description of the auto provisioning group.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property excessCapacityTerminationPolicy: Specifies whether to release instances when the real-time capacity of the auto
     * provisioning group exceeds the target capacity and scale-in is triggered. Valid
     * values:
     * - termination: Releases scaled-in instances.
     * - no-termination: Only removes scaled-in instances from the auto provisioning
     * group.
     * Default value: no-termination.
     */
    readonly excessCapacityTerminationPolicy?: string | ros.IResolvable;

    /**
     * Property launchConfiguration:
     */
    readonly launchConfiguration?: RosAutoProvisioningGroup.LaunchConfigurationProperty | ros.IResolvable;

    /**
     * Property launchTemplateConfig:
     */
    readonly launchTemplateConfig?: Array<RosAutoProvisioningGroup.LaunchTemplateConfigProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property launchTemplateId: The ID of the instance launch template associated with the auto provisioning group.
     * You can call the DescribeLaunchTemplates operation to query available instance launch templates.
     * An auto provisioning group can be associated with only one instance launch template.
     * But you can configure multiple extended configurations for the launch template through
     * the LaunchTemplateConfig parameter.
     */
    readonly launchTemplateId?: string | ros.IResolvable;

    /**
     * Property launchTemplateVersion: The version of the launch template associated with the auto provisioning group.
     * Call [DescribeLaunchTemplateVersions]() to query available launch template
     * versions.
     * Default value: The default version of the launch template.
     */
    readonly launchTemplateVersion?: string | ros.IResolvable;

    /**
     * Property maxSpotPrice: The global maximum price for preemptible instances in the auto provisioning group.
     * If both the MaxSpotPrice and LaunchTemplateConfig.N.MaxPrice parameters are specified, the maximum price is the lower value of the two.
     */
    readonly maxSpotPrice?: number | ros.IResolvable;

    /**
     * Property minTargetCapacity: The target minimum capacity of the elastic supply group. Value range: Positive integer.
     * Once you have set this parameter, note that:
     * Only create one-time synchronous delivery type elastic supply group (AutoProvisioningGroupType = instant), the parameters to take effect.
     * If the inventory of instances in the current domain is less than this value, the call to the interface will fail and no instance will be created.
     * If the instance inventory in the current domain is greater than the parameter value, the instance is created normally according to the other parameter values that have been set.
     */
    readonly minTargetCapacity?: string | ros.IResolvable;

    /**
     * Property payAsYouGoAllocationStrategy: The scale-out policy for pay-as-you-go instances. Valid values:
     * lowest-price: The cost optimization policy the auto provisioning group follows to select instance
     * types of the lowest cost to create instances.
     * prioritized: The priority-based policy the auto provisioning group follows to create instances.
     * The priority of an instance type is specified by the LaunchTemplateConfig.N.Priority parameter.
     * Default value: lowest-price
     */
    readonly payAsYouGoAllocationStrategy?: string | ros.IResolvable;

    /**
     * Property payAsYouGoTargetCapacity: The target capacity for pay-as-you-go instances in the auto provisioning group.
     * Valid values: Integers less than or equal to the value of `TotalTargetCapacity`.
     */
    readonly payAsYouGoTargetCapacity?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: The resource group ID.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property resourcePoolOptions: Resource pooling policy to use when creating an instance. Once you have set this parameter, note that:
     * This parameter only applies if a pay-as-you-go instance is created.
     * Only create one-time synchronous delivery type elastic supply group (AutoProvisioningGroupType = instant), the parameters to take effect.
     */
    readonly resourcePoolOptions?: RosAutoProvisioningGroup.ResourcePoolOptionsProperty | ros.IResolvable;

    /**
     * Property spotAllocationStrategy: The strategy for creating spot instances. Valid values:
     * - lowest-price: Cost optimization strategy. Selects the instance type with the
     * lowest price.
     * - diversified: Balanced zone distribution strategy. Creates instances across the
     * zones specified in the launch template configurations and distributes them
     * evenly.
     * - capacity-optimized: Capacity optimization strategy. Selects the optimal
     * instance type and zone based on inventory availability.
     * Default value: lowest-price.
     */
    readonly spotAllocationStrategy?: string | ros.IResolvable;

    /**
     * Property spotInstanceInterruptionBehavior: The behavior when a spot instance is interrupted. Valid values:
     * - stop: Stops the instance.
     * - terminate: Releases the instance.
     * Default value: terminate.
     */
    readonly spotInstanceInterruptionBehavior?: string | ros.IResolvable;

    /**
     * Property spotInstancePoolsToUseCount: Takes effect only when `SpotAllocationStrategy` is set to `lowest-price`.
     * Specifies the number of lowest-priced instance types from which the auto
     * provisioning group creates instances.
     * Valid values: Less than the value of N in `LaunchTemplateConfig.N`.
     */
    readonly spotInstancePoolsToUseCount?: number | ros.IResolvable;

    /**
     * Property spotTargetCapacity: The target capacity for spot instances in the auto provisioning group. Valid
     * values: Integers less than or equal to the value of `TotalTargetCapacity`.
     */
    readonly spotTargetCapacity?: string | ros.IResolvable;

    /**
     * Property systemDiskConfig: List of instance system disk information.
     */
    readonly systemDiskConfig?: Array<RosAutoProvisioningGroup.SystemDiskConfigProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property terminateInstances: Specifies whether to release instances in the group when you delete the auto
     * provisioning group. Valid values:
     * - true: Releases instances in the group.
     * - false: Retains instances in the group.
     * Default value: false.
     */
    readonly terminateInstances?: boolean | ros.IResolvable;

    /**
     * Property terminateInstancesWithExpiration: Specifies whether to release instances in the group when the auto provisioning
     * group expires. Valid values:
     * - true: Releases instances in the group.
     * - false: Only removes instances from the auto provisioning group.
     * Default value: false.
     */
    readonly terminateInstancesWithExpiration?: boolean | ros.IResolvable;

    /**
     * Property validFrom: The start time of the auto provisioning group. Used together with `ValidUntil` to
     * define the validity period.
     * Specify the time in [ISO 8601]() format using UTC+0 time. Format:
     * yyyy-MM-ddTHH:mm:ssZ.
     * Default value: The timestamp when the API call takes effect immediately.
     */
    readonly validFrom?: string | ros.IResolvable;

    /**
     * Property validUntil: The expiration time of the auto provisioning group. Used together with
     * `ValidFrom` to define the validity period.
     * Specify the time in [ISO 8601]() format using UTC+0 time. Format:
     * yyyy-MM-ddTHH:mm:ssZ.
     * Default value: 2099-12-31T23:59:59Z.
     */
    readonly validUntil?: string | ros.IResolvable;
}

/**
 * Represents a `AutoProvisioningGroup`.
 */
export interface IAutoProvisioningGroup extends ros.IResource {
    readonly props: AutoProvisioningGroupProps;

    /**
     * Attribute AutoProvisioningGroupId: The ID of the auto provisioning group.
     */
    readonly attrAutoProvisioningGroupId: ros.IResolvable | string;

    /**
     * Attribute AutoProvisioningGroupName: The name of the auto provisioning group.
     */
    readonly attrAutoProvisioningGroupName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ECS::AutoProvisioningGroup`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAutoProvisioningGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-autoprovisioninggroup
 */
export class AutoProvisioningGroup extends ros.Resource implements IAutoProvisioningGroup {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: AutoProvisioningGroupProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AutoProvisioningGroupId: The ID of the auto provisioning group.
     */
    public readonly attrAutoProvisioningGroupId: ros.IResolvable | string;

    /**
     * Attribute AutoProvisioningGroupName: The name of the auto provisioning group.
     */
    public readonly attrAutoProvisioningGroupName: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AutoProvisioningGroupProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosAutoProvisioningGroup = new RosAutoProvisioningGroup(this, id,  {
            description: props.description,
            resourceGroupId: props.resourceGroupId,
            checkExecutionStatus: props.checkExecutionStatus,
            autoProvisioningGroupType: props.autoProvisioningGroupType,
            defaultTargetCapacityType: props.defaultTargetCapacityType,
            launchConfiguration: props.launchConfiguration,
            spotInstancePoolsToUseCount: props.spotInstancePoolsToUseCount,
            validFrom: props.validFrom,
            maxSpotPrice: props.maxSpotPrice,
            spotAllocationStrategy: props.spotAllocationStrategy,
            terminateInstances: props.terminateInstances,
            payAsYouGoAllocationStrategy: props.payAsYouGoAllocationStrategy,
            totalTargetCapacity: props.totalTargetCapacity,
            resourcePoolOptions: props.resourcePoolOptions,
            autoProvisioningGroupName: props.autoProvisioningGroupName,
            excessCapacityTerminationPolicy: props.excessCapacityTerminationPolicy,
            dataDiskConfig: props.dataDiskConfig,
            launchTemplateId: props.launchTemplateId,
            launchTemplateConfig: props.launchTemplateConfig,
            payAsYouGoTargetCapacity: props.payAsYouGoTargetCapacity,
            spotInstanceInterruptionBehavior: props.spotInstanceInterruptionBehavior,
            validUntil: props.validUntil,
            terminateInstancesWithExpiration: props.terminateInstancesWithExpiration,
            spotTargetCapacity: props.spotTargetCapacity,
            minTargetCapacity: props.minTargetCapacity,
            launchTemplateVersion: props.launchTemplateVersion,
            systemDiskConfig: props.systemDiskConfig,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAutoProvisioningGroup;
        this.attrAutoProvisioningGroupId = rosAutoProvisioningGroup.attrAutoProvisioningGroupId;
        this.attrAutoProvisioningGroupName = rosAutoProvisioningGroup.attrAutoProvisioningGroupName;
    }
}
