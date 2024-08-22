package alicloudroscdkswas


// Properties for defining a `RosInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-swas-instance
type RosInstanceProps struct {
	ImageId interface{} `field:"required" json:"imageId" yaml:"imageId"`
	Period interface{} `field:"required" json:"period" yaml:"period"`
	PlanId interface{} `field:"required" json:"planId" yaml:"planId"`
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	AutoRenewPeriod interface{} `field:"optional" json:"autoRenewPeriod" yaml:"autoRenewPeriod"`
	DataDiskSize interface{} `field:"optional" json:"dataDiskSize" yaml:"dataDiskSize"`
}

