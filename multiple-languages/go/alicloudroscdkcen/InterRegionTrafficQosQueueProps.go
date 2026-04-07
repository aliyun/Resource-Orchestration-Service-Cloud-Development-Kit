package alicloudroscdkcen


// Properties for defining a `InterRegionTrafficQosQueue`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-interregiontrafficqosqueue
type InterRegionTrafficQosQueueProps struct {
	// Property dscps: The DSCP value of the traffic packet to be matched in the current queue, ranging from 0 to 63.
	Dscps interface{} `field:"required" json:"dscps" yaml:"dscps"`
	// Property trafficQosPolicyId: The ID of the QoS policy.
	TrafficQosPolicyId interface{} `field:"required" json:"trafficQosPolicyId" yaml:"trafficQosPolicyId"`
	// Property bandwidth: The maximum absolute bandwidth value that can be allocated to the queue.
	//
	// Unit: Mbit\/s.
	//   * The value specifies an absolute bandwidth. For example, a value of 20 specifies that the queue can consume at most 20 Mbit\/s of bandwidth.
	//   * The sum of the bandwidth values specified for all queues that belong to the same inter-region connection cannot exceed the maximum bandwidth of the inter-region connection.
	Bandwidth interface{} `field:"optional" json:"bandwidth" yaml:"bandwidth"`
	// Property interRegionTrafficQosQueueDescription: The description of the queue.
	//
	// This parameter is optional. If you enter a description, it must be 1 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
	InterRegionTrafficQosQueueDescription interface{} `field:"optional" json:"interRegionTrafficQosQueueDescription" yaml:"interRegionTrafficQosQueueDescription"`
	// Property interRegionTrafficQosQueueName: The name of the queue.
	//
	// The name can be empty or 1 to 128 characters in length, and cannot start with http:\/\/ or https:\/\/.
	InterRegionTrafficQosQueueName interface{} `field:"optional" json:"interRegionTrafficQosQueueName" yaml:"interRegionTrafficQosQueueName"`
	// Property remainBandwidthPercent: The maximum percentage of inter-region bandwidth that can be allocated to the queue.
	//
	// * Unit: percentage. For example, a value of 20 specifies that the queue can consume at most 20% of inter-region bandwidth.
	//   * The sum of the percentage values specified for all queues that belong to the same inter-region connection cannot exceed 100%.
	RemainBandwidthPercent interface{} `field:"optional" json:"remainBandwidthPercent" yaml:"remainBandwidthPercent"`
}

