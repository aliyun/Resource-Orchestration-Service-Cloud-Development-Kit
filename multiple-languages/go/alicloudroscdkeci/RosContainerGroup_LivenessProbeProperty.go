package alicloudroscdkeci


type RosContainerGroup_LivenessProbeProperty struct {
	ExecCommand interface{} `field:"optional" json:"execCommand" yaml:"execCommand"`
	FailureThreshold interface{} `field:"optional" json:"failureThreshold" yaml:"failureThreshold"`
	HttpGetPath interface{} `field:"optional" json:"httpGetPath" yaml:"httpGetPath"`
	HttpGetPort interface{} `field:"optional" json:"httpGetPort" yaml:"httpGetPort"`
	HttpGetScheme interface{} `field:"optional" json:"httpGetScheme" yaml:"httpGetScheme"`
	InitialDelaySeconds interface{} `field:"optional" json:"initialDelaySeconds" yaml:"initialDelaySeconds"`
	PeriodSeconds interface{} `field:"optional" json:"periodSeconds" yaml:"periodSeconds"`
	SuccessThreshold interface{} `field:"optional" json:"successThreshold" yaml:"successThreshold"`
	TcpSocketPort interface{} `field:"optional" json:"tcpSocketPort" yaml:"tcpSocketPort"`
	TimeoutSeconds interface{} `field:"optional" json:"timeoutSeconds" yaml:"timeoutSeconds"`
}

