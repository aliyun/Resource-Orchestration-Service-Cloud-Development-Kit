package alicloudroscdkcloudfw


// Properties for defining a `RosInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-instance
type RosInstanceProps struct {
	PayType interface{} `field:"required" json:"payType" yaml:"payType"`
	AccountNum interface{} `field:"optional" json:"accountNum" yaml:"accountNum"`
	AclExtension interface{} `field:"optional" json:"aclExtension" yaml:"aclExtension"`
	AutoPay interface{} `field:"optional" json:"autoPay" yaml:"autoPay"`
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	Bandwidth interface{} `field:"optional" json:"bandwidth" yaml:"bandwidth"`
	IgnoreExisting interface{} `field:"optional" json:"ignoreExisting" yaml:"ignoreExisting"`
	IpNum interface{} `field:"optional" json:"ipNum" yaml:"ipNum"`
	LogAnalysis interface{} `field:"optional" json:"logAnalysis" yaml:"logAnalysis"`
	LogStorage interface{} `field:"optional" json:"logStorage" yaml:"logStorage"`
	MultiAccountManagement interface{} `field:"optional" json:"multiAccountManagement" yaml:"multiAccountManagement"`
	NatBandwidth interface{} `field:"optional" json:"natBandwidth" yaml:"natBandwidth"`
	NatFirewallNum interface{} `field:"optional" json:"natFirewallNum" yaml:"natFirewallNum"`
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	PeriodUnit interface{} `field:"optional" json:"periodUnit" yaml:"periodUnit"`
	Spec interface{} `field:"optional" json:"spec" yaml:"spec"`
	VpcBandwidth interface{} `field:"optional" json:"vpcBandwidth" yaml:"vpcBandwidth"`
	VpcFirewallNum interface{} `field:"optional" json:"vpcFirewallNum" yaml:"vpcFirewallNum"`
}

