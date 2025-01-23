package alicloudroscdksls

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdksls/internal"
)

// Represents a `Alert`.
type IAlert interface {
	alicloudroscdkcore.IResource
	// Attribute Name: Alert name.
	AttrName() interface{}
	Props() *AlertProps
}

// The jsii proxy for IAlert
type jsiiProxy_IAlert struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAlert) AttrName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAlert) Props() *AlertProps {
	var returns *AlertProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

