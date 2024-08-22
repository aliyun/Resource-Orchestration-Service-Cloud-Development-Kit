package alicloudroscdkddospro


// Properties for defining a `ProInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddospro-proinstance
type ProInstanceProps struct {
	// Property addressType: The IP version of the IP address.
	//
	// Valid values: Ipv4、Ipv6.
	AddressType interface{} `field:"optional" json:"addressType" yaml:"addressType"`
	// Property bandwidth: The burstable protection bandwidth.
	//
	// Unit: Gbit\/s.
	// The burstable protection bandwidth must be greater than or equal to the basic protection bandwidth. The value of Bandwidth varies based on the value of BaseBandwidth.
	Bandwidth interface{} `field:"optional" json:"bandwidth" yaml:"bandwidth"`
	// Property baseBandwidth: The basic protection bandwidth.
	//
	// Unit: Gbit\/s.
	// Valid values: 30, 60, 100, 300, 400, 500, and 600.
	BaseBandwidth interface{} `field:"optional" json:"baseBandwidth" yaml:"baseBandwidth"`
	// Property burstBandwidthMode: The metering method of the 95th percentile burstable clean bandwidth.
	//
	// Valid values:
	// 0: disables the burstable clean bandwidth feature.
	// 1: enables the burstable clean bandwidth feature and uses the daily 95th percentile metering method.
	// 2: enables the burstable clean bandwidth feature and uses the monthly 95th percentile metering method.
	BurstBandwidthMode interface{} `field:"optional" json:"burstBandwidthMode" yaml:"burstBandwidthMode"`
	// Property domainCount: The number of domain names that you want to protect.
	//
	// Valid values: 50 to 2000. The value must be a multiple of 10.
	DomainCount interface{} `field:"optional" json:"domainCount" yaml:"domainCount"`
	// Property edition: The mitigation plan of the instance.
	//
	// Set the value to coop, which indicates the Profession mitigation plan.
	Edition interface{} `field:"optional" json:"edition" yaml:"edition"`
	// Property functionVersion: The function plan of the instance.
	//
	// Valid values:
	// 0: the Standard function plan
	// 1: the Enhanced function plan.
	FunctionVersion interface{} `field:"optional" json:"functionVersion" yaml:"functionVersion"`
	// Property normalQps: The clean queries per second (QPS) provided by the instance.
	//
	// Valid values: 3000 to 100000. The value must be a multiple of 100.
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
	// Valid values: 50 to 400. The value must be a multiple of 5.
	PortCount interface{} `field:"optional" json:"portCount" yaml:"portCount"`
	// Property serviceBandwidth: The clean bandwidth provided by the instance.
	//
	// Unit: Mbit\/s.
	// Valid values: 100 to 5000. The value must be a multiple of 50.
	ServiceBandwidth interface{} `field:"optional" json:"serviceBandwidth" yaml:"serviceBandwidth"`
	// Property servicePartner: The type of the protection line.
	//
	// Set the value to coop-line-001, which indicates the default protection line.
	ServicePartner interface{} `field:"optional" json:"servicePartner" yaml:"servicePartner"`
	// Property tags: Tags to attach to instance.
	//
	// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosProInstance_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

