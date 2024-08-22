package alicloudroscdksls


type RosAlert_DetailProperty struct {
	Configuration interface{} `field:"required" json:"configuration" yaml:"configuration"`
	DisplayName interface{} `field:"required" json:"displayName" yaml:"displayName"`
	Name interface{} `field:"required" json:"name" yaml:"name"`
	Schedule interface{} `field:"required" json:"schedule" yaml:"schedule"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	State interface{} `field:"optional" json:"state" yaml:"state"`
	Type interface{} `field:"optional" json:"type" yaml:"type"`
}

