package alicloudroscdkcen

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcen/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `TransitRouterRouteTableAssociationReplacement`.
type ITransitRouterRouteTableAssociationReplacement interface {
	alicloudroscdkcore.IResource
	// Attribute OriginalTransitRouterRouteTableId: The original transit router route table ID before replacement.
	AttrOriginalTransitRouterRouteTableId() interface{}
	Props() *TransitRouterRouteTableAssociationReplacementProps
}

// The jsii proxy for ITransitRouterRouteTableAssociationReplacement
type jsiiProxy_ITransitRouterRouteTableAssociationReplacement struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ITransitRouterRouteTableAssociationReplacement) AttrOriginalTransitRouterRouteTableId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOriginalTransitRouterRouteTableId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITransitRouterRouteTableAssociationReplacement) Props() *TransitRouterRouteTableAssociationReplacementProps {
	var returns *TransitRouterRouteTableAssociationReplacementProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

