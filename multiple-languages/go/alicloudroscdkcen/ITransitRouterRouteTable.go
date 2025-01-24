package alicloudroscdkcen

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcen/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `TransitRouterRouteTable`.
type ITransitRouterRouteTable interface {
	alicloudroscdkcore.IResource
	// Attribute ClientToken: ClientToken.
	AttrClientToken() interface{}
	// Attribute TransitRouterId: TransitRouterId.
	AttrTransitRouterId() interface{}
	// Attribute TransitRouterRouteTableDescription: TransitRouterRouteTableDescription.
	AttrTransitRouterRouteTableDescription() interface{}
	// Attribute TransitRouterRouteTableId: TransitRouterRouteTableId.
	AttrTransitRouterRouteTableId() interface{}
	// Attribute TransitRouterRouteTableName: TransitRouterRouteTableName.
	AttrTransitRouterRouteTableName() interface{}
	// Attribute TransitRouterRouteTableType: TransitRouterRouteTableType.
	AttrTransitRouterRouteTableType() interface{}
	Props() *TransitRouterRouteTableProps
}

// The jsii proxy for ITransitRouterRouteTable
type jsiiProxy_ITransitRouterRouteTable struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ITransitRouterRouteTable) AttrClientToken() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrClientToken",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITransitRouterRouteTable) AttrTransitRouterId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTransitRouterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITransitRouterRouteTable) AttrTransitRouterRouteTableDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTransitRouterRouteTableDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITransitRouterRouteTable) AttrTransitRouterRouteTableId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTransitRouterRouteTableId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITransitRouterRouteTable) AttrTransitRouterRouteTableName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTransitRouterRouteTableName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITransitRouterRouteTable) AttrTransitRouterRouteTableType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTransitRouterRouteTableType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITransitRouterRouteTable) Props() *TransitRouterRouteTableProps {
	var returns *TransitRouterRouteTableProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

