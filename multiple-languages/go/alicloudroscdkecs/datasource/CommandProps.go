package datasource


// Properties for defining a `Command`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-command
type CommandProps struct {
	// Property commandId: Command ID.
	CommandId interface{} `field:"required" json:"commandId" yaml:"commandId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

