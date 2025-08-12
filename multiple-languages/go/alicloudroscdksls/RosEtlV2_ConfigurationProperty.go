package alicloudroscdksls


type RosEtlV2_ConfigurationProperty struct {
	Logstore interface{} `field:"required" json:"logstore" yaml:"logstore"`
	RoleArn interface{} `field:"required" json:"roleArn" yaml:"roleArn"`
	Script interface{} `field:"required" json:"script" yaml:"script"`
	Sinks interface{} `field:"required" json:"sinks" yaml:"sinks"`
	FromTime interface{} `field:"optional" json:"fromTime" yaml:"fromTime"`
	Lang interface{} `field:"optional" json:"lang" yaml:"lang"`
	Parameters interface{} `field:"optional" json:"parameters" yaml:"parameters"`
	ToTime interface{} `field:"optional" json:"toTime" yaml:"toTime"`
}

