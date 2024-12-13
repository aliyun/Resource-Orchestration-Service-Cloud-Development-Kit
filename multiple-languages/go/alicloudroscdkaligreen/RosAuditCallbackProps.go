package alicloudroscdkaligreen


// Properties for defining a `RosAuditCallback`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-auditcallback
type RosAuditCallbackProps struct {
	AuditCallbackName interface{} `field:"required" json:"auditCallbackName" yaml:"auditCallbackName"`
	CallbackSuggestions interface{} `field:"required" json:"callbackSuggestions" yaml:"callbackSuggestions"`
	CallbackTypes interface{} `field:"required" json:"callbackTypes" yaml:"callbackTypes"`
	CryptType interface{} `field:"required" json:"cryptType" yaml:"cryptType"`
	Url interface{} `field:"required" json:"url" yaml:"url"`
}

