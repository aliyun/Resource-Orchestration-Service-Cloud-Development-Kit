package alicloudroscdkvod


// Properties for defining a `EditingProject`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vod-editingproject
type EditingProjectProps struct {
	// Property title: The title of the online editing project.
	Title interface{} `field:"required" json:"title" yaml:"title"`
	// Property editingProjectName: The name of the online editing project.
	EditingProjectName interface{} `field:"optional" json:"editingProjectName" yaml:"editingProjectName"`
	// Property timeline: The timeline of the online editing project, in JSON format.
	//
	// If you do not specify this parameter, an empty timeline is created and the duration of the online editing project is zero.
	Timeline interface{} `field:"optional" json:"timeline" yaml:"timeline"`
}

