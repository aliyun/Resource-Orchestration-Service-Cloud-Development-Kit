package alicloudroscdkfc


type RosFunction_CustomHealthCheckConfigProperty struct {
	FailureThreshold interface{} `field:"optional" json:"failureThreshold" yaml:"failureThreshold"`
	HttpGetUrl interface{} `field:"optional" json:"httpGetUrl" yaml:"httpGetUrl"`
	InitialDelaySeconds interface{} `field:"optional" json:"initialDelaySeconds" yaml:"initialDelaySeconds"`
	PeriodSeconds interface{} `field:"optional" json:"periodSeconds" yaml:"periodSeconds"`
	SuccessThreshold interface{} `field:"optional" json:"successThreshold" yaml:"successThreshold"`
	TimeoutSeconds interface{} `field:"optional" json:"timeoutSeconds" yaml:"timeoutSeconds"`
}

