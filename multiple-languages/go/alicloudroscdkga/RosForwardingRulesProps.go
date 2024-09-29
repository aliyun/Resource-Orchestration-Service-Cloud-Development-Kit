package alicloudroscdkga


// Properties for defining a `RosForwardingRules`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-forwardingrules
type RosForwardingRulesProps struct {
	AcceleratorId interface{} `field:"required" json:"acceleratorId" yaml:"acceleratorId"`
	ForwardingRules interface{} `field:"required" json:"forwardingRules" yaml:"forwardingRules"`
	ListenerId interface{} `field:"required" json:"listenerId" yaml:"listenerId"`
}

