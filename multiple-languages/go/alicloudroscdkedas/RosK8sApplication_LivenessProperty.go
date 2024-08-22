package alicloudroscdkedas


type RosK8sApplication_LivenessProperty struct {
	Exec interface{} `field:"optional" json:"exec" yaml:"exec"`
	FailureThreshold interface{} `field:"optional" json:"failureThreshold" yaml:"failureThreshold"`
	HttpGet interface{} `field:"optional" json:"httpGet" yaml:"httpGet"`
	InitialDelaySeconds interface{} `field:"optional" json:"initialDelaySeconds" yaml:"initialDelaySeconds"`
	PeriodSeconds interface{} `field:"optional" json:"periodSeconds" yaml:"periodSeconds"`
	SuccessThreshold interface{} `field:"optional" json:"successThreshold" yaml:"successThreshold"`
	TcpSocket interface{} `field:"optional" json:"tcpSocket" yaml:"tcpSocket"`
	TimeoutSeconds interface{} `field:"optional" json:"timeoutSeconds" yaml:"timeoutSeconds"`
}

