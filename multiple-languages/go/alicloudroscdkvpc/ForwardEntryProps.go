package alicloudroscdkvpc


// Properties for defining a `ForwardEntry`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-forwardentry
type ForwardEntryProps struct {
	// Property externalIp: Source IP, must belongs to bandwidth package internet IP.
	ExternalIp interface{} `field:"required" json:"externalIp" yaml:"externalIp"`
	// Property externalPort: Source port, now support [1-65535]|Any|x\/y.
	ExternalPort interface{} `field:"required" json:"externalPort" yaml:"externalPort"`
	// Property forwardTableId: Create forward entry in specified forward table.
	ForwardTableId interface{} `field:"required" json:"forwardTableId" yaml:"forwardTableId"`
	// Property internalIp: Destination IP, must belong to VPC private IP.
	InternalIp interface{} `field:"required" json:"internalIp" yaml:"internalIp"`
	// Property internalPort: Destination port, now support [1-65535]|Any|x\/y.
	InternalPort interface{} `field:"required" json:"internalPort" yaml:"internalPort"`
	// Property ipProtocol: Supported protocol, Now support 'TCP|UDP|Any'.
	IpProtocol interface{} `field:"required" json:"ipProtocol" yaml:"ipProtocol"`
	// Property forwardEntryName: the name of the DNAT rule is 2-128 characters long and must start with a letter or Chinese, but cannot begin with HTTP:\/\/ or https:\/\/.
	ForwardEntryName interface{} `field:"optional" json:"forwardEntryName" yaml:"forwardEntryName"`
	// Property portBreak: Specifies whether to remove limits on the port range.
	PortBreak interface{} `field:"optional" json:"portBreak" yaml:"portBreak"`
}

