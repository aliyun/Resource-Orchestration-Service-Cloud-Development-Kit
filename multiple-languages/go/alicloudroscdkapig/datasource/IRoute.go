package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkapig/datasource/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `Route`.
type IRoute interface {
	alicloudroscdkcore.IResource
	// Attribute Backend: backend services.
	AttrBackend() interface{}
	// Attribute Description: description of route resource.
	AttrDescription() interface{}
	// Attribute DomainInfos: domain items.
	AttrDomainInfos() interface{}
	// Attribute EnvironmentInfo: environment information.
	AttrEnvironmentInfo() interface{}
	// Attribute Match: the match rule of route resource.
	AttrMatch() interface{}
	// Attribute RouteId: The ID of route resource.
	AttrRouteId() interface{}
	// Attribute RouteName: The name of the route.
	AttrRouteName() interface{}
	Props() *RouteProps
}

// The jsii proxy for IRoute
type jsiiProxy_IRoute struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IRoute) AttrBackend() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBackend",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRoute) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRoute) AttrDomainInfos() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDomainInfos",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRoute) AttrEnvironmentInfo() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEnvironmentInfo",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRoute) AttrMatch() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMatch",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRoute) AttrRouteId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRouteId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRoute) AttrRouteName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRouteName",
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

