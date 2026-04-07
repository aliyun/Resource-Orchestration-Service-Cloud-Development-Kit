package alicloudroscdkrocketmq5


// Properties for defining a `Acl`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq5-acl
type AclProps struct {
	// Property actions: The type of operation authorized.
	Actions interface{} `field:"required" json:"actions" yaml:"actions"`
	// Property decision: The decision result of the authorization.
	//
	// Valid values:
	// * Deny: Access is denied.
	// * Allow: Allow access.
	Decision interface{} `field:"required" json:"decision" yaml:"decision"`
	// Property instanceId: The ID of the RocketMQ instance.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	// Property resourceName: The name of the resource on which you want to grant permissions.
	ResourceName interface{} `field:"required" json:"resourceName" yaml:"resourceName"`
	// Property resourceType: The type of the resource on which you want to grant permissions.
	//
	// Valid values:
	// * Group: consumer Group.
	// * Topic: Topic.
	ResourceType interface{} `field:"required" json:"resourceType" yaml:"resourceType"`
	// Property username: The username of the account.
	Username interface{} `field:"required" json:"username" yaml:"username"`
	// Property ipWhitelists: The IP addresses in the whitelist.
	IpWhitelists interface{} `field:"optional" json:"ipWhitelists" yaml:"ipWhitelists"`
}

