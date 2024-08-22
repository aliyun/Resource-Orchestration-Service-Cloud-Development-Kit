package alicloudroscdkgraphdatabase


type RosDbInstance_EcsSecurityGroupRelationsProperty struct {
	SecurityGroupId interface{} `field:"required" json:"securityGroupId" yaml:"securityGroupId"`
	NetworkType interface{} `field:"optional" json:"networkType" yaml:"networkType"`
	RegionId interface{} `field:"optional" json:"regionId" yaml:"regionId"`
}

