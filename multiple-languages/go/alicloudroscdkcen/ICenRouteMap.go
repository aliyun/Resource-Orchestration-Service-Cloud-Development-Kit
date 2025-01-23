package alicloudroscdkcen

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcen/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `CenRouteMap`.
type ICenRouteMap interface {
	alicloudroscdkcore.IResource
	// Attribute RouteMapId: The ID of the route map.
	AttrRouteMapId() interface{}
	Props() *CenRouteMapProps
}

// The jsii proxy for ICenRouteMap
type jsiiProxy_ICenRouteMap struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ICenRouteMap) AttrRouteMapId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRouteMapId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICenRouteMap) Props() *CenRouteMapProps {
	var returns *CenRouteMapProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

