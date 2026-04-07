package datasource


// Properties for defining a `Instances`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-swas-instances
type InstancesProps struct {
	// Property instanceIds: The IDs of instances.
	InstanceIds interface{} `field:"optional" json:"instanceIds" yaml:"instanceIds"`
	// Property instanceName: The names of instances.
	InstanceName interface{} `field:"optional" json:"instanceName" yaml:"instanceName"`
	// Property planType: The type of plan.
	PlanType interface{} `field:"optional" json:"planType" yaml:"planType"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property resourceGroupId: The ID of the resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property status: The status of the instance.
	Status interface{} `field:"optional" json:"status" yaml:"status"`
}

