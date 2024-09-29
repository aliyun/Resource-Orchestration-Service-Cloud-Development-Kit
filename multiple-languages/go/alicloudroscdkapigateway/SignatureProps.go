package alicloudroscdkapigateway


// Properties for defining a `Signature`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-signature
type SignatureProps struct {
	// Property signatureKey: The key of the signature.
	SignatureKey interface{} `field:"required" json:"signatureKey" yaml:"signatureKey"`
	// Property signatureName: The name of the Signature.It must be 4 to 128 characters in length, and can contain letters, digits, underscores (_), dashes (-), spaces and dots (.), It must start with a letter.
	SignatureName interface{} `field:"required" json:"signatureName" yaml:"signatureName"`
	// Property signatureSecret: The secret of the signature.
	SignatureSecret interface{} `field:"required" json:"signatureSecret" yaml:"signatureSecret"`
}

