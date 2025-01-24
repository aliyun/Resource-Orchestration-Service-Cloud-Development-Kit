package datasource


// Properties for defining a `RosEditingProject`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vod-editingproject
type RosEditingProjectProps struct {
	EditingProjectId interface{} `field:"required" json:"editingProjectId" yaml:"editingProjectId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

