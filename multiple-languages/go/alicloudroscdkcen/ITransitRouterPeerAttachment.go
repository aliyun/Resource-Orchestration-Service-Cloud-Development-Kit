package alicloudroscdkcen

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcen/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `TransitRouterPeerAttachment`.
type ITransitRouterPeerAttachment interface {
	alicloudroscdkcore.IResource
	// Attribute TransitRouterAttachmentId: Cross-region connection ID.
	AttrTransitRouterAttachmentId() interface{}
	Props() *TransitRouterPeerAttachmentProps
}

// The jsii proxy for ITransitRouterPeerAttachment
type jsiiProxy_ITransitRouterPeerAttachment struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ITransitRouterPeerAttachment) AttrTransitRouterAttachmentId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTransitRouterAttachmentId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITransitRouterPeerAttachment) Props() *TransitRouterPeerAttachmentProps {
	var returns *TransitRouterPeerAttachmentProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

