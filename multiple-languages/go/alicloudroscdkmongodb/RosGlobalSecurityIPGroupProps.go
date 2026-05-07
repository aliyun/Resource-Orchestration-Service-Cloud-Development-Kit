package alicloudroscdkmongodb


// Properties for defining a `RosGlobalSecurityIPGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-globalsecurityipgroup
type RosGlobalSecurityIPGroupProps struct {
	GlobalIgName interface{} `field:"required" json:"globalIgName" yaml:"globalIgName"`
	GlobalSecurityIpList interface{} `field:"required" json:"globalSecurityIpList" yaml:"globalSecurityIpList"`
}

