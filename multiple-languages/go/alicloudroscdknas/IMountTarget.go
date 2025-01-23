package alicloudroscdknas

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdknas/internal"
)

// Represents a `MountTarget`.
type IMountTarget interface {
	alicloudroscdkcore.IResource
	// Attribute MountTargetDomain: Mount point domain name.
	AttrMountTargetDomain() interface{}
	Props() *MountTargetProps
}

// The jsii proxy for IMountTarget
type jsiiProxy_IMountTarget struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IMountTarget) AttrMountTargetDomain() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMountTargetDomain",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMountTarget) Props() *MountTargetProps {
	var returns *MountTargetProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

