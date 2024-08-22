package datasource


// Properties for defining a `PublicIpAddressPools`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-publicipaddresspools
type PublicIpAddressPoolsProps struct {
	// Property isp: The line type.
	//
	// Valid values:
	// BGP (default): BGP (Multi-ISP) lines
	// BGP_PRO: BGP (Multi-ISP) Pro lines
	// For more information about BGP (Multi-ISP) and BGP (Multi-ISP) Pro, see EIP line types.
	// If you are allowed to use single-ISP bandwidth, you can also choose one of the following values:
	// ChinaTelecom: China Telecom
	// ChinaUnicom: China Unicom
	// ChinaMobile: China Mobile
	// ChinaTelecom_L2: China Telecom L2
	// ChinaUnicom_L2: China Unicom L2
	// ChinaMobile_L2: China Mobile L2
	// If your services are deployed in China East 1 Finance,
	// this parameter is required and you must set the value to BGP_FinanceCloud.
	Isp interface{} `field:"optional" json:"isp" yaml:"isp"`
	// Property publicIpAddressPoolName: The name of the IP address pool.
	//
	// This parameter is optional. The name must be 1 to 128 characters in length,
	// and can contain digits, periods (.), underscores (_), and hyphens (-).
	// The name must start with a letter but cannot start with http:\/\/ or https:\/\/.
	PublicIpAddressPoolName interface{} `field:"optional" json:"publicIpAddressPoolName" yaml:"publicIpAddressPoolName"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property resourceGroupId: The ID of the resource group to which the IP address pool belongs.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

