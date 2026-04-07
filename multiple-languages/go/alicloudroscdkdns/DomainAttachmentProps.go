package alicloudroscdkdns


// Properties for defining a `DomainAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-domainattachment
type DomainAttachmentProps struct {
	// Property domainNames: The list of domain names to attach.
	DomainNames interface{} `field:"required" json:"domainNames" yaml:"domainNames"`
	// Property instanceId: The ID of the instance.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
}

