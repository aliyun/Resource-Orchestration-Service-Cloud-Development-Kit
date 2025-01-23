package alicloudroscdkbastionhost

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkbastionhost/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `Host`.
type IHost interface {
	alicloudroscdkcore.IResource
	// Attribute HostId: The ID of the host that was created.
	AttrHostId() interface{}
	Props() *HostProps
}

// The jsii proxy for IHost
type jsiiProxy_IHost struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IHost) AttrHostId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHostId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHost) Props() *HostProps {
	var returns *HostProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

