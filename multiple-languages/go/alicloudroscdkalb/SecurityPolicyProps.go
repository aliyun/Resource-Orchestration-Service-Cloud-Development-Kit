package alicloudroscdkalb


// Properties for defining a `SecurityPolicy`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-securitypolicy
type SecurityPolicyProps struct {
	// Property ciphers: The supported cipher suites.
	Ciphers interface{} `field:"required" json:"ciphers" yaml:"ciphers"`
	// Property securityPolicyName: The name of the security policy.
	//
	// The name must be 2 to 128 characters in length, and can contain letters, digits,
	// Chinese characters, periods (.), underscores (_), hyphens (-), and spaces.
	SecurityPolicyName interface{} `field:"required" json:"securityPolicyName" yaml:"securityPolicyName"`
	// Property tlsVersions: The supported versions of the Transport Layer Security (TLS) protocol.
	//
	// Valid values: TLSv1.0, TLSv1.1, TLSv1.2, and TLSv1.3 and so on.
	TlsVersions interface{} `field:"required" json:"tlsVersions" yaml:"tlsVersions"`
	// Property resourceGroupId: The ID of the resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

