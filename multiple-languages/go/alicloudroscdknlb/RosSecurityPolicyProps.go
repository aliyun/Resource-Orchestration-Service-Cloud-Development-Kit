package alicloudroscdknlb


// Properties for defining a `RosSecurityPolicy`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-securitypolicy
type RosSecurityPolicyProps struct {
	Ciphers interface{} `field:"required" json:"ciphers" yaml:"ciphers"`
	TlsVersions interface{} `field:"required" json:"tlsVersions" yaml:"tlsVersions"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	SecurityPolicyName interface{} `field:"optional" json:"securityPolicyName" yaml:"securityPolicyName"`
	Tags *[]*RosSecurityPolicy_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

