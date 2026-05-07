package alicloudroscdkagentrun


// Properties for defining a `RosTemplate`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-agentrun-template
type RosTemplateProps struct {
	TemplateName interface{} `field:"required" json:"templateName" yaml:"templateName"`
	AllowAnonymousManage interface{} `field:"optional" json:"allowAnonymousManage" yaml:"allowAnonymousManage"`
	ArmsConfiguration interface{} `field:"optional" json:"armsConfiguration" yaml:"armsConfiguration"`
	ContainerConfiguration interface{} `field:"optional" json:"containerConfiguration" yaml:"containerConfiguration"`
	Cpu interface{} `field:"optional" json:"cpu" yaml:"cpu"`
	CredentialConfiguration interface{} `field:"optional" json:"credentialConfiguration" yaml:"credentialConfiguration"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	DiskSize interface{} `field:"optional" json:"diskSize" yaml:"diskSize"`
	EnableAgent interface{} `field:"optional" json:"enableAgent" yaml:"enableAgent"`
	EnvironmentVariables interface{} `field:"optional" json:"environmentVariables" yaml:"environmentVariables"`
	ExecutionRoleArn interface{} `field:"optional" json:"executionRoleArn" yaml:"executionRoleArn"`
	LogConfiguration interface{} `field:"optional" json:"logConfiguration" yaml:"logConfiguration"`
	Memory interface{} `field:"optional" json:"memory" yaml:"memory"`
	NasConfig interface{} `field:"optional" json:"nasConfig" yaml:"nasConfig"`
	NetworkConfiguration interface{} `field:"optional" json:"networkConfiguration" yaml:"networkConfiguration"`
	OssConfiguration interface{} `field:"optional" json:"ossConfiguration" yaml:"ossConfiguration"`
	SandboxIdleTimeoutInSeconds interface{} `field:"optional" json:"sandboxIdleTimeoutInSeconds" yaml:"sandboxIdleTimeoutInSeconds"`
	TemplateConfiguration interface{} `field:"optional" json:"templateConfiguration" yaml:"templateConfiguration"`
	TemplateType interface{} `field:"optional" json:"templateType" yaml:"templateType"`
	WorkspaceId interface{} `field:"optional" json:"workspaceId" yaml:"workspaceId"`
}

