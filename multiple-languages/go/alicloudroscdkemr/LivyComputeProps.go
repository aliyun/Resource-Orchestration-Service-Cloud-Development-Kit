package alicloudroscdkemr


// Properties for defining a `LivyCompute`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-emr-livycompute
type LivyComputeProps struct {
	// Property authType: The authentication method.
	AuthType interface{} `field:"required" json:"authType" yaml:"authType"`
	// Property cpuLimit: The number of CPU cores for the Livy server.
	CpuLimit interface{} `field:"required" json:"cpuLimit" yaml:"cpuLimit"`
	// Property displayReleaseVersion: The version number of the Spark engine.
	DisplayReleaseVersion interface{} `field:"required" json:"displayReleaseVersion" yaml:"displayReleaseVersion"`
	// Property livyVersion: The Livy version.
	LivyVersion interface{} `field:"required" json:"livyVersion" yaml:"livyVersion"`
	// Property memoryLimit: The memory size of the Livy server.
	MemoryLimit interface{} `field:"required" json:"memoryLimit" yaml:"memoryLimit"`
	// Property name: The name of the Livy Gateway.
	Name interface{} `field:"required" json:"name" yaml:"name"`
	// Property queueName: The name of the submission queue.
	QueueName interface{} `field:"required" json:"queueName" yaml:"queueName"`
	// Property workspaceBizId: The business ID of the workspace.
	WorkspaceBizId interface{} `field:"required" json:"workspaceBizId" yaml:"workspaceBizId"`
	// Property autoStartConfiguration: The automatic startup configuration.
	AutoStartConfiguration interface{} `field:"optional" json:"autoStartConfiguration" yaml:"autoStartConfiguration"`
	// Property autoStopConfiguration: The automatic stop configuration.
	AutoStopConfiguration interface{} `field:"optional" json:"autoStopConfiguration" yaml:"autoStopConfiguration"`
	// Property enablePublic: Whether to enable the public endpoint.
	EnablePublic interface{} `field:"optional" json:"enablePublic" yaml:"enablePublic"`
	// Property environmentId: The ID of the runtime environment.
	EnvironmentId interface{} `field:"optional" json:"environmentId" yaml:"environmentId"`
	// Property fusion: Whether to enable acceleration with the Fusion engine.
	Fusion interface{} `field:"optional" json:"fusion" yaml:"fusion"`
	// Property livyServerConf: The Livy Gateway configuration.
	//
	// The value must be a JSON-formatted string that supports sparkDefaultsConf, sparkBlackListConf, livyConf, and livyClientConf.
	LivyServerConf interface{} `field:"optional" json:"livyServerConf" yaml:"livyServerConf"`
	// Property networkName: The name of the network connection.
	NetworkName interface{} `field:"optional" json:"networkName" yaml:"networkName"`
	// Property releaseVersion: The deprecated Spark engine version.
	//
	// Use DisplayReleaseVersion instead.
	ReleaseVersion interface{} `field:"optional" json:"releaseVersion" yaml:"releaseVersion"`
}

