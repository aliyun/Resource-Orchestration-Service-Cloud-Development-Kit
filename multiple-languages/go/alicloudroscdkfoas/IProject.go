package alicloudroscdkfoas

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkfoas/internal"
)

// Represents a `Project`.
type IProject interface {
	alicloudroscdkcore.IResource
	// Attribute State: Project state.
	AttrState() interface{}
	Props() *ProjectProps
}

// The jsii proxy for IProject
type jsiiProxy_IProject struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IProject) AttrState() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrState",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IProject) Props() *ProjectProps {
	var returns *ProjectProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

