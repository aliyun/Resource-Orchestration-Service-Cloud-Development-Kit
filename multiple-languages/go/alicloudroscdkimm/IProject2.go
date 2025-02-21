package alicloudroscdkimm

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkimm/internal"
)

// Represents a `Project2`.
type IProject2 interface {
	alicloudroscdkcore.IResource
	// Attribute ProjectName: The name of project.
	AttrProjectName() interface{}
	Props() *Project2Props
}

// The jsii proxy for IProject2
type jsiiProxy_IProject2 struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IProject2) AttrProjectName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrProjectName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IProject2) Props() *Project2Props {
	var returns *Project2Props
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

