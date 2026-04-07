package alicloudroscdkvpc

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/internal"
)

// Represents a `RouteTableAttachment`.
type IRouteTableAttachment interface {
	alicloudroscdkcore.IResource
	// Attribute RouteTableId: The ID of the route table.
	AttrRouteTableId() interface{}
	// Attribute VSwitchId: The ID of the VSwitch to bind the route table.
	AttrVSwitchId() interface{}
	Props() *RouteTableAttachmentProps
}

// The jsii proxy for IRouteTableAttachment
type jsiiProxy_IRouteTableAttachment struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IRouteTableAttachment) AttrRouteTableId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRouteTableId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRouteTableAttachment) AttrVSwitchId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVSwitchId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRouteTableAttachment) Props() *RouteTableAttachmentProps {
	var returns *RouteTableAttachmentProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

