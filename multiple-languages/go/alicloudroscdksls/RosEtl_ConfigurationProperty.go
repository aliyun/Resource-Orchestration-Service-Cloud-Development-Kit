package alicloudroscdksls


type RosEtl_ConfigurationProperty struct {
	Logstore interface{} `field:"required" json:"logstore" yaml:"logstore"`
	Script interface{} `field:"required" json:"script" yaml:"script"`
	Sinks interface{} `field:"required" json:"sinks" yaml:"sinks"`
	FromTime interface{} `field:"optional" json:"fromTime" yaml:"fromTime"`
	Parameters interface{} `field:"optional" json:"parameters" yaml:"parameters"`
	RoleArn interface{} `field:"optional" json:"roleArn" yaml:"roleArn"`
	ToTime interface{} `field:"optional" json:"toTime" yaml:"toTime"`
	Version interface{} `field:"optional" json:"version" yaml:"version"`
}

