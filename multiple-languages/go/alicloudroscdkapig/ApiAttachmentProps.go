package alicloudroscdkapig


// Properties for defining a `ApiAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-apiattachment
type ApiAttachmentProps struct {
	// Property backendScene: API release scenario.
	BackendScene interface{} `field:"required" json:"backendScene" yaml:"backendScene"`
	// Property environmentId: The ID of the environment to which the API is to deploy.
	EnvironmentId interface{} `field:"required" json:"environmentId" yaml:"environmentId"`
	// Property httpApiId: The ID of the HTTP API.
	HttpApiId interface{} `field:"required" json:"httpApiId" yaml:"httpApiId"`
	// Property serviceConfigs: Services associated with API publishing and their configurations.
	ServiceConfigs interface{} `field:"required" json:"serviceConfigs" yaml:"serviceConfigs"`
	// Property description: The description of publication.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property domainIds: The list of user domain names associated with API publishing.
	DomainIds interface{} `field:"optional" json:"domainIds" yaml:"domainIds"`
	// Property routeId: The route ID.
	//
	// When publishing an HTTP API route, it must be passed in.
	RouteId interface{} `field:"optional" json:"routeId" yaml:"routeId"`
}

