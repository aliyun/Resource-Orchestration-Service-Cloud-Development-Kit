package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcen/datasource/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `CenRouteMaps`.
type ICenRouteMaps interface {
	alicloudroscdkcore.IResource
	// Attribute RouteMapIds: The list of The RouteMap ids.
	AttrRouteMapIds() interface{}
	// Attribute RouteMaps: The information about RouteMaps.
	AttrRouteMaps() interface{}
	Props() *CenRouteMapsProps
}

// The jsii proxy for ICenRouteMaps
type jsiiProxy_ICenRouteMaps struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ICenRouteMaps) AttrRouteMapIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRouteMapIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICenRouteMaps) AttrRouteMaps() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRouteMaps",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICenRouteMaps) Props() *CenRouteMapsProps {
	var returns *CenRouteMapsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

