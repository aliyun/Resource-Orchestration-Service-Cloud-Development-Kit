package alicloudroscdkapig


type RosApiAttachment_ServiceConfigsProperty struct {
	ServiceId interface{} `field:"required" json:"serviceId" yaml:"serviceId"`
	Weight interface{} `field:"required" json:"weight" yaml:"weight"`
	Match interface{} `field:"optional" json:"match" yaml:"match"`
	Port interface{} `field:"optional" json:"port" yaml:"port"`
	Protocol interface{} `field:"optional" json:"protocol" yaml:"protocol"`
	Version interface{} `field:"optional" json:"version" yaml:"version"`
}

