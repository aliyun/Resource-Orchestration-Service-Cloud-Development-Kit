package datasource


// Properties for defining a `RosGroups`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ram-groups
type RosGroupsProps struct {
	GroupName interface{} `field:"optional" json:"groupName" yaml:"groupName"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	UserName interface{} `field:"optional" json:"userName" yaml:"userName"`
}

