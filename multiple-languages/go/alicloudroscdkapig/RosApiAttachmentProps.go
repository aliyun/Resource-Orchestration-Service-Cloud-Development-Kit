package alicloudroscdkapig


// Properties for defining a `RosApiAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-apiattachment
type RosApiAttachmentProps struct {
	BackendScene interface{} `field:"required" json:"backendScene" yaml:"backendScene"`
	EnvironmentId interface{} `field:"required" json:"environmentId" yaml:"environmentId"`
	HttpApiId interface{} `field:"required" json:"httpApiId" yaml:"httpApiId"`
	ServiceConfigs interface{} `field:"required" json:"serviceConfigs" yaml:"serviceConfigs"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	DomainIds interface{} `field:"optional" json:"domainIds" yaml:"domainIds"`
	RouteId interface{} `field:"optional" json:"routeId" yaml:"routeId"`
}

