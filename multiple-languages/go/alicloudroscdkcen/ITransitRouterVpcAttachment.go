package alicloudroscdkcen

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcen/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `TransitRouterVpcAttachment`.
type ITransitRouterVpcAttachment interface {
	alicloudroscdkcore.IResource
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
	// Attribute VpcId: VpcId.
	AttrVpcId() interface{}
	// Attribute VpcOwnerId: VpcOwnerId.
	AttrVpcOwnerId() interface{}
	Props() *TransitRouterVpcAttachmentProps
}

// The jsii proxy for ITransitRouterVpcAttachment
type jsiiProxy_ITransitRouterVpcAttachment struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ITransitRouterVpcAttachment) AttrCenId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCenId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITransitRouterVpcAttachment) AttrClientToken() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrClientToken",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITransitRouterVpcAttachment) AttrResourceType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITransitRouterVpcAttachment) AttrTransitRouterAttachmentDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTransitRouterAttachmentDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITransitRouterVpcAttachment) AttrTransitRouterAttachmentId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTransitRouterAttachmentId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITransitRouterVpcAttachment) AttrTransitRouterAttachmentName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTransitRouterAttachmentName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITransitRouterVpcAttachment) AttrTransitRouterId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTransitRouterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITransitRouterVpcAttachment) AttrVpcId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITransitRouterVpcAttachment) AttrVpcOwnerId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpcOwnerId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITransitRouterVpcAttachment) Props() *TransitRouterVpcAttachmentProps {
	var returns *TransitRouterVpcAttachmentProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

