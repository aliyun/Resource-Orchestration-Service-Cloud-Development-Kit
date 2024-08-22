package datasource


// Properties for defining a `Services`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-services
type ServicesProps struct {
	// Property labels: Service Tag.
	Labels interface{} `field:"optional" json:"labels" yaml:"labels"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property serviceName: Service Name.
	ServiceName interface{} `field:"optional" json:"serviceName" yaml:"serviceName"`
}

