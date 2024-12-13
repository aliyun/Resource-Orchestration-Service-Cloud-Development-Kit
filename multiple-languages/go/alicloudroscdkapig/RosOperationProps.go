package alicloudroscdkapig


// Properties for defining a `RosOperation`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-operation
type RosOperationProps struct {
	HttpApiId interface{} `field:"required" json:"httpApiId" yaml:"httpApiId"`
	Method interface{} `field:"required" json:"method" yaml:"method"`
	OperationName interface{} `field:"required" json:"operationName" yaml:"operationName"`
	Path interface{} `field:"required" json:"path" yaml:"path"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	Mock interface{} `field:"optional" json:"mock" yaml:"mock"`
}

