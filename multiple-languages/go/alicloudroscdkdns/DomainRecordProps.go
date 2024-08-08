package alicloudroscdkdns


// Properties for defining a `DomainRecord`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-domainrecord
type DomainRecordProps struct {
	// Property domainName: Domain name.
	DomainName interface{} `field:"required" json:"domainName" yaml:"domainName"`
	// Property rr: Host record, if you want to resolve @.exmaple.com, the host record should fill in "@" instead of empty.
	Rr interface{} `field:"required" json:"rr" yaml:"rr"`
	// Property type: Parse record type, see parsing record type format.
	Type interface{} `field:"required" json:"type" yaml:"type"`
	// Property value: Record value.
	Value interface{} `field:"required" json:"value" yaml:"value"`
	// Property line: Parse the line, the default is default.
	//
	// See parsing line enumeration.
	Line interface{} `field:"optional" json:"line" yaml:"line"`
	// Property priority: The priority of the MX record, the value range [1,10], when the record type is MX record, this parameter must be.
	Priority interface{} `field:"optional" json:"priority" yaml:"priority"`
	// Property ttl: The resolution time is valid.
	//
	// The default is 600 seconds (10 minutes). See the TTL definition.
	Ttl interface{} `field:"optional" json:"ttl" yaml:"ttl"`
}

