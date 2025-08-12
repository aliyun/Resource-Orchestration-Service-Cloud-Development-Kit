package alicloudroscdkapigateway


// Properties for defining a `RosBackend`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-backend
type RosBackendProps struct {
	BackendName interface{} `field:"required" json:"backendName" yaml:"backendName"`
	BackendType interface{} `field:"required" json:"backendType" yaml:"backendType"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	Tags *[]*RosBackend_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

