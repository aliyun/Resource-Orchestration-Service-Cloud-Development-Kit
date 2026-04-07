package alicloudroscdkvpc


// Properties for defining a `RosTrafficQos`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-trafficqos
type RosTrafficQosProps struct {
	QosDescription interface{} `field:"optional" json:"qosDescription" yaml:"qosDescription"`
	QosName interface{} `field:"optional" json:"qosName" yaml:"qosName"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Tags *[]*RosTrafficQos_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

