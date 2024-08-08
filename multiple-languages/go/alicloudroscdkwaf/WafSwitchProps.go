package alicloudroscdkwaf


// Properties for defining a `WafSwitch`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-waf-wafswitch
type WafSwitchProps struct {
	// Property domain: Domain name.
	Domain interface{} `field:"required" json:"domain" yaml:"domain"`
	// Property instanceId: WAF instance ID.
	//
	// Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	// Property serviceOn: Web attack protection switch, the value of: 0: closed.
	//
	// 1: indicate on.
	ServiceOn interface{} `field:"required" json:"serviceOn" yaml:"serviceOn"`
	// Property region: Examples of areas where the WAF.
	//
	// Value:
	// cn: China mainland (default)
	// cn-hongkong: China HongKong and other overseas.
	Region interface{} `field:"optional" json:"region" yaml:"region"`
}

