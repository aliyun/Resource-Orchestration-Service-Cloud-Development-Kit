package datasource


// Properties for defining a `RosActivation`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-activation
type RosActivationProps struct {
	ActivationId interface{} `field:"required" json:"activationId" yaml:"activationId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

