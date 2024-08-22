package alicloudroscdkpai


// Properties for defining a `Service`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-service
type ServiceProps struct {
	// Property serviceConfig: Service configuration information.
	ServiceConfig interface{} `field:"required" json:"serviceConfig" yaml:"serviceConfig"`
	// Property develop: Whether to enter the development mode.
	Develop interface{} `field:"optional" json:"develop" yaml:"develop"`
	// Property labels: Service Tag.
	Labels interface{} `field:"optional" json:"labels" yaml:"labels"`
}

