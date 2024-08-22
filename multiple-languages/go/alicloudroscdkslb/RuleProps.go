package alicloudroscdkslb


// Properties for defining a `Rule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-rule
type RuleProps struct {
	// Property listenerPort: The front-end HTTPS listener port of the Server Load Balancer instance.
	//
	// Valid value:
	// 1-65535.
	ListenerPort interface{} `field:"required" json:"listenerPort" yaml:"listenerPort"`
	// Property loadBalancerId: The ID of Server Load Balancer instance.
	LoadBalancerId interface{} `field:"required" json:"loadBalancerId" yaml:"loadBalancerId"`
	// Property ruleList: The forwarding rules to add.
	RuleList interface{} `field:"required" json:"ruleList" yaml:"ruleList"`
	// Property listenerProtocol: The frontend protocol that is used by the SLB instance.
	ListenerProtocol interface{} `field:"optional" json:"listenerProtocol" yaml:"listenerProtocol"`
}

