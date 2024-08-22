package datasource


// Properties for defining a `RosCommands`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-commands
type RosCommandsProps struct {
	CommandId interface{} `field:"optional" json:"commandId" yaml:"commandId"`
	CommandName interface{} `field:"optional" json:"commandName" yaml:"commandName"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	Type interface{} `field:"optional" json:"type" yaml:"type"`
}

