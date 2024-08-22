package datasource


// Properties for defining a `RosCommand`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-command
type RosCommandProps struct {
	CommandId interface{} `field:"required" json:"commandId" yaml:"commandId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

