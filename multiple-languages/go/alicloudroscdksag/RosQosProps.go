package alicloudroscdksag


// Properties for defining a `RosQos`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-qos
type RosQosProps struct {
	QosName interface{} `field:"required" json:"qosName" yaml:"qosName"`
	QosDescription interface{} `field:"optional" json:"qosDescription" yaml:"qosDescription"`
}

