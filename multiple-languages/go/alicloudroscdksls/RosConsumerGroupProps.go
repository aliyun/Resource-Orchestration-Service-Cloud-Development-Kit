package alicloudroscdksls


// Properties for defining a `RosConsumerGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-consumergroup
type RosConsumerGroupProps struct {
	ConsumerGroup interface{} `field:"required" json:"consumerGroup" yaml:"consumerGroup"`
	Logstore interface{} `field:"required" json:"logstore" yaml:"logstore"`
	Order interface{} `field:"required" json:"order" yaml:"order"`
	Project interface{} `field:"required" json:"project" yaml:"project"`
	Timeout interface{} `field:"required" json:"timeout" yaml:"timeout"`
}

