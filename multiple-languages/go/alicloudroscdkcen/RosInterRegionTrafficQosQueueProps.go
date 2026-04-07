package alicloudroscdkcen


// Properties for defining a `RosInterRegionTrafficQosQueue`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-interregiontrafficqosqueue
type RosInterRegionTrafficQosQueueProps struct {
	Dscps interface{} `field:"required" json:"dscps" yaml:"dscps"`
	TrafficQosPolicyId interface{} `field:"required" json:"trafficQosPolicyId" yaml:"trafficQosPolicyId"`
	Bandwidth interface{} `field:"optional" json:"bandwidth" yaml:"bandwidth"`
	InterRegionTrafficQosQueueDescription interface{} `field:"optional" json:"interRegionTrafficQosQueueDescription" yaml:"interRegionTrafficQosQueueDescription"`
	InterRegionTrafficQosQueueName interface{} `field:"optional" json:"interRegionTrafficQosQueueName" yaml:"interRegionTrafficQosQueueName"`
	RemainBandwidthPercent interface{} `field:"optional" json:"remainBandwidthPercent" yaml:"remainBandwidthPercent"`
}

