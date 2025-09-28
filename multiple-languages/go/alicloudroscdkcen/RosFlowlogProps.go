package alicloudroscdkcen


// Properties for defining a `RosFlowlog`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-flowlog
type RosFlowlogProps struct {
	CenId interface{} `field:"required" json:"cenId" yaml:"cenId"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	FlowLogName interface{} `field:"optional" json:"flowLogName" yaml:"flowLogName"`
	Interval interface{} `field:"optional" json:"interval" yaml:"interval"`
	LogFormatString interface{} `field:"optional" json:"logFormatString" yaml:"logFormatString"`
	LogStoreName interface{} `field:"optional" json:"logStoreName" yaml:"logStoreName"`
	ProjectName interface{} `field:"optional" json:"projectName" yaml:"projectName"`
	Tags *[]*RosFlowlog_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	TransitRouterAttachmentId interface{} `field:"optional" json:"transitRouterAttachmentId" yaml:"transitRouterAttachmentId"`
	TransitRouterId interface{} `field:"optional" json:"transitRouterId" yaml:"transitRouterId"`
}

