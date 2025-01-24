package alicloudroscdkcen

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcen/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `TransitRouter`.
type ITransitRouter interface {
	alicloudroscdkcore.IResource
	// Attribute AliUid: AliUid.
	AttrAliUid() interface{}
	// Attribute CenId: CenId.
	AttrCenId() interface{}
	// Attribute SystemTransitRouterRouteTableId: The system route table ID of transit router.
	AttrSystemTransitRouterRouteTableId() interface{}
	// Attribute TransitRouterDescription: TransitRouterDescription.
	AttrTransitRouterDescription() interface{}
	// Attribute TransitRouterId: TransitRouterId.
	AttrTransitRouterId() interface{}
	// Attribute TransitRouterName: TransitRouterName.
	AttrTransitRouterName() interface{}
	// Attribute Type: Type.
	AttrType() interface{}
	Props() *TransitRouterProps
}

// The jsii proxy for ITransitRouter
type jsiiProxy_ITransitRouter struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ITransitRouter) AttrAliUid() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAliUid",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITransitRouter) AttrCenId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCenId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITransitRouter) AttrSystemTransitRouterRouteTableId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSystemTransitRouterRouteTableId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITransitRouter) AttrTransitRouterDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTransitRouterDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITransitRouter) AttrTransitRouterId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTransitRouterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITransitRouter) AttrTransitRouterName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTransitRouterName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITransitRouter) AttrType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITransitRouter) Props() *TransitRouterProps {
	var returns *TransitRouterProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

