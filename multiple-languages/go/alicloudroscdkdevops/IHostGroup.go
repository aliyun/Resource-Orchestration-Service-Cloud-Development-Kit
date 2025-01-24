package alicloudroscdkdevops

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkdevops/internal"
)

// Represents a `HostGroup`.
type IHostGroup interface {
	alicloudroscdkcore.IResource
	// Attribute HostGroupId: The id of the host group.
	AttrHostGroupId() interface{}
	Props() *HostGroupProps
}

// The jsii proxy for IHostGroup
type jsiiProxy_IHostGroup struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IHostGroup) AttrHostGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHostGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHostGroup) Props() *HostGroupProps {
	var returns *HostGroupProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

