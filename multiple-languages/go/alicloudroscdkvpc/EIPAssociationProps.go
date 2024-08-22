package alicloudroscdkvpc


// Properties for defining a `EIPAssociation`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-eipassociation
type EIPAssociationProps struct {
	// Property allocationId: EIP instance id to bind.
	AllocationId interface{} `field:"required" json:"allocationId" yaml:"allocationId"`
	// Property instanceId: ECS\/SLB\/NAT\/HaVip\/ENI instance id to bid the EIP.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	// Property mode: The mode of association.
	//
	// Valid values:
	// NAT(Default): NAT mode.
	// BINDED: Cut-through mode.
	// MULTI_BINDED: Multi-EIP to ENI mode.
	// This is required only when the value of InstanceType is NetworkInterface.
	Mode interface{} `field:"optional" json:"mode" yaml:"mode"`
	// Property privateIpAddress: An IP address in the CIDR block of the VSwitch.
	//
	// If you leave the option empty, the system allocates a private IP address according to the VPC ID and VSwitch ID.
	PrivateIpAddress interface{} `field:"optional" json:"privateIpAddress" yaml:"privateIpAddress"`
}

