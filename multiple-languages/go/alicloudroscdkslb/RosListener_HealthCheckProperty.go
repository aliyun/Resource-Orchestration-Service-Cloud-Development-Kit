package alicloudroscdkslb


type RosListener_HealthCheckProperty struct {
	Domain interface{} `field:"optional" json:"domain" yaml:"domain"`
	Exp interface{} `field:"optional" json:"exp" yaml:"exp"`
	HealthCheckMethod interface{} `field:"optional" json:"healthCheckMethod" yaml:"healthCheckMethod"`
	HealthCheckType interface{} `field:"optional" json:"healthCheckType" yaml:"healthCheckType"`
	HealthyThreshold interface{} `field:"optional" json:"healthyThreshold" yaml:"healthyThreshold"`
	HttpCode interface{} `field:"optional" json:"httpCode" yaml:"httpCode"`
	Interval interface{} `field:"optional" json:"interval" yaml:"interval"`
	Port interface{} `field:"optional" json:"port" yaml:"port"`
	Req interface{} `field:"optional" json:"req" yaml:"req"`
	Switch interface{} `field:"optional" json:"switch" yaml:"switch"`
	Timeout interface{} `field:"optional" json:"timeout" yaml:"timeout"`
	UnhealthyThreshold interface{} `field:"optional" json:"unhealthyThreshold" yaml:"unhealthyThreshold"`
	Uri interface{} `field:"optional" json:"uri" yaml:"uri"`
}

