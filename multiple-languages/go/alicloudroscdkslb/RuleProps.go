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
	//
	// You can add up to 10 forwarding rules in a single
	// request. Each forwarding rule consists of the following parameters:
	// - RuleName (Required): String. The name of the forwarding rule. The name must be
	// 1 to 40 characters in length and can contain letters, digits, hyphens (-),
	// forward slashes (\/), periods (.), and underscores (_). Rule names must be unique
	// within the same listener.
	// - Domain (Optional): String. The domain name to associate with the forwarding
	// rule. You must specify at least one of this parameter and the Url parameter.
	// - Url (Optional): String. The URL path. The path must be 1 to 80 characters in
	// length. It can contain Chinese characters, letters, digits, and the following
	// special characters: `- \/ . % ? # &`. The URL path must start with a forward slash
	// (\/), but cannot be a single forward slash (\/). You must specify at least one of
	// this parameter and the Domain parameter.
	// - VServerGroupId (Required): String. The ID of the target vServer group for the
	// forwarding rule.
	// > You must specify the `Domain` parameter, the `Url` parameter, or both. The
	// combination of a `Domain` and a `Url` must be unique within the same listener.
	RuleList interface{} `field:"required" json:"ruleList" yaml:"ruleList"`
	// Property listenerProtocol: The frontend protocol of the listener.
	//
	// > This parameter is required if you configure listeners that use different
	// protocols on the same port.
	ListenerProtocol interface{} `field:"optional" json:"listenerProtocol" yaml:"listenerProtocol"`
}

