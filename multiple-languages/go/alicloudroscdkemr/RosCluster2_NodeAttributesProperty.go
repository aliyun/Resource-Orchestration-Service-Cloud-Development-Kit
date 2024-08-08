package alicloudroscdkemr


type RosCluster2_NodeAttributesProperty struct {
	SecurityGroupId interface{} `field:"required" json:"securityGroupId" yaml:"securityGroupId"`
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	ZoneId interface{} `field:"required" json:"zoneId" yaml:"zoneId"`
	KeyPairName interface{} `field:"optional" json:"keyPairName" yaml:"keyPairName"`
	MasterRootPassword interface{} `field:"optional" json:"masterRootPassword" yaml:"masterRootPassword"`
	RamRole interface{} `field:"optional" json:"ramRole" yaml:"ramRole"`
}

