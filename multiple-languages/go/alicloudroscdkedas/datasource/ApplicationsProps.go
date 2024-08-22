package datasource


// Properties for defining a `Applications`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-edas-applications
type ApplicationsProps struct {
	// Property appName: The application name keyword.
	AppName interface{} `field:"optional" json:"appName" yaml:"appName"`
	// Property clusterId: The ID of the cluster.
	ClusterId interface{} `field:"optional" json:"clusterId" yaml:"clusterId"`
	// Property logicalRegionId: The ID of the namespace.
	LogicalRegionId interface{} `field:"optional" json:"logicalRegionId" yaml:"logicalRegionId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property resourceGroupId: The ID of the resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

