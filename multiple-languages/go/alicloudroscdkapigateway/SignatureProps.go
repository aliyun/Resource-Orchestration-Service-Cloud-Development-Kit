package alicloudroscdkapigateway


// Properties for defining a `Signature`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-signature
type SignatureProps struct {
	// Property signatureKey: The Key value of the key.
	//
	// The value must be 6 to 20 characters in length and can
	// contain letters, digits, and underscores (_). It must start with a letter.
	SignatureKey interface{} `field:"required" json:"signatureKey" yaml:"signatureKey"`
	// Property signatureName: The displayed name of the key.
	//
	// The name must be 4 to 50 characters in length and
	// can contain letters, digits, and underscores (_). It must start with a letter.
	SignatureName interface{} `field:"required" json:"signatureName" yaml:"signatureName"`
	// Property signatureSecret: The Secret value of the key.
	//
	// The value must be 6 to 30 characters in length and
	// can contain letters, digits, and special characters. Special characters include
	// underscores (_), at signs (@), number signs (#), exclamation points (!), and
	// asterisks (\*). The value must start with a letter.
	SignatureSecret interface{} `field:"required" json:"signatureSecret" yaml:"signatureSecret"`
}

