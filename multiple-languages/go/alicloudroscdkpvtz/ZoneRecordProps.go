package alicloudroscdkpvtz


// Properties for defining a `ZoneRecord`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pvtz-zonerecord
type ZoneRecordProps struct {
	// Property rr: The host record.
	//
	// A host record is the prefix of a domain name. Common host
	// records include www, @, \* (for wildcard DNS), and mail (for mailboxes).
	// For example, to resolve @.example.com, set the host record to "@", not an empty
	// string.
	Rr interface{} `field:"required" json:"rr" yaml:"rr"`
	// Property status: The status of the DNS record.
	//
	// Valid values:
	// - ENABLE: Enables DNS resolution.
	// - DISABLE: Pauses DNS resolution.
	Status interface{} `field:"required" json:"status" yaml:"status"`
	// Property type: The type of the DNS record.
	//
	// The following types are supported:
	// - A: Maps a domain name to an IPv4 address in dotted decimal notation.
	// - AAAA: Maps a domain name to an IPv6 address.
	// - CNAME: Maps a domain name to another domain name.
	// - TXT: A text record. The text can be up to 255 characters in length. TXT records
	// are often used for Sender Policy Framework (SPF) records to prevent spam.
	// - MX: Maps a domain name to the domain name of a mail server.
	// - PTR: Maps an IP address to a domain name.
	// - SRV: Specifies the server for a specific service. The format is: Priority
	// Weight Port Target. Separate each value with a space.
	// > Before adding a PTR record, configure a reverse lookup zone. For more
	// information, see [Reverse DNS lookups and PTR records]().
	Type interface{} `field:"required" json:"type" yaml:"type"`
	// Property value: Record value.
	Value interface{} `field:"required" json:"value" yaml:"value"`
	// Property zoneId: Zone Id.
	ZoneId interface{} `field:"required" json:"zoneId" yaml:"zoneId"`
	// Property priority: The priority of the MX record.
	//
	// A smaller value indicates a higher priority. Valid
	// values: \[1, 99].
	Priority interface{} `field:"optional" json:"priority" yaml:"priority"`
	// Property ttl: The time to live (TTL).
	//
	// The unit is seconds (s). Valid values are 5, 30, 60, 3600
	// (1 hour), 43200 (12 hours), and 86400 (1 day). The default value is 60.
	Ttl interface{} `field:"optional" json:"ttl" yaml:"ttl"`
}

