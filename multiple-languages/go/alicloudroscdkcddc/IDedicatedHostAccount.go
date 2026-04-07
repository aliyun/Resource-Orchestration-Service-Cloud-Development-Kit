package alicloudroscdkcddc

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcddc/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `DedicatedHostAccount`.
type IDedicatedHostAccount interface {
	alicloudroscdkcore.IResource
	Props() *DedicatedHostAccountProps
}

// The jsii proxy for IDedicatedHostAccount
type jsiiProxy_IDedicatedHostAccount struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDedicatedHostAccount) Props() *DedicatedHostAccountProps {
	var returns *DedicatedHostAccountProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

