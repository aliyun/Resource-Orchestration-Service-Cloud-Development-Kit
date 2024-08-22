package datasource


// Properties for defining a `Commands`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-commands
type CommandsProps struct {
	// Property commandId: The ID of the command.
	CommandId interface{} `field:"optional" json:"commandId" yaml:"commandId"`
	// Property commandName: The name of the command.
	//
	// Partial command names are not supported.
	CommandName interface{} `field:"optional" json:"commandName" yaml:"commandName"`
	// Property description: Command description.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property type: The command type.
	//
	// Valid values:
	// RunBatScript: batch command, applicable to Windows instances
	// RunPowerShellScript: PowerShell command, applicable to Windows instances
	// RunShellScript: shell command, applicable to Linux instances.
	Type interface{} `field:"optional" json:"type" yaml:"type"`
}

