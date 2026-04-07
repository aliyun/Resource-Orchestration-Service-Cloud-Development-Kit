package alicloudroscdkschedulerx

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkschedulerx/internal"
)

// Represents a `AppGroup`.
type IAppGroup interface {
	alicloudroscdkcore.IResource
	// Attribute AppGroupId: The group ID of the application group.
	AttrAppGroupId() interface{}
	Props() *AppGroupProps
}

// The jsii proxy for IAppGroup
type jsiiProxy_IAppGroup struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAppGroup) AttrAppGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAppGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAppGroup) Props() *AppGroupProps {
	var returns *AppGroupProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

