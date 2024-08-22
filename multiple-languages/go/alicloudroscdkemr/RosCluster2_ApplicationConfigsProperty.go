package alicloudroscdkemr


type RosCluster2_ApplicationConfigsProperty struct {
	ApplicationName interface{} `field:"required" json:"applicationName" yaml:"applicationName"`
	ConfigFileName interface{} `field:"optional" json:"configFileName" yaml:"configFileName"`
	ConfigItemKey interface{} `field:"optional" json:"configItemKey" yaml:"configItemKey"`
	ConfigItemValue interface{} `field:"optional" json:"configItemValue" yaml:"configItemValue"`
	ConfigScope interface{} `field:"optional" json:"configScope" yaml:"configScope"`
	NodeGroupId interface{} `field:"optional" json:"nodeGroupId" yaml:"nodeGroupId"`
	NodeGroupName interface{} `field:"optional" json:"nodeGroupName" yaml:"nodeGroupName"`
}

