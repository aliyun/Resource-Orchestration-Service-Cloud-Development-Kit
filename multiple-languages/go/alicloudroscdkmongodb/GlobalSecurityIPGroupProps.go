package alicloudroscdkmongodb


// Properties for defining a `GlobalSecurityIPGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-globalsecurityipgroup
type GlobalSecurityIPGroupProps struct {
	// Property globalIgName: The name of the IP whitelist template.
	GlobalIgName interface{} `field:"required" json:"globalIgName" yaml:"globalIgName"`
	// Property globalSecurityIpList: The IP address in the whitelist template.
	GlobalSecurityIpList interface{} `field:"required" json:"globalSecurityIpList" yaml:"globalSecurityIpList"`
}

