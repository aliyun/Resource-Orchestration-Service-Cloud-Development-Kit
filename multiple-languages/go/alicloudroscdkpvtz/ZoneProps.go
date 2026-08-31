package alicloudroscdkpvtz


// Properties for defining a `Zone`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pvtz-zone
type ZoneProps struct {
	// Property zoneName: Zone name.
	ZoneName interface{} `field:"required" json:"zoneName" yaml:"zoneName"`
	// Property dnsGroup: The location of the built-in authoritative zone.
	//
	// Valid values:
	// - NORMAL_ZONE: Standard zone. DNS responses are cached. If a cache miss occurs,
	// the query is sent to the built-in authoritative standard zone. The time to live
	// (TTL) value affects the time when a DNS record change takes effect. You cannot
	// use custom DNS lines or weighted round-robin.
	// - FAST_ZONE: Accelerated zone (recommended). DNS queries are directly responded
	// to with the lowest latency. DNS record changes take effect in real time. You can
	// use custom DNS lines and weighted round-robin.
	// Default value: NORMAL_ZONE.
	// > The built-in authoritative accelerated zone is located before the cache module.
	// DNS responses are not cached. This may increase the number of DNS queries and
	// your costs.
	// > Starting from April 30, 2025 (UTC+8), when new users activate Cloud DNS
	// PrivateZone, added zones are set as accelerated zones by default.
	DnsGroup interface{} `field:"optional" json:"dnsGroup" yaml:"dnsGroup"`
	// Property ignoredStackTagKeys: Stack tag keys to ignore.
	IgnoredStackTagKeys interface{} `field:"optional" json:"ignoredStackTagKeys" yaml:"ignoredStackTagKeys"`
	// Property proxyPattern: Specifies whether to enable subdomain recursive proxy.
	//
	// Valid values:
	// - ZONE: Disables the feature. If a DNS query for a subdomain that does not exist
	// under the current domain name is received, an NXDOMAIN error is returned.
	// - RECORD: Enables the feature. If a DNS query for a subdomain that does not exist
	// under the current domain name is received, the query is processed by the
	// forwarding and recursion modules in sequence. The final result is used to respond
	// to the DNS query.
	// Default value: ZONE.
	ProxyPattern interface{} `field:"optional" json:"proxyPattern" yaml:"proxyPattern"`
	// Property remark: 50 characters at most.
	//
	// It can only contain numbers, Chinese, English and special characters: "_-,.，。".
	Remark interface{} `field:"optional" json:"remark" yaml:"remark"`
	// Property resourceGroupId: Resource group id.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property tags: Tags to attach to instance.
	//
	// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosZone_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

