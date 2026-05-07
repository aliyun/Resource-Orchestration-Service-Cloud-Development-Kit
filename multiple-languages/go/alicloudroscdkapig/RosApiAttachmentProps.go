package alicloudroscdkapig


// Properties for defining a `RosApiAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-apiattachment
type RosApiAttachmentProps struct {
	HttpApiId interface{} `field:"required" json:"httpApiId" yaml:"httpApiId"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	DomainIds interface{} `field:"optional" json:"domainIds" yaml:"domainIds"`
	RouteId interface{} `field:"optional" json:"routeId" yaml:"routeId"`
}

