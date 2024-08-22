package datasource


// Properties for defining a `RosActivations`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-activations
type RosActivationsProps struct {
	ActivationId interface{} `field:"optional" json:"activationId" yaml:"activationId"`
	InstanceName interface{} `field:"optional" json:"instanceName" yaml:"instanceName"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

