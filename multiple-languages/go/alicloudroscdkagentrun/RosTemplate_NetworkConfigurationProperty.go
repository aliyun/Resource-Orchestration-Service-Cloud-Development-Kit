package alicloudroscdkagentrun


type RosTemplate_NetworkConfigurationProperty struct {
	NetworkMode interface{} `field:"required" json:"networkMode" yaml:"networkMode"`
	SecurityGroupId interface{} `field:"optional" json:"securityGroupId" yaml:"securityGroupId"`
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	VSwitchIds interface{} `field:"optional" json:"vSwitchIds" yaml:"vSwitchIds"`
}

