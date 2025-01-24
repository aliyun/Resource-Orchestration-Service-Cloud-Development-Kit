package alicloudroscdkddospro

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkddospro/internal"
)

// Represents a `Port`.
type IPort interface {
	alicloudroscdkcore.IResource
	// Attribute FrontendPort: The forwarding port.
	AttrFrontendPort() interface{}
	Props() *PortProps
}

// The jsii proxy for IPort
type jsiiProxy_IPort struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IPort) AttrFrontendPort() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFrontendPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPort) Props() *PortProps {
	var returns *PortProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

