package alicloudroscdkconfig


// Properties for defining a `RosAggregator`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-config-aggregator
type RosAggregatorProps struct {
	AggregatorName interface{} `field:"required" json:"aggregatorName" yaml:"aggregatorName"`
	Description interface{} `field:"required" json:"description" yaml:"description"`
	AggregatorAccounts interface{} `field:"optional" json:"aggregatorAccounts" yaml:"aggregatorAccounts"`
	AggregatorType interface{} `field:"optional" json:"aggregatorType" yaml:"aggregatorType"`
}

