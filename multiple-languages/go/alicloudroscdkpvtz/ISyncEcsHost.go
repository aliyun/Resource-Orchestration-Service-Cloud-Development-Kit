package alicloudroscdkpvtz

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkpvtz/internal"
)

// Represents a `SyncEcsHost`.
type ISyncEcsHost interface {
	alicloudroscdkcore.IResource
	Props() *SyncEcsHostProps
}

// The jsii proxy for ISyncEcsHost
type jsiiProxy_ISyncEcsHost struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISyncEcsHost) Props() *SyncEcsHostProps {
	var returns *SyncEcsHostProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

