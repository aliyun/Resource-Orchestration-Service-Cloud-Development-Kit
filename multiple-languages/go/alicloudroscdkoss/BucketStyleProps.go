package alicloudroscdkoss


// Properties for defining a `BucketStyle`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucketstyle
type BucketStyleProps struct {
	// Property bucket: Storage space to which the picture style belongs.
	Bucket interface{} `field:"required" json:"bucket" yaml:"bucket"`
	// Property content: The Image style content can contain single or multiple image processing parameters.
	Content interface{} `field:"required" json:"content" yaml:"content"`
	// Property styleName: Image Style Name.
	StyleName interface{} `field:"required" json:"styleName" yaml:"styleName"`
	// Property category: Style category, valid values: image, document, video.
	Category interface{} `field:"optional" json:"category" yaml:"category"`
}

