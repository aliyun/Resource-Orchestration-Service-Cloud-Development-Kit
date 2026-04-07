package alicloudroscdkvpc


// Properties for defining a `RosIpv6EgressRule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipv6egressrule
type RosIpv6EgressRuleProps struct {
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	Ipv6GatewayId interface{} `field:"required" json:"ipv6GatewayId" yaml:"ipv6GatewayId"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	InstanceType interface{} `field:"optional" json:"instanceType" yaml:"instanceType"`
	Ipv6EgressRuleName interface{} `field:"optional" json:"ipv6EgressRuleName" yaml:"ipv6EgressRuleName"`
}

