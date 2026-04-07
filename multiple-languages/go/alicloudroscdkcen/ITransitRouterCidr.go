package alicloudroscdkcen

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcen/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `TransitRouterCidr`.
type ITransitRouterCidr interface {
	alicloudroscdkcore.IResource
	// Attribute Cidr: The CIDR block of the transit router.
	AttrCidr() interface{}
	// Attribute Description: The new description of the transit router CIDR block.
	AttrDescription() interface{}
	// Attribute Family: The type of the CIDR block.
	AttrFamily() interface{}
	// Attribute PublishCidrRoute: Specifies whether to allow the system to automatically add a route that points to the CIDR block to the route table of the transit router.
	AttrPublishCidrRoute() interface{}
	// Attribute TransitRouterCidrId: The ID of the CIDR block.
	AttrTransitRouterCidrId() interface{}
	// Attribute TransitRouterCidrName: The new name of the transit router CIDR block.
	AttrTransitRouterCidrName() interface{}
	// Attribute TransitRouterId: The ID of the transit router.
	AttrTransitRouterId() interface{}
	Props() *TransitRouterCidrProps
}

// The jsii proxy for ITransitRouterCidr
type jsiiProxy_ITransitRouterCidr struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ITransitRouterCidr) AttrCidr() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCidr",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITransitRouterCidr) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITransitRouterCidr) AttrFamily() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFamily",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITransitRouterCidr) AttrPublishCidrRoute() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPublishCidrRoute",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITransitRouterCidr) AttrTransitRouterCidrId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTransitRouterCidrId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITransitRouterCidr) AttrTransitRouterCidrName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTransitRouterCidrName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITransitRouterCidr) AttrTransitRouterId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTransitRouterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITransitRouterCidr) Props() *TransitRouterCidrProps {
	var returns *TransitRouterCidrProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

