package alicloudroscdkslb


type RosVServerGroup_BackendServersProperty struct {
	Port interface{} `field:"required" json:"port" yaml:"port"`
	ServerId interface{} `field:"required" json:"serverId" yaml:"serverId"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	ServerIp interface{} `field:"optional" json:"serverIp" yaml:"serverIp"`
	Type interface{} `field:"optional" json:"type" yaml:"type"`
	Weight interface{} `field:"optional" json:"weight" yaml:"weight"`
}

