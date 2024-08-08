package alicloudroscdkdataworks


// Properties for defining a `RosProject`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dataworks-project
type RosProjectProps struct {
	ProjectIdentifier interface{} `field:"required" json:"projectIdentifier" yaml:"projectIdentifier"`
	DisableDevelopment interface{} `field:"optional" json:"disableDevelopment" yaml:"disableDevelopment"`
	IsAllowDownload interface{} `field:"optional" json:"isAllowDownload" yaml:"isAllowDownload"`
	ProjectDescription interface{} `field:"optional" json:"projectDescription" yaml:"projectDescription"`
	ProjectMode interface{} `field:"optional" json:"projectMode" yaml:"projectMode"`
	ProjectName interface{} `field:"optional" json:"projectName" yaml:"projectName"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Tags *[]*RosProject_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

