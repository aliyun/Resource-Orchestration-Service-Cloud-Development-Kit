package datasource


// Properties for defining a `RosTopics`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kafka-topics
type RosTopicsProps struct {
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	Topic interface{} `field:"required" json:"topic" yaml:"topic"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

