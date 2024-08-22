package datasource


// Properties for defining a `RosGroups`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apigateway-groups
type RosGroupsProps struct {
	GroupId interface{} `field:"optional" json:"groupId" yaml:"groupId"`
	GroupName interface{} `field:"optional" json:"groupName" yaml:"groupName"`
	InstanceId interface{} `field:"optional" json:"instanceId" yaml:"instanceId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	Sort interface{} `field:"optional" json:"sort" yaml:"sort"`
}

