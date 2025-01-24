package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/datasource/internal"
)

// Represents a `DedicatedHosts`.
type IDedicatedHosts interface {
	alicloudroscdkcore.IResource
	// Attribute DedicatedHostIds: The list of dedicated host ids.
	AttrDedicatedHostIds() interface{}
	// Attribute DedicatedHosts: The list of dedicated hosts.
	AttrDedicatedHosts() interface{}
	Props() *DedicatedHostsProps
}

// The jsii proxy for IDedicatedHosts
type jsiiProxy_IDedicatedHosts struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDedicatedHosts) AttrDedicatedHostIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDedicatedHostIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDedicatedHosts) AttrDedicatedHosts() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDedicatedHosts",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDedicatedHosts) Props() *DedicatedHostsProps {
	var returns *DedicatedHostsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

