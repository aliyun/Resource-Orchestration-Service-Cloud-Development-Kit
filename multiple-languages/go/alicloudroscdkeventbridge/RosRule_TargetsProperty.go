package alicloudroscdkeventbridge


type RosRule_TargetsProperty struct {
	Endpoint interface{} `field:"required" json:"endpoint" yaml:"endpoint"`
	Id interface{} `field:"required" json:"id" yaml:"id"`
	ParamList interface{} `field:"required" json:"paramList" yaml:"paramList"`
	Type interface{} `field:"required" json:"type" yaml:"type"`
	PushRetryStrategy interface{} `field:"optional" json:"pushRetryStrategy" yaml:"pushRetryStrategy"`
}

