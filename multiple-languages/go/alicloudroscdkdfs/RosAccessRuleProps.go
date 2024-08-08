package alicloudroscdkdfs


// Properties for defining a `RosAccessRule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dfs-accessrule
type RosAccessRuleProps struct {
	AccessGroupId interface{} `field:"required" json:"accessGroupId" yaml:"accessGroupId"`
	NetworkSegment interface{} `field:"required" json:"networkSegment" yaml:"networkSegment"`
	RwAccessType interface{} `field:"required" json:"rwAccessType" yaml:"rwAccessType"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	Priority interface{} `field:"optional" json:"priority" yaml:"priority"`
}

