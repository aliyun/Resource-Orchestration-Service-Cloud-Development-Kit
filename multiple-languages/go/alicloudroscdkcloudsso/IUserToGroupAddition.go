package alicloudroscdkcloudsso

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcloudsso/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `UserToGroupAddition`.
type IUserToGroupAddition interface {
	alicloudroscdkcore.IResource
	Props() *UserToGroupAdditionProps
}

// The jsii proxy for IUserToGroupAddition
type jsiiProxy_IUserToGroupAddition struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IUserToGroupAddition) Props() *UserToGroupAdditionProps {
	var returns *UserToGroupAdditionProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

