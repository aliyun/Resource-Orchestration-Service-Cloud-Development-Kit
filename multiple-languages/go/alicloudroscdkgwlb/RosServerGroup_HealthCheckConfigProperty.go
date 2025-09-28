package alicloudroscdkgwlb


type RosServerGroup_HealthCheckConfigProperty struct {
	HealthCheckConnectPort interface{} `field:"optional" json:"healthCheckConnectPort" yaml:"healthCheckConnectPort"`
	HealthCheckConnectTimeout interface{} `field:"optional" json:"healthCheckConnectTimeout" yaml:"healthCheckConnectTimeout"`
	HealthCheckDomain interface{} `field:"optional" json:"healthCheckDomain" yaml:"healthCheckDomain"`
	HealthCheckEnabled interface{} `field:"optional" json:"healthCheckEnabled" yaml:"healthCheckEnabled"`
	HealthCheckHttpCode interface{} `field:"optional" json:"healthCheckHttpCode" yaml:"healthCheckHttpCode"`
	HealthCheckInterval interface{} `field:"optional" json:"healthCheckInterval" yaml:"healthCheckInterval"`
	HealthCheckPath interface{} `field:"optional" json:"healthCheckPath" yaml:"healthCheckPath"`
	HealthCheckProtocol interface{} `field:"optional" json:"healthCheckProtocol" yaml:"healthCheckProtocol"`
	HealthyThreshold interface{} `field:"optional" json:"healthyThreshold" yaml:"healthyThreshold"`
	UnhealthyThreshold interface{} `field:"optional" json:"unhealthyThreshold" yaml:"unhealthyThreshold"`
}

