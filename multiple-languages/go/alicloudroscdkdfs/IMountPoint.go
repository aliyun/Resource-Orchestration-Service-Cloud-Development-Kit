package alicloudroscdkdfs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkdfs/internal"
)

// Represents a `MountPoint`.
type IMountPoint interface {
	alicloudroscdkcore.IResource
	// Attribute MountPointId: The ID of the mount point.
	AttrMountPointId() interface{}
	Props() *MountPointProps
}

// The jsii proxy for IMountPoint
type jsiiProxy_IMountPoint struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IMountPoint) AttrMountPointId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMountPointId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMountPoint) Props() *MountPointProps {
	var returns *MountPointProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

