package alicloudroscdkslb


// Properties for defining a `TLSPolicy`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-tlspolicy
type TLSPolicyProps struct {
	// Property ciphers: The supported cipher suites, which are determined by the TLS protocol version.
	//
	// You can specify at most 32 cipher suites.TLS 1.0 and TLS 1.1 support the following cipher suites:
	// ECDHE-ECDSA-AES128-SHA
	// ECDHE-ECDSA-AES256-SHA
	// ECDHE-RSA-AES128-SHA
	// ECDHE-RSA-AES256-SHA
	// AES128-SHA
	// AES256-SHA
	// DES-CBC3-SHA
	// TLS 1.2 supports the following cipher suites:
	// ECDHE-ECDSA-AES128-SHA
	// ECDHE-ECDSA-AES256-SHA
	// ECDHE-RSA-AES128-SHA
	// ECDHE-RSA-AES256-SHA
	// AES128-SHA
	// AES256-SHA
	// DES-CBC3-SHA
	// ECDHE-ECDSA-AES128-GCM-SHA256
	// ECDHE-ECDSA-AES256-GCM-SHA384
	// ECDHE-ECDSA-AES128-SHA256
	// ECDHE-ECDSA-AES256-SHA384
	// ECDHE-RSA-AES128-GCM-SHA256
	// ECDHE-RSA-AES256-GCM-SHA384
	// ECDHE-RSA-AES128-SHA256
	// ECDHE-RSA-AES256-SHA384
	// AES128-GCM-SHA256
	// AES256-GCM-SHA384
	// AES128-SHA256
	// AES256-SHA256
	// TLS 1.3 supports the following cipher suites:
	// TLS_AES_128_GCM_SHA256
	// TLS_AES_256_GCM_SHA384
	// TLS_CHACHA20_POLY1305_SHA256
	// TLS_AES_128_CCM_SHA256
	// TLS_AES_128_CCM_8_SHA256.
	Ciphers interface{} `field:"required" json:"ciphers" yaml:"ciphers"`
	// Property tlsPolicyName: The name of the TLS policy.
	//
	// The name must be 1 to 200 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-).
	TlsPolicyName interface{} `field:"required" json:"tlsPolicyName" yaml:"tlsPolicyName"`
	// Property tlsVersions: The version of the TLS protocol.
	TlsVersions interface{} `field:"required" json:"tlsVersions" yaml:"tlsVersions"`
}

