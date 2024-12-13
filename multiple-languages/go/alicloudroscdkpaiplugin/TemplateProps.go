package alicloudroscdkpaiplugin


// Properties for defining a `Template`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-template
type TemplateProps struct {
	// Property content: The content of the template.
	Content interface{} `field:"required" json:"content" yaml:"content"`
	// Property description: For the template content, please keep the total word count within 70 words.
	//
	// The excess will be charged as long text messages. Each text message is recorded as 67 words.
	Description interface{} `field:"required" json:"description" yaml:"description"`
	// Property name: The name of the template.
	Name interface{} `field:"required" json:"name" yaml:"name"`
	// Property type: The type of the template.
	//
	// The following values are supported:
	// 0: Verification code.
	// 1: SMS notification.
	// 2: Promotional SMS.
	Type interface{} `field:"required" json:"type" yaml:"type"`
	// Property signature: The name of the Signature, You must select either Signature or SignatureId, but not both.
	Signature interface{} `field:"optional" json:"signature" yaml:"signature"`
	// Property signatureId: The ID of the Signature, You must select either Signature or SignatureId, but not both.
	SignatureId interface{} `field:"optional" json:"signatureId" yaml:"signatureId"`
}

