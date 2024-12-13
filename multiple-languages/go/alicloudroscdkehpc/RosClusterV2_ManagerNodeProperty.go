package alicloudroscdkehpc


type RosClusterV2_ManagerNodeProperty struct {
	ImageId interface{} `field:"required" json:"imageId" yaml:"imageId"`
	InstanceType interface{} `field:"required" json:"instanceType" yaml:"instanceType"`
	SystemDisk interface{} `field:"required" json:"systemDisk" yaml:"systemDisk"`
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	AutoRenewPeriod interface{} `field:"optional" json:"autoRenewPeriod" yaml:"autoRenewPeriod"`
	DataDisks interface{} `field:"optional" json:"dataDisks" yaml:"dataDisks"`
	EnableHt interface{} `field:"optional" json:"enableHt" yaml:"enableHt"`
	InstanceChargeType interface{} `field:"optional" json:"instanceChargeType" yaml:"instanceChargeType"`
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	PeriodUnit interface{} `field:"optional" json:"periodUnit" yaml:"periodUnit"`
}

