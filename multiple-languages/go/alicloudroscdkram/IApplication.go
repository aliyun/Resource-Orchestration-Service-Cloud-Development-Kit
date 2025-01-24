package alicloudroscdkram

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkram/internal"
)

// Represents a `Application`.
type IApplication interface {
	alicloudroscdkcore.IResource
	// Attribute AppId: The ID of the application.
	AttrAppId() interface{}
	// Attribute AppName: The name of the application.
	AttrAppName() interface{}
	Props() *ApplicationProps
}

// The jsii proxy for IApplication
type jsiiProxy_IApplication struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IApplication) AttrAppId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAppId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IApplication) AttrAppName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAppName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IApplication) Props() *ApplicationProps {
	var returns *ApplicationProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

