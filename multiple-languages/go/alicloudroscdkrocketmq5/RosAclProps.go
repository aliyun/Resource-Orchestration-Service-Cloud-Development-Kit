package alicloudroscdkrocketmq5


// Properties for defining a `RosAcl`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq5-acl
type RosAclProps struct {
	Actions interface{} `field:"required" json:"actions" yaml:"actions"`
	Decision interface{} `field:"required" json:"decision" yaml:"decision"`
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	ResourceName interface{} `field:"required" json:"resourceName" yaml:"resourceName"`
	ResourceType interface{} `field:"required" json:"resourceType" yaml:"resourceType"`
	Username interface{} `field:"required" json:"username" yaml:"username"`
	IpWhitelists interface{} `field:"optional" json:"ipWhitelists" yaml:"ipWhitelists"`
}

