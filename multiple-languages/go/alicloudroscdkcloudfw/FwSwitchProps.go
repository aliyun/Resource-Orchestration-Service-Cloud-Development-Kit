package alicloudroscdkcloudfw


// Properties for defining a `FwSwitch`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-fwswitch
type FwSwitchProps struct {
	// Property ipaddrList: The IP address list.
	//
	// **Note**: The IpaddrList, RegionList, and ResourceTypeList arguments are not allowed to be empty at the same time. A value must be set for one of the three arguments.
	IpaddrList interface{} `field:"optional" json:"ipaddrList" yaml:"ipaddrList"`
	// Property regionList: The region list.
	//
	// **Note**: The IpaddrList, RegionList, and ResourceTypeList arguments are not allowed to be empty at the same time. A value must be set for one of the three arguments.
	RegionList interface{} `field:"optional" json:"regionList" yaml:"regionList"`
	// Property resourceTypeList: The asset type list.
	//
	// Valid values:
	// - BastionHostIP: Bastion machine exit IP.
	// - BastionHostIngressIP: The entrance IP of the fortress machine.
	// - EcsEIP: ECS EIP.
	// - EcsPublicIP: ECS public network IP.
	// - EIP: Elastic Public IP.
	// - EniEIP: Elastic Network card EIP.
	// - NatEIP: NAT EIP.
	// - SlbEIP: SLB EIP.
	// - SlbPublicIP: SLB public network IP.
	// - NatPublicIP: NAT public IP
	// - HAVIP: High Availability Virtual IP.
	// **Note**: The IpaddrList, RegionList, and ResourceTypeList arguments are not allowed to be empty at the same time. A value must be set for one of the three arguments.
	ResourceTypeList interface{} `field:"optional" json:"resourceTypeList" yaml:"resourceTypeList"`
}

