package alicloudroscdkemr


type RosClusterServiceConfigs_ServiceConfigsProperty struct {
	ConfigParams interface{} `field:"required" json:"configParams" yaml:"configParams"`
	ServiceName interface{} `field:"required" json:"serviceName" yaml:"serviceName"`
	Comment interface{} `field:"optional" json:"comment" yaml:"comment"`
	ConfigType interface{} `field:"optional" json:"configType" yaml:"configType"`
	CustomConfigParams interface{} `field:"optional" json:"customConfigParams" yaml:"customConfigParams"`
	GatewayClusterIdList interface{} `field:"optional" json:"gatewayClusterIdList" yaml:"gatewayClusterIdList"`
	GroupId interface{} `field:"optional" json:"groupId" yaml:"groupId"`
	HostInstanceId interface{} `field:"optional" json:"hostInstanceId" yaml:"hostInstanceId"`
	RefreshHostConfig interface{} `field:"optional" json:"refreshHostConfig" yaml:"refreshHostConfig"`
}

