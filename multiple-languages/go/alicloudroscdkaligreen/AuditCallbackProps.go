package alicloudroscdkaligreen


// Properties for defining a `AuditCallback`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-auditcallback
type AuditCallbackProps struct {
	// Property auditCallbackName: The AuditCallback name defined by the customer.
	//
	// It can contain no more than 20 characters in Chinese, English, underscore (_), and digits.
	AuditCallbackName interface{} `field:"required" json:"auditCallbackName" yaml:"auditCallbackName"`
	// Property callbackSuggestions: List of audit results supported by message notification.
	//
	// Value: block: confirmed violation, review: Suspected violation, pass: normal.
	CallbackSuggestions interface{} `field:"required" json:"callbackSuggestions" yaml:"callbackSuggestions"`
	// Property callbackTypes: A list of Callback types.
	//
	// Value: machineScan: Machine audit result notification, selfAudit: self-service audit notification.
	CallbackTypes interface{} `field:"required" json:"callbackTypes" yaml:"callbackTypes"`
	// Property cryptType: The encryption algorithm is used to verify that the callback request is sent by the content security service to your business service.
	//
	// The value is SHA256:SHA256 encryption algorithm and SM3: SM3 encryption algorithm.
	CryptType interface{} `field:"required" json:"cryptType" yaml:"cryptType"`
	// Property url: The detection result will be called back to the url.
	Url interface{} `field:"required" json:"url" yaml:"url"`
}

