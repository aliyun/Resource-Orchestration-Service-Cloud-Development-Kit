package alicloudroscdkess

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkess/internal"
)

// Represents a `ServerGroupAttachment`.
type IServerGroupAttachment interface {
	alicloudroscdkcore.IResource
	// Attribute ScalingActivityId: The ID of the scaling activity during which one or more SLB instances are attached to the scaling group and the ECS instances in the scaling group are added to the backend server groups of the SLB instances.
	//
	// Note This parameter is returned only after you set the ForceAttach parameter to true.
	AttrScalingActivityId() interface{}
	Props() *ServerGroupAttachmentProps
}

// The jsii proxy for IServerGroupAttachment
type jsiiProxy_IServerGroupAttachment struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IServerGroupAttachment) AttrScalingActivityId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrScalingActivityId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IServerGroupAttachment) Props() *ServerGroupAttachmentProps {
	var returns *ServerGroupAttachmentProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

