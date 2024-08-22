package datasource


// Properties for defining a `Addresses`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eip-addresses
type AddressesProps struct {
	// Property addressName: The name of the EIP.
	AddressName interface{} `field:"optional" json:"addressName" yaml:"addressName"`
	// Property allocationId: The ID of the EIP that you want to query.
	AllocationId interface{} `field:"optional" json:"allocationId" yaml:"allocationId"`
	// Property instanceId: The ID of the cloud resource.
	InstanceId interface{} `field:"optional" json:"instanceId" yaml:"instanceId"`
	// Property instanceType: The type of the current bound instance.
	//
	// - **EcsInstance**: an ECS instance of the VPC type.
	// - **SlbInstance**: an SLB instance of the VPC type.
	// - **Nat**:NAT gateway.
	// - **HaVip**: a highly available virtual IP address.
	// - **NetworkInterface**: Secondary ENI.
	InstanceType interface{} `field:"optional" json:"instanceType" yaml:"instanceType"`
	// Property ipAddress: The IP address pool to which the EIP that you want to query belongs.
	IpAddress interface{} `field:"optional" json:"ipAddress" yaml:"ipAddress"`
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
	// Property paymentType: The billing method of the EIP.
	//
	// Valid values:  PrePaid: subscription PostPaid: pay-as-you-go.
	PaymentType interface{} `field:"optional" json:"paymentType" yaml:"paymentType"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property resourceGroupId: The ID of the resource group to which the EIPs belong.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property segmentInstanceId: The ID of the consecutive EIPs.
	//
	// This parameter value is returned only if the EIP is a continuous EIP.
	SegmentInstanceId interface{} `field:"optional" json:"segmentInstanceId" yaml:"segmentInstanceId"`
}

