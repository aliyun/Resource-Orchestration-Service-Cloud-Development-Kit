package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcen/datasource/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `TransitRouterRouteTables`.
type ITransitRouterRouteTables interface {
	alicloudroscdkcore.IResource
	// Attribute TransitRouterRouteTableIds: The list of TransitRouterRouteTable IDs.
	AttrTransitRouterRouteTableIds() interface{}
	// Attribute TransitRouterRouteTables: The list of TransitRouterRouteTables.
	AttrTransitRouterRouteTables() interface{}
	Props() *TransitRouterRouteTablesProps
}

// The jsii proxy for ITransitRouterRouteTables
type jsiiProxy_ITransitRouterRouteTables struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ITransitRouterRouteTables) AttrTransitRouterRouteTableIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTransitRouterRouteTableIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITransitRouterRouteTables) AttrTransitRouterRouteTables() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTransitRouterRouteTables",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITransitRouterRouteTables) Props() *TransitRouterRouteTablesProps {
	var returns *TransitRouterRouteTablesProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

