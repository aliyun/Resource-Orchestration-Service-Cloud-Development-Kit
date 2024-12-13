package alicloudroscdkapig


// Properties for defining a `HttpApi`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-httpapi
type HttpApiProps struct {
	// Property httpApiName: The name of the API.
	HttpApiName interface{} `field:"required" json:"httpApiName" yaml:"httpApiName"`
	// Property protocols: List of API Access Protocols.
	Protocols interface{} `field:"required" json:"protocols" yaml:"protocols"`
	// Property basePath: The base path of the API should start with a \/.
	BasePath interface{} `field:"optional" json:"basePath" yaml:"basePath"`
	// Property description: Description of API.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property type: The type of HTTP API, Valid values: * Http * Rest * WebSocket * HttpIngress.
	Type interface{} `field:"optional" json:"type" yaml:"type"`
}

