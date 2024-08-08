package alicloudroscdkrocketmq5


// Properties for defining a `RosInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq5-instance
type RosInstanceProps struct {
	InternetInfo interface{} `field:"required" json:"internetInfo" yaml:"internetInfo"`
	ProductInfo interface{} `field:"required" json:"productInfo" yaml:"productInfo"`
	SeriesCode interface{} `field:"required" json:"seriesCode" yaml:"seriesCode"`
	SubSeriesCode interface{} `field:"required" json:"subSeriesCode" yaml:"subSeriesCode"`
	VpcInfo interface{} `field:"required" json:"vpcInfo" yaml:"vpcInfo"`
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	AutoRenewPeriod interface{} `field:"optional" json:"autoRenewPeriod" yaml:"autoRenewPeriod"`
	InstanceName interface{} `field:"optional" json:"instanceName" yaml:"instanceName"`
	PaymentType interface{} `field:"optional" json:"paymentType" yaml:"paymentType"`
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	PeriodUnit interface{} `field:"optional" json:"periodUnit" yaml:"periodUnit"`
	Remark interface{} `field:"optional" json:"remark" yaml:"remark"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

