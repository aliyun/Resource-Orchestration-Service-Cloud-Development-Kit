package alicloudroscdkecs


// Properties for defining a `AutoProvisioningGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-autoprovisioninggroup
type AutoProvisioningGroupProps struct {
	// Property totalTargetCapacity: The total target capacity of the auto provisioning group.
	//
	// The target capacity consists
	// of the following three parts:
	// The target capacity of pay-as-you-go instances specified by the PayAsYouGoTargetCapacity parameter
	// The target capacity of preemptible instances specified by the SpotTargetCapacity parameter
	// The supplemental capacity besides PayAsYouGoTargetCapacity and SpotTargetCapacity.
	TotalTargetCapacity interface{} `field:"required" json:"totalTargetCapacity" yaml:"totalTargetCapacity"`
	// Property autoProvisioningGroupName: The name of the auto provisioning group to be created.
	//
	// It must be 2 to 128 characters
	// in length. It must start with a letter but cannot start with http:\/\/ or https:\/\/.
	// It can contain letters, digits, colons (:), underscores (_), and hyphens (-).
	AutoProvisioningGroupName interface{} `field:"optional" json:"autoProvisioningGroupName" yaml:"autoProvisioningGroupName"`
	// Property autoProvisioningGroupType: The type of the auto provisioning group.
	//
	// Valid values:
	// request: One-time delivery. After the auto provisioning group is started, it only attempts
	// to create an instance cluster once. If the cluster fails to be created, the group
	// does not try again.
	// maintain: The continuous delivery and maintain capacity type. After the auto provisioning group
	// is started, it continuously attempts to create and maintain the instance cluster.
	// The auto provisioning group compares the real-time and target capacity of the cluster.
	// If the cluster does not meet the target capacity, the group will create instances
	// until the cluster meets the target capacity.
	// Default value: maintain.
	AutoProvisioningGroupType interface{} `field:"optional" json:"autoProvisioningGroupType" yaml:"autoProvisioningGroupType"`
	// Property checkExecutionStatus: Whether check execution status.
	//
	// If set true, ROS will check the state of AutoProvisioningGroup to be fulfilled. Otherwise ROS will regard AutoProvisioningGroup create failed.
	CheckExecutionStatus interface{} `field:"optional" json:"checkExecutionStatus" yaml:"checkExecutionStatus"`
	// Property defaultTargetCapacityType: The type of supplemental instances.
	//
	// When the total value of PayAsYouGoTargetCapacity and SpotTargetCapacity is smaller than the value of TotalTargetCapacity, the auto provisioning group will create instances of the specified type to meet
	// the capacity requirements. Valid values:
	// PayAsYouGo: Pay-as-you-go instances.
	// Spot: Preemptible instances.
	// Default value: Spot.
	DefaultTargetCapacityType interface{} `field:"optional" json:"defaultTargetCapacityType" yaml:"defaultTargetCapacityType"`
	// Property description: The description of the auto provisioning group.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property excessCapacityTerminationPolicy: The shutdown policy for excess preemptible instances followed when the capacity of the auto provisioning group exceeds the target capacity.
	//
	// Valid values:
	// no-termination: Excess preemptible instances are not shut down.
	// termination: Excess preemptible instances are to be shut down. The action to be performed on these
	// shutdown instances is specified by the SpotInstanceInterruptionBehavior parameter.
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
	// Property launchTemplateVersion: The version of the instance launch template associated with the auto provisioning group.
	//
	// You can call the DescribeLaunchTemplateVersions operation to query the versions of available instance launch templates.
	LaunchTemplateVersion interface{} `field:"optional" json:"launchTemplateVersion" yaml:"launchTemplateVersion"`
	// Property maxSpotPrice: The global maximum price for preemptible instances in the auto provisioning group.
	//
	// If both the MaxSpotPrice and LaunchTemplateConfig.N.MaxPrice parameters are specified, the maximum price is the lower value of the two.
	MaxSpotPrice interface{} `field:"optional" json:"maxSpotPrice" yaml:"maxSpotPrice"`
	// Property payAsYouGoAllocationStrategy: The scale-out policy for pay-as-you-go instances.
	//
	// Valid values:
	// lowest-price: The cost optimization policy the auto provisioning group follows to select instance
	// types of the lowest cost to create instances.
	// prioritized: The priority-based policy the auto provisioning group follows to create instances.
	// The priority of an instance type is specified by the LaunchTemplateConfig.N.Priority parameter.
	// Default value: lowest-price.
	PayAsYouGoAllocationStrategy interface{} `field:"optional" json:"payAsYouGoAllocationStrategy" yaml:"payAsYouGoAllocationStrategy"`
	// Property payAsYouGoTargetCapacity: The target capacity of pay-as-you-go instances in the auto provisioning group.
	PayAsYouGoTargetCapacity interface{} `field:"optional" json:"payAsYouGoTargetCapacity" yaml:"payAsYouGoTargetCapacity"`
	// Property spotAllocationStrategy: The scale-out policy for preemptible instances.
	//
	// Valid values:
	// lowest-price: The cost optimization policy the auto provisioning group follows to select instance
	// types of the lowest cost to create instances.
	// diversified: The distribution balancing policy the auto provisioning group follows to evenly create
	// instances across zones specified in multiple extended template configurations.
	// Default value: lowest-price.
	SpotAllocationStrategy interface{} `field:"optional" json:"spotAllocationStrategy" yaml:"spotAllocationStrategy"`
	// Property spotInstanceInterruptionBehavior: The default behavior after preemptible instances are shut down.
	//
	// Value values:
	// stop: stops preemptible instances.
	// terminate: releases preemptible instances.
	// Default value: stop.
	SpotInstanceInterruptionBehavior interface{} `field:"optional" json:"spotInstanceInterruptionBehavior" yaml:"spotInstanceInterruptionBehavior"`
	// Property spotInstancePoolsToUseCount: This parameter takes effect when the SpotAllocationStrategy parameter is set to lowest-price.
	//
	// The auto provisioning group selects instance types of the lowest cost to create
	// instances.
	SpotInstancePoolsToUseCount interface{} `field:"optional" json:"spotInstancePoolsToUseCount" yaml:"spotInstancePoolsToUseCount"`
	// Property spotTargetCapacity: The target capacity of preemptible instances in the auto provisioning group.
	SpotTargetCapacity interface{} `field:"optional" json:"spotTargetCapacity" yaml:"spotTargetCapacity"`
	// Property terminateInstances: Specifies whether to release instances of the auto provisioning group.
	//
	// Valid values:
	// true
	// false
	// Default: false.
	TerminateInstances interface{} `field:"optional" json:"terminateInstances" yaml:"terminateInstances"`
	// Property terminateInstancesWithExpiration: The shutdown policy for preemptible instances when the auto provisioning group expires.
	//
	// Valid values:
	// true: shuts down preemptible instances. The action to be performed on these shutdown instances
	// is specified by the SpotInstanceInterruptionBehavior parameter.
	// false: does not shut down preemptible instances.
	// Default: false.
	TerminateInstancesWithExpiration interface{} `field:"optional" json:"terminateInstancesWithExpiration" yaml:"terminateInstancesWithExpiration"`
	// Property validFrom: The time when the auto provisioning group is started.
	//
	// The period of time between this
	// point in time and the point in time specified by the ValidUntil parameter is the effective time period of the auto provisioning group.
	// By default, an auto provisioning group is immediately started after creation.
	ValidFrom interface{} `field:"optional" json:"validFrom" yaml:"validFrom"`
	// Property validUntil: The time when the auto provisioning group expires.
	//
	// The period of time between this
	// point in time and the point in time specified by the ValidFrom parameter is the effective time period of the auto provisioning group.
	// By default, an auto provisioning group never expires.
	ValidUntil interface{} `field:"optional" json:"validUntil" yaml:"validUntil"`
}

