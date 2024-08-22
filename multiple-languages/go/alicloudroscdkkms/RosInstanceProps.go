package alicloudroscdkkms


// Properties for defining a `RosInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-instance
type RosInstanceProps struct {
	ProductVersion interface{} `field:"required" json:"productVersion" yaml:"productVersion"`
	Connection interface{} `field:"optional" json:"connection" yaml:"connection"`
	InstanceChargeType interface{} `field:"optional" json:"instanceChargeType" yaml:"instanceChargeType"`
	KeyNum interface{} `field:"optional" json:"keyNum" yaml:"keyNum"`
	Log interface{} `field:"optional" json:"log" yaml:"log"`
	LogStorage interface{} `field:"optional" json:"logStorage" yaml:"logStorage"`
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	PeriodUnit interface{} `field:"optional" json:"periodUnit" yaml:"periodUnit"`
	RenewPeriod interface{} `field:"optional" json:"renewPeriod" yaml:"renewPeriod"`
	RenewStatus interface{} `field:"optional" json:"renewStatus" yaml:"renewStatus"`
	SecretNum interface{} `field:"optional" json:"secretNum" yaml:"secretNum"`
	Spec interface{} `field:"optional" json:"spec" yaml:"spec"`
	VpcNum interface{} `field:"optional" json:"vpcNum" yaml:"vpcNum"`
}

