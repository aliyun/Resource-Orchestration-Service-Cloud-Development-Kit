package alicloudroscdksls


type RosOssExport_ConfigurationProperty struct {
	Logstore interface{} `field:"required" json:"logstore" yaml:"logstore"`
	RoleArn interface{} `field:"required" json:"roleArn" yaml:"roleArn"`
	Sink interface{} `field:"required" json:"sink" yaml:"sink"`
	FromTime interface{} `field:"optional" json:"fromTime" yaml:"fromTime"`
	ToTime interface{} `field:"optional" json:"toTime" yaml:"toTime"`
}

