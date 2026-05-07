package alicloudroscdkagentrun


// Properties for defining a `Template`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-agentrun-template
type TemplateProps struct {
	// Property templateName: The name of the template.
	TemplateName interface{} `field:"required" json:"templateName" yaml:"templateName"`
	// Property allowAnonymousManage: Whether to allow anonymous management.
	AllowAnonymousManage interface{} `field:"optional" json:"allowAnonymousManage" yaml:"allowAnonymousManage"`
	// Property armsConfiguration: The ARMS configuration.
	ArmsConfiguration interface{} `field:"optional" json:"armsConfiguration" yaml:"armsConfiguration"`
	// Property containerConfiguration: The container configuration.
	//
	// Only images based on Browser\/Code Interpreter base images are allowed.
	ContainerConfiguration interface{} `field:"optional" json:"containerConfiguration" yaml:"containerConfiguration"`
	// Property cpu: The CPU resource configuration (unit: cores).
	Cpu interface{} `field:"optional" json:"cpu" yaml:"cpu"`
	// Property credentialConfiguration: The credential configuration.
	CredentialConfiguration interface{} `field:"optional" json:"credentialConfiguration" yaml:"credentialConfiguration"`
	// Property description: The description of the template.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property diskSize: The disk size (unit: MB).
	DiskSize interface{} `field:"optional" json:"diskSize" yaml:"diskSize"`
	// Property enableAgent: Whether to enable the sandbox agent.
	EnableAgent interface{} `field:"optional" json:"enableAgent" yaml:"enableAgent"`
	// Property environmentVariables: The environment variables.
	EnvironmentVariables interface{} `field:"optional" json:"environmentVariables" yaml:"environmentVariables"`
	// Property executionRoleArn: The execution role ARN.
	ExecutionRoleArn interface{} `field:"optional" json:"executionRoleArn" yaml:"executionRoleArn"`
	// Property logConfiguration: The log configuration.
	LogConfiguration interface{} `field:"optional" json:"logConfiguration" yaml:"logConfiguration"`
	// Property memory: The memory resource configuration (unit: MB).
	Memory interface{} `field:"optional" json:"memory" yaml:"memory"`
	// Property nasConfig: The NAS configuration.
	NasConfig interface{} `field:"optional" json:"nasConfig" yaml:"nasConfig"`
	// Property networkConfiguration: The network configuration.
	NetworkConfiguration interface{} `field:"optional" json:"networkConfiguration" yaml:"networkConfiguration"`
	// Property ossConfiguration: The OSS configuration.
	OssConfiguration interface{} `field:"optional" json:"ossConfiguration" yaml:"ossConfiguration"`
	// Property sandboxIdleTimeoutInSeconds: The sandbox idle timeout in seconds.
	SandboxIdleTimeoutInSeconds interface{} `field:"optional" json:"sandboxIdleTimeoutInSeconds" yaml:"sandboxIdleTimeoutInSeconds"`
	// Property templateConfiguration: The template configuration (flexible object structure, varies by templateType).
	TemplateConfiguration interface{} `field:"optional" json:"templateConfiguration" yaml:"templateConfiguration"`
	// Property templateType: The type of the template.
	TemplateType interface{} `field:"optional" json:"templateType" yaml:"templateType"`
	// Property workspaceId: The workspace ID.
	WorkspaceId interface{} `field:"optional" json:"workspaceId" yaml:"workspaceId"`
}

