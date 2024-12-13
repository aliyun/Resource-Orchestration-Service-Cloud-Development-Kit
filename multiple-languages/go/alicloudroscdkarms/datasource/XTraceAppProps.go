package datasource


// Properties for defining a `XTraceApp`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-xtraceapp
type XTraceAppProps struct {
	// Property pid: The process identifier (PID) of the application.
	Pid interface{} `field:"required" json:"pid" yaml:"pid"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

