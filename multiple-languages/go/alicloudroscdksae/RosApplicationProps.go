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
	AppDescription interface{} `field:"optional" json:"appDescription" yaml:"appDescription"`
	Command interface{} `field:"optional" json:"command" yaml:"command"`
	CommandArgs interface{} `field:"optional" json:"commandArgs" yaml:"commandArgs"`
	CustomHostAlias interface{} `field:"optional" json:"customHostAlias" yaml:"customHostAlias"`
	Deploy interface{} `field:"optional" json:"deploy" yaml:"deploy"`
	EdasContainerVersion interface{} `field:"optional" json:"edasContainerVersion" yaml:"edasContainerVersion"`
	Envs interface{} `field:"optional" json:"envs" yaml:"envs"`
	ImageUrl interface{} `field:"optional" json:"imageUrl" yaml:"imageUrl"`
	JarStartArgs interface{} `field:"optional" json:"jarStartArgs" yaml:"jarStartArgs"`
	JarStartOptions interface{} `field:"optional" json:"jarStartOptions" yaml:"jarStartOptions"`
	Jdk interface{} `field:"optional" json:"jdk" yaml:"jdk"`
	Liveness interface{} `field:"optional" json:"liveness" yaml:"liveness"`
	MountDesc interface{} `field:"optional" json:"mountDesc" yaml:"mountDesc"`
	MountHost interface{} `field:"optional" json:"mountHost" yaml:"mountHost"`
	NasId interface{} `field:"optional" json:"nasId" yaml:"nasId"`
	PackageUrl interface{} `field:"optional" json:"packageUrl" yaml:"packageUrl"`
	PackageVersion interface{} `field:"optional" json:"packageVersion" yaml:"packageVersion"`
	PostStart interface{} `field:"optional" json:"postStart" yaml:"postStart"`
	PreStop interface{} `field:"optional" json:"preStop" yaml:"preStop"`
	Readiness interface{} `field:"optional" json:"readiness" yaml:"readiness"`
	SecurityGroupId interface{} `field:"optional" json:"securityGroupId" yaml:"securityGroupId"`
	SlsConfigs interface{} `field:"optional" json:"slsConfigs" yaml:"slsConfigs"`
	Tags *[]*RosApplication_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	Timezone interface{} `field:"optional" json:"timezone" yaml:"timezone"`
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
	WarStartOptions interface{} `field:"optional" json:"warStartOptions" yaml:"warStartOptions"`
	WebContainer interface{} `field:"optional" json:"webContainer" yaml:"webContainer"`
}

