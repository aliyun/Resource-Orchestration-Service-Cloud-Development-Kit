package alicloudroscdkcen

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcen/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `TransitRouterVpnAttachment`.
type ITransitRouterVpnAttachment interface {
	alicloudroscdkcore.IResource
	// Attribute TransitRouterAttachmentId: The ID of the VPN connection.
	AttrTransitRouterAttachmentId() interface{}
	Props() *TransitRouterVpnAttachmentProps
}

// The jsii proxy for ITransitRouterVpnAttachment
type jsiiProxy_ITransitRouterVpnAttachment struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ITransitRouterVpnAttachment) AttrTransitRouterAttachmentId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTransitRouterAttachmentId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITransitRouterVpnAttachment) Props() *TransitRouterVpnAttachmentProps {
	var returns *TransitRouterVpnAttachmentProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

