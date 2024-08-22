package alicloudroscdkvpc


// Properties for defining a `RosFullNatEntry`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-fullnatentry
type RosFullNatEntryProps struct {
	AccessIp interface{} `field:"required" json:"accessIp" yaml:"accessIp"`
	AccessPort interface{} `field:"required" json:"accessPort" yaml:"accessPort"`
	FullNatTableId interface{} `field:"required" json:"fullNatTableId" yaml:"fullNatTableId"`
	IpProtocol interface{} `field:"required" json:"ipProtocol" yaml:"ipProtocol"`
	NatIp interface{} `field:"required" json:"natIp" yaml:"natIp"`
	NatIpPort interface{} `field:"required" json:"natIpPort" yaml:"natIpPort"`
	NetworkInterfaceId interface{} `field:"required" json:"networkInterfaceId" yaml:"networkInterfaceId"`
	FullNatEntryDescription interface{} `field:"optional" json:"fullNatEntryDescription" yaml:"fullNatEntryDescription"`
	FullNatEntryName interface{} `field:"optional" json:"fullNatEntryName" yaml:"fullNatEntryName"`
}

