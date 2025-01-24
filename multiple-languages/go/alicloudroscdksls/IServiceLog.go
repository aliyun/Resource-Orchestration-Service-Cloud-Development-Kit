package alicloudroscdksls

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdksls/internal"
)

// Represents a `ServiceLog`.
type IServiceLog interface {
	alicloudroscdkcore.IResource
	// Attribute ProjectName: The name of the project that needs to be activated.
	AttrProjectName() interface{}
	Props() *ServiceLogProps
}

// The jsii proxy for IServiceLog
type jsiiProxy_IServiceLog struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IServiceLog) AttrProjectName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrProjectName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IServiceLog) Props() *ServiceLogProps {
	var returns *ServiceLogProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

