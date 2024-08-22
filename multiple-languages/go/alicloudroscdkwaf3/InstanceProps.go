package alicloudroscdkwaf3


// Properties for defining a `Instance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-waf3-instance
type InstanceProps struct {
	// Property payType: The billing method of the firewall instance.
	//
	// Valid values:
	// PayAsYouGo: pay-as-you-go
	// Subscription: subscription.
	PayType interface{} `field:"required" json:"payType" yaml:"payType"`
	// Property region: Web Application Firewall is available in the following regions: regions in the Chinese mainland, China (Hong Kong), Singapore (Singapore), Malaysia (Kuala Lumpur), US (Silicon Valley), Australia (Sydney), Germany (Frankfurt), India (Mumbai), Indonesia (Jakarta), UAE (Dubai), and Japan (Tokyo).
	//
	// If your origin server is deployed within the Chinese mainland, select Chinese Mainland. If your origin server is deployed outside the Chinese mainland, select Outside Chinese mainland. Intelligent region selection is supported.
	Region interface{} `field:"required" json:"region" yaml:"region"`
	// Property additionalProtectionNodes: Each protection cluster has at least two protection nodes, and each node provides the protection capabilities of up to 5,000 QPS for HTTP requests or up to 3,000 QPS for HTTPS requests.
	//
	// You can add protection nodes to increase protection capabilities.
	AdditionalProtectionNodes interface{} `field:"optional" json:"additionalProtectionNodes" yaml:"additionalProtectionNodes"`
	// Property apiSecurity: The API security feature detects responses with specified characteristics to check whether data leaks occur.
	//
	// After you enable the feature, WAF is authorized to perform related analysis on your data. If you select Chinese Mainland, service deployment and data processing are performed in the Chinese mainland.
	ApiSecurity interface{} `field:"optional" json:"apiSecurity" yaml:"apiSecurity"`
	// Property autoPay: Whether to auto pay the bill.
	AutoPay interface{} `field:"optional" json:"autoPay" yaml:"autoPay"`
	// Property autoRenew: Whether to auto renew the prepay instance.
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	// Property botAppProtection: Bot management module for App protection.
	BotAppProtection interface{} `field:"optional" json:"botAppProtection" yaml:"botAppProtection"`
	// Property botWebProtection: Bot management module for Web application protection.
	BotWebProtection interface{} `field:"optional" json:"botWebProtection" yaml:"botWebProtection"`
	// Property domainsExtension: If the actual number of required access domain names exceeds the number of free domain names in the version, the number of domain names can be expanded according to this specification.Domain name counting does not differentiate between domain name types. The main domain name, sub-domain name, and pan-domain name are each counted as one domain name.
	DomainsExtension interface{} `field:"optional" json:"domainsExtension" yaml:"domainsExtension"`
	// Property elasticQps: The burstable QPS (pay-as-you-go) feature is suitable for scenarios that involve short-term or sudden traffic surges, for example, during promotions.
	//
	// In these scenarios, the traffic peak may exceed the sum of the maximum QPS that is supported by your WAF edition and the extended QPS. If you enable the feature, you are charged based on the amount of excess QPS resources that you use. This helps prevent your domain names from being added to a sandbox when QPS resources are excessively used and helps ensure service continuity.
	ElasticQps interface{} `field:"optional" json:"elasticQps" yaml:"elasticQps"`
	// Property exclusiveIpAddress: Excluesive IP address number.
	ExclusiveIpAddress interface{} `field:"optional" json:"exclusiveIpAddress" yaml:"exclusiveIpAddress"`
	// Property fraudDetection: You can enable this feature only after you enable the bot management module.
	//
	// If abnormal phone numbers are used in logon or registration scenarios, anomaly tags are matched. Requests from the abnormal phone numbers are blocked or CAPTCHA verification is required. You are charged based on the number of times that anomaly tags are matched.
	FraudDetection interface{} `field:"optional" json:"fraudDetection" yaml:"fraudDetection"`
	// Property ignoreExisting: Whether to ignore existing WAF3 instance False: ROS will perform a uniqueness check.If the WAF3 instance exists, an error will be reported when creating it. True: ROS will not check the uniqueness.If the WAF3 instance exists, the creation process will be ignored. If the WAF3 instance is not created by ROS, it will be ignored during update and delete stage.
	IgnoreExisting interface{} `field:"optional" json:"ignoreExisting" yaml:"ignoreExisting"`
	// Property intelligentLoadBalancing: Intelligent load balancer for WAF instance.
	IntelligentLoadBalancing interface{} `field:"optional" json:"intelligentLoadBalancing" yaml:"intelligentLoadBalancing"`
	// Property logService: Log service for WAF instance.
	LogService interface{} `field:"optional" json:"logService" yaml:"logService"`
	// Property logStorage: Log storage capacity.
	LogStorage interface{} `field:"optional" json:"logStorage" yaml:"logStorage"`
	// Property period: The subscription period of the firewallIf PeriodUnit is month, the valid range is 1, 3, 6 If periodUnit is year, the valid range is 1, 2, 3.
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	// Property periodUnit: The unit of the subscription duration.
	//
	// Valid values:
	// Month
	// Year
	// Default value: Month.
	PeriodUnit interface{} `field:"optional" json:"periodUnit" yaml:"periodUnit"`
	// Property qpsExtension: Extended QPS.
	QpsExtension interface{} `field:"optional" json:"qpsExtension" yaml:"qpsExtension"`
	// Property trafficBillingProtectionThreshold: In pay-as-you-go WAF 3.0, the traffic billing protection feature is automatically enabled to prevent unexpected and unusually high bills that result from unpredictable factors such as HTTP flood attacks. A bill is not generated for an hour if the peak traffic exceeds the traffic billing protection threshold within the hour. Then, your WAF instance is added to a sandbox. If the peak traffic is lower than the traffic billing protection threshold the next hour, your WAF instance is removed from the sandbox.
	TrafficBillingProtectionThreshold interface{} `field:"optional" json:"trafficBillingProtectionThreshold" yaml:"trafficBillingProtectionThreshold"`
	// Property wafVersion: The version of WAF3.0.
	WafVersion interface{} `field:"optional" json:"wafVersion" yaml:"wafVersion"`
}

