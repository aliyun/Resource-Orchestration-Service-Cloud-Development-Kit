package alicloudroscdkess


// Properties for defining a `ScalingGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-scalinggroup
type ScalingGroupProps struct {
	// Property maxSize: The maximum number of ECS instances that can be contained in the scaling group.
	//
	// If the number of ECS instances in the scaling group is greater than the value of
	// the `MaxSize` parameter, Auto Scaling automatically removes ECS instances until
	// the number of instances in the scaling group is equal to the maximum number.
	// The value range of the MaxSize parameter varies based on the instance quota. You
	// can go to Quota Center to check the maximum number of instances that a scaling
	// group can contain.
	// For example, if a scaling group can contain up to 2,000 instances, the value
	// range of the `MaxSize` parameter is 0 to 2000.
	MaxSize interface{} `field:"required" json:"maxSize" yaml:"maxSize"`
	// Property minSize: Minimum number of ECS instances in the scaling group.
	//
	// Value range: [0, 2000].
	MinSize interface{} `field:"required" json:"minSize" yaml:"minSize"`
	// Property allocationStrategy: The allocation policy of instances.
	//
	// Auto Scaling selects instance types based on the allocation policy to create the required number of instances. The policy can be applied to pay-as-you-go instances and preemptible instances. This parameter takes effect only if you set MultiAZPolicy to COMPOSABLE. Valid values:
	// - priority: Auto Scaling selects instance types based on the specified order to create the required number of instances.
	// - lowestPrice: Auto Scaling selects instance types that have the lowest unit price of vCPUs to create the required number of instances.
	// Default value: priority.
	AllocationStrategy interface{} `field:"optional" json:"allocationStrategy" yaml:"allocationStrategy"`
	// Property azBalance: Specifies whether to evenly distribute instances in the scaling group across multiple zones.
	//
	// This parameter takes effect only if you set MultiAZPolicy to COMPOSABLE. Valid values:
	// - true
	// - false
	// Default value: false.
	AzBalance interface{} `field:"optional" json:"azBalance" yaml:"azBalance"`
	// Property compensateWithOnDemand: Specifies whether to automatically create pay-as-you-go instances to meet the requirements on the number of instances when the expected capacity of preemptible instances cannot be fulfilled due to reasons such as high prices or insufficient resources.
	//
	// This parameter takes effect only when MultiAZPolicy is set to COST_OPTIMIZED.
	// Default value: true.
	CompensateWithOnDemand interface{} `field:"optional" json:"compensateWithOnDemand" yaml:"compensateWithOnDemand"`
	// Property containerGroupId: The ID of the elastic container instance.
	ContainerGroupId interface{} `field:"optional" json:"containerGroupId" yaml:"containerGroupId"`
	// Property customPolicyArn: The Alibaba Cloud Resource Name (ARN) of the custom scale-in policy (Function).
	//
	// This parameter takes effect only if you specify CustomPolicy as the value of first item of RemovalPolicys.
	CustomPolicyArn interface{} `field:"optional" json:"customPolicyArn" yaml:"customPolicyArn"`
	// Property dbInstanceIds: The IDs of the ApsaraDB RDS instances that you want to associate with the scaling group.
	//
	// The value can be a JSON array that contains multiple ApsaraDB RDS instance
	// IDs. Separate multiple IDs with commas (,).
	// You can associate only a limited number of ApsaraDB RDS instances with a scaling
	// group. Go to Quota Center to check the maximum number of ApsaraDB RDS instances
	// that you can associate with a scaling group.
	DbInstanceIds interface{} `field:"optional" json:"dbInstanceIds" yaml:"dbInstanceIds"`
	// Property defaultCooldown: Default cool-down time (in seconds) of the scaling group.
	//
	// Value range: [0, 86400].
	// The default value is 300s.
	DefaultCooldown interface{} `field:"optional" json:"defaultCooldown" yaml:"defaultCooldown"`
	// Property desiredCapacity: The expected number of ECS instances in a scaling group.
	//
	// The scaling group automatically keeps the number of ECS instances as expected. The number of ECS instances cannot be greater than the value of MaxSize and cannot be less than the value of MinSize.
	DesiredCapacity interface{} `field:"optional" json:"desiredCapacity" yaml:"desiredCapacity"`
	// Property groupDeletionProtection: Whether to enable deletion protection for scaling group.
	//
	// Default to False.
	GroupDeletionProtection interface{} `field:"optional" json:"groupDeletionProtection" yaml:"groupDeletionProtection"`
	// Property groupType: The type of instances that are managed by the scaling group.
	//
	// Valid values:
	// ECS
	// ECI
	// Default value: ECS.
	GroupType interface{} `field:"optional" json:"groupType" yaml:"groupType"`
	// Property healthCheckType: The health check type.
	//
	// Allow values is "ECS" and "NONE", default to "ECS".
	HealthCheckType interface{} `field:"optional" json:"healthCheckType" yaml:"healthCheckType"`
	// Property healthCheckTypes: The health check method for the scaling group.
	//
	// > You can specify multiple values for this parameter to enable multiple health
	// check options. If the `HealthCheckType` parameter is set, this parameter is
	// ignored.
	HealthCheckTypes interface{} `field:"optional" json:"healthCheckTypes" yaml:"healthCheckTypes"`
	// Property instanceId: The ID of the ECS instance from which the scaling group obtains configuration information of the specified instance.
	InstanceId interface{} `field:"optional" json:"instanceId" yaml:"instanceId"`
	// Property launchTemplateId: The ID of the instance launch template from which the scaling group obtains launch configurations.
	LaunchTemplateId interface{} `field:"optional" json:"launchTemplateId" yaml:"launchTemplateId"`
	// Property launchTemplateOverrides: You can specify up to 10 overrides.
	//
	// Note: This parameter takes effect only if you specify LaunchTemplateId.
	LaunchTemplateOverrides interface{} `field:"optional" json:"launchTemplateOverrides" yaml:"launchTemplateOverrides"`
	// Property launchTemplateVersion: The version of the instance launch template.
	//
	// Valid values:
	// A fixed template version numbe.
	// Default: The default template version is always used.
	// Latest: The latest template version is always used.
	LaunchTemplateVersion interface{} `field:"optional" json:"launchTemplateVersion" yaml:"launchTemplateVersion"`
	// Property loadBalancerIds: The IDs of the CLB instances that you want to associate with the scaling group.
	//
	// The value can be a JSON array that contains multiple CLB instance IDs. Separate
	// multiple IDs with commas (,).
	// You can associate only a limited number of CLB instances with a scaling group. Go
	// to Quota Center to check the maximum number of CLB instances that you can
	// associate with a scaling group.
	LoadBalancerIds interface{} `field:"optional" json:"loadBalancerIds" yaml:"loadBalancerIds"`
	// Property maxInstanceLifetime: The maximum life span of an ECS instance in the scaling group.
	//
	// Unit: seconds.
	// Valid values: 86400 to the value of Integer.maxValue.
	// Default value: null.
	// Note: This parameter is unavailable for scaling groups of the ECI type or scaling groups whose ScalingPolicy is set to recycle.
	MaxInstanceLifetime interface{} `field:"optional" json:"maxInstanceLifetime" yaml:"maxInstanceLifetime"`
	// Property multiAzPolicy: The scaling policy for the multi-zone scaling group that contains ECS instances.
	//
	// Valid values:
	// *   PRIORITY: Auto Scaling scales ECS instances based on the priority of the
	// vSwitch that is specified by the VSwitchIds.N parameter. Auto Scaling
	// preferentially scales instances in the zone where the vSwitch that has the
	// highest priority resides. If the scaling fails, Auto Scaling scales instances in
	// the zone where the vSwitch that has the next highest priority resides.
	// *   COST_OPTIMIZED: Auto Scaling preferentially creates ECS instances whose vCPUs
	// are provided at the lowest price and removes ECS instances whose vCPUs are
	// provided at the highest price. If preemptible instance types are specified in the
	// scaling configuration, Auto Scaling preferentially creates preemptible instances.
	// You can use the CompensateWithOnDemand parameter to specify whether to
	// automatically create pay-as-you-go instances when preemptible instances cannot be
	// created due to insufficient resources.
	// Note The COST_OPTIMIZED **setting takes effect only when you specify multiple
	// instance types or when you specify at least one preemptible instance type.
	// *   BALANCE: Auto Scaling evenly distributes ECS instances across zones that are
	// specified for the scaling group. If ECS instances are unevenly distributed across
	// zones due to insufficient resources, you can call the [RebalanceInstance]()
	// operation to evenly distribute the instances across the zones.
	// *   COMPOSABLE: You can combine the preceding policies based on your business
	// requirements.
	// Default value: PRIORITY.
	MultiAzPolicy interface{} `field:"optional" json:"multiAzPolicy" yaml:"multiAzPolicy"`
	// Property notificationConfigurations: When a scaling event occurs in a scaling group, ESS will send a notification to Cloud Monitor or MNS.
	NotificationConfigurations interface{} `field:"optional" json:"notificationConfigurations" yaml:"notificationConfigurations"`
	// Property onDemandBaseCapacity: The minimum number of pay-as-you-go instances required in the scaling group.
	//
	// Valid values: 0 to 1000. If the number of pay-as-you-go instances is less than the value of this parameter, Auto Scaling preferentially creates pay-as-you-go instances.
	// If you set MultiAZPolicy to COMPOSABLE Policy, the default value of this parameter is 0.
	OnDemandBaseCapacity interface{} `field:"optional" json:"onDemandBaseCapacity" yaml:"onDemandBaseCapacity"`
	// Property onDemandPercentageAboveBaseCapacity: The percentage of pay-as-you-go instances that can be created when instances are added to the scaling group.
	//
	// This parameter takes effect when the number of pay-as-you-go instances reaches the value for the OnDemandBaseCapacity parameter. Valid values: 0 to 100.
	// If you set MultiAZPolicy to COMPOSABLE, the default value of this parameter is 100.
	OnDemandPercentageAboveBaseCapacity interface{} `field:"optional" json:"onDemandPercentageAboveBaseCapacity" yaml:"onDemandPercentageAboveBaseCapacity"`
	// Property protectedInstances: ECS instances of protected mode in the scaling group.
	ProtectedInstances interface{} `field:"optional" json:"protectedInstances" yaml:"protectedInstances"`
	// Property removalPolicys: Policy for removing ECS instances from the scaling group.
	//
	// Optional values:
	// - OldestInstance: removes the first ECS instance attached to the scaling group.
	// - NewestInstance: removes the first ECS instance attached to the scaling group.
	// - OldestScalingConfiguration: removes the ECS instance with the oldest scaling configuration.
	// - CustomPolicy: removes ECS instances based on the custom scale-in policy (Function).
	// You can enter up to three removal policies.
	// You cannot set any item of RemovalPolicys to the same value.
	// The scaling configuration source specified by the OldestScalingConfiguration setting can be a scaling configuration or a launch template. You can specify CustomPolicy only as the value of first item of RemovalPolicys. If you set first item of RemovalPolicys to CustomPolicy, you must also specify CustomPolicyARN.
	// Note: The removal of ECS instances from a scaling group is also affected by the value of MultiAZPolicy.
	RemovalPolicys interface{} `field:"optional" json:"removalPolicys" yaml:"removalPolicys"`
	// Property resourceGroupId: Resource group id.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property scalingGroupName: The name of the scaling group.
	//
	// The name of each scaling group must be unique in a
	// region. The name must be 2 to 64 characters in length, and can contain letters,
	// digits, underscores (_), hyphens (-), and periods (.). The name must start with a
	// letter or a digit.
	// If you do not specify this parameter, the value of the ScalingGroupId parameter
	// is used.
	ScalingGroupName interface{} `field:"optional" json:"scalingGroupName" yaml:"scalingGroupName"`
	// Property scalingPolicy: The reclaim mode of the scaling group.
	//
	// Valid values:
	// recycle
	// release
	// forcerelease
	// ScalingPolicy specifies the reclaim modes of scaling groups, but the policy that is used to remove ECS instances from scaling groups is determined by the RemovePolicy parameter of the RemoveInstances operation.
	ScalingPolicy interface{} `field:"optional" json:"scalingPolicy" yaml:"scalingPolicy"`
	// Property serverGroups: The config of server group.
	ServerGroups interface{} `field:"optional" json:"serverGroups" yaml:"serverGroups"`
	// Property spotAllocationStrategy: The allocation policy of preemptible instances.
	//
	// You can use this parameter to individually specify the allocation policy of preemptible instances. This parameter takes effect only if you set MultiAZPolicy to COMPOSABLE. Valid values:
	// - priority: Auto Scaling selects instance types based on the specified order to create the required number of preemptible instances.
	// - lowestPrice: Auto Scaling selects instance types that have the lowest unit price of vCPUs to create the required number of preemptible instances.
	// Default value: priority.
	SpotAllocationStrategy interface{} `field:"optional" json:"spotAllocationStrategy" yaml:"spotAllocationStrategy"`
	// Property spotInstancePools: The number of instance types that are available.
	//
	// The system creates preemptible instances of multiple instance types that are available at the lowest cost in the scaling group. Valid values: 1 to 10.
	// If you set MultiAZPolicy to COMPOSABLE, the default value of this parameter is 2.
	SpotInstancePools interface{} `field:"optional" json:"spotInstancePools" yaml:"spotInstancePools"`
	// Property spotInstanceRemedy: Specifies whether to supplement preemptible instances.
	//
	// If this parameter is set to true, Auto Scaling attempts to create an instance to replace a preemptible instance when Auto Scaling receives a system message which indicates that the preemptible instance is to be reclaimed.
	SpotInstanceRemedy interface{} `field:"optional" json:"spotInstanceRemedy" yaml:"spotInstanceRemedy"`
	// Property standbyInstances: ECS instances of standby mode in the scaling group.
	StandbyInstances interface{} `field:"optional" json:"standbyInstances" yaml:"standbyInstances"`
	// Property tags: Tags to attach to instance.
	//
	// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosScalingGroup_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property vSwitchId: The ID of the vSwitch.
	//
	// If you specify the VSwitchId parameter, the network type
	// of the scaling group is VPC.
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
	// Property vSwitchIds: The IDs of vSwitches.
	//
	// If you specify the VSwitchIds.N parameter, the VSwitchId
	// parameter is ignored. If you specify the VSwitchIds.N parameter, the network type
	// of the scaling group is VPC.
	// If you specify multiple vSwitches, take note of the following items:
	// *   The vSwitches must belong to the same VPC.
	// *   The vSwitches can belong to different zones.
	// *   The vSwitches are sorted in ascending order of priority. The first vSwitch
	// that is specified by the VSwitchIds.N parameter has the highest priority. If Auto
	// Scaling fails to create ECS instances in the zone where the vSwitch that has the
	// highest priority resides, Auto Scaling creates ECS instances in the zone where
	// the vSwitch that has the next highest priority resides.
	VSwitchIds interface{} `field:"optional" json:"vSwitchIds" yaml:"vSwitchIds"`
}

