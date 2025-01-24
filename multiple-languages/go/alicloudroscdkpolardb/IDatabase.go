package alicloudroscdkpolardb

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkpolardb/internal"
)

// Represents a `Database`.
type IDatabase interface {
	alicloudroscdkcore.IResource
	Props() *DatabaseProps
}

// The jsii proxy for IDatabase
type jsiiProxy_IDatabase struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDatabase) Props() *DatabaseProps {
	var returns *DatabaseProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

