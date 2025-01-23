package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkdirectmail/datasource/internal"
)

// Represents a `Ipfilters`.
type IIpfilters interface {
	alicloudroscdkcore.IResource
	// Attribute IpfilterIds: The list of ip filter IDs.
	AttrIpfilterIds() interface{}
	// Attribute Ipfilters: The list of ip filters.
	AttrIpfilters() interface{}
	Props() *IpfiltersProps
}

// The jsii proxy for IIpfilters
type jsiiProxy_IIpfilters struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IIpfilters) AttrIpfilterIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIpfilterIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IIpfilters) AttrIpfilters() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIpfilters",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IIpfilters) Props() *IpfiltersProps {
	var returns *IpfiltersProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

