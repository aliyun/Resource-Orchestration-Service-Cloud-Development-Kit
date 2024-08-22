package alicloudroscdkvpc


// Properties for defining a `TrafficMirrorSessionSourcesAddition`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-trafficmirrorsessionsourcesaddition
type TrafficMirrorSessionSourcesAdditionProps struct {
	// Property trafficMirrorSessionId: The ID of the traffic mirror session.
	TrafficMirrorSessionId interface{} `field:"required" json:"trafficMirrorSessionId" yaml:"trafficMirrorSessionId"`
	// Property trafficMirrorSourceIds: undefined.
	TrafficMirrorSourceIds interface{} `field:"required" json:"trafficMirrorSourceIds" yaml:"trafficMirrorSourceIds"`
}

