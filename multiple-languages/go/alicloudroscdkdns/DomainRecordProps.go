package alicloudroscdkdns


// Properties for defining a `DomainRecord`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-domainrecord
type DomainRecordProps struct {
	// Property domainName: Domain name.
	DomainName interface{} `field:"required" json:"domainName" yaml:"domainName"`
	// Property rr: The host record.
	//
	// To resolve example.com, set the host record to "@" instead of leaving it empty.
	Rr interface{} `field:"required" json:"rr" yaml:"rr"`
	// Property type: Parse record type, see parsing record type format.
	Type interface{} `field:"required" json:"type" yaml:"type"`
	// Property value: Record value.
	Value interface{} `field:"required" json:"value" yaml:"value"`
	// Property line: Parse the line, the default is default.
	//
	// See parsing line enumeration.
	Line interface{} `field:"optional" json:"line" yaml:"line"`
	// Property priority: The priority of the MX record.
	//
	// Valid values: `[1,50]`.
	// This parameter is required if the record type is MX. A smaller value indicates a
	// higher priority.
	Priority interface{} `field:"optional" json:"priority" yaml:"priority"`
	// Property ttl: The time to live (TTL) value of the Domain Name System (DNS) record.
	//
	// Default
	// value: 600. Unit: seconds.
	Ttl interface{} `field:"optional" json:"ttl" yaml:"ttl"`
}

