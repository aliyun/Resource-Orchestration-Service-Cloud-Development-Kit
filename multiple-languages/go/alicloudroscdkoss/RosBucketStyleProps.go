package alicloudroscdkoss


// Properties for defining a `RosBucketStyle`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucketstyle
type RosBucketStyleProps struct {
	Bucket interface{} `field:"required" json:"bucket" yaml:"bucket"`
	Content interface{} `field:"required" json:"content" yaml:"content"`
	StyleName interface{} `field:"required" json:"styleName" yaml:"styleName"`
	Category interface{} `field:"optional" json:"category" yaml:"category"`
}

