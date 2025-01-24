package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcen/datasource/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `TransitRouters`.
type ITransitRouters interface {
	alicloudroscdkcore.IResource
	// Attribute TransitRouterIds: The list of TransitRouter IDs.
	AttrTransitRouterIds() interface{}
	// Attribute TransitRouters: The list of TransitRouters.
	AttrTransitRouters() interface{}
	Props() *TransitRoutersProps
}

// The jsii proxy for ITransitRouters
type jsiiProxy_ITransitRouters struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ITransitRouters) AttrTransitRouterIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTransitRouterIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITransitRouters) AttrTransitRouters() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTransitRouters",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITransitRouters) Props() *TransitRoutersProps {
	var returns *TransitRoutersProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

