package alicloudroscdkthreatdetection


// Properties for defining a `RosInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-instance
type RosInstanceProps struct {
	PaymentType interface{} `field:"required" json:"paymentType" yaml:"paymentType"`
	VersionCode interface{} `field:"required" json:"versionCode" yaml:"versionCode"`
	BuyNumber interface{} `field:"optional" json:"buyNumber" yaml:"buyNumber"`
	ContainerImageScan interface{} `field:"optional" json:"containerImageScan" yaml:"containerImageScan"`
	ContainerImageScanNew interface{} `field:"optional" json:"containerImageScanNew" yaml:"containerImageScanNew"`
	Honeypot interface{} `field:"optional" json:"honeypot" yaml:"honeypot"`
	HoneypotSwitch interface{} `field:"optional" json:"honeypotSwitch" yaml:"honeypotSwitch"`
	ModifyType interface{} `field:"optional" json:"modifyType" yaml:"modifyType"`
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	ProductType interface{} `field:"optional" json:"productType" yaml:"productType"`
	RaspCount interface{} `field:"optional" json:"raspCount" yaml:"raspCount"`
	RenewalPeriodUnit interface{} `field:"optional" json:"renewalPeriodUnit" yaml:"renewalPeriodUnit"`
	RenewalStatus interface{} `field:"optional" json:"renewalStatus" yaml:"renewalStatus"`
	RenewPeriod interface{} `field:"optional" json:"renewPeriod" yaml:"renewPeriod"`
	SasAntiRansomware interface{} `field:"optional" json:"sasAntiRansomware" yaml:"sasAntiRansomware"`
	SasCspm interface{} `field:"optional" json:"sasCspm" yaml:"sasCspm"`
	SasCspmSwitch interface{} `field:"optional" json:"sasCspmSwitch" yaml:"sasCspmSwitch"`
	SasSc interface{} `field:"optional" json:"sasSc" yaml:"sasSc"`
	SasSdk interface{} `field:"optional" json:"sasSdk" yaml:"sasSdk"`
	SasSdkSwitch interface{} `field:"optional" json:"sasSdkSwitch" yaml:"sasSdkSwitch"`
	SasSlsStorage interface{} `field:"optional" json:"sasSlsStorage" yaml:"sasSlsStorage"`
	SasWebguardBoolean interface{} `field:"optional" json:"sasWebguardBoolean" yaml:"sasWebguardBoolean"`
	SasWebguardOrderNum interface{} `field:"optional" json:"sasWebguardOrderNum" yaml:"sasWebguardOrderNum"`
	ThreatAnalysis interface{} `field:"optional" json:"threatAnalysis" yaml:"threatAnalysis"`
	ThreatAnalysisSwitch interface{} `field:"optional" json:"threatAnalysisSwitch" yaml:"threatAnalysisSwitch"`
	VCore interface{} `field:"optional" json:"vCore" yaml:"vCore"`
	VulCount interface{} `field:"optional" json:"vulCount" yaml:"vulCount"`
	VulSwitch interface{} `field:"optional" json:"vulSwitch" yaml:"vulSwitch"`
}

