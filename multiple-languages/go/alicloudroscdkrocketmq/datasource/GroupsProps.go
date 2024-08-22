package datasource


// Properties for defining a `Groups`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rocketmq-groups
type GroupsProps struct {
	// Property groupName: GroupName.
	GroupName interface{} `field:"optional" json:"groupName" yaml:"groupName"`
	// Property groupType: GroupType.
	GroupType interface{} `field:"optional" json:"groupType" yaml:"groupType"`
	// Property instanceId: InstanceId.
	InstanceId interface{} `field:"optional" json:"instanceId" yaml:"instanceId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

