package alicloudroscdkapig


type RosRoute_EnvironmentInfoProperty struct {
	EnvironmentId interface{} `field:"required" json:"environmentId" yaml:"environmentId"`
	Alias interface{} `field:"optional" json:"alias" yaml:"alias"`
	GatewayInfo interface{} `field:"optional" json:"gatewayInfo" yaml:"gatewayInfo"`
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	SubDomains interface{} `field:"optional" json:"subDomains" yaml:"subDomains"`
}

