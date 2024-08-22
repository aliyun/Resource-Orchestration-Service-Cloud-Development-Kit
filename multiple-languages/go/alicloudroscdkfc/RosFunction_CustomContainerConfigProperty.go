package alicloudroscdkfc


type RosFunction_CustomContainerConfigProperty struct {
	Image interface{} `field:"required" json:"image" yaml:"image"`
	AccelerationType interface{} `field:"optional" json:"accelerationType" yaml:"accelerationType"`
	Args interface{} `field:"optional" json:"args" yaml:"args"`
	Command interface{} `field:"optional" json:"command" yaml:"command"`
	InstanceId interface{} `field:"optional" json:"instanceId" yaml:"instanceId"`
	WebServerMode interface{} `field:"optional" json:"webServerMode" yaml:"webServerMode"`
}

