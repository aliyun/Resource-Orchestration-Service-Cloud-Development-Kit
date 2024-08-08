package alicloudroscdksag


// Properties for defining a `Qos`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-qos
type QosProps struct {
	// Property qosName: The name of the QoS policy.
	//
	// The name must be 2 to 100 characters in length and can contain letters, digits, periods
	// (.), underscores (_), and hyphens (-). It must start with a letter.
	QosName interface{} `field:"required" json:"qosName" yaml:"qosName"`
	// Property qosDescription: The description of the QoS policy.
	//
	// The description must be 1 to 512 characters in length and can contain letters, digits,
	// underscores (_), and hyphens (-). It must start with a letter.
	QosDescription interface{} `field:"optional" json:"qosDescription" yaml:"qosDescription"`
}

