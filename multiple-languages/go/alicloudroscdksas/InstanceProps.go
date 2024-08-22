package alicloudroscdksas


// Properties for defining a `Instance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sas-instance
type InstanceProps struct {
	// Property period: The subscription period of the firewallIf PeriodUnit is month, the valid range is 1, 3, 6 If periodUnit is year, the valid range is 1, 2, 3.
	Period interface{} `field:"required" json:"period" yaml:"period"`
	// Property periodUnit: The unit of the subscription duration.
	//
	// Valid values:
	// Month
	// Year.
	PeriodUnit interface{} `field:"required" json:"periodUnit" yaml:"periodUnit"`
	// Property antiRansomware: Security Center provides a comprehensive anti-ransomware solution to protect your business.
	//
	// We recommend that you configure a data protection capacity of 50GB for each server.
	AntiRansomware interface{} `field:"optional" json:"antiRansomware" yaml:"antiRansomware"`
	// Property autoPay: Whether to auto pay the bill.Default: True.
	AutoPay interface{} `field:"optional" json:"autoPay" yaml:"autoPay"`
	// Property autoRenew: Whether to auto renew the prepay instance.Default: False.
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	// Property cloudHoneypot: The cloud honeypot feature can capture attacks in a timely and efficient manner.
	//
	// You can use the feature to protect your core assets and detect attacks in attack and defense scenarios.
	CloudHoneypot interface{} `field:"optional" json:"cloudHoneypot" yaml:"cloudHoneypot"`
	// Property configurationAssessment: The configuration assessment feature detects configuration errors and security risks on cloud services from the following dimensions: identity and permission management, security risks in Alibaba Cloud services, and compliance risks.This ensures the security of the running environment of your cloud services.
	ConfigurationAssessment interface{} `field:"optional" json:"configurationAssessment" yaml:"configurationAssessment"`
	// Property containerImageScan: Security Center provides the container image scan feature to protect containers.
	//
	// Security Center can detect CVEs, application vulnerabilities, viruses, and malicious samples and allows you to handle the detected risks. You can configure this parameter based on the number of images or digests. For example, if the number of images or digests that are updated in the previous day is 10, you can set this parameter to 300 for a monthly subscription or to 3650 for a yearly subscription. This is more cost-effective.
	ContainerImageScan interface{} `field:"optional" json:"containerImageScan" yaml:"containerImageScan"`
	// Property edition: The version of Security center.
	Edition interface{} `field:"optional" json:"edition" yaml:"edition"`
	// Property logAnalysis: In response to the requirements of the network security law, which requires logs to be stored for at least 180 days, we recommend that you configure a 40GB log storage each server.
	//
	// Log analysis supports multi-dimensional security logs of cloud assets, out-of-the-box reports, and powerful SQL syntax analysis, so as to monitor business status, troubleshoot attacks, security operations such as traceability and positioning are easier.
	LogAnalysis interface{} `field:"optional" json:"logAnalysis" yaml:"logAnalysis"`
	// Property maliciousFileDetectionSdk: The configuration assessment feature detects configuration errors and security risks on cloud services from the following dimensions: identity and permission management, security risks in Alibaba Cloud services, and compliance risks.
	//
	// This ensures the security of the running environment of your cloud services.
	MaliciousFileDetectionSdk interface{} `field:"optional" json:"maliciousFileDetectionSdk" yaml:"maliciousFileDetectionSdk"`
	// Property protectedServers: Authorization is the same as the number of servers you have.
	ProtectedServers interface{} `field:"optional" json:"protectedServers" yaml:"protectedServers"`
	// Property quotaForApplicationProtection: The application protection feature can detect attacks on applications and provide self-protection during application runtime.
	//
	// The feature supports simple and convenient O&M and can effectively defend against zero-day and OWASP Top vulnerabilities. The feature is a value-added feature. You are charged based on the number of assets on which the RASP agent is installed. You must configure protection policies after you purchase the feature.
	QuotaForApplicationProtection interface{} `field:"optional" json:"quotaForApplicationProtection" yaml:"quotaForApplicationProtection"`
	// Property quotaForCloudHoneypot:.
	QuotaForCloudHoneypot interface{} `field:"optional" json:"quotaForCloudHoneypot" yaml:"quotaForCloudHoneypot"`
	// Property quotaForConfigurationAssessment:.
	QuotaForConfigurationAssessment interface{} `field:"optional" json:"quotaForConfigurationAssessment" yaml:"quotaForConfigurationAssessment"`
	// Property quotaForMaliciousFileDetectionSdk:.
	QuotaForMaliciousFileDetectionSdk interface{} `field:"optional" json:"quotaForMaliciousFileDetectionSdk" yaml:"quotaForMaliciousFileDetectionSdk"`
	// Property quotaForVulnerabilityFixing: Specify the quota for vulnerability fixing based on the number of vulnerabilities that you want to fix each month.
	//
	// The quota is equal to the total number of vulnerabilities that you want to fix on all servers regardless of the vulnerability names. For example, if you use Security Center to fix the same vulnerability on 10 servers, the quota is deducted by 10.
	QuotaForVulnerabilityFixing interface{} `field:"optional" json:"quotaForVulnerabilityFixing" yaml:"quotaForVulnerabilityFixing"`
	// Property quotaForWebTamperProofing:.
	QuotaForWebTamperProofing interface{} `field:"optional" json:"quotaForWebTamperProofing" yaml:"quotaForWebTamperProofing"`
	// Property threatAnalysis: The threat analysis feature allows you to handle alerts that are generated for assets in the cloud within different accounts and assets of multiple cloud services in a centralized manner.
	//
	// The feature also allows you to handle risks with a few clicks. The feature provides automatic orchestration and response capabilities.
	ThreatAnalysis interface{} `field:"optional" json:"threatAnalysis" yaml:"threatAnalysis"`
	// Property threatAnalysisLogStorageCapacity:.
	ThreatAnalysisLogStorageCapacity interface{} `field:"optional" json:"threatAnalysisLogStorageCapacity" yaml:"threatAnalysisLogStorageCapacity"`
	// Property vCore: This parameter indicates the number of server vCPUs.
	VCore interface{} `field:"optional" json:"vCore" yaml:"vCore"`
	// Property vulnerabilityFixing: The vulnerability fixing feature allows you to fix system vulnerabilities with a few clicks.
	//
	// This improves O&M efficiency. You can separately purchase the vulnerability fixing feature. You are charged based on the number of times that you perform vulnerability fixing.
	VulnerabilityFixing interface{} `field:"optional" json:"vulnerabilityFixing" yaml:"vulnerabilityFixing"`
	// Property webTamperProtection: To ensure that the website information of important systems is not maliciously tampered with, there are bad content such as hanging horses, black chains, illegal implantation of terrorist threats, pornography, etc.
	WebTamperProtection interface{} `field:"optional" json:"webTamperProtection" yaml:"webTamperProtection"`
}

