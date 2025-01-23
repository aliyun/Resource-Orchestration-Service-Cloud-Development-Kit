package alicloudroscdkros

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkros/internal"
)

// Represents a `Stack`.
type IStack interface {
	alicloudroscdkcore.IResource
	Props() *StackProps
}

// The jsii proxy for IStack
type jsiiProxy_IStack struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IStack) Props() *StackProps {
	var returns *StackProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

