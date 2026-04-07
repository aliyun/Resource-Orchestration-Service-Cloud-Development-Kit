package alicloudroscdkswas


// Properties for defining a `RosRunCommand`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-swas-runcommand
type RosRunCommandProps struct {
	CommandContent interface{} `field:"required" json:"commandContent" yaml:"commandContent"`
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	Name interface{} `field:"required" json:"name" yaml:"name"`
	Type interface{} `field:"required" json:"type" yaml:"type"`
	ContentEncoding interface{} `field:"optional" json:"contentEncoding" yaml:"contentEncoding"`
	EnableParameter interface{} `field:"optional" json:"enableParameter" yaml:"enableParameter"`
	Parameters interface{} `field:"optional" json:"parameters" yaml:"parameters"`
	Sync interface{} `field:"optional" json:"sync" yaml:"sync"`
	Timeout interface{} `field:"optional" json:"timeout" yaml:"timeout"`
	WindowsPasswordName interface{} `field:"optional" json:"windowsPasswordName" yaml:"windowsPasswordName"`
	WorkingDir interface{} `field:"optional" json:"workingDir" yaml:"workingDir"`
	WorkingUser interface{} `field:"optional" json:"workingUser" yaml:"workingUser"`
}

