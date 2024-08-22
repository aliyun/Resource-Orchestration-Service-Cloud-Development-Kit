package alicloudroscdkess


type RosScalingGroup_ServerGroupsProperty struct {
	Port interface{} `field:"required" json:"port" yaml:"port"`
	ServerGroupId interface{} `field:"required" json:"serverGroupId" yaml:"serverGroupId"`
	Type interface{} `field:"required" json:"type" yaml:"type"`
	Weight interface{} `field:"required" json:"weight" yaml:"weight"`
}

