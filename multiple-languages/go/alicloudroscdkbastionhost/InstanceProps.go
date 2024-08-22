package alicloudroscdkbastionhost


// Properties for defining a `Instance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-instance
type InstanceProps struct {
	// Property extendedStoragePlans: If the default storage capacity is insufficient, you can purchase extended storage plans.Unit: TB.
	ExtendedStoragePlans interface{} `field:"required" json:"extendedStoragePlans" yaml:"extendedStoragePlans"`
	// Property extraBandwidth: Additional bandwidth is added to the default settings to ensure efficient O&M.Unit: Mbps.
	ExtraBandwidth interface{} `field:"required" json:"extraBandwidth" yaml:"extraBandwidth"`
	// Property plan: The number of asset authorization and concurrency limit.Unit: Asset number.
	Plan interface{} `field:"required" json:"plan" yaml:"plan"`
	// Property startInstanceParam: Parameters required to start a bastion host instance.
	StartInstanceParam interface{} `field:"required" json:"startInstanceParam" yaml:"startInstanceParam"`
	// Property version: Enterprise version:- Deployment instructions: dual-engine architecture, supports multiple availability zones, and ensures high stability - Operation and maintenance scenarios: unified operation and maintenance of assets on Alibaba Cloud, offline IDC servers, and third-party clouds - Asset type: Linux\/Windows, database assets - User management: RAM, AD\/LDAP and local users - Control strategy: fine-grained strategic control such as operation and maintenance approval, high-risk command blocking, etc.
	//
	// - Operation and maintenance audit: full traceability of operation and maintenance log audit and video audit
	// Value-added capabilities: automatic password change of Linux assets, database operation and maintenance management and control, convenient operation and maintenance of Web and client, network domain agent hybrid cloud scenario operation and maintenance mode, etc.Basic version:- Deployment instructions: The basic version is deployed on a single machine and does not support multiple availability zones.
	// - Operation and maintenance scenarios: unified operation and maintenance of assets on Alibaba Cloud, offline IDC servers, and third-party clouds
	// - Asset type: Linux\/Windows assets
	// - User management: RAM, AD\/LDAP and local users
	// - Control strategy: Operation and maintenance approval, high-risk command blocking and other strategic management and control
	// - Operation and maintenance audit: full traceability of operation and maintenance log audit and video audit.
	Version interface{} `field:"required" json:"version" yaml:"version"`
	// Property autoPay: Whether to auto pay the bill.
	AutoPay interface{} `field:"optional" json:"autoPay" yaml:"autoPay"`
	// Property autoRenew: Whether to auto renew the prepay instance.
	//
	// The auto-renewal period is Monthly.After you enable auto-renewal, the system deducts the renewal fee nine days before the resource expires.If the payment fails, the system does not stop deducting the fee until the deduction is successful or one day before the resource expires.
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	// Property period: The subscription period of the bastionhost instanceIf PeriodUnit is month, the valid range is 1, 3, 6 If periodUnit is year, the valid range is 1, 2, 3.
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	// Property periodUnit: The unit of the subscription duration.
	//
	// Valid values:
	// Month
	// Year
	// Default value: Month.
	PeriodUnit interface{} `field:"optional" json:"periodUnit" yaml:"periodUnit"`
	// Property resourceGroupId: Resource group ID.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

