package datasource


// Properties for defining a `JobMonitorRule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dts-jobmonitorrule
type JobMonitorRuleProps struct {
	// Property dtsJobId: The ID of the data migration, data synchronization, or change tracking task.
	DtsJobId interface{} `field:"required" json:"dtsJobId" yaml:"dtsJobId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

