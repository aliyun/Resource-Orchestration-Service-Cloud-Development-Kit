package alicloudroscdkalb

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkalb/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `ServerGroup`.
type IServerGroup interface {
	alicloudroscdkcore.IResource
	// Attribute Arn: The Alibaba Cloud Resource Name (ARN).
	AttrArn() interface{}
	// Attribute ServerGroupId: The ID of the server group.
	AttrServerGroupId() interface{}
	Props() *ServerGroupProps
}

// The jsii proxy for IServerGroup
type jsiiProxy_IServerGroup struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IServerGroup) AttrArn() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrArn",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IServerGroup) AttrServerGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrServerGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IServerGroup) Props() *ServerGroupProps {
	var returns *ServerGroupProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

