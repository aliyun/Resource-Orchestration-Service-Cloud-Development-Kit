package alicloudroscdkapigateway


// Properties for defining a `Signature`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-signature
type SignatureProps struct {
	// Property signatureKey: The key of the signature.
	SignatureKey interface{} `field:"required" json:"signatureKey" yaml:"signatureKey"`
	// Property signatureName: The name of the Signature.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese\/English character.
	SignatureName interface{} `field:"required" json:"signatureName" yaml:"signatureName"`
	// Property signatureSecret: The secret of the signature.
	SignatureSecret interface{} `field:"required" json:"signatureSecret" yaml:"signatureSecret"`
}

