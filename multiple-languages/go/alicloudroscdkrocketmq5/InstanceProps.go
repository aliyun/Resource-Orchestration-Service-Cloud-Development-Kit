package alicloudroscdkrocketmq5


// Properties for defining a `Instance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq5-instance
type InstanceProps struct {
	// Property internetInfo: Public network configuration information.
	InternetInfo interface{} `field:"required" json:"internetInfo" yaml:"internetInfo"`
	// Property productInfo: Instance specification information.
	ProductInfo interface{} `field:"required" json:"productInfo" yaml:"productInfo"`
	// Property seriesCode: The primary series code of the instance.
	SeriesCode interface{} `field:"required" json:"seriesCode" yaml:"seriesCode"`
	// Property subSeriesCode: The sub series code of the instance.
	SubSeriesCode interface{} `field:"required" json:"subSeriesCode" yaml:"subSeriesCode"`
	// Property vpcInfo: Private network configuration information.
	VpcInfo interface{} `field:"required" json:"vpcInfo" yaml:"vpcInfo"`
	// Property autoRenew: Whether to auto-renew.
	//
	// This parameter takes effect only when the PaymentType=Subscription.
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	// Property autoRenewPeriod: Automatic renewal period.
	//
	// This parameter is valid only when automatic renewal is enabled. Unit: Month.
	AutoRenewPeriod interface{} `field:"optional" json:"autoRenewPeriod" yaml:"autoRenewPeriod"`
	// Property instanceName: The name of the instance to be created.
	InstanceName interface{} `field:"optional" json:"instanceName" yaml:"instanceName"`
	// Property paymentType: The sub series code of the instance.
	PaymentType interface{} `field:"optional" json:"paymentType" yaml:"paymentType"`
	// Property period: The subscription duration.
	//
	// Valid values:
	// When Period is Month, it could be from 1 to 6, 12, 24, 36.
	//   When Period is Year, it could be from 1 to 3.
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	// Property periodUnit: The period unit for the duration of the instance.
	PeriodUnit interface{} `field:"optional" json:"periodUnit" yaml:"periodUnit"`
	// Property remark: The remark of instance.
	Remark interface{} `field:"optional" json:"remark" yaml:"remark"`
	// Property resourceGroupId: Resource group ID.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

