package alicloudroscdkecs


// Properties for defining a `AssignPrivateIpAddresses`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-assignprivateipaddresses
type AssignPrivateIpAddressesProps struct {
	// Property networkInterfaceId: The ID of the ENI.
	NetworkInterfaceId interface{} `field:"required" json:"networkInterfaceId" yaml:"networkInterfaceId"`
	// Property privateIpAddresses: One or multiple secondary private IP addresses selected from the CIDR block of the VSwitch that hosts the ENI.
	//
	// Valid values of number of private ip addresses:
	// When the ENI is in the Available state: 1 to 10.
	// When the ENI is in the InUse state: limited by the instance type.
	// For more information, see Instance type families.
	// You must specify either the PrivateIpAddresses parameter or the SecondaryPrivateIpAddressCount parameter to assign secondary private IP addresses.
	PrivateIpAddresses interface{} `field:"optional" json:"privateIpAddresses" yaml:"privateIpAddresses"`
	// Property secondaryPrivateIpAddressCount: The specified number of private IP addresses to be assigned by the ECS instance.
	SecondaryPrivateIpAddressCount interface{} `field:"optional" json:"secondaryPrivateIpAddressCount" yaml:"secondaryPrivateIpAddressCount"`
}

