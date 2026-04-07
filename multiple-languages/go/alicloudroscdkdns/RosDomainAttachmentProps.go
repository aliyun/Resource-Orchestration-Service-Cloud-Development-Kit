package alicloudroscdkdns


// Properties for defining a `RosDomainAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-domainattachment
type RosDomainAttachmentProps struct {
	DomainNames interface{} `field:"required" json:"domainNames" yaml:"domainNames"`
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
}

