package alicloudroscdkehpc

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkehpc/internal"
)

// Represents a `Users`.
type IUsers interface {
	alicloudroscdkcore.IResource
	Props() *UsersProps
}

// The jsii proxy for IUsers
type jsiiProxy_IUsers struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IUsers) Props() *UsersProps {
	var returns *UsersProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

