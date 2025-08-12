package alicloudroscdkecs


// Properties for defining a `RosRunCommandOfLifespan`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-runcommandoflifespan
type RosRunCommandOfLifespanProps struct {
	InstanceIds interface{} `field:"required" json:"instanceIds" yaml:"instanceIds"`
	Type interface{} `field:"required" json:"type" yaml:"type"`
	CommandContent interface{} `field:"optional" json:"commandContent" yaml:"commandContent"`
	CommandContentOnDeletion interface{} `field:"optional" json:"commandContentOnDeletion" yaml:"commandContentOnDeletion"`
	ContainerId interface{} `field:"optional" json:"containerId" yaml:"containerId"`
	ContainerName interface{} `field:"optional" json:"containerName" yaml:"containerName"`
	ContentEncoding interface{} `field:"optional" json:"contentEncoding" yaml:"contentEncoding"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	EnableParameter interface{} `field:"optional" json:"enableParameter" yaml:"enableParameter"`
	Launcher interface{} `field:"optional" json:"launcher" yaml:"launcher"`
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	Parameters interface{} `field:"optional" json:"parameters" yaml:"parameters"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Sync interface{} `field:"optional" json:"sync" yaml:"sync"`
	Tags *[]*RosRunCommandOfLifespan_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	Timeout interface{} `field:"optional" json:"timeout" yaml:"timeout"`
	Username interface{} `field:"optional" json:"username" yaml:"username"`
	WindowsPasswordName interface{} `field:"optional" json:"windowsPasswordName" yaml:"windowsPasswordName"`
	WorkingDir interface{} `field:"optional" json:"workingDir" yaml:"workingDir"`
}

