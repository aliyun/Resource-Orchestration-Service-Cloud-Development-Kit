package alicloudroscdknls

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdknls/internal"
)

// Represents a `Project`.
type IProject interface {
	alicloudroscdkcore.IResource
	// Attribute AppKey: The app key of the project.
	AttrAppKey() interface{}
	// Attribute ProjectId: The ID of the project.
	AttrProjectId() interface{}
	Props() *ProjectProps
}

// The jsii proxy for IProject
type jsiiProxy_IProject struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IProject) AttrAppKey() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAppKey",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IProject) AttrProjectId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrProjectId",
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

