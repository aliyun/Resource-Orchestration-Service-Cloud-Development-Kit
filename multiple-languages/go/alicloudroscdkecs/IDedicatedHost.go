package alicloudroscdkecs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/internal"
)

// Represents a `DedicatedHost`.
type IDedicatedHost interface {
	alicloudroscdkcore.IResource
	// Attribute DedicatedHostIds: The host id list of created hosts.
	AttrDedicatedHostIds() interface{}
	// Attribute OrderId: The order id list of created instance.
	AttrOrderId() interface{}
	Props() *DedicatedHostProps
}

// The jsii proxy for IDedicatedHost
type jsiiProxy_IDedicatedHost struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDedicatedHost) AttrDedicatedHostIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDedicatedHostIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDedicatedHost) AttrOrderId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOrderId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDedicatedHost) Props() *DedicatedHostProps {
	var returns *DedicatedHostProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

