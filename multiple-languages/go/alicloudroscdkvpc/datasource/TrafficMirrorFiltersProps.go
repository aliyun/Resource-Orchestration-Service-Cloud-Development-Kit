package datasource


// Properties for defining a `TrafficMirrorFilters`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-trafficmirrorfilters
type TrafficMirrorFiltersProps struct {
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property trafficMirrorFilterName: The name of the TrafficMirrorFilter.
	TrafficMirrorFilterName interface{} `field:"optional" json:"trafficMirrorFilterName" yaml:"trafficMirrorFilterName"`
}

