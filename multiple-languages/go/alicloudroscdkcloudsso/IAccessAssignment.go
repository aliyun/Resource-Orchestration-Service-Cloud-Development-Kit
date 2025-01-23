package alicloudroscdkcloudsso

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcloudsso/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `AccessAssignment`.
type IAccessAssignment interface {
	alicloudroscdkcore.IResource
	Props() *AccessAssignmentProps
}

// The jsii proxy for IAccessAssignment
type jsiiProxy_IAccessAssignment struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAccessAssignment) Props() *AccessAssignmentProps {
	var returns *AccessAssignmentProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

