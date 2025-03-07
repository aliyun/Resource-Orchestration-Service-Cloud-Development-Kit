package alicloudroscdknlb


type RosBackendServerAttachment_ServersProperty struct {
	ServerId interface{} `field:"required" json:"serverId" yaml:"serverId"`
	ServerType interface{} `field:"required" json:"serverType" yaml:"serverType"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	Port interface{} `field:"optional" json:"port" yaml:"port"`
	ServerIp interface{} `field:"optional" json:"serverIp" yaml:"serverIp"`
	Weight interface{} `field:"optional" json:"weight" yaml:"weight"`
}

