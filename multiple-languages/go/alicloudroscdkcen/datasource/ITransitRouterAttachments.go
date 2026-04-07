package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcen/datasource/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `TransitRouterAttachments`.
type ITransitRouterAttachments interface {
	alicloudroscdkcore.IResource
	// Attribute TransitRouterAttachmentIds: The list of The TransitRouterAttachment IDs.
	AttrTransitRouterAttachmentIds() interface{}
	// Attribute TransitRouterAttachments: The information about TransitRouterAttachments.
	AttrTransitRouterAttachments() interface{}
	Props() *TransitRouterAttachmentsProps
}

// The jsii proxy for ITransitRouterAttachments
type jsiiProxy_ITransitRouterAttachments struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ITransitRouterAttachments) AttrTransitRouterAttachmentIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTransitRouterAttachmentIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITransitRouterAttachments) AttrTransitRouterAttachments() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTransitRouterAttachments",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITransitRouterAttachments) Props() *TransitRouterAttachmentsProps {
	var returns *TransitRouterAttachmentsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

