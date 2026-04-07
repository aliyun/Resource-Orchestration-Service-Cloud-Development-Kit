package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcen/datasource/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `TransitRouterPeerAttachments`.
type ITransitRouterPeerAttachments interface {
	alicloudroscdkcore.IResource
	// Attribute TransitRouterPeerAttachmentIds: The list of The TransitRouterPeerAttachment IDs.
	AttrTransitRouterPeerAttachmentIds() interface{}
	// Attribute TransitRouterPeerAttachments: The information about TransitRouterPeerAttachments.
	AttrTransitRouterPeerAttachments() interface{}
	Props() *TransitRouterPeerAttachmentsProps
}

// The jsii proxy for ITransitRouterPeerAttachments
type jsiiProxy_ITransitRouterPeerAttachments struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ITransitRouterPeerAttachments) AttrTransitRouterPeerAttachmentIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTransitRouterPeerAttachmentIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITransitRouterPeerAttachments) AttrTransitRouterPeerAttachments() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTransitRouterPeerAttachments",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITransitRouterPeerAttachments) Props() *TransitRouterPeerAttachmentsProps {
	var returns *TransitRouterPeerAttachmentsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

