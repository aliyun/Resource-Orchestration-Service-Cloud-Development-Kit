package alicloudroscdkpolardb

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkpolardb/internal"
)

// Represents a `Application`.
type IApplication interface {
	alicloudroscdkcore.IResource
	// Attribute ApplicationId: The ID of the application.
	AttrApplicationId() interface{}
	Props() *ApplicationProps
}

// The jsii proxy for IApplication
type jsiiProxy_IApplication struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IApplication) AttrApplicationId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrApplicationId",
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

