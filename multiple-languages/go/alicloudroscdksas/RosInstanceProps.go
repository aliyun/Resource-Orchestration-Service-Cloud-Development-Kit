package alicloudroscdksas


// Properties for defining a `RosInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sas-instance
type RosInstanceProps struct {
	Period interface{} `field:"required" json:"period" yaml:"period"`
	PeriodUnit interface{} `field:"required" json:"periodUnit" yaml:"periodUnit"`
	AntiRansomware interface{} `field:"optional" json:"antiRansomware" yaml:"antiRansomware"`
	AutoPay interface{} `field:"optional" json:"autoPay" yaml:"autoPay"`
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	CloudHoneypot interface{} `field:"optional" json:"cloudHoneypot" yaml:"cloudHoneypot"`
	ConfigurationAssessment interface{} `field:"optional" json:"configurationAssessment" yaml:"configurationAssessment"`
	ContainerImageScan interface{} `field:"optional" json:"containerImageScan" yaml:"containerImageScan"`
	Edition interface{} `field:"optional" json:"edition" yaml:"edition"`
	LogAnalysis interface{} `field:"optional" json:"logAnalysis" yaml:"logAnalysis"`
	MaliciousFileDetectionSdk interface{} `field:"optional" json:"maliciousFileDetectionSdk" yaml:"maliciousFileDetectionSdk"`
	ProtectedServers interface{} `field:"optional" json:"protectedServers" yaml:"protectedServers"`
	QuotaForApplicationProtection interface{} `field:"optional" json:"quotaForApplicationProtection" yaml:"quotaForApplicationProtection"`
	QuotaForCloudHoneypot interface{} `field:"optional" json:"quotaForCloudHoneypot" yaml:"quotaForCloudHoneypot"`
	QuotaForConfigurationAssessment interface{} `field:"optional" json:"quotaForConfigurationAssessment" yaml:"quotaForConfigurationAssessment"`
	QuotaForMaliciousFileDetectionSdk interface{} `field:"optional" json:"quotaForMaliciousFileDetectionSdk" yaml:"quotaForMaliciousFileDetectionSdk"`
	QuotaForVulnerabilityFixing interface{} `field:"optional" json:"quotaForVulnerabilityFixing" yaml:"quotaForVulnerabilityFixing"`
	QuotaForWebTamperProofing interface{} `field:"optional" json:"quotaForWebTamperProofing" yaml:"quotaForWebTamperProofing"`
	ThreatAnalysis interface{} `field:"optional" json:"threatAnalysis" yaml:"threatAnalysis"`
	ThreatAnalysisLogStorageCapacity interface{} `field:"optional" json:"threatAnalysisLogStorageCapacity" yaml:"threatAnalysisLogStorageCapacity"`
	VCore interface{} `field:"optional" json:"vCore" yaml:"vCore"`
	VulnerabilityFixing interface{} `field:"optional" json:"vulnerabilityFixing" yaml:"vulnerabilityFixing"`
	WebTamperProtection interface{} `field:"optional" json:"webTamperProtection" yaml:"webTamperProtection"`
}

