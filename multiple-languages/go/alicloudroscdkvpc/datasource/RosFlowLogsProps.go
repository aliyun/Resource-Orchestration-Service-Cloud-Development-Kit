package datasource


// Properties for defining a `RosFlowLogs`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-flowlogs
type RosFlowLogsProps struct {
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	FlowLogId interface{} `field:"optional" json:"flowLogId" yaml:"flowLogId"`
	FlowLogName interface{} `field:"optional" json:"flowLogName" yaml:"flowLogName"`
	LogStoreName interface{} `field:"optional" json:"logStoreName" yaml:"logStoreName"`
	ProjectName interface{} `field:"optional" json:"projectName" yaml:"projectName"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	ResourceId interface{} `field:"optional" json:"resourceId" yaml:"resourceId"`
	ResourceType interface{} `field:"optional" json:"resourceType" yaml:"resourceType"`
	TrafficType interface{} `field:"optional" json:"trafficType" yaml:"trafficType"`
}

