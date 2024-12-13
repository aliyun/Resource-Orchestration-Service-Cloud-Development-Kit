package datasource


// Properties for defining a `Prometheus`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-prometheus
type PrometheusProps struct {
	// Property clusterId: The ID of the Prometheus instance.
	ClusterId interface{} `field:"required" json:"clusterId" yaml:"clusterId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

