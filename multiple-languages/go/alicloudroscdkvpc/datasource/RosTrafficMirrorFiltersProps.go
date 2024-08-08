package datasource


// Properties for defining a `RosTrafficMirrorFilters`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-trafficmirrorfilters
type RosTrafficMirrorFiltersProps struct {
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	TrafficMirrorFilterName interface{} `field:"optional" json:"trafficMirrorFilterName" yaml:"trafficMirrorFilterName"`
}

