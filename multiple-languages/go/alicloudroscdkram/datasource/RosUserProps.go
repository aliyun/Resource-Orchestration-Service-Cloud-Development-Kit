package datasource


// Properties for defining a `RosUser`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ram-user
type RosUserProps struct {
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	UserId interface{} `field:"optional" json:"userId" yaml:"userId"`
	UserName interface{} `field:"optional" json:"userName" yaml:"userName"`
}

