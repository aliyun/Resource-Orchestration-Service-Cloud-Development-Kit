package alicloudroscdkapigateway


// Properties for defining a `RosInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-instance
type RosInstanceProps struct {
	HttpsPolicy interface{} `field:"required" json:"httpsPolicy" yaml:"httpsPolicy"`
	InstanceName interface{} `field:"required" json:"instanceName" yaml:"instanceName"`
	InstanceSpec interface{} `field:"required" json:"instanceSpec" yaml:"instanceSpec"`
	ZoneId interface{} `field:"required" json:"zoneId" yaml:"zoneId"`
	AutoPay interface{} `field:"optional" json:"autoPay" yaml:"autoPay"`
	ChargeType interface{} `field:"optional" json:"chargeType" yaml:"chargeType"`
	DeletionForce interface{} `field:"optional" json:"deletionForce" yaml:"deletionForce"`
	Duration interface{} `field:"optional" json:"duration" yaml:"duration"`
	PricingCycle interface{} `field:"optional" json:"pricingCycle" yaml:"pricingCycle"`
	Tags *[]*RosInstance_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

