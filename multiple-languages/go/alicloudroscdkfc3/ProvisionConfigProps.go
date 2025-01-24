package alicloudroscdkfc3


// Properties for defining a `ProvisionConfig`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-provisionconfig
type ProvisionConfigProps struct {
	// Property defaultTarget: The number of target resources to reserve.
	DefaultTarget interface{} `field:"required" json:"defaultTarget" yaml:"defaultTarget"`
	// Property functionName: Function name.
	FunctionName interface{} `field:"required" json:"functionName" yaml:"functionName"`
	// Property alwaysAllocateCpu: Whether CPU should always be allocated;
	//
	// defaults to true.
	AlwaysAllocateCpu interface{} `field:"optional" json:"alwaysAllocateCpu" yaml:"alwaysAllocateCpu"`
	// Property alwaysAllocateGpu: Whether GPU should always be allocated;
	//
	// defaults to true.
	AlwaysAllocateGpu interface{} `field:"optional" json:"alwaysAllocateGpu" yaml:"alwaysAllocateGpu"`
	// Property qualifier: Function alias or LATEST.
	Qualifier interface{} `field:"optional" json:"qualifier" yaml:"qualifier"`
	// Property scheduledActions: Timing policy configuration.
	ScheduledActions interface{} `field:"optional" json:"scheduledActions" yaml:"scheduledActions"`
	// Property targetTrackingPolicies: Target tracking policy configuration.
	TargetTrackingPolicies interface{} `field:"optional" json:"targetTrackingPolicies" yaml:"targetTrackingPolicies"`
}

