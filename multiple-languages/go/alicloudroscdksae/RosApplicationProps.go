package alicloudroscdksae


// Properties for defining a `RosApplication`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-application
type RosApplicationProps struct {
	AppName interface{} `field:"required" json:"appName" yaml:"appName"`
	Cpu interface{} `field:"required" json:"cpu" yaml:"cpu"`
	Memory interface{} `field:"required" json:"memory" yaml:"memory"`
	NamespaceId interface{} `field:"required" json:"namespaceId" yaml:"namespaceId"`
	PackageType interface{} `field:"required" json:"packageType" yaml:"packageType"`
	Replicas interface{} `field:"required" json:"replicas" yaml:"replicas"`
	AcrAssumeRoleArn interface{} `field:"optional" json:"acrAssumeRoleArn" yaml:"acrAssumeRoleArn"`
	AcrInstanceId interface{} `field:"optional" json:"acrInstanceId" yaml:"acrInstanceId"`
	AppDescription interface{} `field:"optional" json:"appDescription" yaml:"appDescription"`
	AppSource interface{} `field:"optional" json:"appSource" yaml:"appSource"`
	AssociateEip interface{} `field:"optional" json:"associateEip" yaml:"associateEip"`
	AutoConfig interface{} `field:"optional" json:"autoConfig" yaml:"autoConfig"`
	BaseAppId interface{} `field:"optional" json:"baseAppId" yaml:"baseAppId"`
	Command interface{} `field:"optional" json:"command" yaml:"command"`
	CommandArgs interface{} `field:"optional" json:"commandArgs" yaml:"commandArgs"`
	ConfigMapMountDesc interface{} `field:"optional" json:"configMapMountDesc" yaml:"configMapMountDesc"`
	CustomHostAlias interface{} `field:"optional" json:"customHostAlias" yaml:"customHostAlias"`
	Deploy interface{} `field:"optional" json:"deploy" yaml:"deploy"`
	EdasContainerVersion interface{} `field:"optional" json:"edasContainerVersion" yaml:"edasContainerVersion"`
	EnableEbpf interface{} `field:"optional" json:"enableEbpf" yaml:"enableEbpf"`
	Envs interface{} `field:"optional" json:"envs" yaml:"envs"`
	ImagePullSecrets interface{} `field:"optional" json:"imagePullSecrets" yaml:"imagePullSecrets"`
	ImageUrl interface{} `field:"optional" json:"imageUrl" yaml:"imageUrl"`
	JarStartArgs interface{} `field:"optional" json:"jarStartArgs" yaml:"jarStartArgs"`
	JarStartOptions interface{} `field:"optional" json:"jarStartOptions" yaml:"jarStartOptions"`
	Jdk interface{} `field:"optional" json:"jdk" yaml:"jdk"`
	KafkaConfigs interface{} `field:"optional" json:"kafkaConfigs" yaml:"kafkaConfigs"`
	Liveness interface{} `field:"optional" json:"liveness" yaml:"liveness"`
	MicroRegistration interface{} `field:"optional" json:"microRegistration" yaml:"microRegistration"`
	MicroRegistrationConfig interface{} `field:"optional" json:"microRegistrationConfig" yaml:"microRegistrationConfig"`
	MountDesc interface{} `field:"optional" json:"mountDesc" yaml:"mountDesc"`
	MountHost interface{} `field:"optional" json:"mountHost" yaml:"mountHost"`
	NasConfigs interface{} `field:"optional" json:"nasConfigs" yaml:"nasConfigs"`
	NasId interface{} `field:"optional" json:"nasId" yaml:"nasId"`
	OssAkId interface{} `field:"optional" json:"ossAkId" yaml:"ossAkId"`
	OssAkSecret interface{} `field:"optional" json:"ossAkSecret" yaml:"ossAkSecret"`
	OssMountDescs interface{} `field:"optional" json:"ossMountDescs" yaml:"ossMountDescs"`
	PackageUrl interface{} `field:"optional" json:"packageUrl" yaml:"packageUrl"`
	PackageVersion interface{} `field:"optional" json:"packageVersion" yaml:"packageVersion"`
	Php interface{} `field:"optional" json:"php" yaml:"php"`
	PhpArmsConfigLocation interface{} `field:"optional" json:"phpArmsConfigLocation" yaml:"phpArmsConfigLocation"`
	PhpConfig interface{} `field:"optional" json:"phpConfig" yaml:"phpConfig"`
	PhpConfigLocation interface{} `field:"optional" json:"phpConfigLocation" yaml:"phpConfigLocation"`
	PostStart interface{} `field:"optional" json:"postStart" yaml:"postStart"`
	PreStop interface{} `field:"optional" json:"preStop" yaml:"preStop"`
	ProgrammingLanguage interface{} `field:"optional" json:"programmingLanguage" yaml:"programmingLanguage"`
	PvtzDiscoverySvc interface{} `field:"optional" json:"pvtzDiscoverySvc" yaml:"pvtzDiscoverySvc"`
	Python interface{} `field:"optional" json:"python" yaml:"python"`
	PythonModules interface{} `field:"optional" json:"pythonModules" yaml:"pythonModules"`
	Readiness interface{} `field:"optional" json:"readiness" yaml:"readiness"`
	SaeVersion interface{} `field:"optional" json:"saeVersion" yaml:"saeVersion"`
	SecurityGroupId interface{} `field:"optional" json:"securityGroupId" yaml:"securityGroupId"`
	ServiceTags interface{} `field:"optional" json:"serviceTags" yaml:"serviceTags"`
	SlsConfigs interface{} `field:"optional" json:"slsConfigs" yaml:"slsConfigs"`
	Tags *[]*RosApplication_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	TerminationGracePeriodSeconds interface{} `field:"optional" json:"terminationGracePeriodSeconds" yaml:"terminationGracePeriodSeconds"`
	Timezone interface{} `field:"optional" json:"timezone" yaml:"timezone"`
	TomcatConfig interface{} `field:"optional" json:"tomcatConfig" yaml:"tomcatConfig"`
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
	WarStartOptions interface{} `field:"optional" json:"warStartOptions" yaml:"warStartOptions"`
	WebContainer interface{} `field:"optional" json:"webContainer" yaml:"webContainer"`
}

