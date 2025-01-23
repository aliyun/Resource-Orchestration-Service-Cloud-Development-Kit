package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdksls/datasource/internal"
)

// Represents a `Projects`.
type IProjects interface {
	alicloudroscdkcore.IResource
	// Attribute ProjectNames: The list of project names.
	AttrProjectNames() interface{}
	// Attribute Projects: The list of projects.
	AttrProjects() interface{}
	Props() *ProjectsProps
}

// The jsii proxy for IProjects
type jsiiProxy_IProjects struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IProjects) AttrProjectNames() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrProjectNames",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IProjects) AttrProjects() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrProjects",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IProjects) Props() *ProjectsProps {
	var returns *ProjectsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

