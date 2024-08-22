package alicloudroscdkdatahub


// Properties for defining a `RosProject`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-datahub-project
type RosProjectProps struct {
	Comment interface{} `field:"required" json:"comment" yaml:"comment"`
	ProjectName interface{} `field:"required" json:"projectName" yaml:"projectName"`
}

