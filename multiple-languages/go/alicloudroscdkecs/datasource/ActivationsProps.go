package datasource


// Properties for defining a `Activations`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-activations
type ActivationsProps struct {
	// Property activationId: Activation code ID.
	ActivationId interface{} `field:"optional" json:"activationId" yaml:"activationId"`
	// Property instanceName: The default prefix of the instance name.
	InstanceName interface{} `field:"optional" json:"instanceName" yaml:"instanceName"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

