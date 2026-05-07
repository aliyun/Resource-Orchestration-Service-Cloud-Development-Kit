package alicloudroscdkapig


// Properties for defining a `ApiAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-apiattachment
type ApiAttachmentProps struct {
	// Property httpApiId: The ID of the HTTP API.
	HttpApiId interface{} `field:"required" json:"httpApiId" yaml:"httpApiId"`
	// Property description: The description of publication.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property domainIds: The list of user domain names associated with API publishing.
	DomainIds interface{} `field:"optional" json:"domainIds" yaml:"domainIds"`
	// Property routeId: The route ID.
	//
	// When publishing an HTTP API route, it must be passed in.
	RouteId interface{} `field:"optional" json:"routeId" yaml:"routeId"`
}

