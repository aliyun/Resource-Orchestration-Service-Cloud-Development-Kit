package alicloudroscdkslb


type RosBackendServerAttachment_BackendServersProperty struct {
	ServerId interface{} `field:"required" json:"serverId" yaml:"serverId"`
	Weight interface{} `field:"required" json:"weight" yaml:"weight"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	ServerIp interface{} `field:"optional" json:"serverIp" yaml:"serverIp"`
	Type interface{} `field:"optional" json:"type" yaml:"type"`
}

