package alicloudroscdkcloudfw


// Properties for defining a `Instance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-instance
type InstanceProps struct {
	// Property payType: The billing method of the firewall instance.
	//
	// Valid values:
	// PayAsYouGo: pay-as-you-go
	// Subscription: subscription.
	PayType interface{} `field:"required" json:"payType" yaml:"payType"`
	// Property accountNum: The number of multi-account management and control is the number of member accounts that you need to uniformly control.
	AccountNum interface{} `field:"optional" json:"accountNum" yaml:"accountNum"`
	// Property aclExtension: When the default access control authorization specifications of your version are not enough, you can purchase global extension specifications of access control.
	//
	// This extension supports shared occupancy with Internet and VPC boundary ACL specifications.
	AclExtension interface{} `field:"optional" json:"aclExtension" yaml:"aclExtension"`
	// Property autoPay: Whether to auto pay the bill.
	AutoPay interface{} `field:"optional" json:"autoPay" yaml:"autoPay"`
	// Property autoRenew: Whether to auto renew the prepay instance.
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	// Property bandwidth: Public network processing capability.
	//
	// Valid values: 10 to 15000. Unit: Mbps.
	Bandwidth interface{} `field:"optional" json:"bandwidth" yaml:"bandwidth"`
	// Property ignoreExisting: Whether to ignore existing cloud firewall instance False: ROS will perform a uniqueness check.If the cloud firewall instance exists, an error will be reported when creating it. True: ROS will not check the uniqueness.If the cloud firewall instance exists, the creation process will be ignored. If the cloud firewall instance is not created by ROS, it will be ignored during update and delete stage.
	IgnoreExisting interface{} `field:"optional" json:"ignoreExisting" yaml:"ignoreExisting"`
	// Property ipNum: The number of public IPs that can be protected.
	//
	// Valid values: 20 to 4000.PremiumVersion: [20, 1000]
	IpNum interface{} `field:"optional" json:"ipNum" yaml:"ipNum"`
	// Property logAnalysis: The cloud firewall includes 7 days of free log storage and auditing by default.
	//
	// If you need longer storage time or meet the requirements for equal protection, it is recommended to purchase the log analysis service.
	LogAnalysis interface{} `field:"optional" json:"logAnalysis" yaml:"logAnalysis"`
	// Property logStorage: Reference for purchasing storage capacity: 10M public network bandwidth, 6 months of log storage, recommended purchase of 1000GB log storage capacity.
	LogStorage interface{} `field:"optional" json:"logStorage" yaml:"logStorage"`
	// Property multiAccountManagement: Multiple accounts on the enterprise cloud can be managed centrally on the cloud firewall, including asset inventory, ACL policies, attack protection, log reports, etc.
	//
	// After the member account is managed by the current account, there will be no need to purchase it separately.
	MultiAccountManagement interface{} `field:"optional" json:"multiAccountManagement" yaml:"multiAccountManagement"`
	// Property natBandwidth: The bandwidth of private network traffic processed by the NAT firewall.
	//
	// The premium version does not include it by default, the enterprise version has 10Mbps by default, and the ultimate version has 20Mbps by default.
	NatBandwidth interface{} `field:"optional" json:"natBandwidth" yaml:"natBandwidth"`
	// Property natFirewallNum: The number of NAT gateway instances of the NAT firewall you need to enable.
	//
	// Each NAT gateway instance corresponds to one NAT firewall instance. The premium version does not include it by default, the enterprise version comes with 1 specification by default,and the ultimate version comes with 2 specifications by default.
	NatFirewallNum interface{} `field:"optional" json:"natFirewallNum" yaml:"natFirewallNum"`
	// Property period: The subscription period of the firewallIf PeriodUnit is month, the valid range is 1, 3, 6 If periodUnit is year, the valid range is 1, 2, 3.
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	// Property periodUnit: The unit of the subscription duration.
	//
	// Valid values:
	// Month
	// Year
	// Default value: Month.
	PeriodUnit interface{} `field:"optional" json:"periodUnit" yaml:"periodUnit"`
	// Property spec: The version of Cloud Firewall.
	Spec interface{} `field:"optional" json:"spec" yaml:"spec"`
	// Property vpcBandwidth: VPC network processing capability.
	//
	// Valid values: 1000 to 15000. Unit: Mbps.
	VpcBandwidth interface{} `field:"optional" json:"vpcBandwidth" yaml:"vpcBandwidth"`
	// Property vpcFirewallNum: The number of protected VPCs.
	//
	// It will be ignored when spec = "premium_version". Valid values between 2 and 500.
	VpcFirewallNum interface{} `field:"optional" json:"vpcFirewallNum" yaml:"vpcFirewallNum"`
}

