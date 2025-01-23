package alicloudroscdkfc3


// Properties for defining a `RosProvisionConfig`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-provisionconfig
type RosProvisionConfigProps struct {
	DefaultTarget interface{} `field:"required" json:"defaultTarget" yaml:"defaultTarget"`
	FunctionName interface{} `field:"required" json:"functionName" yaml:"functionName"`
	AlwaysAllocateCpu interface{} `field:"optional" json:"alwaysAllocateCpu" yaml:"alwaysAllocateCpu"`
	AlwaysAllocateGpu interface{} `field:"optional" json:"alwaysAllocateGpu" yaml:"alwaysAllocateGpu"`
	Qualifier interface{} `field:"optional" json:"qualifier" yaml:"qualifier"`
	ScheduledActions interface{} `field:"optional" json:"scheduledActions" yaml:"scheduledActions"`
	TargetTrackingPolicies interface{} `field:"optional" json:"targetTrackingPolicies" yaml:"targetTrackingPolicies"`
}

