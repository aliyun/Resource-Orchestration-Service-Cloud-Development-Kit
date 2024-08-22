package alicloudroscdkapigateway


// Properties for defining a `SignatureBinding`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-signaturebinding
type SignatureBindingProps struct {
	// Property apiIds: APIs to bind with the signature.
	ApiIds interface{} `field:"required" json:"apiIds" yaml:"apiIds"`
	// Property groupId: The id of group.
	GroupId interface{} `field:"required" json:"groupId" yaml:"groupId"`
	// Property signatureId: The id of the Signature.
	SignatureId interface{} `field:"required" json:"signatureId" yaml:"signatureId"`
	// Property stageName: Bind signature in this stage.
	StageName interface{} `field:"required" json:"stageName" yaml:"stageName"`
}

