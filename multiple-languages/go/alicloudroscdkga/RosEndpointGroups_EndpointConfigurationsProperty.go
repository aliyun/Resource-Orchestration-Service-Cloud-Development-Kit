package alicloudroscdkga


type RosEndpointGroups_EndpointConfigurationsProperty struct {
	Endpoint interface{} `field:"required" json:"endpoint" yaml:"endpoint"`
	Type interface{} `field:"required" json:"type" yaml:"type"`
	Weight interface{} `field:"required" json:"weight" yaml:"weight"`
	SubAddress interface{} `field:"optional" json:"subAddress" yaml:"subAddress"`
}

