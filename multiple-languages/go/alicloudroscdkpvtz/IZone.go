package alicloudroscdkpvtz

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkpvtz/internal"
)

// Represents a `Zone`.
type IZone interface {
	alicloudroscdkcore.IResource
	// Attribute ZoneId: Zone ID.
	AttrZoneId() interface{}
	// Attribute ZoneName: Zone name.
	AttrZoneName() interface{}
	// Attribute ZoneTag: Zone label.
	AttrZoneTag() interface{}
	// Attribute ZoneType: Zone type.
	AttrZoneType() interface{}
	Props() *ZoneProps
}

// The jsii proxy for IZone
type jsiiProxy_IZone struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IZone) AttrZoneId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrZoneId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IZone) AttrZoneName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrZoneName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IZone) AttrZoneTag() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrZoneTag",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IZone) AttrZoneType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrZoneType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IZone) Props() *ZoneProps {
	var returns *ZoneProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

