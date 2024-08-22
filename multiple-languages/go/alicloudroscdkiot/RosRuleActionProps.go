package alicloudroscdkiot


// Properties for defining a `RosRuleAction`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-iot-ruleaction
type RosRuleActionProps struct {
	Configuration interface{} `field:"required" json:"configuration" yaml:"configuration"`
	RuleId interface{} `field:"required" json:"ruleId" yaml:"ruleId"`
	Type interface{} `field:"required" json:"type" yaml:"type"`
	ErrorActionFlag interface{} `field:"optional" json:"errorActionFlag" yaml:"errorActionFlag"`
	IotInstanceId interface{} `field:"optional" json:"iotInstanceId" yaml:"iotInstanceId"`
}

