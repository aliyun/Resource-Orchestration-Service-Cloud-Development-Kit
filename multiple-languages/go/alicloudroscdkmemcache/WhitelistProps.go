package alicloudroscdkmemcache


// Properties for defining a `Whitelist`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-memcache-whitelist
type WhitelistProps struct {
	// Property instanceId: Instance ID (globally unique).
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	// Property securityIps: IP address whitelist to be modified.
	SecurityIps interface{} `field:"required" json:"securityIps" yaml:"securityIps"`
	// Property securityIpGroupAttribute: The default is empty.
	//
	// For distinguishing between different attribute values, the console will not display the value of hidden whitelist packet.
	SecurityIpGroupAttribute interface{} `field:"optional" json:"securityIpGroupAttribute" yaml:"securityIpGroupAttribute"`
	// Property securityIpGroupName: Whitelist group.
	SecurityIpGroupName interface{} `field:"optional" json:"securityIpGroupName" yaml:"securityIpGroupName"`
}

