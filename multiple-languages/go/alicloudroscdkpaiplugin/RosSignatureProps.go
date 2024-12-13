package alicloudroscdkpaiplugin


// Properties for defining a `RosSignature`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-signature
type RosSignatureProps struct {
	Name interface{} `field:"required" json:"name" yaml:"name"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
}

