package datasource


// Properties for defining a `RosSlsGroups`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-slsgroups
type RosSlsGroupsProps struct {
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	SlsGroupName interface{} `field:"optional" json:"slsGroupName" yaml:"slsGroupName"`
}

