package alicloudroscdkcen

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcen/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `TransitRouterRouteTablePropagation`.
type ITransitRouterRouteTablePropagation interface {
	alicloudroscdkcore.IResource
	// Attribute ResourceId: ResourceId.
	AttrResourceId() interface{}
	// Attribute ResourceType: ResourceType.
	AttrResourceType() interface{}
	// Attribute TransitRouterAttachmentId: TransitRouterAttachmentId.
	AttrTransitRouterAttachmentId() interface{}
	// Attribute TransitRouterRouteTableId: TransitRouterRouteTableId.
	AttrTransitRouterRouteTableId() interface{}
	Props() *TransitRouterRouteTablePropagationProps
}

// The jsii proxy for ITransitRouterRouteTablePropagation
type jsiiProxy_ITransitRouterRouteTablePropagation struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ITransitRouterRouteTablePropagation) AttrResourceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITransitRouterRouteTablePropagation) AttrResourceType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITransitRouterRouteTablePropagation) AttrTransitRouterAttachmentId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTransitRouterAttachmentId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITransitRouterRouteTablePropagation) AttrTransitRouterRouteTableId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTransitRouterRouteTableId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITransitRouterRouteTablePropagation) Props() *TransitRouterRouteTablePropagationProps {
	var returns *TransitRouterRouteTablePropagationProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

