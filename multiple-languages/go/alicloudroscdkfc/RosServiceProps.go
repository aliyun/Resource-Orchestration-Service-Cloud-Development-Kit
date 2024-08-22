package alicloudroscdkfc


// Properties for defining a `RosService`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-service
type RosServiceProps struct {
	ServiceName interface{} `field:"required" json:"serviceName" yaml:"serviceName"`
	DeletionForce interface{} `field:"optional" json:"deletionForce" yaml:"deletionForce"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	InternetAccess interface{} `field:"optional" json:"internetAccess" yaml:"internetAccess"`
	LogConfig interface{} `field:"optional" json:"logConfig" yaml:"logConfig"`
	NasConfig interface{} `field:"optional" json:"nasConfig" yaml:"nasConfig"`
	OssMountConfig interface{} `field:"optional" json:"ossMountConfig" yaml:"ossMountConfig"`
	Role interface{} `field:"optional" json:"role" yaml:"role"`
	Tags *[]*RosService_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	TracingConfig interface{} `field:"optional" json:"tracingConfig" yaml:"tracingConfig"`
	VpcBindings interface{} `field:"optional" json:"vpcBindings" yaml:"vpcBindings"`
	VpcConfig interface{} `field:"optional" json:"vpcConfig" yaml:"vpcConfig"`
}

