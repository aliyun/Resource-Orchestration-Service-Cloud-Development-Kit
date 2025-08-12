package alicloudroscdkoss

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkoss/internal"
)

// Represents a `BucketReplication`.
type IBucketReplication interface {
	alicloudroscdkcore.IResource
	Props() *BucketReplicationProps
}

// The jsii proxy for IBucketReplication
type jsiiProxy_IBucketReplication struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IBucketReplication) Props() *BucketReplicationProps {
	var returns *BucketReplicationProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

