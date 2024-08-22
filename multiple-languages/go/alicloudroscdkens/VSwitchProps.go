package alicloudroscdkens


// Properties for defining a `VSwitch`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-vswitch
type VSwitchProps struct {
	// Property cidrBlock: The CIDR block of the vSwitch.
	//
	// Take note of the following limits:
	// The subnet mask must be 16 to 29 bits in length.
	// The CIDR block of the vSwitch must fall within the CIDR block of the VPC to which the vSwitch belongs.
	// The CIDR block of the vSwitch cannot be the same as the destination CIDR block in a route entry of the VPC. However, it can be a subset of the destination CIDR block.
	CidrBlock interface{} `field:"required" json:"cidrBlock" yaml:"cidrBlock"`
	// Property ensRegionId: The ID of the edge node.
	EnsRegionId interface{} `field:"required" json:"ensRegionId" yaml:"ensRegionId"`
	// Property networkId: The ID of the network to which the vSwitch that you want to create belongs.
	NetworkId interface{} `field:"required" json:"networkId" yaml:"networkId"`
	// Property description: The description of the vSwitch.
	//
	// The description must be 2 to 256 characters in length. It must start with a letter but cannot start with http:\/\/ or https:\/\/.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property vSwitchName: The name of the vSwitch.
	//
	// The name must meet the following requirements:
	// The name must be 2 to 128 characters in length.
	// The name must start with a letter and cannot start with http:\/\/ or https:\/\/. It can contain letters, digits, colons (:), underscores (_), and hyphens (-).
	// Default value: null.
	VSwitchName interface{} `field:"optional" json:"vSwitchName" yaml:"vSwitchName"`
}

