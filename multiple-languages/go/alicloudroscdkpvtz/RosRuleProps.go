package alicloudroscdkpvtz


// Properties for defining a `RosRule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pvtz-rule
type RosRuleProps struct {
	EndpointId interface{} `field:"required" json:"endpointId" yaml:"endpointId"`
	ForwardIp interface{} `field:"required" json:"forwardIp" yaml:"forwardIp"`
	RuleName interface{} `field:"required" json:"ruleName" yaml:"ruleName"`
	Type interface{} `field:"required" json:"type" yaml:"type"`
	ZoneName interface{} `field:"required" json:"zoneName" yaml:"zoneName"`
}

