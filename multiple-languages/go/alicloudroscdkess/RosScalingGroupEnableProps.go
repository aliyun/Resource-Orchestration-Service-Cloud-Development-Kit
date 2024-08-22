package alicloudroscdkess


// Properties for defining a `RosScalingGroupEnable`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-scalinggroupenable
type RosScalingGroupEnableProps struct {
	ScalingGroupId interface{} `field:"required" json:"scalingGroupId" yaml:"scalingGroupId"`
	AttachOptions interface{} `field:"optional" json:"attachOptions" yaml:"attachOptions"`
	DetachOptions interface{} `field:"optional" json:"detachOptions" yaml:"detachOptions"`
	InstanceIds interface{} `field:"optional" json:"instanceIds" yaml:"instanceIds"`
	RemoveInstanceIds interface{} `field:"optional" json:"removeInstanceIds" yaml:"removeInstanceIds"`
	ScalingConfigurationId interface{} `field:"optional" json:"scalingConfigurationId" yaml:"scalingConfigurationId"`
	ScalingRuleAris interface{} `field:"optional" json:"scalingRuleAris" yaml:"scalingRuleAris"`
	ScalingRuleArisExecuteVersion interface{} `field:"optional" json:"scalingRuleArisExecuteVersion" yaml:"scalingRuleArisExecuteVersion"`
}

