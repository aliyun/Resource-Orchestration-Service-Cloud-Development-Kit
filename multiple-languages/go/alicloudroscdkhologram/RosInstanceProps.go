package alicloudroscdkhologram


// Properties for defining a `RosInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hologram-instance
type RosInstanceProps struct {
	Endpoints interface{} `field:"required" json:"endpoints" yaml:"endpoints"`
	InstanceName interface{} `field:"required" json:"instanceName" yaml:"instanceName"`
	InstanceType interface{} `field:"required" json:"instanceType" yaml:"instanceType"`
	PaymentType interface{} `field:"required" json:"paymentType" yaml:"paymentType"`
	ZoneId interface{} `field:"required" json:"zoneId" yaml:"zoneId"`
	AutoPay interface{} `field:"optional" json:"autoPay" yaml:"autoPay"`
	ColdStorageSize interface{} `field:"optional" json:"coldStorageSize" yaml:"coldStorageSize"`
	Cpu interface{} `field:"optional" json:"cpu" yaml:"cpu"`
	Duration interface{} `field:"optional" json:"duration" yaml:"duration"`
	GatewayCount interface{} `field:"optional" json:"gatewayCount" yaml:"gatewayCount"`
	InitialDatabases interface{} `field:"optional" json:"initialDatabases" yaml:"initialDatabases"`
	LeaderInstanceId interface{} `field:"optional" json:"leaderInstanceId" yaml:"leaderInstanceId"`
	PricingCycle interface{} `field:"optional" json:"pricingCycle" yaml:"pricingCycle"`
	ProductCode interface{} `field:"optional" json:"productCode" yaml:"productCode"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	ScaleType interface{} `field:"optional" json:"scaleType" yaml:"scaleType"`
	StorageSize interface{} `field:"optional" json:"storageSize" yaml:"storageSize"`
	Tags *[]*RosInstance_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

