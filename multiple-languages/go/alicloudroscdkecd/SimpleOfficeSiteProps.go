package alicloudroscdkecd


// Properties for defining a `SimpleOfficeSite`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecd-simpleofficesite
type SimpleOfficeSiteProps struct {
	// Property bandwidth: The maximum public bandwidth.
	//
	// Value range: 10 to 200. Unit: Mbit\/s. This parameter is available if you set EnableInternetAccess to true.
	Bandwidth interface{} `field:"optional" json:"bandwidth" yaml:"bandwidth"`
	// Property cenId: The ID of the Cloud Enterprise Network (CEN) instance.
	//
	// NoteIf you want to connect to your cloud desktops over a VPC, you can attach the network of the workspace to the CEN instance. The CEN instance is connected to the on-premises network over VPN Gateway or Express Connect.
	CenId interface{} `field:"optional" json:"cenId" yaml:"cenId"`
	// Property cenOwnerId: The ID of the Alibaba Cloud account to which the Cloud Enterprise Network (CEN) instance belongs.
	//
	// If you do not specify the CenId parameter, or the CEN instance that is specified by the CenId parameter belongs to the current Alibaba Cloud account, skip this parameter.
	// If you specify the CenId parameter and the CEN instance that you specify for the CenId parameter belongs to another Alibaba Cloud account, enter the ID of the Alibaba Cloud account.
	CenOwnerId interface{} `field:"optional" json:"cenOwnerId" yaml:"cenOwnerId"`
	// Property cidrBlock: The IPv4 CIDR block in the secure office network of the workspace.
	//
	// The IPv4 CIDR block that the system uses to create a virtual private cloud (VPC) for the workspace. We recommend that you set the IPv4 CIDR block to 10.0.0.0\/12, 172.16.0.0\/12, 192.168.0.0\/16, or a subnet of these CIDR blocks. If you set the IPv4 CIDR block to 10.0.0.0\/12 or 172.16.0.0\/12, the mask is 1224 bits in length. If you set the IPv4 CIDR block to 192.168.0.0\/16, the mask is 1624 bits in length.
	CidrBlock interface{} `field:"optional" json:"cidrBlock" yaml:"cidrBlock"`
	// Property cloudBoxOfficeSite: Specifies whether the workspace is a CloudBox-based workspace.
	//
	// Enumeration Value:
	// true
	// false.
	CloudBoxOfficeSite interface{} `field:"optional" json:"cloudBoxOfficeSite" yaml:"cloudBoxOfficeSite"`
	// Property desktopAccessType: The method that is used to connect the client to cloud desktops.
	//
	// NoteVPC connections are established by using Alibaba Cloud PrivateLink. You can use PrivateLink for free. When you set this parameter to VPC or Any, PrivateLink is automatically activated.
	DesktopAccessType interface{} `field:"optional" json:"desktopAccessType" yaml:"desktopAccessType"`
	// Property enableAdminAccess: Specifies whether to grant the permissions of the local administrator to the regular user of the cloud desktop.
	//
	// Enumeration Value:
	// true
	// false.
	EnableAdminAccess interface{} `field:"optional" json:"enableAdminAccess" yaml:"enableAdminAccess"`
	// Property enableInternetAccess: Specifies whether to enable Internet access.
	//
	// By default, Internet access is not enabled.
	// Enumeration Value:
	// true
	// false.
	EnableInternetAccess interface{} `field:"optional" json:"enableInternetAccess" yaml:"enableInternetAccess"`
	// Property needVerifyZeroDevice: Specifies whether to enable trusted device verification.
	//
	// Enumeration Value:
	// true
	// false.
	NeedVerifyZeroDevice interface{} `field:"optional" json:"needVerifyZeroDevice" yaml:"needVerifyZeroDevice"`
	// Property officeSiteName: The name of the workspace.
	//
	// The name must be 2 to 255 characters in length. It must start with a letter and cannot start with http:\/\/ or https:\/\/. The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
	OfficeSiteName interface{} `field:"optional" json:"officeSiteName" yaml:"officeSiteName"`
	// Property verifyCode: The verification code.
	//
	// If the CEN instance that you specify for the CenId parameter belongs to another Alibaba Cloud account, you must call the SendVerifyCode operation to obtain the verification code.
	VerifyCode interface{} `field:"optional" json:"verifyCode" yaml:"verifyCode"`
	// Property vSwitchId: The IDs of the vSwitches in the VPC.
	//
	// This parameter is required when you create a CloudBox-based workspace.
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
}

