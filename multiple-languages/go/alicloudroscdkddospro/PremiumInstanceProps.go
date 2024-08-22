package alicloudroscdkddospro


// Properties for defining a `PremiumInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddospro-premiuminstance
type PremiumInstanceProps struct {
	// Property burstBandwidthMode: The metering method of the 95th percentile burstable clean bandwidth.
	//
	// Valid values:
	// 0: disables the burstable clean bandwidth feature.
	// 1: enables the burstable clean bandwidth feature and uses the daily 95th percentile metering method.
	// 2: enables the burstable clean bandwidth feature and uses the monthly 95th percentile metering method.
	BurstBandwidthMode interface{} `field:"optional" json:"burstBandwidthMode" yaml:"burstBandwidthMode"`
	// Property domainCount: The number of domain names that you want to protect.
	//
	// The value of DomainCount varies based on the value of ProductPlan.
	// If you set ProductPlan to 0, you can set DomainCount to a value that ranges from 10 to 200. The value must be a multiple of 10.
	// If you set ProductPlan to 1, you can set DomainCount to a value that ranges from 10 to 200. The value must be a multiple of 10.
	// If you set ProductPlan to 2, you do not need to specify this parameter.
	// If you set ProductPlan to 3, you can set DomainCount to a value that ranges from 10 to 200. The value must be a multiple of 10.
	DomainCount interface{} `field:"optional" json:"domainCount" yaml:"domainCount"`
	// Property functionVersion: The function plan of the instance.
	//
	// Valid values:
	// 0: the Standard function plan
	// 1: the Enhanced function plan.
	FunctionVersion interface{} `field:"optional" json:"functionVersion" yaml:"functionVersion"`
	// Property normalBandwidth: The clean bandwidth provided by the instance.
	//
	// Unit: Mbit\/s.
	// The value of NormalBandwidth varies based on the value of ProductPlan.
	// If you set ProductPlan to 0, you can set NormalBandwidth to 100, 150, 200, 250, or 300.
	// If you set ProductPlan to 1, you can set NormalBandwidth to 100, 150, 200, 250, or 300.
	// If you set ProductPlan to 2, you can set NormalBandwidth to 10, 20, 30, 40, 50, 60, 70, 80, 90, or 100.
	// If you set ProductPlan to 3, you can set NormalBandwidth to 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 150, or 200.
	NormalBandwidth interface{} `field:"optional" json:"normalBandwidth" yaml:"normalBandwidth"`
	// Property normalQps: The clean QPS provided by the instance.
	//
	// The value of NormalQps varies based on the value of ProductPlan.
	// If you set ProductPlan to 0, you can set NormalQps to a value that ranges from 500 to 100000. The value must be a multiple of 100.
	// If you set ProductPlan to 1, you can set NormalQps to a value that ranges from 1000 to 100000. The value must be a multiple of 100.
	// If you set ProductPlan to 2, you do not need to specify this parameter.
	// If you set ProductPlan to 3, you can set NormalQps to a value that ranges from 500 to 100000. The value must be a multiple of 100.
	NormalQps interface{} `field:"optional" json:"normalQps" yaml:"normalQps"`
	// Property period: The subscription period of the firewallIf PeriodUnit is Month, the valid range is 1, 2, 3, 4, 5, 6, 12, 24 If PeriodUnit is Year, the valid range is 1, 2.
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	// Property periodUnit: The unit of the subscription duration.
	//
	// Valid values:
	// Month
	// Year
	// Default value: Month.
	PeriodUnit interface{} `field:"optional" json:"periodUnit" yaml:"periodUnit"`
	// Property portCount: The number of ports that you want to protect.
	//
	// The value of PortCount varies based on the value of ProductPlan.
	// If you set ProductPlan to 0, you can set PortCount to a value that ranges from 5 to 400. The value must be a multiple of 5.
	// If you set ProductPlan to 1, you can set PortCount to a value that ranges from 5 to 400. The value must be a multiple of 5.
	// If you set ProductPlan to 2, you do not need to specify this parameter.
	// If you set ProductPlan to 3, you can set PortCount to a value that ranges from 5 to 400. The value must be a multiple of 5.
	PortCount interface{} `field:"optional" json:"portCount" yaml:"portCount"`
	// Property productPlan: The mitigation plan of the instance.
	//
	// Valid values:
	// 0: the Insurance mitigation plan
	// 1: the Unlimited mitigation plan
	// 2: the Chinese Mainland Acceleration (CMA) mitigation plan
	// 3: the Secure Chinese Mainland Acceleration (Sec-CMA) mitigation plan.
	ProductPlan interface{} `field:"optional" json:"productPlan" yaml:"productPlan"`
	// Property tags: Tags to attach to instance.
	//
	// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosPremiumInstance_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

