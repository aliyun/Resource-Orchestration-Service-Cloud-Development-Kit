package alicloudroscdkfc


type RosService_VpcConfigProperty struct {
	SecurityGroupId interface{} `field:"required" json:"securityGroupId" yaml:"securityGroupId"`
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	VSwitchIds interface{} `field:"required" json:"vSwitchIds" yaml:"vSwitchIds"`
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

