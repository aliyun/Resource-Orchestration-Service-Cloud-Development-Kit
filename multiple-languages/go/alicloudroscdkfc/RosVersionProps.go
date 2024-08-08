package alicloudroscdkfc


// Properties for defining a `RosVersion`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-version
type RosVersionProps struct {
	ServiceName interface{} `field:"required" json:"serviceName" yaml:"serviceName"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
}

