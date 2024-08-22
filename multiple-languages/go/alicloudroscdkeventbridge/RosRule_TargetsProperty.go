package alicloudroscdkeventbridge


type RosRule_TargetsProperty struct {
	Endpoint interface{} `field:"required" json:"endpoint" yaml:"endpoint"`
	Identity interface{} `field:"required" json:"identity" yaml:"identity"`
	ParamList interface{} `field:"required" json:"paramList" yaml:"paramList"`
	Type interface{} `field:"required" json:"type" yaml:"type"`
	PushRetryStrategy interface{} `field:"optional" json:"pushRetryStrategy" yaml:"pushRetryStrategy"`
}

