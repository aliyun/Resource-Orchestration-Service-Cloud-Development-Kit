package alicloudroscdkfc3


type RosFunction_CustomContainerConfigProperty struct {
	AccelerationInfo interface{} `field:"optional" json:"accelerationInfo" yaml:"accelerationInfo"`
	AccelerationType interface{} `field:"optional" json:"accelerationType" yaml:"accelerationType"`
	AcrInstanceId interface{} `field:"optional" json:"acrInstanceId" yaml:"acrInstanceId"`
	Command interface{} `field:"optional" json:"command" yaml:"command"`
	Entrypoint interface{} `field:"optional" json:"entrypoint" yaml:"entrypoint"`
	HealthCheckConfig interface{} `field:"optional" json:"healthCheckConfig" yaml:"healthCheckConfig"`
	Image interface{} `field:"optional" json:"image" yaml:"image"`
	Port interface{} `field:"optional" json:"port" yaml:"port"`
	ResolvedImageUri interface{} `field:"optional" json:"resolvedImageUri" yaml:"resolvedImageUri"`
}

