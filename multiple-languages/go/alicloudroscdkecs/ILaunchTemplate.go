package alicloudroscdkecs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/internal"
)

// Represents a `LaunchTemplate`.
type ILaunchTemplate interface {
	alicloudroscdkcore.IResource
	// Attribute DefaultVersionNumber: The default version number of launch template.
	AttrDefaultVersionNumber() interface{}
	// Attribute LatestVersionNumber: The latest version number of launch template.
	AttrLatestVersionNumber() interface{}
	// Attribute LaunchTemplateId: The id of launch template.
	AttrLaunchTemplateId() interface{}
	// Attribute LaunchTemplateName: The name of launch template.
	AttrLaunchTemplateName() interface{}
	Props() *LaunchTemplateProps
}

// The jsii proxy for ILaunchTemplate
type jsiiProxy_ILaunchTemplate struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ILaunchTemplate) AttrDefaultVersionNumber() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDefaultVersionNumber",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILaunchTemplate) AttrLatestVersionNumber() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLatestVersionNumber",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILaunchTemplate) AttrLaunchTemplateId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLaunchTemplateId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILaunchTemplate) AttrLaunchTemplateName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLaunchTemplateName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILaunchTemplate) Props() *LaunchTemplateProps {
	var returns *LaunchTemplateProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

