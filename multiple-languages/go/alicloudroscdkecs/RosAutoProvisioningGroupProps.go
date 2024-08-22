package alicloudroscdkecs


// Properties for defining a `RosAutoProvisioningGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-autoprovisioninggroup
type RosAutoProvisioningGroupProps struct {
	TotalTargetCapacity interface{} `field:"required" json:"totalTargetCapacity" yaml:"totalTargetCapacity"`
	AutoProvisioningGroupName interface{} `field:"optional" json:"autoProvisioningGroupName" yaml:"autoProvisioningGroupName"`
	AutoProvisioningGroupType interface{} `field:"optional" json:"autoProvisioningGroupType" yaml:"autoProvisioningGroupType"`
	CheckExecutionStatus interface{} `field:"optional" json:"checkExecutionStatus" yaml:"checkExecutionStatus"`
	DefaultTargetCapacityType interface{} `field:"optional" json:"defaultTargetCapacityType" yaml:"defaultTargetCapacityType"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	ExcessCapacityTerminationPolicy interface{} `field:"optional" json:"excessCapacityTerminationPolicy" yaml:"excessCapacityTerminationPolicy"`
	LaunchConfiguration interface{} `field:"optional" json:"launchConfiguration" yaml:"launchConfiguration"`
	LaunchTemplateConfig interface{} `field:"optional" json:"launchTemplateConfig" yaml:"launchTemplateConfig"`
	LaunchTemplateId interface{} `field:"optional" json:"launchTemplateId" yaml:"launchTemplateId"`
	LaunchTemplateVersion interface{} `field:"optional" json:"launchTemplateVersion" yaml:"launchTemplateVersion"`
	MaxSpotPrice interface{} `field:"optional" json:"maxSpotPrice" yaml:"maxSpotPrice"`
	PayAsYouGoAllocationStrategy interface{} `field:"optional" json:"payAsYouGoAllocationStrategy" yaml:"payAsYouGoAllocationStrategy"`
	PayAsYouGoTargetCapacity interface{} `field:"optional" json:"payAsYouGoTargetCapacity" yaml:"payAsYouGoTargetCapacity"`
	SpotAllocationStrategy interface{} `field:"optional" json:"spotAllocationStrategy" yaml:"spotAllocationStrategy"`
	SpotInstanceInterruptionBehavior interface{} `field:"optional" json:"spotInstanceInterruptionBehavior" yaml:"spotInstanceInterruptionBehavior"`
	SpotInstancePoolsToUseCount interface{} `field:"optional" json:"spotInstancePoolsToUseCount" yaml:"spotInstancePoolsToUseCount"`
	SpotTargetCapacity interface{} `field:"optional" json:"spotTargetCapacity" yaml:"spotTargetCapacity"`
	TerminateInstances interface{} `field:"optional" json:"terminateInstances" yaml:"terminateInstances"`
	TerminateInstancesWithExpiration interface{} `field:"optional" json:"terminateInstancesWithExpiration" yaml:"terminateInstancesWithExpiration"`
	ValidFrom interface{} `field:"optional" json:"validFrom" yaml:"validFrom"`
	ValidUntil interface{} `field:"optional" json:"validUntil" yaml:"validUntil"`
}

