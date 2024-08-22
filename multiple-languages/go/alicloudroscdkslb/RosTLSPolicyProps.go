package alicloudroscdkslb


// Properties for defining a `RosTLSPolicy`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-tlspolicy
type RosTLSPolicyProps struct {
	Ciphers interface{} `field:"required" json:"ciphers" yaml:"ciphers"`
	TlsPolicyName interface{} `field:"required" json:"tlsPolicyName" yaml:"tlsPolicyName"`
	TlsVersions interface{} `field:"required" json:"tlsVersions" yaml:"tlsVersions"`
}

