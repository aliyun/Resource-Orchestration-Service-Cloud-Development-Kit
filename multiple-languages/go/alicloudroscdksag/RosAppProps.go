package alicloudroscdksag


// Properties for defining a `RosApp`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-app
type RosAppProps struct {
	AutoPay interface{} `field:"required" json:"autoPay" yaml:"autoPay"`
	DataPlan interface{} `field:"required" json:"dataPlan" yaml:"dataPlan"`
	Period interface{} `field:"required" json:"period" yaml:"period"`
	UserCount interface{} `field:"required" json:"userCount" yaml:"userCount"`
	ChargeType interface{} `field:"optional" json:"chargeType" yaml:"chargeType"`
}

