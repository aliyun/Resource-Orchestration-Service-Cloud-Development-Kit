package alicloudroscdkvpc

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/internal"
)

// Represents a `RouteTableWithGatewayAssociation`.
type IRouteTableWithGatewayAssociation interface {
	alicloudroscdkcore.IResource
	// Attribute GatewayId: The ID of the IPv4 gateway that is to be associated.
	AttrGatewayId() interface{}
	// Attribute RouteTableId: The ID of route table that gateway is to be bound.
	AttrRouteTableId() interface{}
	Props() *RouteTableWithGatewayAssociationProps
}

// The jsii proxy for IRouteTableWithGatewayAssociation
type jsiiProxy_IRouteTableWithGatewayAssociation struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IRouteTableWithGatewayAssociation) AttrGatewayId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGatewayId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRouteTableWithGatewayAssociation) AttrRouteTableId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRouteTableId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRouteTableWithGatewayAssociation) Props() *RouteTableWithGatewayAssociationProps {
	var returns *RouteTableWithGatewayAssociationProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

