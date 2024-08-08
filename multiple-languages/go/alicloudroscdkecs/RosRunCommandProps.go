package alicloudroscdkecs


// Properties for defining a `RosRunCommand`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-runcommand
type RosRunCommandProps struct {
	CommandContent interface{} `field:"required" json:"commandContent" yaml:"commandContent"`
	InstanceIds interface{} `field:"required" json:"instanceIds" yaml:"instanceIds"`
	Type interface{} `field:"required" json:"type" yaml:"type"`
	ContainerId interface{} `field:"optional" json:"containerId" yaml:"containerId"`
	ContainerName interface{} `field:"optional" json:"containerName" yaml:"containerName"`
	ContentEncoding interface{} `field:"optional" json:"contentEncoding" yaml:"contentEncoding"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	EnableParameter interface{} `field:"optional" json:"enableParameter" yaml:"enableParameter"`
	Frequency interface{} `field:"optional" json:"frequency" yaml:"frequency"`
	KeepCommand interface{} `field:"optional" json:"keepCommand" yaml:"keepCommand"`
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	Parameters interface{} `field:"optional" json:"parameters" yaml:"parameters"`
	RepeatMode interface{} `field:"optional" json:"repeatMode" yaml:"repeatMode"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	RunAgainOn interface{} `field:"optional" json:"runAgainOn" yaml:"runAgainOn"`
	Sync interface{} `field:"optional" json:"sync" yaml:"sync"`
	Tags *[]*RosRunCommand_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	Timeout interface{} `field:"optional" json:"timeout" yaml:"timeout"`
	Username interface{} `field:"optional" json:"username" yaml:"username"`
	WindowsPasswordName interface{} `field:"optional" json:"windowsPasswordName" yaml:"windowsPasswordName"`
	WorkingDir interface{} `field:"optional" json:"workingDir" yaml:"workingDir"`
}

