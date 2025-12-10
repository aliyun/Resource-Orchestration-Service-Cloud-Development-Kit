package alicloudroscdkmse

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkmse/internal"
)

// Represents a `GatewayRoute`.
type IGatewayRoute interface {
	alicloudroscdkcore.IResource
	// Attribute RouteId: The ID of the route.
	AttrRouteId() interface{}
	Props() *GatewayRouteProps
}

// The jsii proxy for IGatewayRoute
type jsiiProxy_IGatewayRoute struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IGatewayRoute) AttrRouteId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRouteId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IGatewayRoute) Props() *GatewayRouteProps {
	var returns *GatewayRouteProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

