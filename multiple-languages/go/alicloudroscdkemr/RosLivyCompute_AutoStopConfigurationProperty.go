package alicloudroscdkemr


type RosLivyCompute_AutoStopConfigurationProperty struct {
	Enable interface{} `field:"required" json:"enable" yaml:"enable"`
	IdleTimeoutMinutes interface{} `field:"optional" json:"idleTimeoutMinutes" yaml:"idleTimeoutMinutes"`
}

