package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/datasource/internal"
)

// Represents a `RouteTables`.
type IRouteTables interface {
	alicloudroscdkcore.IResource
	// Attribute RouteTableIds: the list of the route table ids.
	AttrRouteTableIds() interface{}
	// Attribute RouteTables: The list of The route tables.
	AttrRouteTables() interface{}
	Props() *RouteTablesProps
}

// The jsii proxy for IRouteTables
type jsiiProxy_IRouteTables struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IRouteTables) AttrRouteTableIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRouteTableIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRouteTables) AttrRouteTables() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRouteTables",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRouteTables) Props() *RouteTablesProps {
	var returns *RouteTablesProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

