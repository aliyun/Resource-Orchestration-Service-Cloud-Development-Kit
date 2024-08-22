package alicloudroscdkvpc


// Properties for defining a `DhcpOptionsSet`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-dhcpoptionsset
type DhcpOptionsSetProps struct {
	// Property dhcpOptionsSetDescription: The description of the DHCP options set.
	//
	// The description must be 2 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
	DhcpOptionsSetDescription interface{} `field:"optional" json:"dhcpOptionsSetDescription" yaml:"dhcpOptionsSetDescription"`
	// Property dhcpOptionsSetName: The name of the DHCP options set.
	//
	// The name must be 2 to 128 characters in length and can contain letters, Chinese characters, digits, underscores (_), and hyphens (-). It must start with a letter or a Chinese character.
	DhcpOptionsSetName interface{} `field:"optional" json:"dhcpOptionsSetName" yaml:"dhcpOptionsSetName"`
	// Property domainName: The root domain, for example, example.com. After a DHCP options set is associated with a Virtual Private Cloud (VPC) network, the root domain in the DHCP options set is automatically synchronized to the ECS instances in the VPC network.
	DomainName interface{} `field:"optional" json:"domainName" yaml:"domainName"`
	// Property domainNameServers: The DNS server IP addresses.
	//
	// Note Before you specify any DNS server IP address, all ECS instances in the associated VPC network use the IP addresses of the Alibaba Cloud DNS servers, which are 100.100.2.136 and 100.100.2.138.
	DomainNameServers interface{} `field:"optional" json:"domainNameServers" yaml:"domainNameServers"`
}

