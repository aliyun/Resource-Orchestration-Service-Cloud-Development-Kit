package alicloudroscdkgwlb


type RosServerGroup_ServersProperty struct {
	ServerId interface{} `field:"required" json:"serverId" yaml:"serverId"`
	ServerType interface{} `field:"required" json:"serverType" yaml:"serverType"`
	Port interface{} `field:"optional" json:"port" yaml:"port"`
	ServerIp interface{} `field:"optional" json:"serverIp" yaml:"serverIp"`
}

