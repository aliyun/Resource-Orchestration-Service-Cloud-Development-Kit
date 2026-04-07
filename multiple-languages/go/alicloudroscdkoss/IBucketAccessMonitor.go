package alicloudroscdkoss

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkoss/internal"
)

// Represents a `BucketAccessMonitor`.
type IBucketAccessMonitor interface {
	alicloudroscdkcore.IResource
	Props() *BucketAccessMonitorProps
}

// The jsii proxy for IBucketAccessMonitor
type jsiiProxy_IBucketAccessMonitor struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IBucketAccessMonitor) Props() *BucketAccessMonitorProps {
	var returns *BucketAccessMonitorProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

