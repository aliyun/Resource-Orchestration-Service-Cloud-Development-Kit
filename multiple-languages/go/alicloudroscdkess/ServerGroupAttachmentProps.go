package alicloudroscdkess


// Properties for defining a `ServerGroupAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-servergroupattachment
type ServerGroupAttachmentProps struct {
	// Property scalingGroupId: The ID of the scaling group.
	ScalingGroupId interface{} `field:"required" json:"scalingGroupId" yaml:"scalingGroupId"`
	// Property serverGroups: A collection of information about server groups.
	ServerGroups interface{} `field:"required" json:"serverGroups" yaml:"serverGroups"`
	// Property forceAttach: Specifies whether to add the Elastic Compute Service (ECS) instances in the scaling group to the backend server group of the newly attached SLB instance.
	//
	// Valid values:
	// true
	// false
	// Default value: false.
	ForceAttach interface{} `field:"optional" json:"forceAttach" yaml:"forceAttach"`
}

