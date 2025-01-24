package alicloudroscdkamqp

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkamqp/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `Binding`.
type IBinding interface {
	alicloudroscdkcore.IResource
	Props() *BindingProps
}

// The jsii proxy for IBinding
type jsiiProxy_IBinding struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IBinding) Props() *BindingProps {
	var returns *BindingProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

