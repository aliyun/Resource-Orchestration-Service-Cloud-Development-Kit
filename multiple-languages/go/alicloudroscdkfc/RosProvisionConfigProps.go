package alicloudroscdkfc


// Properties for defining a `RosProvisionConfig`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-provisionconfig
type RosProvisionConfigProps struct {
	FunctionName interface{} `field:"required" json:"functionName" yaml:"functionName"`
	Qualifier interface{} `field:"required" json:"qualifier" yaml:"qualifier"`
	ServiceName interface{} `field:"required" json:"serviceName" yaml:"serviceName"`
	Target interface{} `field:"required" json:"target" yaml:"target"`
}

