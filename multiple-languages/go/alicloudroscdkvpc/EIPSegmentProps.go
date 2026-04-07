package alicloudroscdkvpc


// Properties for defining a `EIPSegment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-eipsegment
type EIPSegmentProps struct {
	// Property eipMask: The mask of the contiguous EIP group.
	//
	// Valid values:
	// 28: 16 contiguous EIPs are allocated for one call.
	// 27: 32 contiguous EIPs are allocated for one call.
	// 26: 64 contiguous EIPs are allocated for one call.
	// 25: 128 contiguous EIPs are allocated for one call.
	// 24: 256 contiguous EIPs are allocated for one call.
	// Note The actual number of assigned EIPs may be less than the expected number because one,
	// three, or four EIPs may be reserved.
	EipMask interface{} `field:"required" json:"eipMask" yaml:"eipMask"`
	// Property bandwidth: The maximum bandwidth of the contiguous EIPs.
	//
	// Unit: Mbit\/s. Default value: 5.
	Bandwidth interface{} `field:"optional" json:"bandwidth" yaml:"bandwidth"`
	// Property internetChargeType: The metering method of the contiguous EIPs.
	//
	// Valid values:
	// PayByBandwidth: Fees are charged based on bandwidth usage. This is the default value.
	// PayByTraffic: Fees are charged based on data transfer.
	// Note If the Netmode parameter is set to hybrid, InternetChargeType is set to PayByBandwidth.
	InternetChargeType interface{} `field:"optional" json:"internetChargeType" yaml:"internetChargeType"`
	// Property isp: The line type.
	//
	// Valid values:
	// - **BGP** (default): BGP (multi-line). All regions support BGP (multi-line) EIPs.
	// - **BGP_PRO**: BGP (multi-line)_Premium. Currently supported only in China (Hong Kong),
	//    Singapore, Japan (Tokyo), Malaysia (Kuala Lumpur), Philippines (Manila),
	//    India (Jakarta), and Thailand (Bangkok).
	//
	// For more information about BGP (multi-line) and BGP (multi-line)_Premium,
	// see [EIP Line Type](~~32321~~).
	//
	// If you are a single-bandwidth whitelist user, you can also choose:
	// - **ChinaTelecom**: China Telecom
	// - **ChinaUnicom**: China Unicom
	// - **ChinaMobile**: China Mobile
	// - **ChinaTelecom_L2**: China Telecom L2
	// - **ChinaUnicom_L2**: China Unicom L2
	// - **ChinaMobile_L2**: China Mobile L2
	//
	// If you are a Hangzhou Finance Cloud user, this field is required with value: **BGP_FinanceCloud**.
	Isp interface{} `field:"optional" json:"isp" yaml:"isp"`
	// Property netmode: The network type.
	//
	// Valid values:
	// public: the Internet. This is the default value. After contiguous EIPs are associated with
	// cloud resources, the cloud resources can access the Internet by using the EIPs.
	// hybrid: the hybrid cloud. After contiguous EIPs are associated with cloud resources, the
	// cloud resources can access the hybrid cloud by using the EIPs.
	// Note This network type is available only to users who are added to the whitelist. To use
	// this network type, contact your customer manager.
	Netmode interface{} `field:"optional" json:"netmode" yaml:"netmode"`
	// Property resourceGroupId: The ID of the resource group to which the EIPs belong.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property zone: The zone of the contiguous EIP group.
	Zone interface{} `field:"optional" json:"zone" yaml:"zone"`
}

