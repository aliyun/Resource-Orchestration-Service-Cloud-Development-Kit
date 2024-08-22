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
}

