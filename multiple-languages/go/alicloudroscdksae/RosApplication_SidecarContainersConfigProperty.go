package alicloudroscdksae


type RosApplication_SidecarContainersConfigProperty struct {
	Cpu interface{} `field:"required" json:"cpu" yaml:"cpu"`
	Memory interface{} `field:"required" json:"memory" yaml:"memory"`
	Name interface{} `field:"required" json:"name" yaml:"name"`
	AcrInstanceId interface{} `field:"optional" json:"acrInstanceId" yaml:"acrInstanceId"`
	Command interface{} `field:"optional" json:"command" yaml:"command"`
	CommandArgs interface{} `field:"optional" json:"commandArgs" yaml:"commandArgs"`
	ConfigMapMountDesc interface{} `field:"optional" json:"configMapMountDesc" yaml:"configMapMountDesc"`
	EmptyDirDesc interface{} `field:"optional" json:"emptyDirDesc" yaml:"emptyDirDesc"`
	Envs interface{} `field:"optional" json:"envs" yaml:"envs"`
	ImageUrl interface{} `field:"optional" json:"imageUrl" yaml:"imageUrl"`
}

