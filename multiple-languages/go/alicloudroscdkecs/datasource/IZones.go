package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/datasource/internal"
)

// Represents a `Zones`.
type IZones interface {
	alicloudroscdkcore.IResource
	// Attribute ZoneIds: The list of zone IDs.
	AttrZoneIds() interface{}
	// Attribute Zones: The list of zones.
	AttrZones() interface{}
	Props() *ZonesProps
}

// The jsii proxy for IZones
type jsiiProxy_IZones struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IZones) AttrZoneIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrZoneIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IZones) AttrZones() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrZones",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IZones) Props() *ZonesProps {
	var returns *ZonesProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

