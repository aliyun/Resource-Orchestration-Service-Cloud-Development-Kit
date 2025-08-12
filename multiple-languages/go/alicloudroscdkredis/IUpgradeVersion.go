package alicloudroscdkredis

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkredis/internal"
)

// Represents a `UpgradeVersion`.
type IUpgradeVersion interface {
	alicloudroscdkcore.IResource
	Props() *UpgradeVersionProps
}

// The jsii proxy for IUpgradeVersion
type jsiiProxy_IUpgradeVersion struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IUpgradeVersion) Props() *UpgradeVersionProps {
	var returns *UpgradeVersionProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

