package datasource


// Properties for defining a `ManagedInstances`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-managedinstances
type ManagedInstancesProps struct {
	// Property activationId: The ID of the activation code.
	ActivationId interface{} `field:"optional" json:"activationId" yaml:"activationId"`
	// Property instanceId: The ID of managed instance.
	//
	// Valid values of N: 1 to 50.
	InstanceId interface{} `field:"optional" json:"instanceId" yaml:"instanceId"`
	// Property instanceIp: The internal or public IP address of the managed instance.
	InstanceIp interface{} `field:"optional" json:"instanceIp" yaml:"instanceIp"`
	// Property instanceName: The name of the managed instance.
	InstanceName interface{} `field:"optional" json:"instanceName" yaml:"instanceName"`
	// Property osType: The operating system type of the managed instance.
	//
	// Valid values:
	// windows
	// linux.
	OsType interface{} `field:"optional" json:"osType" yaml:"osType"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property tags: Tags of managedinstance.
	Tags *[]*RosManagedInstances_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

