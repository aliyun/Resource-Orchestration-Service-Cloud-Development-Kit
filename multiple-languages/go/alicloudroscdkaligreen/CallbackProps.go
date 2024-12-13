package alicloudroscdkaligreen


// Properties for defining a `Callback`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-callback
type CallbackProps struct {
	// Property callbackName: The Callback name defined by the customer.
	//
	// It can contain no more than 20 characters in Chinese, English, underscore (_), and digits.
	CallbackName interface{} `field:"required" json:"callbackName" yaml:"callbackName"`
	// Property callbackSuggestions: List of audit results supported by message notification.
	//
	// Value: block: confirmed violation, review: Suspected violation, pass: normal.
	CallbackSuggestions interface{} `field:"required" json:"callbackSuggestions" yaml:"callbackSuggestions"`
	// Property callbackTypes: A list of Callback types.
	//
	// Value: machineScan: Machine audit result notification, selfAudit: self-service audit notification.
	CallbackTypes interface{} `field:"required" json:"callbackTypes" yaml:"callbackTypes"`
	// Property callbackUrl: The detection result will be called back to the url.
	CallbackUrl interface{} `field:"required" json:"callbackUrl" yaml:"callbackUrl"`
	// Property cryptType: The encryption algorithm is used to verify that the callback request is sent by the Aliyun Green Service to your business service.
	//
	// Value: 0:SHA256,1: SM3.
	CryptType interface{} `field:"optional" json:"cryptType" yaml:"cryptType"`
}

