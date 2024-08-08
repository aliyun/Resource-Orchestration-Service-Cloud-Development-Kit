package datasource


// Properties for defining a `RosFlowProjects`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-emr-flowprojects
type RosFlowProjectsProps struct {
	FlowProjectId interface{} `field:"optional" json:"flowProjectId" yaml:"flowProjectId"`
	FlowProjectName interface{} `field:"optional" json:"flowProjectName" yaml:"flowProjectName"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

