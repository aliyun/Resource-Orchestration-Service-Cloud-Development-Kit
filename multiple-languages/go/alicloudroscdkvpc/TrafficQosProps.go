package alicloudroscdkvpc


// Properties for defining a `TrafficQos`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-trafficqos
type TrafficQosProps struct {
	// Property qosDescription: The description of the QoS policy.
	//
	// The description must be 0 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
	QosDescription interface{} `field:"optional" json:"qosDescription" yaml:"qosDescription"`
	// Property qosName: The name of the QoS policy.
	//
	// The name must be 0 to 128 characters in length and cannot start with http:\/\/ or https:\/\/.
	QosName interface{} `field:"optional" json:"qosName" yaml:"qosName"`
	// Property resourceGroupId: The ID of the resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property tags: Tags of traffic qos.
	Tags *[]*RosTrafficQos_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

