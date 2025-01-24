package alicloudroscdkcen

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcen/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `TransitRouterRouteTableAssociation`.
type ITransitRouterRouteTableAssociation interface {
	alicloudroscdkcore.IResource
	// Attribute ResourceId: ResourceId.
	AttrResourceId() interface{}
	// Attribute ResourceType: ResourceType.
	AttrResourceType() interface{}
	// Attribute TransitRouterAttachmentId: TransitRouterAttachmentId.
	AttrTransitRouterAttachmentId() interface{}
	// Attribute TransitRouterRouteTableId: TransitRouterRouteTableId.
	AttrTransitRouterRouteTableId() interface{}
	Props() *TransitRouterRouteTableAssociationProps
}

// The jsii proxy for ITransitRouterRouteTableAssociation
type jsiiProxy_ITransitRouterRouteTableAssociation struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ITransitRouterRouteTableAssociation) AttrResourceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITransitRouterRouteTableAssociation) AttrResourceType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITransitRouterRouteTableAssociation) AttrTransitRouterAttachmentId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTransitRouterAttachmentId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITransitRouterRouteTableAssociation) AttrTransitRouterRouteTableId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTransitRouterRouteTableId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITransitRouterRouteTableAssociation) Props() *TransitRouterRouteTableAssociationProps {
	var returns *TransitRouterRouteTableAssociationProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

