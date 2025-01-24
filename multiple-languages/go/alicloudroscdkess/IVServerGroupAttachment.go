package alicloudroscdkess

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkess/internal"
)

// Represents a `VServerGroupAttachment`.
type IVServerGroupAttachment interface {
	alicloudroscdkcore.IResource
	// Attribute ScalingGroupId: The ID of the scaling group.
	AttrScalingGroupId() interface{}
	Props() *VServerGroupAttachmentProps
}

// The jsii proxy for IVServerGroupAttachment
type jsiiProxy_IVServerGroupAttachment struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IVServerGroupAttachment) AttrScalingGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrScalingGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVServerGroupAttachment) Props() *VServerGroupAttachmentProps {
	var returns *VServerGroupAttachmentProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

