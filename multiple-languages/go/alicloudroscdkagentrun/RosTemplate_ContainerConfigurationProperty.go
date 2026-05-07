package alicloudroscdkagentrun


type RosTemplate_ContainerConfigurationProperty struct {
	ImageRegistryType interface{} `field:"required" json:"imageRegistryType" yaml:"imageRegistryType"`
	AcrInstanceId interface{} `field:"optional" json:"acrInstanceId" yaml:"acrInstanceId"`
	Command interface{} `field:"optional" json:"command" yaml:"command"`
	Image interface{} `field:"optional" json:"image" yaml:"image"`
	Port interface{} `field:"optional" json:"port" yaml:"port"`
}

