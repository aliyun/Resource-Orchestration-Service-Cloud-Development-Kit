package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvod/datasource/internal"
)

// Represents a `EditingProjects`.
type IEditingProjects interface {
	alicloudroscdkcore.IResource
	// Attribute EditingProjectIds: The list of editing project IDs.
	AttrEditingProjectIds() interface{}
	// Attribute EditingProjects: The list of editing projects.
	AttrEditingProjects() interface{}
	Props() *EditingProjectsProps
}

// The jsii proxy for IEditingProjects
type jsiiProxy_IEditingProjects struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IEditingProjects) AttrEditingProjectIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEditingProjectIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEditingProjects) AttrEditingProjects() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEditingProjects",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEditingProjects) Props() *EditingProjectsProps {
	var returns *EditingProjectsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

