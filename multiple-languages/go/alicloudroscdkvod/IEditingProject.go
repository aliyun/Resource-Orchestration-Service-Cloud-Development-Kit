package alicloudroscdkvod

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvod/internal"
)

// Represents a `EditingProject`.
type IEditingProject interface {
	alicloudroscdkcore.IResource
	// Attribute CreateTime: The time when the online editing project was created.
	//
	// The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
	AttrCreateTime() interface{}
	// Attribute EditingProjectId: The ID of the online editing project.
	AttrEditingProjectId() interface{}
	// Attribute EditingProjectName: The name of the online editing project.
	AttrEditingProjectName() interface{}
	// Attribute ModifiedTime: The last time when the online editing project was modified.
	//
	// The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
	AttrModifiedTime() interface{}
	// Attribute Timeline: The timeline of the online editing project.
	AttrTimeline() interface{}
	// Attribute Title: The title of the online editing project.
	AttrTitle() interface{}
	Props() *EditingProjectProps
}

// The jsii proxy for IEditingProject
type jsiiProxy_IEditingProject struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IEditingProject) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEditingProject) AttrEditingProjectId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEditingProjectId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEditingProject) AttrEditingProjectName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEditingProjectName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEditingProject) AttrModifiedTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrModifiedTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEditingProject) AttrTimeline() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTimeline",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEditingProject) AttrTitle() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTitle",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEditingProject) Props() *EditingProjectProps {
	var returns *EditingProjectProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

