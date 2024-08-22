package alicloudroscdkess


// Properties for defining a `VServerGroupAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-vservergroupattachment
type VServerGroupAttachmentProps struct {
	// Property scalingGroupId: The ID of the scaling group.
	ScalingGroupId interface{} `field:"required" json:"scalingGroupId" yaml:"scalingGroupId"`
	// Property vServerGroups: A list of vserver groups attached on scaling group.
	VServerGroups interface{} `field:"required" json:"vServerGroups" yaml:"vServerGroups"`
	// Property forceAttach: If instances of scaling group are attached\/removed from slb backend server when attach\/detach vserver group from scaling group.
	//
	// Valid values:
	// true
	// false
	// Default value: false.
	ForceAttach interface{} `field:"optional" json:"forceAttach" yaml:"forceAttach"`
}

