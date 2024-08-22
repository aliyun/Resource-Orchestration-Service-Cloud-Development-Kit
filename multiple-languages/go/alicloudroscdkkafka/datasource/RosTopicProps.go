package datasource


// Properties for defining a `RosTopic`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kafka-topic
type RosTopicProps struct {
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	Topic interface{} `field:"required" json:"topic" yaml:"topic"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

