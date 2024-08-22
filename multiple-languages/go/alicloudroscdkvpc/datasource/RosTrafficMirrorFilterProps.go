package datasource


// Properties for defining a `RosTrafficMirrorFilter`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-trafficmirrorfilter
type RosTrafficMirrorFilterProps struct {
	TrafficMirrorFilterId interface{} `field:"required" json:"trafficMirrorFilterId" yaml:"trafficMirrorFilterId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

