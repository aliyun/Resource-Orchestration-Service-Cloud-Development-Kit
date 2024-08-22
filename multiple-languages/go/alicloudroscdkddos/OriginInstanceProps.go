package alicloudroscdkddos


// Properties for defining a `OriginInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddos-origininstance
type OriginInstanceProps struct {
	// Property edition: Edition of the instance.
	//
	// Valid values:
	//   - enterprise: Enterprise Edition.
	// - smb: Affordable and general edition for small and medium-sized enterprises.
	Edition interface{} `field:"required" json:"edition" yaml:"edition"`
	// Property protectionMode: The mode of the protection.
	//
	// Valid values:
	// unlimited: The Unlimited protection mode is intended for internal use within enterprises.
	ProtectionMode interface{} `field:"required" json:"protectionMode" yaml:"protectionMode"`
	// Property chargeType: The charge type of the instance.
	//
	// Valid values:
	// PostPaid: Pay-as-you-go.
	// PrePaid: Subscription.
	ChargeType interface{} `field:"optional" json:"chargeType" yaml:"chargeType"`
	// Property cleanBandwidth: The mitigation capability of Anti-DDoS is measured by the inbound or outbound clean bandwidth.
	//
	// When Edition is enterprise, CleanBandwidth ranges from 100 to 1000 Mbit\/s.When Edition is smb， CleanBandwidth ranges from 50 to 1000 Mbit\/s.
	CleanBandwidth interface{} `field:"optional" json:"cleanBandwidth" yaml:"cleanBandwidth"`
	// Property enableLog: Whether to enable protection logs.
	EnableLog interface{} `field:"optional" json:"enableLog" yaml:"enableLog"`
	// Property ipAddresses: The number of ip addresses.
	//
	// When Edition is smb， IP Addresses ranges from 1 to 29.
	// When Edition is enterprise, The minimum number of IP Addresses is 30.
	IpAddresses interface{} `field:"optional" json:"ipAddresses" yaml:"ipAddresses"`
	// Property networkProtocol: The network protocol of the instance.
	//
	// Valid values:
	// v4: IPv4.
	// v6: IPv6.
	// v4_6: IPv4+IPv6.
	NetworkProtocol interface{} `field:"optional" json:"networkProtocol" yaml:"networkProtocol"`
	// Property period: The period of the instance.
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	// Property periodUnit: The period unit of the instance.
	//
	// Valid values:
	// Month: Month.
	// Year: Year.
	PeriodUnit interface{} `field:"optional" json:"periodUnit" yaml:"periodUnit"`
	// Property tags: Tags to attach to instance.
	//
	// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosOriginInstance_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

