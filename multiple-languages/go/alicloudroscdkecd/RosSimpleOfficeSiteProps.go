package alicloudroscdkecd


// Properties for defining a `RosSimpleOfficeSite`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecd-simpleofficesite
type RosSimpleOfficeSiteProps struct {
	Bandwidth interface{} `field:"optional" json:"bandwidth" yaml:"bandwidth"`
	CenId interface{} `field:"optional" json:"cenId" yaml:"cenId"`
	CenOwnerId interface{} `field:"optional" json:"cenOwnerId" yaml:"cenOwnerId"`
	CidrBlock interface{} `field:"optional" json:"cidrBlock" yaml:"cidrBlock"`
	CloudBoxOfficeSite interface{} `field:"optional" json:"cloudBoxOfficeSite" yaml:"cloudBoxOfficeSite"`
	DesktopAccessType interface{} `field:"optional" json:"desktopAccessType" yaml:"desktopAccessType"`
	EnableAdminAccess interface{} `field:"optional" json:"enableAdminAccess" yaml:"enableAdminAccess"`
	EnableInternetAccess interface{} `field:"optional" json:"enableInternetAccess" yaml:"enableInternetAccess"`
	NeedVerifyZeroDevice interface{} `field:"optional" json:"needVerifyZeroDevice" yaml:"needVerifyZeroDevice"`
	OfficeSiteName interface{} `field:"optional" json:"officeSiteName" yaml:"officeSiteName"`
	VerifyCode interface{} `field:"optional" json:"verifyCode" yaml:"verifyCode"`
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
}

