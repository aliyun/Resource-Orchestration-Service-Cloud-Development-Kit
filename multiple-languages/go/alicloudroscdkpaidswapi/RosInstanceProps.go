package alicloudroscdkpaidswapi


// Properties for defining a `RosInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paidswapi-instance
type RosInstanceProps struct {
	EcsSpec interface{} `field:"required" json:"ecsSpec" yaml:"ecsSpec"`
	ImageUrl interface{} `field:"required" json:"imageUrl" yaml:"imageUrl"`
	InstanceName interface{} `field:"required" json:"instanceName" yaml:"instanceName"`
	Accessibility interface{} `field:"optional" json:"accessibility" yaml:"accessibility"`
	Datasets interface{} `field:"optional" json:"datasets" yaml:"datasets"`
	EnvironmentVariables interface{} `field:"optional" json:"environmentVariables" yaml:"environmentVariables"`
	Labels interface{} `field:"optional" json:"labels" yaml:"labels"`
	SaveImage interface{} `field:"optional" json:"saveImage" yaml:"saveImage"`
	UserVpc interface{} `field:"optional" json:"userVpc" yaml:"userVpc"`
	WorkspaceId interface{} `field:"optional" json:"workspaceId" yaml:"workspaceId"`
}

