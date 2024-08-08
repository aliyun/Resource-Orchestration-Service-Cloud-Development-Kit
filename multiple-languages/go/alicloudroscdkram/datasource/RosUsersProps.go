package datasource


// Properties for defining a `RosUsers`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ram-users
type RosUsersProps struct {
	GroupName interface{} `field:"optional" json:"groupName" yaml:"groupName"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	UserName interface{} `field:"optional" json:"userName" yaml:"userName"`
}

