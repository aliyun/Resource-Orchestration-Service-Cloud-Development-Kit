package alicloudroscdkswas


// Properties for defining a `RosInstances`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-swas-instances
type RosInstancesProps struct {
	ImageId interface{} `field:"required" json:"imageId" yaml:"imageId"`
	Period interface{} `field:"required" json:"period" yaml:"period"`
	PlanId interface{} `field:"required" json:"planId" yaml:"planId"`
	Amount interface{} `field:"optional" json:"amount" yaml:"amount"`
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	AutoRenewPeriod interface{} `field:"optional" json:"autoRenewPeriod" yaml:"autoRenewPeriod"`
	DataDiskSize interface{} `field:"optional" json:"dataDiskSize" yaml:"dataDiskSize"`
}

