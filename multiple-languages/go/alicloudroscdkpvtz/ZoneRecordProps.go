package alicloudroscdkpvtz


// Properties for defining a `ZoneRecord`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pvtz-zonerecord
type ZoneRecordProps struct {
	// Property rr: Host record, if you want to resolve @.exmaple.com, the host record should fill in "@" instead of empty.
	Rr interface{} `field:"required" json:"rr" yaml:"rr"`
	// Property status: Allowed values: [ENABLE, DISABLE].
	Status interface{} `field:"required" json:"status" yaml:"status"`
	// Property type: Analyze record type, currently only supports A, AAAA, CNAME, TXT, MX, PTR, SRV.
	Type interface{} `field:"required" json:"type" yaml:"type"`
	// Property value: Record value.
	Value interface{} `field:"required" json:"value" yaml:"value"`
	// Property zoneId: Zone Id.
	ZoneId interface{} `field:"required" json:"zoneId" yaml:"zoneId"`
	// Property priority: MX record priority, value range [1,99].
	//
	// Default to 10.
	Priority interface{} `field:"optional" json:"priority" yaml:"priority"`
	// Property ttl: Survival time, default is 60.
	Ttl interface{} `field:"optional" json:"ttl" yaml:"ttl"`
}

