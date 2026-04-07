package alicloudroscdkdns

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkdns/internal"
)

// Represents a `CustomLine`.
type ICustomLine interface {
	alicloudroscdkcore.IResource
	// Attribute LineId: The ID of the custom line.
	AttrLineId() interface{}
	Props() *CustomLineProps
}

// The jsii proxy for ICustomLine
type jsiiProxy_ICustomLine struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ICustomLine) AttrLineId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLineId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICustomLine) Props() *CustomLineProps {
	var returns *CustomLineProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

