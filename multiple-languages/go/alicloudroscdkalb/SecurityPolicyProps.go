package alicloudroscdkalb


// Properties for defining a `SecurityPolicy`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-securitypolicy
type SecurityPolicyProps struct {
	// Property ciphers: The supported cipher suites, which are determined by the TLS protocol version.
	//
	// The specified cipher suites must be supported by at least one TLS protocol version that you specify.
	// Note For example, if you set the TLSVersions parameter to TLSv1.3, you must specify cipher suites that are supported by TLS 1.3.
	Ciphers interface{} `field:"required" json:"ciphers" yaml:"ciphers"`
	// Property securityPolicyName: The name of the security policy.
	//
	// The name must be 2 to 128 characters in length, and can contain letters, digits, periods
	// (.), underscores (_), and hyphens (-). The name must start with a letter.
	SecurityPolicyName interface{} `field:"required" json:"securityPolicyName" yaml:"securityPolicyName"`
	// Property tlsVersions: The supported versions of the Transport Layer Security (TLS) protocol.
	//
	// Valid values: TLSv1.0, TLSv1.1, TLSv1.2, and TLSv1.3 and so on.
	TlsVersions interface{} `field:"required" json:"tlsVersions" yaml:"tlsVersions"`
	// Property resourceGroupId: The ID of the resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

