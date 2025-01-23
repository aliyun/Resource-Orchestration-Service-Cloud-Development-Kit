package alicloudroscdkecd

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecd/internal"
)

// Represents a `DesktopGroup`.
type IDesktopGroup interface {
	alicloudroscdkcore.IResource
	// Attribute DesktopGroupId: Id of created DesktopGroup.
	AttrDesktopGroupId() interface{}
	Props() *DesktopGroupProps
}

// The jsii proxy for IDesktopGroup
type jsiiProxy_IDesktopGroup struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDesktopGroup) AttrDesktopGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDesktopGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDesktopGroup) Props() *DesktopGroupProps {
	var returns *DesktopGroupProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

