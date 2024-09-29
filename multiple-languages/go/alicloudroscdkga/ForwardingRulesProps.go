package alicloudroscdkga


// Properties for defining a `ForwardingRules`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-forwardingrules
type ForwardingRulesProps struct {
	// Property acceleratorId: The ID of the GA instance.
	AcceleratorId interface{} `field:"required" json:"acceleratorId" yaml:"acceleratorId"`
	// Property forwardingRules: Details about the forwarding rules.
	ForwardingRules interface{} `field:"required" json:"forwardingRules" yaml:"forwardingRules"`
	// Property listenerId: The ID of the listener.
	ListenerId interface{} `field:"required" json:"listenerId" yaml:"listenerId"`
}

