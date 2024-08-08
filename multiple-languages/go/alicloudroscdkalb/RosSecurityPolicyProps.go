package alicloudroscdkalb


// Properties for defining a `RosSecurityPolicy`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-securitypolicy
type RosSecurityPolicyProps struct {
	Ciphers interface{} `field:"required" json:"ciphers" yaml:"ciphers"`
	SecurityPolicyName interface{} `field:"required" json:"securityPolicyName" yaml:"securityPolicyName"`
	TlsVersions interface{} `field:"required" json:"tlsVersions" yaml:"tlsVersions"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

