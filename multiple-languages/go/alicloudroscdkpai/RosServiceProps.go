package alicloudroscdkpai


// Properties for defining a `RosService`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-service
type RosServiceProps struct {
	ServiceConfig interface{} `field:"required" json:"serviceConfig" yaml:"serviceConfig"`
	Develop interface{} `field:"optional" json:"develop" yaml:"develop"`
	Labels interface{} `field:"optional" json:"labels" yaml:"labels"`
}

