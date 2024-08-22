package datasource


// Properties for defining a `Instances`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-paidswapi-instances
type InstancesProps struct {
	// Property accessibility: Whether the workspace is visible to others.
	Accessibility interface{} `field:"optional" json:"accessibility" yaml:"accessibility"`
	// Property instanceId: The first ID of the resource.
	InstanceId interface{} `field:"optional" json:"instanceId" yaml:"instanceId"`
	// Property instanceName: The instance name.
	InstanceName interface{} `field:"optional" json:"instanceName" yaml:"instanceName"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property workspaceId: The Id of the workspace.
	WorkspaceId interface{} `field:"optional" json:"workspaceId" yaml:"workspaceId"`
}

