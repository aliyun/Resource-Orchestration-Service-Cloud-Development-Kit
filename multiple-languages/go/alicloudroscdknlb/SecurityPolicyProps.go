package alicloudroscdknlb


// Properties for defining a `SecurityPolicy`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-securitypolicy
type SecurityPolicyProps struct {
	// Property ciphers: TThe supported cipher suites, which are determined by the TLS protocol version.
	//
	// You can specify at most 32 cipher suites.
	Ciphers interface{} `field:"required" json:"ciphers" yaml:"ciphers"`
	// Property tlsVersions: The supported versions of the Transport Layer Security (TLS) protocol.
	//
	// Valid values: TLSv1.0, TLSv1.1, TLSv1.2, and TLSv1.3.
	TlsVersions interface{} `field:"required" json:"tlsVersions" yaml:"tlsVersions"`
	// Property resourceGroupId: The ID of the resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property securityPolicyName: The name of the security policy.
	//
	// The name must be 1 to 200 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-).
	SecurityPolicyName interface{} `field:"optional" json:"securityPolicyName" yaml:"securityPolicyName"`
	// Property tags: Tags to attach to instance.
	//
	// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosSecurityPolicy_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

