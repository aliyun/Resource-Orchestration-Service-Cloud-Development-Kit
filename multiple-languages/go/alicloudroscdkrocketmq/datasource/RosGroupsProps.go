package datasource


// Properties for defining a `RosGroups`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rocketmq-groups
type RosGroupsProps struct {
	GroupName interface{} `field:"optional" json:"groupName" yaml:"groupName"`
	GroupType interface{} `field:"optional" json:"groupType" yaml:"groupType"`
	InstanceId interface{} `field:"optional" json:"instanceId" yaml:"instanceId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

