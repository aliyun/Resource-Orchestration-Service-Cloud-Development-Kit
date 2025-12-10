package alicloudroscdkesa


// Properties for defining a `Record`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-record
type RecordProps struct {
	// Property data: The DNS record information.
	//
	// The format of this field varies based on the record type. For more information, see [References] https:\/\/www.alibabacloud.com\/help\/doc-detail\/2708761.html?spm=openapi-amp.newDocPublishment.0.0.6a0f281feoeVWr.
	Data interface{} `field:"required" json:"data" yaml:"data"`
	// Property recordName: The record name.
	//
	// This parameter specifies a filter condition for the query.
	RecordName interface{} `field:"required" json:"recordName" yaml:"recordName"`
	// Property recordType: The type of the DNS record, such as A\/AAAA, CNAME, and TXT.
	RecordType interface{} `field:"required" json:"recordType" yaml:"recordType"`
	// Property siteId: The website ID.
	SiteId interface{} `field:"required" json:"siteId" yaml:"siteId"`
	// Property authConf: The origin authentication information of the CNAME record.
	AuthConf interface{} `field:"optional" json:"authConf" yaml:"authConf"`
	// Property bizName: The business scenario of the record for acceleration.
	//
	// Leave the parameter empty if your record is not proxied. Valid values:
	// image_video: video and image.
	// api: API.
	// web: web page.
	BizName interface{} `field:"optional" json:"bizName" yaml:"bizName"`
	// Property comment: The comment of the record.
	//
	// The maximum length is 100 characters.
	Comment interface{} `field:"optional" json:"comment" yaml:"comment"`
	// Property hostPolicy: The origin host policy.
	//
	// This policy takes effect when the record type is CNAME. You can set the policy in two modes:
	// follow_hostname: Follow the host record.
	// follow_origin_domain: match the origin's domain name.
	HostPolicy interface{} `field:"optional" json:"hostPolicy" yaml:"hostPolicy"`
	// Property proxied: Specifies whether to proxy the record.
	//
	// Only CNAME and A\/AAAA records can be proxied. Valid values:
	// true
	// false.
	Proxied interface{} `field:"optional" json:"proxied" yaml:"proxied"`
	// Property sourceType: The origin type for the CNAME record.
	//
	// This parameter is required when you add a CNAME record. Valid values:
	// OSS: OSS bucket.
	// S3: S3 bucket.
	// LB: load balancer.
	// OP: origin pool.
	// Domain: domain name.
	// If you do not pass this parameter or if you leave its value empty, Domain is used by default.
	SourceType interface{} `field:"optional" json:"sourceType" yaml:"sourceType"`
	// Property ttl: The TTL of the record.
	//
	// Unit: seconds. If the value is 1, the TTL of the record is determined by the system.
	Ttl interface{} `field:"optional" json:"ttl" yaml:"ttl"`
}

