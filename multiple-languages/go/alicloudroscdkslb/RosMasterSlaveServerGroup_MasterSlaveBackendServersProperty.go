package alicloudroscdkslb


type RosMasterSlaveServerGroup_MasterSlaveBackendServersProperty struct {
	Port interface{} `field:"required" json:"port" yaml:"port"`
	ServerId interface{} `field:"required" json:"serverId" yaml:"serverId"`
	Weight interface{} `field:"required" json:"weight" yaml:"weight"`
	ServerIp interface{} `field:"optional" json:"serverIp" yaml:"serverIp"`
	ServerType interface{} `field:"optional" json:"serverType" yaml:"serverType"`
	Type interface{} `field:"optional" json:"type" yaml:"type"`
}

