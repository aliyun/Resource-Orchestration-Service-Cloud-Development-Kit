package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkapig/datasource/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `Routes`.
type IRoutes interface {
	alicloudroscdkcore.IResource
	// Attribute RouteIds: The list of route IDs.
	AttrRouteIds() interface{}
	// Attribute Routes: The list of routes.
	AttrRoutes() interface{}
	Props() *RoutesProps
}

// The jsii proxy for IRoutes
type jsiiProxy_IRoutes struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IRoutes) AttrRouteIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRouteIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRoutes) AttrRoutes() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRoutes",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRoutes) Props() *RoutesProps {
	var returns *RoutesProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

