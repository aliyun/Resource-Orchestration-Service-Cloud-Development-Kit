package alicloudroscdkeventbridge


type RosConnection_NetworkParametersProperty struct {
	NetworkType interface{} `field:"required" json:"networkType" yaml:"networkType"`
	SecurityGroupId interface{} `field:"optional" json:"securityGroupId" yaml:"securityGroupId"`
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	VswitcheId interface{} `field:"optional" json:"vswitcheId" yaml:"vswitcheId"`
}

