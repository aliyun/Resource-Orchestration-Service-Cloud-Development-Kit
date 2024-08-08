package datasource


// Properties for defining a `DrdsInstances`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-drds-drdsinstances
type DrdsInstancesProps struct {
	// Property description: Example description.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property resourceGroupId: The ID of the resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property type: Instance type.
	//
	// Enumeration Value:
	// 1: PRIVATE
	// 0: PUBLIC.
	Type interface{} `field:"optional" json:"type" yaml:"type"`
}

