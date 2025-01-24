package alicloudroscdkdataworks

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkdataworks/internal"
)

// Represents a `Project`.
type IProject interface {
	alicloudroscdkcore.IResource
	// Attribute EnvTypes: The environment of the workspace.
	//
	// Valid values: PROD and DEV.
	// The value PROD indicates the production environment. Workspaces in basic mode provide only the production environment.
	// The value DEV indicates the development environment. Workspaces in standard mode provide both the development environment and the production environment.
	AttrEnvTypes() interface{}
	// Attribute IsDefault: Indicates whether the workspace is the default workspace.
	//
	// Valid values:
	// 1: The workspace is the default workspace.
	// 0: The workspace is not the default workspace.
	AttrIsDefault() interface{}
	// Attribute ProjectId: The ID of the workspace.
	AttrProjectId() interface{}
	// Attribute ProjectIdentifier: The name of the workspace.
	//
	// The name can contain letters, digits, and underscores (_) and must start with a letter or digit.
	AttrProjectIdentifier() interface{}
	// Attribute ProtectedMode: Indicates whether the workspace protection feature is enabled.
	//
	// Valid values:
	// 1: The workspace protection feature is enabled.
	// 0: The workspace protection feature is disabled.
	AttrProtectedMode() interface{}
	// Attribute ResidentArea: The type of the workspace.
	//
	// Valid values: private and swap.
	AttrResidentArea() interface{}
	// Attribute SchedulerMaxRetryTimes: The default maximum number of automatic reruns that are allowed after an error occurs.
	AttrSchedulerMaxRetryTimes() interface{}
	// Attribute SchedulerRetryInterval: The interval between automatic reruns after an error occurs.
	//
	// Unit: milliseconds. The maximum interval is 30 minutes. You must pay attention to the conversion between units.
	AttrSchedulerRetryInterval() interface{}
	// Attribute TablePrivacyMode: Indicates whether the MaxCompute tables in the workspace are visible to the users within the tenant.
	//
	// Valid values:
	// 0: The MaxCompute tables are invisible to the users within a tenant.
	// 1: The MaxCompute tables are visible to the users within a tenant.
	AttrTablePrivacyMode() interface{}
	Props() *ProjectProps
}

// The jsii proxy for IProject
type jsiiProxy_IProject struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IProject) AttrEnvTypes() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEnvTypes",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IProject) AttrIsDefault() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIsDefault",
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

func (j *jsiiProxy_IProject) AttrProjectIdentifier() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrProjectIdentifier",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IProject) AttrProtectedMode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrProtectedMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IProject) AttrResidentArea() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResidentArea",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IProject) AttrSchedulerMaxRetryTimes() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSchedulerMaxRetryTimes",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IProject) AttrSchedulerRetryInterval() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSchedulerRetryInterval",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IProject) AttrTablePrivacyMode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTablePrivacyMode",
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

