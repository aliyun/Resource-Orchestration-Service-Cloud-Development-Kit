package datasource


// Properties for defining a `Rules`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pvtz-rules
type RulesProps struct {
	// Property endpointId: EndpointId.
	EndpointId interface{} `field:"optional" json:"endpointId" yaml:"endpointId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

