package alicloudroscdkswas


// Properties for defining a `Instances`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-swas-instances
type InstancesProps struct {
	// Property imageId: The image ID.
	//
	// You can call the ListImages operation to query the available images in the specified region.
	ImageId interface{} `field:"required" json:"imageId" yaml:"imageId"`
	// Property period: The subscription period of the servers.
	//
	// Unit: months. Valid values: 1, 3, 6, 12, 24, and 36.
	Period interface{} `field:"required" json:"period" yaml:"period"`
	// Property planId: The plan ID.
	//
	// You can call the ListPlans operation to query all plans provided by Simple Application Server in the specified region.
	PlanId interface{} `field:"required" json:"planId" yaml:"planId"`
	// Property amount: The number of simple application servers that you want to create.
	//
	// Valid values: 1 to 20.
	// Default value: 1.
	Amount interface{} `field:"optional" json:"amount" yaml:"amount"`
	// Property autoRenew: Specifies whether to enable auto-renewal.
	//
	// Valid values:
	// true
	// false
	// Default value: false.
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	// Property autoRenewPeriod: The auto-renewal period.
	//
	// This parameter is required only when you set AutoRenew to true. Unit: months. Valid values: 1, 3, 6, 12, 24, and 36.
	AutoRenewPeriod interface{} `field:"optional" json:"autoRenewPeriod" yaml:"autoRenewPeriod"`
	// Property dataDiskSize: The size of the data disk that is attached to the server.
	//
	// Unit: GB. Valid values: 0 to 16380. The value must be an integral multiple of 20.
	// A value of 0 indicates that no data disk is attached.
	// If the disk included in the specified plan is a standard SSD, the data disk must be 20 GB or larger in size.
	// Default value: 0.
	DataDiskSize interface{} `field:"optional" json:"dataDiskSize" yaml:"dataDiskSize"`
}

