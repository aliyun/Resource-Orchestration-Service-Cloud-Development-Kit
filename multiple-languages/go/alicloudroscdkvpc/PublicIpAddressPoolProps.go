package alicloudroscdkvpc


// Properties for defining a `PublicIpAddressPool`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-publicipaddresspool
type PublicIpAddressPoolProps struct {
	// Property bizType: The business type of IP address pool.Value: Cloudbox: Cloud Box.Cloud box users support to select this type. Default (default): default, indicating non -special types.
	BizType interface{} `field:"optional" json:"bizType" yaml:"bizType"`
	// Property description: Description of the address pool instance.
	//
	// The length is 0-256 characters, and you cannot start with http:\/\/ or https: \/\/.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property isp: The line type.
	//
	// Valid values:
	// BGP (default): BGP (Multi-ISP) lines. All regions support BGP (Multi-ISP) EIPs.
	// BGP_PRO: BGP (Multi-ISP) Pro lines.
	// Only the following regions support BGP (Multi-ISP) Pro lines:
	// China (Hong Kong), Singapore, Malaysia (Kuala Lumpur), Philippines (Manila), Indonesia (Jakarta), and Thailand (Bangkok).
	// For more information about BGP (Multi-ISP) and BGP (Multi-ISP) Pro, see EIP line types.
	// If you are allowed to use single-ISP bandwidth, you can also choose one of the following values:
	// ChinaTelecom: China Telecom
	// ChinaUnicom: China Unicom
	// ChinaMobile: China Mobile
	// ChinaTelecom_L2: China Telecom L2
	// ChinaUnicom_L2: China Unicom L2
	// ChinaMobile_L2: China Mobile L2
	// If your services are deployed in China East 1 Finance, you must set this parameter to BGP_FinanceCloud.
	Isp interface{} `field:"optional" json:"isp" yaml:"isp"`
	// Property name: The name of the address pool instance.
	//
	// The length is 0-128 characters, and you cannot start with http: \/\/ or https: \/\/.
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	// Property resourceGroupId: The ID of the resource group that the IP address pool belongs to.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property securityProtectionTypes: Safety protection level.
	//
	// When configured as empty, the default is DDOS protection (basic version).
	// When configured as Antiddos_enhanced, it means DDOS protection (enhanced version).
	SecurityProtectionTypes interface{} `field:"optional" json:"securityProtectionTypes" yaml:"securityProtectionTypes"`
	// Property tags: The list of container group tags in the form of key\/value pairs.
	//
	// You can define a maximum of 20 tags for each container group.
	Tags *[]*RosPublicIpAddressPool_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property zones: The available areas of the IP address pool.
	//
	// The Biztype value is Cloudbox, that is, when the type of IP address pool is a cloud box, the parameter must be filled.
	Zones interface{} `field:"optional" json:"zones" yaml:"zones"`
}

