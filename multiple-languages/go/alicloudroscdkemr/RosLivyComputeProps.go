package alicloudroscdkemr


// Properties for defining a `RosLivyCompute`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-emr-livycompute
type RosLivyComputeProps struct {
	AuthType interface{} `field:"required" json:"authType" yaml:"authType"`
	CpuLimit interface{} `field:"required" json:"cpuLimit" yaml:"cpuLimit"`
	DisplayReleaseVersion interface{} `field:"required" json:"displayReleaseVersion" yaml:"displayReleaseVersion"`
	LivyVersion interface{} `field:"required" json:"livyVersion" yaml:"livyVersion"`
	MemoryLimit interface{} `field:"required" json:"memoryLimit" yaml:"memoryLimit"`
	Name interface{} `field:"required" json:"name" yaml:"name"`
	QueueName interface{} `field:"required" json:"queueName" yaml:"queueName"`
	WorkspaceBizId interface{} `field:"required" json:"workspaceBizId" yaml:"workspaceBizId"`
	AutoStartConfiguration interface{} `field:"optional" json:"autoStartConfiguration" yaml:"autoStartConfiguration"`
	AutoStopConfiguration interface{} `field:"optional" json:"autoStopConfiguration" yaml:"autoStopConfiguration"`
	EnablePublic interface{} `field:"optional" json:"enablePublic" yaml:"enablePublic"`
	EnvironmentId interface{} `field:"optional" json:"environmentId" yaml:"environmentId"`
	Fusion interface{} `field:"optional" json:"fusion" yaml:"fusion"`
	LivyServerConf interface{} `field:"optional" json:"livyServerConf" yaml:"livyServerConf"`
	NetworkName interface{} `field:"optional" json:"networkName" yaml:"networkName"`
	ReleaseVersion interface{} `field:"optional" json:"releaseVersion" yaml:"releaseVersion"`
}

