package alicloudroscdknlb


type RosServerGroup_HealthCheckConfigProperty struct {
	HttpCheckMethod interface{} `field:"required" json:"httpCheckMethod" yaml:"httpCheckMethod"`
	HealthCheckConnectPort interface{} `field:"optional" json:"healthCheckConnectPort" yaml:"healthCheckConnectPort"`
	HealthCheckConnectTimeout interface{} `field:"optional" json:"healthCheckConnectTimeout" yaml:"healthCheckConnectTimeout"`
	HealthCheckDomain interface{} `field:"optional" json:"healthCheckDomain" yaml:"healthCheckDomain"`
	HealthCheckEnabled interface{} `field:"optional" json:"healthCheckEnabled" yaml:"healthCheckEnabled"`
	HealthCheckHttpCode interface{} `field:"optional" json:"healthCheckHttpCode" yaml:"healthCheckHttpCode"`
	HealthCheckInterval interface{} `field:"optional" json:"healthCheckInterval" yaml:"healthCheckInterval"`
	HealthCheckType interface{} `field:"optional" json:"healthCheckType" yaml:"healthCheckType"`
	HealthCheckUrl interface{} `field:"optional" json:"healthCheckUrl" yaml:"healthCheckUrl"`
	HealthyThreshold interface{} `field:"optional" json:"healthyThreshold" yaml:"healthyThreshold"`
	UnhealthyThreshold interface{} `field:"optional" json:"unhealthyThreshold" yaml:"unhealthyThreshold"`
}

