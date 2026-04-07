package alicloudroscdkvpc


// Properties for defining a `RosDhcpOptionsSet`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-dhcpoptionsset
type RosDhcpOptionsSetProps struct {
	DhcpOptionsSetDescription interface{} `field:"optional" json:"dhcpOptionsSetDescription" yaml:"dhcpOptionsSetDescription"`
	DhcpOptionsSetName interface{} `field:"optional" json:"dhcpOptionsSetName" yaml:"dhcpOptionsSetName"`
	DomainName interface{} `field:"optional" json:"domainName" yaml:"domainName"`
	DomainNameServers interface{} `field:"optional" json:"domainNameServers" yaml:"domainNameServers"`
	Ipv6LeaseTime interface{} `field:"optional" json:"ipv6LeaseTime" yaml:"ipv6LeaseTime"`
	LeaseTime interface{} `field:"optional" json:"leaseTime" yaml:"leaseTime"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

