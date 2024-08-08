package alicloudroscdkapigateway


// Properties for defining a `RosSignatureBinding`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-signaturebinding
type RosSignatureBindingProps struct {
	ApiIds interface{} `field:"required" json:"apiIds" yaml:"apiIds"`
	GroupId interface{} `field:"required" json:"groupId" yaml:"groupId"`
	SignatureId interface{} `field:"required" json:"signatureId" yaml:"signatureId"`
	StageName interface{} `field:"required" json:"stageName" yaml:"stageName"`
}

