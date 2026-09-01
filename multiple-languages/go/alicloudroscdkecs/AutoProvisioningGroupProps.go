package alicloudroscdkecs


// Properties for defining a `AutoProvisioningGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-autoprovisioninggroup
type AutoProvisioningGroupProps struct {
	// Property totalTargetCapacity: The total target capacity of the auto provisioning group.
	//
	// Valid values: Positive
	// integers.
	// The total capacity must be greater than or equal to the sum of
	// `PayAsYouGoTargetCapacity` (target capacity for pay-as-you-go instances) and
	// `SpotTargetCapacity` (target capacity for spot instances).
	TotalTargetCapacity interface{} `field:"required" json:"totalTargetCapacity" yaml:"totalTargetCapacity"`
	// Property autoProvisioningGroupName: The name of the auto provisioning group to be created.
	//
	// It must be 2 to 128 characters
	// in length. It must start with a letter but cannot start with http:\/\/ or https:\/\/.
	// It can contain letters, digits, colons (:), underscores (_), and hyphens (-).
	AutoProvisioningGroupName interface{} `field:"optional" json:"autoProvisioningGroupName" yaml:"autoProvisioningGroupName"`
	// Property autoProvisioningGroupType: The delivery type of the auto provisioning group.
	//
	// Valid values:
	// - request: One-time asynchronous delivery. The group delivers the instance
	// cluster only at startup. If scheduling fails, no retry occurs.
	// - instant: One-time synchronous delivery. The group creates instances
	// synchronously at startup and returns the list of successfully created instances
	// and reasons for failures in the response.
	// - maintain: Continuous provisioning. The group attempts to deliver the instance
	// cluster at startup and monitors real-time capacity. If the target capacity is not
	// met, it continues creating ECS instances.
	// Default value: maintain.
	AutoProvisioningGroupType interface{} `field:"optional" json:"autoProvisioningGroupType" yaml:"autoProvisioningGroupType"`
	// Property checkExecutionStatus: Whether check execution status.
	//
	// If set true, ROS will check the state of AutoProvisioningGroup to be fulfilled. Otherwise ROS will regard AutoProvisioningGroup create failed.
	CheckExecutionStatus interface{} `field:"optional" json:"checkExecutionStatus" yaml:"checkExecutionStatus"`
	// Property dataDiskConfig: List of instance data disk information.
	DataDiskConfig interface{} `field:"optional" json:"dataDiskConfig" yaml:"dataDiskConfig"`
	// Property defaultTargetCapacityType: Specifies the billing method for the capacity difference when the sum of `PayAsYouGoTargetCapacity` and `SpotTargetCapacity` is less than `TotalTargetCapacity`.
	//
	// Valid values:
	// - PayAsYouGo: Pay-as-you-go instances.
	// - Spot: Spot instances.
	// Default value: Spot.
	DefaultTargetCapacityType interface{} `field:"optional" json:"defaultTargetCapacityType" yaml:"defaultTargetCapacityType"`
	// Property description: The description of the auto provisioning group.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property excessCapacityTerminationPolicy: Specifies whether to release instances when the real-time capacity of the auto provisioning group exceeds the target capacity and scale-in is triggered.
	//
	// Valid
	// values:
	// - termination: Releases scaled-in instances.
	// - no-termination: Only removes scaled-in instances from the auto provisioning
	// group.
	// Default value: no-termination.
	ExcessCapacityTerminationPolicy interface{} `field:"optional" json:"excessCapacityTerminationPolicy" yaml:"excessCapacityTerminationPolicy"`
	// Property launchConfiguration:.
	LaunchConfiguration interface{} `field:"optional" json:"launchConfiguration" yaml:"launchConfiguration"`
	// Property launchTemplateConfig:.
	LaunchTemplateConfig interface{} `field:"optional" json:"launchTemplateConfig" yaml:"launchTemplateConfig"`
	// Property launchTemplateId: The ID of the instance launch template associated with the auto provisioning group.
	//
	// You can call the DescribeLaunchTemplates operation to query available instance launch templates.
	// An auto provisioning group can be associated with only one instance launch template.
	// But you can configure multiple extended configurations for the launch template through
	// the LaunchTemplateConfig parameter.
	LaunchTemplateId interface{} `field:"optional" json:"launchTemplateId" yaml:"launchTemplateId"`
	// Property launchTemplateVersion: The version of the launch template associated with the auto provisioning group.
	//
	// Call [DescribeLaunchTemplateVersions]() to query available launch template
	// versions.
	// Default value: The default version of the launch template.
	LaunchTemplateVersion interface{} `field:"optional" json:"launchTemplateVersion" yaml:"launchTemplateVersion"`
	// Property maxSpotPrice: The global maximum price for preemptible instances in the auto provisioning group.
	//
	// If both the MaxSpotPrice and LaunchTemplateConfig.N.MaxPrice parameters are specified, the maximum price is the lower value of the two.
	MaxSpotPrice interface{} `field:"optional" json:"maxSpotPrice" yaml:"maxSpotPrice"`
	// Property minTargetCapacity: The target minimum capacity of the elastic supply group.
	//
	// Value range: Positive integer.
	// Once you have set this parameter, note that:
	// Only create one-time synchronous delivery type elastic supply group (AutoProvisioningGroupType = instant), the parameters to take effect.
	// If the inventory of instances in the current domain is less than this value, the call to the interface will fail and no instance will be created.
	// If the instance inventory in the current domain is greater than the parameter value, the instance is created normally according to the other parameter values that have been set.
	MinTargetCapacity interface{} `field:"optional" json:"minTargetCapacity" yaml:"minTargetCapacity"`
	// Property payAsYouGoAllocationStrategy: The scale-out policy for pay-as-you-go instances.
	//
	// Valid values:
	// lowest-price: The cost optimization policy the auto provisioning group follows to select instance
	// types of the lowest cost to create instances.
	// prioritized: The priority-based policy the auto provisioning group follows to create instances.
	// The priority of an instance type is specified by the LaunchTemplateConfig.N.Priority parameter.
	// Default value: lowest-price.
	PayAsYouGoAllocationStrategy interface{} `field:"optional" json:"payAsYouGoAllocationStrategy" yaml:"payAsYouGoAllocationStrategy"`
	// Property payAsYouGoTargetCapacity: The target capacity for pay-as-you-go instances in the auto provisioning group.
	//
	// Valid values: Integers less than or equal to the value of `TotalTargetCapacity`.
	PayAsYouGoTargetCapacity interface{} `field:"optional" json:"payAsYouGoTargetCapacity" yaml:"payAsYouGoTargetCapacity"`
	// Property resourceGroupId: The resource group ID.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property resourcePoolOptions: Resource pooling policy to use when creating an instance.
	//
	// Once you have set this parameter, note that:
	// This parameter only applies if a pay-as-you-go instance is created.
	// Only create one-time synchronous delivery type elastic supply group (AutoProvisioningGroupType = instant), the parameters to take effect.
	ResourcePoolOptions interface{} `field:"optional" json:"resourcePoolOptions" yaml:"resourcePoolOptions"`
	// Property spotAllocationStrategy: The strategy for creating spot instances.
	//
	// Valid values:
	// - lowest-price: Cost optimization strategy. Selects the instance type with the
	// lowest price.
	// - diversified: Balanced zone distribution strategy. Creates instances across the
	// zones specified in the launch template configurations and distributes them
	// evenly.
	// - capacity-optimized: Capacity optimization strategy. Selects the optimal
	// instance type and zone based on inventory availability.
	// Default value: lowest-price.
	SpotAllocationStrategy interface{} `field:"optional" json:"spotAllocationStrategy" yaml:"spotAllocationStrategy"`
	// Property spotInstanceInterruptionBehavior: The behavior when a spot instance is interrupted.
	//
	// Valid values:
	// - stop: Stops the instance.
	// - terminate: Releases the instance.
	// Default value: terminate.
	SpotInstanceInterruptionBehavior interface{} `field:"optional" json:"spotInstanceInterruptionBehavior" yaml:"spotInstanceInterruptionBehavior"`
	// Property spotInstancePoolsToUseCount: Takes effect only when `SpotAllocationStrategy` is set to `lowest-price`.
	//
	// Specifies the number of lowest-priced instance types from which the auto
	// provisioning group creates instances.
	// Valid values: Less than the value of N in `LaunchTemplateConfig.N`.
	SpotInstancePoolsToUseCount interface{} `field:"optional" json:"spotInstancePoolsToUseCount" yaml:"spotInstancePoolsToUseCount"`
	// Property spotTargetCapacity: The target capacity for spot instances in the auto provisioning group.
	//
	// Valid
	// values: Integers less than or equal to the value of `TotalTargetCapacity`.
	SpotTargetCapacity interface{} `field:"optional" json:"spotTargetCapacity" yaml:"spotTargetCapacity"`
	// Property systemDiskConfig: List of instance system disk information.
	SystemDiskConfig interface{} `field:"optional" json:"systemDiskConfig" yaml:"systemDiskConfig"`
	// Property terminateInstances: Specifies whether to release instances in the group when you delete the auto provisioning group.
	//
	// Valid values:
	// - true: Releases instances in the group.
	// - false: Retains instances in the group.
	// Default value: false.
	TerminateInstances interface{} `field:"optional" json:"terminateInstances" yaml:"terminateInstances"`
	// Property terminateInstancesWithExpiration: Specifies whether to release instances in the group when the auto provisioning group expires.
	//
	// Valid values:
	// - true: Releases instances in the group.
	// - false: Only removes instances from the auto provisioning group.
	// Default value: false.
	TerminateInstancesWithExpiration interface{} `field:"optional" json:"terminateInstancesWithExpiration" yaml:"terminateInstancesWithExpiration"`
	// Property validFrom: The start time of the auto provisioning group.
	//
	// Used together with `ValidUntil` to
	// define the validity period.
	// Specify the time in [ISO 8601]() format using UTC+0 time. Format:
	// yyyy-MM-ddTHH:mm:ssZ.
	// Default value: The timestamp when the API call takes effect immediately.
	ValidFrom interface{} `field:"optional" json:"validFrom" yaml:"validFrom"`
	// Property validUntil: The expiration time of the auto provisioning group.
	//
	// Used together with
	// `ValidFrom` to define the validity period.
	// Specify the time in [ISO 8601]() format using UTC+0 time. Format:
	// yyyy-MM-ddTHH:mm:ssZ.
	// Default value: 2099-12-31T23:59:59Z.
	ValidUntil interface{} `field:"optional" json:"validUntil" yaml:"validUntil"`
}

