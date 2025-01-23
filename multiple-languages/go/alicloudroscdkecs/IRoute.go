package alicloudroscdkecs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/internal"
)

// Represents a `Route`.
type IRoute interface {
	alicloudroscdkcore.IResource
	// Attribute RouteEntryId: The ID of the route entry.
	AttrRouteEntryId() interface{}
	Props() *RouteProps
}

// The jsii proxy for IRoute
type jsiiProxy_IRoute struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IRoute) AttrRouteEntryId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRouteEntryId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRoute) Props() *RouteProps {
	var returns *RouteProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

