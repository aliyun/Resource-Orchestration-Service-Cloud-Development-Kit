package alicloudroscdkcen

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcen/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `TransitRouterVbrAttachment`.
type ITransitRouterVbrAttachment interface {
	alicloudroscdkcore.IResource
	// Attribute AutoPublishRouteEnabled: AutoPublishRouteEnabled.
	AttrAutoPublishRouteEnabled() interface{}
	// Attribute CenId: CenId.
	AttrCenId() interface{}
	// Attribute ClientToken: ClientToken.
	AttrClientToken() interface{}
	// Attribute ResourceType: ResourceType.
	AttrResourceType() interface{}
	// Attribute TransitRouterAttachmentDescription: TransitRouterAttachmentDescription.
	AttrTransitRouterAttachmentDescription() interface{}
	// Attribute TransitRouterAttachmentId: The first ID of the resource.
	AttrTransitRouterAttachmentId() interface{}
	// Attribute TransitRouterAttachmentName: TransitRouterAttachmentName.
	AttrTransitRouterAttachmentName() interface{}
	// Attribute TransitRouterId: TransitRouterId.
	AttrTransitRouterId() interface{}
	// Attribute VbrId: VbrId.
	AttrVbrId() interface{}
	// Attribute VbrOwnerId: VbrOwnerId.
	AttrVbrOwnerId() interface{}
	Props() *TransitRouterVbrAttachmentProps
}

// The jsii proxy for ITransitRouterVbrAttachment
type jsiiProxy_ITransitRouterVbrAttachment struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ITransitRouterVbrAttachment) AttrAutoPublishRouteEnabled() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAutoPublishRouteEnabled",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITransitRouterVbrAttachment) AttrCenId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCenId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITransitRouterVbrAttachment) AttrClientToken() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrClientToken",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITransitRouterVbrAttachment) AttrResourceType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITransitRouterVbrAttachment) AttrTransitRouterAttachmentDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTransitRouterAttachmentDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITransitRouterVbrAttachment) AttrTransitRouterAttachmentId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTransitRouterAttachmentId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITransitRouterVbrAttachment) AttrTransitRouterAttachmentName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTransitRouterAttachmentName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITransitRouterVbrAttachment) AttrTransitRouterId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTransitRouterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITransitRouterVbrAttachment) AttrVbrId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVbrId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITransitRouterVbrAttachment) AttrVbrOwnerId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVbrOwnerId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITransitRouterVbrAttachment) Props() *TransitRouterVbrAttachmentProps {
	var returns *TransitRouterVbrAttachmentProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

