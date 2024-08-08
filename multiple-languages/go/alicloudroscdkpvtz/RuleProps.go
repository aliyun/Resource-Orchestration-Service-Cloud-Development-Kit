package alicloudroscdkpvtz


// Properties for defining a `Rule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pvtz-rule
type RuleProps struct {
	// Property endpointId: The ID of the endpoint.
	EndpointId interface{} `field:"required" json:"endpointId" yaml:"endpointId"`
	// Property forwardIp: The destination external server.
	ForwardIp interface{} `field:"required" json:"forwardIp" yaml:"forwardIp"`
	// Property ruleName: The name of the forwarding rule.
	RuleName interface{} `field:"required" json:"ruleName" yaml:"ruleName"`
	// Property type: The type of the forwarding rule.
	//
	// Valid value:
	// OUTBOUND: forwards Domain Name System (DNS) traffic to one or more external IP addresses.
	Type interface{} `field:"required" json:"type" yaml:"type"`
	// Property zoneName: The domain name that requires DNS traffic forwarding.
	ZoneName interface{} `field:"required" json:"zoneName" yaml:"zoneName"`
}

