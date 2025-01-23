package alicloudroscdkram

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkram/internal"
)

// Represents a `AttachPolicyToRole`.
type IAttachPolicyToRole interface {
	alicloudroscdkcore.IResource
	Props() *AttachPolicyToRoleProps
}

// The jsii proxy for IAttachPolicyToRole
type jsiiProxy_IAttachPolicyToRole struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAttachPolicyToRole) Props() *AttachPolicyToRoleProps {
	var returns *AttachPolicyToRoleProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

