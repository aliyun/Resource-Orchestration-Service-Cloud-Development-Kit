package alicloudroscdkaligreen


// Properties for defining a `RosCallback`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-callback
type RosCallbackProps struct {
	CallbackName interface{} `field:"required" json:"callbackName" yaml:"callbackName"`
	CallbackSuggestions interface{} `field:"required" json:"callbackSuggestions" yaml:"callbackSuggestions"`
	CallbackTypes interface{} `field:"required" json:"callbackTypes" yaml:"callbackTypes"`
	CallbackUrl interface{} `field:"required" json:"callbackUrl" yaml:"callbackUrl"`
	CryptType interface{} `field:"optional" json:"cryptType" yaml:"cryptType"`
}

