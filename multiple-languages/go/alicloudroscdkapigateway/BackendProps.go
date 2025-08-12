package alicloudroscdkapigateway


// Properties for defining a `Backend`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-backend
type BackendProps struct {
	// Property backendName: The name of the backend service.
	BackendName interface{} `field:"required" json:"backendName" yaml:"backendName"`
	// Property backendType: The type the backend service.
	//
	// Allowed values: HTTP, VPC, FC_EVENT, FC_EVENT_V3, FC_HTTP, FC_HTTP_V3, OSS, MOCK.
	BackendType interface{} `field:"required" json:"backendType" yaml:"backendType"`
	// Property description: The description.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property tags: The list of tags in the form of key\/value pairs.
	//
	// You can define a maximum of 20 tags.
	Tags *[]*RosBackend_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

