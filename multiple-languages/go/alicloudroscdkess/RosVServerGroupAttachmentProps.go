package alicloudroscdkess


// Properties for defining a `RosVServerGroupAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-vservergroupattachment
type RosVServerGroupAttachmentProps struct {
	ScalingGroupId interface{} `field:"required" json:"scalingGroupId" yaml:"scalingGroupId"`
	VServerGroups interface{} `field:"required" json:"vServerGroups" yaml:"vServerGroups"`
	ForceAttach interface{} `field:"optional" json:"forceAttach" yaml:"forceAttach"`
}

