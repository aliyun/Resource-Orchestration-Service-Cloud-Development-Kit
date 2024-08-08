package datasource


// Properties for defining a `Instance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kms-instance
type InstanceProps struct {
	// Property instanceId: The ID of the KMS instance.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

