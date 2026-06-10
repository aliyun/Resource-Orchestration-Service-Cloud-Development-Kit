package alicloudroscdkeflo


// Properties for defining a `Vpd`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eflo-vpd
type VpdProps struct {
	// Property cidr: The CIDR block of the VPD.
	//
	// * We recommend that you use an RFC private endpoint as the Lingjun CIDR block, such as 10.0.0.0\/8,172.16.0.0\/12,192.168.0.0\/16. In scenarios where the Doringjun CIDR block is connected to each other or where the Lingjun CIDR block is connected to a VPC, make sure that the addresses do not conflict with each other. * You can also use a custom CIDR block other than 100.64.0.0\/10, 224.0.0.0\/4, 127.0.0.0\/8, or 169.254.0.0\/16 and their subnets as the primary IPv4 CIDR block of the VPD.
	Cidr interface{} `field:"required" json:"cidr" yaml:"cidr"`
	// Property vpdName: Lingjun CIDR block instance name.
	VpdName interface{} `field:"required" json:"vpdName" yaml:"vpdName"`
	// Property resourceGroupId: System-defined parameter.
	//
	// Value: **ChangeResourceGroup**.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property secondaryCidrBlocks: List of additional network segment information.
	SecondaryCidrBlocks interface{} `field:"optional" json:"secondaryCidrBlocks" yaml:"secondaryCidrBlocks"`
	// Property subnets: Lingjun subnet information List.
	Subnets interface{} `field:"optional" json:"subnets" yaml:"subnets"`
	// Property tags: Tags of vpd.
	Tags *[]*RosVpd_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

