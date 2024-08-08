package datasource


// Properties for defining a `DrdsInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-drds-drdsinstance
type DrdsInstanceProps struct {
	// Property drdsInstanceId: The ID of the Drds instance.
	DrdsInstanceId interface{} `field:"required" json:"drdsInstanceId" yaml:"drdsInstanceId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

