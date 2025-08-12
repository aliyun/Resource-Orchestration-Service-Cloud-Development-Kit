package datasource


// Properties for defining a `HttpApi`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-httpapi
type HttpApiProps struct {
	// Property httpApiId: The ID of the API.
	HttpApiId interface{} `field:"required" json:"httpApiId" yaml:"httpApiId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

