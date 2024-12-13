package datasource


// Properties for defining a `ServiceInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-computenest-serviceinstance
type ServiceInstanceProps struct {
	// Property serviceInstanceId: The ID of the service instance.
	ServiceInstanceId interface{} `field:"required" json:"serviceInstanceId" yaml:"serviceInstanceId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

