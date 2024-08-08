package alicloudroscdkfc


// Properties for defining a `Version`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-version
type VersionProps struct {
	// Property serviceName: Service name.
	ServiceName interface{} `field:"required" json:"serviceName" yaml:"serviceName"`
	// Property description: Version description.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
}

