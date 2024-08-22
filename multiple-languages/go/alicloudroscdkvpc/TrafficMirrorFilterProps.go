package alicloudroscdkvpc


// Properties for defining a `TrafficMirrorFilter`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-trafficmirrorfilter
type TrafficMirrorFilterProps struct {
	// Property egressRules: Egress rules.
	EgressRules interface{} `field:"optional" json:"egressRules" yaml:"egressRules"`
	// Property ingressRules: Ingress rules.
	IngressRules interface{} `field:"optional" json:"ingressRules" yaml:"ingressRules"`
	// Property trafficMirrorFilterDescription: The description of the filter.
	//
	// The description must be 1 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
	TrafficMirrorFilterDescription interface{} `field:"optional" json:"trafficMirrorFilterDescription" yaml:"trafficMirrorFilterDescription"`
	// Property trafficMirrorFilterName: The name of the filter.The name must be 1 to 128 characters in length and cannot start with http:\/\/ or https:\/\/.
	TrafficMirrorFilterName interface{} `field:"optional" json:"trafficMirrorFilterName" yaml:"trafficMirrorFilterName"`
}

