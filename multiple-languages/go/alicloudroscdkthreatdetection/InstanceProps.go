package alicloudroscdkthreatdetection


// Properties for defining a `Instance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-instance
type InstanceProps struct {
	// Property paymentType: The payment type of the resource.
	PaymentType interface{} `field:"required" json:"paymentType" yaml:"paymentType"`
	// Property versionCode: Select the security center version.
	//
	// Value:
	// - level7: Antivirus Edition.
	// - level3: Premium version.
	// - level2: Enterprise Edition.
	// - level8: Ultimate.
	// - level10: Purchase value-added services only.
	VersionCode interface{} `field:"required" json:"versionCode" yaml:"versionCode"`
	// Property buyNumber: Number of servers.
	BuyNumber interface{} `field:"optional" json:"buyNumber" yaml:"buyNumber"`
	// Property containerImageScan: Container Image security scan.
	//
	// Interval type, value interval:[0,200000].
	// > The step size is 20, that is, only multiples of 20 can be filled in.
	ContainerImageScan interface{} `field:"optional" json:"containerImageScan" yaml:"containerImageScan"`
	// Property containerImageScanNew: Container Image security scan.
	//
	// Interval type, value interval:[0,200000].
	// > The step size is 20, that is, only multiples of 20 can be filled in.
	ContainerImageScanNew interface{} `field:"optional" json:"containerImageScanNew" yaml:"containerImageScanNew"`
	// Property honeypot: Number of cloud honeypot licenses.
	//
	// Interval type, value interval:[20,500].
	// > This module can only be purchased when honeypot_switch = 1, starting with 20.
	Honeypot interface{} `field:"optional" json:"honeypot" yaml:"honeypot"`
	// Property honeypotSwitch: Cloud honeypot.
	//
	// Value:
	// - 1: Yes.
	// - 2: No.
	HoneypotSwitch interface{} `field:"optional" json:"honeypotSwitch" yaml:"honeypotSwitch"`
	// Property modifyType: Change configuration type, value - Upgrade: Upgrade.
	//
	// - Downgrade: Downgrade.
	ModifyType interface{} `field:"optional" json:"modifyType" yaml:"modifyType"`
	// Property period: Prepaid cycle.
	//
	// The unit is Monthly, please enter an integer multiple of 12 for annual paid products.
	// > must be set when creating a prepaid instance.
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	// Property productType: Product type, only China station needs to be set to sas, international station does not need to set.
	ProductType interface{} `field:"optional" json:"productType" yaml:"productType"`
	// Property raspCount: Number of application protection licenses.
	//
	// Interval type, value interval:[1,100000000].
	RaspCount interface{} `field:"optional" json:"raspCount" yaml:"raspCount"`
	// Property renewalPeriodUnit: Automatic renewal period unit, value: - M: month.
	//
	// - Y: years.
	// > Must be set when RenewalStatus = AutoRenewal.
	RenewalPeriodUnit interface{} `field:"optional" json:"renewalPeriodUnit" yaml:"renewalPeriodUnit"`
	// Property renewalStatus: Automatic renewal status, value: - AutoRenewal: automatic renewal.
	//
	// - ManualRenewal: manual renewal.
	// Default ManualRenewal.
	RenewalStatus interface{} `field:"optional" json:"renewalStatus" yaml:"renewalStatus"`
	// Property renewPeriod: Automatic renewal cycle, in months.
	//
	// > When **RenewalStatus** is set to **AutoRenewal**, it must be set.
	RenewPeriod interface{} `field:"optional" json:"renewPeriod" yaml:"renewPeriod"`
	// Property sasAntiRansomware: Anti-ransomware capacity.
	//
	// Unit: GB. Interval type, value interval:[0,9999999999].
	// > The step size is 10, that is, only multiples of 10 can be filled in.
	SasAntiRansomware interface{} `field:"optional" json:"sasAntiRansomware" yaml:"sasAntiRansomware"`
	// Property sasCspm: Cloud platform configuration check scan times, interval type, value range:[1000,9999999999].
	//
	// > You must have sas_cspm_switch = 1 to purchase this module. The step size is 100, that is, only multiples of 10 can be filled in.
	SasCspm interface{} `field:"optional" json:"sasCspm" yaml:"sasCspm"`
	// Property sasCspmSwitch: Cloud platform configuration check switch.
	//
	// Value:
	// - 0: No.
	// - 1: Yes.
	SasCspmSwitch interface{} `field:"optional" json:"sasCspmSwitch" yaml:"sasCspmSwitch"`
	// Property sasSc: Security screen.
	//
	// Value:
	// - true: Yes.
	// - false: No.
	SasSc interface{} `field:"optional" json:"sasSc" yaml:"sasSc"`
	// Property sasSdk: Number of malicious file detections.
	//
	// Unit: 10,000 times. Interval type, value interval:[10,9999999999].
	// > This module can only be purchased when sas_sdk_switch = 1. The step size is 10, that is, only multiples of 10 can be filled in.
	SasSdk interface{} `field:"optional" json:"sasSdk" yaml:"sasSdk"`
	// Property sasSdkSwitch: Malicious file detection SDK.
	SasSdkSwitch interface{} `field:"optional" json:"sasSdkSwitch" yaml:"sasSdkSwitch"`
	// Property sasSlsStorage: Log analysis storage capacity.
	//
	// Unit: GB. Interval type, value interval:[0,600000].
	// > The step size is 10, that is, only multiples of 10 can be filled in.
	SasSlsStorage interface{} `field:"optional" json:"sasSlsStorage" yaml:"sasSlsStorage"`
	// Property sasWebguardBoolean: Web tamper-proof switch.
	//
	// Value:
	// - 0: No.
	// - 1: Yes.
	SasWebguardBoolean interface{} `field:"optional" json:"sasWebguardBoolean" yaml:"sasWebguardBoolean"`
	// Property sasWebguardOrderNum: Tamper-proof authorization number.
	//
	// Value:
	// - 0: No
	// - 1: Yes.
	SasWebguardOrderNum interface{} `field:"optional" json:"sasWebguardOrderNum" yaml:"sasWebguardOrderNum"`
	// Property threatAnalysis: Threat Analysis log storage capacity.
	//
	// Interval type, value interval:[0,9999999999].
	// > This module can only be purchased when Threat_analysis_switch = 1. The step size is 10, that is, only multiples of 10 can be filled in.
	ThreatAnalysis interface{} `field:"optional" json:"threatAnalysis" yaml:"threatAnalysis"`
	// Property threatAnalysisSwitch: Threat analysis.
	//
	// Value:
	// - 0: No.
	// - 1: Yes.
	ThreatAnalysisSwitch interface{} `field:"optional" json:"threatAnalysisSwitch" yaml:"threatAnalysisSwitch"`
	// Property vCore: Number of cores.
	VCore interface{} `field:"optional" json:"vCore" yaml:"vCore"`
	// Property vulCount: Vulnerability repair times, interval type, value range:[20,100000000].
	//
	// > This module can only be purchased when vul_switch = 1. Only when the version_code value is level7 or level10. other versions do not need to be purchased separately.
	VulCount interface{} `field:"optional" json:"vulCount" yaml:"vulCount"`
	// Property vulSwitch: Vulnerability fix switch.
	//
	// Value:
	// - 0: No.
	// - 1: Yes.
	// > When the value of version_code is level7 or level10, the purchase is allowed. Other versions do not need to be purchased separately.
	VulSwitch interface{} `field:"optional" json:"vulSwitch" yaml:"vulSwitch"`
}

