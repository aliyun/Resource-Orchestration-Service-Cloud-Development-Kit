package alicloudroscdkpaidlc


type RosJob_UserVpcProperty struct {
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	ExtendedCidRs interface{} `field:"optional" json:"extendedCidRs" yaml:"extendedCidRs"`
	SecurityGroupId interface{} `field:"optional" json:"securityGroupId" yaml:"securityGroupId"`
	SwitchId interface{} `field:"optional" json:"switchId" yaml:"switchId"`
}

