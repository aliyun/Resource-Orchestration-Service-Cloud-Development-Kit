package alicloudroscdkmemcache


// Properties for defining a `RosWhitelist`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-memcache-whitelist
type RosWhitelistProps struct {
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	SecurityIps interface{} `field:"required" json:"securityIps" yaml:"securityIps"`
	SecurityIpGroupAttribute interface{} `field:"optional" json:"securityIpGroupAttribute" yaml:"securityIpGroupAttribute"`
	SecurityIpGroupName interface{} `field:"optional" json:"securityIpGroupName" yaml:"securityIpGroupName"`
}

