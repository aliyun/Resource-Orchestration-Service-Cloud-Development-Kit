package alicloudroscdkarms

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkarms/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `Rum`.
type IRum interface {
	alicloudroscdkcore.IResource
	// Attribute CdnDomain: The CDN domain of the RUM application.
	AttrCdnDomain() interface{}
	// Attribute Endpoint: The endpoint of the RUM application.
	AttrEndpoint() interface{}
	// Attribute Pid: The PID of the RUM application.
	AttrPid() interface{}
	Props() *RumProps
}

// The jsii proxy for IRum
type jsiiProxy_IRum struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IRum) AttrCdnDomain() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCdnDomain",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRum) AttrEndpoint() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEndpoint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRum) AttrPid() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPid",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRum) Props() *RumProps {
	var returns *RumProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

