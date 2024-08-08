package alicloudroscdkwaf


// Properties for defining a `RosWafSwitch`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-waf-wafswitch
type RosWafSwitchProps struct {
	Domain interface{} `field:"required" json:"domain" yaml:"domain"`
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	ServiceOn interface{} `field:"required" json:"serviceOn" yaml:"serviceOn"`
	Region interface{} `field:"optional" json:"region" yaml:"region"`
}

