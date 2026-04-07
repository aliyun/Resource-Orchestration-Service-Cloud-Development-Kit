package alicloudroscdkecs


type RosLaunchTemplateVersion_NetworkInterfacesProperty struct {
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	InstanceType interface{} `field:"optional" json:"instanceType" yaml:"instanceType"`
	NetworkInterfaceName interface{} `field:"optional" json:"networkInterfaceName" yaml:"networkInterfaceName"`
	NetworkInterfaceTrafficMode interface{} `field:"optional" json:"networkInterfaceTrafficMode" yaml:"networkInterfaceTrafficMode"`
	PrimaryIpAddress interface{} `field:"optional" json:"primaryIpAddress" yaml:"primaryIpAddress"`
	SecurityGroupId interface{} `field:"optional" json:"securityGroupId" yaml:"securityGroupId"`
	SecurityGroupIds interface{} `field:"optional" json:"securityGroupIds" yaml:"securityGroupIds"`
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
}

