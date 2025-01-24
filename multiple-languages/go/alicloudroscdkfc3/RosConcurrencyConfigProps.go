package alicloudroscdkfc3


// Properties for defining a `RosConcurrencyConfig`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-concurrencyconfig
type RosConcurrencyConfigProps struct {
	FunctionName interface{} `field:"required" json:"functionName" yaml:"functionName"`
	ReservedConcurrency interface{} `field:"required" json:"reservedConcurrency" yaml:"reservedConcurrency"`
}

