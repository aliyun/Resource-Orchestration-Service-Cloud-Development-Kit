package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdksae/datasource/internal"
)

// Represents a `Applications`.
type IApplications interface {
	alicloudroscdkcore.IResource
	// Attribute ApplicationIds: The list of application IDs.
	AttrApplicationIds() interface{}
	// Attribute Applications: The list of applications.
	AttrApplications() interface{}
	Props() *ApplicationsProps
}

// The jsii proxy for IApplications
type jsiiProxy_IApplications struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IApplications) AttrApplicationIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrApplicationIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IApplications) AttrApplications() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrApplications",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IApplications) Props() *ApplicationsProps {
	var returns *ApplicationsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

