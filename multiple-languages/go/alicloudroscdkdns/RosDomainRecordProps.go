package alicloudroscdkdns


// Properties for defining a `RosDomainRecord`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-domainrecord
type RosDomainRecordProps struct {
	DomainName interface{} `field:"required" json:"domainName" yaml:"domainName"`
	Rr interface{} `field:"required" json:"rr" yaml:"rr"`
	Type interface{} `field:"required" json:"type" yaml:"type"`
	Value interface{} `field:"required" json:"value" yaml:"value"`
	Line interface{} `field:"optional" json:"line" yaml:"line"`
	Priority interface{} `field:"optional" json:"priority" yaml:"priority"`
	Ttl interface{} `field:"optional" json:"ttl" yaml:"ttl"`
}

