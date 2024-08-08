package alicloudroscdkvpc


// Properties for defining a `RosFlowLog`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-flowlog
type RosFlowLogProps struct {
	LogStoreName interface{} `field:"required" json:"logStoreName" yaml:"logStoreName"`
	ProjectName interface{} `field:"required" json:"projectName" yaml:"projectName"`
	ResourceId interface{} `field:"required" json:"resourceId" yaml:"resourceId"`
	ResourceType interface{} `field:"required" json:"resourceType" yaml:"resourceType"`
	TrafficType interface{} `field:"required" json:"trafficType" yaml:"trafficType"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	FlowLogName interface{} `field:"optional" json:"flowLogName" yaml:"flowLogName"`
}

