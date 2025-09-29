package alicloudroscdksae


type RosApplication_InitContainersConfigProperty struct {
	Name interface{} `field:"required" json:"name" yaml:"name"`
	Command interface{} `field:"optional" json:"command" yaml:"command"`
	CommandArgs interface{} `field:"optional" json:"commandArgs" yaml:"commandArgs"`
	ConfigMapMountDesc interface{} `field:"optional" json:"configMapMountDesc" yaml:"configMapMountDesc"`
	Envs interface{} `field:"optional" json:"envs" yaml:"envs"`
	ImageUrl interface{} `field:"optional" json:"imageUrl" yaml:"imageUrl"`
}

