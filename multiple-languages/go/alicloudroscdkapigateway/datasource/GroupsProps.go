package datasource


// Properties for defining a `Groups`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apigateway-groups
type GroupsProps struct {
	// Property groupId: API group ID.
	GroupId interface{} `field:"optional" json:"groupId" yaml:"groupId"`
	// Property groupName: Specified keyword of the API group name.
	GroupName interface{} `field:"optional" json:"groupName" yaml:"groupName"`
	// Property instanceId: API Gateway Instance ID.
	InstanceId interface{} `field:"optional" json:"instanceId" yaml:"instanceId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property sort: Sort.
	Sort interface{} `field:"optional" json:"sort" yaml:"sort"`
}

