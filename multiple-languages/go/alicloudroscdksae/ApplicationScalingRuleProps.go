package alicloudroscdksae


// Properties for defining a `ApplicationScalingRule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-applicationscalingrule
type ApplicationScalingRuleProps struct {
	// Property appId: The ID of the application.
	AppId interface{} `field:"required" json:"appId" yaml:"appId"`
	// Property scalingRuleName: The name of the auto scaling policy.
	//
	// The name must start with a lowercase letter, and can contain lowercase letters, digits, and hyphens (-).The name must be 1 to 32 characters in length.
	ScalingRuleName interface{} `field:"required" json:"scalingRuleName" yaml:"scalingRuleName"`
	// Property scalingRuleType: The type of the auto scaling policy.
	//
	// Valid values: timer: Timed scaling. metric: Custom metric scaling.mix: mix scaling
	ScalingRuleType interface{} `field:"required" json:"scalingRuleType" yaml:"scalingRuleType"`
	// Property minReadyInstanceRatio: The minimum percentage of surviving instances.
	//
	// The value description is as follows:-1: Initialization value, indicating that the percentage is not used.0~100: The unit is a percentage, rounded up. For example, if it is set to 50%, if there are currently 5 instances, the minimum number of surviving instances is 3.
	MinReadyInstanceRatio interface{} `field:"optional" json:"minReadyInstanceRatio" yaml:"minReadyInstanceRatio"`
	// Property minReadyInstances: Minimum number of surviving instances.
	//
	// The value is as follows:If set to 0, the application will be interrupted during the upgrade process.If set to **-1**, the minimum number of surviving instances will use the system recommended value, which is 25% of the existing number of instances. If there are currently 5 instances, 5×25%=1.25, after rounding up, the minimum number of surviving instances is 2.
	MinReadyInstances interface{} `field:"optional" json:"minReadyInstances" yaml:"minReadyInstances"`
	// Property scalingRuleEnable: Whether to enable the scaling rule.
	ScalingRuleEnable interface{} `field:"optional" json:"scalingRuleEnable" yaml:"scalingRuleEnable"`
	// Property scalingRuleMetric: Configuration of monitoring indicator elasticity policy.
	//
	// This parameter is required when you select monitoring indicator elasticity policy setting.
	ScalingRuleMetric interface{} `field:"optional" json:"scalingRuleMetric" yaml:"scalingRuleMetric"`
	// Property scalingRuleTimer: The configuration of the timer scaling policy.
	ScalingRuleTimer interface{} `field:"optional" json:"scalingRuleTimer" yaml:"scalingRuleTimer"`
}

