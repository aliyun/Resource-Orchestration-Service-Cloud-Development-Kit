package alicloudroscdksae

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdksae/internal"
)

// Represents a `Application`.
type IApplication interface {
	alicloudroscdkcore.IResource
	// Attribute AppId: Creating successful application ID.
	AttrAppId() interface{}
	// Attribute ChangeOrderId: Return to release a single ID, used to query task execution status.
	AttrChangeOrderId() interface{}
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

func (j *jsiiProxy_IApplication) AttrChangeOrderId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrChangeOrderId",
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

