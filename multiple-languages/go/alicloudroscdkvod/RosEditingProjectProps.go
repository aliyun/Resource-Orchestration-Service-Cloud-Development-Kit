package alicloudroscdkvod


// Properties for defining a `RosEditingProject`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vod-editingproject
type RosEditingProjectProps struct {
	Title interface{} `field:"required" json:"title" yaml:"title"`
	EditingProjectName interface{} `field:"optional" json:"editingProjectName" yaml:"editingProjectName"`
	Timeline interface{} `field:"optional" json:"timeline" yaml:"timeline"`
}

