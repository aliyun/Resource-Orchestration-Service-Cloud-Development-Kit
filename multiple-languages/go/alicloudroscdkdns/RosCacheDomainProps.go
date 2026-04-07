package alicloudroscdkdns


// Properties for defining a `RosCacheDomain`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-cachedomain
type RosCacheDomainProps struct {
	CacheTtlMax interface{} `field:"required" json:"cacheTtlMax" yaml:"cacheTtlMax"`
	CacheTtlMin interface{} `field:"required" json:"cacheTtlMin" yaml:"cacheTtlMin"`
	DomainName interface{} `field:"required" json:"domainName" yaml:"domainName"`
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	SourceDnsServer interface{} `field:"required" json:"sourceDnsServer" yaml:"sourceDnsServer"`
	SourceEdns interface{} `field:"required" json:"sourceEdns" yaml:"sourceEdns"`
	SourceProtocol interface{} `field:"required" json:"sourceProtocol" yaml:"sourceProtocol"`
	Remark interface{} `field:"optional" json:"remark" yaml:"remark"`
}

