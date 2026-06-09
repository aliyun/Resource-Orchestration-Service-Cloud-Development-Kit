package alicloudroscdkapig


type RosHttpApi_DeployConfigsProperty struct {
	AutoDeploy interface{} `field:"optional" json:"autoDeploy" yaml:"autoDeploy"`
	BackendScene interface{} `field:"optional" json:"backendScene" yaml:"backendScene"`
	CustomDomainIds interface{} `field:"optional" json:"customDomainIds" yaml:"customDomainIds"`
	CustomDomainInfos interface{} `field:"optional" json:"customDomainInfos" yaml:"customDomainInfos"`
	EnvironmentId interface{} `field:"optional" json:"environmentId" yaml:"environmentId"`
	GatewayId interface{} `field:"optional" json:"gatewayId" yaml:"gatewayId"`
	GatewayInfo interface{} `field:"optional" json:"gatewayInfo" yaml:"gatewayInfo"`
	GatewayType interface{} `field:"optional" json:"gatewayType" yaml:"gatewayType"`
	Mock interface{} `field:"optional" json:"mock" yaml:"mock"`
	PolicyConfigs interface{} `field:"optional" json:"policyConfigs" yaml:"policyConfigs"`
	RouteBackend interface{} `field:"optional" json:"routeBackend" yaml:"routeBackend"`
	ServiceConfigs interface{} `field:"optional" json:"serviceConfigs" yaml:"serviceConfigs"`
	SubDomains interface{} `field:"optional" json:"subDomains" yaml:"subDomains"`
}

