package alicloudroscdkhbr

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkhbr/internal"
)

// Represents a `CrossAccount`.
type ICrossAccount interface {
	alicloudroscdkcore.IResource
	Props() *CrossAccountProps
}

// The jsii proxy for ICrossAccount
type jsiiProxy_ICrossAccount struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ICrossAccount) Props() *CrossAccountProps {
	var returns *CrossAccountProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

