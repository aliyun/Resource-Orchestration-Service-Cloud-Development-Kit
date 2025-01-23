package alicloudroscdkga

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkga/internal"
)

// Represents a `BasicAccelerateIp`.
type IBasicAccelerateIp interface {
	alicloudroscdkcore.IResource
	// Attribute AccelerateIpId: The ID of the accelerated IP address.
	AttrAccelerateIpId() interface{}
	Props() *BasicAccelerateIpProps
}

// The jsii proxy for IBasicAccelerateIp
type jsiiProxy_IBasicAccelerateIp struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IBasicAccelerateIp) AttrAccelerateIpId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAccelerateIpId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBasicAccelerateIp) Props() *BasicAccelerateIpProps {
	var returns *BasicAccelerateIpProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

