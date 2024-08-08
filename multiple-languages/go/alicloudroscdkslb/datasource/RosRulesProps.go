package datasource


// Properties for defining a `RosRules`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-rules
type RosRulesProps struct {
	ListenerPort interface{} `field:"required" json:"listenerPort" yaml:"listenerPort"`
	LoadBalancerId interface{} `field:"required" json:"loadBalancerId" yaml:"loadBalancerId"`
	ListenerProtocol interface{} `field:"optional" json:"listenerProtocol" yaml:"listenerProtocol"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

