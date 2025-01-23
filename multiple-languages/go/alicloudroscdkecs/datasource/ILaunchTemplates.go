package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/datasource/internal"
)

// Represents a `LaunchTemplates`.
type ILaunchTemplates interface {
	alicloudroscdkcore.IResource
	// Attribute LaunchTemplateIds: The list of launch template IDs.
	AttrLaunchTemplateIds() interface{}
	// Attribute LaunchTemplates: The list of launch templates.
	AttrLaunchTemplates() interface{}
	Props() *LaunchTemplatesProps
}

// The jsii proxy for ILaunchTemplates
type jsiiProxy_ILaunchTemplates struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ILaunchTemplates) AttrLaunchTemplateIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLaunchTemplateIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILaunchTemplates) AttrLaunchTemplates() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLaunchTemplates",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILaunchTemplates) Props() *LaunchTemplatesProps {
	var returns *LaunchTemplatesProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

