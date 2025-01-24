package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkdirectmail/datasource/internal"
)

// Represents a `Ipfilter`.
type IIpfilter interface {
	alicloudroscdkcore.IResource
	// Attribute CreateTime: The creation time of the resource.
	AttrCreateTime() interface{}
	// Attribute IpAddress: The IP address of the resource.
	AttrIpAddress() interface{}
	// Attribute IpfilterId: The ID of the resource.
	AttrIpfilterId() interface{}
	Props() *IpfilterProps
}

// The jsii proxy for IIpfilter
type jsiiProxy_IIpfilter struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IIpfilter) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IIpfilter) AttrIpAddress() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIpAddress",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IIpfilter) AttrIpfilterId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIpfilterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IIpfilter) Props() *IpfilterProps {
	var returns *IpfilterProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

