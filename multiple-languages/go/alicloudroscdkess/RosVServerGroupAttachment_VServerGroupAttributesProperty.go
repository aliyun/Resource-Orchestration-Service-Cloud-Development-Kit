package alicloudroscdkess


type RosVServerGroupAttachment_VServerGroupAttributesProperty struct {
	Port interface{} `field:"required" json:"port" yaml:"port"`
	VServerGroupId interface{} `field:"required" json:"vServerGroupId" yaml:"vServerGroupId"`
	Weight interface{} `field:"optional" json:"weight" yaml:"weight"`
}

