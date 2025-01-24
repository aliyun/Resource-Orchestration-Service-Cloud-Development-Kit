package alicloudroscdkcen

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcen/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `ChildInstanceRouteEntryToAttachment`.
type IChildInstanceRouteEntryToAttachment interface {
	alicloudroscdkcore.IResource
	// Attribute CenId: The ID of the CEN instance.
	AttrCenId() interface{}
	// Attribute DestinationCidrBlock: The destination CIDR block of the route.
	AttrDestinationCidrBlock() interface{}
	// Attribute RouteTableId: The ID of the route table configured on the network instance.
	AttrRouteTableId() interface{}
	// Attribute TransitRouterAttachmentId: The ID of the network instance connection.
	AttrTransitRouterAttachmentId() interface{}
	Props() *ChildInstanceRouteEntryToAttachmentProps
}

// The jsii proxy for IChildInstanceRouteEntryToAttachment
type jsiiProxy_IChildInstanceRouteEntryToAttachment struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IChildInstanceRouteEntryToAttachment) AttrCenId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCenId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IChildInstanceRouteEntryToAttachment) AttrDestinationCidrBlock() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDestinationCidrBlock",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IChildInstanceRouteEntryToAttachment) AttrRouteTableId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRouteTableId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IChildInstanceRouteEntryToAttachment) AttrTransitRouterAttachmentId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTransitRouterAttachmentId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IChildInstanceRouteEntryToAttachment) Props() *ChildInstanceRouteEntryToAttachmentProps {
	var returns *ChildInstanceRouteEntryToAttachmentProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

