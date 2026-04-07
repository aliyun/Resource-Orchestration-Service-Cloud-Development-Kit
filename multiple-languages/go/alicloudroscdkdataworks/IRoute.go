package alicloudroscdkdataworks

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkdataworks/internal"
)

// Represents a `Route`.
type IRoute interface {
	alicloudroscdkcore.IResource
	// Attribute CreateTime: Time when route information was created.
	AttrCreateTime() interface{}
	// Attribute DestinationCidr: The CIDR blocks of the destination-based route.
	AttrDestinationCidr() interface{}
	// Attribute DwResourceGroupId: ID of the resource group to which the route belongs.
	AttrDwResourceGroupId() interface{}
	// Attribute NetworkId: The ID of the network resource to which the route belongs.
	AttrNetworkId() interface{}
	// Attribute ResourceId: Identifier of the network resource to which the route belongs.
	AttrResourceId() interface{}
	// Attribute RouteId: The route ID.
	AttrRouteId() interface{}
	Props() *RouteProps
}

// The jsii proxy for IRoute
type jsiiProxy_IRoute struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IRoute) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRoute) AttrDestinationCidr() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDestinationCidr",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRoute) AttrDwResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDwResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRoute) AttrNetworkId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNetworkId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRoute) AttrResourceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceId",
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

func (j *jsiiProxy_IRoute) Props() *RouteProps {
	var returns *RouteProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

