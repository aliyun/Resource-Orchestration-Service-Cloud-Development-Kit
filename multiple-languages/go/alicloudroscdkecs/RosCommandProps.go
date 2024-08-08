package alicloudroscdkecs


// Properties for defining a `RosCommand`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-command
type RosCommandProps struct {
	Type interface{} `field:"required" json:"type" yaml:"type"`
	CommandContent interface{} `field:"optional" json:"commandContent" yaml:"commandContent"`
	ContentEncoding interface{} `field:"optional" json:"contentEncoding" yaml:"contentEncoding"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	EnableParameter interface{} `field:"optional" json:"enableParameter" yaml:"enableParameter"`
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Tags *[]*RosCommand_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	Timeout interface{} `field:"optional" json:"timeout" yaml:"timeout"`
	WorkingDir interface{} `field:"optional" json:"workingDir" yaml:"workingDir"`
}

