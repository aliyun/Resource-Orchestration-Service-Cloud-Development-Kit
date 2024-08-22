package datasource


// Properties for defining a `Instances`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ots-instances
type InstancesProps struct {
	// Property instanceName: The name of instance.
	InstanceName interface{} `field:"optional" json:"instanceName" yaml:"instanceName"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property status: The status of instance.
	Status interface{} `field:"optional" json:"status" yaml:"status"`
}

