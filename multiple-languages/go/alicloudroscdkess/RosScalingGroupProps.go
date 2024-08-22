package alicloudroscdkess


// Properties for defining a `RosScalingGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-scalinggroup
type RosScalingGroupProps struct {
	MaxSize interface{} `field:"required" json:"maxSize" yaml:"maxSize"`
	MinSize interface{} `field:"required" json:"minSize" yaml:"minSize"`
	AllocationStrategy interface{} `field:"optional" json:"allocationStrategy" yaml:"allocationStrategy"`
	AzBalance interface{} `field:"optional" json:"azBalance" yaml:"azBalance"`
	CompensateWithOnDemand interface{} `field:"optional" json:"compensateWithOnDemand" yaml:"compensateWithOnDemand"`
	ContainerGroupId interface{} `field:"optional" json:"containerGroupId" yaml:"containerGroupId"`
	CustomPolicyArn interface{} `field:"optional" json:"customPolicyArn" yaml:"customPolicyArn"`
	DbInstanceIds interface{} `field:"optional" json:"dbInstanceIds" yaml:"dbInstanceIds"`
	DefaultCooldown interface{} `field:"optional" json:"defaultCooldown" yaml:"defaultCooldown"`
	DesiredCapacity interface{} `field:"optional" json:"desiredCapacity" yaml:"desiredCapacity"`
	GroupDeletionProtection interface{} `field:"optional" json:"groupDeletionProtection" yaml:"groupDeletionProtection"`
	GroupType interface{} `field:"optional" json:"groupType" yaml:"groupType"`
	HealthCheckType interface{} `field:"optional" json:"healthCheckType" yaml:"healthCheckType"`
	InstanceId interface{} `field:"optional" json:"instanceId" yaml:"instanceId"`
	LaunchTemplateId interface{} `field:"optional" json:"launchTemplateId" yaml:"launchTemplateId"`
	LaunchTemplateOverrides interface{} `field:"optional" json:"launchTemplateOverrides" yaml:"launchTemplateOverrides"`
	LaunchTemplateVersion interface{} `field:"optional" json:"launchTemplateVersion" yaml:"launchTemplateVersion"`
	LoadBalancerIds interface{} `field:"optional" json:"loadBalancerIds" yaml:"loadBalancerIds"`
	MaxInstanceLifetime interface{} `field:"optional" json:"maxInstanceLifetime" yaml:"maxInstanceLifetime"`
	MultiAzPolicy interface{} `field:"optional" json:"multiAzPolicy" yaml:"multiAzPolicy"`
	NotificationConfigurations interface{} `field:"optional" json:"notificationConfigurations" yaml:"notificationConfigurations"`
	OnDemandBaseCapacity interface{} `field:"optional" json:"onDemandBaseCapacity" yaml:"onDemandBaseCapacity"`
	OnDemandPercentageAboveBaseCapacity interface{} `field:"optional" json:"onDemandPercentageAboveBaseCapacity" yaml:"onDemandPercentageAboveBaseCapacity"`
	ProtectedInstances interface{} `field:"optional" json:"protectedInstances" yaml:"protectedInstances"`
	RemovalPolicys interface{} `field:"optional" json:"removalPolicys" yaml:"removalPolicys"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	ScalingGroupName interface{} `field:"optional" json:"scalingGroupName" yaml:"scalingGroupName"`
	ScalingPolicy interface{} `field:"optional" json:"scalingPolicy" yaml:"scalingPolicy"`
	ServerGroups interface{} `field:"optional" json:"serverGroups" yaml:"serverGroups"`
	SpotAllocationStrategy interface{} `field:"optional" json:"spotAllocationStrategy" yaml:"spotAllocationStrategy"`
	SpotInstancePools interface{} `field:"optional" json:"spotInstancePools" yaml:"spotInstancePools"`
	SpotInstanceRemedy interface{} `field:"optional" json:"spotInstanceRemedy" yaml:"spotInstanceRemedy"`
	StandbyInstances interface{} `field:"optional" json:"standbyInstances" yaml:"standbyInstances"`
	Tags *[]*RosScalingGroup_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
	VSwitchIds interface{} `field:"optional" json:"vSwitchIds" yaml:"vSwitchIds"`
}

