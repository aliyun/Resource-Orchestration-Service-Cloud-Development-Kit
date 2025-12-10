package alicloudroscdkesa


// Properties for defining a `RosRecord`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-record
type RosRecordProps struct {
	Data interface{} `field:"required" json:"data" yaml:"data"`
	RecordName interface{} `field:"required" json:"recordName" yaml:"recordName"`
	RecordType interface{} `field:"required" json:"recordType" yaml:"recordType"`
	SiteId interface{} `field:"required" json:"siteId" yaml:"siteId"`
	AuthConf interface{} `field:"optional" json:"authConf" yaml:"authConf"`
	BizName interface{} `field:"optional" json:"bizName" yaml:"bizName"`
	Comment interface{} `field:"optional" json:"comment" yaml:"comment"`
	HostPolicy interface{} `field:"optional" json:"hostPolicy" yaml:"hostPolicy"`
	Proxied interface{} `field:"optional" json:"proxied" yaml:"proxied"`
	SourceType interface{} `field:"optional" json:"sourceType" yaml:"sourceType"`
	Ttl interface{} `field:"optional" json:"ttl" yaml:"ttl"`
}

