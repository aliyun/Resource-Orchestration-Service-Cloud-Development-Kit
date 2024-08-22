package alicloudroscdkga


// Properties for defining a `BasicIpSet`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicipset
type BasicIpSetProps struct {
	// Property acceleratorId: The ID of the basic GA instance.
	AcceleratorId interface{} `field:"required" json:"acceleratorId" yaml:"acceleratorId"`
	// Property accelerateRegionId: The ID of the acceleration region.
	AccelerateRegionId interface{} `field:"optional" json:"accelerateRegionId" yaml:"accelerateRegionId"`
	// Property bandwidth: The bandwidth that you want to allocate to the acceleration region.
	//
	// Unit: Mbit\/s.You must allocate at least 2 Mbit\/s of bandwidth to the acceleration region.
	Bandwidth interface{} `field:"optional" json:"bandwidth" yaml:"bandwidth"`
	// Property ispType: The line type of the elastic IP address (EIP) in the acceleration region.
	//
	// Valid values:
	// BGP (default): BGP (Multi-ISP) lines.
	// BGP_PRO: BGP (Multi-ISP) Pro lines.
	// Valid values if you are allowed to use single-ISP bandwidth:
	// ChinaTelecom
	// ChinaUnicom
	// ChinaMobile
	// ChinaTelecom_L2
	// ChinaUnicom_L2
	// ChinaMobile_L2.
	IspType interface{} `field:"optional" json:"ispType" yaml:"ispType"`
}

