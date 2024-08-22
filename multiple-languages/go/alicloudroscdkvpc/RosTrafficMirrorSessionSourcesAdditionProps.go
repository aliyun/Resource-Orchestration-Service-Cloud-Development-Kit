package alicloudroscdkvpc


// Properties for defining a `RosTrafficMirrorSessionSourcesAddition`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-trafficmirrorsessionsourcesaddition
type RosTrafficMirrorSessionSourcesAdditionProps struct {
	TrafficMirrorSessionId interface{} `field:"required" json:"trafficMirrorSessionId" yaml:"trafficMirrorSessionId"`
	TrafficMirrorSourceIds interface{} `field:"required" json:"trafficMirrorSourceIds" yaml:"trafficMirrorSourceIds"`
}

