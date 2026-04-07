package alicloudroscdkecs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/internal"
)

// Represents a `LaunchTemplateVersion`.
type ILaunchTemplateVersion interface {
	alicloudroscdkcore.IResource
	// Attribute CreatedBy: The ID of the Alibaba Cloud account that created the launch template.
	AttrCreatedBy() interface{}
	// Attribute CreateTime: The time when the launch template version was created.
	AttrCreateTime() interface{}
	// Attribute DefaultVersion: Indicates whether the launch template version is the default version.
	AttrDefaultVersion() interface{}
	// Attribute LaunchTemplateData: The configurations of the launch template.
	AttrLaunchTemplateData() interface{}
	// Attribute LaunchTemplateId: The ID of the launch template.
	AttrLaunchTemplateId() interface{}
	// Attribute LaunchTemplateName: The name of the launch template.
	AttrLaunchTemplateName() interface{}
	// Attribute ModifiedTime: The time when the launch template version was modified.
	AttrModifiedTime() interface{}
	// Attribute ResourceGroupId: The ID of the resource group to which to assign the instance.
	AttrResourceGroupId() interface{}
	// Attribute VersionDescription: The description of the launch template version.
	AttrVersionDescription() interface{}
	// Attribute VersionNumber: The number of the created version of the launch template.
	AttrVersionNumber() interface{}
	Props() *LaunchTemplateVersionProps
}

// The jsii proxy for ILaunchTemplateVersion
type jsiiProxy_ILaunchTemplateVersion struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ILaunchTemplateVersion) AttrCreatedBy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreatedBy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILaunchTemplateVersion) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILaunchTemplateVersion) AttrDefaultVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDefaultVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILaunchTemplateVersion) AttrLaunchTemplateData() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLaunchTemplateData",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILaunchTemplateVersion) AttrLaunchTemplateId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLaunchTemplateId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILaunchTemplateVersion) AttrLaunchTemplateName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLaunchTemplateName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILaunchTemplateVersion) AttrModifiedTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrModifiedTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILaunchTemplateVersion) AttrResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILaunchTemplateVersion) AttrVersionDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVersionDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILaunchTemplateVersion) AttrVersionNumber() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVersionNumber",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILaunchTemplateVersion) Props() *LaunchTemplateVersionProps {
	var returns *LaunchTemplateVersionProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

