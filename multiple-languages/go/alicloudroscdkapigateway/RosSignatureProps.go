package alicloudroscdkapigateway


// Properties for defining a `RosSignature`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-signature
type RosSignatureProps struct {
	SignatureKey interface{} `field:"required" json:"signatureKey" yaml:"signatureKey"`
	SignatureName interface{} `field:"required" json:"signatureName" yaml:"signatureName"`
	SignatureSecret interface{} `field:"required" json:"signatureSecret" yaml:"signatureSecret"`
}

