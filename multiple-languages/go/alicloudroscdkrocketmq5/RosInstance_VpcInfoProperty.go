package alicloudroscdkrocketmq5


type RosInstance_VpcInfoProperty struct {
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	SecurityGroupId interface{} `field:"optional" json:"securityGroupId" yaml:"securityGroupId"`
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
	VSwitchIds interface{} `field:"optional" json:"vSwitchIds" yaml:"vSwitchIds"`
}

