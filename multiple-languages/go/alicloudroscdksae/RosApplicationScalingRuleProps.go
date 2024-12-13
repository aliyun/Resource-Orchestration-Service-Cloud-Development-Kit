package alicloudroscdksae


// Properties for defining a `RosApplicationScalingRule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-applicationscalingrule
type RosApplicationScalingRuleProps struct {
	AppId interface{} `field:"required" json:"appId" yaml:"appId"`
	ScalingRuleName interface{} `field:"required" json:"scalingRuleName" yaml:"scalingRuleName"`
	ScalingRuleType interface{} `field:"required" json:"scalingRuleType" yaml:"scalingRuleType"`
	MinReadyInstanceRatio interface{} `field:"optional" json:"minReadyInstanceRatio" yaml:"minReadyInstanceRatio"`
	MinReadyInstances interface{} `field:"optional" json:"minReadyInstances" yaml:"minReadyInstances"`
	ScalingRuleEnable interface{} `field:"optional" json:"scalingRuleEnable" yaml:"scalingRuleEnable"`
	ScalingRuleMetric interface{} `field:"optional" json:"scalingRuleMetric" yaml:"scalingRuleMetric"`
	ScalingRuleTimer interface{} `field:"optional" json:"scalingRuleTimer" yaml:"scalingRuleTimer"`
}

