package alicloudroscdkecs


// Properties for defining a `RosInvocation`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-invocation
type RosInvocationProps struct {
	InstanceIds interface{} `field:"required" json:"instanceIds" yaml:"instanceIds"`
	CommandId interface{} `field:"optional" json:"commandId" yaml:"commandId"`
	CommandName interface{} `field:"optional" json:"commandName" yaml:"commandName"`
	ContainerId interface{} `field:"optional" json:"containerId" yaml:"containerId"`
	ContainerName interface{} `field:"optional" json:"containerName" yaml:"containerName"`
	Frequency interface{} `field:"optional" json:"frequency" yaml:"frequency"`
	Parameters interface{} `field:"optional" json:"parameters" yaml:"parameters"`
	RepeatMode interface{} `field:"optional" json:"repeatMode" yaml:"repeatMode"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Sync interface{} `field:"optional" json:"sync" yaml:"sync"`
	Tags *[]*RosInvocation_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	Timeout interface{} `field:"optional" json:"timeout" yaml:"timeout"`
	Username interface{} `field:"optional" json:"username" yaml:"username"`
	WindowsPasswordName interface{} `field:"optional" json:"windowsPasswordName" yaml:"windowsPasswordName"`
}

