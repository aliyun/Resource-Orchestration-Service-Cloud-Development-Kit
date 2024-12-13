package alicloudroscdkaligreen


// Properties for defining a `RosImageLib`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-imagelib
type RosImageLibProps struct {
	Category interface{} `field:"required" json:"category" yaml:"category"`
	ImageLibName interface{} `field:"required" json:"imageLibName" yaml:"imageLibName"`
	Scene interface{} `field:"required" json:"scene" yaml:"scene"`
	BizTypes interface{} `field:"optional" json:"bizTypes" yaml:"bizTypes"`
	Enable interface{} `field:"optional" json:"enable" yaml:"enable"`
}

