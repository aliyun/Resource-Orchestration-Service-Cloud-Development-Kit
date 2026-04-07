package alicloudroscdkoos

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkoos/internal"
)

// Represents a `ApplicationConnection`.
type IApplicationConnection interface {
	alicloudroscdkcore.IResource
	// Attribute ConnectionId: The ID of the application connection.
	AttrConnectionId() interface{}
	Props() *ApplicationConnectionProps
}

// The jsii proxy for IApplicationConnection
type jsiiProxy_IApplicationConnection struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IApplicationConnection) AttrConnectionId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConnectionId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IApplicationConnection) Props() *ApplicationConnectionProps {
	var returns *ApplicationConnectionProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

