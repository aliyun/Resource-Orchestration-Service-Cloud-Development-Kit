package datasource


// Properties for defining a `Instances`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eais-instances
type InstancesProps struct {
	// Property instanceId: Elastic accelerated instance ID.
	InstanceId interface{} `field:"optional" json:"instanceId" yaml:"instanceId"`
	// Property instanceName: Name of the instance.
	InstanceName interface{} `field:"optional" json:"instanceName" yaml:"instanceName"`
	// Property instanceType: EAIS instance type.
	InstanceType interface{} `field:"optional" json:"instanceType" yaml:"instanceType"`
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

