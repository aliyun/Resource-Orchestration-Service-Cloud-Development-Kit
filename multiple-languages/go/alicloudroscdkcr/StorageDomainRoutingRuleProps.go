package alicloudroscdkcr


// Properties for defining a `StorageDomainRoutingRule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-storagedomainroutingrule
type StorageDomainRoutingRuleProps struct {
	// Property instanceId: ACR Instance ID.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	// Property routes: Domain name routing entry.
	Routes interface{} `field:"required" json:"routes" yaml:"routes"`
}

