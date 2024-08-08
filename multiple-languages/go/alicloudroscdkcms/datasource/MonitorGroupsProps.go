package datasource


// Properties for defining a `MonitorGroups`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-monitorgroups
type MonitorGroupsProps struct {
	// Property dynamicTagRuleId: The ID of the tag rule.
	DynamicTagRuleId interface{} `field:"optional" json:"dynamicTagRuleId" yaml:"dynamicTagRuleId"`
	// Property groupId: The IDs of the application groups.
	GroupId interface{} `field:"optional" json:"groupId" yaml:"groupId"`
	// Property monitorGroupName: The name of the application group.
	MonitorGroupName interface{} `field:"optional" json:"monitorGroupName" yaml:"monitorGroupName"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property type: The type of the application group.
	//
	// Valid values:
	// custom: a self-managed application group.
	// ehpc_cluster: an application group that is synchronized from an Elastic High Performance Computing (E-HPC) cluster.
	// kubernetes: an application group that is synchronized from a Container Service for Kubernetes (ACK) cluster.
	Type interface{} `field:"optional" json:"type" yaml:"type"`
}

