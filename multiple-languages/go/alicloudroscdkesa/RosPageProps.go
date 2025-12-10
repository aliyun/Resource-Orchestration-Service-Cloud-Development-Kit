package alicloudroscdkesa


// Properties for defining a `RosPage`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-page
type RosPageProps struct {
	ContentType interface{} `field:"required" json:"contentType" yaml:"contentType"`
	PageName interface{} `field:"required" json:"pageName" yaml:"pageName"`
	Content interface{} `field:"optional" json:"content" yaml:"content"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
}

