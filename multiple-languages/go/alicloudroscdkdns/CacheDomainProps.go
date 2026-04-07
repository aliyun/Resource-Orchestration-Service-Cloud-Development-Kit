package alicloudroscdkdns


// Properties for defining a `CacheDomain`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-cachedomain
type CacheDomainProps struct {
	// Property cacheTtlMax: The maximum TTL value for cached records.
	CacheTtlMax interface{} `field:"required" json:"cacheTtlMax" yaml:"cacheTtlMax"`
	// Property cacheTtlMin: The minimum TTL value for cached records.
	CacheTtlMin interface{} `field:"required" json:"cacheTtlMin" yaml:"cacheTtlMin"`
	// Property domainName: The domain name of the DNS cache domain.
	DomainName interface{} `field:"required" json:"domainName" yaml:"domainName"`
	// Property instanceId: The instance ID associated with the DNS cache domain.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	// Property sourceDnsServer: List of source DNS servers.
	SourceDnsServer interface{} `field:"required" json:"sourceDnsServer" yaml:"sourceDnsServer"`
	// Property sourceEdns: Whether EDNS is enabled for the source DNS server.
	SourceEdns interface{} `field:"required" json:"sourceEdns" yaml:"sourceEdns"`
	// Property sourceProtocol: The protocol used by the source DNS server.
	SourceProtocol interface{} `field:"required" json:"sourceProtocol" yaml:"sourceProtocol"`
	// Property remark: Remark for the DNS cache domain.
	Remark interface{} `field:"optional" json:"remark" yaml:"remark"`
}

