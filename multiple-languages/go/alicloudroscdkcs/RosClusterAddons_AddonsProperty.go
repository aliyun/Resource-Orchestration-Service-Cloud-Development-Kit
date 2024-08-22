package alicloudroscdkcs


type RosClusterAddons_AddonsProperty struct {
	Name interface{} `field:"required" json:"name" yaml:"name"`
	Config interface{} `field:"optional" json:"config" yaml:"config"`
	Version interface{} `field:"optional" json:"version" yaml:"version"`
}

