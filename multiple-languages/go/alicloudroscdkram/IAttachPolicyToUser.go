package alicloudroscdkram

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkram/internal"
)

// Represents a `AttachPolicyToUser`.
type IAttachPolicyToUser interface {
	alicloudroscdkcore.IResource
	Props() *AttachPolicyToUserProps
}

// The jsii proxy for IAttachPolicyToUser
type jsiiProxy_IAttachPolicyToUser struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAttachPolicyToUser) Props() *AttachPolicyToUserProps {
	var returns *AttachPolicyToUserProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

