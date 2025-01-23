package alicloudroscdkmobi

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkmobi/internal"
)

// Represents a `App`.
type IApp interface {
	alicloudroscdkcore.IResource
	// Attribute AppDescription: Description of application.
	AttrAppDescription() interface{}
	// Attribute AppIcon: Application icon label, The system provides an icon by default, which is given in the form of a label.
	//
	// The default value is -1.
	AttrAppIcon() interface{}
	// Attribute AppId: Application ID.
	AttrAppId() interface{}
	// Attribute AppName: The application name.
	AttrAppName() interface{}
	// Attribute AppType: The application type.
	//
	// Web applications and Copilot applications are supported.
	AttrAppType() interface{}
	// Attribute AppWorkspaceId: Workspace ID of application, The application belongs to the workspace.
	AttrAppWorkspaceId() interface{}
	// Attribute CreateTime: Create time of application.
	AttrCreateTime() interface{}
	// Attribute ModifiedTime: Modified time of application.
	AttrModifiedTime() interface{}
	Props() *AppProps
}

// The jsii proxy for IApp
type jsiiProxy_IApp struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IApp) AttrAppDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAppDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IApp) AttrAppIcon() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAppIcon",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IApp) AttrAppId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAppId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IApp) AttrAppName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAppName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IApp) AttrAppType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAppType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IApp) AttrAppWorkspaceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAppWorkspaceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IApp) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IApp) AttrModifiedTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrModifiedTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IApp) Props() *AppProps {
	var returns *AppProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

