package alicloudroscdkaligreen


// Properties for defining a `ImageLib`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-imagelib
type ImageLibProps struct {
	// Property category: The category of the image library.
	//
	// Valid values: BLACK: a blacklist, WHITE: a whitelist, REVIEW: a review list.
	Category interface{} `field:"required" json:"category" yaml:"category"`
	// Property imageLibName: The name of the image library defined by the customer.
	//
	// It can contain no more than 20 characters in Chinese, English, and underscore (_).
	ImageLibName interface{} `field:"required" json:"imageLibName" yaml:"imageLibName"`
	// Property scene: The moderation scenario to which the custom image library applies.
	//
	// Valid values: PORN: pornography detection, AD: ad detection, ILLEGAL: terrorist content detection.
	Scene interface{} `field:"required" json:"scene" yaml:"scene"`
	// Property bizTypes: List of business scenarios.
	//
	// For example: ["bizTypeA", "bizTypeB", "bizTypeC"].
	BizTypes interface{} `field:"optional" json:"bizTypes" yaml:"bizTypes"`
	// Property enable: Specifies whether to enable the image library.
	//
	// Valid values:
	// true: Enable the image library. This is the default value. false: Disable the image library.
	Enable interface{} `field:"optional" json:"enable" yaml:"enable"`
}

