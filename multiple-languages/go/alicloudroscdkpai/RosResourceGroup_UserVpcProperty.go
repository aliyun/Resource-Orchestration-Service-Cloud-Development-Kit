package alicloudroscdkpai


type RosResourceGroup_UserVpcProperty struct {
	SecurityGroupId interface{} `field:"required" json:"securityGroupId" yaml:"securityGroupId"`
	SwitchId interface{} `field:"required" json:"switchId" yaml:"switchId"`
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	DefaultForwardInfo interface{} `field:"optional" json:"defaultForwardInfo" yaml:"defaultForwardInfo"`
	DefaultRoute interface{} `field:"optional" json:"defaultRoute" yaml:"defaultRoute"`
	ExtendedCidRs interface{} `field:"optional" json:"extendedCidRs" yaml:"extendedCidRs"`
	RoleArn interface{} `field:"optional" json:"roleArn" yaml:"roleArn"`
}

