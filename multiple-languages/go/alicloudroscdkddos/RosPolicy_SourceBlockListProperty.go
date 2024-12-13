package alicloudroscdkddos


type RosPolicy_SourceBlockListProperty struct {
	BlockExpireSeconds interface{} `field:"required" json:"blockExpireSeconds" yaml:"blockExpireSeconds"`
	EverySeconds interface{} `field:"required" json:"everySeconds" yaml:"everySeconds"`
	ExceedLimitTimes interface{} `field:"required" json:"exceedLimitTimes" yaml:"exceedLimitTimes"`
	Type interface{} `field:"required" json:"type" yaml:"type"`
}

