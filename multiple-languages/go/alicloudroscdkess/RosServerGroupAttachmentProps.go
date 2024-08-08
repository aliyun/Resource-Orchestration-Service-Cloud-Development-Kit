package alicloudroscdkess


// Properties for defining a `RosServerGroupAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-servergroupattachment
type RosServerGroupAttachmentProps struct {
	ScalingGroupId interface{} `field:"required" json:"scalingGroupId" yaml:"scalingGroupId"`
	ServerGroups interface{} `field:"required" json:"serverGroups" yaml:"serverGroups"`
	ForceAttach interface{} `field:"optional" json:"forceAttach" yaml:"forceAttach"`
}

