package alicloudroscdkpvtz

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkpvtz/internal"
)

// Represents a `ZoneVpcBinder`.
type IZoneVpcBinder interface {
	alicloudroscdkcore.IResource
	// Attribute Vpcs: Vpc list.
	AttrVpcs() interface{}
	// Attribute ZoneId: Zone Id.
	AttrZoneId() interface{}
	Props() *ZoneVpcBinderProps
}

// The jsii proxy for IZoneVpcBinder
type jsiiProxy_IZoneVpcBinder struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IZoneVpcBinder) AttrVpcs() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpcs",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IZoneVpcBinder) AttrZoneId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrZoneId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IZoneVpcBinder) Props() *ZoneVpcBinderProps {
	var returns *ZoneVpcBinderProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

