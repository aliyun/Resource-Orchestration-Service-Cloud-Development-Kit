package alicloudroscdkdatahub


// Properties for defining a `Project`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-datahub-project
type ProjectProps struct {
	// Property comment: The comment of project.
	Comment interface{} `field:"required" json:"comment" yaml:"comment"`
	// Property projectName: The name of the project.
	//
	// Length [3, 32]. Beginning with characters, only characters, numbers and _ are allowed.
	ProjectName interface{} `field:"required" json:"projectName" yaml:"projectName"`
}

