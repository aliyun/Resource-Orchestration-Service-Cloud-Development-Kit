package alicloudroscdkslb


type RosRule_AdvancedSettingsProperty struct {
	Cookie interface{} `field:"optional" json:"cookie" yaml:"cookie"`
	CookieTimeout interface{} `field:"optional" json:"cookieTimeout" yaml:"cookieTimeout"`
	HealthCheck interface{} `field:"optional" json:"healthCheck" yaml:"healthCheck"`
	HealthCheckConnectPort interface{} `field:"optional" json:"healthCheckConnectPort" yaml:"healthCheckConnectPort"`
	HealthCheckDomain interface{} `field:"optional" json:"healthCheckDomain" yaml:"healthCheckDomain"`
	HealthCheckHttpCode interface{} `field:"optional" json:"healthCheckHttpCode" yaml:"healthCheckHttpCode"`
	HealthCheckInterval interface{} `field:"optional" json:"healthCheckInterval" yaml:"healthCheckInterval"`
	HealthCheckTimeout interface{} `field:"optional" json:"healthCheckTimeout" yaml:"healthCheckTimeout"`
	HealthCheckUri interface{} `field:"optional" json:"healthCheckUri" yaml:"healthCheckUri"`
	HealthyThreshold interface{} `field:"optional" json:"healthyThreshold" yaml:"healthyThreshold"`
	ListenerSync interface{} `field:"optional" json:"listenerSync" yaml:"listenerSync"`
	Scheduler interface{} `field:"optional" json:"scheduler" yaml:"scheduler"`
	StickySession interface{} `field:"optional" json:"stickySession" yaml:"stickySession"`
	StickySessionType interface{} `field:"optional" json:"stickySessionType" yaml:"stickySessionType"`
	UnhealthyThreshold interface{} `field:"optional" json:"unhealthyThreshold" yaml:"unhealthyThreshold"`
}

