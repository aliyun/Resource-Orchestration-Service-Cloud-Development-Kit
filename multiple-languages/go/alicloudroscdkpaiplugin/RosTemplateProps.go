package alicloudroscdkpaiplugin


// Properties for defining a `RosTemplate`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-template
type RosTemplateProps struct {
	Content interface{} `field:"required" json:"content" yaml:"content"`
	Description interface{} `field:"required" json:"description" yaml:"description"`
	Name interface{} `field:"required" json:"name" yaml:"name"`
	Type interface{} `field:"required" json:"type" yaml:"type"`
	Signature interface{} `field:"optional" json:"signature" yaml:"signature"`
	SignatureId interface{} `field:"optional" json:"signatureId" yaml:"signatureId"`
}

