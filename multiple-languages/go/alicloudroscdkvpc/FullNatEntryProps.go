package alicloudroscdkvpc


// Properties for defining a `FullNatEntry`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-fullnatentry
type FullNatEntryProps struct {
	// Property accessIp: The backend IP address to be modified in FULLNAT address translation.
	AccessIp interface{} `field:"required" json:"accessIp" yaml:"accessIp"`
	// Property accessPort: The backend port to be modified in the mapping of FULLNAT port.
	//
	// Valid values: 1 to 65535.
	AccessPort interface{} `field:"required" json:"accessPort" yaml:"accessPort"`
	// Property fullNatTableId: The ID of the FULLNAT table to which the FULLNAT entry belongs.
	FullNatTableId interface{} `field:"required" json:"fullNatTableId" yaml:"fullNatTableId"`
	// Property ipProtocol: The protocol of the packets that are forwarded by the port.
	//
	// Valid values:
	// TCP
	// UDP.
	IpProtocol interface{} `field:"required" json:"ipProtocol" yaml:"ipProtocol"`
	// Property natIp: The NAT IP address that provides address translation.
	NatIp interface{} `field:"required" json:"natIp" yaml:"natIp"`
	// Property natIpPort: The frontend port to be modified in the mapping of FULLNAT port.
	//
	// Valid values: 1 to 65535.
	NatIpPort interface{} `field:"required" json:"natIpPort" yaml:"natIpPort"`
	// Property networkInterfaceId: The elastic network interface (ENI) ID.
	NetworkInterfaceId interface{} `field:"required" json:"networkInterfaceId" yaml:"networkInterfaceId"`
	// Property fullNatEntryDescription: The description of the FULLNAT entry.
	//
	// This parameter is optional. If you enter a description, the description must be 2 to 256 characters in length, and cannot start with http:\/\/ or https:\/\/.
	FullNatEntryDescription interface{} `field:"optional" json:"fullNatEntryDescription" yaml:"fullNatEntryDescription"`
	// Property fullNatEntryName: The FULLNAT entry name.
	//
	// The name must be 2 to 128 characters in length. It must start with a letter but cannot start with http:\/\/ or https:\/\/.
	FullNatEntryName interface{} `field:"optional" json:"fullNatEntryName" yaml:"fullNatEntryName"`
}

