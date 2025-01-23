package alicloudroscdkdatahub

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkdatahub/internal"
)

// Represents a `Project`.
type IProject interface {
	alicloudroscdkcore.IResource
	// Attribute ProjectName: Project name.
	AttrProjectName() interface{}
	Props() *ProjectProps
}

// The jsii proxy for IProject
type jsiiProxy_IProject struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IProject) AttrProjectName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrProjectName",
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

