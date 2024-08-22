package alicloudroscdknlpautoml


// Properties for defining a `RosProject`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlpautoml-project
type RosProjectProps struct {
	ProjectDescription interface{} `field:"required" json:"projectDescription" yaml:"projectDescription"`
	ProjectName interface{} `field:"required" json:"projectName" yaml:"projectName"`
	ProjectType interface{} `field:"required" json:"projectType" yaml:"projectType"`
}

