package alicloudroscdkvpc


// Properties for defining a `RosTrafficMirrorFilter`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-trafficmirrorfilter
type RosTrafficMirrorFilterProps struct {
	EgressRules interface{} `field:"optional" json:"egressRules" yaml:"egressRules"`
	IngressRules interface{} `field:"optional" json:"ingressRules" yaml:"ingressRules"`
	TrafficMirrorFilterDescription interface{} `field:"optional" json:"trafficMirrorFilterDescription" yaml:"trafficMirrorFilterDescription"`
	TrafficMirrorFilterName interface{} `field:"optional" json:"trafficMirrorFilterName" yaml:"trafficMirrorFilterName"`
}

