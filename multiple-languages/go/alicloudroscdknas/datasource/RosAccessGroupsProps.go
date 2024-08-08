package datasource


// Properties for defining a `RosAccessGroups`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-nas-accessgroups
type RosAccessGroupsProps struct {
	AccessGroupName interface{} `field:"optional" json:"accessGroupName" yaml:"accessGroupName"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

