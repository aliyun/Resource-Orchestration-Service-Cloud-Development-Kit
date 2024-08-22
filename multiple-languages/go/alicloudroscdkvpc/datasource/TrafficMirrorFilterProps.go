package datasource


// Properties for defining a `TrafficMirrorFilter`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-trafficmirrorfilter
type TrafficMirrorFilterProps struct {
	// Property trafficMirrorFilterId: The first ID of the resource.
	TrafficMirrorFilterId interface{} `field:"required" json:"trafficMirrorFilterId" yaml:"trafficMirrorFilterId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

