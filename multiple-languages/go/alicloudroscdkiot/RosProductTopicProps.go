package alicloudroscdkiot


// Properties for defining a `RosProductTopic`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-iot-producttopic
type RosProductTopicProps struct {
	Operation interface{} `field:"required" json:"operation" yaml:"operation"`
	ProductKey interface{} `field:"required" json:"productKey" yaml:"productKey"`
	TopicShortName interface{} `field:"required" json:"topicShortName" yaml:"topicShortName"`
	Desc interface{} `field:"optional" json:"desc" yaml:"desc"`
	IotInstanceId interface{} `field:"optional" json:"iotInstanceId" yaml:"iotInstanceId"`
}

