package datasource


// Properties for defining a `RosXTraceApp`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-xtraceapp
type RosXTraceAppProps struct {
	Pid interface{} `field:"required" json:"pid" yaml:"pid"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

