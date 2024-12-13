package alicloudroscdkpaiplugin


// Properties for defining a `Signature`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-signature
type SignatureProps struct {
	// Property name: The name of the Signature.
	Name interface{} `field:"required" json:"name" yaml:"name"`
	// Property description: Application instructions.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
}

