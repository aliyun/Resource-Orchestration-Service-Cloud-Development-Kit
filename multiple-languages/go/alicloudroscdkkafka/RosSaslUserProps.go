package alicloudroscdkkafka


// Properties for defining a `RosSaslUser`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kafka-sasluser
type RosSaslUserProps struct {
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	Password interface{} `field:"required" json:"password" yaml:"password"`
	Username interface{} `field:"required" json:"username" yaml:"username"`
	Mechanism interface{} `field:"optional" json:"mechanism" yaml:"mechanism"`
	Type interface{} `field:"optional" json:"type" yaml:"type"`
}

