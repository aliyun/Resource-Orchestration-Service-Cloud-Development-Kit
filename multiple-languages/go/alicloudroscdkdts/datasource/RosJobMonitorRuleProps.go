package datasource


// Properties for defining a `RosJobMonitorRule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dts-jobmonitorrule
type RosJobMonitorRuleProps struct {
	DtsJobId interface{} `field:"required" json:"dtsJobId" yaml:"dtsJobId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

