package alicloudroscdkcr


// Properties for defining a `RosStorageDomainRoutingRule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-storagedomainroutingrule
type RosStorageDomainRoutingRuleProps struct {
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	Routes interface{} `field:"required" json:"routes" yaml:"routes"`
}

