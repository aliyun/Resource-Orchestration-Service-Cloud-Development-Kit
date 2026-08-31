package alicloudroscdkcloudfw


// Properties for defining a `FwSwitch`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-fwswitch
type FwSwitchProps struct {
	// Property ipaddrList: The IP address list.
	//
	// **Note**: The IpaddrList, RegionList, and ResourceTypeList arguments are not allowed to be empty at the same time. A value must be set for one of the three arguments.
	IpaddrList interface{} `field:"optional" json:"ipaddrList" yaml:"ipaddrList"`
	// Property ipVersion: The IP version number.
	IpVersion interface{} `field:"optional" json:"ipVersion" yaml:"ipVersion"`
	// Property memberUid: The member unique identifier.
	MemberUid interface{} `field:"optional" json:"memberUid" yaml:"memberUid"`
	// Property regionList: The region list.
	//
	// **Note**: The IpaddrList, RegionList, and ResourceTypeList arguments are not allowed to be empty at the same time. A value must be set for one of the three arguments.
	RegionList interface{} `field:"optional" json:"regionList" yaml:"regionList"`
	// Property resourceTypeList: The list of asset types.
	//
	// Valid values:
	// - BastionHostEgressIP: the egress IP address of a bastion host.
	// - BastionHostIngressIP: the ingress IP address of a bastion host.
	// - EcsEIP: the EIP of an ECS instance.
	// - EcsPublicIP: the public IP address of an ECS instance.
	// - EIP: an EIP.
	// - EniEIP: the EIP of an ENI.
	// - NatEIP: the EIP of a NAT gateway.
	// - SlbEIP: the EIP of an SLB instance or a CLB instance.
	// - SlbPublicIP: the public IP address of an SLB instance or a CLB instance.
	// - NatPublicIP: the public IP address of a NAT gateway.
	// - HAVIP: an HAVIP.
	// - NlbEIP: the EIP of an NLB instance.
	// - ApiGatewayEIP: the public IP address of an API gateway.
	// - AlbEIP: the EIP of an ALB instance.
	// - AiGatewayEIP: the public IP address of an AI gateway.
	// - GaEIP: the EIP of a GA instance.
	// - SwasEIP: the public IP address of a Simple Application Server instance.
	// - EcdEIP: the public IP address of an Elastic Desktop Service instance.
	// - BastionHostIP: the IP address of a bastion host.
	// > You must specify at least one of the `IpaddrList`, `RegionList`, and
	// `ResourceTypeList` parameters.
	ResourceTypeList interface{} `field:"optional" json:"resourceTypeList" yaml:"resourceTypeList"`
}

